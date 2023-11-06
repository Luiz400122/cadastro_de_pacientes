const { Sequelize } = require('sequelize')
const connection = require('../database/db')

const Paciente = connection.define('pacientes',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    }, 
    sobrenome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    CPF:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nascimento:{
        type:Sequelize.DATE,
        allowNull:false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

//Paciente.sync({force:true})

module.exports =  Paciente 