'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengobatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pengobatan.hasMany(models.keluhan, { 
        foreignKey: 'id_pengobatan', 
        as: 'keluhans'
      });
      pengobatan.hasMany(models.resep_obat, { 
        foreignKey: 'id_pengobatan',
        as: 'resep_obats'
      });
    }
  }
  pengobatan.init({
    id_pengobatan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama_pasien: DataTypes.STRING,
    id_pasien: DataTypes.STRING,
    tanggal_pengobatan: DataTypes.DATE,
    biaya: DataTypes.FLOAT,
    menggunakan_asuransi: DataTypes.BOOLEAN,
    nama_asuransi: DataTypes.STRING,
    biaya_cover_asuransi: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'pengobatan',
    tableName: 'pengobatan'
  });
  return pengobatan;
};