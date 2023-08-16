import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';


function App() {

  const [data, setData] = useState([]);

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
