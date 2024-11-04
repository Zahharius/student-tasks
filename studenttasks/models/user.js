const db = require('../config/database');
const {Sequelize} = require('sequelize');
const bcrypt = require('bcryptjs');


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
        type: Sequelize.STRING(20000),
        allowNull: false,
        validate:{
            notNull:{
                msg: "password is required"
            },
    }
    },
},
{timestamps: false});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});


module.exports = User;