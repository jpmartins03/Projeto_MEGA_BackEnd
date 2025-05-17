const pool = require('../database/db');

const getTasks = (req, res) => {
  console.log("➡️ GET /tasks chamado");  // log útil
  pool.query('SELECT * FROM tasks', (err, result) => {
    if (err) {
      console.error("❌ Erro ao buscar tarefas:", err);
      return res.status(500).json({ message: 'Erro no banco de dados' });
    }
    console.log("✅ Tarefas retornadas com sucesso");
    res.status(200).json(result.rows);
  });
};

const createTask = (req, res) => {
  console.log("➡️ POST /tasks chamado");  // log útil
  const { task_name } = req.body;
  console.log("📥 Dados recebidos:", task_name);

  pool.query('INSERT INTO tasks (task_name) VALUES ($1) RETURNING *', [task_name], (err, result) => {
    if (err) {
      console.error("❌ Erro ao inserir tarefa:", err);
      return res.status(500).json({ message: 'Erro ao inserir tarefa' });
    }
    console.log("✅ Tarefa inserida com sucesso:", result.rows[0]);
    res.status(201).json(result.rows[0]);
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id], (err, result) => {
    if (err) {
      console.error("❌ Erro ao apagar tarefa:", err);
      return res.status(500).json({ message: 'Erro ao apagar tarefa' });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    console.log(`🗑️ Tarefa ${id} apagada com sucesso`);
    res.status(200).json({ message: 'Tarefa apagada com sucesso' });
  });
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
