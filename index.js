var config = require('./rules/index');


/*
 * Patch a parameter with:
 *  - repr
 *  - parser
 *  - encoder
 */
function patch(param, lang) {
    return {
        ...param,
        ...lang.rules[param.type]
    };
}

function transform(problem) {
    return patch(problem.params[0], config.languages.cpp);
}

var stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [];

stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    var inputJSON = inputChunks.join(),
        parsedData = JSON.parse(inputJSON);
    stdout.write(JSON.stringify(transform(parsedData)));
});

module.exports = transform;