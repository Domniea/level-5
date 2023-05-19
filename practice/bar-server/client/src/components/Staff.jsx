import React, {useState} from "react";
import StaffForm from "./StaffForm";

function Staff( props ) {
    const [editToggle, setEditToggle] = useState(true)


    const { name, job, hairColor, _id } = props
    const id = props._id

    function toggle() {
        setEditToggle(prevState => !prevState)
    }

    console.log(editToggle)

    


    return (
        <div className="Staff">
            { editToggle ?
            <>
                <h1>Name: {name}</h1>
                <h3>Job: {job}</h3>
                <h4>Hair Color: {hairColor}</h4>
                <button
                    className="delete--btn"
                    onClick={() => props.deleteStaff(id)}>
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
                    _id={ _id}
                    submit={ props.editStaff}

                />
                <button
                    onClick={toggle}
                >
                    Close
                </button>
            </>
            }

        </div>
    )
}

export default Staff