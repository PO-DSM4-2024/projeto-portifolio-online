import express from 'express';
import sequelize from './config/database.js';
import dotenv from 'dotenv';
import Alunos from './models/Alunos.js';
import Cursos from './models/Cursos.js';
import Permissoes from './models/Permissoes.js';
import Roles from './models/Roles.js';
import Turmas from './models/Turmas.js';
import Usuarios from './models/Usuarios.js';
import alunosRoutes from './routes/alunosRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', alunosRoutes);
app.use('/', usuariosRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida.');

    await sequelize.sync();
    console.log('Sincronização realizada com sucesso');

    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('Não foi possivel conectar com o banco de dados:', error);
  }
};

run();
