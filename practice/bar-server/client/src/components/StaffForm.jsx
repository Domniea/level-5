import React, {useState} from "react";

function StaffForm(props) {
    const initInputs = {
        name: props.name || '',
        job: props.job || '',
        hairColor: props.hairColor || ''
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
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name" 
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="job"
                placeholder="Job"
                value={inputs.job ||''}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="hairColor" 
                value={inputs.hairColor || ''}
                onChange={handleChange} 
            />
            <button >{props.buttonText}</button>
        </form>
    )
}

export default StaffForm