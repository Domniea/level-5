import React from "react";
import DrinksForm from "./DrinksForm";

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
                <DrinksForm />
            </div>
        </>
    )
}

export default Drinks