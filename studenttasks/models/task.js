const db = require('../config/database');
const {Sequelize} = require('sequelize');

const Task = db.define('Task',{
    description:{
        type: Sequelize.STRING(200),
        allowNull: false,
        validate:{
            notNull:{
                msg: "description is required"
            },
            len:{
                args:[2,200],
                msg:'description length must be between 2 and 200 characters'
            }
        }
    },
    
    deadLine: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Dead line is required'
            }
        }
    },
    createdTime: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now,
        validate: {
            notEmpty: {
                msg: 'time of creation is required'
            }
        }
    },
},{timestamps: false})

module.exports = Task;