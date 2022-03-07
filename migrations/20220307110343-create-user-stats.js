'use strict'
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('user_stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_uuid: {
        type: DataTypes.STRING,
      },
      fk_userId_stats: {
        type: DataTypes.INTEGER,
      },
      win_count_comp: {
        type: DataTypes.INTEGER,
      },
      lose_count_comp: {
        type: DataTypes.INTEGER,
      },
      draw_count_comp: {
        type: DataTypes.INTEGER,
      },
      win_count_player: {
        type: DataTypes.INTEGER,
      },
      lose_count_player: {
        type: DataTypes.INTEGER,
      },
      draw_count_player: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('user_stats')
  },
}
