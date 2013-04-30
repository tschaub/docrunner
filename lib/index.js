var cp = require('child_process');

exports.runScript = function(path, filename, done) {

  var options = {
    cwd: process.cwd(),
    env: process.env,
    silent: true,
    stdio: 'pipe'
  };

  var run = cp.fork(path, [], options);

  var errors = [];
  run.stderr.on('data', function(data) {
    errors.push(data.toString());
  });

  run.on('exit', function(code) {
    if (code) {
      var msg = errors.join('\n').replace(new RegExp(path, 'g'), filename);
      done(new Error(msg));
    } else {
      done();
    }
  });

};
