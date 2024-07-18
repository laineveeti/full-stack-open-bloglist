const mongoose = require('mongoose');
const app = require('../../app');
const supertest = require('supertest');
const api = supertest(app);
const jwt = require('jsonwebtoken');
const config = require('../../utils/config');

beforeEach(async () => {
    await api.post('/api/testing/reset');
});

describe('POST /api/login', () => {
    test('returns valid token when correct credentials are given', async () => {
        const response = await api
            .post('/api/login')
            .send({ username: 'user1', password: 'salasana' });
        expect(response.body.token).toBeDefined();
        expect(jwt.verify(response.body.token, config.SECRET).id).toBeDefined();
    });

    test('returns user information when correct credentials are given', async () => {
        const response = await api
            .post('/api/login')
            .send({ username: 'user1', password: 'salasana' });
        expect(response.body.username).toBe('user1');
    });

    test('responds with 401 when incorrect credentials are given', async () => {
        await api
            .post('/api/login')
            .send({ username: 'user', password: 'salasana' })
            .expect(401);
    });
});

afterAll(() => {
    mongoose.connection.close();
});
