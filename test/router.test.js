const request = require('supertest');
const app = require('../server/app');

// testing getall route
test('Get to /reviews should send a response', (done) => {
  request(app)
    .get('/reviews')
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
});