
# 📝 To Do List - Projeto Web com Node.js, Express e PostgreSQL

Este é um projeto de **Lista de Tarefas (To-do List)** feito com:

- 💻 HTML + JavaScript (no navegador)
- ⚙️ Node.js + Express (back-end)
- 🗄️ PostgreSQL (banco de dados relacional)
- 🖼️ EJS (para renderizar o HTML do servidor)

O objetivo é permitir que os usuários **adicionem, visualizem e removam tarefas** de forma dinâmica, com interação 100% via navegador.

---

## 📌 Funcionalidades implementadas

- ✅ Adicionar nova tarefa via formulário
- 📋 Listar todas as tarefas salvas no banco
- 🗑️ Apagar tarefas individualmente clicando no botão "Excluir"
- 🔄 Interface se atualiza automaticamente após cada ação

---

## 🗂 Estrutura do projeto

```
Projeto/
│
├── index.js # Entrada do servidor Node.js
├── controllers/
│ ├── TaskController.js # Lógica da API (get, post, delete)
│ └── ViewController.js # Renderiza views usando EJS
├── routes/
│ └── taskRoutes.js # Rotas da aplicação
│ └── viewRoutes.js # engine de visualização
├── database/
│ └── db.js # Conexão com PostgreSQL
├── views/
│ └── index.ejs # HTML com EJS
├── public/
│ └── style.css # Estilos da página (opcional)
├── package.json
└── README.md
```

---

## ⚙️ Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- EJS (template engine)
- HTML5 + JavaScript
- Fetch API (AJAX via navegador)

---

## 🧑‍💻 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/To-do-list-Projeto-Backend.git
cd To-do-list-Projeto-Backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

- Crie um banco chamado `controle_tarefas`
- Execute o seguinte comando SQL para criar a tabela:

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    descricao TEXT,
    criada_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Inicie o servidor

```bash
npx nodemon index.js
```

> O servidor estará rodando em: `http://localhost:3000`

---

## 🌐 Como usar a aplicação

1. Acesse: `http://localhost:3000`
2. Preencha o campo de tarefa e clique em **Adicionar**
3. As tarefas serão listadas logo abaixo
4. Clique em 🗑️ para apagar uma tarefa

---

## 🔗 Endpoints da API (para quem quiser integrar)

| Método | Rota         | Descrição                     |
|--------|--------------|-------------------------------|
| GET    | `/tasks`     | Retorna todas as tarefas      |
| POST   | `/tasks`     | Cria uma nova tarefa          |
| DELETE | `/tasks/:id` | Deleta uma tarefa pelo ID     |

### Exemplo de requisição POST:

```json
{
  "task_name": "Estudar Node.js"
}
```

---

## ✨ Melhorias futuras

- [ ] Marcar tarefas como concluídas
- [ ] Editar tarefas
- [ ] Autenticação de usuários
- [ ] Organização por categorias/prioridades
- [ ] Deploy online (Render, Railway, etc.)

---

## 👩‍💻 Desenvolvido por

**Helen Yukari**  
📚 Estudante de Engenharia de Computação na UFMS  
