const {Category } = require('../models');
const { Op } = require('sequelize');

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

exports.findById = (req, res) => {
    const categoryId = req.params.id;
    Category.findOne({
        where: {
            id: categoryId
        }
    })
    .then(data => {
        if (!data) {
            return res.status(404).send({
                message: `category with id ${categoryId} not found.`
            });
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while searching the category.'
        })
    })
}

exports.findAll = (req, res) => {
    Category.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while finding the categories.'
        })
    })
}

exports.search = (req, res) => {
    const { category } = req.query;
    Category.findAll({
        where: {
            category: {
                [Op.like]: `%${category}%`
            }
        }
    })
    .then(data => {
        if (data.length === 0) {
            return res.status(404).send({
                message: `No category found with name: ${category}.`
            })
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error while searching for category by name.'
        })
    })
}
