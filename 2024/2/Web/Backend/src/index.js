import express from 'express';
import sequelize from './config/database.js';
import dotenv from 'dotenv';
import alunosRoutes from './routes/alunoRoutes.js';
import usuariosRoutes from './routes/usuarioRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import rollCallRoutes from './routes/rollCallRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/subjects', subjectRoutes);
app.use('/api/students', alunosRoutes);
app.use('/api/users', usuariosRoutes);
app.use('/api/rollcalls', rollCallRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida.');
    await sequelize.sync();
    console.log('Sincronização realizada com sucesso');

    // Inicia o servidor apenas se o arquivo estiver sendo executado diretamente
    if (import.meta.url === `file://${process.argv[1]}`) {
      app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
      });
    }
  } catch (error) {
    console.error('Não foi possível conectar com o banco de dados:', error);
  }
};

run();

export default app;
