import React from 'react';
import { useState, useEffect } from 'react';


export default function PokeApi() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((data) =>   data.json()
      )
      .then((info) => 
        {   console.log(info)
            return setPokemonList(info.results)}
      ).catch(error=>console.log(error));
  }, []);
  console.log(pokemonList)
  return (
    <div>
      <p>hello</p>
      <ul>
        {pokemonList.map((pokemon,index) => 
          <li key={index}>{pokemon.name}</li> )}
        <li>example</li>
      </ul>
    </div>
  );
}