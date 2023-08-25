import { useState, useEffect, useCallback } from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { getPlayer, postPlayer } from "./api/player";

function App() {

  const [data, setData] = useState([]);

  const handlePost = useCallback(async function(){

    await postPlayer(JSON.stringify({
      first_name: "Stephen",
      last_name: "Curry",
      id: 4,
    }));

    await getPlayer()
      .then((res) => setData(res))

   }, []);

  useEffect(() => {
    getPlayer()
      .then((res) => setData(res))
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
