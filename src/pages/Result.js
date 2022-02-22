import axios from "axios";
import { Button } from "reactstrap";
import { objectOf } from "prop-types";
import React, { useState, useEffect } from "react";

const Result = () => {
    const [choice, setChoice] = useState("");
    const [fetchData, setFetchData] = useState([]);

    useEffect(async () => {
        const result = await axios.get("http://localhost:3000/ResultData");
        setFetchData(result.data);

        Object.keys(fetchData)?.map((item, v) => {
            console.log("details", fetchData[item]?.detail);
        })
    }, [])


   
    console.log("choice", fetchData)
    return (
        <div>
            <select onChange={(e) => setChoice(e.target.value)}>
                <option>Select One</option>
                <option>Devika</option>
                <option>Riya</option>

            </select>
            
          {/**   Object.keys(fetchData)?.map((item,v)=>{
                <h1>{"details", fetchData[item]?.detail}</h1>
            })
            <Button onClick={()=>find_max(12,23,45)}></Button>*/} 
        </div>
    )
}

export default Result;