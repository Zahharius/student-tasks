module.exports = app => {
    const tasks = require('../controllers/taskController')
    const router = require('express').Router()

    router.get('/search', tasks.search)         // http://localhost:3000/tasks/search?description={description}

    router.post('/', tasks.create)              // thunder client post http://localhost:3000/tasks/ body idk.txt

    router.get('/', tasks.findAll)              // http://localhost:3000/tasks/

    router.delete('/:id', tasks.delete);        // thunder client delete http://localhost:3000/tasks/{id}

    router.get('/:id', tasks.findById)          // localhost:3000/tasks/{id}


    app.use('/tasks', router)
}