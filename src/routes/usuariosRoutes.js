import express from 'express';

import {
  getUsuarios,
  createUsuario,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuario);
router.get('/usuarios/:id', getUsuarioById);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

export default router;
