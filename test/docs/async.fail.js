var assert = require('assert');

setTimeout(function() {
  assert.ok(false, 'fails');
}, 5);
