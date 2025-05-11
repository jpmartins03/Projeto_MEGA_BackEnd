const getAll = (req, res) => {
    return res.render("index");
};

module.exports = {
    getAll,
};

const pool = require('../database/db');  // Verifique se a conexão com o banco está correta

const getTasks = (req, res) => {
  pool.query('SELECT * FROM tarefas', (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro no banco de dados' });
    }
    res.status(200).json(result.rows);  // Retorna todas as tarefas no banco
  });
};

const createTask = (req, res) => {
  const { task_name } = req.body;
  pool.query('INSERT INTO tasks (task_name) VALUES ($1) RETURNING *', [task_name], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao inserir tarefa' });
    }
    res.status(201).json(result.rows[0]);
  });
};

module.exports = {
  getTasks,
  createTask,
};
