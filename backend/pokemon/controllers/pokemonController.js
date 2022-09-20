'use strict'

const config = require('../config');
const axios = require('axios').default;

async function getAllPokemons(request, response, next)
{
  try
  {
    const pokemons = await axios.get(config.pokemonApiUrl);

    response.send(pokemons.data);
  }
  catch(error)
  {
    response.status(400).send(error.message);

  }
}

async function getPokemonByIdOrName(request, response, next)
{
  try
  {
    const id = request.params.id;
    const pokemon = await axios.get(config.pokemonApiUrl + id);

    response.send(pokemon.data);

  }
  catch(error)
  {
    response.status(400).send(error.message);

  }
}

module.exports =
{
  getAllPokemons,
  getPokemonByIdOrName

}