import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
  // set up state variables
  const [pokemonList, setPokemonList] = useState([])
  const [numberOfPokemon, setNumberOfPokemon] = useState(0)

  // function to get pokemon data when called
  const getPokemon = () => {
    console.log('starting fetch to get pokemon')
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
      .then(convertedResponse => {
        console.log('pokemon convertedResponse data:', convertedResponse)
        setPokemonList(convertedResponse.data.results) // sets the list of pokemon to the pokemonList state
        // set the number of pokemon to the number of pokemon in the list
        setNumberOfPokemon(convertedResponse.data.count)
      })
      .catch(error => {
        // if there is an error
        console.log('=== We have a Pokemon ERROR ===:', error)
      })
  }

  return (
    <div className='container' onClick={getPokemon}>
      <button className='btn btn-outline-success mb-3'>
        Click to get the Pokemon
      </button>
      <h4>number of pokemon: {numberOfPokemon}</h4>
      <hr />

      {pokemonList.map((pokemon, index) => {
        return (
          <div className='' key={index}>
            <h4>{pokemon.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Pokemon
