const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Vida: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ataque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Defensa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Velocidad: {
      type: DataTypes.INTEGER
    },
    Altura: {
      type: DataTypes.FLOAT
    },
    Peso: {
      type: DataTypes.FLOAT
    },
  });
};
