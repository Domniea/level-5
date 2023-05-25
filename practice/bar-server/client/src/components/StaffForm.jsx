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

    function read(e) {
        console.log(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name" 
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
                required
       
            />
            {/* <select 
                onClick={read}
                value={inputs.job}
                onChange={handleChange}
                name="job"
            >
                <option>- Pick A Position -</option>
                <option value='bartender'>Bartender</option>
                <option value='barback'>Barback</option>
                <option value='door'>Door</option>
                <option value='manager'>Manager</option>
                <option value='maintainance'>Mantainance</option>
                <option value='owner'>Owner</option>
            </select> */}
            <input 
                type="text" 
                name="job"
                placeholder="Job"
                value={inputs.job}
                onChange={handleChange} 
                required
            />
            <input 
                type="text" 
                name="hairColor" 
                placeholder="Hair Color"
                value={inputs.hairColor}
                onChange={handleChange} 
            />
            <button >{props.buttonText}</button>
        </form>
    )
}

export default StaffForm