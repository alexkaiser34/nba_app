import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Player } from "../../types/player";
import { DataContext } from "../../utils/context";

function PlayerProfile(){
    const { id } = useParams();
    const { players, teams } = useContext(DataContext);
    const [data, setData] = useState<Player>();

    useEffect(() => {
        const player = players.current.find((element) => element.PlayerID == Number(id));
        setData(player as Player);
    },[]);

    return (
        <div className="Scores">
            {data ?
                <div>
                    <h1>Hello {id}</h1>
                    <h1>Name is {data.FirstName}, {data.LastName}</h1>
                    <img src={data.Headshot?.toString()} />
                </div>
            : <h1>Player unavailable...</h1>}
        </div>
    )

}

export default PlayerProfile;