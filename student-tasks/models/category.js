const db = require('../config/database');
const {Sequelize} = require('sequelize');

const Category = db.define('Category',{
    category:{
        type: Sequelize.STRING(50),
        allowNull: false,
        validate:{
            notNull:{
                msg: "category name is required"
            },
            len:{
                args:[2,50],
                msg:'category name length must be between 2 and 50 characters'
            }
        }
    },
},{timestamps: false})


module.exports = Category;