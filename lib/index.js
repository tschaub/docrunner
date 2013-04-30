var cp = require('child_process');


/**
 * Run a script.
 * @param {string} path Full path to script.
 * @param {string} filename Name (or path) to display in stack traces.
 * @param {function(Error)} done Callback to be called when script completes.
 */
exports.runScript = function(path, filename, done) {

  var pathRe = new RegExp(path, 'g');

  /**
   * We cannot use fork here because child processes don't auto-exit in
   * Node 0.8 (see https://github.com/joyent/node/issues/3799)
   */
  var command = process.argv[0] + ' ' + path;
  var options = {
    cwd: process.cwd(),
    env: process.env
  };
  cp.exec(command, options, function(error, stdout, stderr) {
    if (error) {
      var msg = error.message.replace(pathRe, filename);
      error = new Error(msg);
    }
    done(error);
  });

};
