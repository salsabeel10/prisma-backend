const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.post('/',categoryController.createCategory)

router.get('/',categoryController.getCategory)

router.delete('/:id',categoryController.deleteCategory)

module.exports =router