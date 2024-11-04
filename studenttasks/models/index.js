const db = require('../config/database');
const User = require("./user")
const Task = require("./task")
const Category = require('./category')




Task.belongsTo(Category,{as: 'category',foreignKey: 'categoryId',timestamps: false});
Category.hasMany(Task, {foreignKey: 'categoryId',timestamps: false})

User.belongsTo(Task,{as: 'task',foreignKey: 'taskId',timestamps: false});
Task.hasMany(User, {foreignKey: 'taskId',timestamps: false})



module.exports ={db, User, Task, Category}

