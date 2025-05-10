const routes = require("express").Router();
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAll)

// Definindo a rota
router.get('/tasks', TaskController.getTasks); // Verifique se está chamando a função correta

module.exports = router;
