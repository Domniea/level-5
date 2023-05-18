import React from "react";

function Drinks( props )  {

    const {type, cost} = props

    const id = props._id

    return(
        <>
            <div className="Drinks">
                <h1>Type: {type}</h1>
                <h3>Cost: ${cost}</h3>
                <button
                onClick={() => props.deleteDrink(id)}>
                    Delete
                </button>
            </div>
        </>
    )
}

export default Drinks