var config = require('./rules/index');


if (typeof Object.assign != 'function') {
  (function() {
    Object.assign = function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

/*
 * Patch a parameter with:
 *  - repr
 *  - parser
 *  - encoder
 */
function patchParam(param, lang) {
  lang = config.languages[lang];
  return {
    ...param,
    ...lang.rules[param.type]
  };
}

function patch(problem, lang) {
  var copy = Object.assign({}, problem);
  copy.params = copy.params.map(p => patchParam(p, lang));
  copy.return = patchParam(copy.return, lang);
  return copy;
}

function transform(problem) {
  var result = {};
  Object.keys(config.languages).map(l => result[l] = {
    solution: config.languages[l].templates.solution(patch(problem, l)),
    main: config.languages[l].templates.main(patch(problem, l))
  });
  return result;
}

var stdin = process.stdin,
  stdout = process.stdout,
  inputChunks = [];

stdin.setEncoding('utf8');

stdin.on('data', function(chunk) {
  inputChunks.push(chunk);
});

stdin.on('end', function() {
  var inputJSON = inputChunks.join(),
    parsedData = JSON.parse(inputJSON);
  stdout.write(JSON.stringify(transform(parsedData), null, 2));
});

module.exports = transform;
