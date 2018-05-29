// import sinon from 'sinon'
// import {expect} from 'chai'

// var sinon = require("sinon");
// var AssertionError = require("chai").AssertionError;
// var expect = require("chai").expect;

function once(fn) {
  var returnValue,
    called = false
  return function() {
    if (!called) {
      called = true
      returnValue = fn.apply(this, arguments)
    }
    return returnValue
  }
}

describe('sinon-tutorial', function() {
  it('calls the original function', function() {
    var callback = sinon.spy()
    var proxy = once(callback)

    proxy()

    assert(callback.called)
  })
})
