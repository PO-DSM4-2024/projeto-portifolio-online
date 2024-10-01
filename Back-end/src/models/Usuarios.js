import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuarios = sequelize.define(
  'Usuarios',
  {
    id_usuario: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_completo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tipo_usuario: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    data_criacao: {
      type: DataTypes.TIME,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: 'usuarios',
    timestamps: true,
  }
);

export default Usuarios;
