import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Alunos = sequelize.define(
  'Alunos',
  {
    id_aluno: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_completo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATE,
    },
    genero: {
      type: DataTypes.TEXT,
    },
    endereco: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
    },
    telefone: {
      type: DataTypes.TEXT,
    },
    documento_identidade: {
      type: DataTypes.TEXT,
    },
    cpf: {
      type: DataTypes.TEXT,
    },
    data_matricula: {
      type: DataTypes.DATE,
    },
    numero_matricula: {
      type: DataTypes.TEXT,
    },
    id_curso: {
      type: DataTypes.BIGINT,
    },
    id_turma: {
      type: DataTypes.BIGINT,
    },
  },
  {
    tableName: 'alunos',
    timestamps: true,
  }
);

export default Alunos;
