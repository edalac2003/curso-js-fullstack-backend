const Sequelize = require('sequelize')

const conn = new Sequelize('wPmhIyeUj4', 'wPmhIyeUj4', 'lAkjmbqrRT', {
    host : 'remotemysql.com',
    dialect : 'mysql'
})

conn.authenticate()
    .then( () => console.log('Connection OK with database.'))
    .catch((err) =>  console.log('Connection error with database. ', err))

module.exports = conn;