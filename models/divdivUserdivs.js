module.exports = function(sequelize, DataTypes) {
  var divdivUserdivs = sequelize.define("divdivUserdivs", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return divdivUserdivs;
};
