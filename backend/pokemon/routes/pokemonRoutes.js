const express = require('express');
const { getAllPokemons, getPokemonByIdOrName } = require('../controllers/pokemonController');

const router = express.Router();

router.get('/', getAllPokemons);
router.get('/:id', getPokemonByIdOrName);

module.exports = router;