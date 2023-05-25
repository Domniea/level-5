import React, {useState} from "react";

function DrinksForm(props) {

    const {type, cost, _id, submit, editToggle, toggle} = props

    const initInputs = {
        type: type || '',
        cost: cost || ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState => {
          return (
            {
                ...prevState,
                [name]: value
            }
          )
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initInputs)
        if(editToggle){
            toggle()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="type" 
                placeholder="Type"
                value={inputs.type}
                onChange={handleChange}
                required 
            />
            <input 
                type="text" 
                name="cost" 
                placeholder="Cost"
                value={inputs.cost}
                onChange={handleChange} 
                required
            />
            <button>{props.buttonText}</button>
        </form>
    )
}

export default DrinksForm