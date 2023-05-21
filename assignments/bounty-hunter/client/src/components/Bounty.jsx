import React, { useState, useEffect } from "react";
import axios from 'axios'
import BountyForm from "./Bountyform";

function Bounty() {

    const [bountys, setBountys] = useState([])

    function getBounty() {
        axios.get('/api/bounty')
            .then(res => {
                setBountys(res.data)
            })
            .catch(err => console.log(err))
    }

    function postBounty() {
        axios.post('/api/bounty')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    useEffect(() => {
        getBounty()
    }, [])
    

    const personOfIntrest = bountys.map(person => {
        return(
            <h1 key={person._id}>{`${person.firstName} ${person.lastName}`}</h1>
        )
    })

    return(
        <>
            <div className="Bounty">
                <h1>BOUNTY TEST</h1>
                <BountyForm 
                
                />
                {personOfIntrest}
            </div>
        </>
    )
}

export default Bounty