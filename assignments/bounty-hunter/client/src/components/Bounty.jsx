import React, { useState, useEffect } from "react";
import axios from 'axios'
import BountyForm from "./BountyForm";
import PersonOfIntrest from "./PersonOfIntrest";

function Bounty() {

    const [bountys, setBountys] = useState([])

    const [editToggle, setEditToggle] = useState(false)

    function toggle() {
        setEditToggle(prevState => !prevState)
    }

    function getBounty() {
        axios.get('/api/bounty')
            .then(res => {
                setBountys(res.data)
            })
            .catch(err => console.log(err))
    }

    function postBounty(newPost) {
        axios.post('/api/bounty', newPost)
        .then(res => {
            setBountys(prevBountys => {
                return [...prevBountys, res.data]
            })
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(id) {
        axios.delete(`/api/bounty/${id}`)
            .then(res => {
                setBountys(prevState => {
                    return prevState.filter(person => person._id !== id)
                })
            })
            .catch(err => console.log(err))
    }

    function editBounty(object, id) {
        axios.put(`/api/bounty/${id}`, object)
            .then(res => {
                setBountys(prevBounty => {
                    return prevBounty.map( person => person._id !== id ? person : res.data)
                })
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getBounty()
    }, [])
    


    const personOfIntrest = bountys.map(person => {
        return <PersonOfIntrest 
                key={person._id}
                {...person}
                deleteBounty={deleteBounty}
                submit={editBounty}
                editToggle={editToggle}
                toggle={toggle}

            />
    })

    return(
        <>
            <div className="Bounty">
                <h1>BOUNTY TEST</h1>
                <BountyForm 
                    submit={postBounty}
                />
                {personOfIntrest}
            </div>
        </>
    )
}

export default Bounty