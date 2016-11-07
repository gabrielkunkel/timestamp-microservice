/**
 * Created by gabrielkunkel on 11/3/16 in JavaScript.
 */

import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../src/server'

const should = chai.should()

chai.use(chaiHttp);

describe("Timestamp Microservice", function () {

  it("should have a functioning test suite", function() {
    [].should.be.empty;
  }); // end it

  it("is defined as an express server", function() {
    server.should.be.ok;
    server.use.should.be.ok;
    server.route.should.be.ok;
    server.set.should.be.ok;
  }); // end it

  it("should deliver an index.html file on GET /", function(done) {

    chai.request(server)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });

  }); // end it

  it("should return a json object when param", function(done) {

    chai.request(server)
      .get('/abc')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });

  }); // end it

  it("should return the unix date when unix param.", function(done) {

    chai.request(server)
      .get('/1450137600')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.unix.should.be.eql('1450137600');
        done();
      })

  }); // end it

  it("should return the mixed type object when submitting a unix timestamp string arg", function(done) {
    let timeObj = {
      unix: '1450080000',
      natural: 'December 14, 2015'
    }

      chai.request(server)
      .get('/' + timeObj.unix)
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.eql(timeObj);
        done();
      })

  }); // end it

  it("should return the mixed type object when submitting a natural lang timestamp string arg", function(done) {
    let timeObj = {
      unix: '1450080000',
      natural: 'December 14, 2015'
    }

    chai.request(server)
      .get('/' + timeObj.natural)
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.eql(timeObj);
        done();
      })

  }); // end it

  it("should return the mixed type object with both fields null if wrong input unix", function(done) {

    let wrongObj = {
      unix: null,
      natural: null
    }

    chai.request(server)
      .get('/' + 'm1450080000')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.eql(wrongObj);
        done();
      })

  }); // end it

  it("should return the mixed type object with both fields null if wrong input natural", function(done) {

    let wrongObj = {
      unix: null,
      natural: null
    }

    chai.request(server)
      .get('/' + 'Nuvomber 17, 2009')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.eql(wrongObj);
        done();
      })

  }); // end it



}); // end describe