import React, { useCallback, useContext, useEffect, useState } from 'react';
import './App.css';
import AppNavBar from './components/NavBar';
import { useParams, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Containers/Home/Index';
import Players from './Containers/Players/Index';
import Scores from './Containers/Scores';
import Standings from './Containers/Standings/Index';
import Teams from './Containers/Teams';
import { DataContext } from './utils/context';
import { useCustomFetch } from './hooks/useCustomFetch';
import { Player } from './types/player';
import { Team } from './types/team';
import PlayerProfile from './components/PlayerProfile';
import TeamProfile from './components/TeamProfile';


function App() {
  const { players, teams } = useContext(DataContext);
  const { fetchWithCache, loading } = useCustomFetch();

  /** fetch and cache a list of teams and players
   * Only runs when app rerenders
   */
  useEffect(() => {
    fetchWithCache<Player[], null>(
      '/players'
    )
    .then((res) => {
      if(res !== undefined){
        players.current.length = 0;
      }

      res?.forEach((player) => {
        players.current.push(player);
      })
    })
    .catch((err) => console.log(err));

    fetchWithCache<Team[], null>(
      '/teams'
    )
    .then((res) => {
      if(res !== undefined){
        teams.current.length = 0;
      }
      res?.forEach((team) => {
        teams.current.push(team);
      })
    })
    .catch((err) => console.log(err));

  }, []);

  return (
    <Router >
      <div className="App">
        <AppNavBar />
        {!loading ?
          <Routes>
              <Route path='/' Component={Home} />
              <Route path='/Home' Component={Home} />
              <Route path='/Players' Component={Players} />
              <Route path='/Scores' Component={Scores} />
              <Route path='/Standings' Component={Standings} />
              <Route path='/Teams' Component={Teams} />

              {/*
              Pass player, team, and gameIDs to these routes
              These are really the only routes that it would be nice
              to have a seperate page
              */}
              <Route path='/Players/:id' Component={PlayerProfile} />
              <Route path='/Teams/:id' Component={TeamProfile} />
              <Route path='/Scores/:id' Component={PlayerProfile} />
          </Routes>
        : <h1>Loading...</h1>}
      </div>
    </Router>

  );
}

export default App;
