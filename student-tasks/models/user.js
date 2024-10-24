const db = require('../config/database');
const {Sequelize} = require('sequelize');

const User = db.define('User',{
    userName:{
        type: Sequelize.STRING(16),
        allowNull: false,
        validate:{
            notNull:{
                msg: "user name is required"
            },
            len:{
                args:[2,50],
                msg:'user name length must be 16 characters'
            }
        }
    },
    email:{
        type: Sequelize.STRING(100),
        allowNull: false,
        validate:{
            notNull:{
                msg: "email is required"
            },
            len:{
                args:[2,100],
                msg:'email length must be between 2 and 100 characters'
            }
        }
    },
    password:{
        type: Sequelize.STRING(24),
        allowNull: false,
        validate:{
            notNull:{
                msg: "date of birth is required"
            },
    }
    },
},
{timestamps: false});


module.exports = User;