/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/hello_react.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /mnt/c/users/weizheng/projectsGA/03/02/shopping-react/app/javascript/packs/hello_react.jsx: Unexpected token (12:0)\n\n  10 | const Hello = props => (\n  11 |   //<div>Hello {props.name}!<Search/></div>\n> 12 | )\n     | ^\n  13 | \n  14 | Hello.defaultProps = {\n  15 |   name: 'David'\n    at Object.raise (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:6975:17)\n    at Object.unexpected (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:8368:16)\n    at Object.parseParenAndDistinguishExpression (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9797:12)\n    at Object.parseExprAtom (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9548:21)\n    at Object.parseExprAtom (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:4097:20)\n    at Object.parseExprSubscripts (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseFunctionBody (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:10204:24)\n    at Object.parseArrowExpression (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:10163:10)\n    at Object.parseExprAtom (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9501:18)\n    at Object.parseExprAtom (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:4097:20)\n    at Object.parseExprSubscripts (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseVar (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:11307:26)\n    at Object.parseVarStatement (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:11126:10)\n    at Object.parseStatementContent (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:10723:21)\n    at Object.parseStatement (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Object.parseBlockOrModuleBlockBody (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Object.parseBlockBody (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Object.parseTopLevel (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:10587:10)\n    at Object.parse (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:12097:10)\n    at parse (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/parser/lib/index.js:12148:38)\n    at parser (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\n    at normalizeFile (/mnt/c/users/weizheng/projectsGA/03/02/shopping-react/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)");

/***/ })

/******/ });
//# sourceMappingURL=hello_react-b6bdd0b36007f9cd5793.js.map