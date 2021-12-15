import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "", 
    species: "", 
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=> {
      console.log(response);
      setPokemonName ({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
                      });
      setPokemonChosen(true);
    });
  }

  return (
    <div className="App">
      <div className= "TitleSection">
        <h1>Pokemon Stats</h1>
        <input type= "text" onChange={(event) => {setPokemonName(event.target.value)}}></input>
        <button onClick={searchPokemon}>Search Pokemon</button>
        </div>
      <div className='DisplaySection'>
        {!pokemonChosen ? (<h1>Please choose a pokemon</h1>)
        : (
          <>
        <h1>{pokemon.name}</h1>
        
        </>
        )}
      </div>
    </div>
  );
}

export default App;
