'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server.js');

describe('### GET /users/[user_id]', function() {
  this.timeout(5000); // timeout until show the response (ms)

  before(function() {

  });

  after(function() {

  });

  // GET - List user Category by user id
  it('should return data', function() {
    return chai.request(app)
      .get('/users/1')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        
      });
  });

  // GET - Invalid path
  it('should return not found', function() {
    return chai.request(app)
      .get('/ushgg')
      .then(function(res) {
        expect(res).to.have.status(404);
      });
  });

  
  // GET - Wrong type of url
  it('should return wrong type url', function() {
    return chai.request(app)
      .get('/users/1')
      .type('form')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});