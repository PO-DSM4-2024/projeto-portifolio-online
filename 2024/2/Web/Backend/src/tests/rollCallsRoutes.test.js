import request from 'supertest';
import app from '../index.js';

let id_mock = 0;

describe('Testes da rota Chamadas', () => {
  test('GET /api/rollcalls - deve retornar a lista de chamadas', async () => {
    const res = await request(app).get('/api/rollcalls').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/rollcalls - deve criar uma nova chamada', async () => {
    const newRollCall = {
      id_aluno: 1,
      id_turma: 1,
      id_materia: 1,
      data_chamada: '2024-10-31',
      presenca: true,
      justificativa: 'Presença justificada.',
      horario_chamada: '08:00:00',
      observacoes: 'Nenhuma observação.',
    };

    const res = await request(app).post('/api/rollcalls').send(newRollCall).expect(201);
    expect(res.body.presenca).toBe(true);
    expect(res.body.justificativa).toBe('Presença justificada.');
    id_mock = res.body.id_chamada;
  });

  test('GET /api/rollcalls/:id - deve retornar uma chamada pelo ID', async () => {
    const id = id_mock;
    const res = await request(app).get(`/api/rollcalls/${id}`).expect(200);
    expect(res.body.id_chamada).toBe(id);
  });

  test('PUT /api/rollcalls/:id - deve atualizar uma chamada pelo ID', async () => {
    const updatedData = { presenca: false, justificativa: 'Ausência justificada.' };
    const id = id_mock;

    const res = await request(app).put(`/api/rollcalls/${id}`).send(updatedData).expect(200);
    expect(res.body.presenca).toBe(false);
    expect(res.body.justificativa).toBe('Ausência justificada.');
  });

  test('DELETE /api/rollcalls/:id - deve deletar uma chamada pelo ID', async () => {
    const id = id_mock;

    await request(app).delete(`/api/rollcalls/${id}`).expect(204);
    const res = await request(app).get(`/api/rollcalls/${id}`).expect(404);
    expect(res.body.message).toBe('Chamada não encontrada.');
  });
});
