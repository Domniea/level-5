import React , {useState} from "react";

function BountyForm(props) {

    const { submit , buttonText, _id, editToggle, toggle } = props

    const initInputs = {
        firstName: "", 
        lastName: "", 
        living: "", 
        bounty: "", 
        type: ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState =>  ({
            ...prevState,
            [name]: value
        }))
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
        <>
            <form 
                className="Form"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name"
                    value={inputs.firstName} 
                    onChange={handleChange}
                    required
                    minLength={3}
                />
                <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name"
                    value={inputs.lastName} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="living"
                    placeholder="Living"
                    value={inputs.living} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="bounty"
                    placeholder="Bounty"
                    value={inputs.bounty} 
                    onChange={handleChange}
                    required
                />
                <input 
                    type="text" 
                    name="type"
                    placeholder="Jedi or Sith"
                    value={inputs.type} 
                    onChange={handleChange}
                />
                <button>{buttonText}</button>
            </form>
        </>
    )
}

export default BountyForm