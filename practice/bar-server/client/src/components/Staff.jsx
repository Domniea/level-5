import React, {useState} from "react";
import StaffForm from "./StaffForm";

function Staff( props ) {
    const [editToggle, setEditToggle] = useState(false)

    const { name, job, hairColor, _id, editStaff} = props

    function toggle() {
        setEditToggle(prevState => !prevState)
    }

    return (
        <>
            <div className="Staff">
                { !editToggle ?
                <>
                    <h1>Name: {name}</h1>
                    <h3>Job: {job}</h3>
                    <h4>Hair Color: {hairColor}</h4>
                    <button
                        className="delete--btn"
                        onClick={() => props.deleteStaff(_id)}>
                        Delete
                    </button>
                    <button
                        className="edit--btn"
                        onClick={toggle}
                    >
                        Edit
                    </button>
                </>
                :
                <>
                    <StaffForm 
                        buttonText='Submit Edit'
                        name={name}
                        job={job}
                        hairColor={hairColor}
                        _id={_id}
                        submit={editStaff}
                        editToggle={editToggle}
                        toggle={toggle}
                    />
                    <button
                        onClick={toggle}
                    >
                        Close
                    </button>
                </>
                }

            </div>
        </>
    )
}

export default Staff