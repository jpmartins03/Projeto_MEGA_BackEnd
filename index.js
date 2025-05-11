const express = require('express');
const path = require('path');
const routes = require('./routes/routes');


const app = express();
const port = 3000;

// Configura EJS como engine
app.set('view engine', 'ejs');

// Para servir arquivos estáticos como CSS e JS
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

// const express = require('express');
// const app = express();
// const routes = require('./routes/routes'); // Importando as rotas

// app.use(express.json()); // Para ler o corpo da requisição em JSON
// app.use('/api', routes); // Definindo a rota base para as rotas

// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });
