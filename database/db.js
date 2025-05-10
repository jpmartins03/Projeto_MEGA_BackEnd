const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER, // seu usuário do PostgreSQL
  host: process.env.DB_HOST, // geralmente 'localhost'
  database: process.env.DB_NAME, // nome do banco de dados
  password: process.env.DB_PASSWORD, // sua senha do PostgreSQL
  port: process.env.DB_PORT || 5432, // porta padrão do PostgreSQL
});

pool.connect()
  .then(() => {
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao PostgreSQL:', err);
  });
module.exports = pool;
