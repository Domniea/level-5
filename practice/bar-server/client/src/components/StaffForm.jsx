import React, {useState} from "react";

function StaffForm(props) {

    const {name, job, hairColor , _id, submit, editToggle, toggle} = props

    const initInputs = {
        name: name || '',
        job: job || '',
        hairColor: hairColor || ''
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
        if(editToggle) {
            toggle()
        }
    }

    return (
        <form >
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
                value={inputs.job}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="hairColor" 
                placeholder="Hair Color"
                value={inputs.hairColor}
                onChange={handleChange} 
            />
            <button onClick={handleSubmit}>{props.buttonText}</button>
        </form>
    )
}

export default StaffForm