import React, {useState} from "react";

function StaffForm(props) {
    const initInputs = {
        name: '',
        job: '',
        hairColor: ''
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
        props.submitStaff(inputs)
        setInputs(initInputs)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={inputs.name}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="job" 
                value={inputs.job}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="hairColor" 
                value={inputs.hairColor}
                onChange={handleChange} 
            />
            <button onClick={() => handleSubmit}>{props.buttonText}</button>
        </form>
    )
}

export default StaffForm