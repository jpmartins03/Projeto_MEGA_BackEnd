const express = require('express');
const path = require('path');

const taskRoutes = require('./routes/taskRou');
const viewRoutes = require('./routes/viewRoutes');

const app = express();
const port = 3000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas
app.use('/', viewRoutes);
app.use('/', taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
