import React, { useState } from "react";
import BountyForm from './BountyForm'

function PersonOfIntrest(props) {
    
    const { firstName, lastName, living, bounty, jedi, _id, deleteBounty, submit } = props
    const [editToggle, setEditToggle]= useState(false)
    

    function toggle() {
        setEditToggle(prevState => !prevState)
    }
    
    return (
        <div className="PersonOfInterest">
            { !editToggle ?
                <>
                    <h1>{firstName} {lastName}</h1>
                    <h2>Bounty: {bounty} Credits</h2>
                    <h3>Alive: {living}</h3>
                    <h4>Jedi: {jedi}</h4>
                    <button onClick={() => deleteBounty(_id)}>Delete</button>
                    <button onClick={toggle}>Edit</button>
                </>
                :
                <>
                <BountyForm 
                    {...props}
                    buttonText={'Submit Edit'}
                    submit={submit}
                    // _id={_id}
                    editToggle={editToggle}
                    toggle={toggle}
                />
                <button onClick={toggle}>Close</button>
                </>
            }
            
            
        </div>
    )
}

export default PersonOfIntrest