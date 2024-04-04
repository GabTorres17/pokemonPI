const express = require("express");
const router = express.Router();
const Pokemon = require('../models/Pokemon');

router.get('/types', async (req, res) => {
    try {
      let tiposPokemons = await TipoPokemon.findAll();
      if (tiposPokemons.length === 0) {
        const response = await fetch('https://api.pokemon.com/types');
        const data = await response.json();
        const tiposAPI = data.results.map(result => result.name);
  
        await TipoPokemon.bulkCreate(tiposAPI.map(nombre => ({ Nombre: nombre })));
        
        tiposPokemons = await TipoPokemon.findAll();
      }
      res.json(tiposPokemons);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los tipos de pokemons.' });
    }
  });

  module.exports = router;