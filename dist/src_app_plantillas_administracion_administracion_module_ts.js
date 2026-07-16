"use strict";
(self["webpackChunkpazzioli_front"] = self["webpackChunkpazzioli_front"] || []).push([["src_app_plantillas_administracion_administracion_module_ts"],{

/***/ 97131:
/*!****************************************************************************!*\
  !*** ./src/app/plantillas/administracion/administracion-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutes": () => (/* binding */ AdminRoutes)
/* harmony export */ });
/* harmony import */ var _componentes_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/tienda/tienda.component */ 53969);
/* harmony import */ var _componentes_redireccion_redireccion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/redireccion/redireccion.component */ 47998);
/* harmony import */ var _componentes_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/pedidos/pedidos.component */ 18691);
/* harmony import */ var _componentes_itemspedido_itemspedido_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/itemspedido/itemspedido.component */ 42459);
/* harmony import */ var _componentes_cartera_cartera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/cartera/cartera.component */ 85651);
/* harmony import */ var _componentes_recibodecaja_recibodecaja_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/recibodecaja/recibodecaja.component */ 953);
/* harmony import */ var _componentes_inicial_inicial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/inicial/inicial.component */ 59503);
/* harmony import */ var _componentes_inventario_fisico_inventario_fisico_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/inventario-fisico/inventario-fisico.component */ 34383);
/* harmony import */ var _componentes_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/inventario/inventario.component */ 434);
/* harmony import */ var _componentes_auxcliente_auxcliente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/auxcliente/auxcliente.component */ 50416);
/* harmony import */ var _componentes_cuadre_cuadre_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/cuadre/cuadre.component */ 81696);











//runGuardsAndResolvers esto me permitira que cada ves que navegue de nuevo aqui se vulva a ejecuta el oningt
const AdminRoutes = [
    {
        path: '',
        component: _componentes_redireccion_redireccion_component__WEBPACK_IMPORTED_MODULE_1__.RedireccionComponent,
    },
    {
        // URL QUE QUIERO PARA EL COMPONENTE
        path: 'tienda',
        // IMPORTACION DEL COMPONENTE
        component: _componentes_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_0__.TiendaComponent,
        // INFO EXTRA QUE LE PUEDO ENVIAR CON EL ROUTING
        data: { title: 'Tienda' },
    },
    {
        path: 'pedido',
        component: _componentes_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_2__.PedidosComponent,
    },
    {
        path: 'pedido/:codigo',
        component: _componentes_itemspedido_itemspedido_component__WEBPACK_IMPORTED_MODULE_3__.ItemspedidoComponent,
    },
    {
        path: 'cartera',
        component: _componentes_cartera_cartera_component__WEBPACK_IMPORTED_MODULE_4__.CarteraComponent,
    },
    {
        path: 'recibodecaja',
        component: _componentes_recibodecaja_recibodecaja_component__WEBPACK_IMPORTED_MODULE_5__.RecibodecajaComponent,
    },
    {
        path: 'inicial',
        component: _componentes_inicial_inicial_component__WEBPACK_IMPORTED_MODULE_6__.InicialComponent,
    },
    {
        path: 'inventariofisico',
        component: _componentes_inventario_fisico_inventario_fisico_component__WEBPACK_IMPORTED_MODULE_7__.InventarioFisicoComponent,
    },
    {
        path: 'inventario',
        component: _componentes_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_8__.InventarioComponent
    },
    {
        path: 'auxcliente',
        component: _componentes_auxcliente_auxcliente_component__WEBPACK_IMPORTED_MODULE_9__.AuxclienteComponent
    },
    {
        path: 'cuadre',
        component: _componentes_cuadre_cuadre_component__WEBPACK_IMPORTED_MODULE_10__.CuadreComponent
    }
];


/***/ }),

/***/ 54905:
/*!***********************************************************************!*\
  !*** ./src/app/plantillas/administracion/administracion.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracionComponent": () => (/* binding */ AdministracionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AdministracionComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdministracionComponent.ɵfac = function AdministracionComponent_Factory(t) { return new (t || AdministracionComponent)(); };
AdministracionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdministracionComponent, selectors: [["app-administracion"]], decls: 2, vars: 0, template: function AdministracionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "administracion works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhY2lvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4431:
/*!********************************************************************!*\
  !*** ./src/app/plantillas/administracion/administracion.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracionModule": () => (/* binding */ AdministracionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _componentes_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/tienda/tienda.component */ 53969);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _administracion_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracion-routing.module */ 97131);
/* harmony import */ var src_app_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/angular-material/angular-material.module */ 57325);
/* harmony import */ var _componentes_redireccion_redireccion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/redireccion/redireccion.component */ 47998);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _componentes_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/pedidos/pedidos.component */ 18691);
/* harmony import */ var _componentes_itemspedido_itemspedido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/itemspedido/itemspedido.component */ 42459);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @zxing/ngx-scanner */ 53800);
/* harmony import */ var _componentes_cartera_cartera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/cartera/cartera.component */ 85651);
/* harmony import */ var _componentes_recibodecaja_recibodecaja_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/recibodecaja/recibodecaja.component */ 953);
/* harmony import */ var _componentes_inicial_inicial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/inicial/inicial.component */ 59503);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _componentes_inventario_fisico_inventario_fisico_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/inventario-fisico/inventario-fisico.component */ 34383);
/* harmony import */ var _componentes_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/inventario/inventario.component */ 434);
/* harmony import */ var _componentes_auxcliente_auxcliente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/auxcliente/auxcliente.component */ 50416);
/* harmony import */ var _administracion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./administracion.component */ 54905);
/* harmony import */ var _componentes_cuadre_cuadre_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/cuadre/cuadre.component */ 81696);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/de */ 48855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);




























(0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_15__["default"]);
class AdministracionModule {
}
AdministracionModule.ɵfac = function AdministracionModule_Factory(t) { return new (t || AdministracionModule)(); };
AdministracionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AdministracionModule });
AdministracionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(_administracion_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutes),
        src_app_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkTableModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicModule.forRoot(),
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_23__.ZXingScannerModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_24__.NgChartsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AdministracionModule, { declarations: [_componentes_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_0__.TiendaComponent,
        _componentes_redireccion_redireccion_component__WEBPACK_IMPORTED_MODULE_3__.RedireccionComponent,
        _componentes_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_4__.PedidosComponent,
        _componentes_itemspedido_itemspedido_component__WEBPACK_IMPORTED_MODULE_5__.ItemspedidoComponent,
        _componentes_cartera_cartera_component__WEBPACK_IMPORTED_MODULE_6__.CarteraComponent,
        _componentes_recibodecaja_recibodecaja_component__WEBPACK_IMPORTED_MODULE_7__.RecibodecajaComponent,
        _componentes_inicial_inicial_component__WEBPACK_IMPORTED_MODULE_8__.InicialComponent,
        _componentes_inventario_fisico_inventario_fisico_component__WEBPACK_IMPORTED_MODULE_9__.InventarioFisicoComponent,
        _componentes_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_10__.InventarioComponent,
        _componentes_auxcliente_auxcliente_component__WEBPACK_IMPORTED_MODULE_11__.AuxclienteComponent,
        _administracion_component__WEBPACK_IMPORTED_MODULE_12__.AdministracionComponent,
        _componentes_cuadre_cuadre_component__WEBPACK_IMPORTED_MODULE_13__.CuadreComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, src_app_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_20__.CdkTableModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_23__.ZXingScannerModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_24__.NgChartsModule] }); })();


/***/ }),

/***/ 50416:
/*!******************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/auxcliente/auxcliente.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuxclienteComponent": () => (/* binding */ AuxclienteComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _dpfaux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dpfaux */ 18491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);














function AuxclienteComponent_mat_list_option_40_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuxclienteComponent_mat_list_option_40_Template_mat_list_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const _cliente_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.seleccionarCliente(_cliente_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div")(2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _cliente_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", _cliente_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_cliente_r19.razonSocial);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _cliente_r19.identificacion, "");
} }
function AuxclienteComponent_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 54);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "http://localhost:3000/" + ctx_r4.clienteSeleccionado.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AuxclienteComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " face ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuxclienteComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuxclienteComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r22.documento);
} }
function AuxclienteComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Fecha documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuxclienteComponent_td_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r23.Fechadocumento);
} }
function AuxclienteComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Debito");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuxclienteComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", element_r24.debito.toLocaleString("de-DE"), "");
} }
function AuxclienteComponent_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuxclienteComponent_td_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", element_r25.credito.toLocaleString("de-DE"), "");
} }
function AuxclienteComponent_th_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Saldo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuxclienteComponent_td_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", element_r26.saldoactual.toLocaleString("de-DE"), "");
} }
function AuxclienteComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 58);
} }
function AuxclienteComponent_tr_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 59);
} }
class AuxclienteComponent {
    constructor(socketproduct) {
        this.socketproduct = socketproduct;
        this.saldo = 0;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([]);
        this.cliente = '';
        this.displayedColumns = [
            'Documento',
            'Fechadocumento',
            'debito',
            'credito',
            'saldoactual',
        ];
        this.nomberempresa = '';
        this.clientes = [];
        this.clienteSeleccionado = {
            nombre: 'Seleccione un cliente',
            identificacion: '',
            email: '',
            celulares: '',
            direccion: '',
            telefonoFijo: '',
            codigo: 0,
            imagen: null,
            ciudad: '',
        };
    }
    autocompletarinputclient(valor) {
        if (valor === '') {
            this.clientes = [];
        }
        else {
            this.socketproduct
                .obtenerInfo('terceros', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'nombres',
                consulta: 'TERCEROS',
                canalserver: 'terceros',
                datoCondicion: valor,
            })
                .subscribe((dato) => {
                if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                    this.clientes = JSON.parse(dato).mensajePeticion;
                }
            });
        }
    }
    ngOnInit() {
        this.fechaInicial = new Date(2000, 0, 1);
        this.fechafinal = new Date();
    }
    seleccionarCliente(cliente) {
        this.clienteSeleccionado.nombre = cliente.razonSocial;
        this.clienteSeleccionado.identificacion = cliente.identificacion;
        this.clienteSeleccionado.email = cliente.email;
        this.clienteSeleccionado.celulares = cliente.celulares;
        this.clienteSeleccionado.direccion = cliente.direccion;
        this.clienteSeleccionado.telefonoFijo = cliente.telefonoFijo;
        this.clienteSeleccionado.codigo = cliente.codigo;
        this.clienteSeleccionado.imagen = cliente.imagen || null;
        this.clienteSeleccionado.ciudad = cliente.municipio;
        this.cliente = '';
        this.clientes = [];
        this.buscarauxiliarcliente(cliente);
    }
    clickpdf() {
        console.log("Cliente seleccionado producto", this.dataSource.data, this.clienteSeleccionado, this.saldo);
        (0,_dpfaux__WEBPACK_IMPORTED_MODULE_0__.generatePDFaux)(this.dataSource.data, this.saldo, this.clienteSeleccionado, this.nomberempresa);
    }
    buscarauxiliarcliente(clientea) {
        this.saldo = 0;
        console.log("auxiliar");
        this.socketproduct.consultaruaxiliarcliente(clientea.codigo, `${this.fechaInicial.getFullYear()}-${(this.fechaInicial.getMonth() + 1).toString().padStart(2, '0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `, `${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth() + 1).toString().padStart(2, '0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe((data) => {
            this.nomberempresa = data.dataempresa;
            let arrayauxiliar = [];
            console.log("data auxiliar", data.datosaux);
            let arrayaux = data.datosaux.sort((a, b) => {
                if (new Date(a.fechaEmision).getTime() === new Date(b.fechaEmision).getTime()) {
                    if (a.tipoDocumento === "FACTURA" || b.nombre.tipoDocumento === "FACTURA") {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }
                return 0;
            });
            for (const element of arrayaux) {
                let fechadocumen = new Date(element.fechaEmision);
                let fecha = `${fechadocumen.getFullYear()}-${(fechadocumen.getMonth() + 1).toString().padStart(2, '0')}-${(fechadocumen.getDate() + 1).toString().padStart(2, '0')}`;
                switch (element.tipoDocumento) {
                    case "RECIBO":
                        this.saldo -= element.totalDocumento;
                        arrayauxiliar = [...arrayauxiliar, { documento: element.nombre + " " + element.codigo, Fechadocumento: fecha,
                                debito: 0,
                                credito: element.totalDocumento,
                                saldoactual: this.saldo
                            }];
                        break;
                    case "DEVOLUCION":
                        this.saldo -= element.totalDocumento;
                        arrayauxiliar = [...arrayauxiliar, { documento: element.nombre + " " + element.codigo, Fechadocumento: fecha,
                                debito: 0,
                                credito: element.totalDocumento,
                                saldoactual: this.saldo
                            }];
                        break;
                    case "FACTURA":
                        this.saldo += element.totalDocumento;
                        arrayauxiliar = [...arrayauxiliar, { documento: element.nombre + " " + element.codigo, Fechadocumento: fecha,
                                debito: element.totalDocumento,
                                credito: 0,
                                saldoactual: this.saldo
                            }];
                        break;
                    default:
                        break;
                }
            }
            this.dataSource.data = arrayauxiliar;
        });
    }
}
AuxclienteComponent.ɵfac = function AuxclienteComponent_Factory(t) { return new (t || AuxclienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__.Socket_producto)); };
AuxclienteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuxclienteComponent, selectors: [["app-auxcliente"]], decls: 98, vars: 21, consts: [[1, "d-flex", "justify-content-center", 2, "padding", "30px 12px 10px 12px"], [1, "tituloP"], [1, "row", "loader-content", 2, "padding-top", "20px", "height", "100% !important"], [1, "buscaliente", 2, "width", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "padding", "0 8px 100px 5px"], [2, "max-width", "70%", "max-height", "fit-content", "width", "100%"], [1, "search"], [2, "display", "flex", "justify-content", "space-between"], [1, "m-0", 2, "margin-left", "15px !important"], [1, "row"], [1, "col-12"], ["appearance", "fill", "search", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], [1, "d-flex", "justify-content-between", "flex-wrap", 2, "padding", "0 12px 0 12px"], [1, "example-full-width", "mat-form-cxc", 2, "padding", "0 !important", "flex", "0 0 30%"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matIconSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["pickerinicial", ""], ["pickerfinal", ""], [1, "overflow-content", 2, "height", "auto"], [1, "clientelist", 3, "multiple"], ["shoes", ""], ["style", "width: calc(100% - 32px); margin: auto; border-radius: 8px", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "b-primary", "icon-card", 2, "height", "100px"], [2, "border", "none !important"], ["mat-card-avatar", ""], ["style", "\n                width: 40px;\n                height: 40px;\n                border-radius: 50%;\n                object-fit: cover;\n              ", 3, "src", 4, "ngIf", "ngIfElse"], ["sinimagen", ""], [1, "client-name"], [1, "separator"], [1, "client-info"], [1, "col-6", "p-0", "elipsis"], [1, "col-12", "p-0", "elipsis"], [1, "tabla-scroll", 2, "width", "100%", "margin-top", "10px"], [1, "tabla-contenedor"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", "col-12", "tab-factura", 3, "dataSource"], ["matColumnDef", "Documento"], ["mat-header-cell", "", "sticky", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Fechadocumento"], ["matColumnDef", "debito"], ["matColumnDef", "credito"], ["matColumnDef", "saldoactual"], ["mat-header-row", "", "class", "tablatr", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "d-flex", "justify-content-between", 2, "margin-top", "10px", "padding", "0 0px 0 0px"], [1, "d-flex", "justify-content-center"], ["matFab", "", "aria-label", "Example icon button with a delete icon", 1, "botonpdf", 3, "click"], ["src", "../../../../../assets/images/imgpdf.svg", 1, "imgicon", 2, "color", "#fe676c", "width", "34px", "height", "36px"], [2, "font-weight", "700", "font-size", "20px", "font-family", "'Montserrat', sans-serif !important", "line-height", "2"], [2, "width", "calc(100% - 32px)", "margin", "auto", "border-radius", "8px", 3, "value", "click"], ["mat-line", "", 1, "bold"], ["mat-line", ""], [2, "width", "40px", "height", "40px", "border-radius", "50%", "object-fit", "cover", 3, "src"], [1, "head-icon", 2, "margin", "11px 0"], ["mat-header-cell", "", "sticky", ""], ["mat-cell", ""], ["mat-header-row", "", 1, "tablatr"], ["mat-row", ""]], template: function AuxclienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Movimiento de cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "mat-card", 4)(6, "mat-card-header", 5)(7, "div", 6)(8, "mat-card-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "mat-form-field", 10)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Buscar cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuxclienteComponent_Template_input_ngModelChange_15_listener($event) { return ctx.autocompletarinputclient($event); })("ngModelChange", function AuxclienteComponent_Template_input_ngModelChange_15_listener($event) { return ctx.cliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13)(19, "mat-form-field", 14)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "fecha inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuxclienteComponent_Template_input_ngModelChange_22_listener($event) { return ctx.fechaInicial = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-datepicker-toggle", 16)(24, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-datepicker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-form-field", 14)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "fecha final");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuxclienteComponent_Template_input_ngModelChange_31_listener($event) { return ctx.fechafinal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-datepicker-toggle", 16)(33, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "mat-datepicker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-card-content", 20)(38, "mat-selection-list", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AuxclienteComponent_mat_list_option_40_Template, 8, 3, "mat-list-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-card", 24)(42, "mat-card-header", 25)(43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, AuxclienteComponent_img_44_Template, 1, 1, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, AuxclienteComponent_ng_template_45_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-card-title", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-card-subtitle", 31)(51, "div", 8)(52, "div", 32)(53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 32)(57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "phone_android");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 32)(61, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 32)(65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "alternate_email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 33)(69, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 34)(73, "div", 35)(74, "table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](75, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, AuxclienteComponent_th_76_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, AuxclienteComponent_td_77_Template, 2, 1, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](78, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, AuxclienteComponent_th_79_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, AuxclienteComponent_td_80_Template, 2, 1, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](81, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, AuxclienteComponent_th_82_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, AuxclienteComponent_td_83_Template, 2, 1, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](84, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, AuxclienteComponent_th_85_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, AuxclienteComponent_td_86_Template, 2, 1, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](87, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, AuxclienteComponent_th_88_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, AuxclienteComponent_td_89_Template, 2, 1, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, AuxclienteComponent_tr_90_Template, 1, 0, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, AuxclienteComponent_tr_91_Template, 1, 0, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 46)(93, "div", 47)(94, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuxclienteComponent_Template_button_click_94_listener() { return ctx.clickpdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.fechaInicial);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.fechafinal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.clientes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.clienteSeleccionado.imagen)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.clienteSeleccionado.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.identificacion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.celulares, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.telefonoFijo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.direccion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total: $", ctx.saldo.toLocaleString("de-DE"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerToggleIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatSelectionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow], styles: ["@charset \"UTF-8\";\n  .mat-form-cxc .mat-form-field-wrapper > div > div {\n  display: flex;\n}\n  .mat-form-cxc .mat-form-field-wrapper {\n  padding: 0 !important;\n}\n  .mat-form-cxc .mat-form-field-underline {\n  border-bottom: 2px solid #2196f3; \n}\n@media (max-width: 624px) {\n    .mat-form-cxc {\n    flex: 0 0 100% !important;\n  }\n}\n.tituloP[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n}\n.tabla-contenedor[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow: auto;\n  position: relative;\n  width: 100%;\n  box-shadow: 0 6px 10px 0px rgba(39, 38, 49, 0.1) !important;\n  border-radius: 10px;\n}\n.clientelist[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow: auto;\n}\n.botonpdf[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  background: #fff;\n  transition: background-color 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1eGNsaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ1o7RUFDQyxhQUFBO0FBQ0w7QUFJQTtFQUNJLHFCQUFBO0FBRko7QUFNQTtFQUNFLGdDQUFBLEVBQUEsOEJBQUE7QUFIRjtBQU1BO0VBRUU7SUFDTSx5QkFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUVJLGlCQUFBO0VBQ0EsYUFBQTtFQUVBLGlCQUFBO0VBQ0EsdUJBQUE7QUFQSjtBQVdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkRBQUE7RUFDQSxtQkFBQTtBQVJKO0FBWUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFUSjtBQVlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQVRGIiwiZmlsZSI6ImF1eGNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWN4Y3tcclxuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyPmRpdj5kaXZ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgXHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1jeGMgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMTk2ZjM7IC8qIG8gZWwgY29sb3IgcXVlIHTDuiBxdWllcmFzICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYyNHB4KSB7XHJcblxyXG4gIDo6bmctZGVlcCAgLm1hdC1mb3JtLWN4Y3tcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGl0dWxvUFxyXG4ge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udGFibGEtY29udGVuZWRvcntcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMHB4IHJnYmEoMzksIDM4LCA0OSwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jbGllbnRlbGlzdHtcclxuICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5ib3RvbnBkZntcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246ICBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTs7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 18491:
/*!****************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/auxcliente/dpfaux.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePDFaux": () => (/* binding */ generatePDFaux)
/* harmony export */ });
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__);


//import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__;
const generatePDFaux = (data, totalCartera, clienteSeleccionado, dataempresa) => {
    console.log("Cliente seleccionado producto tablaapdf", data, totalCartera);
    //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.
    const nuevaVentana = window.open('', '_blank');
    if (!nuevaVentana) {
        alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
        return null;
    }
    const tableBody = [
        [
            { text: 'Documento', style: 'tableHeader' },
            { text: 'Fecha', style: 'tableHeader' },
            { text: 'Debito', style: 'tableHeader' },
            { text: 'Credito', style: 'tableHeader' },
            { text: 'Saldo', style: 'tableHeader' },
        ],
    ];
    /*tableBody.push([
          { text: String(item.codigo), noWrap: false, fontSize: 8 },
          { text: String(item.nombre), noWrap: false, fontSize: 8 },
          { text: String(item.fechaEmision), noWrap: false, fontSize: 8 },
          { text: String(item.fechaVencimiento), noWrap: false, fontSize: 8 },
          { text: String(item.dias), noWrap: false, fontSize: 8 },
          {
            text: String(`$${item.totalFactura.toLocaleString('de-DE')}`),
            noWrap: false,
            fontSize: 8,
          },
          {
            text: String(`$${item.saldo.toLocaleString('de-DE')}`),
            noWrap: false,
            fontSize: 8,
          },
          { text: String(item.vendedor), noWrap: false, fontSize: 8 },
          { text: String(item.cliente), noWrap: false, fontSize: 8 },
        ]);*/
    data.forEach((fact, index) => {
        tableBody.push([
            { text: String(fact.documento), noWrap: false, fontSize: 8 },
            { text: String(fact.Fechadocumento), noWrap: false, fontSize: 8 },
            {
                text: String(`$${fact.debito.toLocaleString('de-DE')}`),
                noWrap: false,
                fontSize: 8,
            },
            {
                text: String(`$${fact.credito.toLocaleString('de-DE')}`),
                noWrap: false,
                fontSize: 8,
            },
            {
                text: String(`$${fact.saldoactual.toLocaleString('de-DE')}`),
                noWrap: false,
                fontSize: 8,
            },
        ]);
    });
    //Se calcula la suma total de todos los productos usando reduce.
    //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    const content = [];
    //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.
    /*content.push({
      stack: [{ text: '', fontSize: 20, bold: true }],
      alignment: 'center',
    });*/
    content.push({
        columns: [
            { text: 'Movimientos cliente', width: '*', alignment: "center", fontSize: 12, bold: true, margin: [0, 0, 0, 0], },
        ],
    });
    content.push({
        columns: [
            { text: dataempresa, width: '*', alignment: "center", fontSize: 12, bold: true, margin: [0, 0, 0, 10], }
        ],
    });
    content.push({
        columns: [
            {
                text: [
                    { text: 'Cliente: ', bold: true },
                    { text: clienteSeleccionado.nombre, fontSize: 10 }
                ],
                width: '*',
                alignment: 'left'
            }
        ],
    });
    content.push({ text: '\n' });
    //Muestra la tabla de productos con sus cantidades y totales.
    //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.
    //con auto las columnas toman el ancho necesario según su contenido. 
    //con * la columna toma el espacio restante disponible.
    //y especificando un numero en lugar de auto o * se define un ancho fijo.
    content.push({
        columns: [
            {
                width: '*',
                table: {
                    headerRows: 0,
                    widths: [
                        '*',
                        '*',
                        '*',
                        '*',
                        '*',
                    ],
                    body: tableBody,
                },
                layout: 'lightHorizontalLines',
                margin: [0, 10, 10, 10],
            },
        ],
    });
    //Muestra el total de la compra alineado a la derecha.
    content.push({
        columns: [
            { text: '', width: '*' },
            {
                text: `Total saldo: $ ${totalCartera.toLocaleString('de-DE')}`,
                style: 'total',
                alignment: 'right',
                margin: [0, 10, 0, 10],
            },
        ],
    });
    //Define estilos reutilizables usados en el contenido: encabezados, subencabezados, etc.
    const styles = {
        header: {
            fontSize: 5,
            bold: true,
        },
        subheader: {
            fontSize: 12,
            margin: [0, 5, 0, 5],
        },
        tableHeader: {
            bold: true,
            fontSize: 8,
            color: 'black',
        },
        total: {
            fontSize: 12,
            bold: true,
        },
    };
    //docDefinition es el objeto completo que define el PDF a generar.
    const docDefinition = {
        content,
        styles,
    };
    //Genera el PDF y lo abre en una nueva pestaña del navegador.
    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__.createPdf(docDefinition).getBlob((blob) => {
        const url = URL.createObjectURL(blob);
        nuevaVentana.location.href = url;
    });
};


/***/ }),

/***/ 81696:
/*!**********************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/cuadre/cuadre.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuadreComponent": () => (/* binding */ CuadreComponent)
/* harmony export */ });
/* harmony import */ var C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/serviciosdbs/serviciodb.service */ 60981);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);















function CuadreComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r6.codigo.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.alias);
  }
}

function CuadreComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r7.codigo.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.nombre);
  }
}

function CuadreComponent_div_120_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Efectivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CuadreComponent_div_120_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.etiquetTcredito && ctx_r9.etiquetTcredito !== "" ? ctx_r9.etiquetTcredito : "T.credito", " ");
  }
}

function CuadreComponent_div_120_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.etiquteaTdebito && ctx_r10.etiquteaTdebito !== "" ? ctx_r10.etiquteaTdebito : "T.debito", " ");
  }
}

function CuadreComponent_div_120_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Bancos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CuadreComponent_div_120_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cartera ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CuadreComponent_div_120_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r13.etiquetcheque && ctx_r13.etiquetcheque !== "" ? ctx_r13.etiquetcheque : "Cheque", " ");
  }
}

function CuadreComponent_div_120_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r14.efectivoventas.toLocaleString("de-DE"));
  }
}

function CuadreComponent_div_120_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.creditoventas.toLocaleString("de-DE"));
  }
}

function CuadreComponent_div_120_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.debitoventas.toLocaleString("de-DE"));
  }
}

function CuadreComponent_div_120_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.bancosventas.toLocaleString("de-DE"));
  }
}

function CuadreComponent_div_120_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.cxcventas.toLocaleString("de-DE"));
  }
}

function CuadreComponent_div_120_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r19.chequeventas.toLocaleString("de-DE"));
  }
}

function CuadreComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Formas de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 37)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CuadreComponent_div_120_th_6_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CuadreComponent_div_120_th_7_Template, 2, 1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CuadreComponent_div_120_th_8_Template, 2, 1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CuadreComponent_div_120_th_9_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CuadreComponent_div_120_th_10_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CuadreComponent_div_120_th_11_Template, 2, 1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody")(15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CuadreComponent_div_120_td_16_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CuadreComponent_div_120_td_17_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CuadreComponent_div_120_td_18_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CuadreComponent_div_120_td_19_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CuadreComponent_div_120_td_20_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CuadreComponent_div_120_td_21_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.efectivoventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.creditoventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.debitoventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.bancosventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.cxcventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.chequeventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.efectivoventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.creditoventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.debitoventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.bancosventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.cxcventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.chequeventas > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.totalventas.toLocaleString("de-DE"));
  }
}

function CuadreComponent_div_200_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Formas de pago resumen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 37)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Efectivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Tarjetas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Otros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Cartera ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tbody")(17, "tr")(18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.efectivoglobal.toLocaleString("de-DE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.targetas.toLocaleString("de-DE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.otros.toLocaleString("de-DE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.cxcventas.toLocaleString("de-DE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.totalglobalmetodos.toLocaleString("de-DE"));
  }
}

class CuadreComponent {
  constructor(socketproduct, serviciod, cdr, zone) {
    this.socketproduct = socketproduct;
    this.serviciod = serviciod;
    this.cdr = cdr;
    this.zone = zone;
    this.etiquetTcredito = '';
    this.etiquteaTdebito = '';
    this.ventascuadre = {
      ftBono: "",
      ftCheque: "",
      ftCredito: "",
      ftCxc: "",
      ftDebito: "",
      ftDescuentos: "",
      ftEfectivo: "",
      ftExenta: "",
      ftGravada: "",
      ftIva: "",
      totalVentas: ""
    };
    this.reciboscuadre = {
      TBancos: "0",
      TCheque: "0",
      TCredito: "0",
      TDebito: "0",
      TDescuentos: "0",
      TEfectivo: "258477000",
      totalRecibos: "258477000"
    };
    this.egresoscuadre = {
      tDescuentos: "0",
      tEgresos: "0"
    };
    this.devolucionescuadre = {
      totalDescuentos: "0",
      totalDescuentosCartera: "0",
      totalDescuentosContado: "0",
      totalDevolucion: "0",
      totalDevolucionCartera: "0",
      totalDevolucionContado: "0"
    };
    this.nivel = 0;
    this.ventabruta = 0;
    this.descuentoventa = 0;
    this.retencionesventa = 0;
    this.gravadasventas = 0;
    this.exentasventas = 0;
    this.ivaventas = 0;
    this.totalventas = 0;
    this.descuentorecibos = 0;
    this.totalrecibos = 0;
    this.totalglobalmetodos = 0;
    this.descuentoegresos = 0;
    this.totalegreso = 0;
    this.chequeventas = 0;
    this.creditoventas = 0;
    this.debitoventas = 0;
    this.efectivoventas = 0;
    this.bancosventas = 0;
    this.totaldevoluciones = 0;
    this.efectivoglobal = 0;
    this.targetas = 0;
    this.cxcventas = 0;
    this.totalcaja = 0;
    this.netoventa = 0;
    this.otros = 0;
    this.almacen = '0';
    this.usuario = '0';
    this.disabletodo = true;
    this.almacenes = [];
    this.usuarios = [];
    this.saldo = 0;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
    this.cliente = '';
    this.displayedColumns = ['Documento', 'Fechadocumento', 'debito', 'credito', 'saldoactual'];
    this.clientes = [];
    this.clienteSeleccionado = {
      nombre: 'Seleccione un cliente',
      identificacion: '',
      email: '',
      celulares: '',
      direccion: '',
      telefonoFijo: '',
      codigo: 0,
      imagen: null,
      ciudad: ''
    };
    this.etiquetabono = "";
    this.etiquetcheque = "";
  }

  autocompletarinputclient(valor) {
    if (valor === '') {
      this.clientes = [];
    } else {
      this.socketproduct.obtenerInfo('terceros', 'pazzioli-pos-3', {
        metodo: 'CONSULTAR',
        condicion: 'nombres',
        consulta: 'TERCEROS',
        canalserver: 'terceros',
        datoCondicion: valor
      }).subscribe(dato => {
        if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
          this.clientes = JSON.parse(dato).mensajePeticion;
        }
      });
    }
  }

  cargarDatosempresa() {
    var _this = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const datos = yield _this.socketproduct.obteneralmacen().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).toPromise();
      console.log("datos almacen empresa", datos);
      _this.etiquetTcredito = datos.config.ETIQUETA_TCREDITO;
      _this.etiquteaTdebito = datos.config.ETIQUETA_TDEBITO;
      _this.etiquetabono = datos.config.ETIQUETA_BONO;
      _this.etiquetcheque = datos.config.ETIQUETA_CHEQUE;
      console.log("datosSSSSSSSSS", datos);
    })();
  }

  ngOnInit() {
    var _this2 = this;

    this.fechaInicial = new Date();
    this.fechafinal = new Date();
    this.socketproduct.obtenerInfo('aws', 'pazzioli-pos-3', {
      metodo: 'CONSULTAR',
      condicion: 'bodega',
      consulta: 'PRODUCTOS',
      canalserver: 'aws',
      datoCondicion: ''
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dato) {
        yield _this2.cargarDatosempresa(); // this.socketproduct.consultarusuario()

        console.log("BODEAS ACTULES", JSON.parse(dato).mensajePeticion);
        _this2.almacenes = [...JSON.parse(dato).mensajePeticion];

        _this2.serviciod.tienesedeselccionada().subscribe(data => {
          _this2.zone.run(() => {
            _this2.almacen = data.codigobodega.toString();
            console.log('Actualizando bodega:', _this2.almacen, data.codigousuario, data.nivel);

            _this2.cdr.detectChanges();
          });

          let nivel = data.nivel;

          if (data.nivel === 4 || data.nivel === 1) {
            _this2.nivel = data.nivel;

            _this2.socketproduct.consultarusuario(data.codigousuario).subscribe(data => {
              _this2.disabletodo = false;
              console.log("data usuario", data.datoscliente[0]);
              _this2.usuarios = data.datoscliente;
              _this2.usuario = data.datoscliente[0].codigo.toString();

              if (nivel !== 1) {
                _this2.almacenes = _this2.almacenes.filter(datos => {
                  console.log(datos.codigo === data.codigobodega, data.codigobodega);
                  return datos.codigo === Number(_this2.almacen);
                });
                console.log("almacenfiltrado", _this2.almacenes, nivel);
              }

              _this2.cdr.detectChanges(); // Forzar actualización

            });
          } else {
            _this2.socketproduct.consultarusuario(0).subscribe(data => {
              console.log("data usuario", data);
              _this2.usuarios = data.datoscliente;
            });
          }
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  cargaalmacen(valor) {
    if (this.nivel === 4 || this.nivel === 1) {
      this.socketproduct.consultarusuarioalmacen(Number(valor)).subscribe(data => {
        const codigousuact = this.usuario;
        const usuarioarray = data.usuarios;
        this.usuario = '0';
        this.usuarios = [...usuarioarray];
        /*   console.log("datos almacen",data)
           const usuarioarray=data.usuarios
        const codigosExistentes = this.usuarios.map((u: any) => u.codigo);
        const usuariofiltrado = usuarioarray.filter((u: any) => !codigosExistentes.includes(u.codigo));
             console.log("usuario filtrado",usuariofiltrado)
         const usuario=this.usuarios
         const usuarioactual=this.usuarios.findIndex((item:any)=>{
           return item.codigo ===   Number(codigousuact)
         })
         if(usuarioactual!==-1){
                      const usuariofinal=[...usuariofiltrado,usuario[usuarioactual]]
        this.usuarios=[...usuariofinal]
         console.log("usuario final", this.usuarios)
         }else{
            const usuariofinal=[...usuariofiltrado]
         }*/
      });
    }
  }

  formatearvariables() {
    this.ventabruta = 0;
    this.descuentoventa = 0;
    this.retencionesventa = 0;
    this.gravadasventas = 0;
    this.exentasventas = 0;
    this.ivaventas = 0;
    this.totalventas = 0;
    this.descuentorecibos = 0;
    this.totalrecibos = 0;
    this.totalglobalmetodos = 0;
    this.descuentoegresos = 0;
    this.totalegreso = 0;
    this.chequeventas = 0;
    this.creditoventas = 0;
    this.debitoventas = 0;
    this.efectivoventas = 0;
    this.bancosventas = 0;
    this.totaldevoluciones = 0;
    this.efectivoglobal = 0;
    this.targetas = 0;
    this.cxcventas = 0;
    this.totalcaja = 0;
    this.otros = 0;
  }

  consultarcuadre() {
    this.exentasventas = 0;
    this.gravadasventas = 0;
    this.ivaventas = 0;
    this.cxcventas = 0;
    this.descuentoventa = 0;
    this.totalventas = 0;
    this.efectivoventas = 0;
    this.creditoventas = 0;
    this.debitoventas = 0;
    this.bancosventas = 0;
    this.chequeventas = 0;
    this.totaldevoluciones = 0;
    this.efectivoglobal = 0;
    this.targetas = 0;
    this.otros = 0;
    console.log("fechas", this.fechaInicial, this.fechafinal);
    this.formatearvariables();
    this.socketproduct.consultarTotalesVentasXUsuarioXRangoFechas(Number(this.usuario), Number(this.almacen), `${this.fechaInicial.getFullYear()}-${(Number(this.fechaInicial.getMonth()) + 1).toString().padStart(2, '0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `, `${this.fechafinal.getFullYear()}-${(Number(this.fechafinal.getMonth()) + 1).toString().padStart(2, '0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(data => {
      console.log("total de ventas", data.datosaux[0]);
      this.exentasventas = Number(data.datosaux[0].ftExenta);
      this.gravadasventas = Number(data.datosaux[0].ftGravada);
      this.ivaventas = Number(data.datosaux[0].ftIva);
      this.cxcventas = Number(data.datosaux[0].ftCxc);
      this.descuentoventa = Number(data.datosaux[0].ftDescuentos);
      this.totalventas = Number(data.datosaux[0].totalVentas);
      this.efectivoventas = Number(data.datosaux[0].ftEfectivo);
      this.creditoventas = Number(data.datosaux[0].ftCredito);
      this.debitoventas = Number(data.datosaux[0].ftDebito);
      this.bancosventas = Number(data.datosaux[0].ftBono);
      this.chequeventas = Number(data.datosaux[0].ftCheque);
      this.ventascuadre = data.datosaux[0];
      this.socketproduct.consultarTotalesRecibosIngresoXUsuarioXRangoFechas(Number(this.usuario), Number(this.almacen), `${this.fechaInicial.getFullYear()}-${(this.fechaInicial.getMonth() + 1).toString().padStart(2, '0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `, `${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth() + 1).toString().padStart(2, '0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(dat => {
        console.log("datos recibos", dat);
        this.totalrecibos = Number(dat.datosaux[0].totalRecibos);
        this.descuentorecibos = Number(dat.datosaux[0].TDescuentos);
        this.reciboscuadre = dat.datosaux[0];
        this.socketproduct.consultarTotalesRecibosEgresoXUsuarioXRangoFechas(Number(this.usuario), Number(this.almacen), `${this.fechaInicial.getFullYear()}-${(this.fechaInicial.getMonth() + 1).toString().padStart(2, '0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `, `${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth() + 1).toString().padStart(2, '0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(datos => {
          console.log("datos recibos egresos", datos);
          this.totalegreso = Number(datos.datosaux[0].tEgresos);
          this.descuentoegresos = Number(datos.datosaux[0].tDescuentos);
          this.egresoscuadre = datos.datosaux[0];
          this.socketproduct.consultarTotalesDevolucionesXUsuarioXRangoFechas(Number(this.usuario), Number(this.almacen), `${this.fechaInicial.getFullYear()}-${(this.fechaInicial.getMonth() + 1).toString().padStart(2, '0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `, `${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth() + 1).toString().padStart(2, '0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe(dato => {
            console.log("datos recibos devoluciones", dato);
            this.totaldevoluciones = Number(datos.datosaux[0].totalDevolucion);
            this.netoventa = this.totalventas - Number(dato.datosaux[0].totalDevolucion);
            console.log(typeof dato.datosaux[0].totalDevolucion, typeof this.totalventas);
            this.devolucionescuadre = dato.datosaux[0];
            this.efectivoglobal += Number(this.ventascuadre.ftEfectivo) + Number(this.reciboscuadre.TEfectivo) - (Number(this.egresoscuadre.tEgresos) + Number(this.devolucionescuadre.totalDevolucion));
            this.targetas += Number(this.ventascuadre.ftDebito) + Number(this.ventascuadre.ftCredito) + Number(this.reciboscuadre.TDebito) + Number(this.reciboscuadre.TCredito);
            this.otros += Number(this.ventascuadre.ftBono) + Number(this.ventascuadre.ftCheque) + Number(this.reciboscuadre.TCheque);
            this.totalglobalmetodos += this.efectivoglobal + this.targetas + this.otros + this.cxcventas;
            this.totalcaja += Number(this.efectivoglobal);
            console.log(this.ventascuadre.totalVentas, this.reciboscuadre.totalRecibos, this.egresoscuadre.tEgresos, this.devolucionescuadre.totalDevolucion);
          });
        });
      });
    });
  }

  seleccionarCliente(cliente) {
    this.clienteSeleccionado.nombre = cliente.razonSocial;
    this.clienteSeleccionado.identificacion = cliente.identificacion;
    this.clienteSeleccionado.email = cliente.email;
    this.clienteSeleccionado.celulares = cliente.celulares;
    this.clienteSeleccionado.direccion = cliente.direccion;
    this.clienteSeleccionado.telefonoFijo = cliente.telefonoFijo;
    this.clienteSeleccionado.codigo = cliente.codigo;
    this.clienteSeleccionado.imagen = cliente.imagen || null;
    this.clienteSeleccionado.ciudad = cliente.municipio;
    this.cliente = '';
    this.clientes = [];
    this.buscarfacturasxusuarios(cliente);
  }

  buscarfacturasxusuarios(clientea) {
    var _this3 = this;

    console.log(`${this.fechaInicial.getFullYear()}-${this.fechaInicial.getMonth().toString().padStart(2, '0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `, `${this.fechafinal.getFullYear()}-${this.fechafinal.getMonth().toString().padStart(2, '0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `, clientea);
    this.socketproduct.consultarfacturasxusuario(clientea.codigo, `${this.fechaInicial.getFullYear()}-${this.fechaInicial.getMonth().toString().padStart(2, '0')}-${this.fechaInicial.getDate().toString().padStart(2, '0')} `, `${this.fechafinal.getFullYear()}-${(this.fechafinal.getMonth() + 1).toString().padStart(2, '0')}-${this.fechafinal.getDate().toString().padStart(2, '0')} `).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        console.log("data", data);
        let aux = [];
        let auxdi = [];

        for (const element of data.factura) {
          let datarecibo = [];
          aux = [...aux, {
            documento: element.nombre + " " + element.codigo,
            Fechadocumento: element.fechaEmision,
            debito: element.valorCXC,
            credito: 0,
            saldoactual: element.saldo
          }];
          console.log("codigos facturas", element, element.codigo);
          const data = yield _this3.socketproduct.consultarrecibosxusuario(element.codigo, element.codigoComprobante).toPromise();
          data.recibos.forEach(item => {
            let fechadocumen = new Date(item.fechaIngreso);
            datarecibo = [...datarecibo, {
              documento: item.nombre,
              Fechadocumento: `${fechadocumen.getFullYear()}-${(fechadocumen.getMonth() + 1).toString().padStart(2, '0')}-${fechadocumen.getDate().toString().padStart(2, '0')}`,
              debito: 0,
              credito: item.valor
            }];
          });
          auxdi = [...auxdi, ...datarecibo];
          auxdi = auxdi.sort((a, b) => {
            if (new Date(a.Fechadocumento) > new Date(b.Fechadocumento)) {
              return 1;
            }

            if (new Date(a.Fechadocumento) < new Date(b.Fechadocumento)) {
              return -1;
            }

            return 0;
          });
        }

        ;
        /*    auxdi=auxdi.map((items:any)=>{
              if(items.debito>0){
                if(items.debito< this.saldo){
                this.saldo+=items.debito
                          }
              }
                if(items.credito>0){
                   this.saldo-=items.debito
                }
                // Devuelve un nuevo objeto (map SIEMPRE crea un nuevo array)
        return {
        ...items,
        saldoactual: this.saldo
        };
              
              
            })*/

        aux = [...aux, ...auxdi];
        /*  aux=   aux.sort((a:any,b:any)=>{
              if(new Date(a.Fechadocumento)>new Date(b.Fechadocumento)){
                console.log("mayor")
                return 1;
              }
              if(new Date(a.Fechadocumento)<new Date(b.Fechadocumento)){
                console.log("menor")
                return -1
              }
              return 0
            })
            console.log("aux order",aux)*/

        aux = aux.map(items => {
          _this3.saldo += items.debito - items.credito; // Devuelve un nuevo objeto (map SIEMPRE crea un nuevo array)

          return { ...items,
            saldoactual: _this3.saldo
          };
        });
        console.log("datarecibossss", auxdi);
        console.log("aux array:", aux);
        _this3.dataSource.data = aux;
        console.log(aux);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

}

CuadreComponent.ɵfac = function CuadreComponent_Factory(t) {
  return new (t || CuadreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_2__.serviciodb), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

CuadreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CuadreComponent,
  selectors: [["app-cuadre"]],
  decls: 201,
  vars: 44,
  consts: [[1, "d-flex", "justify-content-center", 2, "padding", "30px 12px 10px 12px"], [1, "tituloP"], [1, "row", "loader-content", 2, "padding-top", "20px", "height", "100% !important"], [1, "buscaliente", 2, "width", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "padding", "0 8px 100px 5px"], [2, "max-width", "70%", "max-height", "fit-content", "width", "100%"], [1, "search"], [1, "row"], [1, "col-6"], ["appearance", "fill", 1, "classformbodega"], ["matNativeControl", "", 3, "ngModel", "ngModelChange"], ["value", "0", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "flex-wrap", 2, "padding", "0 12px 0 12px"], [1, "example-full-width", "mat-form-cxc", 2, "padding", "0 !important", "flex", "0 0 30%"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matIconSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["pickerinicial", ""], ["pickerfinal", ""], [2, "display", "flex", "justify-content", "center", "padding", "10px 0 10px 0"], [1, "botonconsulcua", 3, "click"], [1, "row", 2, "width", "100%", "max-width", "1150px"], [1, "col-12"], [2, "display", "flex", "justify-content", "end", "width", "100%"], [1, "clasecuadrecajatotal"], [1, "d-flex", "justify-content-start", "flex-column"], [1, "tituloseccion", 2, "padding", "0 17px"], [1, "col-12", "col-md-6", 2, "padding", "0"], [1, "labelcuadre"], ["appearance", "fill", "search", "", 1, "inputdisabled"], [1, "totalescuadrespan"], ["matInput", "", "placeholder", "", "disabled", ""], [1, "col-6", "col-md-4"], ["class", "col-12", "style", "width: 100%; overflow: auto;", 4, "ngIf"], [1, "row", 2, "width", "100%"], [3, "value"], [1, "col-12", 2, "width", "100%", "overflow", "auto"], [1, "tablametodos"], [4, "ngIf"], [1, "tituloseccion", 2, "padding", "12px 0px"]],
  template: function CuadreComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-card-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cuadre diario");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "mat-card", 4)(6, "mat-card-header", 5)(7, "div", 6)(8, "div", 7)(9, "mat-form-field", 8)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Elige un almacen");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CuadreComponent_Template_select_ngModelChange_12_listener($event) {
        return ctx.almacen = $event;
      })("ngModelChange", function CuadreComponent_Template_select_ngModelChange_12_listener($event) {
        return ctx.cargaalmacen($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Todo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CuadreComponent_option_15_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "mat-form-field", 8)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Elige un usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CuadreComponent_Template_select_ngModelChange_20_listener($event) {
        return ctx.usuario = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Todo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CuadreComponent_option_23_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12)(25, "mat-form-field", 13)(26, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Fecha inicial");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CuadreComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.fechaInicial = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-datepicker-toggle", 15)(30, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "keyboard_arrow_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "mat-datepicker", null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 13)(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Fecha final");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CuadreComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.fechafinal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-datepicker-toggle", 15)(39, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "keyboard_arrow_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "mat-datepicker", null, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-card-footer", 19)(44, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuadreComponent_Template_button_click_44_listener() {
        return ctx.consultarcuadre();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Consultar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 21)(47, "div", 22)(48, "mat-card")(49, "mat-card-header")(50, "div", 23)(51, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-card-header")(54, "div", 23)(55, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-card-header")(59, "div", 23)(60, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 25)(63, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Ventas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 6)(66, "div", 27)(67, "div", 6)(68, "div", 7)(69, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Total venta bruta");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-form-field", 29)(72, "mat-label")(73, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 7)(77, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Total descuento");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-form-field", 29)(80, "mat-label")(81, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 27)(85, "div", 6)(86, "div", 7)(87, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Total gravada");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-form-field", 29)(90, "mat-label")(91, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 7)(95, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Total exentas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "mat-form-field", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-label")(100, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 6)(103, "div", 32)(104, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Total iva");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "mat-form-field", 29)(107, "mat-label")(108, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 32)(112, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Total ventas");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "mat-form-field", 29)(115, "mat-label")(116, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](120, CuadreComponent_div_120_Template, 24, 13, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 25)(122, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Recibos de ingreso");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 6)(125, "div", 7)(126, "div")(127, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Total recibos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "mat-form-field", 29)(130, "mat-label")(131, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 7)(135, "div")(136, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Total descuentos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "mat-form-field", 29)(139, "mat-label")(140, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 25)(145, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Egresos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 6)(148, "div", 7)(149, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Total egresos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "mat-form-field", 29)(152, "mat-label")(153, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 7)(157, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Total descuentos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "mat-form-field", 29)(160, "mat-label")(161, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 25)(165, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "Devoluciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 6)(168, "div", 27)(169, "div", 6)(170, "div", 7)(171, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Total devoluciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "mat-form-field", 29)(174, "mat-label")(175, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](177, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 7)(180, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Total devolucion contado");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "mat-form-field", 29)(183, "mat-label")(184, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](186, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 27)(189, "div", 6)(190, "div", 7)(191, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "Total devolucion cartera");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "mat-form-field", 29)(194, "mat-label")(195, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](197, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](200, CuadreComponent_div_200_Template, 28, 5, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](42);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.almacen);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.almacenes);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.usuario);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.usuarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx.fechaInicial);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r3)("ngModel", ctx.fechafinal);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total ventas: $", ctx.totalventas.toLocaleString("de-DE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total devolu: $", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](57, 28, ctx.devolucionescuadre.totalDevolucion, "1.0-0", "de-DE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Neto ventas : $", ctx.netoventa.toLocaleString("de-DE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalventas.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.descuentoventa.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.gravadasventas.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.exentasventas.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ivaventas.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalventas.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.totalventas > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalrecibos.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.descuentorecibos.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalegreso.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.descuentoegresos.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](177, 32, ctx.devolucionescuadre.totalDevolucion, "1.0-0", "de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](186, 36, ctx.devolucionescuadre.totalDevolucionContado, "1.0-0", "de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](197, 40, ctx.devolucionescuadre.totalDevolucionCartera, "1.0-0", "de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.totalventas > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardFooter, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggleIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
  styles: ["@charset \"UTF-8\";\n  .mat-form-cxc .mat-form-field-wrapper > div > div {\n  display: flex;\n}\n  .mat-form-cxc .mat-form-field-wrapper {\n  padding: 0 !important;\n}\n.lineatotales[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border: 1px solid gray;\n  display: block;\n}\n.botontable[_ngcontent-%COMP%] {\n  border: none;\n  border: 0.5px solid #000;\n  padding: 0;\n  border-radius: 20px;\n  text-align: center;\n  display: flex;\n}\n  .mat-form-cxc .mat-form-field-underline {\n  border-bottom: 2px solid #2196f3; \n}\n@media (max-width: 624px) {\n    .mat-form-cxc {\n    flex: 0 0 100% !important;\n  }\n}\n.tituloseccion[_ngcontent-%COMP%] {\n  font: bold 14px \"montserral\", \"sans-serif\";\n}\n.tituloP[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n}\n.tabla-contenedor[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow: auto;\n  position: relative;\n  width: 100%;\n  box-shadow: 0 6px 10px 0px rgba(39, 38, 49, 0.1) !important;\n  border-radius: 10px;\n}\n.clientelist[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow: auto;\n}\n.tablametodos[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tablametodos[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.tablametodos[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.tablametodos[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font: 12px \"monserrat\", \"sans-serif\";\n  color: rgba(0, 0, 0, 0.5411764706);\n  padding-right: 30px;\n}\n.tablametodos[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.tablametodos[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n}\n.tablametodos[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n}\n.botonconsulcua[_ngcontent-%COMP%] {\n  border: none;\n  width: 120px;\n  height: 40px;\n  border-radius: 10px;\n  font: 15px \"monserrat\", \"sans-serif\";\n  background: #5DE2E7;\n  color: #fff;\n}\n.botonconsulcua[_ngcontent-%COMP%]:active {\n  background: #5DB3E9;\n}\n  .inputdisabled > div > div {\n  background-color: #E7E5E4 !important; \n  color: #000 !important; \n  opacity: 1 !important; \n  cursor: not-allowed; \n  border-radius: 4px; \n}\n.totalescuadrespan[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: black;\n}\n.labelcuadre[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 15px;\n}\n.clasecuadrecajatotal[_ngcontent-%COMP%] {\n  font: 24px \"monserrat\", \"sans-serif\";\n  color: rgba(0, 0, 0, 0.8705882353);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1YWRyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDWjtFQUNDLGFBQUE7QUFDTDtBQUlBO0VBQ0kscUJBQUE7QUFGSjtBQU1BO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUhBO0FBTUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFISjtBQU1BO0VBQ0UsZ0NBQUEsRUFBQSw4QkFBQTtBQUhGO0FBTUE7RUFFRTtJQUNNLHlCQUFBO0VBSk47QUFDRjtBQU1BO0VBQ0ksMENBQUE7QUFKSjtBQU1BO0VBRUksaUJBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSx1QkFBQTtBQUxKO0FBU0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLG1CQUFBO0FBTko7QUFVQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUE7RUFDSSxXQUFBO0FBUEo7QUFVQTtFQUNHLGlCQUFBO0FBUEg7QUFVQTtFQUNFLHlCQUFBO0FBUEY7QUFTQTtFQUNJLDRDQUFBO0VBQ0MseUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFOTDtBQVVBO0VBQ0kscUNBQUE7QUFQSjtBQVVBO0VBQ0ksMENBQUE7QUFQSjtBQVNBO0VBQ0MsMkNBQUE7QUFORDtBQVNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0osV0FBQTtBQU5KO0FBU0E7RUFDUSxtQkFBQTtBQU5SO0FBVUE7RUFDRSxvQ0FBQSxFQUNVLG1CQUFBO0VBQ1Ysc0JBQUEsRUFBQSxvQkFBQTtFQUNBLHFCQUFBLEVBQUEsNkJBQUE7RUFDQSxtQkFBQSxFQUFBLGFBQUE7RUFDQSxrQkFBQSxFQUFBLGFBQUE7QUFSRjtBQVdBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFSQTtBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBUEo7QUFVQTtFQUNJLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQVBKIiwiZmlsZSI6ImN1YWRyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWZvcm0tY3hje1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXI+ZGl2PmRpdntcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4gICBcclxufVxyXG4ubGluZWF0b3RhbGVzOjpiZWZvcmV7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbmJvcmRlcjogMXB4IHNvbGlkICBncmF5O1xyXG5kaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuLmJvdG9udGFibGV7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleFxyXG47XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1jeGMgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMTk2ZjM7IC8qIG8gZWwgY29sb3IgcXVlIHTDuiBxdWllcmFzICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYyNHB4KSB7XHJcblxyXG4gIDo6bmctZGVlcCAgLm1hdC1mb3JtLWN4Y3tcclxuICAgICAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi50aXR1bG9zZWNjaW9ue1xyXG4gICAgZm9udDogYm9sZCAxNHB4ICdtb250c2VycmFsJywnc2Fucy1zZXJpZidcclxufVxyXG4udGl0dWxvUFxyXG4ge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udGFibGEtY29udGVuZWRvcntcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMHB4IHJnYmEoMzksIDM4LCA0OSwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi5jbGllbnRlbGlzdHtcclxuICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsYW1ldG9kb3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxhbWV0b2Rvcz50aGVhZD50cj50aHtcclxuICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi50YWJsYW1ldG9kb3Mge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuLnRhYmxhbWV0b2Rvcz50aGVhZD50cj50aHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpOyA7XHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7IFxyXG4gICAgIGZvbnQ6IDEycHggXCJtb25zZXJyYXRcIixcInNhbnMtc2VyaWZcIjtcclxuICAgICBjb2xvcjojMDAwMDAwOEE7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICBcclxufVxyXG5cclxuLnRhYmxhbWV0b2Rvcz50Ym9keT50cj50ZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7IFxyXG4gICAgIFxyXG59XHJcbi50YWJsYW1ldG9kb3M+dGhlYWQ+dHI+dGg6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItbGVmdDoxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgXHJcbn1cclxuLnRhYmxhbWV0b2Rvcz50aGVhZD50cj50aDpsYXN0LWNoaWxke1xyXG4gYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uYm90b25jb25zdWxjdWF7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGZvbnQ6IDE1cHggXCJtb25zZXJyYXRcIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzVERTJFNyA7XHJcbiAgICBjb2xvcjojZmZmXHJcbn1cclxuXHJcbi5ib3RvbmNvbnN1bGN1YTphY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZDojNURCM0U5O1xyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5pbnB1dGRpc2FibGVkID4gZGl2PiBkaXYgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNFN0U1RTRcclxuIWltcG9ydGFudDsgLyogY29sb3IgZGUgZm9uZG8gKi9cclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAgICAgICAgICAgICAgIC8qIGNvbG9yIGRlbCB0ZXh0byAqL1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDsgICAgICAgICAgICAgICAgLyogZXZpdGEgcXVlIHNlIHZlYSBhcGFnYWRvICovXHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgICAgICAgICAgICAgICAgICAvKiBvcGNpb25hbCAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgICAgICAgICAgICAgICAgICAgLyogb3BjaW9uYWwgKi9cclxufVxyXG5cclxuLnRvdGFsZXNjdWFkcmVzcGFue1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmNvbG9yOiBibGFjaztcclxufVxyXG4ubGFiZWxjdWFkcmV7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uY2xhc2VjdWFkcmVjYWphdG90YWx7XHJcbiAgICBmb250OiAyNHB4ICdtb25zZXJyYXQnLFwic2Fucy1zZXJpZlwiO1xyXG4gICAgY29sb3I6ICMwMDAwMDBERTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"]
});

/***/ }),

/***/ 59503:
/*!************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/inicial/inicial.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicialComponent": () => (/* binding */ InicialComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/serviciosdbs/serviciodb.service */ 60981);
/* harmony import */ var src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/socket/socket.service */ 38245);
/* harmony import */ var src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth/auth.service */ 74067);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 31208);













function InicialComponent_div_23_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "emoji_events");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "top-1": a0 }; };
function InicialComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "button", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InicialComponent_div_23_mat_icon_3_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 19)(5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, i_r2 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.descripcionProducto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r1.cantidadProducto, " unidades");
} }
class InicialComponent {
    // ****************
    constructor(socketservidbs, socketServices, serviauth, socketproduct, cdr) {
        this.socketservidbs = socketservidbs;
        this.socketServices = socketServices;
        this.serviauth = serviauth;
        this.socketproduct = socketproduct;
        this.cdr = cdr;
        this.id_cliente_store = '';
        this.loader = true;
        this.almacen = '';
        this.basedatosactual = '';
        this.nombrevendedor = '';
        this.identificacion = '';
        this.codigoVendedor = 0;
        this.cantidadProductosTop = 5;
        this.datoFacturasSemanaFtotal = [];
        this.topProductos = [];
        this.datoDocumentoSemanaCantidad = [];
        this.Almacenes = [];
        this.valorAlamcen = 'BODEGA';
        this.almacenSeleccionado = 'Todo';
        this.datoPedidosSemanaPtotal = [];
        this.datoPedidosSemanaPCantidad = [];
        this.topProductosMasPedidos = [];
        this.TPedidosVsTRecibosI = [];
        this.barChartLabelsPtotal = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']; // EJE X
        this.barChartLabelsPCantidad = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']; // EJE X
        this.barChartDataPtotal = {
            labels: this.barChartLabelsPtotal,
            datasets: [
                {
                    data: [],
                    label: 'Total $',
                    backgroundColor: '#9DD904'
                }
            ]
        }; // EJE Y
        this.barChartDataPCantidad = {
            labels: this.barChartLabelsPCantidad,
            datasets: [
                {
                    data: [],
                    label: 'Cantidad und',
                    borderColor: '#9DD904',
                    backgroundColor: '#9DD904'
                    /*fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#3f51b5'*/
                }
            ]
        }; // EJE Y
        this.barChartOptionsPtotal = {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: { display: true },
            }
        };
        this.barChartOptionsPCantidad = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true },
            }
        };
        this.barChartType = 'bar';
        this.barChartTypeLine = 'bar';
        this.chartTypeL = 'line';
        this.totalPedidosMes = 0;
        this.mesActualNombre = '';
        this.etiquetaCantidadTotalDocumento = 'Cantidad total pedidos';
        this.etiquetaGraficoUno = "Total pedidos de la semana x día";
        this.etiquetaGraficoTop = "Top 5 de productos mas pedidos";
        this.etiquetaGraficoTres = "Cantidad pedidos semana x día";
        this.totalFacturasMes = 0;
        this.totalCantidadDocumentos = 0;
        // grafico linea
        this.labels = this.TPedidosVsTRecibosI.map(d => `Semana ${d.semana}`);
        this.pedidosData = this.TPedidosVsTRecibosI.map(d => d.totalPedidosSemana);
        this.ingresosData = this.TPedidosVsTRecibosI.map(d => d.totalRecibosSemana);
        this.lineChartData = {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [
                {
                    data: this.pedidosData,
                    label: 'Total Pedidos',
                    fill: false,
                    tension: 0.3,
                    borderColor: '#5DB5F2',
                    backgroundColor: '#5DB5F2',
                    pointBackgroundColor: '#5DB5F2',
                    pointBorderColor: '#5DB5F2',
                },
                {
                    data: this.ingresosData,
                    label: 'Total Recaudo',
                    fill: false,
                    tension: 0.3,
                    borderColor: '#9dD904',
                    backgroundColor: '#9dD904',
                    pointBackgroundColor: '#9dD904',
                    pointBorderColor: '#9dD904',
                }
            ]
        };
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
            },
            scales: {
                x: {},
                y: {
                    beginAtZero: true
                }
            }
        };
    }
    getColorByIndex(index) {
        switch (index) {
            case 0: return 'warn'; // Más destacado
            case 1: return 'accent';
            case 2: return 'primary';
            default: return undefined; // Usa color por defecto de Angular Material
        }
    }
    ngOnInit() {
        const meses = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        const fechaHoy = new Date();
        this.mesActualNombre = `${meses[fechaHoy.getMonth()]} ${fechaHoy.getFullYear()}`;
        this.serviauth.mode.value = 'side';
        this.seleccionardb();
    }
    seleccionardb() {
        this.socketservidbs.tienesedeselccionada().subscribe((datos) => {
            if (datos.response) {
                this.loader = true;
                //take para obtener un unico valor del observable y no mantener la suscribcion activa
                this.iniciarprograma();
                this.socketproduct
                    .obteneralmacen()
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
                    .subscribe((datos) => {
                    this.almacen = datos.almacen;
                    this.configuracion = datos.config;
                    this.identificacion = datos.identificacion;
                    this.nombrevendedor = datos.nombre;
                    if (datos.facturarPedidos == 1) {
                        this.cargarAlmacenes();
                        this.cargarGraficos(this.almacenSeleccionado);
                    }
                    else {
                        this.etiquetaGraficoUno = "Total pedidos de la semana x día";
                        this.cargarDatosTotalPedidosPorSemana(datos.codigoVendedor);
                        this.cargarDatosCantidadPedidosPorSemana(datos.codigoVendedor);
                        this.cargarTopProductosMasPedidos(datos.codigoVendedor, this.cantidadProductosTop);
                        this.cargarTotalPedidosMesVendedor(datos.codigoVendedor);
                        this.cargarTotalPedidosVsTRecibosIMes(datos.codigoVendedor);
                    }
                });
            }
            else {
            }
        });
    }
    iniciarprograma() {
        if (!localStorage.getItem('pedido') ||
            localStorage.getItem('pedido') === null) {
            this.loader = false;
            this.respuestacliente();
        }
        else {
            this.loader = false;
            /*this.productosMostrar = JSON.parse(
              localStorage.getItem('pedido') || '{nombre:""}'
            );
      
            let itemsPedidos = this.productosMostrar.map((producto) => {
              this.totalPagar += producto.total;
            });*/
            this.respuestacliente();
        }
    }
    respuestacliente() {
        this.socketServices.buscarclientes().subscribe((datos) => {
            if (datos.datos && datos.datos.razonSocial) {
                this.id_cliente_store = datos.datos._id;
            }
            this.loader = false;
        });
    }
    cargarDatosTotalPedidosPorSemana(codigoVendedor) {
        this.socketproduct.cargarPedidosSemana(codigoVendedor).subscribe((data) => {
            if (!data.response) {
                //window.location.reload();
            }
            else {
                data.pedidosSemana.forEach((datos) => {
                    this.datoPedidosSemanaPtotal.push(datos.total_Pedidos_Dia);
                });
                this.barChartDataPtotal.datasets[0].data = this.datoPedidosSemanaPtotal;
                this.barChartDataPtotal = { ...this.barChartDataPtotal };
                this.cdr.detectChanges();
            }
        });
    }
    cargarDatosCantidadPedidosPorSemana(codigoVendedor) {
        this.socketproduct.cargarPedidosSemana(codigoVendedor).subscribe((data) => {
            if (!data.response) {
                //window.location.reload();
            }
            else {
                data.pedidosSemana.forEach((datos) => {
                    this.datoPedidosSemanaPCantidad.push(datos.cantidad_pedidos);
                });
                this.barChartDataPCantidad.datasets[0].data = this.datoPedidosSemanaPCantidad;
                this.barChartDataPCantidad = { ...this.barChartDataPCantidad };
                this.cdr.detectChanges();
            }
        });
    }
    cargarTopProductosMasPedidos(codigoVendedor, top) {
        //topProductosMasPedidos
        this.socketproduct.cargarTopProductosSemana(codigoVendedor, top).subscribe((data) => {
            if (!data.response) {
            }
            else {
                data.TopProductosSemana.forEach((datos, i) => {
                    this.topProductos.push({
                        indice: i,
                        descripcionProducto: datos.descripcion_producto,
                        cantidadProducto: datos.total_pedida
                    });
                });
            }
        });
    }
    cargarTotalPedidosMesVendedor(codigoVendedor) {
        this.socketproduct.cargarTotalPedidosMesVendedor(codigoVendedor).subscribe((data) => {
            if (!data.response) {
            }
            else {
                this.totalPedidosMes = data.cantidadTotalPedidosMes[0].total_pedidos_mes;
                this.totalCantidadDocumentos = this.totalPedidosMes;
            }
        });
    }
    cargarTotalPedidosVsTRecibosIMes(codigoVendedor) {
        this.socketproduct.cargarTotalPedidosVsTRecibosIMes(codigoVendedor).subscribe((data) => {
            // Limpiar antes de volver a llenar (evita duplicados si se recarga)
            this.TPedidosVsTRecibosI = [];
            if (data.response) {
                data.tPedidosVsTRecibosISemas.forEach((datos) => {
                    this.TPedidosVsTRecibosI.push({
                        semana: datos.semana,
                        totalPedidosSemana: datos.totalPedidosSemana,
                        totalRecibosSemana: datos.totalRecibosSemana,
                    });
                });
                // ✅ Actualizar el gráfico aquí mismo
                const labels = this.TPedidosVsTRecibosI.map(d => `Semana ${d.semana}`);
                const pedidosData = this.TPedidosVsTRecibosI.map(d => d.totalPedidosSemana);
                const ingresosData = this.TPedidosVsTRecibosI.map(d => d.totalRecibosSemana);
                this.lineChartData = {
                    labels,
                    datasets: [
                        {
                            data: pedidosData,
                            label: 'Total Pedidos',
                            fill: false,
                            tension: 0.3,
                            borderColor: '#2e86de',
                            backgroundColor: '#2e86de',
                            pointBackgroundColor: '#2e86de',
                            pointBorderColor: '#2e86de',
                        },
                        {
                            data: ingresosData,
                            label: 'Total Recaudo',
                            fill: false,
                            tension: 0.3,
                            borderColor: '#27ae60',
                            backgroundColor: '#27ae60',
                            pointBackgroundColor: '#27ae60',
                            pointBorderColor: '#27ae60',
                        }
                    ]
                };
            }
        });
    }
    // Datos facturas en graficos
    cargarGraficos(almacenSelect) {
        console.log(this.almacenSeleccionado);
        this.cargarTotalFacturas(almacenSelect);
        this.etiquetaGraficoUno = "Total facturas de la semana x día";
        this.cargarDatosTotalFacturasPorSemana(almacenSelect);
        this.etiquetaGraficoTop = "Top 5 de productos mas facturados";
        this.cargarTopProductosMasFacturados(almacenSelect, this.cantidadProductosTop);
        this.etiquetaGraficoTres = "Cantidad facturas semana x día";
        this.cargarDatosCantidadFacturasPorSemana(almacenSelect);
    }
    cargarTotalFacturas(almacenSelect) {
        this.etiquetaCantidadTotalDocumento = 'Cantidad total facturas';
        this.socketproduct.cargarTotalFacturasMes(almacenSelect).subscribe((data) => {
            if (!data.response) {
            }
            else {
                this.totalFacturasMes = data.cantidadTotalFacturasMes[0].total_facturas_mes;
                this.totalCantidadDocumentos = this.totalFacturasMes;
            }
        });
    }
    cargarDatosTotalFacturasPorSemana(almacenSelect) {
        this.socketproduct.cargarFacturasSemana(almacenSelect).subscribe((data) => {
            if (!data.response) {
                window.location.reload();
            }
            else {
                data.facturasSemana.forEach((datos) => {
                    this.datoFacturasSemanaFtotal.push(datos.total_Facturas_Dia);
                });
                this.barChartDataPtotal.datasets[0].data = this.datoFacturasSemanaFtotal;
                this.barChartDataPtotal = { ...this.barChartDataPtotal };
                this.cdr.detectChanges();
            }
        });
    }
    cargarTopProductosMasFacturados(almacenSelect, top) {
        //topProductosMasPedidos
        this.socketproduct.cargarTopProductosFacturadosSemana(almacenSelect, top).subscribe((data) => {
            if (!data.response) {
            }
            else {
                data.TopProductosSemana.forEach((datos, i) => {
                    this.topProductos.push({
                        indice: i,
                        descripcionProducto: datos.descripcion_producto,
                        cantidadProducto: datos.total_facturada
                    });
                });
            }
        });
    }
    cargarDatosCantidadFacturasPorSemana(almacenSelect) {
        this.socketproduct.cargarFacturasDeLaSemana().subscribe((data) => {
            if (!data.response) {
                //window.location.reload();
            }
            else {
                data.facturasSemana.forEach((datos) => {
                    this.datoDocumentoSemanaCantidad.push(datos.cantidad_facturas);
                });
                this.barChartDataPCantidad.datasets[0].data = this.datoDocumentoSemanaCantidad;
                this.barChartDataPCantidad = { ...this.barChartDataPCantidad };
                this.cdr.detectChanges();
            }
        });
    }
    cargarAlmacenes() {
        this.socketproduct.cargarAlmacenes().subscribe((data) => {
            if (!data.response) {
                //window.location.reload();
            }
            else {
                data.almacenes.forEach((datos) => {
                    this.Almacenes.push(datos.almacen);
                });
            }
        });
    }
    seleccionarItemAlmacen(item) {
        this.almacenSeleccionado = 'Todo';
        console.log(this.almacenSeleccionado);
        //this.cargarGraficos(this.almacenSeleccionado);
    }
}
InicialComponent.ɵfac = function InicialComponent_Factory(t) { return new (t || InicialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_0__.serviciodb), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
InicialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InicialComponent, selectors: [["app-inicial"]], decls: 40, vars: 24, consts: [[1, "loader", "loader-fixed", 3, "diameter", "strokeWidth"], [1, "loader", "loader-text", "mat-text-primary", 2, "position", "fixed !important"], [1, "total-pedidos-card"], [1, "total-label"], [1, "total-valor"], [1, "Contenedor", 2, "height", "100% !important"], [1, "card-row"], [1, "inicial-card"], [2, "max-height", "365px", "min-height", "365px"], ["baseChart", "", 3, "data", "options", "type"], [2, "max-height", "365px", "height", "100%"], ["class", "producto-button", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", 2, "max-height", "365px", "min-height", "365px"], [2, "text-align", "center", "font-weight", "bold", "margin-bottom", "10px"], [1, "flex-grow-1", 2, "display", "block"], [1, "producto-button", 3, "ngClass"], ["mat-raised-button", "", 1, "producto-btn"], [1, "producto-content"], ["class", "trofeo-icon", 4, "ngIf"], [1, "texto-producto"], [1, "producto-nombre"], [1, "producto-cantidad"], [1, "trofeo-icon"]], template: function InicialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Espere...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "mat-card", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "mat-card", 7)(13, "mat-card-header")(14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-card", 7)(19, "mat-card-header")(20, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, InicialComponent_div_23_Template, 9, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 6)(25, "mat-card", 7)(26, "mat-card-header")(27, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-card", 7)(32, "mat-card-header")(33, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Total Pedidos Vs Total Recaudo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-card-content", 12)(36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("shown", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 50)("strokeWidth", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("shown", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.etiquetaCantidadTotalDocumento);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 22, ctx.totalCantidadDocumentos));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.etiquetaGraficoUno);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.barChartDataPtotal)("options", ctx.barChartOptionsPtotal)("type", ctx.barChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.etiquetaGraficoTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.topProductos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.etiquetaGraficoTres, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.barChartDataPCantidad)("options", ctx.barChartOptionsPCantidad)("type", ctx.barChartTypeLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Datos correspondientes a: ", ctx.mesActualNombre, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.lineChartData)("options", ctx.lineChartOptions)("type", ctx.chartTypeL);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: ["@charset \"UTF-8\";\n.tituloP[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n  margin-top: 20px;\n}\n.Contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n}\n.card-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.inicial-card[_ngcontent-%COMP%] {\n  flex: 1 1 40%;\n  min-width: 300px;\n}\n.producto-button[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  width: 100%;\n}\n.producto-button[_ngcontent-%COMP%]   .producto-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 25px;\n  text-align: left;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  font-size: 16px;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background-color: #5DB5F2; \n  color: #fff;\n}\n\n.producto-button[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.producto-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: start;\n  padding: 4px 8px;\n  text-align: left;\n  min-height: 16px;\n}\n.top-1[_ngcontent-%COMP%]   .producto-btn[_ngcontent-%COMP%] {\n  background-color: #FEA11B;\n}\n.producto-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.producto2-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  flex-wrap: wrap;\n  max-height: 30px;\n}\n.trofeo-icon[_ngcontent-%COMP%] {\n  color: #d4ac0d;\n  font-size: 24px;\n}\n.texto-producto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.producto-nombre[_ngcontent-%COMP%] {\n  font-weight: 500;\n  word-break: break-word;\n  white-space: normal;\n  line-height: 1.5;\n}\n.producto-cantidad[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2c3e50; \n  font-weight: 500;\n  white-space: nowrap;\n  line-height: 2;\n}\n.total-pedidos-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  border-radius: 8px;\n  background-color: #f4f6f7;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #5d6d7e;\n  margin-bottom: 8px;\n}\n.almacenlabel[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.total-valor[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  color: #2e86de;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUVGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUEsRUFBQSxzQ0FBQTtFQUNBLFdBQUE7QUFDRjtBQUVBLDZDQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQSxFQUFBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGNBQUE7QUFERjtBQUtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQU1BO0VBQ0UsZ0NBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhGIiwiZmlsZSI6ImluaWNpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvUHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5Db250ZW5lZG9ye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtcm93e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMjBweDtcclxuICAvL2hlaWdodDogMjAlO1xyXG59XHJcblxyXG4uaW5pY2lhbC1jYXJke1xyXG4gIGZsZXg6IDEgMSBjYWxjKDUwJSAtIDEwJSk7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnByb2R1Y3RvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2R1Y3RvLWJ1dHRvbiAucHJvZHVjdG8tYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNHB4IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1REI1RjI7IC8qIGNvbG9yIHBvciBkZWZlY3RvLCBwdWVkZXMgYWp1c3RhciAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiDwn46WIEVzdGlsbyBlc3BlY2lhbCBwYXJhIGVsIFBSSU1FUiBwdWVzdG8gKi9cclxuLnByb2R1Y3RvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdG8tYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgLy9wYWRkaW5nOiA4cHggMTJweDtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWluLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLnRvcC0xIC5wcm9kdWN0by1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUExMUI7XHJcbn1cclxuXHJcbi5wcm9kdWN0by1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByb2R1Y3RvMi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udHJvZmVvLWljb24ge1xyXG4gIGNvbG9yOiAjZDRhYzBkO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnRleHRvLXByb2R1Y3RvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0by1ub21icmUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5wcm9kdWN0by1jYW50aWRhZCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMmMzZTUwOyAvKiBNw6FzIG9zY3VybyB5IGxlZ2libGUgKi9cclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIFxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbGluZS1oZWlnaHQ6MlxyXG59XHJcblxyXG4vLyByZWNvcmQgcGVkaWRvc1xyXG4udG90YWwtcGVkaWRvcy1jYXJkIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmNztcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50b3RhbC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM1ZDZkN2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIFxyXG59XHJcblxyXG4uYWxtYWNlbmxhYmVse1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG90YWwtdmFsb3Ige1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMmU4NmRlO1xyXG59Il19 */"] });


/***/ }),

/***/ 34383:
/*!********************************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/inventario-fisico/inventario-fisico.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventarioFisicoComponent": () => (/* binding */ InventarioFisicoComponent)
/* harmony export */ });
/* harmony import */ var C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/angular-material/alerta */ 63060);
/* harmony import */ var src_app_angular_material_alertaritemsinventario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/angular-material/alertaritemsinventario */ 29405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/socket/socket.service */ 38245);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/facturaservice/facturaservice.service */ 53358);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
























const _c0 = ["descripcion"];

function InventarioFisicoComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function InventarioFisicoComponent_mat_option_21_Template_mat_option_keyup_enter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const option_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.elegirCantidad(option_r20));
    })("click", function InventarioFisicoComponent_mat_option_21_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const option_r20 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.elegirCantidad(option_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r20.descripcion, " ");
  }
}

function InventarioFisicoComponent_mat_card_subtitle_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card-subtitle", 48)(1, "div", 49)(2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r7.productoActual.codigoContable, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r7.productoActual.referencia, " ");
  }
}

function InventarioFisicoComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InventarioFisicoComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r25 + 1, " ");
  }
}

function InventarioFisicoComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "CodigoContable");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InventarioFisicoComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r26.codigoContable, " ");
  }
}

function InventarioFisicoComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InventarioFisicoComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r27.descripcion);
  }
}

function InventarioFisicoComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InventarioFisicoComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r28.cantidad, " ");
  }
}

function InventarioFisicoComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InventarioFisicoComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r29.ubicacion, " ");
  }
}

function InventarioFisicoComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 53);
  }
}

function InventarioFisicoComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 54);
  }
}

class InventarioFisicoComponent {
  constructor(socketServices, socketproduct, socketfacturaservi, dialog) {
    this.socketServices = socketServices;
    this.socketproduct = socketproduct;
    this.socketfacturaservi = socketfacturaservi;
    this.dialog = dialog;
    this.Productos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
    this.productinico = [];
    this.productosMostrar = [];
    this.buscarDescripcion = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormControl('');
    this.loader = true;
    this.opcionesFiltradas = [];
    this.productoActual = {
      numero: 0,
      id: '_vacio',
      descripcion: 'Seleccione producto',
      codigo: '000',
      codigoContable: '000',
      referencia: '000',
      codigobarra: '0000',
      cantidad: 0,
      precio: 0,
      total: 0,
      producto: {},
      tasaiva: '',
      presentacion: '',
      cantidaddisponible: 0,
      ubicacion: ''
    };
    this.cantidadproducto = '';
    this.cantidadactual = 0;
    this.cantidad = 0;
    this.precio = 0;
    this.codigo = '';
    this.referencia = '';
    this.productos = [];
    this.ubicacion = '';
    this.displayedColumns = ['codigo', 'codigoContable', 'descripcion', 'cantidad', 'ubicacion'];
    this.cantidadTotalRegistros = 0;
    this.cantidadTotalUnidadesContadas = 0;
    this.codigoitemseled = 0;
  }

  ngOnInit() {}

  displayFn(_prod) {
    return _prod && _prod.descripcion ? _prod.descripcion : '';
  }

  repuestaproductos(condicion = '', datoCondicion, buscartodo = false) {
    var _this = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this.socketServices.escucha = _this.socketproduct.obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion,
          consulta: 'productos',
          datoCondicion,
          sede: localStorage.getItem('sede')
        }); //this.socketServices.consultarTercero(this.sedeSeleccionada.po.canalsocket, '', '', this.sedeSeleccionada.usuario.usuario);

        _this.socketServices.escucha.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (info) {
            _this.loader = false; //this.totalPagar = 0;

            _this.productosMostrar.forEach(producto => {//this.totalPagar += producto.total;
            });

            info = JSON.parse(info);

            switch (info.tipoConsulta) {
              case 'PRODUCTO':
                if (info.estadoPeticion === 'SUCCESS') {
                  _this.procesarproductos(info, true, buscartodo);

                  resolve();
                } else {}

                break;

              case 'TERCERO':
                if (info.estadoPeticion === 'SUCCESS') {}

                break;

              case 'PEDIDO':
                if (info.estadoPeticion === 'SUCCESS') {}

                break;

              default:
                break;
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    })();
  }

  buscarProductos(key, campo) {
    var _this2 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.repuestaproductos('DESCRIPCION', _this2.buscarDescripcion.value, true);
    })();
  }

  elegirCantidad(_prod) {
    if (typeof _prod == 'object') {
      if (this.buscarDescripcion.value) {
        //this.shoping_card1 = true;
        this.productoActual = {
          numero: null,
          ..._prod
        }; //this.precio = this.productoActual.precio;

        document.getElementById('p_actual')?.classList.add('active');
        this.cantidad = 1;
        this.codigo = this.productoActual.codigo;
        this.referencia = this.productoActual.referencia;
        this.cantidadactual = this.productoActual['producto'][this.cantidadproducto];
        document.getElementById('cantidad')?.focus();
      } else if (this.productos.length > 0) {
        this.productoActual = this.productos[0]; //this.precio = this.productoActual.precio;

        document.getElementById('p_actual')?.classList.add('active');
        this.cantidad = 1;
        document.getElementById('cantidad')?.focus();
      } else {//this.inCodigo.nativeElem<ent.focus();
      }
    }
  }

  adicionarItem(item, cantidadItem, ubicacionItem) {
    var _this3 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.productoActual.cantidad = cantidadItem;
      _this3.productoActual.ubicacion = ubicacionItem;

      _this3.socketfacturaservi.insertaritemsinventario(_this3.productoActual).subscribe(data => {
        if (data.response) {
          _this3.Productos.data.push(_this3.productoActual);

          _this3.Productos.data = [..._this3.Productos.data];
          _this3.opcionesFiltradas = [];

          _this3.buscarDescripcion.setValue('');

          _this3.cantidad = 0;
          _this3.cantidadTotalRegistros = _this3.Productos.data.length;
          _this3.cantidadTotalUnidadesContadas = _this3.Productos.data.reduce((sum, data) => sum + data.cantidad, 0);
        }
      });
    })();
  }

  procesarproductos(info, estado, buscartodo) {
    if (estado) {
      this.productos = info.mensajePeticion.map(producto => {
        return {
          id: producto.codigo,
          descripcion: producto.descripcion,
          codigo: producto.codigo,
          codigoContable: producto.codigocontable,
          referencia: producto.referencia,
          precio: producto.precio,
          codigobarra: producto.codigoBarra,
          total: 0,
          producto: producto,
          tasaiva: producto.tasaIva,
          presentacion: producto.presentacion,
          cantidaddisponible: producto.cantidad
        };
      });
      this.productinico = this.productos;
      this.opcionesFiltradas = this.productos;

      if (buscartodo === true) {
        this.abrirpanel();
      }
    } else {
      const data = {
        titulo: 'ERROR',
        mensaje: 'No se encontraron productos',
        boton: 'OK',
        tipo: 'error',
        input: false
      }; //this.openDialogAlerta(data);

      this.loader = false;
    }

    this.loader = false;
  }

  consultarinventario() {
    this.dialog.open(src_app_angular_material_alertaritemsinventario__WEBPACK_IMPORTED_MODULE_2__.Itemsinventario, {
      width: '100%',
      height: '100vw',
      maxHeight: '90vh'
    });
  }

  abrirpanel() {
    if (this.opcionesFiltradas.length > 0) {
      this.codigoitemseled = 0;
      this.inDescripcion.openPanel();
    }
  }

}

InventarioFisicoComponent.ɵfac = function InventarioFisicoComponent_Factory(t) {
  return new (t || InventarioFisicoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_4__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_5__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};

InventarioFisicoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: InventarioFisicoComponent,
  selectors: [["app-inventario-fisico"]],
  viewQuery: function InventarioFisicoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.inDescripcion = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.descripcion = _t.first);
    }
  },
  decls: 77,
  vars: 14,
  consts: [[1, "tituloP", 2, "margin-top", "15px"], [1, "row", "loader-content", 2, "padding-top", "20px"], [1, "buscaProducto", 2, "height", "100% !important", "width", "70%"], [1, "search-card", 2, "max-width", "100%", "max-height", "fit-content"], [1, "search"], [1, "m-0"], [1, "row", "col-12", 2, "width", "calc(100% - 64px)"], [1, "col-6", "col-log-6", "col-sm-12", "col-md-5"], ["appearance", "fill", "search", ""], ["matInput", "", "placeholder", "", "id", "descripcion", 3, "formControl", "matAutocomplete", "keyup"], ["trigger", "matAutocompleteTrigger", "descripcion", ""], [1, "mi-autocomplete-panel", 3, "displayWith"], ["auto", "matAutocomplete"], [2, "height", "246px", 3, "items"], ["scroll_prods", ""], ["class", "desplegable", 3, "value", "keyup.enter", "click", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-12", "col-md-6", "col-lg-6"], [2, "font-size", "1rem"], ["matInput", "", "placeholder", "", "name", "inputUbicacion", "id", "ubicacion", "type", "string", "onfocus", "this.select()", 3, "ngModel", "ngModelChange"], ["inUbicacion", ""], ["matInput", "", "placeholder", "", "name", "inputCantidad", "id", "cantidad", "type", "number", "onfocus", "this.select()", 3, "ngModel", "ngModelChange"], ["inCantidad", ""], [1, "col-6", "col-log-6", "col-sm-12", "col-md-12", 2, "display", "flex", "justify-content", "space-between"], ["mat-fab", "", "color", "primary", 3, "click"], ["src", "../../../../../assets/images/imegenlupa.svg", "alt", ""], [1, "b-primary", "icon-card", 2, "height", "100px"], [2, "border", "none !important"], [1, "client-name"], [1, "separator"], ["class", "client-info", 4, "ngIf"], [1, "tabla-scroll", 2, "width", "100%", "margin-top", "10px"], [2, "overflow-x", "auto"], ["mat-table", "", 1, "mat-elevation-z8", "col-12", "tab-factura", 3, "dataSource"], ["matColumnDef", "codigo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigoContable"], ["matColumnDef", "descripcion"], ["matColumnDef", "cantidad"], ["matColumnDef", "ubicacion"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "totales"], [1, "cantidadTotalRegistros"], [1, "total-label"], [1, "total-valor"], [1, "cantidadTotalConteo"], [1, "desplegable", 3, "value", "keyup.enter", "click"], [1, "client-info"], [1, "row"], [1, "col-6", "p-0", "elipsis"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function InventarioFisicoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "mat-card-title", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Inventario f\u00EDsico");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "mat-card", 3)(6, "mat-card-header", 4)(7, "mat-card-title", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "mat-form-field", 8)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Filtro");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function InventarioFisicoComponent_Template_input_keyup_14_listener($event) {
        return ctx.buscarProductos($event, "descripcion");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-autocomplete", 11, 12)(19, "virtual-scroller", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, InventarioFisicoComponent_mat_option_21_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 16)(23, "mat-form-field", 8)(24, "mat-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Ubicacion");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InventarioFisicoComponent_Template_input_ngModelChange_26_listener($event) {
        return ctx.ubicacion = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 16)(29, "mat-form-field", 8)(30, "mat-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InventarioFisicoComponent_Template_input_ngModelChange_32_listener($event) {
        return ctx.cantidad = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 22)(35, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InventarioFisicoComponent_Template_button_click_35_listener() {
        return ctx.adicionarItem(ctx.productoActual, ctx.cantidad, ctx.ubicacion);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InventarioFisicoComponent_Template_button_click_38_listener() {
        return ctx.consultarinventario();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-card", 25)(41, "mat-card-header", 26)(42, "mat-card-title", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, InventarioFisicoComponent_mat_card_subtitle_45_Template, 6, 2, "mat-card-subtitle", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 30)(47, "div", 31)(48, "table", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](49, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, InventarioFisicoComponent_th_50_Template, 2, 0, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, InventarioFisicoComponent_td_51_Template, 2, 1, "td", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](52, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, InventarioFisicoComponent_th_53_Template, 2, 0, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, InventarioFisicoComponent_td_54_Template, 2, 1, "td", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](55, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, InventarioFisicoComponent_th_56_Template, 2, 0, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, InventarioFisicoComponent_td_57_Template, 2, 1, "td", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](58, 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, InventarioFisicoComponent_th_59_Template, 2, 0, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, InventarioFisicoComponent_td_60_Template, 2, 1, "td", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](61, 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, InventarioFisicoComponent_th_62_Template, 2, 0, "th", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, InventarioFisicoComponent_td_63_Template, 2, 1, "td", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, InventarioFisicoComponent_tr_64_Template, 1, 0, "tr", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, InventarioFisicoComponent_tr_65_Template, 1, 0, "tr", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 42)(67, "mat-card", 43)(68, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Cantidad total registros");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "mat-card", 46)(73, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Cantidad total conteo");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](18);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.buscarDescripcion)("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayWith", ctx.displayFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.opcionesFiltradas);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _r3.viewPortItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.ubicacion);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.cantidad);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.productoActual.descripcion);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.productoActual.id !== "_vacio");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.Productos.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.cantidadTotalRegistros);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.cantidadTotalUnidadesContadas);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardSubtitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__.VirtualScrollerComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow],
  styles: [".tituloP[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n}\n\n.buscaProducto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  height: 100%;\n  overflow-x: hidden;\n}\n\n.buscaProducto[_ngcontent-%COMP%]:nth-child(1) {\n  flex: 0 0 100%;\n  align-items: center;\n}\n\n.totales[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.cantidadTotalRegistros[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  border-radius: 8px;\n  background-color: #f4f6f7;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.cantidadTotalConteo[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  border-radius: 8px;\n  background-color: #f4f6f7;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.total-label[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #5d6d7e;\n  margin-bottom: 8px;\n}\n\n.total-valor[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  color: #2e86de;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudGFyaW8tZmlzaWNvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGIiwiZmlsZSI6ImludmVudGFyaW8tZmlzaWNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsb1B7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnVzY2FQcm9kdWN0byB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uYnVzY2FQcm9kdWN0bzpudGgtY2hpbGQoMSl7XHJcbiAgZmxleDogMCAwIDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG5cclxuLnRvdGFsZXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYW50aWRhZFRvdGFsUmVnaXN0cm9zIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmNztcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYW50aWRhZFRvdGFsQ29udGVvIHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmNztcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50b3RhbC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM1ZDZkN2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4udG90YWwtdmFsb3Ige1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMmU4NmRlO1xyXG59Il19 */"]
});

/***/ }),

/***/ 434:
/*!******************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/inventario/inventario.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventarioComponent": () => (/* binding */ InventarioComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);











function InventarioComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r5.almacen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.alias);
} }
function InventarioComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r6.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.nombre);
} }
function InventarioComponent_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r7.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.nombre);
} }
function InventarioComponent_table_50_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "REFERENCIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_50_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r26.referencia);
} }
function InventarioComponent_table_50_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DESCRIPCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_50_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r27.descripcion);
} }
function InventarioComponent_table_50_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "COSTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_50_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", element_r28.costo.toLocaleString("de-DE"), "");
} }
function InventarioComponent_table_50_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PRECIO1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_50_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", element_r29.precio1.toLocaleString("de-DE"), "");
} }
function InventarioComponent_table_50_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PRECIO2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_50_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", element_r30.precio2.toLocaleString("de-DE"), "");
} }
function InventarioComponent_table_50_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PRECIO3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_50_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", element_r31.precio3.toLocaleString("de-DE"), "");
} }
function InventarioComponent_table_50_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CANTIDAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_50_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r32.cantidad);
} }
function InventarioComponent_table_50_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "TOTAL PRODUCTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_50_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", element_r33.cantidadtotal.toLocaleString("de-DE"), " ");
} }
function InventarioComponent_table_50_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 52);
} }
function InventarioComponent_table_50_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 53);
} }
function InventarioComponent_table_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InventarioComponent_table_50_th_2_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InventarioComponent_table_50_td_3_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, InventarioComponent_table_50_th_5_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InventarioComponent_table_50_td_6_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InventarioComponent_table_50_th_8_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InventarioComponent_table_50_td_9_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InventarioComponent_table_50_th_11_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, InventarioComponent_table_50_td_12_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, InventarioComponent_table_50_th_14_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, InventarioComponent_table_50_td_15_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, InventarioComponent_table_50_th_17_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, InventarioComponent_table_50_td_18_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, InventarioComponent_table_50_th_20_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, InventarioComponent_table_50_td_21_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, InventarioComponent_table_50_th_23_Template, 2, 0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, InventarioComponent_table_50_td_24_Template, 3, 1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, InventarioComponent_table_50_tr_25_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, InventarioComponent_table_50_tr_26_Template, 1, 0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r3.productos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
} }
function InventarioComponent_table_51_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Referencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_51_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r53.referencia);
} }
function InventarioComponent_table_51_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_51_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r54.descripcion);
} }
function InventarioComponent_table_51_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_51_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", element_r55.costo.toLocaleString("de-DE"), "");
} }
function InventarioComponent_table_51_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Precio1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_51_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", element_r56.precio1.toLocaleString("de-DE"), "");
} }
function InventarioComponent_table_51_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Precio2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_51_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", element_r57.precio2.toLocaleString("de-DE"), "");
} }
function InventarioComponent_table_51_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Precio3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_51_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", element_r58.precio3.toLocaleString("de-DE"), "");
} }
function InventarioComponent_table_51_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_51_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r59.Cantidad);
} }
function InventarioComponent_table_51_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InventarioComponent_table_51_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", element_r60.cantidadtotal.toLocaleString("de-DE"), " ");
} }
function InventarioComponent_table_51_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 52);
} }
function InventarioComponent_table_51_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 53);
} }
function InventarioComponent_table_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InventarioComponent_table_51_th_2_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InventarioComponent_table_51_td_3_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, InventarioComponent_table_51_th_5_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InventarioComponent_table_51_td_6_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InventarioComponent_table_51_th_8_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InventarioComponent_table_51_td_9_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InventarioComponent_table_51_th_11_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, InventarioComponent_table_51_td_12_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, InventarioComponent_table_51_th_14_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, InventarioComponent_table_51_td_15_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, InventarioComponent_table_51_th_17_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, InventarioComponent_table_51_td_18_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, InventarioComponent_table_51_th_20_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, InventarioComponent_table_51_td_21_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, InventarioComponent_table_51_th_23_Template, 2, 0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, InventarioComponent_table_51_td_24_Template, 3, 1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, InventarioComponent_table_51_tr_25_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, InventarioComponent_table_51_tr_26_Template, 1, 0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r4.productos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns2);
} }
class InventarioComponent {
    constructor(socketproduct, cdr) {
        this.socketproduct = socketproduct;
        this.cdr = cdr;
        this.bodegas = [];
        this.cargando = false;
        this.totalpositivo = 0;
        this.linea = "0";
        this.grupo = "0";
        this.grupos = [];
        this.lineas = [];
        this.productchange = "";
        this.totalglobal = 0;
        this.totalnegativo = 0;
        this.bodegaSeleccionada = '';
        this.displayedColumns = [
            'referencia',
            'descripcion',
            'cantidad',
            'costo',
            'precio1',
            'precio2',
            'precio3',
            'totalproducto',
        ];
        this.displayedColumns2 = [
            'referencia',
            'descripcion',
            'cantidad',
            'costo',
            'precio1',
            'precio2',
            'precio3',
            'totalproducto'
        ];
        this.productos = [];
        this.nregistros = 0;
        this.clienteSeleccionado = {
            nombre: 'Seleccione un cliente',
            identificacion: '',
            email: '',
            celulares: '',
            direccion: '',
            telefonoFijo: '',
            codigo: 0,
            imagen: null,
            ciudad: '',
        };
        this.pagina = 1;
        this.cliente = "";
        this.obtenertodo = false;
        if (this.cargando)
            return;
        this.cargando = true;
        this.socketproduct
            .obtenerInfo('aws', 'pazzioli-pos-3', {
            metodo: 'CONSULTAR',
            condicion: 'bodega',
            consulta: 'PRODUCTOS',
            canalserver: 'aws',
            datoCondicion: '',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
            .subscribe((dato) => {
            console.log("BODEAS ACTULES", JSON.parse(dato).mensajePeticion);
            this.bodegas = [...JSON.parse(dato).mensajePeticion];
            /*para  tenerlo en cuenta un socket con el mismo request si se ponen en varios metodos y se
            jecuta en uno se puede ejecutar en otro metodo que lo aplica a la ves indirectamente
            
            corrección
            La verdad técnica (sin vueltas)
   Un socket NO se ejecuta solo en otro método
   LO QUE SE EJECUTA son otros MÉTODOS por eventos distintos, y cada uno vuelve a llamar al mismo socket
   Si tienes el mismo request de socket en varios métodos
   
   y el usuario (o Angular) dispara varios eventos
   
   cada método hace su propia llamada
   
   y las respuestas pueden llegar desordenadas
   
   👉 Parece que “se ejecutan a la vez”, pero en realidad son llamadas independientes
   por eso la variable cargando para  esperar entre solicitudes de socket y no ejecutar todas a la vez*/
            this.socketproduct
                .obtenerInfo('aws', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'lineas',
                consulta: 'PRODUCTOS',
                canalserver: 'aws',
                datoCondicion: '',
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
                .subscribe((dato) => {
                console.log("lineas ACTULES", JSON.parse(dato).mensajePeticion);
                this.lineas = [...JSON.parse(dato).mensajePeticion];
                this.socketproduct
                    .obtenerInfo('aws', 'pazzioli-pos-3', {
                    metodo: 'CONSULTAR',
                    condicion: 'grupos',
                    consulta: 'PRODUCTOS',
                    canalserver: 'aws',
                    datoCondicion: '',
                })
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
                    .subscribe((dato) => {
                    console.log("grupos ACTULES", JSON.parse(dato).mensajePeticion);
                    this.grupos = [...JSON.parse(dato).mensajePeticion];
                    this.socketproduct
                        .obtenerInfo('aws', 'pazzioli-pos-3', {
                        metodo: 'CONSULTAR',
                        condicion: 'INVENTARIO',
                        consulta: 'PRODUCTOS',
                        canalserver: 'aws',
                        datoCondicion: this.productchange,
                        pagina: 1,
                        bodega: '',
                        linea: Number(this.linea),
                        grupo: Number(this.grupo)
                    })
                        .subscribe((dato) => {
                        this.cargando = false;
                        if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                            console.log("numerregistro", JSON.parse(dato).registro);
                            this.nregistros = JSON.parse(dato).registro;
                            this.productos = JSON.parse(dato).mensajePeticion;
                            this.totalglobal = JSON.parse(dato).inventariototal;
                        }
                        else {
                            this.productos = [];
                            this.totalglobal = 0;
                        }
                    });
                });
            });
        });
    }
    encontrarnombretabla(id) {
        const titulos = this.bodegas.find(item => item.codigo === id);
        return titulos ? titulos.alias : '';
    }
    ngOnInit() {
        //nada
        this.obtenertodo = true;
    }
    autocompletarinputclient(valor) {
        if (this.cargando)
            return;
        this.cargando = true;
        this.pagina = 1;
        console.log("productos", this.productos);
        this.productos = [];
        console.log("clientes", valor);
        this.obtenertodo = false;
        if (!valor || valor.trim() === '') {
            this.productos = [];
            this.totalglobal = 0;
            this.cargando = false;
            return;
        }
        else {
            this.socketproduct
                .obtenerInfo('aws', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'DESCRIPCIONINVENTARIO',
                consulta: 'PRODUCTOS',
                canalserver: 'aws',
                datoCondicion: valor.trim(),
                bodega: this.bodegaSeleccionada,
                linea: Number(this.linea),
                grupo: Number(this.grupo)
            })
                .subscribe((dato) => {
                this.cargando = false;
                if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                    console.log("VALOR CONDICION", valor.trim());
                    this.productos = [...JSON.parse(dato).mensajePeticion];
                    console.log("datos descriptraidos", JSON.parse(dato));
                    this.totalglobal = JSON.parse(dato).inventariototal;
                    this.cdr.detectChanges();
                }
                else {
                    this.productos = [];
                    this.totalglobal = 0;
                }
            });
        }
    }
    cargabodega(valor) {
        console.log("cargando", this.cargando);
        if (this.cargando)
            return;
        this.cargando = true;
        if (this.obtenertodo) {
            this.pagina = 1;
            this.productos = [];
            this.socketproduct
                .obtenerInfo('aws', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'INVENTARIO',
                consulta: 'PRODUCTOS',
                canalserver: 'aws',
                datoCondicion: this.productchange,
                pagina: this.pagina,
                bodega: valor,
                linea: Number(this.linea),
                grupo: Number(this.grupo)
            })
                .subscribe((dato) => {
                this.cargando = false;
                if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                    console.log("numerregistro", JSON.parse(dato).registro);
                    this.nregistros = JSON.parse(dato).registro;
                    this.productos = JSON.parse(dato).mensajePeticion;
                    this.totalglobal = JSON.parse(dato).inventariototal;
                }
                else {
                    this.productos = [];
                    this.totalglobal = 0;
                }
            });
        }
        else {
            this.pagina = 1;
            this.productos = [];
            if (this.productchange !== "") {
                this.socketproduct
                    .obtenerInfo('aws', 'pazzioli-pos-3', {
                    metodo: 'CONSULTAR',
                    condicion: 'DESCRIPCIONINVENTARIO',
                    consulta: 'PRODUCTOS',
                    canalserver: 'aws',
                    datoCondicion: this.productchange,
                    bodega: valor,
                    linea: Number(this.linea),
                    grupo: Number(this.grupo)
                })
                    .subscribe((dato) => {
                    this.cargando = false;
                    if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        this.productos = [...JSON.parse(dato).mensajePeticion];
                        this.cdr.detectChanges();
                        this.totalglobal = 0;
                        this.totalglobal = JSON.parse(dato).inventariototal;
                        console.log("totalglobal", this.totalglobal);
                    }
                    else {
                        this.productos = [];
                        this.totalglobal = 0;
                    }
                });
            }
            else {
                this.cargando = false;
                this.productos = [];
                this.totalglobal = 0;
            }
        }
    }
    navegarpagina1() {
    }
    calcularpositivo(id) {
        let contadorpositovo = 0;
        console.log("id codigo", id);
        const dato = this.productos.find(item => {
            return item.codigo === id;
        });
        console.log("codigoid", dato);
        if (dato.cantidad >= 0) {
            contadorpositovo += dato.cantidad;
        }
        if (dato.cantidad2 >= 0) {
            contadorpositovo += dato.cantidad2;
        }
        if (dato.cantidad3 >= 0) {
            contadorpositovo += dato.cantidad3;
        }
        if (dato.cantidad4 >= 0) {
            contadorpositovo += dato.cantidad4;
        }
        if (dato.cantidad5 >= 0) {
            contadorpositovo += dato.cantidad5;
        }
        if (dato.cantidad6 >= 0) {
            contadorpositovo += dato.cantidad6;
        }
        if (dato.cantidad7 >= 0) {
            contadorpositovo += dato.cantidad7;
        }
        if (dato.cantidad8 >= 0) {
            contadorpositovo += dato.cantidad8;
        }
        if (dato.cantidad9 >= 0) {
            contadorpositovo += dato.cantidad9;
        }
        if (dato.cantidad10 >= 0) {
            contadorpositovo += dato.cantidad10;
        }
        return contadorpositovo;
    }
    calcularnegativo(id) {
        let contadorpositovo = 0;
        const dato = this.productos.find(item => item.codigo === id);
        if (dato.cantidad <= 0) {
            contadorpositovo += dato.cantidad;
        }
        if (dato.cantidad2 <= 0) {
            contadorpositovo += dato.cantidad2;
        }
        if (dato.cantidad3 <= 0) {
            contadorpositovo += dato.cantidad3;
        }
        if (dato.cantidad4 <= 0) {
            contadorpositovo += dato.cantidad4;
        }
        if (dato.cantidad5 <= 0) {
            contadorpositovo += dato.cantidad5;
        }
        if (dato.cantidad6 <= 0) {
            contadorpositovo += dato.cantidad6;
        }
        if (dato.cantidad7 <= 0) {
            contadorpositovo += dato.cantidad7;
        }
        if (dato.cantidad8 <= 0) {
            contadorpositovo += dato.cantidad8;
        }
        if (dato.cantidad9 <= 0) {
            contadorpositovo += dato.cantidad9;
        }
        if (dato.cantidad10 <= 0) {
            contadorpositovo += dato.cantidad10;
        }
        return contadorpositovo;
    }
    cargarcarteracompleta() {
        console.log("cargacompleta estado", this.cargando);
        if (this.cargando)
            return;
        this.cargando = true;
        this.productchange = "";
        this.pagina = 1;
        if (this.obtenertodo) {
            this.socketproduct
                .obtenerInfo('aws', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'INVENTARIO',
                consulta: 'PRODUCTOS',
                canalserver: 'aws',
                datoCondicion: this.pagina,
                pagina: this.pagina,
                bodega: this.bodegaSeleccionada,
                linea: Number(this.linea),
                grupo: Number(this.grupo)
            })
                .subscribe((dato) => {
                this.cargando = false;
                if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                    console.log("numerregistro", JSON.parse(dato).registro);
                    this.nregistros = JSON.parse(dato).registro;
                    this.productos = JSON.parse(dato).mensajePeticion;
                    this.totalglobal = JSON.parse(dato).inventariototal;
                }
                else {
                    this.productos = [];
                    this.totalglobal = 0;
                }
            });
        }
        else {
            this.cargando = false;
            this.productos = [];
            this.totalglobal = 0;
        }
    }
    onScroll(event) {
        console.log("cargando scroll", this.cargando);
        const element = event.target;
        // console.log(element.clientHeight)
        // console.log((element.scrollHeight - element.scrollTop))
        // Detecta cuando llega al final del scroll
        if (this.obtenertodo) {
            const llegoAlFinal = element.scrollTop + element.clientHeight >= element.scrollHeight - 5;
            if (!this.obtenertodo)
                return;
            if (this.cargando)
                return;
            if (!llegoAlFinal)
                return;
            if (this.pagina >= this.nregistros)
                return;
            this.cargando = true;
            if (this.pagina <= this.nregistros) {
                this.pagina++;
                //const paginaactual=this.pagina+1
                const paginaactual = this.pagina;
                let pro = this.productos;
                this.socketproduct
                    .obtenerInfo('aws', 'pazzioli-pos-3', {
                    metodo: 'CONSULTAR',
                    condicion: 'INVENTARIO',
                    consulta: 'PRODUCTOS',
                    canalserver: 'aws',
                    datoCondicion: this.pagina,
                    pagina: this.pagina,
                    bodega: this.bodegaSeleccionada,
                    linea: Number(this.linea),
                    grupo: Number(this.grupo)
                })
                    .subscribe((dato) => {
                    if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                        this.cargando = false;
                        JSON.parse(dato).mensajePeticion.forEach((item) => {
                            const existe = pro.some(p => p.codigo === item.codigo);
                            if (!existe) {
                                pro.push(item); // 👉 agrega al array existente
                            }
                        });
                        this.totalglobal = JSON.parse(dato).inventariototal;
                        this.productos = [...pro];
                    }
                    else {
                    }
                });
            }
        }
        else {
            const llegoAlFinal = element.scrollTop + element.clientHeight >= element.scrollHeight - 5;
            if (!this.obtenertodo)
                return;
            if (this.cargando)
                return;
            if (!llegoAlFinal)
                return;
            if (this.pagina >= this.nregistros)
                return;
            this.cargando = true;
            if (this.pagina <= this.nregistros) {
                this.pagina++;
                console.log("pagina actual", this.pagina);
                const paginaactual = this.pagina + 1;
                console.log("pagina actual", paginaactual);
                console.log("productos antes", this.productos);
                let pro = this.productos;
                this.socketproduct;
                if (this.productchange !== "") {
                    this.socketproduct
                        .obtenerInfo('aws', 'pazzioli-pos-3', {
                        metodo: 'CONSULTAR',
                        condicion: 'DESCRIPCIONINVENTARIO',
                        consulta: 'PRODUCTOS',
                        canalserver: 'aws',
                        datoCondicion: this.productchange,
                        bodega: this.bodegaSeleccionada,
                        linea: Number(this.linea),
                        grupo: Number(this.grupo)
                    })
                        .subscribe((dato) => {
                        this.cargando = false;
                        if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                            console.log("productos antes", this.productos);
                            JSON.parse(dato).mensajePeticion.forEach((item) => {
                                const existe = pro.some(p => p.codigo === item.codigo);
                                if (!existe) {
                                    pro.push(item); // 👉 agrega al array existente
                                }
                            });
                            this.totalglobal = JSON.parse(dato).inventariototal;
                            console.log("productos despues", pro);
                            this.productos = [...pro];
                            console.log(this.productos);
                            return;
                        }
                    });
                }
            }
        }
    }
    cargargrupo(e) {
        if (this.cargando)
            return;
        this.cargando = true;
        console.log("value linea", e);
        this.pagina = 1;
        this.productos = [];
        if (this.obtenertodo) {
            this.socketproduct
                .obtenerInfo('aws', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'INVENTARIO',
                consulta: 'PRODUCTOS',
                canalserver: 'aws',
                datoCondicion: this.productchange,
                pagina: this.pagina,
                bodega: this.bodegaSeleccionada,
                linea: Number(this.linea),
                grupo: Number(e)
            })
                .subscribe((dato) => {
                this.cargando = false;
                if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                    console.log("numerregistro", JSON.parse(dato).registro);
                    this.nregistros = JSON.parse(dato).registro;
                    this.productos = JSON.parse(dato).mensajePeticion;
                    this.totalglobal = JSON.parse(dato).inventariototal;
                }
                else {
                    this.productos = [];
                    this.totalglobal = 0;
                }
            });
        }
        else {
            this.socketproduct
                .obtenerInfo('aws', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'DESCRIPCIONINVENTARIO',
                consulta: 'PRODUCTOS',
                canalserver: 'aws',
                datoCondicion: this.productchange,
                pagina: this.pagina,
                bodega: this.bodegaSeleccionada,
                linea: Number(this.linea),
                grupo: Number(e)
            })
                .subscribe((dato) => {
                this.cargando = false;
                if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                    console.log("numerregistro", JSON.parse(dato));
                    this.nregistros = JSON.parse(dato).registro;
                    this.productos = JSON.parse(dato).mensajePeticion;
                    this.totalglobal = JSON.parse(dato).inventariototal;
                }
                else {
                    this.productos = [];
                    this.totalglobal = 0;
                }
            });
        }
    }
    carlinea(e) {
        if (this.cargando)
            return;
        this.cargando = true;
        console.log("value linea", e);
        this.pagina = 1;
        this.productos = [];
        if (this.obtenertodo) {
            this.socketproduct
                .obtenerInfo('aws', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'INVENTARIO',
                consulta: 'PRODUCTOS',
                canalserver: 'aws',
                datoCondicion: this.productchange,
                pagina: this.pagina,
                bodega: this.bodegaSeleccionada,
                linea: Number(e),
                grupo: Number(this.grupo)
            })
                .subscribe((dato) => {
                this.cargando = false;
                if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                    console.log("numerregistro", JSON.parse(dato).registro);
                    this.nregistros = JSON.parse(dato).registro;
                    this.productos = JSON.parse(dato).mensajePeticion;
                    this.totalglobal = JSON.parse(dato).inventariototal;
                }
                else {
                    this.productos = [];
                    this.totalglobal = 0;
                }
            });
        }
        else {
            this.socketproduct
                .obtenerInfo('aws', 'pazzioli-pos-3', {
                metodo: 'CONSULTAR',
                condicion: 'DESCRIPCIONINVENTARIO',
                consulta: 'PRODUCTOS',
                canalserver: 'aws',
                datoCondicion: this.productchange,
                pagina: this.pagina,
                bodega: this.bodegaSeleccionada,
                linea: Number(e),
                grupo: Number(this.grupo)
            })
                .subscribe((dato) => {
                this.cargando = false;
                if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
                    console.log("numerregistro", JSON.parse(dato));
                    this.nregistros = JSON.parse(dato).registro;
                    this.productos = JSON.parse(dato).mensajePeticion;
                    this.totalglobal = JSON.parse(dato).inventariototal;
                }
                else {
                    this.productos = [];
                    this.totalglobal = 0;
                }
            });
        }
    }
}
InventarioComponent.ɵfac = function InventarioComponent_Factory(t) { return new (t || InventarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_0__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
InventarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InventarioComponent, selectors: [["app-inventario"]], decls: 55, vars: 11, consts: [[1, "tituloP"], [1, "row", "loader-content", 2, "padding-top", "20px", "height", "100% !important"], [1, "buscaliente", 2, "height", "100% !important"], [1, "search-card", "col-12", 2, "max-width", "70%", "max-height", "fit-content"], [1, "search"], [2, "display", "flex", "justify-content", "space-between"], [1, "m-0", 2, "margin-left", "15px !important"], [2, "margin-right", "15px !important"], ["for", "cartera", 2, "font-size", "1rem", "font-weight", "bold"], ["type", "checkbox", "id", "cartera", 3, "ngModel", "ngModelChange", "click"], [1, "row"], [1, "col-12"], ["appearance", "fill", "search", ""], ["matInput", "", "placeholder", "", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], [2, "padding", "10px 12px 10px 12px"], [1, "row", "mx-0", "w-100", "w100"], [1, "col-6"], ["appearance", "fill", 1, "classformbodega", "w100"], ["matNativeControl", "", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-3"], ["value", "0", "selected", ""], ["appearance", "fill", 1, "classformbodega", "w-100", "w100"], [1, "tabla-scroll", 2, "width", "100%", "margin-top", "10px"], [1, "tabla-contenedor", 3, "scroll"], ["mat-table", "", "class", "mat-elevation-z8 col-12 tab-factura", "multiTemplateDataRows", "", 3, "dataSource", 4, "ngIf"], [1, "d-flex", "justify-content-end", 2, "margin-top", "30px", "padding", "0 10px 50px 10px"], [2, "font-weight", "700", "font-size", "20px", "font-family", "'Montserrat', sans-serif !important"], [3, "value"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", "col-12", "tab-factura", 3, "dataSource"], ["matColumnDef", "referencia"], ["mat-header-cell", "", "sticky", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "costo"], ["matColumnDef", "precio1"], ["matColumnDef", "precio2"], ["matColumnDef", "precio3"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "totalproducto", "stickyEnd", ""], ["mat-header-cell", "", "stickyEnd", "", 4, "matHeaderCellDef"], ["mat-cell", "", "stickyEnd", "", 4, "matCellDef"], ["mat-header-row", "", "class", "tablatr", 4, "matHeaderRowDef"], ["mat-row", "", "class", "tablatr", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "sticky", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-cell", "", "stickyEnd", ""], ["mat-cell", "", "stickyEnd", ""], ["mat-header-row", "", 1, "tablatr"], ["mat-row", "", 1, "tablatr"], ["matColumnDef", "totalproducto"], ["mat-header-cell", "", "sticky", "", "stickyEnd", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "sticky", "", "stickyEnd", ""]], template: function InventarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Consultar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "mat-card", 3)(6, "mat-card-header", 4)(7, "div", 5)(8, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Completa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InventarioComponent_Template_input_ngModelChange_13_listener($event) { return ctx.obtenertodo = $event; })("ngModelChange", function InventarioComponent_Template_input_ngModelChange_13_listener() { return ctx.cargarcarteracompleta(); })("click", function InventarioComponent_Template_input_click_13_listener() { return ctx.navegarpagina1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "mat-form-field", 12)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Buscar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InventarioComponent_Template_input_ngModelChange_19_listener($event) { return ctx.autocompletarinputclient($event); })("ngModelChange", function InventarioComponent_Template_input_ngModelChange_19_listener($event) { return ctx.productchange = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-card-footer", 15)(23, "div", 16)(24, "div", 17)(25, "mat-form-field", 18)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Bodega");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InventarioComponent_Template_select_ngModelChange_28_listener($event) { return ctx.bodegaSeleccionada = $event; })("ngModelChange", function InventarioComponent_Template_select_ngModelChange_28_listener($event) { return ctx.cargabodega($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, InventarioComponent_option_31_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22)(33, "mat-form-field", 18)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Linea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InventarioComponent_Template_select_ngModelChange_36_listener($event) { return ctx.linea = $event; })("ngModelChange", function InventarioComponent_Template_select_ngModelChange_36_listener($event) { return ctx.carlinea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, InventarioComponent_option_39_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22)(41, "mat-form-field", 24)(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Grupo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InventarioComponent_Template_select_ngModelChange_44_listener($event) { return ctx.grupo = $event; })("ngModelChange", function InventarioComponent_Template_select_ngModelChange_44_listener($event) { return ctx.cargargrupo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, InventarioComponent_option_47_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 25)(49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function InventarioComponent_Template_div_scroll_49_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, InventarioComponent_table_50_Template, 27, 3, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, InventarioComponent_table_51_Template, 27, 3, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 28)(53, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.obtenertodo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.productchange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bodegaSeleccionada);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bodegas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.linea);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lineas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.grupo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grupos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bodegaSeleccionada === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bodegaSeleccionada !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: $", ctx.totalglobal.toLocaleString("de-DE"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardFooter, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow], styles: ["@charset \"UTF-8\";\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.buscaliente[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vw;\n}\n.buscaliente[_ngcontent-%COMP%]:nth-child(1) {\n  flex: 0 0 100%;\n  align-items: center;\n}\n.tabla-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tabla-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  overflow-x: visible;\n}\n.tab-factura[_ngcontent-%COMP%] {\n  min-width: 600px;\n  width: 100%;\n  border-collapse: collapse;\n}\n.totalCartera[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  font-weight: bold;\n}\n.tituloP[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n}\n.botonpdf[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  background: #fff;\n  transition: background-color 0.5s ease;\n}\n.botonpdf[_ngcontent-%COMP%]:active {\n  background-color: rgba(133, 146, 158, 0.5);\n}\n.clientelist[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.mat-header-row[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: #fff; \n  z-index: 1;\n}\n.classformbodega[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.classformbodega[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding: 0;\n  width: 350px;\n}\n.cantidades-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  max-width: 250px; \n}\n.tabla-contenedor[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  overflow-x: auto;\n}\n\n.tabla-contenedor[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow: auto;\n  position: relative; \n  width: 100%;\n  box-shadow: 0 6px 10px 0px rgba(39, 38, 49, 0.1) !important;\n  border-radius: 10px;\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 15;\n  background: white;\n}\n\n.mat-header-cell[sticky][_ngcontent-%COMP%], .mat-header-cell[stickyEnd][_ngcontent-%COMP%], .mat-cell[stickyEnd][_ngcontent-%COMP%] {\n  background: white;\n  white-space: nowrap !important;\n}\n\n.mat-header-cell[stickyEnd][_ngcontent-%COMP%], .mat-cell[stickyEnd][_ngcontent-%COMP%] {\n  position: sticky;\n  right: 0;\n  z-index: 12;\n  border-left: none !important;\n}\n\n.mat-cell[stickyEnd][_ngcontent-%COMP%] {\n  border-left: 1px solid #ddd;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  z-index: 11;\n}\n\n.tabla-contenedor[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%], .tabla-contenedor[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis; \n  padding: 8px 12px; \n}\n  .tablatr td:nth-child(2) {\n  min-width: 300px;\n}\n\n.tabla-contenedor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  table-layout: auto !important;\n  width: max-content !important; \n  min-width: 100%;\n}\n.botonexpor[_ngcontent-%COMP%]     span {\n  font-size: 14px;\n}\n.containerexport[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 60px;\n}\n.mat-table-sticky[_ngcontent-%COMP%]:last-of-type {\n  right: 0 !important;\n}\n.mat-table-sticky[_ngcontent-%COMP%] {\n  box-shadow: none !important; \n}\n.paddintop12bottom12[_ngcontent-%COMP%] {\n  padding: 0px 12px 0px 12px !important;\n}\n.w100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVudGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsV0FBQTtBQUVGO0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdGO0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUdBO0VBQ0UsV0FBQTtBQUFGO0FBQ0M7RUFDQyxtQkFBQTtBQUNGO0FBT0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUpGO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUpGO0FBT0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBSkY7QUFPQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUFKRjtBQU9BO0VBQ0UsMENBQUE7QUFKRjtBQU9BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUpKO0FBT0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQSxFQUFBLHFEQUFBO0VBQ0EsVUFBQTtBQUpGO0FBT0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFKSjtBQUtDO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFIRDtBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUEsRUFBQSx3QkFBQTtBQVJGO0FBWUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFURjtBQVlBLHlEQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQSxFQUFBLCtCQUFBO0VBQ0EsV0FBQTtFQUVFLDJEQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWNBLGlEQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFYRjtBQWNBLHVDQUFBO0FBQ0E7OztFQUdFLGlCQUFBO0VBQ0EsOEJBQUE7QUFYRjtBQWVBLHdDQUFBO0FBQ0E7O0VBRUUsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBWkY7QUFpQkEsMENBQUE7QUFJQTtFQUNFLDJCQUFBO0FBakJGO0FBb0JBLDJDQUFBO0FBQ0E7RUFDRSxXQUFBO0FBakJGO0FBcUJBLGtFQUFBO0FBQ0E7O0VBR0UsZ0JBQUE7RUFDQSx1QkFBQSxFQUFBLHVDQUFBO0VBQ0EsaUJBQUEsRUFBQSw0Q0FBQTtBQW5CRjtBQXVCQTtFQUNFLGdCQUFBO0FBcEJGO0FBc0JBLDJEQUFBO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBLEVBQUEsOENBQUE7RUFDQSxlQUFBO0FBbkJGO0FBd0JJO0VBQ0ksZUFBQTtBQXJCUjtBQTBCQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7QUF4Qko7QUEwQkE7RUFDRSxtQkFBQTtBQXZCRjtBQTBCQTtFQUNFLDJCQUFBLEVBQUEsd0NBQUE7QUF2QkY7QUEwQkE7RUFDRSxxQ0FBQTtBQXZCRjtBQXlCQTtFQUNFLHNCQUFBO0FBdEJGIiwiZmlsZSI6ImludmVudGFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ1c2NhbGllbnRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDEwMHZ3O1xyXG5cclxuXHJcbn1cclxuXHJcbi5idXNjYWxpZW50ZTpudGgtY2hpbGQoMSl7XHJcbiAgZmxleDogMCAwIDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG5cclxuLnRhYmxhLXNjcm9sbHtcclxuICB3aWR0aDogMTAwJTtcclxuIHRhYmxle1xyXG4gIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbiB9XHJcbiAgXHJcblxyXG4gXHJcbiAgLy9vdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4udGFiLWZhY3R1cmF7XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4udG90YWxDYXJ0ZXJhe1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aXR1bG9Qe1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLy9lc3RpbG9zIGJvdG9uIHBkZlxyXG4uYm90b25wZGZ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAgYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7O1xyXG59XHJcblxyXG4uYm90b25wZGY6YWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMzLCAxNDYsIDE1OCAsMC41KTtcclxufVxyXG5cclxuLmNsaWVudGVsaXN0e1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7IC8qIEZvbmRvIGJsYW5jbyBwYXJhIHF1ZSBubyBzZSBtZXpjbGUgY29uIGVsIHNjcm9sbCAqL1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jbGFzc2Zvcm1ib2RlZ2Ege1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gcGFkZGluZzogMDtcclxuIHdpZHRoOiAzNTBweDtcclxufVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jYW50aWRhZGVzLXNjcm9sbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG1heC13aWR0aDogMjUwcHg7IC8qIEFqdXN0YSBzZWfDum4gZGlzZcOxbyAqL1xyXG59XHJcblxyXG5cclxuLnRhYmxhLWNvbnRlbmVkb3Ige1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLyog8J+UuSBFbCBjb250ZW5lZG9yIGRlYmUgbWFuZWphciBlbCBzY3JvbGwsIG5vIGxhIHRhYmxhICovXHJcbi50YWJsYS1jb250ZW5lZG9yIHtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIE1VWSBJTVBPUlRBTlRFIHBhcmEgc3RpY2t5ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDBweCByZ2JhKDM5LCAzOCwgNDksIDAuMSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG4vKiDwn5S5IEZpamFyIGVuY2FiZXphZG8gYWwgaGFjZXIgc2Nyb2xsIHZlcnRpY2FsICovXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi8qIPCflLkgQ2FkYSBjZWxkYSBzdGlja3kgKHBvciBjb2x1bW5hKSAqL1xyXG4ubWF0LWhlYWRlci1jZWxsW3N0aWNreV0sXHJcbi5tYXQtaGVhZGVyLWNlbGxbc3RpY2t5RW5kXSxcclxuLm1hdC1jZWxsW3N0aWNreUVuZF0ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIPCflLkgw5psdGltYSBjb2x1bW5hIGZpamEgYSBsYSBkZXJlY2hhICovXHJcbi5tYXQtaGVhZGVyLWNlbGxbc3RpY2t5RW5kXSxcclxuLm1hdC1jZWxsW3N0aWNreUVuZF0ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTI7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4vKiDwn5S5IEJvcmRlcyBvcGNpb25hbGVzIHBhcmEgZGlmZXJlbmNpYXIgKi9cclxuLm1hdC1oZWFkZXItY2VsbFtzdGlja3lFbmRdIHtcclxuICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcclxufVxyXG4ubWF0LWNlbGxbc3RpY2t5RW5kXSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4vKiDwn5S5IEV2aXRhIHF1ZSBlbCBoZWFkZXIgc2UgdmVhIGN1YmllcnRvICovXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG5cclxuLyog8J+UuSBFdml0YSBxdWUgZWwgdGV4dG8gZGUgbGFzIGNlbGRhcyBzZSBwYXJ0YSBlbiB2YXJpYXMgbMOtbmVhcyAqL1xyXG4udGFibGEtY29udGVuZWRvciAubWF0LWhlYWRlci1jZWxsLFxyXG4udGFibGEtY29udGVuZWRvciAubWF0LWNlbGwge1xyXG4gIC8vd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8qIE9wY2lvbmFsOiBhZ3JlZ2EgXCIuLi5cIiBzaSBzZSBjb3J0YSAqL1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4OyAvKiB1biBwb2NvIGRlIGVzcGFjaW8gcGFyYSBxdWUgc2UgdmVhIGJpZW4gKi9cclxuIFxyXG59XHJcblxyXG46Om5nLWRlZXAgLnRhYmxhdHIgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcbi8qIPCflLkgQXNlZ3VyYSBxdWUgbGFzIGNvbHVtbmFzIG1hbnRlbmdhbiBzdSBhbmNobyBuYXR1cmFsICovXHJcbi50YWJsYS1jb250ZW5lZG9yIHRhYmxlIHtcclxuICB0YWJsZS1sYXlvdXQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDsgLyogcGVybWl0ZSBzY3JvbGwgaG9yaXpvbnRhbCBzaSBlcyBuZWNlc2FyaW8gKi9cclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uYm90b25leHBvcntcclxuICAgIDo6bmctZGVlcCBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5jb250YWluZXJleHBvcnR7XHJcbiAgIFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuLm1hdC10YWJsZS1zdGlja3k6bGFzdC1vZi10eXBlIHtcclxuICByaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXRhYmxlLXN0aWNreSB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyAvKiBvcGNpb25hbCwgZWxpbWluYSBsw61uZWFzIGR1cGxpY2FkYXMgKi9cclxufVxyXG5cclxuLnBhZGRpbnRvcDEyYm90dG9tMTJ7XHJcbiAgcGFkZGluZzogMHB4IDEycHggMHB4IDEycHggIWltcG9ydGFudDtcclxufVxyXG4udzEwMHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 42459:
/*!********************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/itemspedido/itemspedido.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemspedidoComponent": () => (/* binding */ ItemspedidoComponent)
/* harmony export */ });
/* harmony import */ var C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);










function ItemspedidoComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ItemspedidoComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r10.codigoBarra, " ");
  }
}

function ItemspedidoComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ItemspedidoComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r11.nombre, " ");
  }
}

function ItemspedidoComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ItemspedidoComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r12.cantidad, " ");
  }
}

function ItemspedidoComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ItemspedidoComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $", element_r13.precio.toLocaleString("de-DE"), " ");
  }
}

function ItemspedidoComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 14);
  }
}

function ItemspedidoComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 15);
  }
}

class ItemspedidoComponent {
  constructor(router, route, servipro) {
    this.router = router;
    this.route = route;
    this.servipro = servipro;
    this.data = [];
    this.total = 0;
    this.displayedColumns = ['codigoBarra', 'nombre', 'cantidad', 'precio'];
  }

  ngOnInit() {
    this.mostrarid();
  }

  mostrarid() {
    var _this = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.servipro.obteneritemspedido(_this.route.snapshot.params['codigo']).subscribe(datos => {
        _this.data = datos;
        _this.total = datos[0].total;
      });
    })();
  }

}

ItemspedidoComponent.ɵfac = function ItemspedidoComponent_Factory(t) {
  return new (t || ItemspedidoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__.Socket_producto));
};

ItemspedidoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ItemspedidoComponent,
  selectors: [["app-itemspedido"]],
  decls: 27,
  vars: 4,
  consts: [[1, "row"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/admin/pedido", 1, "custom-button-pedido"], ["cdk-table", "", 1, "col-12", 3, "dataSource"], ["cdkColumnDef", "codigoBarra"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "nombre"], ["cdkColumnDef", "cantidad"], ["cdkColumnDef", "precio"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]],
  template: function ItemspedidoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "arrow_back");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " volver ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 0)(7, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ItemspedidoComponent_th_9_Template, 2, 0, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ItemspedidoComponent_td_10_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ItemspedidoComponent_th_12_Template, 2, 0, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ItemspedidoComponent_td_13_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ItemspedidoComponent_th_15_Template, 2, 0, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ItemspedidoComponent_td_16_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ItemspedidoComponent_th_18_Template, 2, 0, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ItemspedidoComponent_td_19_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ItemspedidoComponent_tr_20_Template, 1, 0, "tr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ItemspedidoComponent_tr_21_Template, 1, 0, "tr", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 1)(23, "span")(24, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "TOTAL VENTA:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", ctx.total.toLocaleString("de-DE"), "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTable, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkRowDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkHeaderCellDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkColumnDef, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkCell, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkRow, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkHeaderCell, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkHeaderRow, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkHeaderRowDef, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHrefDelegate],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  border: 1px solid black;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\nthead[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex: 1;\n}\n\ntbody[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zcGVkaWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0QsdUJBQUE7QUFBSDs7QUFNQTtFQUNJLHVCQUFBO0FBSEo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFGSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBREoiLCJmaWxlIjoiaXRlbXNwZWRpZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBcclxufVxyXG5cclxudGgsdGQsdHJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDoxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIGJvcmRlcjoxcHggc29saWQgYmxhY2sgO1xyXG4gICAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG50aCx0ZHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbnRoZWFke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxufVxyXG50Ym9keXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 71910:
/*!***************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/recibodecaja/pdfingresos/pdf.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePDFingre": () => (/* binding */ generatePDFingre)
/* harmony export */ });
/* harmony import */ var C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_utils_convertiraletras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/convertiraletras */ 98882);



 //import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__;
const generatePDFingre = /*#__PURE__*/function () {
  var _ref = (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    let pago = '';
    let datamovimiento = [];
    data.movimiento.forEach(element => {
      data.comprobante.forEach(element2 => {
        const nombreencontrado = datamovimiento.find(item => item.nombre === element.Movimiento);

        if (!nombreencontrado) {
          if (element2.nombre.includes(element.Movimiento.toUpperCase().replace(' ', ''))) {
            datamovimiento.push({
              nombre: element.Movimiento,
              valorpuc: Number(element2.valor),
              valor: Math.abs(Number(element.valor))
            });
          }

          if ((element2.nombre === "CUENTA_TD" || element2.nombre === "CUENTA_TC") && (element.Movimiento === "T.Debito" || element.Movimiento === "T.Credito")) {
            datamovimiento.push({
              nombre: element.Movimiento,
              valorpuc: Number(element2.valor),
              valor: Math.abs(Number(element.valor))
            });
          }
        }
      });
    });
    datamovimiento.push({
      nombre: "Clientes",
      valorpuc: 13050501,
      valor: data.valor
    });
    data.movimiento.push({
      Movimiento: "Clientes",
      valor: data.valor
    }); //  datamovimiento.sort((a, b) => a.valorpuc - b.valorpuc);

    console.log("movimiento deduccioddfedre", datamovimiento);

    if (data.movimiento.length !== datamovimiento.length) {
      datamovimiento = [];
    } //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.


    data.tipospagos.data.forEach(data => {
      switch (data.Movimiento) {
        case 'Efectivo':
          pago += data.Movimiento + '  ';
          break;

        case 'T.Credito':
          pago += data.Movimiento + '  ';
          break;

        case 'T.Debito':
          pago += data.Movimiento + '  ';
          break;

        case 'Cheque':
          pago += data.Movimiento + '  ';
          break;

        case 'Banco':
          pago += 'TRANS. BANCARIA' + '(' + data.opcionBanco.nombre + ')';
          break;

        default:
          break;
      }
    });
    const nuevaVentana = window.open('', '_blank');

    if (!nuevaVentana) {
      alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
      return null;
    }

    const tableBody = [];
    const tableBody3 = [];
    const tablebody2 = [[{
      text: 'Codigo puc',
      style: 'tableHeader',
      colSpan: 2
    }, {
      text: '',
      style: 'tableHeader'
    }, {
      text: 'CUENTA',
      style: 'tableHeader',
      colSpan: 2
    }, {
      text: '',
      style: 'tableHeader'
    }, {
      text: 'DEBITO',
      style: 'tableHeader',
      colSpan: 1
    }, {
      text: 'CREDITO',
      style: 'tableHeader',
      colSpan: 1
    }, {
      text: 'FIRMASELLO',
      style: 'tableHeader',
      colSpan: 3
    }, {
      text: '',
      style: 'tableHeader'
    }]];
    tablebody2.push([{
      text: data.movimiento.map(item => {
        const valorpuc = datamovimiento.find(element => element.nombre === item.Movimiento)?.valorpuc || '';
        console.log("movimiento deduccioddfedre valorpuc", datamovimiento, !valorpuc);
        return `${valorpuc}`;
      }).join('\n'),
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 1.1,
      minHeight: 60
    }, {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 1.1,
      minHeight: 60
    }, {
      text: data.movimiento.map(item => {
        const valorpuc = datamovimiento.find(element => element.nombre === item.Movimiento)?.nombre || '';
        return valorpuc.toUpperCase().replace(" ", "") === "RETEIVA" ? "Averias" : valorpuc.toUpperCase().replace(" ", "") === "RETEICA" ? "Fletes" : `${valorpuc}`;
      }).join('\n'),
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 1.1,
      minHeight: 60
    }, {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 1.1,
      minHeight: 60
    }, {
      text: data.movimiento.map(item => {
        const valorpuc = datamovimiento.find(element => element.nombre === item.Movimiento)?.valor || '';
        const valorcreditos = datamovimiento.find(element => element.nombre === item.Movimiento) || '';

        if (valorcreditos.nombre !== "Clientes") {
          return `${valorpuc.toLocaleString('de-DE')}`;
        }

        return '';
      }).join('\n'),
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 1.1,
      minHeight: 60
    }, {
      text: data.movimiento.map(item => {
        const valorpuc = datamovimiento.find(element => element.nombre === item.Movimiento)?.valor || '';
        const valorcreditos = datamovimiento.find(element => element.nombre === item.Movimiento) || '';

        if (valorcreditos.nombre == "Clientes") {
          return `${valorpuc.toLocaleString('de-DE')}`;
        }

        return '';
      }).join('\n'),
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 1.1,
      minHeight: 60
    }, {
      table: {
        body: [[{
          stack: [{
            text: '\n\n\n\n\n\n' + '________________________',
            bold: true
          }, {
            text: 'c.c.-NIT. No'
          }],
          margin: [0, 0, 0, 0],
          verticalAlignment: 'bottom'
        }]]
      },
      layout: 'noBorders',
      colSpan: 3,
      border: [true, false, true, true],
      alignment: 'left',
      height: 100,
      verticalAlignment: 'bottom',
      lineHeight: 1.2,
      // altura fija para la celda (en puntos)
      minHeight: 100
    }, {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }]);
    tablebody2.push([{
      colSpan: 5,
      border: [true, true, true, true],
      columnGap: 10,
      columns: [{
        width: 'auto',
        text: 'OBSERVACIÓN:',
        bold: true
      }, {
        width: '*',
        text: `\t\t` + data.observacion // tu variable con el texto

      }]
    }, {}, {}, {}, {}, {
      text: 'SALDO TOTAL ACTUAL:' + data.saldoactual.toLocaleString('de-DE'),
      colSpan: 4,
      border: [true, true, true, true]
    }, {}, {}, {}]);
    tablebody2.push([{
      text: 'ELABORADO POR:' + '  ' + data.usuario + '(' + data.vendedor + ')',
      colSpan: 9,
      minHeight: 60,
      border: [true, true, true, true]
    }, {}, {}, {}, {}, {}, {}, {}, {}]); // Fila de factura

    tableBody.push([{
      colSpan: 6,
      alignment: 'left',
      bold: true,
      stack: [{
        text: 'FECHA',
        bold: true
      }, {
        text: data.fechaIngreso.substring(0, data.fechaIngreso.indexOf('T')),
        margin: [30, 0, 0, 0],
        fontSize: 12
      }]
    }, {}, {}, {}, {}, {}, {
      text: `VALOR:$${data.valor.toLocaleString('de-DE')}`,
      fontSize: 12,
      colSpan: 3,
      alignment: 'right'
    }, {}, {} // cliente vacío
    ]);
    tableBody.push([{
      colSpan: 9,
      alignment: 'left',
      bold: true,
      stack: [{
        text: 'RECIBO DE',
        bold: true
      }, {
        text: data.recibidoDe + '  ' + data.direccionc + '  ' + data.identificacion,
        margin: [50, 0, 0, 0],
        fontSize: 12
      }]
    }, {}, {}, {}, {}, {}, {}, {}, {} // cliente vacío
    ]);
    tableBody.push([{
      colSpan: 9,
      alignment: 'left',
      bold: true,
      stack: [{
        text: 'SUMA DE',
        bold: true
      }, {
        text: (0,src_app_utils_convertiraletras__WEBPACK_IMPORTED_MODULE_3__.numeroALetras)(data.valor),
        margin: [50, 0, 0, 0],
        fontSize: 12
      }]
    }, {}, {}, {}, {}, {}, {}, {}, {} // cliente vacío
    ]);
    tableBody.push([{
      colSpan: 9,
      alignment: 'left',
      bold: true,
      stack: [{
        text: 'POR CONCEPTO DE',
        bold: true
      }, {
        text: data.concepto,
        margin: [50, 0, 0, 0],
        fontSize: 12
      }]
    }, {}, {}, {}, {}, {}, {}, {}, {} // cliente vacío
    ]);
    tableBody.push([{
      stack: [{
        text: 'FORMA DE PAGO',
        bold: true
      }, {
        text: pago
      }],
      colSpan: 9,
      alignment: 'left'
    }, {}, {}, {}, {}, {}, {}, {}, {} // cliente vacío
    ]); //Se calcula la suma total de todos los productos usando reduce.
    //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:

    const content = []; //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.

    content.push({
      columns: [{
        stack: [{
          text: data.razon
        }, {
          text: data.nit
        }, {
          text: data.direccion
        }],
        alignment: 'center',
        width: '*',
        margin: [20, 0, 0, 0]
      }, {
        stack: [{
          text: 'Recibo de caja'
        }, {
          text: data.nombreComprobanteRI + data.codigoRI.toString(),
          fontSize: 10
        }],
        alignment: 'right',
        width: 80
      }]
    }); //Muestra la tabla de productos con sus cantidades y totales.
    //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.

    content.push({
      columns: [{
        width: '*',
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: tableBody
        },
        alignment: 'left',
        layout: {
          hLineColor: function (i, node) {
            return '#aaa';
          },
          vLineColor: function (i, node) {
            return '#aaa';
          }
        },
        margin: [0, 10, 10, 0]
      }]
    });
    content.push({
      columns: [{
        width: '*',
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: tablebody2
        },
        alignment: 'left',
        layout: {
          hLineColor: function (i, node) {
            return '#aaa';
          },
          vLineColor: function (i, node) {
            return '#aaa';
          }
        },
        margin: [0, 0, 10, 0]
      }]
    }); //Muestra el total de la compra alineado a la derecha.

    content.push({
      text: '\n'
    }); //Define estilos reutilizables usados en el contenido: encabezados, subencabezados, etc.

    const styles = {
      header: {
        fontSize: 5,
        bold: true
      },
      subheader: {
        fontSize: 12,
        margin: [0, 5, 0, 5]
      },
      tableHeader: {
        bold: true,
        fontSize: 9,
        color: 'black'
      },
      total: {
        fontSize: 12,
        bold: true
      }
    }; //docDefinition es el objeto completo que define el PDF a generar.

    const docDefinition = {
      content,
      styles
    }; //Genera el PDF y lo abre en una nueva pestaña del navegador.

    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.createPdf(docDefinition).getBlob(blob => {
      const url = URL.createObjectURL(blob);
      nuevaVentana.location.href = url;
    });

    function getPdfBase64(docDefinition) {
      return new Promise(resolve => {
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.createPdf(docDefinition).getBase64(base64 => {
          resolve(base64);
        });
      });
    }

    return yield getPdfBase64(docDefinition);
  });

  return function generatePDFingre(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 953:
/*!**********************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/recibodecaja/recibodecaja.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecibodecajaComponent": () => (/* binding */ RecibodecajaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/angular-material/alerta */ 63060);
/* harmony import */ var _pdfingresos_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdfingresos/pdf */ 71910);
/* harmony import */ var src_app_angular_material_alertarecibo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/angular-material/alertarecibo */ 24053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_app_angular_material_alertaob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material/alertaob */ 99108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/socket/socket.service */ 38245);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/facturaservice/facturaservice.service */ 53358);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);


























function RecibodecajaComponent_mat_list_option_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecibodecajaComponent_mat_list_option_20_Template_mat_list_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32);
      const _cliente_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.seleccionarCliente(_cliente_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div")(2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 60)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _cliente_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", _cliente_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_cliente_r30.razonSocial);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _cliente_r30.identificacion, "");
  }
}

function RecibodecajaComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 62)(1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RecibodecajaComponent_td_29_Template_input_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const element_r33 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](element_r33.selected = $event);
    })("change", function RecibodecajaComponent_td_29_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const element_r33 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.onCheckChange(element_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", element_r33.selected);
  }
}

function RecibodecajaComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r37.codigo);
  }
}

function RecibodecajaComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Comprobante");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r38.codigoComprobante, " ");
  }
}

function RecibodecajaComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Total Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" $", element_r39.totalFactura, " ");
  }
}

function RecibodecajaComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Saldo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", element_r40.saldo, "");
  }
}

function RecibodecajaComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Abono");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 62)(1, "mat-form-field", 64)(2, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RecibodecajaComponent_td_44_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44);
      const element_r41 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](element_r41.abono = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecibodecajaComponent_td_44_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44);
      const element_r41 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r45.totalizarRecibo(element_r41));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", element_r41.abono)("disabled", !element_r41.selected);
  }
}

function RecibodecajaComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Almac\u00E9n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "td", 62);
  }
}

function RecibodecajaComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 67);
  }
}

function RecibodecajaComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 68);
  }
}

function RecibodecajaComponent_mat_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r48.valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r48.descripcion);
  }
}

function RecibodecajaComponent_mat_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r49);
  }
}

function RecibodecajaComponent_th_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Movimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r50.Movimiento === "Rete Iva" ? "Averias" : element_r50.Movimiento === "Rete Ica" ? "Fletes" : element_r50.Movimiento, " ");
  }
}

function RecibodecajaComponent_th_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 62)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r51.valor.toLocaleString("de-DE"), " ");
  }
}

function RecibodecajaComponent_th_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RecibodecajaComponent_td_85_mat_select_1_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r55.nombre);
  }
}

function RecibodecajaComponent_td_85_mat_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RecibodecajaComponent_td_85_mat_select_1_Template_mat_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r56.bancoSeleccinado = $event);
    })("selectionChange", function RecibodecajaComponent_td_85_mat_select_1_Template_mat_select_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const element_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r58.seleccionarOpcionBanco($event.value, element_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RecibodecajaComponent_td_85_mat_select_1_mat_option_1_Template, 2, 2, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r53.bancoSeleccinado);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r53.opcionesBanco);
  }
}

function RecibodecajaComponent_td_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RecibodecajaComponent_td_85_mat_select_1_Template, 2, 2, "mat-select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecibodecajaComponent_td_85_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r61);
      const element_r52 = restoredCtx.$implicit;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r60.eliminarTipoPago(element_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", element_r52.Movimiento === "Banco");
  }
}

function RecibodecajaComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 67);
  }
}

function RecibodecajaComponent_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 68);
  }
}

class RecibodecajaComponent {
  constructor(socketproduct, socketServices, snackBar, servifactura, dialog, cdr) {
    this.socketproduct = socketproduct;
    this.socketServices = socketServices;
    this.snackBar = snackBar;
    this.servifactura = servifactura;
    this.dialog = dialog;
    this.cdr = cdr;
    this.cliente = '';
    this.clientes = [];
    this.clienteSeleccionado = {
      nombre: 'Seleccione un cliente',
      identificacion: '',
      email: '',
      celulares: '',
      direccion: '',
      telefonoFijo: '',
      codigo: 0,
      imagen: null,
      ciudad: ''
    };
    this.displayedColumns = ['selected', 'codigo', 'codigoComprobante', 'totalFactura', 'saldo', 'abono', 'almacen'];
    this.Movimiento = ['Seleccione', 'Efectivo', 'T.Credito', 'T.Debito', 'Cheque', 'Banco'];
    this.movimientoSeleccionado = 'Seleccione';
    this.Deduccion = [{
      valor: 'Descuento',
      descripcion: "Descuento"
    }, {
      valor: 'Rete Iva',
      descripcion: "Averias"
    }, {
      valor: 'Rete Ica',
      descripcion: "Fletes"
    }, {
      valor: 'Rete Fuente',
      descripcion: "Rete Fuente"
    }];
    this.opcionesBanco = [];
    this.deduccionSeleccionada = 'Seleccione';
    this.displayedColumnsTipoPago = ['Movimiento', 'valor', 'acciones'];
    this.valor = 0;
    this.valorDeduccion = 0;
    this.TipoPago = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource([]);
    this.movimientoTipoPago = {
      Movimiento: 'Seleccione un cliente',
      valor: 0,
      opcionBanco: ''
    };
    this.factura = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource([]);
    this.codigo = 0;
    this.codigoComprobante = 0;
    this.totalFactura = 0;
    this.saldo = 0;
    this.nivel = 0;
    this.comprobante = [];
    this.totalRecibo = 0;
    this.totalCartera = 0;
    this.total_registros = 0;
    this.abono = 0;
    this.selected = false;
    this.codigoslect = 0;
    this.totalTiposPago = 0;
    this.descuento = 0;
    this.bancoSeleccinado = '';
    this.listadoOpcionesBancosElegido = [];
    this.servifactura.conectar();
  }

  ngOnInit() {
    this.traercomprobantes();
    this.servifactura.traerbancos().subscribe(datos => {
      this.opcionesBanco = datos.respuesta;
      this.nit = datos.nit;
      this.razon = datos.razon;
      this.direccion = datos.direccion;
    });
  }

  autocompletarinputclient() {
    if (this.cliente === '') {
      this.clientes = [];
    } else {
      this.socketproduct.obtenerInfo('terceros', 'pazzioli-pos-3', {
        metodo: 'CONSULTAR',
        condicion: 'nombres',
        consulta: 'TERCEROS',
        canalserver: 'terceros',
        datoCondicion: this.cliente
      }).subscribe(dato => {
        if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
          this.clientes = JSON.parse(dato).mensajePeticion;
        }
      });
    }
  }

  seleccionarCliente(cliente) {
    this.clienteSeleccionado.nombre = cliente.razonSocial;
    this.clienteSeleccionado.identificacion = cliente.identificacion;
    this.clienteSeleccionado.email = cliente.email;
    this.clienteSeleccionado.celulares = cliente.celulares;
    this.clienteSeleccionado.direccion = cliente.direccion;
    this.clienteSeleccionado.telefonoFijo = cliente.telefonoFijo;
    this.clienteSeleccionado.codigo = cliente.codigo;
    this.clienteSeleccionado.imagen = cliente.imagen || null;
    this.clienteSeleccionado.ciudad = cliente.municipio;
    this.clientes = []; //  this.Deduccion=[];
    //this.Movimiento=[];

    this.abono = 0;
    this.bancoSeleccinado = '';
    this.valor = 0;
    this.valorDeduccion = 0;
    this.totalRecibo = 0;
    this.totalTiposPago = 0;
    this.descuento = 0;
    this.movimientoSeleccionado = 'Seleccione';
    this.deduccionSeleccionada = 'Seleccione';
    this.movimientoTipoPago = {
      Movimiento: '',
      valor: 0,
      opcionBanco: ''
    }; //this.Movimiento=[]

    this.listadoOpcionesBancosElegido = [];
    this.servifactura.traerfacturas(this.pagina, this.clienteSeleccionado.codigo).subscribe(data => {
      if (data.respuesta.length > 0) {
        this.pagina = 1;
        this.total_registros = data.nregistros;
        this.factura.data = data.respuesta;
      }
    });
  }

  traercomprobantes() {
    this.servifactura.traerparametroscomprobante().subscribe(datos => {
      this.comprobante = datos.respuesta;
    });
  }

  seleccionaritem(item) {
    /*    console.log(this.TipoPago.data);*/
    if (item === 'Seleccione') {
      this.snackBar.open('No ha seleccionado un tipo de pago', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      this.valor = 0;
      return;
    }

    if (this.totalRecibo === 0) {
      this.snackBar.open('No ha definido valores en las facturas', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    if (this.valor <= 0) {
      this.snackBar.open('El valor debe ser mayor a cero.', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      this.valor = 0;
      this.movimientoSeleccionado = null;
      setTimeout(() => {
        this.movimientoSeleccionado = 'Seleccione';
      });
      return;
    }

    if (this.valor > this.totalRecibo || this.valor + this.totalTiposPago + this.descuento > this.totalRecibo) {
      this.snackBar.open('El valor no debe ser mayor al total del recibo.', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      this.valor = 0;
      this.movimientoSeleccionado = null;
      setTimeout(() => {
        this.movimientoSeleccionado = 'Seleccione';
      });
      return;
    }

    const index = this.TipoPago.data.findIndex(data => data.Movimiento === item);

    if (index >= 0) {
      this.TipoPago.data[index].valor = this.valor;
    } else {
      const nuevoDato = {
        Movimiento: item,
        valor: this.valor
      };
      const datosActuales = this.TipoPago.data;
      datosActuales.push(nuevoDato);
      this.TipoPago.data = [...datosActuales];
    }

    this.totalizarTiposPago();
    this.valor = 0;
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
    this.movimientoSeleccionado = null;
    setTimeout(() => {
      this.movimientoSeleccionado = 'Seleccione';
    });
  }

  seleccionaritemDeduccion(item) {
    /*    console.log(this.TipoPago.data);*/
    if (item === 'Seleccione') {
      this.snackBar.open('No ha seleccionado un tipo de pago', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      this.valorDeduccion = 0;
      return;
    }

    if (this.totalRecibo === 0) {
      this.snackBar.open('No ha definido valores en las facturas', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      this.valorDeduccion = 0;
      this.deduccionSeleccionada = null;
      setTimeout(() => {
        this.deduccionSeleccionada = 'Seleccione';
      });
      return;
    }

    if (this.valorDeduccion <= 0) {
      this.snackBar.open('El valor debe ser mayor a cero.', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    if (this.valorDeduccion > this.totalRecibo || this.valorDeduccion + this.totalTiposPago + this.descuento > this.totalRecibo) {
      this.snackBar.open('El valor no debe ser mayor al total del recibo.', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      this.valorDeduccion = 0;
      this.valor = 0;
      this.deduccionSeleccionada = null;
      setTimeout(() => {
        this.deduccionSeleccionada = 'Seleccione';
      });
      this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
      return;
    }

    const nuevoDato = {
      Movimiento: item,
      valor: -this.valorDeduccion
    };
    const datosActuales = this.TipoPago.data;
    datosActuales.push(nuevoDato);
    this.TipoPago.data = [...datosActuales];
    this.totalizarDeducciones();
    this.valor = 0;
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
    this.deduccionSeleccionada = null;
    setTimeout(() => {
      this.deduccionSeleccionada = 'Seleccione';
    });
  }

  totalizarDeducciones() {
    let contador = 0;
    this.TipoPago.data.forEach(data => {
      if (data.valor < 0) {
        contador += data.valor * -1;
      }
    });
    this.descuento = contador;
  }

  totalizarRecibo(valor) {
    let subvalor = valor.abono;

    if (valor.abono > valor.saldo) {
      this.snackBar.open('El valor debe menor o igual al saldo de la factura.', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return;
    }

    let index = this.factura.data.findIndex(datos => datos.codigo === valor.codigo && datos.codigoComprobante === valor.codigoComprobante);
    this.factura.data[index].abono == valor.abono;
    this.totalizarPanelReciboIngreso();
    this.valor = 0;
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
    this.movimientoSeleccionado = 'Seleccione';
  }

  onCheckChange(element) {
    if (!element.selected) {
      element.abono = 0;
    }

    this.totalizarPanelReciboIngreso();
  }

  totalizarPanelReciboIngreso() {
    let acomulador = 0;
    const totalTemp = this.factura.data.reduce((sum, val) => sum + Number(val.abono), 0);
    this.TipoPago.data.forEach(data => {
      if (data.valor < 0) {
        acomulador += data.valor;
      }
    });
    this.totalRecibo = totalTemp + (acomulador + this.descuento);
    this.valor = 0;
    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
    this.movimientoSeleccionado = 'Seleccione';
  }

  totalizarTiposPago() {
    let contador = 0;
    this.TipoPago.data.forEach(data => {
      if (data.valor > 0) {
        contador += data.valor;
      }
    });
    this.totalTiposPago = contador;
  }

  eliminarTipoPago(item) {
    const index = this.TipoPago.data.findIndex(data => data.Movimiento === item.Movimiento);
    this.TipoPago.data.splice(index, 1);
    this.TipoPago.data = this.TipoPago.data;

    this.TipoPago._updateChangeSubscription();

    this.totalizarTiposPago();
    this.valor = 0;

    if (item.valor < 0) {
      this.descuento -= item.valor * -1;
    }

    this.valor = this.totalRecibo - (this.totalTiposPago + this.descuento);
    this.movimientoSeleccionado = 'Seleccione';
  }

  seleccionarOpcionBanco(banco, item) {
    if (banco === 'Seleccione Banco' || banco === 'Seleccione') {
      this.snackBar.open('No es una opcion de banco correcta', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    }

    const nuevoDato = {
      Movimiento: item,
      valor: this.valor,
      opcionBanco: banco
    };
    item.opcionBanco = banco;
  }

  crearReciboIngreso() {
    var _this = this;

    if (this.totalRecibo === this.totalTiposPago + this.descuento) {
      const dialogrfrecibo = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
        data: {
          boton1: 'No',
          boton: 'Si',
          mensaje: 'Seguro desea crear este recibo de ingreso',
          tipo: 'question'
        },
        disableClose: false
      });
      dialogrfrecibo.afterClosed().subscribe(data => {
        if (!data) {
          return;
        } else {
          let concepto = 'Cancela/Abono: ';
          let facturasabonadas = this.factura.data.filter(data => {
            if (data.abono > 0 && data.selected === true) {
              concepto += ' ' + data.codigo + ' ' + data.nombre;
              return data;
            }
          });
          console.log('cliente seleccionado :', JSON.stringify(this.clienteSeleccionado)); // si falla, este es el problema

          console.log('tipo pago', JSON.stringify(this.TipoPago.data)); // si falla, este

          const datapeticion = {
            totalrecibo: this.totalRecibo,
            cliente: this.clienteSeleccionado,
            tipopago: this.TipoPago.data,
            facturas: facturasabonadas,
            concepto,
            descuento: this.descuento,
            observacion: ''
          };

          if (this.totalRecibo > 0 && this.totalTiposPago > 0) {
            this.servifactura.crearreciboingreso(datapeticion).subscribe(datos => {
              this.dialog.open(src_app_angular_material_alertaob__WEBPACK_IMPORTED_MODULE_4__.DialogoAlertaob, {
                data: {
                  boton: 'Continuar',
                  mensaje: 'Escribe información más detallada sobre el pedido',
                  tipo: 'question',
                  input: true,
                  type: 'text',
                  inputText: 'Ingresa observación'
                },
                disableClose: false
              }).afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(data3 => {
                if (data3 === undefined) return; // Evita continuar si el usuario cerró el diálogo sin confirmar

                const dialogrf = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
                  data: {
                    boton: 'Ok',
                    mensaje: datos.mensaje,
                    tipo: 'done'
                  },
                  disableClose: false
                });
                dialogrf.afterClosed().subscribe( /*#__PURE__*/function () {
                  var _ref = (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                    if (data) {
                      let pdf = yield (0,_pdfingresos_pdf__WEBPACK_IMPORTED_MODULE_2__.generatePDFingre)({
                        razon: _this.razon,
                        nit: _this.nit,
                        direccion: _this.direccion,
                        recibidoDe: datos.datos[0].recibidoDe,
                        fechaIngreso: datos.datos[0].fechaIngreso,
                        valor: datos.datos[0].valor,
                        vendedor: datos.vendedor,
                        usuario: datos.usuario,
                        saldoactual: datos.saldoactual,
                        tipospagos: _this.TipoPago,
                        codigoRI: datos.datos[0].codigo,
                        direccionc: _this.clienteSeleccionado.direccion,
                        identificacion: _this.clienteSeleccionado.identificacion,
                        concepto,
                        nombreComprobanteRI: datos.nombreComprobanteRI,
                        movimiento: _this.TipoPago.data,
                        deduccion: _this.descuento,
                        comprobante: _this.comprobante,
                        observacion: "         " + data3
                      });

                      _this.servifactura.enviaremail({
                        cliente: _this.clienteSeleccionado,
                        pdf: pdf,
                        email: ''
                      }).subscribe(datos => {
                        if (datos.estadoPeticion === 'Done') {
                          window.location.reload();
                        } else {
                          window.location.reload();
                        }
                      });
                    }
                  });

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
              });
            });
          } else {
            this.snackBar.open('No hay datos cargados correctamente para crear el recibo', 'Cerrar', {
              duration: 3000,
              panelClass: ['snackbar-error']
            });
          }
        }
      });
    } else {
      this.snackBar.open('El total de los tipo de pago mas las deducciones no es igual al total del recibo', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    }
  }

  generarpdfingreso() {
    (0,_pdfingresos_pdf__WEBPACK_IMPORTED_MODULE_2__.generatePDFingre)({
      razon: this.razon,
      nit: this.nit,
      direccion: this.direccion
    });
  }

  verrecibosdepago() {
    const dialogref = this.dialog.open(src_app_angular_material_alertarecibo__WEBPACK_IMPORTED_MODULE_3__.Recibopago, {
      width: '100%',
      height: '100vw',
      maxHeight: '90vh'
    });
  }

  trackByIndex(index, item) {
    return index;
  }

}

RecibodecajaComponent.ɵfac = function RecibodecajaComponent_Factory(t) {
  return new (t || RecibodecajaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_5__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_7__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
};

RecibodecajaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: RecibodecajaComponent,
  selectors: [["app-recibodecaja"]],
  decls: 104,
  vars: 20,
  consts: [[1, "tituloP", 2, "margin-top", "15px"], [1, "row", "loader-content", 2, "padding-top", "20px"], [1, "buscaliente"], [1, "search-card", "col-12", 2, "max-width", "70%", "max-height", "fit-content"], [1, "search"], [1, "m-0"], [1, "row"], [1, "col-12"], ["appearance", "fill", "search", ""], ["matInput", "", "placeholder", "", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], [1, "overflow-content", 2, "height", "auto"], [1, "clientelist", 3, "multiple"], ["shoes", ""], ["style", "width: calc(100% - 32px); margin: auto; border-radius: 8px", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "b-primary", "icon-card", 2, "height", "50px", "margin-top", "2px"], [2, "border", "none !important"], [1, "client-name"], [1, "tabla-scroll", 2, "width", "100%", "margin-top", "10px", "overflow", "scroll", "max-height", "400px"], ["mat-table", "", 1, "mat-elevation-z8", "col-12", "tab-factura", 3, "dataSource"], ["matColumnDef", "selected"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigo"], ["matColumnDef", "codigoComprobante"], ["matColumnDef", "totalFactura"], ["matColumnDef", "saldo"], ["matColumnDef", "abono"], ["mat-cell", "", 4, "matCellDef", "matCellDefIndex"], ["matColumnDef", "almacen"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "ValorPago", 2, "margin-top", "20px", "display", "flex", "row-gap", "10px", "column-gap", "10px", "width", "100%"], [1, "inputmetodos"], [2, "margin-top", "10px"], [2, "margin-left", "10px", "margin-top", "15px"], [2, "font-size", "1rem"], ["matInput", "", "placeholder", "", "name", "inputValor", "id", "valor", "type", "number", 3, "ngModel", "ngModelChange"], ["inValor", ""], [2, "margin-left", "10px", "margin-top", "15px", 3, "value", "valueChange", "selectionChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [2, "margin-top", "20px"], [2, "margin-left", "10px", "margin-top", "15px", 3, "ngModel", "ngModelChange", "selectionChange"], [1, "tabla-scroll-tp", 2, "margin-top", "5px", "margin-left", "0", "flex", "0 0 73%"], [2, "overflow", "auto", "min-width", "500px", "max-height", "300px"], ["matColumnDef", "Movimiento"], ["matColumnDef", "valor"], ["matColumnDef", "acciones"], ["mat-cell", "", "style", "display: flex; align-content: end;justify-content: end; padding:6px ;", 4, "matCellDef"], [2, "margin-top", "20px", "margin-right", "auto", "display", "flex", "flex-wrap", "wrap"], [1, "totalTipoPago"], [2, "display", "flex", "justify-content", "end", "align-items", "center", "margin-top", "5px", "padding", "5px"], [1, "generarR", 3, "click"], [2, "margin-top", "20px", "margin-right", "auto", "display", "flex"], [1, "totalRecibo"], [1, "botonesactions", 2, "display", "flex", "flex", "1", "justify-content", "space-between"], ["mat-flat-button", "", "color", "primary", "full-button", "", "pedido", "", 1, "botonotions", 2, "box-shadow", "4px 4px 10px rgba(0, 0, 0, 0.2) !important", 3, "click"], [2, "width", "calc(100% - 32px)", "margin", "auto", "border-radius", "8px", 3, "value", "click"], ["mat-line", "", 1, "bold"], ["mat-line", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "placeholder", "Abono", 3, "ngModel", "disabled", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 2, "color", "#5db5f2", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-cell", "", 2, "display", "flex", "align-content", "end", "justify-content", "end", "padding", "6px"], ["style", "margin-left: 10px; margin-top: 15px", "placeholder", "Seleccione Banco", 3, "ngModel", "ngModelChange", "selectionChange", 4, "ngIf"], ["mat-icon-button", "", "color", "socondary", 3, "click"], ["src", "../../../../../assets/images/delete_button.svg", 1, "imgicon"], ["placeholder", "Seleccione Banco", 2, "margin-left", "10px", "margin-top", "15px", 3, "ngModel", "ngModelChange", "selectionChange"]],
  template: function RecibodecajaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "mat-card-title", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Recibo de caja");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "mat-card", 3)(6, "mat-card-header", 4)(7, "mat-card-title", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "mat-form-field", 8)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Buscar cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RecibodecajaComponent_Template_input_ngModelChange_14_listener() {
        return ctx.autocompletarinputclient();
      })("ngModelChange", function RecibodecajaComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.cliente = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-card-content", 11)(18, "mat-selection-list", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RecibodecajaComponent_mat_list_option_20_Template, 8, 3, "mat-list-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-card", 15)(22, "mat-card-header", 16)(23, "mat-card-title", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 18)(26, "table", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](27, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, RecibodecajaComponent_th_28_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, RecibodecajaComponent_td_29_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](30, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, RecibodecajaComponent_th_31_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, RecibodecajaComponent_td_32_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](33, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, RecibodecajaComponent_th_34_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, RecibodecajaComponent_td_35_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](36, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, RecibodecajaComponent_th_37_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, RecibodecajaComponent_td_38_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](39, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, RecibodecajaComponent_th_40_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, RecibodecajaComponent_td_41_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](42, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, RecibodecajaComponent_th_43_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, RecibodecajaComponent_td_44_Template, 6, 2, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](45, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, RecibodecajaComponent_th_46_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, RecibodecajaComponent_td_47_Template, 1, 0, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, RecibodecajaComponent_tr_48_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, RecibodecajaComponent_tr_49_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 32)(51, "div", 33)(52, "div", 34)(53, "mat-label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Deduccion: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-form-field", 8)(56, "mat-label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Valor");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "input", 37, 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RecibodecajaComponent_Template_input_ngModelChange_58_listener($event) {
        return ctx.valorDeduccion = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-select", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function RecibodecajaComponent_Template_mat_select_valueChange_60_listener($event) {
        return ctx.deduccionSeleccionada = $event;
      })("selectionChange", function RecibodecajaComponent_Template_mat_select_selectionChange_60_listener($event) {
        return ctx.seleccionaritemDeduccion($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Seleccione");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, RecibodecajaComponent_mat_option_63_Template, 2, 2, "mat-option", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 42)(65, "mat-label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Tipo Pago: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "mat-form-field", 8)(68, "mat-label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Valor");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "input", 37, 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RecibodecajaComponent_Template_input_ngModelChange_70_listener($event) {
        return ctx.valor = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "mat-select", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RecibodecajaComponent_Template_mat_select_ngModelChange_72_listener($event) {
        return ctx.movimientoSeleccionado = $event;
      })("selectionChange", function RecibodecajaComponent_Template_mat_select_selectionChange_72_listener($event) {
        return ctx.seleccionaritem($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, RecibodecajaComponent_mat_option_73_Template, 2, 2, "mat-option", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 44)(75, "div", 45)(76, "table", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](77, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, RecibodecajaComponent_th_78_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, RecibodecajaComponent_td_79_Template, 2, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](80, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, RecibodecajaComponent_th_81_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](82, RecibodecajaComponent_td_82_Template, 3, 1, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](83, 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, RecibodecajaComponent_th_84_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](85, RecibodecajaComponent_td_85_Template, 4, 1, "td", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, RecibodecajaComponent_tr_86_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, RecibodecajaComponent_tr_87_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 50)(89, "div")(90, "span", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div")(93, "span", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 52)(96, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecibodecajaComponent_Template_button_click_96_listener() {
        return ctx.verrecibosdepago();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, " Recibos de pago ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 54)(99, "mat-card-title", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "div", 56)(102, "button", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RecibodecajaComponent_Template_button_click_102_listener() {
        return ctx.crearReciboIngreso();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, " Realizar Recibo Ingreso ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cliente);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("multiple", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.clientes);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.clienteSeleccionado.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.factura.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.valorDeduccion);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.deduccionSeleccionada);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "Seleccione");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.Deduccion);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.valor);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.movimientoSeleccionado);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.Movimiento);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.TipoPago);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsTipoPago);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsTipoPago);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total tipos pago: $ ", ctx.totalTiposPago.toLocaleString("de-DE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total descuento: $ ", ctx.descuento.toLocaleString("de-DE"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total Recibo: $ ", ctx.totalRecibo.toLocaleString("de-DE"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatSelectionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListOption, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow],
  styles: [".tituloP[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n}\n\n.buscaliente[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  height: 100%;\n  overflow-x: hidden;\n}\n\n.buscaliente[_ngcontent-%COMP%]:nth-child(1) {\n  flex: 0 0 100%;\n  align-items: center;\n}\n\n.tabla-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tab-factura[_ngcontent-%COMP%] {\n  min-width: 600px;\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.ValorPago[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap !important;\n}\n\n.inputmetodos[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n}\n\n@media (max-width: 836px) {\n  .inputmetodos[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n  }\n}\n\n@media (max-width: 751px) {\n  .inputmetodos[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n  }\n  .tabla-scroll-tp[_ngcontent-%COMP%] {\n    flex: 0 0 100% !important;\n  }\n  .tabla-scroll-tp[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    width: 100%;\n  }\n}\n\n@media (max-width: 572px) {\n  .tabla-scroll-tp[_ngcontent-%COMP%] {\n    flex: 0 0 50% !important;\n  }\n  .tabla-scroll-tp[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    max-width: 400px !important;\n  }\n}\n\n.generarR[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 10px;\n  transition: 1s all;\n}\n\n.generarR[_ngcontent-%COMP%]:active {\n  background-color: rgba(128, 139, 150, 0.8);\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font: 400 17px/20px Roboto, \"Helvetica Neue\", sans-serif !important;\n  letter-spacing: normal !important;\n  margin-bottom: 0;\n}\n\n.totalTipoPago[_ngcontent-%COMP%] {\n  font: 400 17px/20px Roboto, \"Helvetica Neue\", sans-serif !important;\n  letter-spacing: normal !important;\n  margin-bottom: 0;\n  color: rgba(0, 0, 0, 0.87);\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lib2RlY2FqYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDQyxnQkFBQTtFQUNHLGFBQUE7RUFFQSwwQkFBQTtBQUhKOztBQU9BO0VBQ0ksYUFBQTtBQUpKOztBQU1BO0VBQ0U7SUFDRSxhQUFBO0VBSEY7QUFDRjs7QUFPQTtFQUNFO0lBQ0UsY0FBQTtFQUxGO0VBUUE7SUFDRSx5QkFBQTtFQU5GO0VBT0M7SUFDQywwQkFBQTtJQUNBLFdBQUE7RUFMRjtBQUNGOztBQVVBO0VBQ0U7SUFDRSx3QkFBQTtFQVJGO0VBVUU7SUFDRSwyQkFBQTtFQVJKO0FBQ0Y7O0FBY0E7RUFDRSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFnQkE7RUFDRSwwQ0FBQTtBQWJGOztBQWlCQTtFQUNFLG1FQUFBO0VBQ0UsaUNBQUE7RUFDRixnQkFBQTtBQWRGOztBQWlCQTtFQUNJLG1FQUFBO0VBQ0EsaUNBQUE7RUFDRixnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUFkRiIsImZpbGUiOiJyZWNpYm9kZWNhamEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvUHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXNjYWxpZW50ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLmJ1c2NhbGllbnRlOm50aC1jaGlsZCgxKXtcclxuICBmbGV4OiAwIDAgMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG4udGFibGEtc2Nyb2xse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLnRhYi1mYWN0dXJhe1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLlZhbG9yUGFnb3tcclxuIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICBcclxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmlucHV0bWV0b2Rvc3tcclxuICAgIGZsZXg6MCAwIDI1JTtcclxuICB9XHJcbkBtZWRpYSAobWF4LXdpZHRoOjgzNnB4KSB7XHJcbiAgLmlucHV0bWV0b2Rvc3tcclxuICAgIGZsZXg6MCAwIDI1JTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc1MXB4KSB7XHJcbiAgLmlucHV0bWV0b2Rvc3tcclxuICAgIGZsZXg6MCAwIDEwMCU7XHJcbiAgfVxyXG5cclxuICAudGFibGEtc2Nyb2xsLXRwe1xyXG4gICAgZmxleDowIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICBkaXZ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjEwMCVcclxuICAgfVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTcycHgpIHtcclxuICAudGFibGEtc2Nyb2xsLXRwe1xyXG4gICAgZmxleDowIDAgNTAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgZGl2e1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgXHJcbiAgICAgfVxyXG4gIFxyXG4gIH1cclxufVxyXG5cclxuLmdlbmVyYXJSe1xyXG4gIGJvcmRlcjogbm9uZTtcclxuIFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0cmFuc2l0aW9uOiAxcyBhbGw7XHJcbn1cclxuXHJcbi5nZW5lcmFyUjphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEzOSwgMTUwICwwLjgpO1xyXG5cclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxle1xyXG4gIGZvbnQ6IDQwMCAxN3B4IC8gMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206MCA7XHJcbn1cclxuXHJcbi50b3RhbFRpcG9QYWdve1xyXG4gICAgZm9udDogNDAwIDE3cHggLyAyMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTowIDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 47998:
/*!********************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/redireccion/redireccion.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedireccionComponent": () => (/* binding */ RedireccionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class RedireccionComponent {
    constructor(router) {
        router.navigateByUrl('admin/inicial');
    }
    ngOnInit() {
    }
}
RedireccionComponent.ɵfac = function RedireccionComponent_Factory(t) { return new (t || RedireccionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
RedireccionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedireccionComponent, selectors: [["app-redireccion"]], decls: 1, vars: 0, template: function RedireccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjY2lvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2743:
/*!************************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/common/HTMLCanvasElementLuminanceSource.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLCanvasElementLuminanceSource": () => (/* binding */ HTMLCanvasElementLuminanceSource)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();


/**/

var HTMLCanvasElementLuminanceSource =
/** @class */
function (_super) {
  __extends(HTMLCanvasElementLuminanceSource, _super);

  function HTMLCanvasElementLuminanceSource(canvas) {
    var _this = _super.call(this, canvas.width, canvas.height) || this;

    _this.canvas = canvas;
    _this.tempCanvasElement = null;
    _this.buffer = HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData(canvas);
    return _this;
  }

  HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData = function (canvas) {
    var canvasCtx;

    try {
      canvasCtx = canvas.getContext('2d', {
        willReadFrequently: true
      });
    } catch (e) {
      canvasCtx = canvas.getContext('2d');
    }

    if (!canvasCtx) {
      throw new Error('Couldn\'t get canvas context.');
    }

    var imageData = canvasCtx.getImageData(0, 0, canvas.width, canvas.height);
    return HTMLCanvasElementLuminanceSource.toGrayscaleBuffer(imageData.data, canvas.width, canvas.height);
  };

  HTMLCanvasElementLuminanceSource.toGrayscaleBuffer = function (imageBuffer, width, height) {
    var grayscaleBuffer = new Uint8ClampedArray(width * height);

    for (var i = 0, j = 0, length_1 = imageBuffer.length; i < length_1; i += 4, j++) {
      var gray = void 0;
      var alpha = imageBuffer[i + 3]; // The color of fully-transparent pixels is irrelevant. They are often, technically, fully-transparent
      // black (0 alpha, and then 0 RGB). They are often used, of course as the "white" area in a
      // barcode image. Force any such pixel to be white:

      if (alpha === 0) {
        gray = 0xFF;
      } else {
        var pixelR = imageBuffer[i];
        var pixelG = imageBuffer[i + 1];
        var pixelB = imageBuffer[i + 2]; // .299R + 0.587G + 0.114B (YUV/YIQ for PAL and NTSC),
        // (306*R) >> 10 is approximately equal to R*0.299, and so on.
        // 0x200 >> 10 is 0.5, it implements rounding.
        // tslint:disable-next-line:no-bitwise

        gray = 306 * pixelR + 601 * pixelG + 117 * pixelB + 0x200 >> 10;
      }

      grayscaleBuffer[j] = gray;
    }

    return grayscaleBuffer;
  };

  HTMLCanvasElementLuminanceSource.prototype.getRow = function (y
  /*int*/
  , row) {
    if (y < 0 || y >= this.getHeight()) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException('Requested row is outside the image: ' + y);
    }

    var width = this.getWidth();
    var start = y * width;

    if (row === null) {
      row = this.buffer.slice(start, start + width);
    } else {
      if (row.length < width) {
        row = new Uint8ClampedArray(width);
      } // The underlying raster of image consists of bytes with the luminance values
      // TODO: can avoid set/slice?


      row.set(this.buffer.slice(start, start + width));
    }

    return row;
  };

  HTMLCanvasElementLuminanceSource.prototype.getMatrix = function () {
    return this.buffer;
  };

  HTMLCanvasElementLuminanceSource.prototype.isCropSupported = function () {
    return true;
  };

  HTMLCanvasElementLuminanceSource.prototype.crop = function (left
  /*int*/
  , top
  /*int*/
  , width
  /*int*/
  , height
  /*int*/
  ) {
    _super.prototype.crop.call(this, left, top, width, height);

    return this;
  };
  /**
   * This is always true, since the image is a gray-scale image.
   *
   * @return true
   */


  HTMLCanvasElementLuminanceSource.prototype.isRotateSupported = function () {
    return true;
  };

  HTMLCanvasElementLuminanceSource.prototype.rotateCounterClockwise = function () {
    this.rotate(-90);
    return this;
  };

  HTMLCanvasElementLuminanceSource.prototype.rotateCounterClockwise45 = function () {
    this.rotate(-45);
    return this;
  };

  HTMLCanvasElementLuminanceSource.prototype.invert = function () {
    return new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.InvertedLuminanceSource(this);
  };

  HTMLCanvasElementLuminanceSource.prototype.getTempCanvasElement = function () {
    if (null === this.tempCanvasElement) {
      var tempCanvasElement = this.canvas.ownerDocument.createElement('canvas');
      tempCanvasElement.width = this.canvas.width;
      tempCanvasElement.height = this.canvas.height;
      this.tempCanvasElement = tempCanvasElement;
    }

    return this.tempCanvasElement;
  };

  HTMLCanvasElementLuminanceSource.prototype.rotate = function (angle) {
    var tempCanvasElement = this.getTempCanvasElement();

    if (!tempCanvasElement) {
      throw new Error('Could not create a Canvas element.');
    }

    var angleRadians = angle * HTMLCanvasElementLuminanceSource.DEGREE_TO_RADIANS; // Calculate and set new dimensions for temp canvas

    var width = this.canvas.width;
    var height = this.canvas.height;
    var newWidth = Math.ceil(Math.abs(Math.cos(angleRadians)) * width + Math.abs(Math.sin(angleRadians)) * height);
    var newHeight = Math.ceil(Math.abs(Math.sin(angleRadians)) * width + Math.abs(Math.cos(angleRadians)) * height);
    tempCanvasElement.width = newWidth;
    tempCanvasElement.height = newHeight;
    var tempContext = tempCanvasElement.getContext('2d');

    if (!tempContext) {
      throw new Error('Could not create a Canvas Context element.');
    } // Draw at center of temp canvas to prevent clipping of image data


    tempContext.translate(newWidth / 2, newHeight / 2);
    tempContext.rotate(angleRadians);
    tempContext.drawImage(this.canvas, width / -2, height / -2);
    this.buffer = HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData(tempCanvasElement);
    return this;
  };

  HTMLCanvasElementLuminanceSource.DEGREE_TO_RADIANS = Math.PI / 180;
  return HTMLCanvasElementLuminanceSource;
}(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.LuminanceSource);



/***/ }),

/***/ 62161:
/*!**************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/common/HTMLVisualMediaElement.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 27446:
/*!********************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/common/IScannerControls.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 94921:
/*!*******************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/common/navigator-utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canEnumerateDevices": () => (/* binding */ canEnumerateDevices),
/* harmony export */   "hasNavigator": () => (/* binding */ hasNavigator)
/* harmony export */ });
/**
 * If navigator is present.
 */
function hasNavigator() {
  return typeof navigator !== 'undefined';
}
/**
 * If mediaDevices under navigator is supported.
 */

function isMediaDevicesSupported() {
  return hasNavigator() && !!navigator.mediaDevices;
}
/**
 * If enumerateDevices under navigator is supported.
 */


function canEnumerateDevices() {
  return !!(isMediaDevicesSupported() && navigator.mediaDevices.enumerateDevices);
}

/***/ }),

/***/ 80749:
/*!**************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeFormat": () => (/* reexport safe */ _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormat),
/* harmony export */   "BrowserAztecCodeReader": () => (/* reexport safe */ _readers_BrowserAztecCodeReader__WEBPACK_IMPORTED_MODULE_4__.BrowserAztecCodeReader),
/* harmony export */   "BrowserCodeReader": () => (/* reexport safe */ _readers_BrowserCodeReader__WEBPACK_IMPORTED_MODULE_6__.BrowserCodeReader),
/* harmony export */   "BrowserCodeSvgWriter": () => (/* reexport safe */ _writers_BrowserCodeSvgWriter__WEBPACK_IMPORTED_MODULE_12__.BrowserCodeSvgWriter),
/* harmony export */   "BrowserDatamatrixCodeReader": () => (/* reexport safe */ _readers_BrowserDatamatrixCodeReader__WEBPACK_IMPORTED_MODULE_7__.BrowserDatamatrixCodeReader),
/* harmony export */   "BrowserMultiFormatOneDReader": () => (/* reexport safe */ _readers_BrowserMultiFormatOneDReader__WEBPACK_IMPORTED_MODULE_5__.BrowserMultiFormatOneDReader),
/* harmony export */   "BrowserMultiFormatReader": () => (/* reexport safe */ _readers_BrowserMultiFormatReader__WEBPACK_IMPORTED_MODULE_8__.BrowserMultiFormatReader),
/* harmony export */   "BrowserPDF417Reader": () => (/* reexport safe */ _readers_BrowserPDF417Reader__WEBPACK_IMPORTED_MODULE_9__.BrowserPDF417Reader),
/* harmony export */   "BrowserQRCodeReader": () => (/* reexport safe */ _readers_BrowserQRCodeReader__WEBPACK_IMPORTED_MODULE_10__.BrowserQRCodeReader),
/* harmony export */   "BrowserQRCodeSvgWriter": () => (/* reexport safe */ _writers_BrowserQRCodeSvgWriter__WEBPACK_IMPORTED_MODULE_13__.BrowserQRCodeSvgWriter),
/* harmony export */   "HTMLCanvasElementLuminanceSource": () => (/* reexport safe */ _common_HTMLCanvasElementLuminanceSource__WEBPACK_IMPORTED_MODULE_1__.HTMLCanvasElementLuminanceSource)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var _common_HTMLCanvasElementLuminanceSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/HTMLCanvasElementLuminanceSource */ 2743);
/* harmony import */ var _common_HTMLVisualMediaElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/HTMLVisualMediaElement */ 62161);
/* harmony import */ var _common_IScannerControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/IScannerControls */ 27446);
/* harmony import */ var _readers_BrowserAztecCodeReader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./readers/BrowserAztecCodeReader */ 47900);
/* harmony import */ var _readers_BrowserMultiFormatOneDReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./readers/BrowserMultiFormatOneDReader */ 56985);
/* harmony import */ var _readers_BrowserCodeReader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./readers/BrowserCodeReader */ 99964);
/* harmony import */ var _readers_BrowserDatamatrixCodeReader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./readers/BrowserDatamatrixCodeReader */ 53273);
/* harmony import */ var _readers_BrowserMultiFormatReader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readers/BrowserMultiFormatReader */ 30572);
/* harmony import */ var _readers_BrowserPDF417Reader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./readers/BrowserPDF417Reader */ 98951);
/* harmony import */ var _readers_BrowserQRCodeReader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./readers/BrowserQRCodeReader */ 94015);
/* harmony import */ var _readers_IBrowserCodeReaderOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./readers/IBrowserCodeReaderOptions */ 57785);
/* harmony import */ var _writers_BrowserCodeSvgWriter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./writers/BrowserCodeSvgWriter */ 90980);
/* harmony import */ var _writers_BrowserQRCodeSvgWriter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./writers/BrowserQRCodeSvgWriter */ 50332);
// public API
// core
 // common



 // readers








 // writers




/***/ }),

/***/ 47900:
/*!***************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/readers/BrowserAztecCodeReader.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserAztecCodeReader": () => (/* binding */ BrowserAztecCodeReader)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var _BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserCodeReader */ 99964);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



/**
 * Aztec Code reader to use from browser.
 *
 * @class BrowserAztecCodeReader
 * @extends {BrowserCodeReader}
 */

var BrowserAztecCodeReader =
/** @class */
function (_super) {
  __extends(BrowserAztecCodeReader, _super);
  /**
   * Creates an instance of BrowserAztecCodeReader.
   */


  function BrowserAztecCodeReader(hints, options) {
    return _super.call(this, new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.AztecCodeReader(), hints, options) || this;
  }

  return BrowserAztecCodeReader;
}(_BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader);



/***/ }),

/***/ 99964:
/*!**********************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/readers/BrowserCodeReader.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserCodeReader": () => (/* binding */ BrowserCodeReader)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var _common_HTMLCanvasElementLuminanceSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/HTMLCanvasElementLuminanceSource */ 2743);
/* harmony import */ var _common_navigator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/navigator-utils */ 94921);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __values = undefined && undefined.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};




var defaultOptions = {
  delayBetweenScanAttempts: 500,
  delayBetweenScanSuccess: 500,
  tryPlayVideoTimeout: 5000
};
/**
 * Base class for browser code reader.
 */

var BrowserCodeReader =
/** @class */
function () {
  /**
   * Creates an instance of BrowserCodeReader.
   * @param {Reader} reader The reader instance to decode the barcode
   * @param hints Holds the hints the user sets for the Reader.
   */
  function BrowserCodeReader(reader, hints, options) {
    if (hints === void 0) {
      hints = new Map();
    }

    if (options === void 0) {
      options = {};
    }

    this.reader = reader;
    this.hints = hints;
    this.options = __assign(__assign({}, defaultOptions), options);
  }

  Object.defineProperty(BrowserCodeReader.prototype, "possibleFormats", {
    /**
     * Allows to change the possible formats the decoder should
     * search for while scanning some image. Useful for changing
     * the possible formats during BrowserCodeReader::scan.
     */
    set: function (formats) {
      this.hints.set(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.DecodeHintType.POSSIBLE_FORMATS, formats);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Defines what the videoElement src will be.
   *
   * @param videoElement
   * @param stream The stream to be added as a source.
   */

  BrowserCodeReader.addVideoSource = function (videoElement, stream) {
    // Older browsers may not have `srcObject`
    try {
      // @note Throws Exception if interrupted by a new loaded request
      videoElement.srcObject = stream;
    } catch (err) {
      console.error("got interrupted by new loading request");
    }
  };
  /**
   * Enables or disables the torch in a media stream.
   *
   * @experimental This doesn't work across all browsers and is still a Draft.
   */


  BrowserCodeReader.mediaStreamSetTorch = function (track, onOff) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , track.applyConstraints({
              advanced: [{
                fillLightMode: onOff ? 'flash' : 'off',
                torch: onOff ? true : false
              }]
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Checks if the stream has torch support.
   */


  BrowserCodeReader.mediaStreamIsTorchCompatible = function (params) {
    var e_1, _a;

    var tracks = params.getVideoTracks();

    try {
      for (var tracks_1 = __values(tracks), tracks_1_1 = tracks_1.next(); !tracks_1_1.done; tracks_1_1 = tracks_1.next()) {
        var track = tracks_1_1.value;

        if (BrowserCodeReader.mediaStreamIsTorchCompatibleTrack(track)) {
          return true;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (tracks_1_1 && !tracks_1_1.done && (_a = tracks_1.return)) _a.call(tracks_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return false;
  };
  /**
   *
   * @param track The media stream track that will be checked for compatibility.
   */


  BrowserCodeReader.mediaStreamIsTorchCompatibleTrack = function (track) {
    try {
      var capabilities = track.getCapabilities();
      return 'torch' in capabilities;
    } catch (err) {
      // some browsers may not be compatible with ImageCapture
      // so we are ignoring this for now.
      // tslint:disable-next-line:no-console
      console.error(err); // tslint:disable-next-line:no-console

      console.warn('Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available.');
      return false;
    }
  };
  /**
   * Checks if the given video element is currently playing.
   */


  BrowserCodeReader.isVideoPlaying = function (video) {
    return video.currentTime > 0 && !video.paused && video.readyState > 2;
  };
  /**
   * Searches and validates a media element.
   */


  BrowserCodeReader.getMediaElement = function (mediaElementId, type) {
    var mediaElement = document.getElementById(mediaElementId);

    if (!mediaElement) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException("element with id '".concat(mediaElementId, "' not found"));
    }

    if (mediaElement.nodeName.toLowerCase() !== type.toLowerCase()) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException("element with id '".concat(mediaElementId, "' must be an ").concat(type, " element"));
    }

    return mediaElement;
  };
  /**
   * Receives a source and makes sure to return a Video Element from it or fail.
   */


  BrowserCodeReader.createVideoElement = function (videoThingy) {
    if (videoThingy instanceof HTMLVideoElement) {
      return videoThingy;
    }

    if (typeof videoThingy === 'string') {
      return BrowserCodeReader.getMediaElement(videoThingy, 'video');
    }

    if (!videoThingy && typeof document !== 'undefined') {
      var videoElement = document.createElement('video');
      videoElement.width = 200;
      videoElement.height = 200;
      return videoElement;
    }

    throw new Error('Couldn\'t get videoElement from videoSource!');
  };
  /**
   * Receives a source and makes sure to return an Image Element from it or fail.
   */


  BrowserCodeReader.prepareImageElement = function (imageSource) {
    if (imageSource instanceof HTMLImageElement) {
      return imageSource;
    }

    if (typeof imageSource === 'string') {
      return BrowserCodeReader.getMediaElement(imageSource, 'img');
    }

    if (typeof imageSource === 'undefined') {
      var imageElement = document.createElement('img');
      imageElement.width = 200;
      imageElement.height = 200;
      return imageElement;
    }

    throw new Error('Couldn\'t get imageElement from imageSource!');
  };
  /**
   * Sets a HTMLVideoElement for scanning or creates a new one.
   *
   * @param videoElem The HTMLVideoElement to be set.
   */


  BrowserCodeReader.prepareVideoElement = function (videoElem) {
    var videoElement = BrowserCodeReader.createVideoElement(videoElem); // @todo the following lines should not always be done this way, should conditionally
    // change according were we created the element or not
    // Needed for iOS 11

    videoElement.setAttribute('autoplay', 'true');
    videoElement.setAttribute('muted', 'true');
    videoElement.setAttribute('playsinline', 'true');
    return videoElement;
  };
  /**
   * Checks if and HTML image is loaded.
   */


  BrowserCodeReader.isImageLoaded = function (img) {
    // During the onload event, IE correctly identifies any images that
    // weren't downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
      return false;
    } // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.


    if (img.naturalWidth === 0) {
      return false;
    } // No other way of checking: assume it’s ok.


    return true;
  };
  /**
   * Creates a binaryBitmap based in a canvas.
   *
   * @param canvas HTML canvas element containing the image source draw.
   */


  BrowserCodeReader.createBinaryBitmapFromCanvas = function (canvas) {
    var luminanceSource = new _common_HTMLCanvasElementLuminanceSource__WEBPACK_IMPORTED_MODULE_1__.HTMLCanvasElementLuminanceSource(canvas);
    var hybridBinarizer = new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.HybridBinarizer(luminanceSource);
    return new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.BinaryBitmap(hybridBinarizer);
  };
  /**
   * Overwriting this allows you to manipulate the snapshot image in anyway you want before decode.
   */


  BrowserCodeReader.drawImageOnCanvas = function (canvasElementContext, srcElement) {
    canvasElementContext.drawImage(srcElement, 0, 0);
  };

  BrowserCodeReader.getMediaElementDimensions = function (mediaElement) {
    if (mediaElement instanceof HTMLVideoElement) {
      return {
        height: mediaElement.videoHeight,
        width: mediaElement.videoWidth
      };
    }

    if (mediaElement instanceof HTMLImageElement) {
      return {
        height: mediaElement.naturalHeight || mediaElement.height,
        width: mediaElement.naturalWidth || mediaElement.width
      };
    }

    throw new Error('Couldn\'t find the Source\'s dimensions!');
  };
  /**
   * 🖌 Prepares the canvas for capture and scan frames.
   */


  BrowserCodeReader.createCaptureCanvas = function (mediaElement) {
    if (!mediaElement) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException('Cannot create a capture canvas without a media element.');
    }

    if (typeof document === 'undefined') {
      throw new Error('The page "Document" is undefined, make sure you\'re running in a browser.');
    }

    var canvasElement = document.createElement('canvas');

    var _a = BrowserCodeReader.getMediaElementDimensions(mediaElement),
        width = _a.width,
        height = _a.height;

    canvasElement.style.width = width + 'px';
    canvasElement.style.height = height + 'px';
    canvasElement.width = width;
    canvasElement.height = height;
    return canvasElement;
  };
  /**
   * Just tries to play the video and logs any errors.
   * The play call is only made is the video is not already playing.
   */


  BrowserCodeReader.tryPlayVideo = function (videoElement) {
    return __awaiter(this, void 0, void 0, function () {
      var error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (videoElement === null || videoElement === void 0 ? void 0 : videoElement.ended) {
              // tslint:disable-next-line:no-console
              console.error('Trying to play video that has ended.');
              return [2
              /*return*/
              , false];
            }

            if (BrowserCodeReader.isVideoPlaying(videoElement)) {
              // tslint:disable-next-line:no-console
              console.warn('Trying to play video that is already playing.');
              return [2
              /*return*/
              , true];
            }

            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , videoElement.play()];

          case 2:
            _a.sent();

            return [2
            /*return*/
            , true];

          case 3:
            error_1 = _a.sent(); // tslint:disable-next-line:no-console

            console.warn('It was not possible to play the video.', error_1);
            return [2
            /*return*/
            , false];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Creates a canvas and draws the current image frame from the media element on it.
   *
   * @param mediaElement HTML media element to extract an image frame from.
   */


  BrowserCodeReader.createCanvasFromMediaElement = function (mediaElement) {
    var canvas = BrowserCodeReader.createCaptureCanvas(mediaElement);
    var ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Couldn\'t find Canvas 2D Context.');
    }

    BrowserCodeReader.drawImageOnCanvas(ctx, mediaElement);
    return canvas;
  };
  /**
   * Creates a binaryBitmap based in some image source.
   *
   * @param mediaElement HTML element containing drawable image source.
   */


  BrowserCodeReader.createBinaryBitmapFromMediaElem = function (mediaElement) {
    var canvas = BrowserCodeReader.createCanvasFromMediaElement(mediaElement);
    return BrowserCodeReader.createBinaryBitmapFromCanvas(canvas);
  };

  BrowserCodeReader.destroyImageElement = function (imageElement) {
    imageElement.src = '';
    imageElement.removeAttribute('src');
    imageElement = undefined;
  };
  /**
   * Lists all the available video input devices.
   */


  BrowserCodeReader.listVideoInputDevices = function () {
    return __awaiter(this, void 0, void 0, function () {
      var devices, videoDevices, devices_1, devices_1_1, device, kind, deviceId, label, groupId, videoDevice;

      var e_2, _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!(0,_common_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.hasNavigator)()) {
              throw new Error('Can\'t enumerate devices, navigator is not present.');
            }

            if (!(0,_common_navigator_utils__WEBPACK_IMPORTED_MODULE_2__.canEnumerateDevices)()) {
              throw new Error('Can\'t enumerate devices, method not supported.');
            }

            return [4
            /*yield*/
            , navigator.mediaDevices.enumerateDevices()];

          case 1:
            devices = _b.sent();
            videoDevices = [];

            try {
              for (devices_1 = __values(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                device = devices_1_1.value;
                kind = device.kind === 'video' ? 'videoinput' : device.kind;

                if (kind !== 'videoinput') {
                  continue;
                }

                deviceId = device.deviceId || device.id;
                label = device.label || "Video device ".concat(videoDevices.length + 1);
                groupId = device.groupId;
                videoDevice = {
                  deviceId: deviceId,
                  label: label,
                  kind: kind,
                  groupId: groupId
                };
                videoDevices.push(videoDevice);
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (devices_1_1 && !devices_1_1.done && (_a = devices_1.return)) _a.call(devices_1);
              } finally {
                if (e_2) throw e_2.error;
              }
            }

            return [2
            /*return*/
            , videoDevices];
        }
      });
    });
  };
  /**
   * Let's you find a device using it's Id.
   */


  BrowserCodeReader.findDeviceById = function (deviceId) {
    return __awaiter(this, void 0, void 0, function () {
      var devices;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , BrowserCodeReader.listVideoInputDevices()];

          case 1:
            devices = _a.sent();

            if (!devices) {
              return [2
              /*return*/
              ];
            }

            return [2
            /*return*/
            , devices.find(function (x) {
              return x.deviceId === deviceId;
            })];
        }
      });
    });
  };
  /**
   * Unbinds a HTML video src property.
   */


  BrowserCodeReader.cleanVideoSource = function (videoElement) {
    if (!videoElement) {
      return;
    } // forgets about that element 😢


    try {
      videoElement.srcObject = null;
    } catch (err) {
      videoElement.src = '';
    }

    if (videoElement) {
      videoElement.removeAttribute('src');
    }
  };
  /**
   * Stops all media streams that are created.
   */


  BrowserCodeReader.releaseAllStreams = function () {
    if (BrowserCodeReader.streamTracker.length !== 0) {
      // tslint:disable-next-line:no-console
      BrowserCodeReader.streamTracker.forEach(function (mediaStream) {
        mediaStream.getTracks().forEach(function (track) {
          return track.stop();
        });
      });
    }

    BrowserCodeReader.streamTracker = [];
  };
  /**
   * Waits for a video to load and then hits play on it.
   * To accomplish that, it binds listeners and callbacks to the video element.
   *
   * @param element The video element.
   * @param callbackFn Callback invoked when the video is played.
   */


  BrowserCodeReader.playVideoOnLoadAsync = function (element, timeout) {
    return __awaiter(this, void 0, void 0, function () {
      var isPlaying;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , BrowserCodeReader.tryPlayVideo(element)];

          case 1:
            isPlaying = _a.sent();

            if (isPlaying) {
              return [2
              /*return*/
              , true];
            }

            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              // waits 3 seconds or rejects.
              var timeoutId = setTimeout(function () {
                if (BrowserCodeReader.isVideoPlaying(element)) {
                  // if video is playing then we had success, just ignore
                  return;
                }

                reject(false);
                element.removeEventListener('canplay', videoCanPlayListener);
              }, timeout);
              /**
               * Should contain the current registered listener for video loaded-metadata,
               * used to unregister that listener when needed.
               */

              var videoCanPlayListener = function () {
                BrowserCodeReader.tryPlayVideo(element).then(function (hasPlayed) {
                  clearTimeout(timeoutId);
                  element.removeEventListener('canplay', videoCanPlayListener);
                  resolve(hasPlayed);
                });
              }; // both should be unregistered after called


              element.addEventListener('canplay', videoCanPlayListener);
            })];
        }
      });
    });
  };
  /**
   * Sets the new stream and request a new decoding-with-delay.
   *
   * @param stream The stream to be shown in the video element.
   * @param decodeFn A callback for the decode method.
   */


  BrowserCodeReader.attachStreamToVideo = function (stream, preview, previewPlayTimeout) {
    if (previewPlayTimeout === void 0) {
      previewPlayTimeout = 5000;
    }

    return __awaiter(this, void 0, void 0, function () {
      var videoElement;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            videoElement = BrowserCodeReader.prepareVideoElement(preview);
            BrowserCodeReader.addVideoSource(videoElement, stream);
            return [4
            /*yield*/
            , BrowserCodeReader.playVideoOnLoadAsync(videoElement, previewPlayTimeout)];

          case 1:
            _a.sent();

            return [2
            /*return*/
            , videoElement];
        }
      });
    });
  };
  /**
   * Returns a Promise that resolves when the given image element loads.
   */


  BrowserCodeReader._waitImageLoad = function (element) {
    return new Promise(function (resolve, reject) {
      var timeout = 10000; // waits 10 seconds or rejects.

      var timeoutId = setTimeout(function () {
        if (BrowserCodeReader.isImageLoaded(element)) {
          // if video is playing then we had success, just ignore
          return;
        } // removes the listener


        element.removeEventListener('load', imageLoadedListener); // rejects the load

        reject();
      }, timeout);

      var imageLoadedListener = function () {
        clearTimeout(timeoutId); // removes the listener

        element.removeEventListener('load', imageLoadedListener); // resolves the load

        resolve();
      };

      element.addEventListener('load', imageLoadedListener);
    });
  };
  /**
   * Checks if the `callbackFn` is defined, otherwise throws.
   */


  BrowserCodeReader.checkCallbackFnOrThrow = function (callbackFn) {
    if (!callbackFn) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException('`callbackFn` is a required parameter, you cannot capture results without it.');
    }
  };
  /**
   * Standard method to dispose a media stream object.
   */


  BrowserCodeReader.disposeMediaStream = function (stream) {
    stream.getVideoTracks().forEach(function (x) {
      return x.stop();
    });
    stream = undefined;
  };
  /**
   * Gets the BinaryBitmap for ya! (and decodes it)
   */


  BrowserCodeReader.prototype.decode = function (element) {
    // get binary bitmap for decode function
    var canvas = BrowserCodeReader.createCanvasFromMediaElement(element);
    return this.decodeFromCanvas(canvas);
  };
  /**
   * Call the encapsulated readers decode
   */


  BrowserCodeReader.prototype.decodeBitmap = function (binaryBitmap) {
    return this.reader.decode(binaryBitmap, this.hints);
  };
  /**
   * Decodes some barcode from a canvas!
   */


  BrowserCodeReader.prototype.decodeFromCanvas = function (canvas) {
    var binaryBitmap = BrowserCodeReader.createBinaryBitmapFromCanvas(canvas);
    return this.decodeBitmap(binaryBitmap);
  };
  /**
   * Decodes something from an image HTML element.
   */


  BrowserCodeReader.prototype.decodeFromImageElement = function (source) {
    return __awaiter(this, void 0, void 0, function () {
      var element;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!source) {
              throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException('An image element must be provided.');
            }

            element = BrowserCodeReader.prepareImageElement(source);
            return [4
            /*yield*/
            , this._decodeOnLoadImage(element)];

          case 1:
            // onLoad will remove it's callback once done
            // we do not need to dispose or destroy the image
            // since it came from the user
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };
  /**
   * Decodes an image from a URL.
   */


  BrowserCodeReader.prototype.decodeFromImageUrl = function (url) {
    return __awaiter(this, void 0, void 0, function () {
      var element;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!url) {
              throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException('An URL must be provided.');
            }

            element = BrowserCodeReader.prepareImageElement(); // loads the image.

            element.src = url;
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , this.decodeFromImageElement(element)];

          case 2:
            // it waits the task so we can destroy the created image after
            return [2
            /*return*/
            , _a.sent()];

          case 3:
            // we created this element, so we destroy it
            BrowserCodeReader.destroyImageElement(element);
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Continuously tries to decode the barcode from a stream obtained from the given constraints
   * while showing the video in the specified video element.
   *
   * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
   * @param {string|HTMLVideoElement} [previewElem] the video element in page where to show the video while
   *  decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in
   *  which case no video will be shown.
   */


  BrowserCodeReader.prototype.decodeFromConstraints = function (constraints, previewElem, callbackFn) {
    return __awaiter(this, void 0, void 0, function () {
      var stream, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            BrowserCodeReader.checkCallbackFnOrThrow(callbackFn);
            return [4
            /*yield*/
            , this.getUserMedia(constraints)];

          case 1:
            stream = _a.sent();
            _a.label = 2;

          case 2:
            _a.trys.push([2, 4,, 5]);

            return [4
            /*yield*/
            , this.decodeFromStream(stream, previewElem, callbackFn)];

          case 3:
            return [2
            /*return*/
            , _a.sent()];

          case 4:
            error_2 = _a.sent();
            BrowserCodeReader.disposeMediaStream(stream);
            throw error_2;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * In one attempt, tries to decode the barcode from a stream obtained from the given constraints
   * while showing the video in the specified video element.
   *
   * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
   * @param {string|HTMLVideoElement} [preview] the video element in page where to show the video
   *  while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined,
   *  in which case no video will be shown.
   */


  BrowserCodeReader.prototype.decodeFromStream = function (stream, preview, callbackFn) {
    return __awaiter(this, void 0, void 0, function () {
      var timeout, video, finalizeCallback, originalControls, videoTracks, controls, isTorchAvailable, torchTrack_1, switchTorch_1;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            BrowserCodeReader.checkCallbackFnOrThrow(callbackFn);
            timeout = this.options.tryPlayVideoTimeout;
            return [4
            /*yield*/
            , BrowserCodeReader.attachStreamToVideo(stream, preview, timeout)];

          case 1:
            video = _a.sent();

            finalizeCallback = function () {
              // stops video tracks and releases the stream reference
              BrowserCodeReader.disposeMediaStream(stream); // this video was just a preview, so in order
              // to release the stream we gotta stop showing
              // it (the stream) in the video element

              BrowserCodeReader.cleanVideoSource(video);
            };

            originalControls = this.scan(video, callbackFn, finalizeCallback);
            videoTracks = stream.getVideoTracks();
            controls = __assign(__assign({}, originalControls), {
              stop: function () {
                originalControls.stop();
              },
              streamVideoConstraintsApply: function (constraints, trackFilter) {
                return __awaiter(this, void 0, void 0, function () {
                  var tracks, tracks_2, tracks_2_1, track, e_3_1;

                  var e_3, _a;

                  return __generator(this, function (_b) {
                    switch (_b.label) {
                      case 0:
                        tracks = trackFilter ? videoTracks.filter(trackFilter) : videoTracks;
                        _b.label = 1;

                      case 1:
                        _b.trys.push([1, 6, 7, 8]);

                        tracks_2 = __values(tracks), tracks_2_1 = tracks_2.next();
                        _b.label = 2;

                      case 2:
                        if (!!tracks_2_1.done) return [3
                        /*break*/
                        , 5];
                        track = tracks_2_1.value;
                        return [4
                        /*yield*/
                        , track.applyConstraints(constraints)];

                      case 3:
                        _b.sent();

                        _b.label = 4;

                      case 4:
                        tracks_2_1 = tracks_2.next();
                        return [3
                        /*break*/
                        , 2];

                      case 5:
                        return [3
                        /*break*/
                        , 8];

                      case 6:
                        e_3_1 = _b.sent();
                        e_3 = {
                          error: e_3_1
                        };
                        return [3
                        /*break*/
                        , 8];

                      case 7:
                        try {
                          if (tracks_2_1 && !tracks_2_1.done && (_a = tracks_2.return)) _a.call(tracks_2);
                        } finally {
                          if (e_3) throw e_3.error;
                        }

                        return [7
                        /*endfinally*/
                        ];

                      case 8:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              },
              streamVideoConstraintsGet: function (trackFilter) {
                return videoTracks.find(trackFilter).getConstraints();
              },
              streamVideoSettingsGet: function (trackFilter) {
                return videoTracks.find(trackFilter).getSettings();
              },
              streamVideoCapabilitiesGet: function (trackFilter) {
                return videoTracks.find(trackFilter).getCapabilities();
              }
            });
            isTorchAvailable = BrowserCodeReader.mediaStreamIsTorchCompatible(stream);

            if (isTorchAvailable) {
              torchTrack_1 = videoTracks === null || videoTracks === void 0 ? void 0 : videoTracks.find(function (t) {
                return BrowserCodeReader.mediaStreamIsTorchCompatibleTrack(t);
              });

              switchTorch_1 = function (onOff) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , BrowserCodeReader.mediaStreamSetTorch(torchTrack_1, onOff)];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              };

              controls.switchTorch = switchTorch_1;

              controls.stop = function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        originalControls.stop();
                        return [4
                        /*yield*/
                        , switchTorch_1(false)];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              };
            }

            return [2
            /*return*/
            , controls];
        }
      });
    });
  };
  /**
   * Continuously tries to decode the barcode from the device specified by device while showing
   * the video in the specified video element.
   *
   * @param {string|null} [deviceId] the id of one of the devices obtained after calling
   *  getVideoInputDevices. Can be undefined, in this case it will decode from one of the
   *  available devices, preferring the main camera (environment facing) if available.
   * @param {string|HTMLVideoElement|null} [video] the video element in page where to show the video
   *  while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined,
   *  in which case no video will be shown.
   */


  BrowserCodeReader.prototype.decodeFromVideoDevice = function (deviceId, previewElem, callbackFn) {
    return __awaiter(this, void 0, void 0, function () {
      var videoConstraints, constraints;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            BrowserCodeReader.checkCallbackFnOrThrow(callbackFn);

            if (!deviceId) {
              videoConstraints = {
                facingMode: 'environment'
              };
            } else {
              videoConstraints = {
                deviceId: {
                  exact: deviceId
                }
              };
            }

            constraints = {
              video: videoConstraints
            };
            return [4
            /*yield*/
            , this.decodeFromConstraints(constraints, previewElem, callbackFn)];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };
  /**
   * Decodes something from an image HTML element.
   */


  BrowserCodeReader.prototype.decodeFromVideoElement = function (source, callbackFn) {
    return __awaiter(this, void 0, void 0, function () {
      var element, timeout;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            BrowserCodeReader.checkCallbackFnOrThrow(callbackFn);

            if (!source) {
              throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException('A video element must be provided.');
            }

            element = BrowserCodeReader.prepareVideoElement(source);
            timeout = this.options.tryPlayVideoTimeout; // plays the video

            return [4
            /*yield*/
            , BrowserCodeReader.playVideoOnLoadAsync(element, timeout)];

          case 1:
            // plays the video
            _a.sent(); // starts decoding after played the video


            return [2
            /*return*/
            , this.scan(element, callbackFn)];
        }
      });
    });
  };
  /**
   * Decodes a video from a URL until it ends.
   */


  BrowserCodeReader.prototype.decodeFromVideoUrl = function (url, callbackFn) {
    return __awaiter(this, void 0, void 0, function () {
      var element, finalizeCallback, timeout, controls;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            BrowserCodeReader.checkCallbackFnOrThrow(callbackFn);

            if (!url) {
              throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException('An URL must be provided.');
            }

            element = BrowserCodeReader.prepareVideoElement(); // starts loading the video

            element.src = url;

            finalizeCallback = function () {
              // dispose created video element
              BrowserCodeReader.cleanVideoSource(element);
            };

            timeout = this.options.tryPlayVideoTimeout; // plays the video

            return [4
            /*yield*/
            , BrowserCodeReader.playVideoOnLoadAsync(element, timeout)];

          case 1:
            // plays the video
            _a.sent();

            controls = this.scan(element, callbackFn, finalizeCallback);
            return [2
            /*return*/
            , controls];
        }
      });
    });
  };
  /**
   * In one attempt, tries to decode the barcode from a stream obtained from the given
   * constraints while showing the video in the specified video element.
   *
   * @param constraints the media stream constraints to get s valid media stream to decode from
   * @param videoSource the video element in page where to show the video while decoding.
   *  Can be either an element id or directly an HTMLVideoElement. Can be undefined,
   *  in which case no video will be shown.
   *  The decoding result.
   */


  BrowserCodeReader.prototype.decodeOnceFromConstraints = function (constraints, videoSource) {
    return __awaiter(this, void 0, void 0, function () {
      var stream;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.getUserMedia(constraints)];

          case 1:
            stream = _a.sent();
            return [4
            /*yield*/
            , this.decodeOnceFromStream(stream, videoSource)];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };
  /**
   * In one attempt, tries to decode the barcode from a stream obtained from the given
   * constraints while showing the video in the specified video element.
   *
   * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
   * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding.
   *  Can be either an element id or directly an HTMLVideoElement. Can be undefined,
   *  in which case no video will be shown.
   */


  BrowserCodeReader.prototype.decodeOnceFromStream = function (stream, preview) {
    return __awaiter(this, void 0, void 0, function () {
      var receivedPreview, video, result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            receivedPreview = Boolean(preview);
            return [4
            /*yield*/
            , BrowserCodeReader.attachStreamToVideo(stream, preview)];

          case 1:
            video = _a.sent();
            _a.label = 2;

          case 2:
            _a.trys.push([2,, 4, 5]);

            return [4
            /*yield*/
            , this.scanOneResult(video)];

          case 3:
            result = _a.sent();
            return [2
            /*return*/
            , result];

          case 4:
            if (!receivedPreview) {
              BrowserCodeReader.cleanVideoSource(video);
            }

            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * In one attempt, tries to decode the barcode from the device specified by deviceId
   * while showing the video in the specified video element.
   *
   * @param deviceId the id of one of the devices obtained after calling getVideoInputDevices.
   *  Can be undefined, in this case it will decode from one of the available devices,
   *  preferring the main camera (environment facing) if available.
   * @param videoSource the video element in page where to show the video while decoding.
   *  Can be either an element id or directly an HTMLVideoElement. Can be undefined,
   *  in which case no video will be shown.
   */


  BrowserCodeReader.prototype.decodeOnceFromVideoDevice = function (deviceId, videoSource) {
    return __awaiter(this, void 0, void 0, function () {
      var videoConstraints, constraints;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!deviceId) {
              videoConstraints = {
                facingMode: 'environment'
              };
            } else {
              videoConstraints = {
                deviceId: {
                  exact: deviceId
                }
              };
            }

            constraints = {
              video: videoConstraints
            };
            return [4
            /*yield*/
            , this.decodeOnceFromConstraints(constraints, videoSource)];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };
  /**
   * Decodes something from an image HTML element.
   */


  BrowserCodeReader.prototype.decodeOnceFromVideoElement = function (source) {
    return __awaiter(this, void 0, void 0, function () {
      var element, timeout;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!source) {
              throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException('A video element must be provided.');
            }

            element = BrowserCodeReader.prepareVideoElement(source);
            timeout = this.options.tryPlayVideoTimeout; // plays the video

            return [4
            /*yield*/
            , BrowserCodeReader.playVideoOnLoadAsync(element, timeout)];

          case 1:
            // plays the video
            _a.sent();

            return [4
            /*yield*/
            , this.scanOneResult(element)];

          case 2:
            // starts decoding after played the video
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };
  /**
   * Decodes a video from a URL.
   */


  BrowserCodeReader.prototype.decodeOnceFromVideoUrl = function (url) {
    return __awaiter(this, void 0, void 0, function () {
      var element, task;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!url) {
              throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ArgumentException('An URL must be provided.');
            }

            element = BrowserCodeReader.prepareVideoElement(); // starts loading the video

            element.src = url;
            task = this.decodeOnceFromVideoElement(element);
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , task];

          case 2:
            // it waits the task so we can destroy the created image after
            return [2
            /*return*/
            , _a.sent()];

          case 3:
            // we created this element, so we destroy it
            BrowserCodeReader.cleanVideoSource(element);
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Tries to decode from the video input until it finds some value.
   */


  BrowserCodeReader.prototype.scanOneResult = function (element, retryIfNotFound, retryIfChecksumError, retryIfFormatError) {
    var _this = this;

    if (retryIfNotFound === void 0) {
      retryIfNotFound = true;
    }

    if (retryIfChecksumError === void 0) {
      retryIfChecksumError = true;
    }

    if (retryIfFormatError === void 0) {
      retryIfFormatError = true;
    }

    return new Promise(function (resolve, reject) {
      // reuses the scan API, but returns at the first successful result
      _this.scan(element, function (result, error, controls) {
        if (result) {
          // good result, returning
          resolve(result);
          controls.stop();
          return;
        }

        if (error) {
          // checks if it should retry
          if (error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__.NotFoundException && retryIfNotFound) {
            return;
          }

          if (error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ChecksumException && retryIfChecksumError) {
            return;
          }

          if (error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__.FormatException && retryIfFormatError) {
            return;
          } // not re-trying


          controls.stop(); // stops scan loop

          reject(error); // returns the error
        }
      });
    });
  };
  /**
   * Continuously decodes from video input.
   *
   * @param element HTML element to scan/decode from. It will not be disposed or destroyed.
   * @param callbackFn Called after every scan attempt, being it successful or errored.
   * @param finalizeCallback Called after scan process reaches the end or stop is called.
   */


  BrowserCodeReader.prototype.scan = function (element, callbackFn, finalizeCallback) {
    var _this = this;

    BrowserCodeReader.checkCallbackFnOrThrow(callbackFn);
    /**
     * The HTML canvas element, used to draw the video or image's frame for decoding.
     */

    var captureCanvas = BrowserCodeReader.createCaptureCanvas(element);
    /**
     * The HTML canvas element context.
     */

    var captureCanvasContext;

    try {
      captureCanvasContext = captureCanvas.getContext('2d', {
        willReadFrequently: true
      });
    } catch (e) {
      captureCanvasContext = captureCanvas.getContext('2d');
    } // cannot proceed w/o this


    if (!captureCanvasContext) {
      throw new Error('Couldn\'t create canvas for visual element scan.');
    }

    var disposeCanvas = function () {
      captureCanvasContext = undefined;
      captureCanvas = undefined;
    };

    var stopScan = false;
    var lastTimeoutId; // can be called to break the scan loop

    var stop = function () {
      stopScan = true;
      clearTimeout(lastTimeoutId);
      disposeCanvas();

      if (finalizeCallback) {
        finalizeCallback();
      }
    }; // created for extensibility


    var controls = {
      stop: stop
    }; // this async loop allows infinite (or almost? maybe) scans

    var loop = function () {
      if (stopScan) {
        // no need to clear timeouts as none was create yet in this scope.
        return;
      }

      try {
        BrowserCodeReader.drawImageOnCanvas(captureCanvasContext, element);

        var result = _this.decodeFromCanvas(captureCanvas);

        callbackFn(result, undefined, controls);
        lastTimeoutId = setTimeout(loop, _this.options.delayBetweenScanSuccess);
      } catch (error) {
        callbackFn(undefined, error, controls);
        var isChecksumError = error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__.ChecksumException;
        var isFormatError = error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__.FormatException;
        var isNotFound = error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_0__.NotFoundException;

        if (isChecksumError || isFormatError || isNotFound) {
          // trying again
          lastTimeoutId = setTimeout(loop, _this.options.delayBetweenScanAttempts);
          return;
        } // not trying again


        disposeCanvas();

        if (finalizeCallback) {
          finalizeCallback(error);
        }
      }
    }; // starts the async loop


    loop();
    return controls;
  };
  /**
   * Waits for the image to load and then tries to decode it.
   */


  BrowserCodeReader.prototype._decodeOnLoadImage = function (element) {
    return __awaiter(this, void 0, void 0, function () {
      var isImageLoaded;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            isImageLoaded = BrowserCodeReader.isImageLoaded(element);
            if (!!isImageLoaded) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , BrowserCodeReader._waitImageLoad(element)];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            return [2
            /*return*/
            , this.decode(element)];
        }
      });
    });
  };
  /**
   * Get MediaStream from browser to be used.
   * @param constraints constraints the media stream constraints to get s valid media stream to decode from.
   * @private For private use.
   */


  BrowserCodeReader.prototype.getUserMedia = function (constraints) {
    return __awaiter(this, void 0, void 0, function () {
      var stream;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , navigator.mediaDevices.getUserMedia(constraints)];

          case 1:
            stream = _a.sent();
            BrowserCodeReader.streamTracker.push(stream);
            return [2
            /*return*/
            , stream];
        }
      });
    });
  };
  /**
   * Keeps track to created media streams.
   * @private there is no need this array to be accessible from outside.
   */


  BrowserCodeReader.streamTracker = [];
  return BrowserCodeReader;
}();



/***/ }),

/***/ 53273:
/*!********************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/readers/BrowserDatamatrixCodeReader.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserDatamatrixCodeReader": () => (/* binding */ BrowserDatamatrixCodeReader)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var _BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserCodeReader */ 99964);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



/**
 * QR Code reader to use from browser.
 */

var BrowserDatamatrixCodeReader =
/** @class */
function (_super) {
  __extends(BrowserDatamatrixCodeReader, _super);
  /**
   * Creates an instance of BrowserQRCodeReader.
   */


  function BrowserDatamatrixCodeReader(hints, options) {
    return _super.call(this, new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.DataMatrixReader(), hints, options) || this;
  }

  return BrowserDatamatrixCodeReader;
}(_BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader);



/***/ }),

/***/ 56985:
/*!*********************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/readers/BrowserMultiFormatOneDReader.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserMultiFormatOneDReader": () => (/* binding */ BrowserMultiFormatOneDReader)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var _BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserCodeReader */ 99964);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



/**
 * Reader to be used for any One Dimension type barcode.
 */

var BrowserMultiFormatOneDReader =
/** @class */
function (_super) {
  __extends(BrowserMultiFormatOneDReader, _super);
  /**
   * Creates an instance of BrowserBarcodeReader.
   * @param {Map<DecodeHintType, any>} hints?
   * @param options
   */


  function BrowserMultiFormatOneDReader(hints, options) {
    return _super.call(this, new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.MultiFormatOneDReader(hints), hints, options) || this;
  }

  return BrowserMultiFormatOneDReader;
}(_BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader);



/***/ }),

/***/ 30572:
/*!*****************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/readers/BrowserMultiFormatReader.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserMultiFormatReader": () => (/* binding */ BrowserMultiFormatReader)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var _BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserCodeReader */ 99964);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var BrowserMultiFormatReader =
/** @class */
function (_super) {
  __extends(BrowserMultiFormatReader, _super);

  function BrowserMultiFormatReader(hints, options) {
    var _this = this;

    var reader = new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.MultiFormatReader();
    reader.setHints(hints);
    _this = _super.call(this, reader, hints, options) || this;
    _this.reader = reader;
    return _this;
  }

  Object.defineProperty(BrowserMultiFormatReader.prototype, "possibleFormats", {
    set: function (formats) {
      this.hints.set(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.DecodeHintType.POSSIBLE_FORMATS, formats);
      this.reader.setHints(this.hints);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Overwrite decodeBitmap to call decodeWithState, which will pay
   * attention to the hints set in the constructor function
   */

  BrowserMultiFormatReader.prototype.decodeBitmap = function (binaryBitmap) {
    return this.reader.decodeWithState(binaryBitmap);
  };
  /**
   * Allows to change hints in runtime.
   */


  BrowserMultiFormatReader.prototype.setHints = function (hints) {
    this.hints = hints;
    this.reader.setHints(this.hints);
  };

  return BrowserMultiFormatReader;
}(_BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader);



/***/ }),

/***/ 98951:
/*!************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/readers/BrowserPDF417Reader.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserPDF417Reader": () => (/* binding */ BrowserPDF417Reader)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var _BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserCodeReader */ 99964);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



/**
 * QR Code reader to use from browser.
 */

var BrowserPDF417Reader =
/** @class */
function (_super) {
  __extends(BrowserPDF417Reader, _super);
  /**
   * Creates an instance of BrowserPDF417Reader.
   */


  function BrowserPDF417Reader(hints, options) {
    return _super.call(this, new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.PDF417Reader(), hints, options) || this;
  }

  return BrowserPDF417Reader;
}(_BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader);



/***/ }),

/***/ 94015:
/*!************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/readers/BrowserQRCodeReader.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserQRCodeReader": () => (/* binding */ BrowserQRCodeReader)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var _BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserCodeReader */ 99964);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



/**
 * QR Code reader to use from browser.
 */

var BrowserQRCodeReader =
/** @class */
function (_super) {
  __extends(BrowserQRCodeReader, _super);
  /**
   * Creates an instance of BrowserQRCodeReader.
   */


  function BrowserQRCodeReader(hints, options) {
    return _super.call(this, new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.QRCodeReader(), hints, options) || this;
  }

  return BrowserQRCodeReader;
}(_BrowserCodeReader__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader);



/***/ }),

/***/ 57785:
/*!******************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/readers/IBrowserCodeReaderOptions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 90980:
/*!*************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/writers/BrowserCodeSvgWriter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserCodeSvgWriter": () => (/* binding */ BrowserCodeSvgWriter)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);

var svgNs = 'http://www.w3.org/2000/svg';
/**/

var BrowserCodeSvgWriter =
/** @class */
function () {
  /**
   * Constructs. 😉
   */
  function BrowserCodeSvgWriter(containerElement) {
    if (typeof containerElement === 'string') {
      var container = document.getElementById(containerElement);

      if (!container) {
        throw new Error("Could not find a Container element with '".concat(containerElement, "'."));
      }

      this.containerElement = container;
    } else {
      this.containerElement = containerElement;
    }
  }
  /**
   * Writes the QR code to a SVG and renders it in the container.
   */


  BrowserCodeSvgWriter.prototype.write = function (contents, width, height, hints) {
    if (contents.length === 0) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException('Found empty contents');
    }

    if (width < 0 || height < 0) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException('Requested dimensions are too small: ' + width + 'x' + height);
    }

    var quietZone = hints && hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.EncodeHintType.MARGIN) !== undefined ? Number.parseInt(hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.EncodeHintType.MARGIN).toString(), 10) : BrowserCodeSvgWriter.QUIET_ZONE_SIZE;
    var code = this.encode(hints, contents);
    return this.renderResult(code, width, height, quietZone);
  };
  /**
   * Creates a SVG element.
   */


  BrowserCodeSvgWriter.prototype.createSVGElement = function (w, h) {
    var el = document.createElementNS(BrowserCodeSvgWriter.SVG_NS, 'svg');
    el.setAttributeNS(svgNs, 'width', h.toString());
    el.setAttributeNS(svgNs, 'height', w.toString());
    return el;
  };
  /**
   * Creates a SVG rect.
   */


  BrowserCodeSvgWriter.prototype.createSvgPathPlaceholderElement = function (w, h) {
    var el = document.createElementNS(BrowserCodeSvgWriter.SVG_NS, 'path');
    el.setAttributeNS(svgNs, 'd', "M0 0h".concat(w, "v").concat(h, "H0z"));
    el.setAttributeNS(svgNs, 'fill', 'none');
    return el;
  };
  /**
   * Creates a SVG rect.
   */


  BrowserCodeSvgWriter.prototype.createSvgRectElement = function (x, y, w, h) {
    var el = document.createElementNS(BrowserCodeSvgWriter.SVG_NS, 'rect');
    el.setAttributeNS(svgNs, 'x', x.toString());
    el.setAttributeNS(svgNs, 'y', y.toString());
    el.setAttributeNS(svgNs, 'height', w.toString());
    el.setAttributeNS(svgNs, 'width', h.toString());
    el.setAttributeNS(svgNs, 'fill', '#000000');
    return el;
  };
  /**
   * Encodes the content to a Barcode type.
   */


  BrowserCodeSvgWriter.prototype.encode = function (hints, contents) {
    var errorCorrectionLevel = _zxing_library__WEBPACK_IMPORTED_MODULE_0__.QRCodeDecoderErrorCorrectionLevel.L;

    if (hints && hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.EncodeHintType.ERROR_CORRECTION) !== undefined) {
      var correctionStr = hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.EncodeHintType.ERROR_CORRECTION).toString();
      errorCorrectionLevel = _zxing_library__WEBPACK_IMPORTED_MODULE_0__.QRCodeDecoderErrorCorrectionLevel.fromString(correctionStr);
    }

    var code = _zxing_library__WEBPACK_IMPORTED_MODULE_0__.QRCodeEncoder.encode(contents, errorCorrectionLevel, hints);
    return code;
  };
  /**
   * Renders the SVG in the container.
   *
   * @note the input matrix uses 0 == white, 1 == black. The output matrix
   *  uses 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
   */


  BrowserCodeSvgWriter.prototype.renderResult = function (code, width
  /*int*/
  , height
  /*int*/
  , quietZone
  /*int*/
  ) {
    // if (this.format && format != this.format) {
    //   throw new IllegalArgumentException("Can only encode QR_CODE, but got " + format)
    // }
    var input = code.getMatrix();

    if (input === null) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.IllegalStateException();
    }

    var inputWidth = input.getWidth();
    var inputHeight = input.getHeight();
    var qrWidth = inputWidth + quietZone * 2;
    var qrHeight = inputHeight + quietZone * 2;
    var outputWidth = Math.max(width, qrWidth);
    var outputHeight = Math.max(height, qrHeight);
    var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight)); // Padding includes both the quiet zone and the extra white pixels to accommodate the requested
    // dimensions. For example, if input is 25x25 the QR will be 33x33 including the quiet zone.
    // If the requested size is 200x160, the multiple will be 4, for a QR of 132x132. These will
    // handle all the padding from 100x100 (the actual QR) up to 200x160.

    var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
    var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
    var svgElement = this.createSVGElement(outputWidth, outputHeight);
    var placeholder = this.createSvgPathPlaceholderElement(width, height);
    svgElement.appendChild(placeholder);
    this.containerElement.appendChild(svgElement); // 2D loop

    for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
      // Write the contents of this row of the barcode
      for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
        if (input.get(inputX, inputY) === 1) {
          var svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
          svgElement.appendChild(svgRectElement);
        }
      }
    }

    return svgElement;
  };
  /**
   * Default quiet zone in pixels.
   */


  BrowserCodeSvgWriter.QUIET_ZONE_SIZE = 4;
  /**
   * SVG markup NameSpace
   */

  BrowserCodeSvgWriter.SVG_NS = 'http://www.w3.org/2000/svg';
  return BrowserCodeSvgWriter;
}();



/***/ }),

/***/ 50332:
/*!***************************************************************************!*\
  !*** ./node_modules/@zxing/browser/esm/writers/BrowserQRCodeSvgWriter.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserQRCodeSvgWriter": () => (/* binding */ BrowserQRCodeSvgWriter)
/* harmony export */ });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ 70796);

var svgNs = 'http://www.w3.org/2000/svg';
/**/

var BrowserQRCodeSvgWriter =
/** @class */
function () {
  function BrowserQRCodeSvgWriter() {}
  /**
   * Writes and renders a QRCode SVG element.
   *
   * @param contents
   * @param width
   * @param height
   * @param hints
   */


  BrowserQRCodeSvgWriter.prototype.write = function (contents, width, height, hints) {
    if (contents.length === 0) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException('Found empty contents');
    } // if (format != BarcodeFormat.QR_CODE) {
    //   throw new IllegalArgumentException("Can only encode QR_CODE, but got " + format)
    // }


    if (width < 0 || height < 0) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException('Requested dimensions are too small: ' + width + 'x' + height);
    }

    var errorCorrectionLevel = _zxing_library__WEBPACK_IMPORTED_MODULE_0__.QRCodeDecoderErrorCorrectionLevel.L;
    var quietZone = BrowserQRCodeSvgWriter.QUIET_ZONE_SIZE;

    if (hints) {
      if (undefined !== hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.EncodeHintType.ERROR_CORRECTION)) {
        var correctionStr = hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.EncodeHintType.ERROR_CORRECTION).toString();
        errorCorrectionLevel = _zxing_library__WEBPACK_IMPORTED_MODULE_0__.QRCodeDecoderErrorCorrectionLevel.fromString(correctionStr);
      }

      if (undefined !== hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.EncodeHintType.MARGIN)) {
        quietZone = Number.parseInt(hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_0__.EncodeHintType.MARGIN).toString(), 10);
      }
    }

    var code = _zxing_library__WEBPACK_IMPORTED_MODULE_0__.QRCodeEncoder.encode(contents, errorCorrectionLevel, hints);
    return this.renderResult(code, width, height, quietZone);
  };
  /**
   * Renders the result and then appends it to the DOM.
   */


  BrowserQRCodeSvgWriter.prototype.writeToDom = function (containerElement, contents, width, height, hints) {
    if (typeof containerElement === 'string') {
      var targetEl = document.querySelector(containerElement);

      if (!targetEl) {
        throw new Error('Could no find the target HTML element.');
      }

      containerElement = targetEl;
    }

    var svgElement = this.write(contents, width, height, hints);

    if (containerElement instanceof HTMLElement) {
      containerElement.appendChild(svgElement);
    }
  };
  /**
   * Note that the input matrix uses 0 == white, 1 == black.
   * The output matrix uses 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
   */


  BrowserQRCodeSvgWriter.prototype.renderResult = function (code, width
  /*int*/
  , height
  /*int*/
  , quietZone
  /*int*/
  ) {
    var input = code.getMatrix();

    if (input === null) {
      throw new _zxing_library__WEBPACK_IMPORTED_MODULE_0__.IllegalStateException();
    }

    var inputWidth = input.getWidth();
    var inputHeight = input.getHeight();
    var qrWidth = inputWidth + quietZone * 2;
    var qrHeight = inputHeight + quietZone * 2;
    var outputWidth = Math.max(width, qrWidth);
    var outputHeight = Math.max(height, qrHeight);
    var multiple = Math.min(Math.floor(outputWidth / qrWidth), Math.floor(outputHeight / qrHeight)); // Padding includes both the quiet zone and the extra white pixels to accommodate the requested
    // dimensions. For example, if input is 25x25 the QR will be 33x33 including the quiet zone.
    // If the requested size is 200x160, the multiple will be 4, for a QR of 132x132. These will
    // handle all the padding from 100x100 (the actual QR) up to 200x160.

    var leftPadding = Math.floor((outputWidth - inputWidth * multiple) / 2);
    var topPadding = Math.floor((outputHeight - inputHeight * multiple) / 2);
    var svgElement = this.createSVGElement(outputWidth, outputHeight);

    for (var inputY = 0, outputY = topPadding; inputY < inputHeight; inputY++, outputY += multiple) {
      // Write the contents of this row of the barcode
      for (var inputX = 0, outputX = leftPadding; inputX < inputWidth; inputX++, outputX += multiple) {
        if (input.get(inputX, inputY) === 1) {
          var svgRectElement = this.createSvgRectElement(outputX, outputY, multiple, multiple);
          svgElement.appendChild(svgRectElement);
        }
      }
    }

    return svgElement;
  };
  /**
   * Creates a SVG element.
   *
   * @param w SVG's width attribute
   * @param h SVG's height attribute
   */


  BrowserQRCodeSvgWriter.prototype.createSVGElement = function (w, h) {
    var svgElement = document.createElementNS(svgNs, 'svg');
    var width = w.toString();
    var height = h.toString();
    svgElement.setAttribute('height', height);
    svgElement.setAttribute('width', width);
    svgElement.setAttribute('viewBox', "0 0 " + width + " " + height);
    return svgElement;
  };
  /**
   * Creates a SVG rect element.
   *
   * @param x Element's x coordinate
   * @param y Element's y coordinate
   * @param w Element's width attribute
   * @param h Element's height attribute
   */


  BrowserQRCodeSvgWriter.prototype.createSvgRectElement = function (x, y, w, h) {
    var rect = document.createElementNS(svgNs, 'rect');
    rect.setAttribute('x', x.toString());
    rect.setAttribute('y', y.toString());
    rect.setAttribute('height', w.toString());
    rect.setAttribute('width', h.toString());
    rect.setAttribute('fill', '#000000');
    return rect;
  };

  BrowserQRCodeSvgWriter.QUIET_ZONE_SIZE = 4;
  return BrowserQRCodeSvgWriter;
}();



/***/ }),

/***/ 48855:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/de.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;

function plural(val) {
  const n = val,
        i = Math.floor(Math.abs(val)),
        v = val.toString().replace(/^[^.]*\.?/, '').length;
  if (i === 1 && v === 0) return 1;
  return 5;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["de", [["AM", "PM"], u, u], u, [["S", "M", "D", "M", "D", "F", "S"], ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]], [["S", "M", "D", "M", "D", "F", "S"], ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]], [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."], ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]], [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]], [["v. Chr.", "n. Chr."], u, u], 1, [6, 0], ["dd.MM.yy", "dd.MM.y", "d. MMMM y", "EEEE, d. MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, "{1} 'um' {0}", u], [",", ".", ";", "%", "+", "-", "E", "·", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "Euro", {
  "ATS": ["öS"],
  "AUD": ["AU$", "$"],
  "BGM": ["BGK"],
  "BGO": ["BGJ"],
  "BYN": [u, "р."],
  "CUC": [u, "Cub$"],
  "DEM": ["DM"],
  "FKP": [u, "Fl£"],
  "GHS": [u, "₵"],
  "GNF": [u, "F.G."],
  "KMF": [u, "FC"],
  "PHP": [u, "₱"],
  "RON": [u, "L"],
  "RUR": [u, "р."],
  "RWF": [u, "F.Rw"],
  "SYP": [],
  "THB": ["฿"],
  "TWD": ["NT$"],
  "XXX": [],
  "ZMW": [u, "K"]
}, "ltr", plural]);

/***/ }),

/***/ 53800:
/*!************************************************************************!*\
  !*** ./node_modules/@zxing/ngx-scanner/fesm2020/zxing-ngx-scanner.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZXingScannerComponent": () => (/* binding */ ZXingScannerComponent),
/* harmony export */   "ZXingScannerModule": () => (/* binding */ ZXingScannerModule)
/* harmony export */ });
/* harmony import */ var C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _zxing_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/browser */ 80749);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);








/**
 * Based on zxing-typescript BrowserCodeReader
 */

const _c0 = ["preview"];

class BrowserMultiFormatContinuousReader extends _zxing_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserMultiFormatReader {
  /**
   * Returns the code reader scanner controls.
   */
  getScannerControls() {
    if (!this.scannerControls) {
      throw new Error('No scanning is running at the time.');
    }

    return this.scannerControls;
  }
  /**
   * Starts the decoding from the current or a new video element.
   *
   * @param deviceId The device's to be used Id
   * @param previewEl A new video element
   */


  scanFromDeviceObservable(deviceId, previewEl) {
    var _this = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scan$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
      let ctrls;

      try {
        ctrls = yield _this.decodeFromVideoDevice(deviceId, previewEl, (result, error) => {
          if (!error) {
            scan$.next({
              result
            });
            return;
          }

          const errorName = error.name; // stream cannot stop on fails.

          if ( // scan Failure - found nothing, no error
          errorName === _zxing_library__WEBPACK_IMPORTED_MODULE_2__.NotFoundException.name || // scan Error - found the QR but got error on decoding
          errorName === _zxing_library__WEBPACK_IMPORTED_MODULE_2__.ChecksumException.name || errorName === _zxing_library__WEBPACK_IMPORTED_MODULE_2__.FormatException.name || error.message.includes('No MultiFormat Readers were able to detect the code.')) {
            scan$.next({
              error
            });
            return;
          } // probably fatal error


          scan$.error(error);

          _this.scannerControls.stop();

          _this.scannerControls = undefined;
          return;
        });
        _this.scannerControls = { ...ctrls,

          stop() {
            ctrls.stop();
            scan$.complete();
          }

        };
      } catch (e) {
        scan$.error(e);
        _this.scannerControls?.stop();
        _this.scannerControls = undefined;
      }

      return scan$.asObservable();
    })();
  }

}

class ZXingScannerComponent {
  /**
   * Constructor to build the object and do some DI.
   */
  constructor() {
    /**
     * Delay between attempts to decode (default is 500ms)
     */
    this.timeBetweenScans = 500;
    /**
     * Delay between successful decode (default is 500ms)
     */

    this.delayBetweenScanSuccess = 500;
    /**
     * How the preview element should be fit inside the :host container.
     */

    this.previewFitMode = 'cover';
    this._ready = false; // instance based emitters

    this.autostarted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.autostarting = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.torchCompatible = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(false);
    this.scanSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.scanFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.scanError = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.scanComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.camerasFound = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.camerasNotFound = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.permissionResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
    this.hasDevices = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.deviceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this._enabled = true;
    this._hints = new Map();
    this.autofocusEnabled = true;
    this.autostart = true;
    this.formats = [_zxing_library__WEBPACK_IMPORTED_MODULE_2__.BarcodeFormat.QR_CODE]; // computed data

    this.hasNavigator = typeof navigator !== 'undefined';
    this.isMediaDevicesSupported = this.hasNavigator && !!navigator.mediaDevices;
  }
  /**
   * Exposes the current code reader, so the user can use it's APIs.
   */


  get codeReader() {
    return this._codeReader;
  }
  /**
   * User device input
   */


  set device(device) {
    if (!this._ready) {
      this._devicePreStart = device; // let's ignore silently, users don't like logs

      return;
    }

    if (this.isAutostarting) {
      // do not allow setting devices during auto-start, since it will set one and emit it.
      console.warn('Avoid setting a device during auto-start.');
      return;
    }

    if (this.isCurrentDevice(device)) {
      console.warn('Setting the same device is not allowed.');
      return;
    }

    if (!this.hasPermission) {
      console.warn('Permissions not set yet, waiting for them to be set to apply device change.'); // this.permissionResponse
      //   .pipe(
      //     take(1),
      //     tap(() => console.log(`Permissions set, applying device change${device ? ` (${device.deviceId})` : ''}.`))
      //   )
      //   .subscribe(() => this.device = device);

      return;
    }

    this.setDevice(device);
  }
  /**
   * User device accessor.
   */


  get device() {
    return this._device;
  }
  /**
   * Returns all the registered formats.
   */


  get formats() {
    return this.hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.POSSIBLE_FORMATS);
  }
  /**
   * Registers formats the scanner should support.
   *
   * @param input BarcodeFormat or case-insensitive string array.
   */


  set formats(input) {
    if (typeof input === 'string') {
      throw new Error('Invalid formats, make sure the [formats] input is a binding.');
    } // formats may be set from html template as BarcodeFormat or string array


    const formats = input.map(f => this.getBarcodeFormatOrFail(f));
    const hints = this.hints; // updates the hints

    hints.set(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.POSSIBLE_FORMATS, formats); // handles updating the codeReader

    this.hints = hints;
  }
  /**
   * Returns all the registered hints.
   */


  get hints() {
    return this._hints;
  }
  /**
   * Does what it takes to set the hints.
   */


  set hints(hints) {
    this._hints = hints; // new instance with new hints.

    this.codeReader?.setHints(this._hints);
  }
  /**
   * Sets the desired constraints in all video tracks.
   * @experimental
   */


  set videoConstraints(constraints) {
    // new instance with new hints.
    const controls = this.codeReader?.getScannerControls();

    if (!controls) {
      // fails silently
      return;
    }

    controls?.streamVideoConstraintsApply(constraints);
  }
  /**
   *
   */


  set isAutostarting(state) {
    this._isAutostarting = state;
    this.autostarting.next(state);
  }
  /**
   *
   */


  get isAutostarting() {
    return this._isAutostarting;
  }
  /**
   * Can turn on/off the device flashlight.
   *
   * @experimental Torch/Flash APIs are not stable in all browsers, it may be buggy!
   */


  set torch(onOff) {
    try {
      const controls = this.getCodeReader().getScannerControls();
      controls.switchTorch(onOff);
    } catch (error) {// ignore error
    }
  }
  /**
   * Starts and Stops the scanning.
   */


  set enable(enabled) {
    this._enabled = Boolean(enabled);

    if (!this._enabled) {
      this.reset();
      BrowserMultiFormatContinuousReader.releaseAllStreams();
    } else {
      if (this.device) {
        this.scanFromDevice(this.device.deviceId);
      } else {
        this.init();
      }
    }
  }
  /**
   * Tells if the scanner is enabled or not.
   */


  get enabled() {
    return this._enabled;
  }
  /**
   * If is `tryHarder` enabled.
   */


  get tryHarder() {
    return this.hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.TRY_HARDER);
  }
  /**
   * Enable/disable tryHarder hint.
   */


  set tryHarder(enable) {
    const hints = this.hints;

    if (enable) {
      hints.set(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.TRY_HARDER, true);
    } else {
      hints.delete(_zxing_library__WEBPACK_IMPORTED_MODULE_2__.DecodeHintType.TRY_HARDER);
    }

    this.hints = hints;
  }
  /**
   * Gets and registers all cameras.
   */


  askForPermission() {
    var _this2 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.hasNavigator) {
        console.error('@zxing/ngx-scanner', 'Can\'t ask permission, navigator is not present.');

        _this2.setPermission(null);

        return _this2.hasPermission;
      }

      if (!_this2.isMediaDevicesSupported) {
        console.error('@zxing/ngx-scanner', 'Can\'t get user media, this is not supported.');

        _this2.setPermission(null);

        return _this2.hasPermission;
      }

      let stream;
      let permission;

      try {
        // Will try to ask for permission
        stream = yield _this2.getAnyVideoDevice();
        permission = !!stream;
      } catch (err) {
        return _this2.handlePermissionException(err);
      } finally {
        _this2.terminateStream(stream);
      }

      _this2.setPermission(permission); // Returns the permission


      return permission;
    })();
  }
  /**
   *
   */


  getAnyVideoDevice() {
    return navigator.mediaDevices.getUserMedia({
      video: true
    });
  }
  /**
   * Terminates a stream and it's tracks.
   */


  terminateStream(stream) {
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
    }

    stream = undefined;
  }

  init() {
    var _this3 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.autostart) {
        console.warn('Feature \'autostart\' disabled. Permissions and devices recovery has to be run manually.'); // does the necessary configuration without autostarting

        _this3.initAutostartOff();

        _this3._ready = true;
        return;
      } // configures the component and starts the scanner


      yield _this3.initAutostartOn();
      _this3._ready = true;
    })();
  }
  /**
   * Initializes the component without starting the scanner.
   */


  initAutostartOff() {
    // do not ask for permission when autostart is off
    this.isAutostarting = false; // just update devices information

    this.updateVideoInputDevices();

    if (this._device && this._devicePreStart) {
      this.setDevice(this._devicePreStart);
    }
  }
  /**
   * Initializes the component and starts the scanner.
   * Permissions are asked to accomplish that.
   */


  initAutostartOn() {
    var _this4 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isAutostarting = true;
      let hasPermission;

      try {
        // Asks for permission before enumerating devices so it can get all the device's info
        hasPermission = yield _this4.askForPermission();
      } catch (e) {
        console.error('Exception occurred while asking for permission:', e);
        return;
      } // from this point, things gonna need permissions


      if (hasPermission) {
        const devices = yield _this4.updateVideoInputDevices();
        yield _this4.autostartScanner([...devices]);
      }

      _this4.isAutostarting = false;

      _this4.autostarted.next();
    })();
  }
  /**
   * Checks if the given device is the current defined one.
   */


  isCurrentDevice(device) {
    return device?.deviceId === this._device?.deviceId;
  }
  /**
   * Executes some actions before destroy the component.
   */


  ngOnDestroy() {
    this.reset();
    BrowserMultiFormatContinuousReader.releaseAllStreams();
  }
  /**
   *
   */


  ngOnInit() {
    this.init();
  }
  /**
   * Stops the scanning, if any.
   */


  scanStop() {
    if (this._scanSubscription) {
      this.codeReader?.getScannerControls().stop();
      this._scanSubscription?.unsubscribe();
      this._scanSubscription = undefined;
    }

    this.torchCompatible.next(false);
  }
  /**
   * Stops the scanning, if any.
   */


  scanStart() {
    if (this._scanSubscription) {
      throw new Error('There is already a scan process running.');
    }

    if (!this._device) {
      throw new Error('No device defined, cannot start scan, please define a device.');
    }

    this.scanFromDevice(this._device.deviceId);
  }
  /**
   * Stops old `codeReader` and starts scanning in a new one.
   */


  restart() {
    // note only necessary for now because of the Torch
    this._codeReader = undefined;

    const prevDevice = this._reset();

    if (!prevDevice) {
      return;
    }

    this.device = prevDevice;
  }
  /**
   * Discovers and updates known video input devices.
   */


  updateVideoInputDevices() {
    var _this5 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // permissions aren't needed to get devices, but to access them and their info
      const devices = (yield _zxing_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader.listVideoInputDevices()) || [];
      const hasDevices = devices && devices.length > 0; // stores discovered devices and updates information

      _this5.hasDevices.next(hasDevices);

      _this5.camerasFound.next([...devices]);

      if (!hasDevices) {
        _this5.camerasNotFound.next(null);
      }

      return devices;
    })();
  }
  /**
   * Starts the scanner with the back camera otherwise take the last
   * available device.
   */


  autostartScanner(devices) {
    var _this6 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const matcher = ({
        label
      }) => /back|trás|rear|traseira|environment|ambiente/gi.test(label); // select the rear camera by default, otherwise take the last camera.


      const device = devices.find(matcher) || devices.pop();

      if (!device) {
        throw new Error('Impossible to autostart, no input devices available.');
      }

      yield _this6.setDevice(device);

      _this6.deviceChange.next(device);
    })();
  }
  /**
   * Dispatches the scan success event.
   *
   * @param result the scan result.
   */


  dispatchScanSuccess(result) {
    this.scanSuccess.next(result.getText());
  }
  /**
   * Dispatches the scan failure event.
   */


  dispatchScanFailure(reason) {
    this.scanFailure.next(reason);
  }
  /**
   * Dispatches the scan error event.
   *
   * @param error the error thing.
   */


  dispatchScanError(error) {
    if (!this.scanError.observed) {
      console.error(`zxing scanner component: ${error.name}`, error);
      console.warn('Use the `(scanError)` property to handle errors like this!');
    }

    this.scanError.next(error);
  }
  /**
   * Dispatches the scan event.
   *
   * @param result the scan result.
   */


  dispatchScanComplete(result) {
    this.scanComplete.next(result);
  }
  /**
   * Returns the filtered permission.
   */


  handlePermissionException(err) {
    // failed to grant permission to video input
    console.error('@zxing/ngx-scanner', 'Error when asking for permission.', err);
    let permission;

    switch (err.name) {
      // usually caused by not secure origins
      case 'NotSupportedError':
        console.warn('@zxing/ngx-scanner', err.message); // could not claim

        permission = null; // can't check devices

        this.hasDevices.next(null);
        break;
      // user denied permission

      case 'NotAllowedError':
        console.warn('@zxing/ngx-scanner', err.message); // claimed and denied permission

        permission = false; // this means that input devices exists

        this.hasDevices.next(true);
        break;
      // the device has no attached input devices

      case 'NotFoundError':
        console.warn('@zxing/ngx-scanner', err.message); // no permissions claimed

        permission = null; // because there was no devices

        this.hasDevices.next(false); // tells the listener about the error

        this.camerasNotFound.next(err);
        break;

      case 'NotReadableError':
        console.warn('@zxing/ngx-scanner', 'Couldn\'t read the device(s)\'s stream, it\'s probably in use by another app.'); // no permissions claimed

        permission = null; // there are devices, which I couldn't use

        this.hasDevices.next(false); // tells the listener about the error

        this.camerasNotFound.next(err);
        break;

      default:
        console.warn('@zxing/ngx-scanner', 'I was not able to define if I have permissions for camera or not.', err); // unknown

        permission = null; // this.hasDevices.next(undefined;

        break;
    }

    this.setPermission(permission); // tells the listener about the error

    this.permissionResponse.error(err);
    return permission;
  }
  /**
   * Returns a valid BarcodeFormat or fails.
   */


  getBarcodeFormatOrFail(format) {
    return typeof format === 'string' ? _zxing_library__WEBPACK_IMPORTED_MODULE_2__.BarcodeFormat[format.trim().toUpperCase()] : format;
  }
  /**
   * Return a code reader, create one if non exist
   */


  getCodeReader() {
    if (!this._codeReader) {
      const options = {
        delayBetweenScanAttempts: this.timeBetweenScans,
        delayBetweenScanSuccess: this.delayBetweenScanSuccess
      };
      this._codeReader = new BrowserMultiFormatContinuousReader(this.hints, options);
    }

    return this._codeReader;
  }
  /**
   * Starts the continuous scanning for the given device.
   *
   * @param deviceId The deviceId from the device.
   */


  scanFromDevice(deviceId) {
    var _this7 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const videoElement = _this7.previewElemRef.nativeElement;

      const codeReader = _this7.getCodeReader();

      const scanStream = yield codeReader.scanFromDeviceObservable(deviceId, videoElement);

      if (!scanStream) {
        throw new Error('Undefined decoding stream, aborting.');
      }

      const next = x => _this7._onDecodeResult(x.result, x.error);

      const error = err => _this7._onDecodeError(err);

      const complete = () => {};

      _this7._scanSubscription = scanStream.subscribe(next, error, complete);

      if (_this7._scanSubscription.closed) {
        return;
      }

      const controls = codeReader.getScannerControls();
      const hasTorchControl = typeof controls.switchTorch !== 'undefined';

      _this7.torchCompatible.next(hasTorchControl);
    })();
  }
  /**
   * Handles decode errors.
   */


  _onDecodeError(err) {
    this.dispatchScanError(err); // this.reset();
  }
  /**
   * Handles decode results.
   */


  _onDecodeResult(result, error) {
    if (result) {
      this.dispatchScanSuccess(result);
    } else {
      this.dispatchScanFailure(error);
    }

    this.dispatchScanComplete(result);
  }
  /**
   * Stops the code reader and returns the previous selected device.
   */


  _reset() {
    if (!this._codeReader) {
      return;
    }

    const device = this._device; // do not set this.device inside this method, it would create a recursive loop

    this.device = undefined;
    this._codeReader = undefined;
    return device;
  }
  /**
   * Resets the scanner and emits device change.
   */


  reset() {
    this._reset();

    this.deviceChange.emit(null);
  }
  /**
   * Sets the current device.
   */


  setDevice(device) {
    var _this8 = this;

    return (0,C_Users_AUXPAZZIOLI_Desktop_tomapedidos_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // instantly stops the scan before changing devices
      _this8.scanStop(); // correctly sets the new (or none) device


      _this8._device = device || undefined;

      if (!_this8._device) {
        // cleans the video because user removed the device
        _zxing_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserCodeReader.cleanVideoSource(_this8.previewElemRef.nativeElement);
      } // if enabled, starts scanning


      if (_this8._enabled && device) {
        yield _this8.scanFromDevice(device.deviceId);
      }
    })();
  }
  /**
   * Sets the permission value and emits the event.
   */


  setPermission(hasPermission) {
    this.hasPermission = hasPermission;
    this.permissionResponse.next(hasPermission);
  }

}

ZXingScannerComponent.ɵfac = function ZXingScannerComponent_Factory(t) {
  return new (t || ZXingScannerComponent)();
};

ZXingScannerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ZXingScannerComponent,
  selectors: [["zxing-scanner"]],
  viewQuery: function ZXingScannerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.previewElemRef = _t.first);
    }
  },
  inputs: {
    autofocusEnabled: "autofocusEnabled",
    timeBetweenScans: "timeBetweenScans",
    delayBetweenScanSuccess: "delayBetweenScanSuccess",
    autostart: "autostart",
    previewFitMode: "previewFitMode",
    device: "device",
    formats: "formats",
    videoConstraints: "videoConstraints",
    torch: "torch",
    enable: "enable",
    tryHarder: "tryHarder"
  },
  outputs: {
    autostarted: "autostarted",
    autostarting: "autostarting",
    torchCompatible: "torchCompatible",
    scanSuccess: "scanSuccess",
    scanFailure: "scanFailure",
    scanError: "scanError",
    scanComplete: "scanComplete",
    camerasFound: "camerasFound",
    camerasNotFound: "camerasNotFound",
    permissionResponse: "permissionResponse",
    hasDevices: "hasDevices",
    deviceChange: "deviceChange"
  },
  decls: 6,
  vars: 2,
  consts: [["preview", ""]],
  template: function ZXingScannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "video", null, 0)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Your browser does not support this feature, please try to upgrade it. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Seu navegador n\xE3o suporta este recurso, por favor tente atualiz\xE1-lo. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("object-fit", ctx.previewFitMode);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}video[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain}"],
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ZXingScannerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'zxing-scanner',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      template: "<video #preview [style.object-fit]=\"previewFitMode\">\n  <p>\n    Your browser does not support this feature, please try to upgrade it.\n  </p>\n  <p>\n    Seu navegador n\u00E3o suporta este recurso, por favor tente atualiz\u00E1-lo.\n  </p>\n</video>\n",
      styles: [":host{display:block}video{width:100%;height:auto;object-fit:contain}\n"]
    }]
  }], function () {
    return [];
  }, {
    previewElemRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: ['preview', {
        static: true
      }]
    }],
    autofocusEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    timeBetweenScans: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    delayBetweenScanSuccess: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    autostarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    autostarting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    autostart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    previewFitMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    torchCompatible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    scanSuccess: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    scanFailure: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    scanError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    scanComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    camerasFound: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    camerasNotFound: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    permissionResponse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    hasDevices: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    device: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    deviceChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    videoConstraints: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    torch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    enable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    tryHarder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();

class ZXingScannerModule {}

ZXingScannerModule.ɵfac = function ZXingScannerModule_Factory(t) {
  return new (t || ZXingScannerModule)();
};

ZXingScannerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ZXingScannerModule
});
ZXingScannerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ZXingScannerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
      declarations: [ZXingScannerComponent],
      exports: [ZXingScannerComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of zxing-scanner
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_plantillas_administracion_administracion_module_ts.js.map