module.exports = function (sequelize,DataTypes) {
  return sequelize.define('bitcoin',
  {
    high:DataTypes.FLOAT,
    low:DataTypes.FLOAT,
    last:DataTypes.FLOAT,
    timestamp:DataTypes.DATE,
    volume:DataTypes.FLOAT
  },{
    timestamps:false
  });
}