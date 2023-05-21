import React , {useState} from "react";

function BountyForm() {
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

    function submit(e) {
        e.preventDefault()
        console.log(inputs)
        setInputs(initInputs)
    }

    return (
        <>
            <form 
                className="Form"
                onSubmit={submit}
            >
                <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name"
                    value={inputs.firstName} 
                    onChange={handleChange}
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
                />
                <input 
                    type="text" 
                    name="type"
                    placeholder="Jedi or Sith"
                    value={inputs.type} 
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default BountyForm