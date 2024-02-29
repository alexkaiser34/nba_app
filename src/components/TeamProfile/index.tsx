import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Team } from "../../types/team";
import { DataContext } from "../../utils/context";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useCustomFetch } from "../../hooks/useCustomFetch";
import { Standings } from "../../types/standings";
import { teamsEndpoints } from "../../types/endpoints";

function TeamProfile(){
    const { id } = useParams();
    const { fetchWithCache, loading } = useCustomFetch();

    const { players, teams } = useContext(DataContext);
    const [data, setData] = useState<Team>();
    const [standingsData, setStandings] = useState<Standings>();

    useEffect(() => {
        const team = teams.current.find((element) => element.TeamID == Number(id));
        setData(team as Team);

        fetchWithCache<Standings, any>(
            `/standings//2023/team/${team?.TeamID}`,
            {season: '2023', team: team?.TeamID}
          )
          .then((res) => {
            if(res !== null){
                if (Array.isArray(res)){
                    setStandings(res[0]);
                }
            }
          })
          .catch((err) => console.log(err));

        
    },[]);

    const toColorString = (s:string | undefined) => {
        if (s !== undefined){
            const r = parseInt(s.slice(0,2),16);
            const g = parseInt(s.slice(2,4),16);
            const b = parseInt(s.slice(4,6),16);

            return `${r}, ${g}, ${b}`;
        }
        return '0, 0, 0';
    }

    const transparencyBanner = 0.4;

    return (
        <div className="Scores">
            {data ?
                <div className="w-100 h-100">
                    <Container
                        className="pt-2 pb-2"
                        fluid
                        style={{
                            background: `linear-gradient(to right bottom, rgba(${toColorString(data.SecondaryColor)}, ${transparencyBanner}) 50%, rgba(${toColorString(data.PrimaryColor)}, ${transparencyBanner}) 50%)`,
                        }}
                    >
                    <Row className="d-flex w-100 justify-content-evenly">
                        <Col className="col-4 d-flex flex-row align-items-center justify-content-center">
                            <Image 
                                fluid 
                                src={data.WikipediaLogoUrl} 
                                style={{
                                    maxHeight: 'max(150px, 10vh)',
                                    width: 'auto'
                                }}
                            />
                        </Col>
                        <Col 
                            className="col-8 d-flex flex-column align-items-center"
                            style={{
                                color: 'black'
                                // color: `#${data.TertiaryColor}`
                            }}
                        >
                            <h1 style={{fontWeight: 'bold'}}>{data.City} {data.Name}</h1>
                            <div className="d-flex flex-row align-items-baseline w-100 justify-content-evenly">
                                <div className="d-flex flex-column align-items-center">
                                    <h2 style={{fontWeight: 'bold'}}>Record</h2>
                                    <h3>{standingsData?.win.total} - {standingsData?.loss.total}</h3>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <h2 style={{fontWeight: 'bold'}}>Standings</h2>
                                    <h3>{standingsData?.conference.rank} in {standingsData?.conference.name}</h3>
                                    <h3>{standingsData?.division.rank} in {standingsData?.division.name}</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
            : <h1>Team unavailable...</h1>}
        </div>
    )

}

export default TeamProfile;