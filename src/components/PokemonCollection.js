import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokemons, search, setSearch} ) {
  
  const allPokemons = pokemons
  .filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search)
  })
  .map(pokemon => {
   return <PokemonCard key={pokemon.id} onePoke={pokemon}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {allPokemons}
    </Card.Group>
  );
}

export default PokemonCollection;
