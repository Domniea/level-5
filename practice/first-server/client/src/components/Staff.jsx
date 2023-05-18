import React from "react";

function Staff( props ) {

    
    function deleteButton() {
        props.deleteStaff(id)
    }

    return (
        <div className="Staff">
            <h1>Name: {props.name}</h1>
            <h3>Job: {props.job}</h3>
            <h4>Hair Color: {props.hairColor}</h4>
            <button 
                className='delete--button' 
                onClick={() => props.deleteStaff(props._id)}
            >
                Delete
            </button>
        </div>
    )
}

export default Staff