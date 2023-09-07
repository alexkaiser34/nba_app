import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useCustomFetch } from './hooks/useCustomFetch';
import { BoxScore } from './types/stats';

function App() {
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
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          toggleButton(!toggle);
          getCurrentDayBoxScores();
        }}
          style={{
            padding: '10px',
            marginBottom: '30px',
            background: 'transparent',
            color: 'white',
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
              outline: '3px dashed',
              overflow: 'auto'}}>
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
        )) : <h1>loading...</h1>
      }

      </header>
    </div>
  );
}

export default App;
