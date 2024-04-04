const express = require("express");
const router = express.Router();
const Pokemon = require('../models/Pokemon');

router.get("/pokemons", async (req, res) => {
    try {
    const pokemons = await Pokemon.findAll();
    res.json(pokemons)
    } catch (error) {
    res.status(500).json({message: "No se pudo obtener los pokemons."})   
    }
});

router.get("/pokemons/:idPokemon", async (req, res) => {
    const { idPokemon } = req.params;
    
    try {
        const pokemon = Pokemons.findByPk(idPokemon);
        if(!pokemon) {
            res.status(404).json({message: "Pokemon no encontrado"})
        } else {
            res.json(pokemon);
        }
    } catch (error) {
        res.status(500).json({message: "Error al obtener el pokemon"})
    }
});

router.get('/pokemons/name', async (req, res) => {
    const { name } = req.query;
    try {
      const pokemons = await Pokemon.findAll({
        where: sequelize.where(sequelize.fn('LOWER', sequelize.col('Nombre')), 'LIKE', `%${name.toLowerCase()}%`),
      });
      if (pokemons.length === 0) {
        return res.status(404).json({ message: 'No se encontraron pokemons con ese nombre.' });
      }
      res.json(pokemons);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al buscar los pokemons.' });
    }
  });

  router.post('/pokemons', async (req, res) => {
    const { Nombre, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, TipoPokemonIDs } = req.body;
    try {
      const newPokemon = await Pokemon.create({
        Nombre,
        Imagen,
        Vida,
        Ataque,
        Defensa,
        Velocidad,
        Altura,
        Peso,
      });
      await newPokemon.addTipoPokemons(TipoPokemonIDs);
      res.status(201).json(newPokemon);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el pokemon.' });
    }
  });

  module.exports = router;