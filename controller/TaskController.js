const getAll = (req, res) => {
    return res.render("index");
};

module.exports = {
    getAll,
};

// controller/TaskController.js
const pool = require('../database/db');

const getTasks = (req, res) => {
  // Sua lógica para buscar as tarefas
  pool.query('SELECT * FROM tarefas', (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro no banco de dados' });
    }
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getTasks,
};
