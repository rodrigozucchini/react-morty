import imagenRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import CharactersTotal from './components/Character';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const API = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await API.json();
    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {
          characters 
          ? 
          (
            <CharactersTotal characters={characters} setCharacters={setCharacters}/>
          ) 
            :
          (<>
            <img src={imagenRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
          )
        }
      </header>
    </div>
  );
}

export default App;
