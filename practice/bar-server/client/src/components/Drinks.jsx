import React, { useState } from "react";
import DrinksForm from "./DrinksForm";

function Drinks( props )  {

    const { type, cost, _id, editDrinks } = props
    const [editToggle, setEditToggle] = useState(false)

    function toggle() {
        setEditToggle(prevState => !prevState)
    }

    return(
        <>
            <div className="Drinks">
              { !editToggle ?
                <>
                    <h1>Type: {type}</h1>
                    <h3>Cost: ${cost}</h3>
                    <button
                        onClick={() => props.deleteDrink(_id)}
                        className="delete--btn"
                    >
                        Delete
                    </button>
                    <button 
                    onClick={toggle}
                    className="edit--btn"
                    >
                        Edit
                    </button>
                </>
                :
                <>
                    <DrinksForm 
                        buttonText='Submit Edits'
                        submit={editDrinks}
                        editToggle={editToggle}
                        toggle={toggle}
                        type={type}
                        cost={cost}
                        _id={_id}
                    />
                    <button 
                        onClick={toggle}
                    >
                        close
                    </button>
                </>
              }
            </div>
        </>
    )
}

export default Drinks