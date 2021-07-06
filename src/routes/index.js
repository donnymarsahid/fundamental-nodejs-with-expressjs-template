const express = require('express')

const router = express.Router()

// Controller
const { getTodos, getTodo, addTodo, updateTodo, deleteTodo } = require('../controllers/todo')
// Get controller user here

// Route
router.get('/todos', getTodos)
router.get('/todo/:id', getTodo)
router.post('/todo', addTodo)
router.patch('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

// Create Route user here

module.exports = router