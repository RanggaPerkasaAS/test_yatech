'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keluhan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      keluhan.belongsTo(models.pengobatan, {
        foreignKey: 'id_pengobatan',
        as: 'pengobatan'
      });
    }
  }
  keluhan.init({
    id_keluhan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_pengobatan: DataTypes.INTEGER,
    keluhan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'keluhan',
    tableName: 'keluhan'
  });
  return keluhan;
};