module.exports = app => {
    const categories = require('../controllers/categoryController')
    const router = require('express').Router()

    router.get('/search', categories.search) //http://localhost:3000/categories/search?category={category}

    router.post('/', categories.create) // thunder client post http://localhost:3000/categories/ body idk.txt

    router.delete('/:id', categories.delete)// thunder client delete http://localhost:3000/categories/{id}

    router.get('/:id', categories.findById)// localhost:3000/categories/{id}

    router.get('/', categories.findAll)// http://localhost:3000/categories/

    app.use('/categories', router)
}