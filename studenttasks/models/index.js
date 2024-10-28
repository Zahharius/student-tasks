const db = require('../config/database');
const User = require("./user")
const Task = require("./task")
const Category = require('./category')



User.belongsToMany(Task,{through: 'Task_user', as:'users',timestamps: false});
Task.belongsToMany(User,{through: 'Task_user', as:'tasks',timestamps: false});

Task.belongsTo(Category,{as: 'category',foreignKey: 'categoryId',timestamps: false});
Category.hasMany(Task, {foreignKey: 'categoryId',timestamps: false})

Category.create({ category: 'ekskursioon' })
 .then(category => {
    console.log(category);
 })
 .catch(error => {
   console.error('Error creating category:', error);
 });

// Task.create({description: "Like a dragon 9: Unlimited Health",
//   deadLine: "2029-03-03 00:00:00",
//    createdTime: "2024-03-03 00:00:00",
//   categoryId	: 1 })
//  .then(task => {
//    console.log(task);
//  })
//  .catch(error => {
//    console.error('Error creating task:', error);
// });


module.exports ={db, User, Task, Category}

