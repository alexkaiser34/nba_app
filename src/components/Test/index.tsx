import React from "react";
import { useParams } from "react-router-dom";

function Test(){
    const { id } = useParams();

    return (
        <h1>Hello {id}</h1>
    )

}

export default Test;