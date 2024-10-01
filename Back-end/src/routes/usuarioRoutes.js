import express from 'express';

import {
  getUsuarios,
  createUsuario,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
  loginUsuario,
} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuario);
router.get('/usuarios/:id', getUsuarioById);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);
router.post('/usuarios/login', loginUsuario);

export default router;
