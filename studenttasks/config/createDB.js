
const {db,Task, User, Category} = require('../models')

db.sync({force: true})

// node config/createDB.js чтобы создать таблицы базы данных
