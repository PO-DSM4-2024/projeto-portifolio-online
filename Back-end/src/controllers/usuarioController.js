import Usuarios from '../models/usuarios.js';
import bcrypt from 'bcrypt';
import { login } from '../services/authService.js';

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUsuario = async (req, res) => {
  const { nome_completo, email, senha, tipo_usuario } = req.body;

  try {
    const existingUser = await Usuarios.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'email já cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);
    const currentTime = new Date().toTimeString().split(' ')[0];

    const usuario = await Usuarios.create({
      nome_completo,
      email,
      senha: hashedPassword,
      tipo_usuario,
      data_criacao: currentTime,
      status: 'ativo',
    });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsuarioById = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'usuário não encontrado.' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome_completo, email, senha, tipo_usuario, status } = req.body;

  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'usuário não encontrado.' });
    }

    const updateData = {
      nome_completo,
      email,
      tipo_usuario,
      status,
    };

    if (senha) {
      updateData.senha = await bcrypt.hash(senha, 10);
    }

    await Usuarios.update(updateData, { where: { id_usuario: id } });
    res.json({ message: 'usuário atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Usuarios.destroy({ where: { id_usuario: id } });
    if (!deleted) {
      return res.status(404).json({ message: 'usuário não encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const { usuario, token } = await login(email, senha);
    res.status(200).json({ usuario, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export { getUsuarios, createUsuario, getUsuarioById, updateUsuario, deleteUsuario, loginUsuario };
