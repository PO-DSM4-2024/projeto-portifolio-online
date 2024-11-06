import request from 'supertest';
import app from '../index.js';

let id_mock = 0;

describe('Testes da rota Materias', () => {
  test('GET /api/subjects - deve retornar a lista de matérias', async () => {
    const res = await request(app).get('/api/subjects').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/subjects - deve criar uma nova matéria', async () => {
    const newSubject = {
      nome_materia: 'Matemática',
      professor_materia: 'Prof. João Silva',
      objetivo: 'Ensinar matemática básica',
      ementa: 'Conjuntos, funções, equações',
      carga_horaria: 60,
      id_curso: 1,
    };

    const res = await request(app).post('/api/subjects').send(newSubject).expect(201);
    expect(res.body.nome_materia).toBe('Matemática');
    expect(res.body.professor_materia).toBe('Prof. João Silva');
    id_mock = res.body.id_materia; // Armazena o ID da matéria criada
  });

  test('GET /api/subjects/:id - deve retornar uma matéria pelo ID', async () => {
    const res = await request(app).get(`/api/subjects/${id_mock}`).expect(200);
    expect(res.body.id_materia).toBe(id_mock);
    expect(res.body.nome_materia).toBe('Matemática');
  });

  test('PUT /api/subjects/:id - deve atualizar uma matéria pelo ID', async () => {
    const updatedData = {
      nome_materia: 'Matemática Avançada',
      professor_materia: 'Prof. João da Silva',
    };

    const res = await request(app).put(`/api/subjects/${id_mock}`).send(updatedData).expect(200);
    expect(res.body.nome_materia).toBe('Matemática Avançada');
    expect(res.body.professor_materia).toBe('Prof. João da Silva');
  });

  test('DELETE /api/subjects/:id - deve deletar uma matéria pelo ID', async () => {
    await request(app).delete(`/api/subjects/${id_mock}`).expect(204);
    const res = await request(app).get(`/api/subjects/${id_mock}`).expect(404);
    expect(res.body.error).toBe('Subject not found');
  });
});
