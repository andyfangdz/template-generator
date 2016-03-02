var Handlebars = require('handlebars');

module.exports = {
    lang: "cpp",
    ext: "cpp",
    rules: {
        "int": {
            repr: "int",
            parser: "parseInt",
            encoder: "defaultEncoder"
        },
        "double": {
            repr: "double",
            parser: "parseDouble",
            encoder: "defaultEncoder"
        }
    },
    templates: {
        "solution": Handlebars.compile(require("raw!../templates/cpp/solution.cpp")),
        "main": Handlebars.compile(require("raw!../templates/cpp/main.cpp"))
    }
}
