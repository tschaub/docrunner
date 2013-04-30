var path = require('path');
var assert = require('chai').assert;
var docrunner = require('../../lib');


var docs = path.join(__dirname, '..', 'docs');


describe('runScript()', function() {

  var cases = {
    'assert.pass.js': true,
    'assert.fail.js': false,
    'async.pass.js': true,
    'async.fail.js': false
  };

  function register(name, passes) {
    var script = path.join(docs, name);
    if (passes) {
      describe(name, function() {
        it('passes', function(done) {
          docrunner.runScript(script, script, done);
        });
      });
    } else {
      describe(name, function() {
        it('fails', function(done) {
          docrunner.runScript(script, script, function(error) {
            assert.instanceOf(error, Error, 'error');
            done();
          });
        });
      });
    }    
  }

  for (var script in cases) {
    register(script, cases[script]);
  }

});