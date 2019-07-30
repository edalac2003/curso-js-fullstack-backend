const Sequelize = require('sequelize');
const conn = require('../database/connection');

//Esquema de la tabla
module.exports = conn.define('reserva', {
    idreserva: 
        { 
            type: Sequelize.SMALLINT, 
            primaryKey: true 
        },
    nombres: Sequelize.STRING,
    apellidos: Sequelize.STRING,
    email: Sequelize.STRING,
    fechareserva: Sequelize.STRING,
    horareserva: Sequelize.STRING,
    idservicio: Sequelize.SMALLINT,
    estado: Sequelize.SMALLINT
}, {
    freezeTableName : true,
    timestamps : false
})