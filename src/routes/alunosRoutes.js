import express from 'express';
import { getAlunos, createAluno, getAlunoById, updateAluno, deleteAluno } from '../controllers/alunosController.js';

const router = express.Router();

router.get('/alunos', getAlunos);
router.post('/alunos', createAluno);
router.get('/alunos/:id', getAlunoById);
router.put('/alunos/:id', updateAluno);
router.delete('/alunos/:id', deleteAluno);

export default router;
