import React from "react";

function Drinks( props )  {

    const { type, cost, _id, deleteDrink } = props
    // console.log(_id)
    return (
            <div className="Drinks">
                <h1>Type: {type}</h1>
                <h3>Cost: ${cost}</h3>
                <button 
                    className="delete--button" 
                    onClick={()=> deleteDrink(_id)} 
                >
                    Delete
                </button>
            </div>
    )
}

export default Drinks