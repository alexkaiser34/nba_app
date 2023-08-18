import { useState, useEffect, useCallback } from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  const handlePost = useCallback(async function(){
    await fetch('/nbaPlayers/createPlayer', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: "Stephen",
        last_name: "Curry",
        id: 4,
      })
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));

    await fetch("/nbaPlayers")
      .then((res) => res.json())
      .then((data_json) => {
        setData(data_json)
    });

   }, []);

  useEffect(() => {
    fetch("/nbaPlayers")
      .then((res) => res.json())
      .then((data_json) => {
        setData(data_json)
      })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handlePost}>Add Curry</button>
        <div className="Data">
          {
          !data ? "Loading..." :
          data.map((item) =>
            <p>{item.last_name}, {item.first_name}</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
