'use strict'
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { type: DataTypes.STRING, unique: true },
      uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      p1_uuid: {
        type: DataTypes.STRING,
      },
      p2_uuid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      p1_hands: {
        type: DataTypes.STRING,
      },
      p2_hands: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('rooms')
  },
}
