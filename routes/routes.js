const routes = require("express").Router();
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAll)

module.exports = routes


// Rota para listar todas as tarefas
router.get('/tarefas', TaskController.listarTarefas);

// // Rota para criar uma nova tarefa
// router.post('/tarefas', TaskController.criarTarefa);

// // Rota para marcar uma tarefa como feita
// router.put('/tarefas/:id', TaskController.atualizarTarefa);

// // Rota para deletar uma tarefa
// router.delete('/tarefas/:id', TaskController.deletarTarefa);

module.exports = router;
