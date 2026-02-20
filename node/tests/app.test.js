const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('returns a greeting', async () => {
    const res = await request(app).get('/').expect(200);
    expect(res.body).toHaveProperty('message');
  });
});

describe('GET /sum', () => {
  it('returns sum of query params', async () => {
    const res = await request(app).get('/sum?a=4&b=5').expect(200);
    expect(res.body.sum).toBe(9);
  });
});
