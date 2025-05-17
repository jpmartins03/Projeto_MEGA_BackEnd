const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/tasks', TaskController.getTasks);
router.post('/tasks', TaskController.createTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
