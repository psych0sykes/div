module.exports = function(sequelize, DataTypes) {
  var divdivUserdivs = sequelize.define("divdivUserdivs", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    divColor_1: DataTypes.STRING,
  });
  return divdivUserdivs;
};
