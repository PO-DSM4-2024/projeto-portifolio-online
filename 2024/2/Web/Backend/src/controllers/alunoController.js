import Students from '../models/Alunos.js';

const getStudents = async (req, res) => {
  try {
    const students = await Students.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await Students.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Students.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: 'Aluno não encontrado.' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Students.update(req.body, { where: { id_aluno: id } });
    if (!updated) {
      return res.status(404).json({ message: 'Aluno não encontrado.' });
    }
    const updatedStudent = await Students.findByPk(id);
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Students.destroy({ where: { id_aluno: id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Aluno não encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getStudents, createStudent, getStudentById, updateStudent, deleteStudent };
