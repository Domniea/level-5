import React from "react";

function Drinks( props )  {
    return(
        <>
            <div className="Drinks">
                <h1>{props.type}</h1>
                <h3>{props.cost}</h3>
            </div>
        </>
    )
}

export default Drinks