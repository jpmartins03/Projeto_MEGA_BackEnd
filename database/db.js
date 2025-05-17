const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',                 // Seu usuário do PostgreSQL
  host: 'localhost',               // Host do banco
  database: 'controle_tarefas',    // Nome do banco de dados
  password: 'facom',               // Senha do seu usuário
  port: 5432,                      // Porta padrão do PostgreSQL
});

// Verificar conexão
pool.connect((err, client, release) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados');
    release(); // libera o cliente
  }
});

module.exports = pool;
