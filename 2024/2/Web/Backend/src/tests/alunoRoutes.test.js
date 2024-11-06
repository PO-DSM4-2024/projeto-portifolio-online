import request from 'supertest';
import app from '../index.js';

let id_mock = 0;

describe('Testes da rota Aluno', () => {
  test('GET /api/students - deve retornar a lista de alunos', async () => {
    const res = await request(app).get('/api/students').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/students - deve criar um novo aluno', async () => {
    const newStudent = {
      nome_completo: 'João Silva',
      data_nascimento: '2000-01-01',
      email: 'joao@example.com',
    };

    const res = await request(app).post('/api/students').send(newStudent).expect(201);
    expect(res.body.nome_completo).toBe('João Silva');
    expect(res.body.email).toBe('joao@example.com');
    id_mock = res.body.id_aluno;
  });

  test('GET /api/students/:id - deve retornar um aluno pelo ID', async () => {
    const id = id_mock;
    const res = await request(app).get(`/api/students/${id}`).expect(200);
    expect(res.body.id_aluno).toBe(id);
  });

  test('PUT /api/students/:id - deve atualizar um aluno pelo ID', async () => {
    const updatedData = { nome_completo: 'João Atualizado' };
    const id = id_mock;

    const res = await request(app).put(`/api/students/${id}`).send(updatedData).expect(200);
    expect(res.body.nome_completo).toBe('João Atualizado');
  });

  test('DELETE /api/students/:id - deve deletar um aluno pelo ID', async () => {
    const id = id_mock;

    await request(app).delete(`/api/students/${id}`).expect(204);
    const res = await request(app).get(`/api/students/${id}`).expect(404);
    expect(res.body.message).toBe('Aluno não encontrado.');
  });
});
