var config = require('./rules/index');


/*
 * Patch a parameter with:
 *  - repr
 *  - parser
 *  - encoder
 */
function patchParam(param, lang) {
    return {
        ...param,
        ...lang.rules[param.type]
    };
}

function patch(problem, lang) {
    var copy = Object.assign({}, problem);
    copy.params.map(p => patchParam(p, config.languages[lang]));
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

stdin.on('data', function (chunk) {
    inputChunks.push(chunk);
});

stdin.on('end', function () {
    var inputJSON = inputChunks.join(),
        parsedData = JSON.parse(inputJSON);
    stdout.write(JSON.stringify(transform(parsedData), null, 2));
});

module.exports = transform;