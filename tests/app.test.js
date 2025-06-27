const request = require('supertest');
const app = require('../app/index');

describe('GET /', () => {
  it('should return 200 and success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('CI/CD Pipeline is working!');
  });
});
