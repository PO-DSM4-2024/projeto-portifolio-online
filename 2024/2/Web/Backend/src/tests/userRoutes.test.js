import request from 'supertest';
import app from '../index.js';

let id_mock = 0;
let token = '';

describe('Testes da rota Users', () => {
  test('GET /api/users - deve retornar a lista de usuários', async () => {
    const res = await request(app).get('/api/users').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/users - deve criar um novo usuário', async () => {
    const newUser = {
      nome_completo: 'Maria Silva',
      email: 'maria@example.com',
      senha: 'senha123',
      tipo_usuario: 'estudante',
    };

    const res = await request(app).post('/api/users').send(newUser).expect(201);
    expect(res.body.nome_completo).toBe('Maria Silva');
    expect(res.body.email).toBe('maria@example.com');
    id_mock = res.body.id_usuario;
  });

  test('GET /api/users/:id - deve retornar um usuário pelo ID', async () => {
    const res = await request(app).get(`/api/users/${id_mock}`).expect(200);
    expect(res.body.id_usuario).toBe(id_mock);
    expect(res.body.nome_completo).toBe('Maria Silva');
  });

  test('PUT /api/users/:id - deve atualizar um usuário pelo ID', async () => {
    const updatedData = {
      nome_completo: 'Maria Silva Souza',
      email: 'maria.souza@example.com',
    };

    const res = await request(app).put(`/api/users/${id_mock}`).send(updatedData).expect(200);
    expect(res.body.message).toBe('usuário atualizado com sucesso.');
  });

  test('POST /api/users/login - deve autenticar um usuário e retornar um token', async () => {
    const loginData = {
      email: 'maria.souza@example.com',
      senha: 'senha123',                 
    };

    const res = await request(app).post('/api/users/login').send(loginData).expect(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  test('DELETE /api/users/:id - deve deletar um usuário pelo ID', async () => {
    await request(app).delete(`/api/users/${id_mock}`).expect(204);
    const res = await request(app).get(`/api/users/${id_mock}`).expect(404);
    expect(res.body.message).toBe('usuário não encontrado.');
  });
});
