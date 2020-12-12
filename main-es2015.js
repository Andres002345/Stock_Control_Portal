(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"d-flex justify-content-center\">\n    LAAPP\n  </h3> \n  <h5 class=\"d-flex justify-content-center\">\n    Stock Control Portal\n  </h5>  \n  <nav class=\"navbar navbar-expand-sm bg-light navbark-dark\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <button class=\"m-1 btn btn-light btn-outline-primary\">\n        Productos\n      </button>\n      </li>\n    </ul>\n  </nav>\n  <app-producto></app-producto>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/producto/producto.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/producto/producto.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-showproducto></app-showproducto>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/producto/showproducto/showproducto.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/producto/showproducto/showproducto.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"mat-elevation-z8\">\n  <mat-spinner [style.display]=\"loading ? 'block' : 'none'\"></mat-spinner> \n   <mat-table [style.display]=\"loading === false ? 'block' : 'none'\" #table [dataSource]=\"listData\">\n    <!--  <mat-table #table [dataSource]=\"producto\">--> \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        <ng-container  matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef> thumbnail </mat-header-cell>\n            <mat-cell *matCellDef=\"let listData\"><div *ngIf=\"listData\"><img src=\"{{listData?.thumbnail}}\"></div>  </mat-cell>\n        </ng-container>\n        <ng-container  matColumnDef=\"price\">\n            <mat-header-cell *matHeaderCellDef> title </mat-header-cell>\n            <mat-cell *matCellDef=\"let listData\"> <div *ngIf=\"listData\">{{listData?.title}}</div> </mat-cell>\n        </ng-container>\n        <ng-container  matColumnDef=\"thumbnail\">\n            <mat-header-cell *matHeaderCellDef> permalink </mat-header-cell>\n            <mat-cell *matCellDef=\"let listData\"><div *ngIf=\"listData\"> <a href=\"{{listData?.permalink}}\"  target=\"_blank\">{{listData?.permalink}}</a></div> </mat-cell>\n        </ng-container>\n    </mat-table>\n \n <!-- \n    <mat-table [style.display]=\"loading === false ? 'block' : 'none'\" #table [dataSource]=\"listData2\">\n    \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            <ng-container  matColumnDef=\"title\">\n                <mat-header-cell *matHeaderCellDef [style.display]=\"none\"> thumbnail </mat-header-cell>\n                <mat-cell *matCellDef=\"let listData2\"><div *ngIf=\"listData2\"><img src=\"{{listData2?.thumbnail}}\"></div>  </mat-cell>\n            </ng-container>\n            <ng-container  matColumnDef=\"price\">\n                <mat-header-cell *matHeaderCellDef [style.display]=\"none\"> title </mat-header-cell>\n                <mat-cell *matCellDef=\"let listData2\"> <div *ngIf=\"listData2\">{{listData2?.title}}</div> </mat-cell>\n            </ng-container>\n            <ng-container  matColumnDef=\"thumbnail\">\n                <mat-header-cell *matHeaderCellDef [style.display]=\"none\"> permalink </mat-header-cell>\n                <mat-cell *matCellDef=\"let listData2\"><div *ngIf=\"listData2\"> <a href=\"{{listData2?.permalink}}\"  target=\"_blank\">{{listData2?.permalink}}</a></div> </mat-cell>\n            </ng-container>\n        </mat-table>  --> \n    \n        <mat-paginator \n        [pageSize]=\"5\" \n        [pageIndex]='0'\n        [pageSizeOptions]=\"[5, 10, 20]\" >\n    </mat-paginator>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'laapp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./producto/producto.component */ "./src/app/producto/producto.component.ts");
/* harmony import */ var _producto_showproducto_showproducto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./producto/showproducto/showproducto.component */ "./src/app/producto/showproducto/showproducto.component.ts");
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _producto_producto_component__WEBPACK_IMPORTED_MODULE_9__["ProductoComponent"],
            _producto_showproducto_showproducto_component__WEBPACK_IMPORTED_MODULE_10__["ShowproductoComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ],
        providers: [src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_11__["ProductoService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/producto-model.ts":
/*!******************************************!*\
  !*** ./src/app/models/producto-model.ts ***!
  \******************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
class Producto {
    constructor() {
        this.thumbnail = "";
        this.title = "";
        this.permalink = "";
    }
}


/***/ }),

/***/ "./src/app/producto/producto.component.css":
/*!*************************************************!*\
  !*** ./src/app/producto/producto.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL3Byb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/producto/producto.component.ts":
/*!************************************************!*\
  !*** ./src/app/producto/producto.component.ts ***!
  \************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductoComponent = class ProductoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-producto',
        template: __webpack_require__(/*! raw-loader!./producto.component.html */ "./node_modules/raw-loader/index.js!./src/app/producto/producto.component.html"),
        styles: [__webpack_require__(/*! ./producto.component.css */ "./src/app/producto/producto.component.css")]
    })
], ProductoComponent);



/***/ }),

/***/ "./src/app/producto/showproducto/showproducto.component.css":
/*!******************************************************************!*\
  !*** ./src/app/producto/showproducto/showproducto.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-cell {display: inline-block}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vc2hvd3Byb2R1Y3RvL3Nob3dwcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUscUJBQXFCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG8vc2hvd3Byb2R1Y3RvL3Nob3dwcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNlbGwge2Rpc3BsYXk6IGlubGluZS1ibG9ja30iXX0= */"

/***/ }),

/***/ "./src/app/producto/showproducto/showproducto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/producto/showproducto/showproducto.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowproductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowproductoComponent", function() { return ShowproductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_producto_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/producto-model */ "./src/app/models/producto-model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/producto.service */ "./src/app/services/producto.service.ts");






let ShowproductoComponent = class ShowproductoComponent {
    constructor(service) {
        this.service = service;
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        /*
        allProductos: Array<any> = [];
        
        productosTotal;
        productosPerPage;
        upToProductos;
        upToProductosBegining;
      
        allProductos2: Array<any> = [];
        productosTotal2;
        productosPerPage2;
        upToProductos2;
        upToProductosBegining2;
        */
        this.loading = true;
        this.producto = [
            { thumbnail: "", title: "", permalink: "http://mla-s1-p.mlstatic.com/916319-MLA28064987887_082018-I.jpg" },
        ];
        this.producto2 = [
            { thumbnail: "", title: "", permalink: "http://mla-s1-p.mlstatic.com/916319-MLA28064987887_082018-I.jpg" },
        ];
        this.displayedColumns = ['title', 'price', 'thumbnail'];
        // @ViewChild('paginator', { static: true }) paginator: MatPaginator;
        this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.producto);
        this.listData2 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.producto2);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.displayedRows = ['Title', 'Price', 'permalink'];
    }
    set appBacon(paginator) {
        this.paginator = paginator;
        //this.listData.paginator = this.paginator;
    }
    set appBacon2(paginator) {
        this.paginator2 = paginator;
        //this.listData.paginator = this.paginator;
    }
    ngOnInit() {
        setTimeout(() => {
            this.loading = false;
        }, 2000);
        this.refreshProductoList();
        //  this.refreshProductoList2();
        //this.listData.data = new MatTableDataSource(this.producto);
    }
    ngAfterViewInit() {
        // this.listData.paginator =  this.paginator;
    }
    refreshProductoList() {
        this.service.getProductoList(src_app_models_producto_model__WEBPACK_IMPORTED_MODULE_2__["Producto"]).subscribe(resultados => {
            var array4;
            array4 = resultados[0];
            var array4_2;
            array4_2 = resultados[1];
            var array3;
            array3 =
                { thumbnail: "", title: "array3", permalink: "array3" };
            var array5;
            array5 = [
                { thumbnail: "", title: "", permalink: "" }
            ];
            var array3_2;
            array3_2 =
                { thumbnail: "", title: "array3_2", permalink: "array3_2" };
            var array5_2;
            array5_2 = [
                { thumbnail: "", title: "", permalink: "" }
            ];
            array4.results.forEach(element => {
                var array3 = { thumbnail: "", title: "array3", permalink: "array3" };
                array3.thumbnail = element.thumbnail;
                array3.title = element.title;
                array3.permalink = element.permalink;
                array5.push(array3);
                this.listData.filteredData.push(array3);
                return;
            });
            array5.shift();
            this.listData.filteredData.shift();
            array4_2.results.forEach(element => {
                var array3_2 = { thumbnail: "", title: "array3_2", permalink: "array3_2" };
                array3_2.thumbnail = element.thumbnail;
                array3_2.title = element.title;
                array3_2.permalink = element.permalink;
                array5_2.push(array3_2);
                this.listData.filteredData.push(array3_2);
                return;
            });
            array5_2.shift();
            // this.listData.paginator = this.paginator;
            // array5.shift();
            // this.listData.filteredData.shift();
            this.producto = array5.concat(array5_2);
            this.listData.paginator = this.paginator;
            //console.log(this.listData.paginator)
        });
    }
};
ShowproductoComponent.ctorParameters = () => [
    { type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], ShowproductoComponent.prototype, "appBacon", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], ShowproductoComponent.prototype, "appBacon2", null);
ShowproductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showproducto',
        template: __webpack_require__(/*! raw-loader!./showproducto.component.html */ "./node_modules/raw-loader/index.js!./src/app/producto/showproducto/showproducto.component.html"),
        providers: [src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]],
        styles: [__webpack_require__(/*! ./showproducto.component.css */ "./src/app/producto/showproducto/showproducto.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]))
], ShowproductoComponent);



/***/ }),

/***/ "./src/app/services/producto.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/producto.service.ts ***!
  \**********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ProductoService = class ProductoService {
    constructor(http) {
        this.http = http;
        this.APIUrl = "https://api.mercadolibre.com/sites/MLA/search?nickname=ANDRES00235";
        this.APIUrl2 = "https://api.mercadolibre.com/sites/MLA/search?nickname=spallettamariel";
    }
    getProductoList(Producto) {
        let response1 = this.http.get(this.APIUrl);
        let response2 = this.http.get(this.APIUrl2);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([response1, response2]);
    }
};
ProductoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductoService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PROYECTOS\laapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map