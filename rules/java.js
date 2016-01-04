var Handlebars = require('handlebars');

module.exports = {
    lang: "java",
    ext: "java",
    rules: {
        "int": {
            repr: "int",
            parser: "parseInt",
            encoder: "defaultEncoder"
        }
    },
    templates: {
        "solution": Handlebars.compile(require("raw!../templates/java/Solution.java")),
        "main": Handlebars.compile(require("raw!../templates/java/Main.java"))
    }
}
