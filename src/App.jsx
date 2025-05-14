import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  //con usestate qui salvo le informazioni sugli attori
  const[Cast, setCast]=useState([]);
  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then(res => {
        console.log("Dati ricevuti:", res.data);
        //salvo i dati nello state
        setCast(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Cast Fetching</h1>
      <p>Apri la console (F12) per vedere i dati</p>
    </div>
  );
}

export default App;

