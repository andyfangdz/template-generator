/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var config = __webpack_require__(1);

	/*
	 * Patch a parameter with:
	 *  - repr
	 *  - parser
	 *  - encoder
	 */
	function patch(param, lang) {
	    return _extends({}, param, lang.rules[param.type]);
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    "languages": {
	        cpp: __webpack_require__(2),
	        python: __webpack_require__(3),
	        java: __webpack_require__(4)
	    },
	    "types": ["int", "int[]", "int&"]
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    lang: "cpp",
	    ext: "cpp",
	    rules: {
	        "int": {
	            repr: "int",
	            parser: "parseInt",
	            encoder: undefined
	        }
	    },
	    templates: {
	        "solution": "class Solution {\npublic:\n    /*\n     {{#params}}\n     * param {{name}}: {{desc}}\n     {{/params}}\n     * return: {{retdesc}}\n     */\n    {{rettype}} {{method}}({{#params}}{{repr}} {{name}}{{#unless @last}}, {{/unless}}{{/params}}) {\n        // {{hint}}\n    }\n};\n",
	        "main": "int main() {\n    string data;\n    std::getline(std::cin, data);\n    //load the data -> data[]\n    {{#params}}\n    {{repr}} {{name}} = {{parser}}(data[{{@index}}]);\n    {{/params}}\n    Solution solution;\n    std::cout << solution.{{method}}({{#params}{{name}}{{#unless @last}}, {{/unless}}{{/params}}) << std::endl;\n    return 0;\n}"
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ }
/******/ ]);