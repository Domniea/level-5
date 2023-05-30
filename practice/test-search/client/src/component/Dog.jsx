import React from "react";

function Dog(props) {
    return (
        <>
        <div className="Dog">
            <h1>{props.name}</h1>
            <h2>{props.breed}</h2>
            <h3>{props.age}</h3>
        </div>
        </>
    )
}

export default Dog