import React, {useState, useEffect} from "react";

function StaffForm(props) {

    const initInputs = 
        {
            name: '',
            job: '',
            hairColor: ''
        }
    

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        e.preventDefault()
        const { name, value} = e.target
        setInputs( prevState => (
            {
            ...prevState,
            [name]: value

        }))
    }
    
    function handleSubmmit(e) {
        e.preventDefault()
        props.addStaff(inputs)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="name"
                value={inputs.name} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="job" 
                placeholder="Job Title"
                value={inputs.job}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="hairColor" 
                placeholder="hair color"
                value={inputs.hairColor} 
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default StaffForm