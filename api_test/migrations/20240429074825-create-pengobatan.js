'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pengobatan', {
      id_pengobatan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_pasien: {
        type: Sequelize.STRING
      },
      id_pasien: {
        type: Sequelize.STRING
      },
      tanggal_pengobatan: {
        type: Sequelize.DATE
      },
      biaya: {
        type: Sequelize.FLOAT
      },
      menggunakan_asuransi: {
        type: Sequelize.BOOLEAN
      },
      nama_asuransi: {
        type: Sequelize.STRING
      },
      biaya_cover_asuransi: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pengobatan');
  }
};