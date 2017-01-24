# docrunner

[![Greenkeeper badge](https://badges.greenkeeper.io/tschaub/docrunner.svg)](https://greenkeeper.io/)

**Broken docs suck**

Run your docs before publishing them.

    npm install docrunner

Docrunner differs from other doctest type solutions in a number of ways:

 * no new globals (no `print`, no `wait`, no `log`, etc.)
 * no extra characters (no prompt `js>` or continuation `...`, no special
    comments `// =>`)
 * allows copy/paste of snippets directly to/from the repl
 * handles async assertions and errors naturally


## Tests

See what works by running the [tests](test).

    npm test

[![Current Status](https://secure.travis-ci.org/tschaub/docrunner.png?branch=master)](https://travis-ci.org/tschaub/docrunner)
