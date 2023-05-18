import React, {useState} from "react";

function DrinkForm(props) {
    
    const initInputs = {
        type: '',
        cost: ''
    }

    const [inputs, setInputs] = useState(initInputs)


    function handleChange(e) {
        e.preventDefault()
        const { name, value} = e.target
        setInputs( prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmmit(e) {
        e.preventDefault()
        props.addDrink(inputs)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmmit}>
            <input 
                type="text" 
                name="type" 
                value={inputs.type} 
                placeholder="Type" 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="cost" 
                value={inputs.cost} 
                placeholder="Cost" 
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default DrinkForm