module.exports = app => {
    const tasks = require('../controllers/taskController')
    const categories = require('../controllers/taskController')
    const router = require('express').Router()

    router.post('/', tasks.create) // thunder client post http://localhost:3000/tasks/ body idk.txt

    router.get('/', tasks.findAll)// http://localhost:3000/tasks/

    router.post('/', categories.create) // thunder client post http://localhost:3000/categories/ body idk.txt

    router.delete('/:id', categories.delete)// thunder client delete http://localhost:3000/categories/{id}

    app.use('/tasks', router)
    app.use('/categories', router)
}