import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Team } from "../../types/team";
import { DataContext } from "../../utils/context";

function TeamProfile(){
    const { id } = useParams();
    const { players, teams } = useContext(DataContext);
    const [data, setData] = useState<Team>();

    useEffect(() => {
        const team = teams.current.find((element) => element.TeamID == Number(id));
        setData(team as Team);
    },[]);

    return (
        <div className="Scores">
            {data ?
                <div>
                    <h1>Hello Team {id}</h1>
                    <h1>Name is {data.Name}</h1>
                    <img src={data.WikipediaLogoUrl} />
                </div>
            : <h1>Team unavailable...</h1>}
        </div>
    )

}

export default TeamProfile;