'use strict'

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  CRY_API_URL,
  POKEMON_API_URL
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(CRY_API_URL, "CRY_API_URL is required");
assert(POKEMON_API_URL, "POKEMON_API_URL is required");

module.exports = 
{
  port: PORT,
  host: HOST,
  hostUrl: HOST_URL,
  cryApiUrl: CRY_API_URL,
  pokemonApiUrl: POKEMON_API_URL
}