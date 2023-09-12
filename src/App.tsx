import React from 'react';
import './App.css';
import AppNavBar from './components/NavBar';
import { useParams, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Containers/Home/Index';
import Players from './Containers/Players/Index';
import Scores from './Containers/Scores';
import Standings from './Containers/Standings/Index';
import Teams from './Containers/Teams';
import Test from './components/Test';


function App() {

  return (
    <Router>
      <div className="App">
        <AppNavBar />
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
          <Route path='/Players/:id' Component={Test} />
          <Route path='/Teams/:id' Component={Test} />
          <Route path='/Scores/:id' Component={Test} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
