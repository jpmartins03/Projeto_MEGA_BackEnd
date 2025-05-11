const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');  // Certifique-se de importar corretamente



// Verifique se a função está sendo importada corretamente
router.get('/tasks', TaskController.getTasks); // A função getTasks precisa ser uma função válida
router.post('/tasks', TaskController.createTask); // Certifique-se de ter uma função 'createTask' no TaskController

module.exports = router;
