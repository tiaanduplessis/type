function t(t){return t&&Array.isArray(t)}function n(t){return"boolean"==typeof t||t instanceof Boolean}function r(t){return"[object Date]"===Object.prototype.toString.call(t)}function e(n){return i(n)&&""===n||t(n)&&0===n.length||l(n)&&0===Object.keys(n).length}function o(t){return t instanceof Error&&void 0!==t.message}function c(t){try{return JSON.parse(t),!0}catch(t){return!1}}function u(t){return"[object Function]"===Object.prototype.toString.call(t)}function i(t){return"[object String]"===Object.prototype.toString.call(t)}function f(t){return void 0===t&&void 0===t}function b(t){return"symbol"==typeof t}function p(t){return t&&"object"==typeof t&&t.constructor===RegExp}function l(t){return t&&"object"==typeof t&&t.constructor===Object}function a(t){return t&&t.then&&"function"==typeof t.then}function y(t){return null===t}function j(t){return"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}function s(t){return j(t)&&Number.isInteger(t)}export{t as isArr,n as isBool,r as isDate,e as isEmpty,o as isErr,c as isJSON,u as isFunc,i as isStr,f as isUndef,b as isSym,p as isRegex,l as isObj,a as isProm,y as isNull,j as isNum,s as isInt};
//# sourceMappingURL=type.m.js.map
