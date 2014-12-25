"use strict";

var should         = require("should");

var util = require("../lib/util");

describe("util.js", function() {

  /*****************************************************************/
  describe("add()", function() {
    it("add", function() {
      var result = util.add(1,2);
      should.equal(3,result);
    });

  });
});