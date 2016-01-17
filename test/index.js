'use strict';

const chai = require('chai')
  , listver = require('../')
  , _ = require('lodash')
  ;

chai.should();

describe('listver tests', () => {
  const list = listver();
  const listDev = listver({ includeDev: true });
  const listMain = listver({ includeMain: true });
  const listArray = listver({ asArray: true });
  console.dir(list);

  it('listver() should return an object', () => {
    list.should.be.an('object');
  });

  it('listver() keys should include list-deps & load-module-pkg', () => {
    list.should.contain.all.keys('list-deps', 'load-module-pkg', 'lodash');
  });

  it('listver() values should match /^\d\.\d\.\d$/', () => {
    const pattern = /^\d\.\d\.\d$/;
    _.forEach(list, val => {
      val.should.match(pattern);
    })
  });

  it('listver() should have three properties', () => {
    Object.keys(list).should.have.length(3);
  });

  it('option "includeDev" should have five properties', () => {
    Object.keys(listDev).should.have.length(5);
  });

  it('option "includeDev" should include mocha & chai', () => {
    listDev.should.contain.all.keys('mocha', 'chai');
  });

  it('option "includeMain" should have four properties', () => {
    Object.keys(listMain).should.have.length(4);
  });

  it('option "includeMain" should include listver', () => {
    listMain.should.contain.key('listver');
  });

  it('option "asArray" should return array', () => {
    Object.keys(listArray).should.be.an('array');
  });

  it('option "asArray" should return array of objects with properties name & version', () => {
    _.forEach(listArray, dep => {
      dep.should.be.an('object');
      dep.should.include.keys('name', 'version');
    })
  });

  it('invalid option value does not break library', () => {
    const list = listver('string');
    list.should.be.an('object');
    Object.keys(list).should.have.length(3);
  });
})
