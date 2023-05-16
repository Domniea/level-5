import React from "react";

function Staff( props ) {
    
    return (
        <div className="Staff">
            <h1>Name: {props.name}</h1>
            <h3>Job: {props.job}</h3>
            <h4>Hair Color: {props.hairColor}</h4>
        </div>
    )
}

export default Staff