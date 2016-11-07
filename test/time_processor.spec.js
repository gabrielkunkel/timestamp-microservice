/**
 * Created by gabrielkunkel on 11/4/16 in JavaScript.
 */

import chai from 'chai'
import time_processor from '../src/time_processor'

const should = chai.should();

describe("The Time Processor", function () {

  it("should have a functioning test suite", function() {
    ['yip'].should.not.be.empty;
  }); // end it

  describe("'s default function", function () {

    it("is defined.", function() {
      time_processor.should.be.ok;
    }); // end it

    it("should return an object with a unix property.", function() {
      let timeObj = time_processor('1450137600')

      timeObj.unix.should.be.ok;
    }); // end it

    it("should return an object with a natural property.", function() {
      let timeObj = time_processor('1450137600')

      timeObj.natural.should.be.ok;
    }); // end it

    it("should take a unix timestamp string and return an object with both types", function() {
      let timeObj = {
        unix: '1450080000',
        natural: 'December 14, 2015'
      }

      time_processor(timeObj.unix).should.be.eql(timeObj);
    }); // end it

    it("should take a natural language timestamp string and return an object with both types", function() {
      let timeObj = {
        unix: '1450080000',
        natural: 'December 14, 2015'
      }

      time_processor(timeObj.natural).should.be.eql(timeObj);
    }); // end it

    it("should take the wrong string and return null for both fields", function() {
      let timeObj = {
        unix: null,
        natural: null
      }

      time_processor('99999999999').should.be.eql(timeObj);
    }); // end it


  }); // end describe

  describe("_isUnix timestamp function", function () {

    it("should return a boolean", function() {
      time_processor._isUnix('1450137600').should.be.a('boolean');
    }); // end it

    it("should return false if there are any letters", function() {
      time_processor._isUnix('1450m137600').should.be.false;
    }); // end it

    // todo: add in check for the number of digits it should be, deadline January of 2038.

    it("should return true if there are only 10 digits", function() {
      time_processor._isUnix('1450137600').should.be.true;
    }); // end it

    it("should return true if there are fewer than 10 digits", function() {
      time_processor._isUnix('734934873').should.be.true;
    }); // end it

    it("should return false if there are greater than 10 digits", function() {
      time_processor._isUnix('73493487357').should.be.false;
    }); // end it

  }); // end describe

  describe("_isNatural timestamp function", function () {

    it("should be defined", function() {
      time_processor._isNatural.should.be.ok;
    }); // end it

    it("should return a boolean", function() {
      time_processor._isNatural('72093704').should.be.a('boolean');
      time_processor._isNatural('December 15, 2015').should.be.a('boolean');
    }); // end it

    it("should return false if it is a Unix timestamp", function() {
      time_processor._isNatural('1450137600').should.be.false;
    }); // end it

    it("should return true if it matches the formula for natural language", function() {
      time_processor._isNatural('January 3, 1987').should.be.true;
    }); // end it

    it("should return false if the natural language string has a misspelling", function() {
      time_processor._isNatural('Danbary 3, 1987').should.be.false;
    }); // end it

    it("should return false if the date is impossible", function() {
      time_processor._isNatural('January 33, 1989').should.be.false;
    }); // end it

    it("should return true if the day of the month is two digits", function() {
      time_processor._isNatural('January 15, 1989').should.be.true;
      time_processor._isNatural('February 12, 2016').should.be.true;
    }); // end it

  }); // end describe

  describe("_toNatural function", function () {

    it("should be defined", function() {
      time_processor._toNatural.should.be.ok;
    }); // end it

    it("should return a string", function() {
      time_processor._toNatural('8888888888').should.be.a('string');
    }); // end it

    it("should only process the string if it is in unix format", function() {
      time_processor._toNatural('January 6, 1984').should.be.eql('January 6, 1984');
    }); // end it

    it("should convert a unix timestamp to a natural language time stamp", function() {
      time_processor._toNatural('1450092735').should.be.eql("December 14, 2015");
    }); // end it

    it("should convert a unix timestamp with and hour above 12 to a natural language time stamp", function() {
      time_processor._toNatural('1450135935').should.be.eql("December 14, 2015");
    }); // end it

  }); // end describe

  describe("_toUnix function", function () {

    it("should be defined", function() {
      time_processor._toUnix.should.be.ok;
    }); // end it

    it("should return a string", function() {
      time_processor._toUnix('8888888888').should.be.a('string');
      time_processor._toUnix('January 12, 1984').should.be.a('string');
    }); // end it

    it("should return the argument if it is not a natural language timestamp", function() {
      time_processor._toUnix('8888888888').should.be.eql('8888888888');
    }); // end it

    it("should return the unix timestamp if it is a naturla language timestamr", function() {
      time_processor._toUnix('December 14, 2015').should.be.eql('1450080000');
    }); // end it

  }); // end describe

}); // end describe