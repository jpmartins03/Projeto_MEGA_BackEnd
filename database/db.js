const { Pool } = require('pg');

const pool = new Pool({
    user: 'seu_usuario',
    host: 'localhost',
    database: 'nome_do_banco',
    password: 'sua_senha',
    port: 5432,
});

pool.connect()
  .then(() => {
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao PostgreSQL:', err);
  });
module.exports = pool;
