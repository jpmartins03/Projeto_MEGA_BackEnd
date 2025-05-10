const getAll = (req, res) => {
    return res.render("index");
};

module.exports = {
    getAll,
};

// // Lógica de banco de dados
const pool = require('../database/db');

async function listarTarefas() {
  const result = await pool.query('SELECT * FROM tarefas');
  return result.rows;
}
module.exports = { listarTarefas };
