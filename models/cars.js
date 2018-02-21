'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cars = sequelize.define('Cars', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTERGER
  }, {});
  Cars.associate = function(models) {
    // associations can be defined here
  };
  return Cars;
};