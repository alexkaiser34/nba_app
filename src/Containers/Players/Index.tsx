import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Players(){

    const navigate = useNavigate();


    const changeRoute = () => {
        navigate('/Players/265');
    }

    return (
        <div>
            <h1>This is the Players page</h1>
            <Button variant="success" onClick={changeRoute}>Navigate</Button>
        </div>
    )
}

export default Players;