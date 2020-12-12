(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PROYECTOS\ControlSP\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "FTvE":
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

/***/ "GPUG":
/*!**********************************************!*\
  !*** ./src/app/services/producto.service.ts ***!
  \**********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProductoService {
    constructor(http) {
        this.http = http;
        this.APIUrl = "https://api.mercadolibre.com/sites/MLA/search?nickname=GARIOTTI";
        this.APIUrl2 = "https://api.mercadolibre.com/sites/MLA/search?nickname=OUTLETIT383";
    }
    getProductoList(Producto) {
        let response1 = this.http.get(this.APIUrl);
        let response2 = this.http.get(this.APIUrl2);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([response1, response2]);
    }
}
ProductoService.ɵfac = function ProductoService_Factory(t) { return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductoService, factory: ProductoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto/producto.component */ "W8R3");



class AppComponent {
    constructor() {
        this.title = 'laapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "d-flex", "justify-content-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Stock Control Portal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_producto_producto_component__WEBPACK_IMPORTED_MODULE_1__["ProductoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "VAYi":
/*!*****************************************************************!*\
  !*** ./src/app/producto/showproducto/showproducto.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowproductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowproductoComponent", function() { return ShowproductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_producto_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/producto-model */ "FTvE");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/producto.service */ "GPUG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ShowproductoComponent_mat_header_row_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ShowproductoComponent_mat_row_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
function ShowproductoComponent_mat_header_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "thumbnail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowproductoComponent_mat_cell_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", listData_r10 == null ? null : listData_r10.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ShowproductoComponent_mat_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowproductoComponent_mat_cell_8_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listData_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listData_r10);
} }
function ShowproductoComponent_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowproductoComponent_mat_cell_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listData_r13 == null ? null : listData_r13.title);
} }
function ShowproductoComponent_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowproductoComponent_mat_cell_11_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listData_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listData_r13);
} }
function ShowproductoComponent_mat_header_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "permalink ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowproductoComponent_mat_cell_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", listData_r16 == null ? null : listData_r16.permalink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](listData_r16 == null ? null : listData_r16.permalink);
} }
function ShowproductoComponent_mat_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowproductoComponent_mat_cell_14_div_1_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listData_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", listData_r16);
} }
const _c0 = function () { return [5, 10, 20, 100]; };
class ShowproductoComponent {
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
        this.listData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.producto);
        this.listData2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.producto2);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
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
        this.service.getProductoList(src_app_models_producto_model__WEBPACK_IMPORTED_MODULE_1__["Producto"]).subscribe(resultados => {
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
}
ShowproductoComponent.ɵfac = function ShowproductoComponent_Factory(t) { return new (t || ShowproductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"])); };
ShowproductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowproductoComponent, selectors: [["app-showproducto"]], viewQuery: function ShowproductoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appBacon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appBacon2 = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]])], decls: 16, vars: 11, consts: [[1, "mat-elevation-z8"], [3, "dataSource"], ["table", ""], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "title"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "price"], ["matColumnDef", "thumbnail"], ["showFirstLastButtons", "", 3, "pageSize", "pageIndex", "pageSizeOptions"], [4, "ngIf"], [3, "src"], ["target", "_blank", 3, "href"]], template: function ShowproductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowproductoComponent_mat_header_row_4_Template, 1, 0, "mat-header-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowproductoComponent_mat_row_5_Template, 1, 0, "mat-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShowproductoComponent_mat_header_cell_7_Template, 2, 0, "mat-header-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShowproductoComponent_mat_cell_8_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ShowproductoComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ShowproductoComponent_mat_cell_11_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ShowproductoComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ShowproductoComponent_mat_cell_14_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-paginator", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.loading ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.loading === false ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.listData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 5)("pageIndex", 0)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["mat-cell[_ngcontent-%COMP%] {display: inline-block}\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\nimg[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG8vc2hvd3Byb2R1Y3RvL3Nob3dwcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUscUJBQXFCO0FBQy9CO0lBQ0ksV0FBVztFQUNiO0FBQ0E7SUFDRSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0by9zaG93cHJvZHVjdG8vc2hvd3Byb2R1Y3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2VsbCB7ZGlzcGxheTogaW5saW5lLWJsb2NrfVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowproductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showproducto',
                templateUrl: './showproducto.component.html',
                styleUrls: ['./showproducto.component.css'],
                providers: [src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]]
            }]
    }], function () { return [{ type: src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]]
            }] }]; }, { appBacon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }], appBacon2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "W8R3":
/*!************************************************!*\
  !*** ./src/app/producto/producto.component.ts ***!
  \************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _showproducto_showproducto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showproducto/showproducto.component */ "VAYi");



class ProductoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductoComponent.ɵfac = function ProductoComponent_Factory(t) { return new (t || ProductoComponent)(); };
ProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoComponent, selectors: [["app-producto"]], decls: 1, vars: 0, template: function ProductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-showproducto");
    } }, directives: [_showproducto_showproducto_component__WEBPACK_IMPORTED_MODULE_1__["ShowproductoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RvL3Byb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-producto',
                templateUrl: './producto.component.html',
                styleUrls: ['./producto.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _producto_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto/producto.component */ "W8R3");
/* harmony import */ var _producto_showproducto_showproducto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./producto/showproducto/showproducto.component */ "VAYi");
/* harmony import */ var _app_services_producto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/services/producto.service */ "GPUG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_services_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductoService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _producto_producto_component__WEBPACK_IMPORTED_MODULE_6__["ProductoComponent"],
        _producto_showproducto_showproducto_component__WEBPACK_IMPORTED_MODULE_7__["ShowproductoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _producto_producto_component__WEBPACK_IMPORTED_MODULE_6__["ProductoComponent"],
                    _producto_showproducto_showproducto_component__WEBPACK_IMPORTED_MODULE_7__["ShowproductoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                ],
                providers: [_app_services_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductoService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map