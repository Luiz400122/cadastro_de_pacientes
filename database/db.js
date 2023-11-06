
const sequelize = require('sequelize')
require('dotenv').config()

DATABASE = process.env.DATABASE
DB_USER = process.env.DB_USER
DB_PASSWORD = process.env.DB_PASS

const connection = new sequelize.Sequelize(
DATABASE,DB_USER,DB_PASSWORD , {
    dialect:'mysql',
    host:'localhost'
})
   

module.exports = connection
