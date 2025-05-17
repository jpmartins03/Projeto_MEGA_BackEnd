// // Verifique se a conexão com o banco está correta
// const pool = require('../database/db');  

// // Renderiza a página inicial
// const getAll = (req, res) => {
//     return res.render("index");
// };

// // Retorna todas as tarefas em JSON
// const getTasks = (req, res) => {
//   pool.query('SELECT * FROM tasks', (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Erro no banco de dados' });
//     }
//     res.status(200).json(result.rows);  // Retorna todas as tarefas no banco
//   });
// };

// // Insere nova tarefa
// const createTask = (req, res) => {
//   const { task_name, descricao } = req.body;

//   pool.query(
//     'INSERT INTO tasks (task_name, descricao) VALUES ($1, $2) RETURNING *',
//     [task_name, descricao],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ message: 'Erro ao inserir tarefa' });
//       }
//       res.status(201).json(result.rows[0]);
//     }
//   );
// };

// // Exporta todos os controladores de uma vez
// module.exports = {
//   getAll,
//   getTasks,
//   createTask,
// };


const pool = require('../database/db');

const getTasks = (req, res) => {
  pool.query('SELECT * FROM tasks', (err, result) => {

    if (err) {
      return res.status(500).json({ message: 'Erro no banco de dados' });
    }
    res.status(200).json(result.rows);
  });
};

const createTask = (req, res) => {
  const { task_name } = req.body;

  if (!task_name) {
    return res.status(400).json({ message: 'Nome da tarefa é obrigatório' });
  }

  pool.query('INSERT INTO tasks (task_name) VALUES ($1) RETURNING *', [task_name], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao inserir tarefa', error: err });
    }
    res.status(201).json(result.rows[0]);
  });
};

module.exports = {
  getTasks,
  createTask,
};
