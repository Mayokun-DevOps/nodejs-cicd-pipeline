const request = require('supertest');
const app = require('../app/index');

describe('GET /', () => {
  it('should return 200 and a success message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('CI/CD Pipeline Deployed Successfully!');
  });
});
