const { Task, User, Category } = require('../models');
const { Op } = require('sequelize');

exports.create = (req, res) => {
    const task = {
        description: req.body.description,
        deadLine: req.body.deadLine,
        createdTime: req.body.createdTime,
        categoryId: req.body.categoryId 
    }

    Task.create(task)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while creating the Task.'
        })
    })
}

exports.findAll = (req, res) => {
    Task.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while finding the Tasks.'
        })
    })
}

exports.delete = (req, res) => {
    const taskId = req.params.id
    Task.destroy({
        where: { id: taskId }
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while deleating the task.'
        })
    })
}
exports.create = (req, res) => {
    const category = {
        category: req.body.category,
    }

    Category.create(category)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while creating the Category.'
        })
    })
}
exports.delete = (req, res) => {
    const categoryId = req.params.id
    Category.destroy({
        where: { id: categoryId }
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while deleating the category.'
        })
    })
}