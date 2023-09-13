import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Teams(){
    const navigate = useNavigate();


    const changeRoute = () => {
        navigate('/Teams/15');
    }

    return (
        <div>
            <h1>This is the Teams page</h1>
            <Button variant="success" onClick={changeRoute}>Navigate</Button>
        </div>
    )
}

export default Teams;