const { Pool } = require('pg');
// require('dotenv').config(); // Carregar variáveis do arquivo .env

const pool = new Pool({
 user: 'postgres',                 
  host: 'localhost',               
  database: 'controle_tarefas',   
  password: 'facom',               
  port: 5432,             
});

pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados');
  }
});

module.exports = pool;
