// Importiamo React e alcuni suoi hook fondamentali
import React, { useEffect, useState } from "react";

// Importiamo Axios per effettuare chiamate API
import axios from "axios";

// Importiamo il file CSS per lo stile
import '/home/nicol/react-api/src/App.css';

// Importiamo il componente ActorCard che useremo per visualizzare le informazioni sugli attori
import ActorCard from "./ActorCard";

function App() {
  // Definiamo uno stato `Cast` per memorizzare i dati degli attori provenienti dall'API
  const [Cast, setCast] = useState([]);

  // useEffect viene usato per eseguire il codice al montaggio del componente (equivalente a componentDidMount)
  useEffect(() => {
    // Effettuiamo una richiesta GET all'API per ottenere l'elenco delle attrici
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then(res => {
        // Stampiamo i dati ricevuti nella console per debugging
        console.log("Dati ricevuti:", res.data);

        // Aggiorniamo lo stato `Cast` con i dati ricevuti dall'API
        setCast(res.data);
      });
  }, []); // La dipendenza vuota `[]` significa che useEffect viene eseguito solo al montaggio del componente

  return (
    // Ritorniamo un contenitore div che conterrà le schede degli attori
    <div>
      {Cast.map(actor => ( // Usiamo `map()` per iterare l'array degli attori e creare una ActorCard per ciascuno
        <ActorCard 
          key={actor.id} // Attribuiamo una chiave 
          name={actor.name} // Passiamo il nome dell'attore come prop
          birthyear={actor.birthyear} // Passiamo l'anno di nascita
          nationality={actor.nationality} // Passiamo la nazionalità
          image={actor.image} // Passiamo l'immagine dell'attore
          bio={actor.bio} // Passiamo la biografia
          awards={actor.awards} // Passiamo i premi vinti
        />
      ))}
    </div>
  );
}

// Esportiamo il componente App per poterlo usare in altri file
export default App;

