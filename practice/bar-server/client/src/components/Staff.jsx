import React from "react";

function Staff( props ) {
    
    const { name, job, hairColor } = props
    const id = props._id

    return (
        <div className="Staff">
            <h1>Name: {name}</h1>
            <h3>Job: {job}</h3>
            <h4>Hair Color: {hairColor}</h4>
            <button
                onClick={() => props.deleteStaff(id)}>
                delete
            </button>
        </div>
    )
}

export default Staff