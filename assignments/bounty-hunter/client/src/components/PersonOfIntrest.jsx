import React, { useState } from "react";
import BountyForm from './BountyForm'

function PersonOfIntrest(props) {

    const { firstName, lastName, living, bounty, type, _id, deleteBounty, submit, editToggle, toggle} = props

    console.log(submit)
    return (
        <div className="PersonOfInterest">
            { !editToggle ?
                <>
                    <h1>{firstName} {lastName}</h1>
                    <h2>${bounty}</h2>
                    <h3>{living}</h3>
                    <h4>{type}</h4>
                    <button onClick={() => deleteBounty(_id)}>Delete</button>
                    <button onClick={toggle}>Edit</button>
                </>
                :
                <>
                <BountyForm 
                    buttonText={'Submit Edit'}
                    submit={submit}
                    _id={_id}
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