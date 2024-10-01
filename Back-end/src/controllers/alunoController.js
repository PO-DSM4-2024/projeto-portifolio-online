import Alunos from '../models/alunos.js';

const getAlunos = async (req, res) => {
  try {
    const alunos = await Alunos.findAll();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAluno = async (req, res) => {
  try {
    const aluno = await Alunos.create(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAlunoById = async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await Alunos.findByPk(id);
    if (!aluno) {
      return res.status(404).json({ message: 'aluno não encontrado.' });
    }
    res.status(200).json(aluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Alunos.update(req.body, { where: { id_aluno: id } });
    if (!updated) {
      return res.status(404).json({ message: 'aluno não encontrado.' });
    }
    const updatedAluno = await Alunos.findByPk(id);
    res.json(updatedAluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Alunos.destroy({ where: { id_aluno: id } });
    if (!deleted) {
      return res.status(404).json({ message: 'aluno não encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAlunos, createAluno, getAlunoById, updateAluno, deleteAluno };
