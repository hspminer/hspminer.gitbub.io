(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about works!</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _web_info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/info/info.component */ "./src/app/web/info/info.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'test', component: _web_info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n-->\n<mat-toolbar class=\"demo-app-header \">\n  <!--\n    <mat-toolbar-row>\n        <button mat-icon-button>\n          <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n        </button>\n        <h1>SimpleCRM</h1>\n        <span class=\"toolbar-seprator\"></span>\n        <div>\n          <a mat-button [routerLink]=\"'/accounts'\"> 常见问题 </a>\n          <a mat-button [routerLink]=\"'/create-account'\"> 简体中文 </a>\n    \n        </div>\n      </mat-toolbar-row>\n    -->\n  <mat-toolbar-row>\n    <span><img src=\"./assets/logo3.png\" width=\"200\"></span>\n    <span class=\"example-fill-remaining-space\"></span>\n    <span class=\"align-center\"></span>\n    <span class=\"example-spacer\"></span>\n\n    <!--\n    <button mat-button><img src=\"./assets/hspminer.png\"></button>\n    <button mat-button>HSPMiner</button>\n    -->\n    <!-- 在這之後的都會被推到右邊去 -->\n    <!--\n    <span class=\"toolbar-seprator\"></span>\n    \n\n    <button mat-icon-button (click)=\"onClose()\">\n      <mat-icon>close</mat-icon>\n    </button>\n    -->\n    <button mat-button class=\"iem_padding\">常见问题</button>\n    <button mat-button [matMenuTriggerFor]=\"menu\" class=\"iem_padding\">简体中文</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>简体中文</button>\n      <button mat-menu-item>English</button>\n    </mat-menu>\n\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<main id=\"container\">\n  <router-outlet></router-outlet>\n</main>\n\n\n<app-footer></app-footer>\n\n<app-icp></app-icp>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.toolbar-seprator {\n  flex: 1 1 auto; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.xxx_transparent {\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  z-index: 2; }\n\n#container {\n  top: 64px !important; }\n\n.demo-app-header {\n  top: 0;\n  z-index: 2;\n  background-color: transparent;\n  border: 0.2px #e0e0e0;\n  border-bottom-style: solid; }\n\n.toolbar-seprator {\n  flex: 1 1 auto; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXGNvZGVcXGFuZ3VsYXJcXG15LWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU0sRUFBQTs7QUFHUjtFQUNFLGNBQWMsRUFBQTs7QUFJaEI7RUFDRTttRENGaUQ7RURJakQsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBSTdCLE1BQU07RUFDTixVQUFVLEVBQUE7O0FBV1o7RUFDRSxvQkFBb0IsRUFBQTs7QUFNdEI7RUFFRSxNQUFNO0VBQ04sVUFBVTtFQUVWLDZCQUE2QjtFQUU3QixxQkFBb0I7RUFDcEIsMEJBQXlCLEVBQUE7O0FBaUQzQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi50b29sYmFyLXNlcHJhdG9yIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuXHJcbi54eHhfdHJhbnNwYXJlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAvL2hlaWdodDogNzZweDtcclxuXHJcbiAgLy9wb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLy8td2Via2l0LWFwcC1yZWdpb246IG5vLWRyYWc7XHJcbn1cclxuXHJcbi8vIC5pZW1fcGFkZGluZ3tcclxuLy8gICBwYWRkaW5nOiAwcHggMzBweDtcclxuLy8gICBjb2xvcjogIzRhNGE0YTtcclxuLy8gICBmb250OiAxNHB4IGhiZm9udCBoYmZvbnRlblxyXG4vLyB9XHJcblxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vLyAvL+S4uuS6huWbuuWumuagh+mimCB0b29sYmFyXHJcbi8vIC8vaHR0cHM6Ly9pdGhlbHAuaXRob21lLmNvbS50dy9hcnRpY2xlcy8xMDE5MzUwNVxyXG4uZGVtby1hcHAtaGVhZGVyIHtcclxuICAvL3Bvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICAvLy13ZWJraXQtYXBwLXJlZ2lvbjogbm8tZHJhZztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAvL2JvcmRlcjo1cHggc29saWQgcmVkO1xyXG4gIGJvcmRlcjowLjJweCAjZTBlMGUwO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4vLyAuc2lkZW5hdiB7XHJcbi8vICAgd2lkdGg6IDIwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4vLyAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbi8vICAgdG9wOiAwO1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEobWF4LXdpZHRoOiA1OTlweCkge1xyXG4vLyAgICNjb250YWluZXIge1xyXG4vLyAgICAgdG9wOiA1NnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbi8vICAgLy93aWR0aDogMTAyNHB4O1xyXG4vLyAgIC8vaGVpZ2h0OiAyMDBweDtcclxuLy8gICBtYXJnaW46IDEwcHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuLy8gfVxyXG5cclxuLy8gLnNpZGVuYXYtY29udGFpbmVyIHtcclxuLy8gICAgIC8vaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcblxyXG4vLyAgIH1cclxuXHJcbi8vIC5zaWRlbmF2IHtcclxuLy8gICB3aWR0aDogMjAwcHg7XHJcbi8vIH1cclxuXHJcblxyXG4udG9vbGJhci1zZXByYXRvciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcblxyXG4vLyAuZGVtby1hcHAtY29udGFpbmVyLFxyXG4vLyAuZGVtby1hcHAtc2lkZW5hdiB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHBhZGRpbmctdG9wOiA1MDBweDtcclxuLy8gICAvL2hlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4vLyB9XHJcblxyXG4vLyAvL+ino+WGsyBtZC1zaWRlbmF2LWNvbnRhaW5lciDpq5jluqYg5YWo5bGP55qE6Zeu6aKYXHJcbi8vIC8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDQ5MTE2MjUvaG93LXRvLW1ha2UtbWQtc2lkZW5hdi1jb250YWluZXItZnVsbC1oZWlnaHQtb2YtZGl2LWluLWFuLWFuZ3VsYXI0LWFwcFxyXG4vLyAjY29udGFpbmVyIHtcclxuLy8gICB0b3A6IDY0cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4gIFxyXG4vLyBAbWVkaWEobWF4LXdpZHRoOiA1OTlweCkge1xyXG4vLyAgICNjb250YWluZXIge1xyXG4vLyAgICAgdG9wOiA1NnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy9idXR0b24geyAgLXdlYmtpdC1hcHAtcmVnaW9uOiBuby1kcmFnOyB9XHJcbiIsIi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDsgfVxuXG4udG9vbGJhci1zZXByYXRvciB7XG4gIGZsZXg6IDEgMSBhdXRvOyB9XG5cbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuXG4ueHh4X3RyYW5zcGFyZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyOyB9XG5cbiNjb250YWluZXIge1xuICB0b3A6IDY0cHggIWltcG9ydGFudDsgfVxuXG4uZGVtby1hcHAtaGVhZGVyIHtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwLjJweCAjZTBlMGUwO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDsgfVxuXG4udG9vbGJhci1zZXByYXRvciB7XG4gIGZsZXg6IDEgMSBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hspminer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _web_info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/info/info.component */ "./src/app/web/info/info.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _home_fristpage_fristpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/fristpage/fristpage.component */ "./src/app/home/fristpage/fristpage.component.ts");
/* harmony import */ var _home_secondpage_secondpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/secondpage/secondpage.component */ "./src/app/home/secondpage/secondpage.component.ts");
/* harmony import */ var _home_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/productpage/productpage.component */ "./src/app/home/productpage/productpage.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _icp_icp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icp/icp.component */ "./src/app/icp/icp.component.ts");






//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//https://material.angular.io/guide/getting-started











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _web_info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _home_fristpage_fristpage_component__WEBPACK_IMPORTED_MODULE_12__["FristpageComponent"],
                _home_secondpage_secondpage_component__WEBPACK_IMPORTED_MODULE_13__["SecondpageComponent"],
                _home_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_14__["ProductpageComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _icp_icp_component__WEBPACK_IMPORTED_MODULE_16__["IcpComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                // MatButtonModule,
                // MatCheckboxModule
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"foot clearfloat\">\n    <div class=\"grid navigation\">\n      <h3>站内导航</h3>\n      <ul>\n        <li><a href=\"./\">首页</a> </li>\n        <li><a href=\"./products.html\">我们的产品</a></li>\n        <li><a href=\"./technology.html\">核心技术</a> </li>\n        <li><a href=\"./about.html\">关于我们</a> </li>\n      </ul>\n    </div>\n    <div class=\"grid contactus\">\n      <h3>联系我们</h3>\n      <ul>\n        <li>QQ-123456</li>\n        <li>123456@qq.com</li>\n      </ul>\n      <!-- <div class=\"img962110\">\n                      <img src=\"./assets/img/962110.jpg\" alt=\"\">\n                  </div> -->\n    </div>\n\n  </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  display: block;\n  position: relative;\n  padding-top: 20px;\n  border-top: 1px solid #e8eaed; }\n  footer .foot {\n    box-sizing: border-box;\n    padding-left: 90px;\n    position: relative;\n    margin: 0 auto;\n    width: 1280px;\n    height: 270px;\n    margin-right: 200px;\n    font-size: 14px;\n    color: #4a4a4a;\n    margin-top: 15px; }\n  footer .grid {\n    position: relative;\n    height: 270px;\n    float: left;\n    margin-right: 200px;\n    font-size: 14px;\n    color: #4a4a4a;\n    margin-top: 15px; }\n  footer h3 {\n    font-size: 14px;\n    color: #4a4a4a;\n    display: block;\n    font-size: 1.17em;\n    -webkit-margin-before: 1em;\n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-end: 0px;\n            margin-inline-end: 0px;\n    font-weight: bold; }\n  footer li {\n    font-size: 14px;\n    margin-top: 15px;\n    list-style: none; }\n  footer li a {\n      color: #808080;\n      text-decoration: none; }\n  * {\n  padding: 0;\n  margin: 0; }\n  body {\n  font-size: 17px;\n  width: 100%;\n  height: 100%;\n  font-family: \"hbfont\", \"hbfonten\"; }\n  .clearfloat::after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0U6XFxjb2RlXFxhbmd1bGFyXFxteS1hcHAvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCLEVBQUE7RUFKL0I7SUFPSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUVsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFFYixtQkFBbUI7SUFFbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQW5CcEI7SUFzQkksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBRW5CLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUE3QnBCO0lBaUNJLGVBQWU7SUFDZixjQUFjO0lBRWQsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBO0VBMUNyQjtJQThDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBRWhCLGdCQUFnQixFQUFBO0VBakRwQjtNQW9ETSxjQUFjO01BQ2QscUJBQXFCLEVBQUE7RUFXM0I7RUFDRSxVQUFVO0VBQ1YsU0FBUyxFQUFBO0VBR1g7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUMsRUFBQTtFQUduQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlYWVkO1xyXG5cclxuICAuZm9vdCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEyODBweDtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICAvL2Zsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxuXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5ncmlkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0YTRhNGE7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuMTdlbTtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGE6LXdlYmtpdC1hbnktbGluayB7XHJcbiAgICAvLyAgIGNvbG9yOiAtd2Via2l0LWxpbms7XHJcbiAgICAvLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJoYmZvbnRcIiwgXCJoYmZvbnRlblwiO1xyXG59XHJcblxyXG4uY2xlYXJmbG9hdDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi8vIHVsIHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbi8vICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbi8vICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4vLyAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuLy8gICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4vLyAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>help works!</p>\n"

/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/fristpage/fristpage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/fristpage/fristpage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"block fristpage\">\n    <div class=\"title fiveax anibegin aniend\">\n        <div>\n            <!--\n            <p>HSPMiner做最专业的挖矿软件</p>\n            <br>\n            -->\n            <p>安全、稳定、高效、节能</p>\n            <p>支持多币种</p>\n        </div>\n\n        <div class=\"appicons anibegin aniend\">\n            <div class=\"appicon\">\n                <img src=\"./assets/coins/ae.png\">\n                <span>AE</span>\n            </div>\n            <div class=\"appicon\">\n                <img src=\"./assets/coins/btm.png\">\n                <span>BTM</span>\n            </div>\n            <div class=\"appicon\">\n                <img src=\"./assets/coins/grin.png\">\n                <span>GRIN</span>\n            </div>\n            <div class=\"appicon\">\n                <img src=\"./assets/coins/eth.png\">\n                <span>ETH</span>\n            </div>\n            <div class=\"appicon\">\n                <img src=\"./assets/coins/etc.png\">\n                <span>ETC</span>\n            </div>\n            <div class=\"appicon\">\n                    <img src=\"./assets/coins/beam.png\">\n                    <span>BEAM</span>\n                </div>\n            <div class=\"appicon\">\n                <img src=\"./assets/coins/moac.png\">\n                <span>MOAC</span>\n            </div>\n        </div>\n\n        <div class=\"link anibegin  aniend\">\n                <a class=\"morelink\" href=\"./products.html\">\n                    <span class=\"hover\">查看我们的产品</span>\n                    <label></label>\n                </a>\n            </div>\n\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/fristpage/fristpage.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/fristpage/fristpage.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fristpage {\n  padding-top: 140px;\n  padding-bottom: 100px; }\n\np {\n  color: #4a4a4a;\n  font: 40px \"hbfont\", hbfonten; }\n\n.fiveax {\n  margin-top: 60px; }\n\n.title {\n  position: relative;\n  text-align: center; }\n\n.aniend {\n  opacity: 1;\n  transform: translateY(0);\n  transition-duration: 0.5s; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\n.appicons {\n  text-align: center;\n  margin-top: 40px; }\n\n.appicon {\n  display: inline-block;\n  margin: 0 35px; }\n\n.appicons .appicon span {\n  display: block;\n  margin-top: 18px;\n  color: #4A4A4A; }\n\n.appicons .appicon img {\n  width: 66px;\n  height: 66px; }\n\n.docs-component-category-list {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px; }\n\n.link {\n  text-align: center; }\n\n.morelink {\n  position: relative;\n  display: inline-block;\n  margin: 0 auto;\n  margin-top: 50px;\n  text-decoration: none;\n  padding-right: 30px; }\n\n.morelink span {\n    display: inline-block;\n    font-size: 18px;\n    color: #496DEC;\n    position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mcmlzdHBhZ2UvRTpcXGNvZGVcXGFuZ3VsYXJcXG15LWFwcC9zcmNcXGFwcFxcaG9tZVxcZnJpc3RwYWdlXFxmcmlzdHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQWdGekI7RUFDSSxjQUFjO0VBQ2QsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUdoQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBU2Y7RUFDRSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQU52QjtJQVNRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mcmlzdHBhZ2UvZnJpc3RwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIGJvZHkge1xyXG4vLyAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBmb250LWZhbWlseTogXCJoYmZvbnRcIiwgXCJoYmZvbnRlblwiO1xyXG4vLyB9XHJcblxyXG4vLyBkaXYge1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vIH1cclxuXHJcbi8vICoge1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gfVxyXG5cclxuXHJcbi5mcmlzdHBhZ2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDE0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4vLyAuZnJpc3RwYWdlIC5maXZlYXgge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuLy8gfVxyXG4vLyAuZnJpc3RwYWdlIC50aXRsZSB7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAvL2hlaWdodDogMTIwcHg7XHJcbi8vIH1cclxuLy8gLmFuaWVuZCB7XHJcbi8vICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuLy8gfVxyXG5cclxuLy8gLmZyaXN0cGFnZSAudGl0bGUgUCB7XHJcbi8vICAgICBjb2xvcjogIzRBNEE0QTtcclxuLy8gICAgIGZvbnQtc2l6ZTogNDBweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuLy8gfVxyXG5cclxuLy8gcCB7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4vLyAgICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4vLyAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4vLyAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuLy8gfVxyXG5cclxuLy8gLmZyaXN0cGFnZSAuYXBwaWNvbnMge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuLy8gfVxyXG4vLyAuYW5pZW5kIHtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4vLyB9XHJcblxyXG4vLyAuZnJpc3RwYWdlIC5hcHBpY29ucyB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4vLyB9XHJcbi8vIC5mcmlzdHBhZ2UgLmFwcGljb25zIC5hcHBpY29uIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIG1hcmdpbjogMCAzNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZnJpc3RwYWdlIC5hcHBpY29ucyAuYXBwaWNvbiBpbWcge1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICB3aWR0aDogNjZweDtcclxuLy8gICAgIGhlaWdodDogNjZweDtcclxuLy8gfVxyXG4vLyBpbWcge1xyXG4vLyAgICAgYm9yZGVyOiAwcHg7XHJcbi8vIH1cclxuXHJcblxyXG4vLyAuZnJpc3RwYWdlIC5hcHBpY29ucyAuYXBwaWNvbiBzcGFuIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMThweDtcclxuLy8gICAgIGNvbG9yOiAjNEE0QTRBO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0BhdC1yb290XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgZm9udDogNDBweCBcImhiZm9udFwiLCBoYmZvbnRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmZpdmVheCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy9oZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuICAuYW5pZW5kIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHBpY29ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuYXBwaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLmFwcGljb25zIC5hcHBpY29uIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgY29sb3I6ICM0QTRBNEE7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHBpY29ucyAuYXBwaWNvbiBpbWcge1xyXG4gICAgICB3aWR0aDogNjZweDtcclxuICAgICAgaGVpZ2h0OiA2NnB4O1xyXG4gIH1cclxuICBcclxuICAuZG9jcy1jb21wb25lbnQtY2F0ZWdvcnktbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICBcclxuICAvLyAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtYnJlYWtwb2ludC13aWR0aCkge1xyXG4gIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyAgIH1cclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAubGluayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3JlbGluayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDk2REVDO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/fristpage/fristpage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/fristpage/fristpage.component.ts ***!
  \*******************************************************/
/*! exports provided: FristpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FristpageComponent", function() { return FristpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FristpageComponent = /** @class */ (function () {
    function FristpageComponent() {
    }
    FristpageComponent.prototype.ngOnInit = function () {
    };
    FristpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fristpage',
            template: __webpack_require__(/*! ./fristpage.component.html */ "./src/app/home/fristpage/fristpage.component.html"),
            styles: [__webpack_require__(/*! ./fristpage.component.scss */ "./src/app/home/fristpage/fristpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FristpageComponent);
    return FristpageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"gb-container\">\n<app-fristpage></app-fristpage>\n<app-secondpage></app-secondpage>\n</div>\n-->\n\n<app-fristpage></app-fristpage>\n<app-secondpage></app-secondpage>\n<app-productpage></app-productpage>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gb-container {\n  position: relative;\n  min-width: 1280px;\n  overflow: visible;\n  margin: 0 auto;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcY29kZVxcYW5ndWxhclxcbXktYXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var i = 0;
        i++;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/productpage/productpage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/productpage/productpage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--sticky: true 固定表头 https://blog.kevinyang.net/2018/09/19/angular-material-table-hidden-api/ -->\n\n<div class=\"block blk-frist\">\n    <table mat-table [dataSource]=\"kernelItem\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"img\">\n            <th mat-header-cell *matHeaderCellDef style=\"width: 15%\"> 币 </th>\n\n            <td mat-cell *matCellDef=\"let element\">\n                <div class=\"table_item\">\n                    <a href=\"#\">\n                        <img src=\"{{element.img}}\">\n                    </a>\n                </div>\n            </td>\n\n        </ng-container>\n\n        <ng-container matColumnDef=\"coins\">\n                <th mat-header-cell *matHeaderCellDef  style=\"width: 12.5%\"> 币种 </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.coins}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"amd_nvidia\">\n            <th mat-header-cell *matHeaderCellDef style=\"width: 25%\"> 显卡 </th>\n            <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.amd_nvidia!=0\" style=\"margin-right: 15px\"><img src=\"./assets/NVIDIA-Logo.svg\" width=\"99\"></span>  \n                <span *ngIf=\"element.amd_nvidia!=1\" ><img src=\"./assets/AMD_Logo.svg\" width=\"70\"></span>\n                          \n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ver\">\n                <th mat-header-cell *matHeaderCellDef style=\"width: 12.5%\"> 版本 </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.ver}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"update\" style=\"width: 15%\">\n            <th mat-header-cell *matHeaderCellDef> 发布时间 </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.update}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"download\">\n                <th mat-header-cell *matHeaderCellDef> 下载 </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                    <a mat-button routerLink={{element.download}}>\n                        <img src=\"./assets/download.svg\" width=\"45\" >\n                    </a>\n                </td>\n        </ng-container>\n        \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n</div>\n\n\n\n<!--\n<div class=\"block blk-frist\">\n    <div class=\"latest_job_box jb_cover\">\n        <div class=\"job_list\">\n            <a href=\"#\"><img src=\"./assets/coins/btm.png\">\n                <h6>Trainee Web Designer, (Fresher)</h6>\n            </a>\n        </div>\n        <div class=\"job_list_next\">\n            <p>google</p>\n        </div>\n        <div class=\"job_list_next\">\n            <p>Remotely</p>\n        </div>\n        <div class=\"job_list_next\">\n            <p>new york</p>\n        </div>\n        <div class=\"job_list_next\">\n            <p>$9,000</p>\n        </div>\n        <div class=\"job_list_next\">\n            <div class=\"header_btn search_btn apply_btn jb_cover\">\n                <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">apply</a>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n-->\n\n"

/***/ }),

/***/ "./src/app/home/productpage/productpage.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/productpage/productpage.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0; }\n\ndiv {\n  display: block; }\n\nbody {\n  font-size: 17px;\n  width: 100%;\n  height: 100%;\n  font-family: \"hbfont\", \"hbfonten\"; }\n\nhtml {\n  color: -internal-root-color; }\n\n.blk-frist {\n  position: relative;\n  width: 1280px;\n  margin: 0 auto; }\n\n.blk-frist .blkcent {\n    position: relative;\n    margin: 0 auto; }\n\n.blk-frist .link {\n    text-align: center; }\n\n.blk-frist p {\n    text-align: center;\n    color: #636363;\n    font-size: 50px;\n    line-height: 70px; }\n\n.blk-frist p span {\n      color: #496dec; }\n\n.blk-frist th {\n    border-color: #eeeaea; }\n\n.blk-frist td {\n    height: 100px !important;\n    border-color: #ffffff; }\n\n.aniend {\n  opacity: 1;\n  transform: translateY(0);\n  transition-duration: 0.5s; }\n\n.mat-list-icon {\n  color: rgba(0, 0, 0, 0.54); }\n\n.example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.example-card {\n  margin: 10% auto; }\n\ntable {\n  width: 88%;\n  margin: 10% auto; }\n\n.table_item {\n  width: 100px; }\n\n.table_item img {\n    width: 66px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9kdWN0cGFnZS9FOlxcY29kZVxcYW5ndWxhclxcbXktYXBwL3NyY1xcYXBwXFxob21lXFxwcm9kdWN0cGFnZVxccHJvZHVjdHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdYO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBRWIsY0FBYyxFQUFBOztBQUxoQjtJQVVJLGtCQUFrQjtJQUtsQixjQUFjLEVBQUE7O0FBZmxCO0lBbUJJLGtCQUFrQixFQUFBOztBQW5CdEI7SUF1Qkksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBMUJyQjtNQTZCTSxjQUFjLEVBQUE7O0FBN0JwQjtJQWtDSSxxQkFBcUIsRUFBQTs7QUFsQ3pCO0lBc0NJLHdCQUF3QjtJQUN4QixxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBRUUsZ0JBQWdCLEVBQUE7O0FBMkJsQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFHRSxZQUFZLEVBQUE7O0FBSGQ7SUFNSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2R1Y3RwYWdlL3Byb2R1Y3RwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJoYmZvbnRcIiwgXCJoYmZvbnRlblwiO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBjb2xvcjogLWludGVybmFsLXJvb3QtY29sb3I7XHJcbn1cclxuXHJcbi5ibGstZnJpc3Qge1xyXG4gIC8vcGFkZGluZzogMTAwcHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEyODBweDsgIC8v5L2/5b6XdGFibGUg5aSn5bCP6ZmQ5Yi25ZyoIDEyODBweDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgbWFyZ2luOiAwIGF1dG87IC8v5L2/5b6XdGFibGUg5Y+v5Lul5qC55o2uZGl2IOiHquWKqOWxheS4reWcqOe9kemhteS4remXtFxyXG4gIFxyXG4gIC8vaGVpZ2h0OiAyNzBweDtcclxuXHJcbiAgLmJsa2NlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy9oZWlnaHQ6IDI1MHB4O1xyXG4gICAgLy90b3A6IDUwJTtcclxuICAgIFxyXG4gICAgLy93aWR0aDogMTI4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAubGluayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNjM2MzYzO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjNDk2ZGVjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWVlYWVhO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaWVuZCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG5cclxuLm1hdC1saXN0LWljb24ge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIC8vd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuXHJcbi8vIC5tYXQtY2FyZC1oZWFkZXIge1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGhlaWdodDogNTBweDtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgYmFja2dyb3VuZDogIzE4YWE4ZDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbi8vICAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtY2FyZC10aXRsZSB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmJ1dHRvbi1jb250YWluZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuLy8gICB3aWR0aDogMzAwcHg7XHJcbi8vICAgbWFyZ2luOiBhdXRvO1xyXG4vLyB9XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDg4JTtcclxuICBtYXJnaW46IDEwJSBhdXRvO1xyXG59XHJcblxyXG4udGFibGVfaXRlbSB7XHJcbiAgLy9kaXNwbGF5OiBibG9jaztcclxuICAvL2Zsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgLy9mbG9hdDogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi8vIC5tYXQtY2VsbCwgLm1hdC1oZWFkZXItY2VsbCB7XHJcbi8vICAgICAvL2ZsZXg6IDE7XHJcbi8vICAgICBtaW4taGVpZ2h0OiAxNzBweDtcclxuLy8gICAgIC8vZGlzcGxheTogZmxleDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIHRyLm1hdC1mb290ZXItcm93IHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/productpage/productpage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/productpage/productpage.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductpageComponent", function() { return ProductpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductpageComponent = /** @class */ (function () {
    function ProductpageComponent() {
        this.kernelItem = [
            {
                img: "./assets/coins/ae.png",
                name: "AE",
                ver: "1.1.1",
                coins: "AE",
                url: "url",
                hash: "hash",
                update: "20190726",
                amd_nvidia: 2,
                download: ""
            },
            {
                img: "./assets/coins/grin.png",
                name: "GRIN",
                ver: "1.1.1",
                coins: "GRIN",
                url: "url",
                hash: "hash",
                update: "20190726",
                amd_nvidia: 2,
                download: ""
            },
            {
                img: "./assets/coins/btm.png",
                name: "BTM",
                ver: "1.1.1",
                coins: "BTM",
                url: "url",
                hash: "hash",
                update: "20190726",
                amd_nvidia: 2,
                download: ""
            },
            {
                img: "./assets/coins/beam.png",
                name: "BEAM",
                ver: "1.1.1",
                coins: "BEAM",
                url: "url",
                hash: "hash",
                update: "20190726",
                amd_nvidia: 2,
                download: ""
            },
            {
                img: "./assets/coins/eth.png",
                name: "ETH",
                ver: "1.1.1",
                coins: "ETH",
                url: "url",
                hash: "hash",
                update: "20190726",
                amd_nvidia: 0,
                download: ""
            },
            {
                img: "./assets/coins/etc.png",
                name: "ETC",
                ver: "1.1.1",
                coins: "ETC",
                url: "url",
                hash: "hash",
                update: "20190726",
                amd_nvidia: 2,
                download: ""
            },
            {
                img: "./assets/coins/moac.png",
                name: "MOAC",
                ver: "1.1.1",
                coins: "MOAC",
                url: "url",
                hash: "hash",
                update: "20190726",
                amd_nvidia: 1,
                download: ""
            },
        ];
        //币种  内核名称  更新日期  操作
        this.displayedColumns = ['img', 'coins', 'amd_nvidia', 'ver', 'update', 'download'];
    }
    ProductpageComponent.prototype.ngOnInit = function () {
        // const item: KernelItem = {
        //   img: "./assets/coins/ae.png",
        //   name: "AE",
        //   ver: "1.1.1",
        //   coins: "AE",
        //   url: "url",
        //   hash: "hash",
        //   update: "20190726"
        // };
        //this.kernelItem.push(item);
    };
    ProductpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productpage',
            template: __webpack_require__(/*! ./productpage.component.html */ "./src/app/home/productpage/productpage.component.html"),
            styles: [__webpack_require__(/*! ./productpage.component.scss */ "./src/app/home/productpage/productpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductpageComponent);
    return ProductpageComponent;
}());



/***/ }),

/***/ "./src/app/home/secondpage/secondpage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/secondpage/secondpage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block blk-frist\">\n    <div class=\"blkcent\">\n        <p class=\"anibegin aniend\">支持<span>热门</span>币种 </p>\n        <p class=\"anibegin aniend\">让<span>挖矿</span>更简单、更高效</p>\n        <div class=\"link anibegin aniend\">\n            <a class=\"morelink\" href=\"./about.html\">\n                <span class=\"hover\">了解我们</span>\n                <label></label>\n            </a>\n        </div>\n    </div>\n    <!-- <div class=\"mouse anibegin\">\n            <img src=\"./assets/img/enternextpage_icon@2x.png\" alt=\"\">\n        </div> -->\n</div>"

/***/ }),

/***/ "./src/app/home/secondpage/secondpage.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/secondpage/secondpage.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  padding: 0;\n  margin: 0; }\n\ndiv {\n  display: block; }\n\nbody {\n  font-size: 17px;\n  width: 100%;\n  height: 100%;\n  font-family: \"hbfont\", \"hbfonten\"; }\n\nhtml {\n  color: -internal-root-color; }\n\n.blk-frist {\n  padding: 200px 0;\n  position: relative;\n  background-color: #FAFAFA; }\n\n.blk-frist .blkcent {\n    position: relative;\n    height: 250px;\n    top: 50%;\n    margin: 0 auto; }\n\n.blk-frist .link {\n    text-align: center; }\n\n.blk-frist p {\n    text-align: center;\n    color: #636363;\n    font-size: 50px;\n    line-height: 70px; }\n\n.blk-frist p span {\n      color: #496DEC; }\n\n.aniend {\n  opacity: 1;\n  transform: translateY(0);\n  transition-duration: 0.5s; }\n\n.morelink {\n  position: relative;\n  display: inline-block;\n  margin: 0 auto;\n  margin-top: 50px;\n  text-decoration: none;\n  padding-right: 30px; }\n\n.morelink span {\n    display: inline-block;\n    font-size: 18px;\n    color: #496DEC;\n    position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zZWNvbmRwYWdlL0U6XFxjb2RlXFxhbmd1bGFyXFxteS1hcHAvc3JjXFxhcHBcXGhvbWVcXHNlY29uZHBhZ2VcXHNlY29uZHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdiO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBSDdCO0lBTVEsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBR1IsY0FBYyxFQUFBOztBQVh0QjtJQWVRLGtCQUFrQixFQUFBOztBQWYxQjtJQW1CUSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUF0QnpCO01BeUJZLGNBQWMsRUFBQTs7QUFLMUI7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBTnZCO0lBU1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NlY29uZHBhZ2Uvc2Vjb25kcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogXCJoYmZvbnRcIiwgXCJoYmZvbnRlblwiO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGNvbG9yOiAtaW50ZXJuYWwtcm9vdC1jb2xvcjtcclxufVxyXG5cclxuLmJsay1mcmlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMDBweCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuXHJcbiAgICAuYmxrY2VudCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcblxyXG4gICAgICAgIC8vd2lkdGg6IDEyODBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzYzNjM2MztcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ5NkRFQztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmllbmQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcblxyXG4ubW9yZWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIFxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzQ5NkRFQztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/secondpage/secondpage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/secondpage/secondpage.component.ts ***!
  \*********************************************************/
/*! exports provided: SecondpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondpageComponent", function() { return SecondpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SecondpageComponent = /** @class */ (function () {
    function SecondpageComponent() {
    }
    SecondpageComponent.prototype.ngOnInit = function () {
    };
    SecondpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-secondpage',
            template: __webpack_require__(/*! ./secondpage.component.html */ "./src/app/home/secondpage/secondpage.component.html"),
            styles: [__webpack_require__(/*! ./secondpage.component.scss */ "./src/app/home/secondpage/secondpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecondpageComponent);
    return SecondpageComponent;
}());



/***/ }),

/***/ "./src/app/icp/icp.component.html":
/*!****************************************!*\
  !*** ./src/app/icp/icp.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icp\">\n  <p>\n    版权所有 ® XX科技 上海XX信息科技有限公司\n    <span>\n      <a target=\"_blank\" href=\"#\">\n        沪ICP备1704xxxx号-2\n      </a>\n      <span>\n        <a target=\"_blank\" href=\"#\">\n          <img src=\"./assets/img/guohui@3x.png\"> 沪公网安备 3101050200xxxx号\n        </a>\n        <span>\n          <img src=\"./assets/img/962110-a.png\"> 反诈宣传电话 962110\n        </span>\n      </span>\n    </span>\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/icp/icp.component.scss":
/*!****************************************!*\
  !*** ./src/app/icp/icp.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icp {\n  text-align: center;\n  margin-top: 20px;\n  background-color: #ffffff;\n  border-top: 1px solid #e8eaed;\n  font-size: 13px;\n  color: #949090; }\n  .icp span {\n    margin-left: 20px; }\n  .icp a {\n    color: #666666;\n    text-decoration: underline; }\n  .icp a:-webkit-any-link {\n    color: -webkit-link;\n    cursor: pointer;\n    text-decoration: underline; }\n  .icp img {\n    position: relative;\n    height: 16px;\n    top: -2px;\n    margin-right: 4px;\n    display: inline-block;\n    vertical-align: middle; }\n  p {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px; }\n  img {\n  border: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNwL0U6XFxjb2RlXFxhbmd1bGFyXFxteS1hcHAvc3JjXFxhcHBcXGljcFxcaWNwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixjQUFjLEVBQUE7RUFSaEI7SUFXSSxpQkFBaUIsRUFBQTtFQVhyQjtJQWVJLGNBQWM7SUFDZCwwQkFBMEIsRUFBQTtFQWhCOUI7SUFvQkksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEIsRUFBQTtFQXRCOUI7SUEwQkksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0IsRUFBQTtFQUsxQjtFQUNJLGNBQWM7RUFDZCwwQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFJMUI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pY3AvaWNwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljcCB7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIC8vcGFkZGluZzogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZWFlZDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM5NDkwOTA7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICBhOi13ZWJraXQtYW55LWxpbmsge1xyXG4gICAgY29sb3I6IC13ZWJraXQtbGluaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHRvcDogLTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/icp/icp.component.ts":
/*!**************************************!*\
  !*** ./src/app/icp/icp.component.ts ***!
  \**************************************/
/*! exports provided: IcpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcpComponent", function() { return IcpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IcpComponent = /** @class */ (function () {
    function IcpComponent() {
    }
    IcpComponent.prototype.ngOnInit = function () {
    };
    IcpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icp',
            template: __webpack_require__(/*! ./icp.component.html */ "./src/app/icp/icp.component.html"),
            styles: [__webpack_require__(/*! ./icp.component.scss */ "./src/app/icp/icp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IcpComponent);
    return IcpComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                //MatTableDataSource,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                //MatTableDataSource,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>products works!</p>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/web/info/info.component.html":
/*!**********************************************!*\
  !*** ./src/app/web/info/info.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title fiveax anibegin aniend\">\n    <div >\n        <p>安全、稳定、高效、节能</p>\n        <p>产品四大优势</p>\n    </div>\n\n    <div class=\"appicons anibegin aniend\">\n        <div class=\"appicon\">\n            <img src=\"./assets/img/search.png\">\n            <span>虎博搜索</span>\n        </div>\n        <div class=\"appicon\">\n            <img src=\"./assets/img/Group 9 Copy 2@2x.png\">\n            <span>西梅</span>\n        </div>\n        \n        <div class=\"appicon\">\n            <img src=\"./assets/img/ctp.png\">\n            <span>创投派</span>\n        </div>\n\n        <div class=\"appicon\">\n            <img src=\"./assets/img/zgs.png\">\n            <span>招股书</span>\n        </div>\n\n        <div class=\"appicon\">\n            <img src=\"./assets/img/Group 9 Copy 3@2x.png\">\n            <span>财神股票</span>\n        </div>\n<!--\n        <div class=\"appicon\">\n            <img src=\"./assets/img/syb.png\">\n            <span>搜研报</span>\n        </div>\n        -->\n    </div>\n    <!--\n    <div class=\"docs-component-category-list\">\n        <a class=\"docs-component-category-list-item\" [routerLink]=\"\">\n          <mat-card class=\"docs-component-category-list-card\">\n            <mat-card-title>财神股票</mat-card-title>\n            <mat-card-content class=\"docs-component-category-list-card-summary\"><img src=\"./assets/img/Group 9 Copy 3@2x.png\"></mat-card-content>\n          </mat-card>\n        </a>\n        <a class=\"docs-component-category-list-item\" [routerLink]=\"\">\n            <mat-card class=\"docs-component-category-list-card\">\n        \n              <mat-card-content class=\"docs-component-category-list-card-summary\">\n                  <img src=\"./assets/img/Group 9 Copy 3@2x.png\">\n                  <span>搜研报</span>\n                </mat-card-content>\n            </mat-card>\n          </a>\n      </div>\n    -->\n</div>"

/***/ }),

/***/ "./src/app/web/info/info.component.scss":
/*!**********************************************!*\
  !*** ./src/app/web/info/info.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #4a4a4a;\n  font: 40px \"hbfont\", hbfonten; }\n\n.fiveax {\n  margin-top: 60px; }\n\n.title {\n  position: relative;\n  text-align: center;\n  height: 120px; }\n\n.aniend {\n  opacity: 1;\n  transform: translateY(0);\n  transition-duration: 0.5s; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\n.appicons {\n  text-align: center;\n  margin-top: 40px; }\n\n.appicon {\n  display: inline-block;\n  margin: 0 35px; }\n\n.appicons .appicon span {\n  display: block;\n  margin-top: 18px;\n  color: #4A4A4A; }\n\n.appicons .appicon img {\n  width: 66px;\n  height: 66px; }\n\n.docs-component-category-list {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViL2luZm8vRTpcXGNvZGVcXGFuZ3VsYXJcXG15LWFwcC9zcmNcXGFwcFxcd2ViXFxpbmZvXFxpbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtFQUN4Qix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3dlYi9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBjb2xvcjogIzRhNGE0YTtcclxuICBmb250OiA0MHB4IFwiaGJmb250XCIsIGhiZm9udGVuO1xyXG59XHJcblxyXG4uZml2ZWF4IHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcbi5hbmllbmQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYXBwaWNvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uYXBwaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAzNXB4O1xyXG59XHJcblxyXG4uYXBwaWNvbnMgLmFwcGljb24gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBjb2xvcjogIzRBNEE0QTtcclxufVxyXG5cclxuLmFwcGljb25zIC5hcHBpY29uIGltZyB7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIGhlaWdodDogNjZweDtcclxufVxyXG5cclxuLmRvY3MtY29tcG9uZW50LWNhdGVnb3J5LWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwtYnJlYWtwb2ludC13aWR0aCkge1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/web/info/info.component.ts":
/*!********************************************!*\
  !*** ./src/app/web/info/info.component.ts ***!
  \********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/web/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/web/info/info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\code\angular\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map