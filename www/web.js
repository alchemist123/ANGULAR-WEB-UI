(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "./node_modules/@capacitor/app/dist/esm/web.js":
/*!*****************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/web.js ***!
  \*****************************************************/
/*! exports provided: AppWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWeb", function() { return AppWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");

class AppWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super();
        this.handleVisibilityChange = () => {
            const data = {
                isActive: document.hidden !== true,
            };
            this.notifyListeners('appStateChange', data);
        };
        document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
    }
    exitApp() {
        throw this.unimplemented('Not implemented on web.');
    }
    async getInfo() {
        throw this.unimplemented('Not implemented on web.');
    }
    async getLaunchUrl() {
        return { url: '' };
    }
    async getState() {
        return { isActive: document.hidden !== true };
    }
    async minimizeApp() {
        throw this.unimplemented('Not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web.js.map