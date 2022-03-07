'use strict'
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')

const encrypt = (password) => bcrypt.hashSync(password, 10)

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user_games',
      [
        {
          uuid: uuidv4(),
          username: 'admin',
          email: 'admin@mail.com',
          password: encrypt('123'),
          isAdmin: true,
          createdAt: '2022-02-14 15:40:14.503+08',
          updatedAt: '2022-02-14 15:40:14.503+08',
        },
        {
          uuid: uuidv4(),
          username: 'JohnDoe',
          email: 'johndoe@mail.com',
          password: encrypt('johndoe123'),
          isAdmin: false,
          createdAt: '2022-02-14 15:40:14.503+08',
          updatedAt: '2022-02-14 15:40:14.503+08',
        },
        {
          uuid: uuidv4(),
          username: 'JaneDoe',
          email: 'janedoe@mail.com',
          password: encrypt('janedoe123'),
          isAdmin: false,
          createdAt: '2022-02-14 15:40:14.503+08',
          updatedAt: '2022-02-14 15:40:14.503+08',
        },
      ],
      {}
    )

    const users = await queryInterface.sequelize.query(
      `SELECT uuid, id FROM user_games`
    )

    const userRows = users[0]

    await queryInterface.bulkInsert(
      'user_game_biodata',
      [
        {
          uuid: uuidv4(),
          fk_userId_biodata: userRows[0].id,
          user_uuid: userRows[0].uuid,
          full_name: 'System Administrator',
          dob: '1997-01-01',
          address: 'Denpasar, Bali',
          contact: '+62824356746',
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_biodata: userRows[1].id,
          user_uuid: userRows[1].uuid,
          full_name: 'Johnathan Smith Doe',
          dob: '1998-03-07',
          address: 'Denpasar, Bali',
          contact: '+628243567467',
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_biodata: userRows[2].id,
          user_uuid: userRows[2].uuid,
          full_name: 'Jeniffer Smith Doe',
          dob: '1997-03-07',
          address: 'Denpasar, Bali',
          contact: '+62824356748',
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'user_stats',
      [
        {
          uuid: uuidv4(),
          user_uuid: userRows[0].uuid,
          fk_userId_stats: userRows[0].id,
          win_count_comp: 1,
          lose_count_comp: 1,
          draw_count_comp: 1,
          win_count_player: 1,
          lose_count_player: 1,
          draw_count_player: 1,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          user_uuid: userRows[1].uuid,
          fk_userId_stats: userRows[1].id,
          win_count_comp: 1,
          lose_count_comp: 1,
          draw_count_comp: 1,
          win_count_player: 2,
          lose_count_player: 2,
          draw_count_player: 2,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          user_uuid: userRows[2].uuid,
          fk_userId_stats: userRows[2].id,
          win_count_comp: 1,
          lose_count_comp: 1,
          draw_count_comp: 1,
          win_count_player: 3,
          lose_count_player: 3,
          draw_count_player: 3,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'user_game_histories',
      [
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[0].id,
          user_uuid: userRows[0].uuid,
          score: 1,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[0].id,
          user_uuid: userRows[0].uuid,
          score: -1,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[0].id,
          user_uuid: userRows[0].uuid,
          score: 0,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[1].id,
          user_uuid: userRows[1].uuid,
          score: 1,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[1].id,
          user_uuid: userRows[1].uuid,
          score: -1,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[1].id,
          user_uuid: userRows[1].uuid,
          score: 0,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[2].id,
          user_uuid: userRows[2].uuid,
          score: 1,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[2].id,
          user_uuid: userRows[2].uuid,
          score: -1,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
        {
          uuid: uuidv4(),
          fk_userId_histories: userRows[2].id,
          user_uuid: userRows[2].uuid,
          score: 0,
          createdAt: '2022-02-14 15:53:18.345+08',
          updatedAt: '2022-02-14 15:53:18.345+08',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_game_histories', null, {})
    await queryInterface.bulkDelete('user_game_biodata', null, {})
    await queryInterface.bulkDelete('user_games', null, {})
  },
}
