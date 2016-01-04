var Handlebars = require('handlebars');

module.exports = {
    lang: "python",
    ext: "py",
    rules: {
        "int": {
            repr: "int",
            parser: "parseInt",
            encoder: "defaultEncoder"
        }
    },
    templates: {
        "solution": Handlebars.compile(require("raw!../templates/python/solution.py")),
        "main": Handlebars.compile(require("raw!../templates/python/main.py"))
    }
}
