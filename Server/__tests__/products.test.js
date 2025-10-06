const request = require('supertest');
const app = require('../server');

describe('GET /api/products', () => {
  it('returns an array of products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('id');
      expect(res.body[0]).toHaveProperty('description');
      expect(res.body[0]).toHaveProperty('price');
    }
  });
});


