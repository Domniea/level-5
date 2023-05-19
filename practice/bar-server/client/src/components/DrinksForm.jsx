import React, {useState} from "react";

function DrinksForm(props) {
    const initInputs = {
        type: '',
        cost: ''
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
        props.submitDrinks(inputs, props._id)
        setInputs(initInputs)
    }

    console.log(props.staff)

    return (
        <form >
            <input 
                type="text" 
                name="type" 
                value={inputs.type}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="cost" 
                value={inputs.cost}
                onChange={handleChange} 
            />
            <button onClick={handleSubmit}>{props.buttonText}</button>
        </form>
    )
}

export default DrinksForm