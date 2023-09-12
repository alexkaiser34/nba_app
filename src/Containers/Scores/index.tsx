import React, { useCallback, useState } from "react";
import { useCustomFetch } from "../../hooks/useCustomFetch";
import { BoxScore } from "../../types/stats";

function Scores(){
    const { fetchWithCache, loading } = useCustomFetch();
    const [ toggle, toggleButton ] = useState(false);
    const [ data, setData ] = useState<BoxScore[]>([]);

    const getCurrentDayBoxScores = useCallback(
        async() => {
        const result = await fetchWithCache<BoxScore[],null>(
            '/current/boxScores'
        );
        setData(result as BoxScore[]);
        },
        [fetchWithCache]
    );

    return (
        <div className="Scores">
            <h1>This is the Scores page</h1>
            <button onClick={() => {
                toggleButton(!toggle);
                getCurrentDayBoxScores();
            }}
                style={{
                padding: '10px',
                marginBottom: '30px',
                background: 'transparent',
                color: 'black',
                outline: '5px solid white'}}>{!toggle ? 'Get box scores...' : 'Hide box scores...'}</button>
            {!loading ? data.map((boxscore) => (
                <div
                key={`${boxscore.game.id}`}
                style={{
                    display: toggle ? 'flex' : 'none',
                    flexWrap: 'wrap',
                    padding: '20px 20px',
                    width: '20%',
                    height: '100%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    outline: '3px dashed'}}>
                    <div key={`${boxscore.game.id}-title`}
                    style={{
                        display: 'flex',
                        padding: '20px 20px',
                        width: '100%',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'}}>
                        <img src = {boxscore.teams[0].WikipediaLogoUrl} style={{height: '10vh'}} />
                        <h1 style={{fontSize: '30px'}}>VS</h1>
                        <img src = {boxscore.teams[1].WikipediaLogoUrl} style={{height: '10vh'}}/>
                    </div>
                    <div key={`${boxscore.game.id}-scores`}
                    style={{
                        display: 'flex',
                        padding: '20px 20px',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        overflow: 'auto'}}>
                        <h1>{boxscore.game.scores.home.points}</h1>
                        <h1>{boxscore.game.scores.visitors.points}</h1>
                        <h1></h1>
                    </div>

                </div>
            )) : <h1>loading...</h1>}
          </div>
    )
}

export default Scores;