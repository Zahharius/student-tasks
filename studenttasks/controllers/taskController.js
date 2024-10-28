const { Task } = require('../models');
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

exports.findById = (req, res) => {
    const taskId = req.params.id;
    Task.findOne({
        where: {
            id: taskId
        }
    })
    .then(data => {
        if (!data) {
            return res.status(404).send({
                message: `Task with id ${taskId} not found.`
            });
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while searching the Task.'
        })
    })
}

exports.search = (req, res) => {
    const { description } = req.query;
    Task.findAll({
        where: {
            description: {
                [Op.like]: `%${description}%`
            }
        }
    })
    .then(data => {
        if (data.length === 0) {
            return res.status(404).send({
                message: `No tasks found with description: ${description}.`
            })
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while searching for tasks by description.'
        })
    })
}
