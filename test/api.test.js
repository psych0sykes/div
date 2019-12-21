var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = require("chai").expect;
var apiRoute = require("../routes/apiRoutes");
var server = require("../server");
var should = chai.should()

chai.use(chaiHttp);

describe('/GET divs', () => {
    it('it should GET all the divs', (done) => {
      chai.request(server)
          .get('/api/get/div')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
});
