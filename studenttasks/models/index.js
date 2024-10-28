const db = require('../config/database');
const User = require("./user")
const Task = require("./task")
const Category = require('./category')



User.belongsToMany(Task,{through: 'Task_user', as:'users',timestamps: false});
Task.belongsToMany(User,{through: 'Task_user', as:'tasks',timestamps: false});

Task.belongsTo(Category,{as: 'category',foreignKey: 'categoryId',timestamps: false});
Category.hasMany(Task, {foreignKey: 'categoryId',timestamps: false})




module.exports ={db, User, Task, Category}

