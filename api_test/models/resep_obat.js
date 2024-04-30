'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resep_obat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      resep_obat.belongsTo(models.pengobatan, {
        foreignKey: 'id_pengobatan',
        as: 'pengobatan'
      });
    }
  }
  resep_obat.init({
    id_resep_obat: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_pengobatan: DataTypes.INTEGER,
    resep_obat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'resep_obat',
    tableName: 'resep_obat'
  });
  return resep_obat;
};