/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuClick\": () => (/* binding */ menuClick),\n/* harmony export */   \"operatingHours\": () => (/* binding */ operatingHours)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n\n\nlet menuClick = 'home';\n\nif(menuClick === 'home') {\n    (0,_store__WEBPACK_IMPORTED_MODULE_0__.headerLoad)();\n    (0,_store__WEBPACK_IMPORTED_MODULE_0__.mainPageLoad)();\n}\n\nconst buttons = document.querySelectorAll('button');\nbuttons.forEach((button => button.addEventListener('click', (e) => toggle(e))));\n\n//constructor function\nfunction operatingHours(...days) {\n    \n    let hours;\n    this.days,\n\n    this.schedule = function() {\n        let info = []; \n\n        days.forEach((day) => {\n            hours = '8am to 3pm';\n            if(day === 'Saturday' || day === 'Sunday') {\n                hours = '8am to 6pm';\n            }\n            if(day === 'Monday' || day === 'Tuesday') {\n                hours = 'closed';\n            }\n            info += ` ${day}: ${hours} <br> <br>`\n            \n\n            return info;\n        })\n        return info;\n    }\n\n    this.displaySchedule = function() {\n        const info = this.schedule();\n\n        const infoDisplay = document.querySelector('#info-display');\n        infoDisplay.innerHTML = `${info}`;\n\n    }\n}\n\nlet display = new operatingHours('Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday');\ndisplay.displaySchedule();\n\nfunction home() {\n    if(menuClick === 'store') {\n        (0,_store__WEBPACK_IMPORTED_MODULE_0__.removeStorePage)();\n    }\n    if(menuClick === 'contact') {\n        (0,_store__WEBPACK_IMPORTED_MODULE_0__.removeContactPage)();\n    }\n\n    menuClick = 'home';\n    (0,_store__WEBPACK_IMPORTED_MODULE_0__.mainPageLoad)();\n    display.displaySchedule();\n}\nfunction store() {\n\n    if(menuClick === 'home') {\n        (0,_store__WEBPACK_IMPORTED_MODULE_0__.removeHomePage)();\n    }\n    if(menuClick === 'contact') {\n        (0,_store__WEBPACK_IMPORTED_MODULE_0__.removeContactPage)();\n    }\n\n    menuClick = 'store';\n\n    (0,_store__WEBPACK_IMPORTED_MODULE_0__.storePageLoad)();\n}\nfunction contact() {\n\n    if(menuClick === 'home') {\n        (0,_store__WEBPACK_IMPORTED_MODULE_0__.removeHomePage)();\n    }\n    if(menuClick === 'store') {\n        (0,_store__WEBPACK_IMPORTED_MODULE_0__.removeStorePage)();\n    }\n\n    menuClick = 'contact';\n\n    (0,_store__WEBPACK_IMPORTED_MODULE_0__.contactPageLoad)();\n}\n\n\nfunction toggle(e) {\n    if(e.target.id === 'home') {\n        home();\n        return;\n    }\n    if(e.target.id === 'store') {\n        store();\n        return;\n    }\n    if(e.target.id === 'contact') {\n        contact();\n        return;\n    }\n    return;\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPageLoad\": () => (/* binding */ contactPageLoad),\n/* harmony export */   \"headerLoad\": () => (/* binding */ headerLoad),\n/* harmony export */   \"mainPageLoad\": () => (/* binding */ mainPageLoad),\n/* harmony export */   \"removeContactPage\": () => (/* binding */ removeContactPage),\n/* harmony export */   \"removeHomePage\": () => (/* binding */ removeHomePage),\n/* harmony export */   \"removeStorePage\": () => (/* binding */ removeStorePage),\n/* harmony export */   \"storePageLoad\": () => (/* binding */ storePageLoad)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst container = document.getElementById('container');\n\nconst headerLoad = () => {\n\n    const head = document.createElement('div');\n    head.setAttribute('class', 'head');\n\n    const title = document.createElement('div');\n    title.setAttribute('id', 'title');\n\n    const makeButtons = document.createElement('div');\n    makeButtons.setAttribute('class', 'buttons');\n\n    const homeBtn = document.createElement('button');\n    homeBtn.setAttribute('id', 'home');\n    homeBtn.innerText = 'Home';\n\n    const storeBtn = document.createElement('button'); \n    storeBtn.setAttribute('id', 'store');\n    storeBtn.innerText = 'Store';\n\n    const contactBtn = document.createElement('button');\n    contactBtn.setAttribute('id', 'contact');\n    contactBtn.innerText = 'Contact';\n\n    container.appendChild(head);\n\n    head.appendChild(title);\n    head.appendChild(makeButtons);\n\n    makeButtons.appendChild(homeBtn);\n    makeButtons.appendChild(storeBtn);\n    makeButtons.appendChild(contactBtn);\n\n}\n\nconst mainPageLoad = () => {\n    const bubbleGumBackground = document.createElement('div');\n    bubbleGumBackground.setAttribute('class', 'bubbleGumBackground');\n\n    container.appendChild(bubbleGumBackground);\n\n    const bubbleGum = document.createElement('div');\n    bubbleGum.setAttribute('class', 'bubbleGum');\n\n    const infoDiv = document.createElement('div');\n    infoDiv.setAttribute('class', 'infoDiv');\n\n    const infoTitle = document.createElement('h2');\n    infoTitle.setAttribute('id', 'info-title');\n    infoTitle.innerHTML = 'Weekly Schedule';\n\n    const hours = document.createElement('h3');\n\n    const footer = document.createElement('footer');\n    const photoCred = document.createElement('p');\n    photoCred.innerHTML = 'Photo: Phil McDonald/Shutterstock';\n\n    bubbleGumBackground.appendChild(bubbleGum);\n    bubbleGum.appendChild(infoDiv);\n    bubbleGum.setAttribute('id', 'schedule');\n\n    let infoDisplay = document.createElement('h3');\n    infoDisplay.setAttribute('id', 'info-display');\n    \n\n    infoDiv.appendChild(infoTitle);\n    infoDiv.appendChild(infoDisplay);\n\n    container.appendChild(footer);\n    footer.appendChild(photoCred);\n}\n\nconst storePageLoad = () => {\n\n    const productDiv = document.createElement('div');\n    productDiv.setAttribute('id', 'product-div');\n\n    const product1Div = document.createElement('div');\n    product1Div.setAttribute('class', 'product');\n    const product1Info = document.createElement('div');\n    const product1Name = document.createElement('div');\n    product1Name.innerHTML = 'Assorted Gum';\n    const product1Price = document.createElement('div');\n    product1Price.innerHTML = '$8/lb';\n\n\n    const product2Div = document.createElement('div');\n    product2Div.setAttribute('class', 'product');\n    const product2Info = document.createElement('div');\n    const product2Name = document.createElement('div');\n    product2Name.innerHTML = 'Tablets';\n    const product2Price = document.createElement('div');\n    product2Price.innerHTML = '$8/lb';\n\n    const product3Div = document.createElement('div');\n    product3Div.setAttribute('class', 'product');\n    const product3Info = document.createElement('div');\n    const product3Name = document.createElement('div');\n    product3Name.innerHTML = 'Gum Sticks';\n    const product3Price = document.createElement('div');\n    product3Price.innerHTML = '$8/lb';\n\n\n    container.appendChild(productDiv);\n    productDiv.appendChild(product1Div);\n    productDiv.appendChild(product2Div);\n    productDiv.appendChild(product3Div);\n\n    product1Div.appendChild(product1Info);\n    product1Info.appendChild(product1Name);\n    product1Info.appendChild(product1Price);\n\n    product2Div.appendChild(product2Info);\n    product2Info.appendChild(product2Name);\n    product2Info.appendChild(product2Price);\n\n    product3Div.appendChild(product3Info);\n    product3Info.appendChild(product3Name);\n    product3Info.appendChild(product3Price);\n\n}\n\nconst contactPageLoad = () => {\n\n    const formDiv = document.createElement('div');\n    formDiv.setAttribute('id', 'form-div');\n    \n    const pageTitle = document.createElement('h3');\n    pageTitle.innerHTML = 'Contact Us';\n\n    const form = document.createElement('form');\n\n    const textarea = document.createElement('textarea');\n    textarea.setAttribute('rows', '20');\n    textarea.setAttribute('cols', '60');\n\n    const i = document.createElement('input');\n    i.setAttribute('type', 'text');\n\n    const s = document.createElement(\"button\");\n    s.setAttribute('type', \"submit\");\n    s.setAttribute('id', \"submit\");\n\n    s.innerText = \"Submit\"\n\n    container.appendChild(formDiv);\n    formDiv.appendChild(pageTitle);\n    formDiv.appendChild(form);\n    formDiv.appendChild(textarea);\n\n    form.appendChild(i);\n    formDiv.appendChild(s);\n\n}\n\n//remove pages\nconst removeHomePage = () => {\n    let removeMain = document.querySelector('.bubbleGumBackground');\n    removeMain.remove();\n    let mainFooter = document.querySelector('footer');\n    mainFooter.remove();\n}\nconst removeStorePage = () => {\n    let removeStore = document.querySelector('#product-div');\n    removeStore.remove();\n}\nconst removeContactPage = () => {\n    let removeForm = document.querySelector('#form-div')\n    removeForm.remove();\n}\n\n\nconst exportElements = () => {\n    if(_index__WEBPACK_IMPORTED_MODULE_0__.menuClick === 'home') {\n        exportFunction = {headerLoad, mainPageLoad};\n    }\n    if(_index__WEBPACK_IMPORTED_MODULE_0__.menuClick === 'store') {\n        exportFunction = {headerLoad, storePageLoad};\n    }\n    if(_index__WEBPACK_IMPORTED_MODULE_0__.menuClick === 'contact') {\n        exportFunction = {headerLoad, contactPageLoad};\n    }\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/store.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;