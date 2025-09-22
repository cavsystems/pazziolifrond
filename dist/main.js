(self["webpackChunkpazzioli_front"] = self["webpackChunkpazzioli_front"] || []).push([["main"],{

/***/ 63060:
/*!********************************************!*\
  !*** ./src/app/angular-material/alerta.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogoAlerta": () => (/* binding */ DialogoAlerta)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);












function DialogoAlerta_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);
} }
function DialogoAlerta_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
} }
class DialogoAlerta {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.color = '';
        this.icono = '';
        this.ocultarBoton1 = false;
        this.ocultarBoton = false;
        this.type = 'number';
        this.inputIcon = 'credit_card';
        this.inputText = 'Total a ingresar';
        this.filteredEmails = [];
        this.domains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];
        this.valorInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]);
        this.titulo = data.titulo;
        this.mensaje = data.mensaje;
        this.boton1 = data.boton1;
        this.boton = data.boton;
        this.input = data.input;
        if (data.type) {
            this.type = data.type;
        }
        if (data.inputIcon) {
            this.inputIcon = data.inputIcon;
        }
        if (data.inputText) {
            this.inputText = data.inputText;
        }
        this.valorInput.setValue(data.valorInicialInput);
        if (data.boton) {
            this.ocultarBoton = false;
        }
        else {
            this.ocultarBoton = true;
        }
        if (data.boton1) {
            this.ocultarBoton1 = false;
        }
        else {
            this.ocultarBoton1 = true;
        }
        if (data.tipo) {
            if (data.tipo === 'error') {
                this.icono = 'error';
                this.color = 'warn';
            }
            else if (data.tipo === 'done') {
                this.icono = 'check_circle';
                this.color = 'primary';
            }
            else if (data.tipo === 'question') {
                this.icono = 'help';
                this.color = 'accent';
            }
            else if (data.tipo === 'info') {
                this.icono = 'info';
                this.color = 'primary';
            }
            else if (data.tipo === 'warning') {
                this.icono = 'warning';
                this.color = 'warn';
            }
            else {
                this.icono = 'error';
                this.color = 'warn';
                this.titulo = 'ERROR DE ALERTA';
                this.mensaje =
                    "El parametro tipo sólo recibe 5 valores de tipo String 'done', 'warning', 'info', 'error' y 'question' por favor envíe un valor válido.";
                this.boton = 'cerrar';
            }
        }
        else {
            this.color = 'primary';
        }
    }
    autocompletar() {
        this.valorInput.valueChanges.subscribe((value) => {
            this.updateSuggestions(value);
        });
    }
    updateSuggestions(value) {
        if (!value) {
            this.filteredEmails = [];
            return;
        }
        const parts = value.split('@');
        if (parts.length === 1) {
            // aún no ha escrito @
            this.filteredEmails = [];
        }
        else if (parts.length === 2) {
            const username = parts[0];
            const domainFragment = parts[1].toLowerCase();
            this.filteredEmails = this.domains
                .filter((domain) => domain.startsWith(domainFragment))
                .map((domain) => `${username}@${domain}`);
        }
    }
    onNoClick() {
        this.dialogRef.close();
        this.ocultarBoton1 = true;
    }
}
DialogoAlerta.ɵfac = function DialogoAlerta_Factory(t) { return new (t || DialogoAlerta)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
DialogoAlerta.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogoAlerta, selectors: [["dialogo-alerta"]], decls: 22, vars: 19, consts: [[1, "contenedor-alert"], [1, "icono-alert", 2, "height", "auto", 3, "color"], ["mat-dialog-title", "", "class", "titulo-alert", 4, "ngIf"], [1, "row", 3, "hidden"], [1, "col-md-12"], ["appearance", "fill", "rounded", ""], ["matInput", "", "id", "Valor", 3, "type", "formControl", "matAutocomplete", "keyup"], ["matSuffix", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", 1, "botones-alert", 2, "justify-content", "center"], ["mat-button", "", "color", "basic", 3, "hidden", "mat-dialog-close"], ["mat-flat-button", "", 3, "hidden", "color", "disabled", "mat-dialog-close"], ["mat-dialog-title", "", 1, "titulo-alert"], [3, "value"]], template: function DialogoAlerta_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogoAlerta_h1_3_Template, 2, 1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DialogoAlerta_Template_input_keyup_11_listener() { return ctx.autocompletar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-autocomplete", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DialogoAlerta_mat_option_16_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mensaje);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.valorInput)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inputIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredEmails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ocultarBoton1)("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.boton1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ocultarBoton)("color", ctx.color)("disabled", !ctx.valorInput.valid && ctx.input)("mat-dialog-close", ctx.valorInput.value || true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.boton, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions], encapsulation: 2 });


/***/ }),

/***/ 49559:
/*!*********************************************************!*\
  !*** ./src/app/angular-material/alertaitemsunitario.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Itemsinventariounitario": () => (/* binding */ Itemsinventariounitario)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/angular-material/alerta */ 63060);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/facturaservice/facturaservice.service */ 53358);
/* harmony import */ var src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/socket/socket.service */ 38245);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
























function Itemsinventariounitario_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Itemsinventariounitario_mat_option_14_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const option_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.buscaritem(option_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r19.ubicacion, " ");
  }
}

function Itemsinventariounitario_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "items");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function Itemsinventariounitario_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r23 + 1);
  }
}

function Itemsinventariounitario_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function Itemsinventariounitario_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r24.codigo, " ");
  }
}

function Itemsinventariounitario_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function Itemsinventariounitario_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r25.descripcion);
  }
}

function Itemsinventariounitario_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function Itemsinventariounitario_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r26.cantidad, " ");
  }
}

function Itemsinventariounitario_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ubicacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function Itemsinventariounitario_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.ubicacion, " ");
  }
}

function Itemsinventariounitario_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function Itemsinventariounitario_td_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24)(1, "a", 25)(2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Itemsinventariounitario_td_37_Template_img_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const element_r28 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.anularitem(element_r28.codigo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}

function Itemsinventariounitario_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 27);
  }
}

function Itemsinventariounitario_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 28);
  }
}

class Itemsinventariounitario {
  constructor(dialogRef, socketproduct, socketserviciofactura, servifactura, dialog, socketServices, data) {
    this.dialogRef = dialogRef;
    this.socketproduct = socketproduct;
    this.socketserviciofactura = socketserviciofactura;
    this.servifactura = servifactura;
    this.dialog = dialog;
    this.socketServices = socketServices;
    this.data = data;
    this.todo = true;
    this.pedido = [];
    this.numero = 0;
    this.otrocorreo = '';
    this.total_registros = 0;
    this.registros_max = 15;
    this.pagina = 1;
    this.descripcio = '';
    this.ubicacion = '';
    this.descrip = '';
    this.loading = false;
    this.opcionesFiltradas = [];
    this.buscarDescripcion = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('');
    this.items = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
    this.cantidadregistros = 0;
    this.displayedColumns = ['item', 'codigo', 'descripcion', 'cantidad', 'ubicacion', 'accionnes'];
    this.consultaritemsiventario(this.data.itemsinven);
    this.servifactura.conectar();
  }

  displayFn(_prod) {
    return _prod && _prod.ubicacion ? _prod.ubicacion : '';
  }

  traertodo() {
    if (!this.todo) {
      this.pagina = 1;
      this.descrip = '';
      this.buscarDescripcion.setValue('');
      this.consultaritemsiventario(this.data.itemsinven);
    } else {
      this.items.data = [];
      this.cantidadregistros = 0;
    }
  }

  consultaritemsiventario(descrip) {
    this.socketserviciofactura.consultaritems(this.pagina, descrip).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(data => {
      this.items.data = data.respuesta;
      this.cantidadregistros = data.nregistros.suma;
    });
  }

  buscaritem(data) {
    this.ubicacion = this.buscarDescripcion.value.ubicacion;
    this.todo = false;
    this.pagina = 1;
    this.socketserviciofactura.consultaritems(this.pagina, this.data.itemsinven, this.ubicacion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(data => {
      this.items.data = data.respuesta;
      this.cantidadregistros = data.nregistros.suma;
      this.items.data = [...this.items.data];
    });
  }

  onScroll(event) {
    const element = event.target;

    if (element.scrollHeight - element.scrollTop === element.clientHeight && this.cantidadregistros > this.items.data.length) {
      this.pagina++;
      this.servifactura.consultaritemsiventario(this.pagina, this.descrip).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(data => {
        for (let i = 0; i < data.respuesta.length; i++) {
          this.items.data = this.items.data.filter(datos => datos.codigo === data.respuesta[i].codigo);
        }

        this.items.data.push(...data.respuesta);
        this.items.data = [...this.items.data];
        this.loading = true;
      });
    }
  }

  buscarProductos(key, campo) {
    var _this = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.servifactura.consultaritemubicacion(_this.buscarDescripcion.value).subscribe(data => {
        _this.opcionesFiltradas = data.respuesta;
      });
      /*await this.repuestaproductos(
        'DESCRIPCION',
        this.buscarDescripcion.value,
        true
      );*/

    })();
  }

  repuestaproductos(condicion = '', datoCondicion, buscartodo = false) {
    var _this2 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this2.socketServices.escucha = _this2.socketproduct.obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion,
          consulta: 'productos',
          datoCondicion,
          sede: localStorage.getItem('sede')
        }); //this.socketServices.consultarTercero(this.sedeSeleccionada.po.canalsocket, '', '', this.sedeSeleccionada.usuario.usuario);

        _this2.socketServices.escucha.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (info) {
            //this.totalPagar = 0;
            info = JSON.parse(info);

            switch (info.tipoConsulta) {
              case 'PRODUCTO':
                if (info.estadoPeticion === 'SUCCESS') {
                  _this2.procesarproductos(info, true, buscartodo);

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

  anularitem(element) {
    this.socketserviciofactura.eliminaritemsinventario({
      codigo: element
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(data => {
      if (data.response) {
        this.pagina = 1;
        this.socketserviciofactura.consultaritems(this.pagina, this.data.itemsinven, this.ubicacion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(data => {
          this.items.data = data.respuesta;
          this.cantidadregistros = data.nregistros.suma;
          this.items.data = [...this.items.data];
        });
      }
    });
  }

  procesarproductos(info, estado, buscartodo) {
    if (estado) {
      this.opcionesFiltradas = info.mensajePeticion.map(producto => {
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
    }
  }

  abrirpanel() {
    if (this.opcionesFiltradas.length > 0) {
      this.inDescripcion.openPanel();
    }
  }

}

Itemsinventariounitario.ɵfac = function Itemsinventariounitario_Factory(t) {
  return new (t || Itemsinventariounitario)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_2__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_3__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_3__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA));
};

Itemsinventariounitario.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: Itemsinventariounitario,
  selectors: [["Items-inventariounitario"]],
  viewQuery: function Itemsinventariounitario_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.inDescripcion = _t.first);
    }
  },
  decls: 40,
  vars: 9,
  consts: [[2, "display", "flex", "justify-content", "space-between", "width", "100%"], ["appearance", "fill", "search", "", 2, "flex", "0 0 45%"], ["matInput", "", "placeholder", "", "id", "descripcion", 3, "formControl", "matAutocomplete", "keyup"], ["trigger", "matAutocompleteTrigger", "descripcion", ""], [1, "mi-autocomplete-panel", 3, "displayWith"], ["auto", "matAutocomplete"], [2, "height", "246px", 3, "items"], ["scroll_prods", ""], ["class", "desplegable", 3, "value", "click", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "click"], [2, "max-height", "400px", "overflow-y", "auto", 3, "scroll"], ["mat-table", "", 1, "mat-elevation-z8", "col-12", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigo"], ["matColumnDef", "descripcion"], ["matColumnDef", "cantidad"], ["matColumnDef", "ubicacion"], ["matColumnDef", "accionnes"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "desplegable", 3, "value", "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "socondary"], ["src", "../../../../../assets/images/delete_button.svg", 1, "imgicon", 2, "width", "30px", "height", "33px", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function Itemsinventariounitario_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-card")(2, "mat-card-header")(3, "div", 0)(4, "mat-form-field", 1)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Ubicacion");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function Itemsinventariounitario_Template_input_keyup_7_listener($event) {
        return ctx.buscarProductos($event, "descripcion");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-autocomplete", 4, 5)(12, "virtual-scroller", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, Itemsinventariounitario_mat_option_14_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-checkbox", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function Itemsinventariounitario_Template_mat_checkbox_ngModelChange_15_listener($event) {
        return ctx.todo = $event;
      })("click", function Itemsinventariounitario_Template_mat_checkbox_click_15_listener() {
        return ctx.traertodo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "todo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-card-content")(18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function Itemsinventariounitario_Template_div_scroll_18_listener($event) {
        return ctx.onScroll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "table", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, Itemsinventariounitario_th_21_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, Itemsinventariounitario_td_22_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, Itemsinventariounitario_th_24_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, Itemsinventariounitario_td_25_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, Itemsinventariounitario_th_27_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, Itemsinventariounitario_td_28_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, Itemsinventariounitario_th_30_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, Itemsinventariounitario_td_31_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, Itemsinventariounitario_th_33_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, Itemsinventariounitario_td_34_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, Itemsinventariounitario_th_36_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, Itemsinventariounitario_td_37_Template, 3, 0, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, Itemsinventariounitario_tr_38_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, Itemsinventariounitario_tr_39_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.buscarDescripcion)("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.displayFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.opcionesFiltradas);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r3.viewPortItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.todo);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    }
  },
  dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerComponent]
});

/***/ }),

/***/ 99108:
/*!**********************************************!*\
  !*** ./src/app/angular-material/alertaob.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogoAlertaob": () => (/* binding */ DialogoAlertaob)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/text-field */ 35804);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);











function DialogoAlertaob_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);
} }
class DialogoAlertaob {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.color = '';
        this.icono = '';
        this.ocultarBoton1 = false;
        this.ocultarBoton = false;
        this.type = 'number';
        this.inputIcon = '';
        this.inputText = 'Total a ingresar';
        this.domains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];
        this.valorInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('');
        this.titulo = data.titulo;
        this.mensaje = data.mensaje;
        this.boton1 = data.boton1;
        this.boton = data.boton;
        this.input = data.input;
        if (data.type) {
            this.type = data.type;
        }
        if (data.inputIcon) {
            this.inputIcon = data.inputIcon;
        }
        if (data.inputText) {
            this.inputText = data.inputText;
        }
        this.valorInput.setValue(data.valorInicialInput);
        if (data.boton) {
            this.ocultarBoton = false;
        }
        else {
            this.ocultarBoton = true;
        }
        if (data.boton1) {
            this.ocultarBoton1 = false;
        }
        else {
            this.ocultarBoton1 = true;
        }
        if (data.tipo) {
            if (data.tipo === 'error') {
                this.icono = 'error';
                this.color = 'warn';
            }
            else if (data.tipo === 'done') {
                this.icono = 'check_circle';
                this.color = 'primary';
            }
            else if (data.tipo === 'question') {
                this.icono = 'help';
                this.color = 'accent';
            }
            else if (data.tipo === 'info') {
                this.icono = 'info';
                this.color = 'primary';
            }
            else if (data.tipo === 'warning') {
                this.icono = 'warning';
                this.color = 'warn';
            }
            else {
                this.icono = 'error';
                this.color = 'warn';
                this.titulo = 'ERROR DE ALERTA';
                this.mensaje =
                    "El parametro tipo sólo recibe 5 valores de tipo String 'done', 'warning', 'info', 'error' y 'question' por favor envíe un valor válido.";
                this.boton = 'cerrar';
            }
        }
        else {
            this.color = 'primary';
        }
    }
    onNoClick() {
        this.dialogRef.close();
        this.ocultarBoton1 = true;
    }
}
DialogoAlertaob.ɵfac = function DialogoAlertaob_Factory(t) { return new (t || DialogoAlertaob)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
DialogoAlertaob.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogoAlertaob, selectors: [["dialogo-alerta"]], decls: 19, vars: 20, consts: [[1, "contenedor-alert"], [1, "icono-alert", 2, "height", "auto", 3, "color"], ["mat-dialog-title", "", "class", "titulo-alert", 4, "ngIf"], [1, "row", 3, "hidden"], [1, "col-md-12"], ["appearance", "fill", "rounded", ""], ["matInput", "", "id", "Valor", 3, "type", "cdkTextareaAutosize", "cdkAutosizeMaxRows", "cdkAutosizeMinRows", "formControl"], ["matSuffix", ""], ["mat-dialog-actions", "", 1, "botones-alert", 2, "justify-content", "center"], ["mat-button", "", "color", "basic", 3, "hidden", "mat-dialog-close"], ["mat-flat-button", "", 3, "hidden", "color", "disabled", "mat-dialog-close"], ["mat-dialog-title", "", 1, "titulo-alert"]], template: function DialogoAlertaob_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogoAlertaob_h1_3_Template, 2, 1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mensaje);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("cdkTextareaAutosize", true)("cdkAutosizeMaxRows", 12)("cdkAutosizeMinRows", 5)("formControl", ctx.valorInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inputIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ocultarBoton1)("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.boton1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.ocultarBoton)("color", ctx.color)("disabled", !ctx.valorInput.valid && ctx.input)("mat-dialog-close", ctx.valorInput.value || true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.boton, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__.CdkTextareaAutosize, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions], encapsulation: 2 });


/***/ }),

/***/ 24053:
/*!**************************************************!*\
  !*** ./src/app/angular-material/alertarecibo.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Recibopago": () => (/* binding */ Recibopago)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _alerta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerta */ 63060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _utils_formaterafecha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/formaterafecha */ 19818);
/* harmony import */ var _utils_formatearfechasql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/formatearfechasql */ 12740);
/* harmony import */ var src_app_utils_pdfrecibo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/pdfrecibo */ 32678);
/* harmony import */ var _utils_pdfrecibogmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/pdfrecibogmail */ 34692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/facturaservice/facturaservice.service */ 53358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
























function Recibopago_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", option_r8.razonSocial, " ");
  }
}

function Recibopago_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 24)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td")(12, "div", 12)(13, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function Recibopago_tr_56_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.generarpdfrecibo(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function Recibopago_tr_56_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.enviarcorreo(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "forward_to_inbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r9.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r9.razonSocial);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r9.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.formatearfechas(item_r9.fecha));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$ ", item_r9.Valor.toLocaleString("de-DE"), "");
  }
}

class Recibopago {
  constructor(dialogRef, socketproduct, socketserviciofactura, servifactura, dialog, data) {
    this.dialogRef = dialogRef;
    this.socketproduct = socketproduct;
    this.socketserviciofactura = socketserviciofactura;
    this.servifactura = servifactura;
    this.dialog = dialog;
    this.data = data;
    this.id = '';
    this.letracli = null;
    this.buscarDescripcioncli = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl('');
    this.recibo = [];
    this.total_venta_general = 0;
    this.cliente = []; //this.total_venta_general = data.reduce((i, item) => (i += item.total), 0);
  }

  buscarcliente(event) {
    if (this.buscarDescripcioncli.value === '') {
      this.cliente = [];
    } else {
      this.socketproduct.obtenerInfo('terceros', 'pazzioli-pos-3', {
        metodo: 'CONSULTAR',
        condicion: 'nombres',
        consulta: 'TERCEROS',
        canalserver: 'terceros',
        datoCondicion: this.buscarDescripcioncli.value
      }).subscribe(dato => {
        if (JSON.parse(dato).estadoPeticion === 'SUCCESS') {
          this.cliente = JSON.parse(dato).mensajePeticion;
        }
      });
    }
  }

  formatearfechas(data) {
    return (0,_utils_formatearfechasql__WEBPACK_IMPORTED_MODULE_3__.formatearfechasql)(data);
  }

  seleccionar(option) {
    this.letracli = option;
  }

  traerrecibo() {
    let fechafinal = '';
    let fechainicial = '';

    if (this.fechafinal) {
      fechafinal = (0,_utils_formaterafecha__WEBPACK_IMPORTED_MODULE_2__.formatearFecha)(this.fechafinal);
    }

    if (this.fechaInicial) {
      fechainicial = (0,_utils_formaterafecha__WEBPACK_IMPORTED_MODULE_2__.formatearFecha)(this.fechaInicial);
    }

    this.socketserviciofactura.traerrecibos(fechainicial, fechafinal, this.buscarDescripcioncli.value.razonSocial).subscribe(data => {
      this.recibo = data.respuesta;
      this.nombreComprobante = data.nombreComprobanteRI;
      this.razonsocial = data.razonsocial;
      this.nit = data.nit;
      this.direccion = data.direccion;
    });
  }

  generarpdfrecibo(item) {
    this.socketserviciofactura.totalrecibo(item.codigotercero).subscribe(data => {
      (0,src_app_utils_pdfrecibo__WEBPACK_IMPORTED_MODULE_4__.generatePDFrecibos)({
        recibo: item,
        nombreComprobanteRI: this.nombreComprobante,
        saldoactual: data.respuesta[0].suma,
        razonsocial: this.razonsocial,
        nit: this.nit,
        usuario: data.usuario,
        direccion: this.direccion
      });
    });
    /* generatePDFrecibos({
      recibo: item,
      nombreComprobanteRI: this.nombreComprobante,
    });*/
  }

  enviarcorreo(item) {
    var _this = this;

    const dialogref = this.dialog.open(_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
      data: {
        boton: 'Continuar',
        input: true,
        boton1: 'Cancelar',
        mensaje: 'Digite otro correo si lo desea',
        type: 'email',
        inputIcon: 'mail',
        inputText: 'Ingrese correo',
        tipo: 'info'
      },
      disableClose: true
    });
    dialogref.afterClosed().subscribe(data => {
      if (data) {
        this.socketserviciofactura.totalrecibo(item.codigotercero).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datos) {
            const pdf = yield (0,_utils_pdfrecibogmail__WEBPACK_IMPORTED_MODULE_5__.generatePDFrecibosgmail)({
              recibo: item,
              nombreComprobanteRI: _this.nombreComprobante,
              saldoactual: datos.respuesta[0].suma,
              razonsocial: _this.razonsocial,
              nit: _this.nit,
              usuario: data.usuario,
              direccion: _this.direccion
            });

            _this.servifactura.enviaremail({
              cliente: item,
              pdf: pdf,
              email: data
            }).subscribe(datos => {
              if (datos.estadoPeticion === 'Done') {
                const dialogref = _this.dialog.open(_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
                  data: {
                    boton: 'OK',
                    tipo: 'done',
                    mensaje: 'Correo enviado'
                  },
                  disableClose: true
                });

                dialogref.afterClosed().subscribe(datos => {}); //                  //window.location.reload();
              }
            });
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    });
  }

  displayFn(cliente) {
    return cliente && cliente.razonSocial ? cliente.razonSocial : '';
  }

}

Recibopago.ɵfac = function Recibopago_Factory(t) {
  return new (t || Recibopago)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_6__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_7__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_7__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
};

Recibopago.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: Recibopago,
  selectors: [["Recibo-alerta"]],
  decls: 57,
  vars: 12,
  consts: [[1, "contenedor-alert", 2, "display", "flex", "justify-content", "center"], [2, "overflow", "auto"], [2, "display", "flex", "flex-direction", "row"], ["appearance", "fill", "search", ""], [2, "font-size", "1rem"], ["matInput", "", "placeholder", "", "id", "valor", "type", "text", 3, "formControl", "matAutocomplete", "keyup"], ["inValor", "", "trigger", "matAutocompleteTrigger"], [1, "mi-autocomplete-panel", 3, "displayWith"], ["auto", "matAutocomplete"], [2, "height", "246px", 3, "items"], ["scroll_prods", ""], ["class", "desplegable", 3, "value", 4, "ngFor", "ngForOf"], [2, "display", "flex"], [1, "example-full-width"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matIconSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""], [1, "example-full-width", 2, "padding", "0 !important"], ["pickerfinal", ""], [2, "display", "flex", "justify-content", "center", "align-items", "center"], [2, "max-height", "30px", 3, "click"], [2, "width", "100%", "min-width", "700px", "max-height", "200px", "overflow", "auto"], [2, "width", "100%"], [1, "trrecibo"], ["class", "trrecibo", 4, "ngFor", "ngForOf"], [1, "desplegable", 3, "value"], ["mat-icon-button", "", "color", "socondary", 3, "click"], ["src", "../../../../../assets/images/imgpdf.svg", 1, "imgicon", 2, "color", "#fe676c", "width", "34px", "height", "36px"], ["mat-icon-button", "", 2, "color", "#5db5f2", 3, "click"]],
  template: function Recibopago_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "div", 2)(4, "div")(5, "mat-form-field", 3)(6, "mat-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup", function Recibopago_Template_input_keyup_8_listener($event) {
        return ctx.buscarcliente($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-autocomplete", 7, 8)(13, "virtual-scroller", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, Recibopago_mat_option_15_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 12)(17, "mat-form-field", 13)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "fecha inicial");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function Recibopago_Template_input_ngModelChange_20_listener($event) {
        return ctx.fechaInicial = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-datepicker-toggle", 15)(22, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "keyboard_arrow_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "mat-datepicker", null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-form-field", 18)(27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "fecha final");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function Recibopago_Template_input_ngModelChange_29_listener($event) {
        return ctx.fechafinal = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "mat-datepicker-toggle", 15)(31, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "keyboard_arrow_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "mat-datepicker", null, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 20)(36, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function Recibopago_Template_button_click_36_listener() {
        return ctx.traerrecibo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " buscar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "mat-card-content", 12)(39, "div", 22)(40, "table", 23)(41, "thead")(42, "tr", 24)(43, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Codigo recibo");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Vendedor");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Fecha creacion");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Valor recibo");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Acciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, Recibopago_tr_56_Template, 18, 5, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](14);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](25);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](34);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.buscarDescripcioncli)("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayWith", ctx.displayFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx.cliente);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _r3.viewPortItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matDatepicker", _r5)("ngModel", ctx.fechaInicial);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("for", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matDatepicker", _r6)("ngModel", ctx.fechafinal);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("for", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.recibo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggleIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_8__.VirtualScrollerComponent],
  styles: ["\n      ::ng-deep .mat-form-field-infix {\n        display: flex;\n        padding: 0 !important;\n      }\n\n      ::ng-deep .example-full-width {\n        div {\n          padding: 0 !important;\n        }\n      }\n\n      .trrecibo {\n        border: 1px solid #000;\n        display: flex;\n        width: 100%;\n        td {\n          justify-content: center;\n          display: flex;\n          width: 100%;\n        }\n      }\n\n      .mat-dialog-container {\n        overflow-x: hidden;\n        overflow-y: auto;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0YXJlY2liby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxhQUFhO1FBQ2IscUJBQXFCO01BQ3ZCOztNQUVBO1FBQ0U7VUFDRSxxQkFBcUI7UUFDdkI7TUFDRjs7TUFFQTtRQUNFLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsV0FBVztRQUNYO1VBQ0UsdUJBQXVCO1VBQ3ZCLGFBQWE7VUFDYixXQUFXO1FBQ2I7TUFDRjs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixnQkFBZ0I7TUFDbEIiLCJmaWxlIjoiYWxlcnRhcmVjaWJvLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6Om5nLWRlZXAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50cnJlY2libyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZCB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICB9XG4gICAgIl19 */"],
  encapsulation: 2
});

/***/ }),

/***/ 29405:
/*!************************************************************!*\
  !*** ./src/app/angular-material/alertaritemsinventario.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Itemsinventario": () => (/* binding */ Itemsinventario)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/angular-material/alerta */ 63060);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _alertaitemsunitario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertaitemsunitario */ 49559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/facturaservice/facturaservice.service */ 53358);
/* harmony import */ var src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/socket/socket.service */ 38245);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);

























function Itemsinventario_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function Itemsinventario_mat_option_14_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const option_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.buscaritem(option_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r15.descripcion, " ");
  }
}

function Itemsinventario_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "items");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Itemsinventario_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r19 + 1);
  }
}

function Itemsinventario_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Itemsinventario_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r20.descripcion);
  }
}

function Itemsinventario_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Itemsinventario_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r21.cantidad, " ");
  }
}

function Itemsinventario_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Itemsinventario_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 22)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function Itemsinventario_td_31_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const element_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.veritems(element_r22.descripcion));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function Itemsinventario_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 25);
  }
}

function Itemsinventario_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 26);
  }
}

class Itemsinventario {
  constructor(dialogRef, socketproduct, socketserviciofactura, servifactura, dialog, socketServices, data) {
    this.dialogRef = dialogRef;
    this.socketproduct = socketproduct;
    this.socketserviciofactura = socketserviciofactura;
    this.servifactura = servifactura;
    this.dialog = dialog;
    this.socketServices = socketServices;
    this.data = data;
    this.pedido = [];
    this.numero = 0;
    this.otrocorreo = '';
    this.total_registros = 0;
    this.registros_max = 15;
    this.pagina = 1;
    this.descripcio = '';
    this.todo = true;
    this.descrip = '';
    this.loading = false;
    this.opcionesFiltradas = [];
    this.buscarDescripcion = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('');
    this.items = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource([]);
    this.cantidadregistros = 0;
    this.displayedColumns = ['item', 'descripcion', 'cantidad', 'accionnes'];
    this.consultaritemsiventario();
  }

  displayFn(_prod) {
    return _prod && _prod.descripcion ? _prod.descripcion : '';
  }

  traertodo() {
    if (!this.todo) {
      this.pagina = 1;
      this.descrip = '';
      this.buscarDescripcion.setValue('');
      this.consultaritemsiventario();
    } else {
      this.items.data = [];
      this.cantidadregistros = 0;
    }
  }

  consultaritemsiventario() {
    this.socketserviciofactura.consultaritemsiventario(this.pagina).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(data => {
      this.items.data = data.respuesta;
      this.cantidadregistros = data.nregistros.suma;
    });
  }

  buscaritem(data) {
    this.descrip = this.buscarDescripcion.value.descripcion;
    this.pagina = 1;
    this.todo = false;
    this.socketserviciofactura.consultaritemsiventario(this.pagina, this.descrip).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(data => {
      this.items.data = data.respuesta;
      this.items.data = [...this.items.data];
    });
  }

  onScroll(event) {
    const element = event.target;

    if (element.scrollHeight - element.scrollTop === element.clientHeight && this.cantidadregistros > this.items.data.length) {
      this.pagina++;
      this.servifactura.consultaritemsiventario(this.pagina, this.descrip).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(data => {
        for (let i = 0; i < data.respuesta.length; i++) {
          this.items.data = this.items.data.filter(datos => datos.codigo === data.respuesta[i].codigo);
        }

        this.items.data.push(...data.respuesta);
        this.items.data = [...this.items.data];
        this.loading = true;
      });
    }
  }

  veritems(itemsinven) {
    const dialog = this.dialog.open(_alertaitemsunitario__WEBPACK_IMPORTED_MODULE_2__.Itemsinventariounitario, {
      data: {
        itemsinven: itemsinven
      }
    });
    dialog.afterClosed().subscribe(result => {
      this.pagina = 1;
      this.socketserviciofactura.consultaritemsiventario(this.pagina, this.descrip).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(data => {
        this.items.data = data.respuesta;
        this.items.data = [...this.items.data];
      });
    });
  }

  buscarProductos(key, campo) {
    var _this = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.repuestaproductos('DESCRIPCION', _this.buscarDescripcion.value, true);
    })();
  }

  repuestaproductos(condicion = '', datoCondicion, buscartodo = false) {
    var _this2 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this2.socketServices.escucha = _this2.socketproduct.obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion,
          consulta: 'productos',
          datoCondicion,
          sede: localStorage.getItem('sede')
        }); //this.socketServices.consultarTercero(this.sedeSeleccionada.po.canalsocket, '', '', this.sedeSeleccionada.usuario.usuario);

        _this2.socketServices.escucha.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (info) {
            //this.totalPagar = 0;
            info = JSON.parse(info);

            switch (info.tipoConsulta) {
              case 'PRODUCTO':
                if (info.estadoPeticion === 'SUCCESS') {
                  _this2.procesarproductos(info, true, buscartodo);

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

  procesarproductos(info, estado, buscartodo) {
    if (estado) {
      this.opcionesFiltradas = info.mensajePeticion.map(producto => {
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
    }
  }

  abrirpanel() {
    if (this.opcionesFiltradas.length > 0) {
      this.inDescripcion.openPanel();
    }
  }

}

Itemsinventario.ɵfac = function Itemsinventario_Factory(t) {
  return new (t || Itemsinventario)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_4__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_4__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
};

Itemsinventario.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: Itemsinventario,
  selectors: [["Items-inventario"]],
  viewQuery: function Itemsinventario_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.inDescripcion = _t.first);
    }
  },
  decls: 34,
  vars: 9,
  consts: [[2, "display", "flex", "justify-content", "space-between", "width", "100%"], ["appearance", "fill", "search", "", 2, "flex", "0 0 45%"], ["matInput", "", "placeholder", "", "id", "descripcion", 3, "formControl", "matAutocomplete", "keyup"], ["trigger", "matAutocompleteTrigger", "descripcion", ""], [1, "mi-autocomplete-panel", 3, "displayWith"], ["auto", "matAutocomplete"], [2, "height", "246px", 3, "items"], ["scroll_prods", ""], ["class", "desplegable", 3, "value", "click", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "click"], [2, "max-height", "400px", "overflow-y", "auto", 3, "scroll"], ["mat-table", "", 1, "mat-elevation-z8", "col-12", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "cantidad"], ["matColumnDef", "accionnes"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "desplegable", 3, "value", "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "socondary", 3, "click"], ["src", "../../../../../assets/images/imegenlupa.svg", 1, "imgicon", 2, "width", "30px", "height", "33px"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function Itemsinventario_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "mat-card")(2, "mat-card-header")(3, "div", 0)(4, "mat-form-field", 1)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Filtro");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function Itemsinventario_Template_input_keyup_7_listener($event) {
        return ctx.buscarProductos($event, "descripcion");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-autocomplete", 4, 5)(12, "virtual-scroller", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, Itemsinventario_mat_option_14_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-checkbox", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function Itemsinventario_Template_mat_checkbox_ngModelChange_15_listener($event) {
        return ctx.todo = $event;
      })("click", function Itemsinventario_Template_mat_checkbox_click_15_listener() {
        return ctx.traertodo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "todo");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-card-content")(18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function Itemsinventario_Template_div_scroll_18_listener($event) {
        return ctx.onScroll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "table", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, Itemsinventario_th_21_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, Itemsinventario_td_22_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, Itemsinventario_th_24_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, Itemsinventario_td_25_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, Itemsinventario_th_27_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, Itemsinventario_td_28_Template, 2, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](29, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, Itemsinventario_th_30_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, Itemsinventario_td_31_Template, 3, 0, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, Itemsinventario_tr_32_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, Itemsinventario_tr_33_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.buscarDescripcion)("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayWith", ctx.displayFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.opcionesFiltradas);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _r3.viewPortItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.todo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    }
  },
  dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__.VirtualScrollerComponent]
});

/***/ }),

/***/ 16782:
/*!************************************************************!*\
  !*** ./src/app/angular-material/alertaupdateitempedido.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogoAlertaitemspedido": () => (/* binding */ DialogoAlertaitemspedido)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);







class DialogoAlertaitemspedido {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.precio = 0;
        this.cantidad = 0;
        this.modificarPrecio = 0;
        this.precio = data.precio;
        this.cantidad = data.cantidad;
        this.modificarPrecio = data.modificarPrecio;
    }
    onNoClick() {
        this.dialogRef.close({
            precio: Number(this.precio),
            cantidad: this.cantidad
        });
    }
}
DialogoAlertaitemspedido.ɵfac = function DialogoAlertaitemspedido_Factory(t) { return new (t || DialogoAlertaitemspedido)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
DialogoAlertaitemspedido.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogoAlertaitemspedido, selectors: [["dialogo-alerta"]], decls: 26, vars: 7, consts: [[1, "contenedor-alert"], [1, "row"], [1, "col-12", "row"], [1, "col-12"], [1, "col-12", 2, "display", "flex", "flex-wrap", "wrap"], [2, "flex", "0 0 50%"], [1, "col-12", "col-md-12", "col-sm-12", "col-lg-6"], ["appearance", "fill", "rounded", ""], ["matInput", "", "type", "text", "id", "Valor", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "id", "Valor", 3, "ngModel", "ngModelChange"], [2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["mat-button", "", "color", "basic", 3, "click"], ["mat-button", "", "color", "basic", 3, "mat-dialog-close"]], template: function DialogoAlertaitemspedido_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "mat-form-field", 7)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogoAlertaitemspedido_Template_textarea_ngModelChange_15_listener($event) { return ctx.precio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6)(17, "mat-form-field", 7)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogoAlertaitemspedido_Template_textarea_ngModelChange_20_listener($event) { return ctx.cantidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogoAlertaitemspedido_Template_button_click_22_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Actulizar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Precio: ", ctx.precio, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cantidad Disponible: ", ctx.data.cantidaddisponible, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.modificarPrecio === 1)("ngModel", ctx.precio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cantidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["@media(max-width:420px){\n    span[_ngcontent-%COMP%]{\n       display: block !important;   \n    flex:0 0 100% !important ;\n    }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0YXVwZGF0ZWl0ZW1wZWRpZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO0lBQ0E7T0FDRyx5QkFBeUI7SUFDNUIseUJBQXlCO0lBQ3pCO0lBQ0EiLCJmaWxlIjoiYWxlcnRhdXBkYXRlaXRlbXBlZGlkby50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIEBtZWRpYShtYXgtd2lkdGg6NDIwcHgpe1xuICAgIHNwYW57XG4gICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgICBcbiAgICBmbGV4OjAgMCAxMDAlICFpbXBvcnRhbnQgO1xuICAgIH1cbiAgICB9XG4gICAgXG4gICAgIl19 */"] });


/***/ }),

/***/ 57325:
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
// PRIMERO IMPORTO LOS MODULOS QUE VOY A USAR DE ESTA MANERA






















// ESTA ES LA CLASE DE ANGULAR MATERIAL QUE VOY A USAR EN CADA PAGINA
// DEBO IMPORTARLA EN EL MODULO PADRE (APP) Y EN EL HIJO (ADMIN)
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerModule], imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        ///////ANGULAR MATERIAL ///////
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__.VirtualScrollerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        ///////ANGULAR MATERIAL ///////
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__.VirtualScrollerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        ///////ANGULAR MATERIAL ///////
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__.VirtualScrollerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule,
        ///////ANGULAR MATERIAL ///////
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__.VirtualScrollerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule] }); })();


/***/ }),

/***/ 52567:
/*!****************************************************!*\
  !*** ./src/app/angular-material/detallespedido.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Detallespedido": () => (/* binding */ Detallespedido)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);







function Detallespedido_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _producto_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_producto_r2.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_producto_r2.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_producto_r2.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", _producto_r2.precio.toLocaleString("de-DE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", _producto_r2.total.toLocaleString("de-DE"), "");
} }
class Detallespedido {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.id = '';
        this.total_venta_general = 0;
        this.total_venta_general = data.reduce((i, item) => (i += item.total), 0);
    }
}
Detallespedido.ɵfac = function Detallespedido_Factory(t) { return new (t || Detallespedido)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
Detallespedido.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Detallespedido, selectors: [["pedidodialogo-alerta"]], decls: 28, vars: 3, consts: [[1, "contenedor-alert", 2, "width", "100%", "height", "100%"], [2, "width", "100%", "height", "100%"], [2, "width", "100%", "height", "100%", 3, "items"], ["scroll_productosMostrar", ""], [2, "width", "100%"], [4, "ngFor", "ngForOf"], [2, "text-align", "end"], [2, "font-weight", "bold", "font-size", "1rem"]], template: function Detallespedido_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "virtual-scroller", 2, 3)(4, "mat-card-content", 1)(5, "mat-list", 1)(6, "table", 4)(7, "thead")(8, "tr")(9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Codigo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, Detallespedido_tr_20_Template, 11, 5, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-card-footer", 6)(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Total venta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.viewPortItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.total_venta_general.toLocaleString("de-DE"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardFooter, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatList, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__.VirtualScrollerComponent], styles: ["button[pedido_con][_ngcontent-%COMP%] {\n        max-width: 200px;\n        font-color: #0000;\n        font-size: 1rem;\n        background: #eaeded;\n      }\n\n      .hiden[_ngcontent-%COMP%] {\n        display: none;\n      }\n\n      td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex: 1;\n      }\n\n      tr[_ngcontent-%COMP%] {\n        display: flex;\n        border-bottom: 1px solid #000;\n        column-gap: 2px !important;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGVzcGVkaWRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLG1CQUFtQjtNQUNyQjs7TUFFQTtRQUNFLGFBQWE7TUFDZjs7TUFFQTs7UUFFRSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixPQUFPO01BQ1Q7O01BRUE7UUFDRSxhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLDBCQUEwQjtNQUM1QiIsImZpbGUiOiJkZXRhbGxlc3BlZGlkby50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgYnV0dG9uW3BlZGlkb19jb25dIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgZm9udC1jb2xvcjogIzAwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZWRlZDtcbiAgICAgIH1cblxuICAgICAgLmhpZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgdGQsXG4gICAgICB0aCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICB0ciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICBjb2x1bW4tZ2FwOiAycHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 6276:
/*!***************************************************!*\
  !*** ./src/app/angular-material/pedidoguardos.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pedidoguardado": () => (/* binding */ Pedidoguardado)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _detallespedido__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detallespedido */ 52567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);














function Pedidoguardado_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "mat-card", 11)(3, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pedidoguardado_div_13_Template_mat_card_content_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const _producto_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.elegirpedido(_producto_r2._id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 13)(5, "table", 11)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Identificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Nombre cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Fecha reserva");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Hora reserva");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-card-actions")(27, "div", 14)(28, "div", 15)(29, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Retomar pedido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 15)(32, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Pedidoguardado_div_13_Template_button_click_32_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const _producto_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.verdetalles(_producto_r2.productos_pedido)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Ver detalles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const _producto_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "p_" + _producto_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_producto_r2.cliente.identificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_producto_r2.cliente.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.formatearfecha(_producto_r2.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.formaterahora(_producto_r2.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("hiden", ctx_r1.id !== _producto_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", _producto_r2);
} }
class Pedidoguardado {
    constructor(dialogRef, data, dialog, serviproduct) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.serviproduct = serviproduct;
        this.terminobusqueda = '';
        this.id = '';
        this.data = this.data.sort();
        this.datatemporal = this.data;
    }
    elegirpedido(id) {
        this.id = id;
    }
    formatearfecha(timestap) {
        let fechaActual = new Date(timestap);
        let diaActual = fechaActual.getFullYear() +
            '-' +
            (fechaActual.getMonth() + 1) +
            '-' +
            fechaActual.getDate();
        return diaActual;
    }
    formaterahora(timestap) {
        //Para agregar si es AM o PM a tu función formatearfecha, puedes obtener la hora y luego determinar si está antes o después del mediodía.
        let fechaActual = new Date(timestap);
        const pad = (n) => n.toString().padStart(2, '0');
        // Determinar AM o PM
        let ampm = fechaActual.getHours() >= 12 ? 'PM' : 'AM';
        // Convertir a formato 12 horas
        let horas = fechaActual.getHours() % 12;
        horas = horas ? horas : 12; // el 0 se convierte en 12
        let horaActual = pad(horas) +
            ':' +
            pad(fechaActual.getMinutes()) +
            ':' +
            pad(fechaActual.getSeconds()) +
            ampm;
        return horaActual;
    }
    verdetalles(items) {
        const dialogref = this.dialog.open(_detallespedido__WEBPACK_IMPORTED_MODULE_0__.Detallespedido, {
            width: '80%',
            height: '50%',
            data: items,
        });
    }
    eliminarproductoreservado(id) {
        this.serviproduct.aliminarpedidoreservado(id).subscribe((data) => {
            if (data.repuesta) {
                this.serviproduct.verpedido().subscribe((data) => {
                    this.data = data.pedido;
                });
            }
        }, (error) => { });
    }
    buscarcliente() {
        if (this.terminobusqueda == '') {
            this.data = this.datatemporal;
        }
        else {
            this.data = this.datatemporal.filter((item) => item.cliente.nombre.includes(this.terminobusqueda.toUpperCase()) ||
                item.cliente.identificacion.includes(this.terminobusqueda));
        }
    }
}
Pedidoguardado.ɵfac = function Pedidoguardado_Factory(t) { return new (t || Pedidoguardado)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__.Socket_producto)); };
Pedidoguardado.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Pedidoguardado, selectors: [["pedidodialogo-alerta"]], decls: 14, vars: 3, consts: [[1, "contenedor-alert", 2, "width", "100%", "height", "100%"], [2, "width", "100%", "height", "100%"], [2, "text-align", "center"], [2, "width", "100%", "height", "100%", 3, "items"], ["scroll_productosMostrar", ""], ["appearance", "fill", 1, "google-search-input"], ["matInput", "", 3, "ngModel", "keyup", "ngModelChange"], ["mat-icon-button", "", "matSuffix", ""], ["class", "row", 3, "id", 4, "ngFor", "ngForOf"], [1, "row", 3, "id"], [1, "col-12", 2, "width", "100%"], [2, "width", "100%"], [3, "click"], [2, "width", "100%", "overflow-x", "auto !important"], [1, "row"], [1, "col-md-6", "col-sm-12", "py-0", 2, "flex", "1", "text-align", "center"], ["mat-flat-button", "", "color", "primary", "full-button", "", "pedido_con", "", 2, "box-shadow", "4px 4px 10px rgba(0, 0, 0, 0.2) !important", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", "full-button", "", "pedido_con", "", 2, "box-shadow", "4px 4px 10px rgba(0, 0, 0, 0.2) !important", 3, "click"]], template: function Pedidoguardado_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content", 1)(3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Pedidos por confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "virtual-scroller", 3, 4)(7, "mat-list", 1)(8, "mat-form-field", 5)(9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function Pedidoguardado_Template_input_keyup_9_listener() { return ctx.buscarcliente(); })("ngModelChange", function Pedidoguardado_Template_input_ngModelChange_9_listener($event) { return ctx.terminobusqueda = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7)(11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, Pedidoguardado_div_13_Template, 34, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.terminobusqueda);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r0.viewPortItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatList, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_2__.VirtualScrollerComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose], styles: ["button[pedido_con][_ngcontent-%COMP%] {\n        max-width: 150px;\n        height: 50px;\n        color: #fff !important;\n        font-size: 1rem;\n        background: #2874a6 !important;\n        padding: 0;\n      }\n      button[pedido_con_D][_ngcontent-%COMP%] {\n        max-width: 150px;\n        height: 50px;\n        color: #fff !important;\n        font-size: 1rem;\n        background: #e74c3c !important;\n        padding: 0;\n        flex: 1;\n      }\n      @media (max-width: 650px) {\n        button[pedido_con][_ngcontent-%COMP%] {\n          margin-top: 10px;\n        }\n\n        button[pedido_con_D][_ngcontent-%COMP%] {\n          margin-top: 10px;\n        }\n      }\n      .hiden[_ngcontent-%COMP%] {\n        display: none;\n      }\n      td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n        display: flex;\n        justy-content: center;\n        align-items: center;\n        flex: 1;\n      }\n      tr[_ngcontent-%COMP%] {\n        display: flex;\n        column-gap: 10px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZGlkb2d1YXJkb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLDhCQUE4QjtRQUM5QixVQUFVO01BQ1o7TUFDQTtRQUNFLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZiw4QkFBOEI7UUFDOUIsVUFBVTtRQUNWLE9BQU87TUFDVDtNQUNBO1FBQ0U7VUFDRSxnQkFBZ0I7UUFDbEI7O1FBRUE7VUFDRSxnQkFBZ0I7UUFDbEI7TUFDRjtNQUVBO1FBQ0UsYUFBYTtNQUNmO01BQ0E7O1FBRUUsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsT0FBTztNQUNUO01BRUE7UUFDRSxhQUFhO1FBQ2IsZ0JBQWdCO01BQ2xCIiwiZmlsZSI6InBlZGlkb2d1YXJkb3MudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGJ1dHRvbltwZWRpZG9fY29uXSB7XG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjg3NGE2ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBidXR0b25bcGVkaWRvX2Nvbl9EXSB7XG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAgICAgYnV0dG9uW3BlZGlkb19jb25dIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uW3BlZGlkb19jb25fRF0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmhpZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIHRkLFxuICAgICAgdGgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0eS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIHRyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sdW1uLWdhcDogMTBweDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found-component/not-found-component.component */ 59737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_plantillas_administracion_administracion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./plantillas/administracion/administracion.module */ 4431)).then((m) => m.AdministracionModule),
    },
    {
        path: 'auth',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.Publicguards],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_plantillas_autenticacion_autenticacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./plantillas/autenticacion/autenticacion.module */ 75911)).then((m) => m.AutenticacionModule),
    },
    {
        path: '**',
        component: _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponentComponent,
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
        }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_alerta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-material/alerta */ 63060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/auth/auth.service */ 74067);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_services_crypt_crypt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/crypt/crypt.service */ 35818);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/serviciosdbs/serviciodb.service */ 60981);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
















function AppComponent_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_3_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "mat-card-title", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Opciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_div_3_button_5_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.data == null ? null : ctx_r1.data.response);
} }
function AppComponent_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item", 17)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_mat_list_item_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item", 17)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_mat_list_item_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tomar pedidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item", 17)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_mat_list_item_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.mostrarSubItem(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Cartera");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_8_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item", 17)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_8_mat_list_item_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); _r0.close(); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.mostrarItemsCartera = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Consultar Cartera");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_8_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item", 17)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_8_mat_list_item_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); _r0.close(); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.mostrarItemsCartera = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "receipt_long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Recibo caja");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "mat-list", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_div_8_mat_list_item_2_Template, 5, 0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_8_mat_list_item_3_Template, 5, 0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.ConsultarCartera);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.CrearReciboIngreso && ctx_r5.data.codigoComprobanteReciboIngreso > 0);
} }
function AppComponent_mat_list_item_9_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item", 17)(1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_mat_list_item_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Inventario f\u00EDsico");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.salir()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AppComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "div")(2, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "business");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "div")(9, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "storefront");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div")(14, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.data.config.RAZON_SOCIAL);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.data.alias);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r8.data.nombreusuario, " (", ctx_r8.data.nombre, ")");
} }
class AppComponent {
    constructor(router, serviauth, dialog, crypt, socketproduct, serviciodb) {
        this.router = router;
        this.serviauth = serviauth;
        this.dialog = dialog;
        this.crypt = crypt;
        this.socketproduct = socketproduct;
        this.serviciodb = serviciodb;
        this.title = 'Pedidos';
        this.mode = { value: 'side' };
        this.showToolbar = true;
        this.TomarPedidos = false;
        this.ConsultarCartera = false;
        this.CrearReciboIngreso = false;
        this.InventarioFisico = false;
        this.visibilityHandler = this.handleVisibilityChange.bind(this);
        this.mostrarItemsCartera = false;
    }
    ngOnInit() {
        this.mode.value = this.serviauth.mode.value;
        this.serviciodb.tienesedeselccionada().subscribe((data) => {
            this.data = data;
            this.opcionesMostrar(data);
        });
        document.addEventListener('visibilitychange', this.visibilityHandler);
    }
    ngOnDestroy() {
        document.removeEventListener('visibilitychange', this.visibilityHandler);
    }
    handleVisibilityChange() {
        this.serviauth.verificarvendedor().subscribe((data) => {
            if (!data?.response) {
                this.data = null;
                this.router.navigate(['auth/login']);
            }
            else {
                this.serviciodb.tienesedeselccionada().subscribe((data) => {
                    this.opcionesMostrar(data);
                    this.data = data;
                });
            }
        });
    }
    salir() {
        const dialogrfrecibo = this.dialog.open(_angular_material_alerta__WEBPACK_IMPORTED_MODULE_0__.DialogoAlerta, {
            data: {
                boton1: 'No',
                boton: 'Si',
                mensaje: "Seguro desea cerrar la sesión?",
                tipo: "warning"
            },
            disableClose: false
        });
        dialogrfrecibo.afterClosed().subscribe(data => {
            if (!data) {
                return;
            }
            else {
                this.serviauth.salir().subscribe((res) => {
                    this.data = null;
                    this.router.navigate(['auth/login']);
                });
            }
        });
    }
    opcionesMostrar(datos) {
        if (datos?.response) {
            let permisoscadena;
            let permisos = JSON.parse(datos.permisos);
            permisoscadena = permisos.map((permiso) => { return permiso.permiso; });
            this.TomarPedidos = true;
            this.ConsultarCartera = true;
            this.CrearReciboIngreso = true;
            this.InventarioFisico = true;
            if (!permisoscadena.includes("TOMAR_PEDIDO")) {
                this.TomarPedidos = false;
            }
            if (!permisoscadena.includes("INVENTARIO FISICO")) {
                this.InventarioFisico = false;
            }
            if (!permisoscadena.includes("CREAR INGRESOS")) {
                this.CrearReciboIngreso = false;
            }
            if (!permisoscadena.includes("CXC")) {
                this.ConsultarCartera = false;
            }
        }
        else {
            this.TomarPedidos = false;
            this.ConsultarCartera = false;
            this.CrearReciboIngreso = false;
            this.InventarioFisico = false;
        }
    }
    mostrarSubItem(nItem) {
        switch (nItem) {
            case 1:
                this.mostrarItemsCartera = true;
                break;
            default:
                break;
        }
    }
    verificarItemMenuAVisualizar() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_crypt_crypt_service__WEBPACK_IMPORTED_MODULE_2__.CryptService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_4__.serviciodb)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 12, consts: [[1, "example-container", 2, "overflow", "hidden !important", 3, "hasBackdrop"], [3, "mode"], ["drawer", ""], ["class", "menu", "style", "display: flex;", 4, "ngIf"], ["role", "list"], ["role", "listitem", "class", "listitem", 4, "ngIf"], ["class", "subitem", 4, "ngIf"], ["matIconButton", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 2, "border", "none !important", "background", "#fff", 3, "click"], [1, "px-3"], ["mat-icon-button", "", "class", "exit-button", 3, "click", 4, "ngIf"], ["class", "navinfo", 4, "ngIf"], [1, "content"], [1, "menu", 2, "display", "flex"], [1, "tituloDrawer"], [2, "margin-left", "auto"], ["mat-icon-button", "", "class", "cerrar_drawer", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "cerrar_drawer", 3, "click"], ["role", "listitem", 1, "listitem"], ["matButton", "", "routerLink", "/admin/inicial", 1, "botones-navegacion", 2, "display", "flex", "justify-content", "center", 3, "click"], ["matButton", "", "routerLink", "/admin/tienda", 1, "botones-navegacion", 2, "display", "flex", "justify-content", "center", 3, "click"], ["matButton", "", 1, "botones-navegacion", 2, "display", "flex", "justify-content", "center", 3, "click"], [1, "subitem"], ["role", "list", "dense", ""], ["matButton", "", "routerLink", "/admin/cartera", 1, "botones-navegacion", 2, "display", "flex", "justify-content", "center", 3, "click"], ["matButton", "", "routerLink", "/admin/recibodecaja", 1, "botones-navegacion", 2, "display", "flex", "justify-content", "center", 3, "click"], ["matButton", "", "routerLink", "/admin/inventariofisico", 1, "botones-navegacion", 2, "display", "flex", "justify-content", "center", 3, "click"], ["mat-icon-button", "", 1, "exit-button", 3, "click"], [1, "navinfo"], [2, "color", "#fff"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_3_Template, 6, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_mat_list_item_5_Template, 5, 0, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_mat_list_item_6_Template, 5, 0, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_mat_list_item_7_Template, 5, 0, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_div_8_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_mat_list_item_9_Template, 5, 0, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-drawer-content")(11, "mat-toolbar")(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Pazzioli");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AppComponent_button_17_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AppComponent_div_18_Template, 18, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mode", ctx.mode.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showToolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.TomarPedidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.TomarPedidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ConsultarCartera || ctx.CrearReciboIngreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mostrarItemsCartera === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.InventarioFisico);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.response);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.response);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("auth", !ctx.showToolbar);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatDrawerContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem], styles: ["@charset \"UTF-8\";\n.exit-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n.content[_ngcontent-%COMP%] {\n  height: calc(100vh - 0px);\n  padding-top: 50px;\n  padding-left: 10px;\n  padding-right: 10px;\n  overflow-x: hidden !important;\n}\n.navinfo[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 10;\n  background: white;\n  top: 65px;\n  display: flex;\n  flex-direction: column;\n  background: #3949ab;\n  border-radius: 4px;\n  box-shadow: 0 0px 17px 0px rgba(129, 121, 211, 0.9) !important;\n  padding: 2px;\n  width: 100%;\n  width: 100vw; \n  min-width: 100%; \n}\n@media (max-width: 599px) {\n  .navinfo[_ngcontent-%COMP%] {\n    top: 55px;\n  }\n}\n.navinfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navinfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.navinfo[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  border: 1px dashed #fff;\n}\n.content.auth[_ngcontent-%COMP%] {\n  height: calc(100vh - 0px) !important;\n  padding-top: 0 !important;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.navinfo[_ngcontent-%COMP%] {\n  flex: 0 0 auto; \n  padding: 8px;\n  background-color: #1976d2; \n  color: #fff;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1 1 auto; \n  overflow: auto; \n  min-height: 0; \n}\n.botones-navegacion[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n  font-size: 1rem;\n}\n  .listitem .mat-list-item-content {\n  justify-content: start !important;\n  transition: background-color 1s;\n}\n  .listitem span span {\n  display: none !important;\n}\n  .listitem .mat-list-item-content:hover {\n  border-radius: 8px;\n  background-color: rgb(229, 232, 232);\n}\n.tituloDrawer[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n}\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n.subitem[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n@media (max-height: 581px) {\n  .content[_ngcontent-%COMP%] {\n    max-height: 515px !important;\n  }\n}\n@media (max-height: 900px) and (min-height: 844px) {\n  .content[_ngcontent-%COMP%] {\n    max-height: 780px !important;\n  }\n}\n@media (max-height: 1000px) and (min-height: 915px) {\n  .content[_ngcontent-%COMP%] {\n    max-height: 850px !important;\n  }\n}\n@media (max-height: 750px) and (min-height: 600px) {\n  .content[_ngcontent-%COMP%] {\n    max-height: 640px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUNGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOERBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUEsRUFBQSxzQ0FBQTtFQUNBLGVBQUEsRUFBQSx3REFBQTtBQUZGO0FBSUE7RUFDRTtJQUNFLFNBQUE7RUFERjtBQUNGO0FBSUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZEO0FBTUE7RUFDQyxXQUFBO0FBSEQ7QUFNQTtFQUNFLHVCQUFBO0FBSEY7QUFRQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFMRjtBQVNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQU5GO0FBU0E7RUFDRSxjQUFBLEVBQUEsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUEsRUFBQSxpQkFBQTtFQUNBLFdBQUE7QUFORjtBQVNBO0VBQ0UsY0FBQSxFQUFBLDhDQUFBO0VBQ0EsY0FBQSxFQUFBLCtCQUFBO0VBQ0EsYUFBQSxFQUFBLGtEQUFBO0FBTkY7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFORjtBQWFBO0VBQ0UsaUNBQUE7RUFDQywrQkFBQTtBQVZIO0FBYUE7RUFDRSx3QkFBQTtBQVZGO0FBYUE7RUFDQSxrQkFBQTtFQUNDLG9DQUFBO0FBVkQ7QUFhQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFWRjtBQVlBO0VBQ0UsMkJBQUE7QUFURjtBQVlBO0VBQ0Usa0JBQUE7QUFURjtBQWFBO0VBQ0U7SUFDQSw0QkFBQTtFQVZBO0FBQ0Y7QUFnQkE7RUFDRTtJQUNBLDRCQUFBO0VBZEE7QUFDRjtBQW9CQTtFQUNFO0lBQ0EsNEJBQUE7RUFsQkE7QUFDRjtBQXdCQTtFQUNFO0lBQ0EsNEJBQUE7RUF0QkE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmV4aXQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAwcHgpO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gXHJcblxyXG59XHJcblxyXG5cclxuLm5hdmluZm97XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB6LWluZGV4OjEwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRvcDo2NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiMzOTQ5YWI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMHB4IDE3cHggMHB4IHJnYmEoMTI5LCAxMjEsIDIxMSwgMC45KSAhaW1wb3J0YW50IDtcclxuICBwYWRkaW5nOjJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB3aWR0aDogMTAwdnc7ICAgLyogb2N1cGEgdG9kbyBlbCB2aWV3cG9ydCBob3Jpem9udGFsICovXHJcbiAgbWluLXdpZHRoOiAxMDAlOyAvKiBhc2VndXJhIHF1ZSBzaSBlbCBjb250ZW5pZG8gY3JlY2UsIGxhIGJhcnJhIHRhbWJpw6luICovXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NTk5cHgpIHtcclxuICAubmF2aW5mb3tcclxuICAgIHRvcDo1NXB4O1xyXG4gIH1cclxuICBcclxufVxyXG4ubmF2aW5mbyAgZGl2e1xyXG4gZGlzcGxheTogZmxleDtcclxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIFxyXG59XHJcblxyXG4ubmF2aW5mbyAgZGl2ID4gc3BhbntcclxuIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2aW5mbyA+Om50aC1jaGlsZCgyKXtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZjtcclxufVxyXG5cclxuXHJcblxyXG4uY29udGVudC5hdXRoIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubmF2aW5mbyB7XHJcbiAgZmxleDogMCAwIGF1dG87IC8qIEFsdHVyYSBmaWphIHNlZ8O6biBjb250ZW5pZG8gKi9cclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjsgLyogc29sbyBlamVtcGxvICovXHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBmbGV4OiAxIDEgYXV0bzsgLyogRXN0byBoYWNlIHF1ZSBjcmV6Y2EgeSBvY3VwZSBsbyBxdWUgc29icmEgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogQXF1w60gc2UgYXBsaWNhcsOhIGVsIHNjcm9sbCAqL1xyXG4gIG1pbi1oZWlnaHQ6IDA7IC8qIEltcG9ydGFudGUgcGFyYSBxdWUgZnVuY2lvbmUgYmllbiBjb24gZmxleGJveCAqL1xyXG59XHJcbi8vZXN0aWxvcyBib3RvbmVzIG5hdmVnYWNpb25cclxuLmJvdG9uZXMtbmF2ZWdhY2lvbntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IzAwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiBcclxuICBcclxufVxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLmxpc3RpdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnR7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICB0cmFuc2l0aW9uOiAgYmFja2dyb3VuZC1jb2xvciAxcztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5saXN0aXRlbSAgc3BhbiAgc3BhbntcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubGlzdGl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudDpob3ZlcntcclxuYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMyLCAyMzIpO1xyXG59XHJcblxyXG4udGl0dWxvRHJhd2Vye1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1hdC1kcmF3ZXItY29udGVudHtcclxuICBvdmVyZmxvdzogIGhpZGRlbiAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uc3ViaXRlbXtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OjU4MXB4KSB7XHJcbiAgLmNvbnRlbnR7XHJcbiAgbWF4LWhlaWdodDogNTE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6OTAwcHgpIGFuZCAobWluLWhlaWdodDo4NDRweCkge1xyXG4gIC5jb250ZW50e1xyXG4gIG1heC1oZWlnaHQ6NzgwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6MTAwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6OTE1cHgpIHtcclxuICAuY29udGVudHtcclxuICBtYXgtaGVpZ2h0Ojg1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0Ojc1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NjAwcHgpIHtcclxuICAuY29udGVudHtcclxuICBtYXgtaGVpZ2h0OjY0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-material/angular-material.module */ 57325);
/* harmony import */ var _plantillas_administracion_componentes_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plantillas/administracion/componentes/tienda/tienda.component */ 53969);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-material/alerta */ 63060);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _plantillas_administracion_componentes_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plantillas/administracion/componentes/pedidos/pedidos.component */ 18691);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_pedidoguardos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-material/pedidoguardos */ 6276);
/* harmony import */ var _angular_material_detallespedido__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-material/detallespedido */ 52567);
/* harmony import */ var _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found-component/not-found-component.component */ 59737);
/* harmony import */ var _angular_material_alertaob__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-material/alertaob */ 99108);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/text-field */ 35804);
/* harmony import */ var _angular_material_alertaupdateitempedido__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./angular-material/alertaupdateitempedido */ 16782);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_alertarecibo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular-material/alertarecibo */ 24053);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_alertaritemsinventario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./angular-material/alertaritemsinventario */ 29405);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_alertaitemsunitario__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./angular-material/alertaitemsunitario */ 49559);
/* harmony import */ var _plantillas_administracion_componentes_cartera_cartera_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plantillas/administracion/componentes/cartera/cartera.component */ 85651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);





























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__.TextFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_26__.NgChartsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__.DialogoAlerta,
        _plantillas_administracion_componentes_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_3__.DialogFactura,
        _plantillas_administracion_componentes_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_5__.Dialogdetalles,
        _angular_material_pedidoguardos__WEBPACK_IMPORTED_MODULE_6__.Pedidoguardado,
        _angular_material_detallespedido__WEBPACK_IMPORTED_MODULE_7__.Detallespedido,
        _angular_material_alertaob__WEBPACK_IMPORTED_MODULE_9__.DialogoAlertaob,
        _not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponentComponent,
        _angular_material_alertaupdateitempedido__WEBPACK_IMPORTED_MODULE_10__.DialogoAlertaitemspedido,
        _angular_material_alertarecibo__WEBPACK_IMPORTED_MODULE_11__.Recibopago,
        _angular_material_alertaritemsinventario__WEBPACK_IMPORTED_MODULE_12__.Itemsinventario,
        _angular_material_alertaitemsunitario__WEBPACK_IMPORTED_MODULE_13__.Itemsinventariounitario,
        _plantillas_administracion_componentes_cartera_cartera_component__WEBPACK_IMPORTED_MODULE_14__.Dialogitemscartera], imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__.TextFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_26__.NgChartsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule] }); })();


/***/ }),

/***/ 95107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard),
/* harmony export */   "Publicguards": () => (/* binding */ Publicguards)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/auth/auth.service */ 74067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);






class AuthGuard {
    constructor(serviauth, router, socketproduct) {
        this.serviauth = serviauth;
        this.router = router;
        this.socketproduct = socketproduct;
    }
    canActivate(route, state) {
        return this.serviauth.verificarvendedor().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((respon) => {
            if (respon?.response) {
                this.socketproduct.conectar();
                return true;
            }
            else {
                this.router.navigateByUrl('auth/login');
                return false; // Redirige si la verificación falla
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__.Socket_producto)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
class Publicguards {
    constructor(serviauth, router, socketproduct) {
        this.serviauth = serviauth;
        this.router = router;
        this.socketproduct = socketproduct;
    }
    canActivate(route, state) {
        return this.serviauth.verificarvendedor().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((respon) => {
            if (!respon?.response) {
                return true; // Redirige si la verificación falla
            }
            else {
                this.socketproduct.conectar();
                this.router.navigateByUrl('admin/inicial');
                return false;
            }
        }));
    }
}
Publicguards.ɵfac = function Publicguards_Factory(t) { return new (t || Publicguards)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_1__.Socket_producto)); };
Publicguards.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: Publicguards, factory: Publicguards.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 26557:
/*!************************************************!*\
  !*** ./src/app/modelos/datos-peticion copy.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPedido": () => (/* binding */ DatosPedido)
/* harmony export */ });
class DatosPedido {
    constructor(codigoTercero, fechaCreacion, horaCreacion, codigoUsuario, totalPedido, id_pedido, observacion) {
        this.datos = {
            codigoVendedor: 0,
            codigoTercero: Number,
            fechaCreacion: String,
            horaCreacion: String,
            codigoFactura: 0,
            codigoUsuarioAnulo: 0,
            fechaAnulo: null,
            estado: 'PENDIENTE',
            ubicacion: 'WEB',
            codigoUsuario: Number,
            descuento: 0,
            totalPedido: Number,
            tipoFactura: 'POS',
            observacion: '',
            id: '',
        };
        this.datos.codigoTercero = codigoTercero;
        this.datos.fechaCreacion = fechaCreacion;
        this.datos.horaCreacion = horaCreacion;
        this.datos.codigoUsuario = codigoUsuario;
        this.datos.totalPedido = totalPedido;
        this.datos.id = id_pedido;
        this.datos.observacion = observacion;
    }
}


/***/ }),

/***/ 14148:
/*!*******************************************!*\
  !*** ./src/app/modelos/datos-peticion.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosPeticion": () => (/* binding */ DatosPeticion)
/* harmony export */ });
class DatosPeticion {
    constructor(canalPos, consulta, condicion, datoCondicion, canalUsuario) {
        this.datos = {
            sistema: 'DASHBOARD',
            tipoConsulta: 'POS',
            canalPos: String,
            canalUsuario: String,
            metodo: 'CONSULTAR',
            consulta: String,
            condicion: String,
            datoCondicion: String
        };
        this.datos.canalPos = canalPos;
        this.datos.canalUsuario = canalUsuario;
        this.datos.consulta = consulta;
        this.datos.condicion = condicion;
        this.datos.datoCondicion = datoCondicion;
    }
}


/***/ }),

/***/ 59737:
/*!**********************************************************************!*\
  !*** ./src/app/not-found-component/not-found-component.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponentComponent": () => (/* binding */ NotFoundComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NotFoundComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponentComponent.ɵfac = function NotFoundComponentComponent_Factory(t) { return new (t || NotFoundComponentComponent)(); };
NotFoundComponentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponentComponent, selectors: [["app-not-found-component"]], decls: 2, vars: 0, template: function NotFoundComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found-component works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 85651:
/*!************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/cartera/cartera.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteraComponent": () => (/* binding */ CarteraComponent),
/* harmony export */   "Dialogitemscartera": () => (/* binding */ Dialogitemscartera)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _pdf_cartera_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdf_cartera/pdf */ 48174);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _tienda_pdf_pdffactura__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tienda/pdf/pdffactura */ 52157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/socket/socket.service */ 38245);
/* harmony import */ var src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/facturaservice/facturaservice.service */ 53358);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/auth/auth.service */ 74067);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
























function CarteraComponent_mat_list_option_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarteraComponent_mat_list_option_25_Template_mat_list_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const _cliente_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.seleccionarCliente(_cliente_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div")(2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 57)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _cliente_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", _cliente_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_cliente_r30.razonSocial);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _cliente_r30.identificacion, "");
  }
}

function CarteraComponent_img_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 58);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "http://localhost:3000/" + ctx_r2.clienteSeleccionado.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}

function CarteraComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " face ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r33.codigo);
  }
}

function CarteraComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cte");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r34.nombre, " ");
  }
}

function CarteraComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r35.cliente);
  }
}

function CarteraComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Emisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r36.fechaEmision, " ");
  }
}

function CarteraComponent_th_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r37.fechaVencimiento, " ");
  }
}

function CarteraComponent_th_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "D\u00EDas");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r38.dias, " ");
  }
}

function CarteraComponent_th_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Total factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_80_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const element_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $", element_r39.totalFactura.toLocaleString("de-DE"), " ");
  }
}

function CarteraComponent_td_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CarteraComponent_td_80_ng_container_1_Template, 2, 1, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r39.totalFactura !== undefined);
  }
}

function CarteraComponent_th_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Saldo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_83_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const element_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $", element_r42.saldo.toLocaleString("de-DE"), " ");
  }
}

function CarteraComponent_td_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CarteraComponent_td_83_ng_container_1_Template, 2, 1, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r42.saldo !== undefined);
  }
}

function CarteraComponent_th_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Estado vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_86_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Vencida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}

function CarteraComponent_td_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CarteraComponent_td_86_ng_container_1_Template, 2, 0, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r45.dias <= 0);
  }
}

function CarteraComponent_th_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 63)(3, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarteraComponent_td_89_Template_img_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49);
      const element_r47 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r48.generarpdfitem($event, element_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function CarteraComponent_td_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 61)(1, "div", 65)(2, "div", 66)(3, "span")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span")(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const row_r50 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", ctx_r25.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r50.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $", row_r50.totalCliente == null ? null : row_r50.totalCliente.toLocaleString("de-DE"), "");
  }
}

function CarteraComponent_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 67);
  }
}

const _c0 = function (a0) {
  return {
    "fila-resumen": a0
  };
};

function CarteraComponent_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarteraComponent_tr_93_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53);
      const row_r51 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r52.verificaritemsfactura(row_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, row_r51.isResumen));
  }
}

function CarteraComponent_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 69);
  }
}

function CarteraComponent_button_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarteraComponent_button_99_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r55.generarpdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

const _c1 = function () {
  return ["customResumen"];
};

const _c2 = function () {
  return ["/admin/cartera"];
};

const _c3 = function (a0) {
  return {
    pagina: a0
  };
};

function Dialogitemscartera_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogitemscartera_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r15 + 1, " ");
  }
}

function Dialogitemscartera_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogitemscartera_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r16.descripcion, " ");
  }
}

function Dialogitemscartera_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Presentacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogitemscartera_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r17.presentacion);
  }
}

function Dialogitemscartera_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogitemscartera_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r18.cantidad, " ");
  }
}

function Dialogitemscartera_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Precioproducto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogitemscartera_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r19.precio.toLocaleString("de-DE"), " ");
  }
}

function Dialogitemscartera_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "TotalItem");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogitemscartera_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $ ", element_r20.totalItem.toLocaleString("de-DE"), " ");
  }
}

function Dialogitemscartera_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 18);
  }
}

function Dialogitemscartera_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 19);
  }
}

class CarteraComponent {
  constructor(socketproduct, socketServices, servifactura, route, serviouth, dialog, router, platform) {
    this.socketproduct = socketproduct;
    this.socketServices = socketServices;
    this.servifactura = servifactura;
    this.route = route;
    this.serviouth = serviouth;
    this.dialog = dialog;
    this.router = router;
    this.platform = platform;
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
    this.factura = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
    this.facturatodo = [];
    this.codigo = 0;
    this.codigoComprobante = 0;
    this.fechaEmision = '';
    this.fechaVencimiento = '';
    this.dias = 0;
    this.totalFactura = 0;
    this.saldo = 0;
    this.nivel = 0;
    this.clientef = {
      codigo: 0,
      saldo: 0,
      nombre: ''
    };
    this.displayedColumns = ['codigo', 'codigoComprobante', 'cliente', 'fechaEmision', 'fechaVencimiento', 'dias', 'totalFactura', 'saldo', 'estadoVencimiento', 'Acciones'];
    this.totalCartera = 0;
    this.total_registros = 0;
    this.obtenertodo = false; //esta funciones me detectaran que filas utilizar

    this.isRegularRow = row => {
      return !this.factura.data[row]?.isResumen;
    };

    this.isResumenRow = row => {
      return this.factura.data[row]?.isResumen === true;
    };

    this.serviouth.obtenernivel().subscribe(data => {
      this.nivel = data.nivel;
    });
  }

  determinarnivel() {
    if (this.nivel !== 4 || !this.obtenertodo) {
      return false;
    }

    return true;
  }

  generarpdfitem(e, element) {
    e.stopPropagation();
    this.servifactura.traeritemsfactura(element).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datos) {
        let productos = datos?.respuesta.map(item => {
          return {
            cantidad: item.cantidad,
            codigoContable: item.codigoContable,
            nombre: item.descripcion,
            referencia: item.referencia,
            presentacion: item.presentacion,
            precio: item.precio
          };
        });
        let config = datos.config;
        let cliente = {
          nombre: element.cliente,
          email: datos.respuesta[0].email,
          identificacion: datos.respuesta[0].identificacion,
          telefonoFijo: datos.respuesta[0].telefonofijo
        };
        let factura = {
          fechaEmision: element.fechaEmision,
          horaCreacion: datos.respuesta[0].horacreacion,
          codigo: datos.respuesta[0].codigofactura,
          observaciones: datos.respuesta[0].observaciones
        };
        let data = {
          config,
          factura,
          nombre: element.vendedor,
          prefijo: datos.prefijo
        };
        yield (0,_tienda_pdf_pdffactura__WEBPACK_IMPORTED_MODULE_2__["default"])({ ...data,
          productos,
          cliente
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const pagina = Number(params['pagina']) || 0;
      this.pagina = pagina;

      if (this.pagina <= 0) {
        this.pagina = 1;
      }

      if (this.pagina > this.total_registros) {
        if (this.total_registros === 0) {
          this.pagina = 1;
        } else {
          this.pagina = this.total_registros;
        }
      }

      if (this.obtenertodo && this.clienteSeleccionado.codigo === 0) {
        this.cargarcarteracompleta();
      } else {
        this.servifactura.traerfacturas(this.pagina, this.clienteSeleccionado.codigo).subscribe(data => {
          //  this.obtenertodo = false;
          if (data.respuesta.length > 0) {
            this.pagina = 1;
            this.total_registros = data.nregistros;
            this.factura.data = data.respuesta;
            this.totalCartera = 0;
            this.totalCartera = data.saldo;
          }
        });
      }
    });
  }

  verificaritemsfactura(row) {
    this.servifactura.traeritemsfactura(row).subscribe(data => {
      const dialogRef = this.dialog.open(Dialogitemscartera, {
        width: this.platform.is('desktop') ? '60%' : '100%',
        data: {
          respuesta: data.respuesta,
          factura: row
        }
      });
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

  generafilaresume(data) {
    var _this = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let subtotal;
      let grupoActual = null;
      _this.facturatodo = [];

      if (_this.clientef.codigo !== data[0].codigo || _this.clientef.nombre === data[0].cliente) {
        subtotal = _this.clientef.saldo;
      } else {
        subtotal = 0;
      }

      let contador = 0;

      for (let i = 0; i < data.length; i++) {
        let item = data[i];

        if (grupoActual === null) {
          _this.facturatodo.push(item);

          grupoActual = item.cliente;
          subtotal += item.saldo;
        } else {
          if (grupoActual !== item.cliente) {
            const result = yield _this.servifactura.obtenertotalpornombrefactura(grupoActual).toPromise(); // 👈 equivalente a firstValueFrom en RxJS 6

            subtotal = Number(result.respuesta[0]?.sumatotal || 0);

            _this.facturatodo.push({
              isResumen: true,
              nombre: grupoActual,
              totalCliente: subtotal
            });

            grupoActual = item.cliente;
            subtotal = item.saldo;

            _this.facturatodo.push(item);
          } else {
            _this.facturatodo.push(item);

            subtotal += item.saldo;
          }
        }

        contador++;
      }

      if (grupoActual !== null) {
        const result = yield _this.servifactura.obtenertotalpornombrefactura(grupoActual).toPromise(); // 👈 equivalente a firstValueFrom en RxJS 6

        subtotal = Number(result.respuesta[0]?.sumatotal || 0);

        _this.facturatodo.push({
          isResumen: true,
          nombre: grupoActual,
          totalCliente: subtotal
        });

        _this.clientef.codigo = data[contador - 1].codigo;
        _this.clientef.nombre = data[contador - 1].codigo;
        _this.clientef.saldo = subtotal;
        grupoActual = null;
      }

      return _this.facturatodo;
    })();
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
    this.clientes = [];
    this.router.navigate(['admin/cartera'], {
      queryParams: {
        pagina: 1
      }
    });
    this.servifactura.traerfacturas(this.pagina, this.clienteSeleccionado.codigo).subscribe(data => {
      this.obtenertodo = false;

      if (data.respuesta.length > 0) {
        this.pagina = 1;
        this.total_registros = data.nregistros;
        this.factura.data = data.respuesta;
        this.totalCartera = 0;
        this.totalCartera = data.saldo;
      }
    });
  }

  generarpdf() {
    this.servifactura.facturapdf().subscribe(data => {
      (0,_pdf_cartera_pdf__WEBPACK_IMPORTED_MODULE_1__.generatePDFfa)(data);
    });
  }

  navegarpagina1() {
    if (!this.obtenertodo) {
      this.router.navigate(['admin/cartera'], {
        queryParams: {
          pagina: 1,
          back: 1
        }
      });
    }
  }

  cargarcarteracompleta() {
    var _this2 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.cliente = '';
      _this2.clientes = [];

      if (_this2.obtenertodo) {
        let param = _this2.route.snapshot.queryParamMap.get('back');

        if (param && param === '1') {
          const timeout = setTimeout(() => {
            _this2.router.navigate(['admin/cartera'], {
              queryParams: {
                pagina: 1
              }
            });
          }, 0);
          clearTimeout(timeout);
        }

        _this2.servifactura.traertodaslasfacturas(_this2.pagina).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            _this2.clienteSeleccionado = {
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

            if (data.respuesta.length > 0) {
              _this2.total_registros = data.nregistros;
              _this2.totalCartera = data.saldo;
              _this2.factura.data = yield _this2.generafilaresume(data.respuesta);
            }

            ; // this.router.navigate(['admin/cartera'], { queryParams: { pagina: 1 } });
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      } else {
        if (_this2.clienteSeleccionado.codigo === 0) {
          _this2.factura.data = [];
          _this2.totalCartera = 0;
          _this2.total_registros = 0;

          _this2.router.navigate(['admin/cartera'], {
            queryParams: {
              pagina: 1
            }
          });
        }
      }
    })();
  }

}

CarteraComponent.ɵfac = function CarteraComponent_Factory(t) {
  return new (t || CarteraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_5__.FacturaserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform));
};

CarteraComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CarteraComponent,
  selectors: [["app-cartera"]],
  decls: 114,
  vars: 34,
  consts: [[1, "tituloP"], [1, "row", "loader-content", 2, "padding-top", "20px", "height", "100% !important"], [1, "buscaliente", 2, "height", "100% !important"], [1, "search-card", "col-12", 2, "max-width", "70%", "max-height", "fit-content"], [1, "search"], [2, "display", "flex", "justify-content", "space-between"], [1, "m-0"], ["for", "cartera", 2, "font-size", "1rem", "font-weight", "bold"], ["type", "checkbox", "id", "cartera", 3, "ngModel", "ngModelChange", "click"], [1, "row"], [1, "col-12"], ["appearance", "fill", "search", ""], ["matInput", "", "placeholder", "", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], [1, "overflow-content", 2, "height", "auto"], [1, "clientelist", 3, "multiple"], ["shoes", ""], ["style", "width: calc(100% - 32px); margin: auto; border-radius: 8px", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "b-primary", "icon-card", 2, "height", "100px"], [2, "border", "none !important"], ["mat-card-avatar", ""], ["style", "\n                width: 40px;\n                height: 40px;\n                border-radius: 50%;\n                object-fit: cover;\n              ", 3, "src", 4, "ngIf", "ngIfElse"], ["sinimagen", ""], [1, "client-name"], [1, "separator"], [1, "client-info"], [1, "col-6", "p-0", "elipsis"], [1, "col-12", "p-0", "elipsis"], [1, "tabla-scroll", 2, "width", "100%", "margin-top", "10px"], [2, "overflow-x", "auto"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", "col-12", "tab-factura", 3, "dataSource"], ["matColumnDef", "codigo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigoComprobante"], ["matColumnDef", "cliente"], ["matColumnDef", "fechaEmision"], ["matColumnDef", "fechaVencimiento"], ["matColumnDef", "dias"], ["matColumnDef", "totalFactura"], ["matColumnDef", "saldo"], ["matColumnDef", "estadoVencimiento"], ["matColumnDef", "Acciones"], ["matColumnDef", "customResumen"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns", "matRowDefWhen"], [2, "width", "100% !important"], [2, "display", "flex", "justify-content", "space-between", "width", "100 !important"], [1, "totalCartera"], ["matFab", "", "aria-label", "Example icon button with a delete icon", "class", "botonpdf", 3, "click", 4, "ngIf"], [1, "col-12", 2, "display", "flex", "justify-content", "center"], [2, "display", "inline-flex"], [2, "display", "flex"], [3, "routerLink", "queryParams"], [2, "width", "calc(100% - 32px)", "margin", "auto", "border-radius", "8px", 3, "value", "click"], ["mat-line", "", 1, "bold"], ["mat-line", ""], [2, "width", "40px", "height", "40px", "border-radius", "50%", "object-fit", "cover", 3, "src"], [1, "head-icon", 2, "margin", "11px 0"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["mat-icon-button", "", "color", "socondary"], ["src", "../../../../../assets/images/imgpdf.svg", 1, "imgicon", 2, "color", "#fe676c", "width", "34px", "height", "36px", 3, "click"], [1, "resumen-row"], [2, "display", "flex", "justify-content", "space-around"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"], ["mat-row", ""], ["matFab", "", "aria-label", "Example icon button with a delete icon", 1, "botonpdf", 3, "click"], ["src", "../../../../../assets/images/imgpdf.svg", 1, "imgicon", 2, "color", "#fe676c", "width", "34px", "height", "36px"]],
  template: function CarteraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "mat-card-title", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Consultar cartera");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "mat-card", 3)(6, "mat-card-header", 4)(7, "div", 5)(8, "mat-card-title", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div")(11, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Completa");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CarteraComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.obtenertodo = $event;
      })("ngModelChange", function CarteraComponent_Template_input_ngModelChange_13_listener() {
        return ctx.cargarcarteracompleta();
      })("click", function CarteraComponent_Template_input_click_13_listener() {
        return ctx.navegarpagina1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "mat-form-field", 11)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Buscar cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CarteraComponent_Template_input_ngModelChange_19_listener() {
        return ctx.autocompletarinputclient();
      })("ngModelChange", function CarteraComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.cliente = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-card-content", 14)(23, "mat-selection-list", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, CarteraComponent_mat_list_option_25_Template, 8, 3, "mat-list-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-card", 18)(27, "mat-card-header", 19)(28, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, CarteraComponent_img_29_Template, 1, 1, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, CarteraComponent_ng_template_30_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-card-title", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-card-subtitle", 25)(36, "div", 9)(37, "div", 26)(38, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "perm_identity");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 26)(42, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "phone_android");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 26)(46, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 26)(50, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "alternate_email");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 27)(54, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "location_city");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 28)(58, "div", 29)(59, "table", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](60, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, CarteraComponent_th_61_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, CarteraComponent_td_62_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](63, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, CarteraComponent_th_64_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, CarteraComponent_td_65_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](66, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, CarteraComponent_th_67_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, CarteraComponent_td_68_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](69, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, CarteraComponent_th_70_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, CarteraComponent_td_71_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](72, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, CarteraComponent_th_73_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, CarteraComponent_td_74_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](75, 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, CarteraComponent_th_76_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, CarteraComponent_td_77_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](78, 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, CarteraComponent_th_79_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, CarteraComponent_td_80_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](81, 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, CarteraComponent_th_82_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, CarteraComponent_td_83_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](84, 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, CarteraComponent_th_85_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](86, CarteraComponent_td_86_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](87, 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, CarteraComponent_th_88_Template, 2, 0, "th", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, CarteraComponent_td_89_Template, 4, 0, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](90, 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, CarteraComponent_td_91_Template, 12, 3, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, CarteraComponent_tr_92_Template, 1, 0, "tr", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](93, CarteraComponent_tr_93_Template, 1, 3, "tr", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, CarteraComponent_tr_94_Template, 1, 0, "tr", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 47)(96, "div", 48)(97, "mat-card-title", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, CarteraComponent_button_99_Template, 2, 0, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 51)(101, "div", 52)(102, "div", 53)(103, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 53)(106, "a", 54)(107, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "a", 54)(112, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "chevron_right");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](31);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.obtenertodo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.cliente);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.clientes);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.clienteSeleccionado.imagen)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.clienteSeleccionado.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.identificacion, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.celulares, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.telefonoFijo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.email, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.direccion, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.factura.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns)("matRowDefWhen", ctx.isRegularRow);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](27, _c1))("matRowDefWhen", ctx.isResumenRow);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Total Saldo: $ ", ctx.totalCartera.toLocaleString("de-DE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.determinarnivel());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.pagina, "-", ctx.total_registros, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](28, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](29, _c3, ctx.pagina - 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.pagina);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](31, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](32, _c3, ctx.pagina + 1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardAvatar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatSelectionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListOption, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHrefDelegate],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.buscaliente[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vw;\n}\n\n.buscaliente[_ngcontent-%COMP%]:nth-child(1) {\n  flex: 0 0 100%;\n  align-items: center;\n}\n\n.tabla-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tabla-scroll[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  overflow-x: visible;\n}\n\n.tab-factura[_ngcontent-%COMP%] {\n  min-width: 600px;\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.totalCartera[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  font-weight: bold;\n}\n\n.tituloP[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  font-weight: bold;\n  justify-content: center;\n}\n\n.botonpdf[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  background: #fff;\n  transition: background-color 0.5s ease;\n}\n\n.botonpdf[_ngcontent-%COMP%]:active {\n  background-color: rgba(133, 146, 158, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnRlcmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBRUM7RUFDQyxtQkFBQTtBQUFGOztBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0FBTEY7O0FBUUE7RUFDRSwwQ0FBQTtBQUxGIiwiZmlsZSI6ImNhcnRlcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ1c2NhbGllbnRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDEwMHZ3O1xyXG5cclxuXHJcbn1cclxuXHJcbi5idXNjYWxpZW50ZTpudGgtY2hpbGQoMSl7XHJcbiAgZmxleDogMCAwIDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG5cclxuLnRhYmxhLXNjcm9sbHtcclxuICB3aWR0aDogMTAwJTtcclxuIHRhYmxle1xyXG4gIG92ZXJmbG93LXg6IHZpc2libGU7XHJcbiB9XHJcbiAgXHJcblxyXG4gXHJcbiAgLy9vdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4udGFiLWZhY3R1cmF7XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4udG90YWxDYXJ0ZXJhe1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aXR1bG9Qe1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLy9lc3RpbG9zIGJvdG9uIHBkZlxyXG4uYm90b25wZGZ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAgYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7O1xyXG59XHJcblxyXG4uYm90b25wZGY6YWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMzLCAxNDYsIDE1OCAsMC41KTtcclxufSJdfQ== */"]
});
class Dialogitemscartera {
  constructor(dialogRef, data, servisocket, platform, route) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.servisocket = servisocket;
    this.platform = platform;
    this.route = route;
    this.displayedColumns = ['Item', 'Descripcion', 'Presentacion', 'Cantidad', 'Precioproducto', 'TotalItem'];
  }

}

Dialogitemscartera.ɵfac = function Dialogitemscartera_Factory(t) {
  return new (t || Dialogitemscartera)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_3__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};

Dialogitemscartera.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: Dialogitemscartera,
  selectors: [["dialogitemscartera"]],
  decls: 31,
  vars: 5,
  consts: [[1, "row", "w-100"], [1, "col-12"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-column"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "row", "w-100", "containertable"], ["mat-table", "", 1, "mat-elevation-z8", "col-12", "tab-factura", 3, "dataSource"], ["matColumnDef", "Item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Descripcion"], ["matColumnDef", "Presentacion"], ["matColumnDef", "Cantidad"], ["matColumnDef", "Precioproducto"], ["matColumnDef", "TotalItem"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function Dialogitemscartera_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3)(9, "div", 4)(10, "table", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, Dialogitemscartera_th_12_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, Dialogitemscartera_td_13_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, Dialogitemscartera_th_15_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, Dialogitemscartera_td_16_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, Dialogitemscartera_th_18_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, Dialogitemscartera_td_19_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, Dialogitemscartera_th_21_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, Dialogitemscartera_td_22_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, Dialogitemscartera_th_24_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, Dialogitemscartera_td_25_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, Dialogitemscartera_th_27_Template, 2, 0, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, Dialogitemscartera_td_28_Template, 2, 1, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, Dialogitemscartera_tr_29_Template, 1, 0, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, Dialogitemscartera_tr_30_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Factura N\u00B0", ctx.data.factura.codigo, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data.factura.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.data.respuesta);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow],
  styles: [".mat-column-Presentacion[_ngcontent-%COMP%] {\n  width: 10%;\n  max-width: 10%;\n}\n  \n.mat-column-Cantidad[_ngcontent-%COMP%] {\n  width: 5%;\n  max-width: 5%;\n}\n  \n.mat-column-Precioproducto[_ngcontent-%COMP%] {\n  width: 10%;\n  max-width: 10%;\n}\n  \n.mat-column-TotalItem[_ngcontent-%COMP%]  {\n  width: 30%;\n  max-width: 30%;\n}\n  \ntable[_ngcontent-%COMP%]{\n\nmin-width: 700px;}\n  \n.mat-dialog-container[_ngcontent-%COMP%]{\n  padding: 0px !important;\n}\n  \n.containertable[_ngcontent-%COMP%]{\nheight:fit-content;\n  overflow: auto;\nmax-width: 800px;\nborder-radius: 10px;\nbox-shadow: 5px 0px 10px 5px rgba(0, 0, 0, 0.1);\nmax-height:450px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnRlcmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTs7QUFFQSxnQkFBZ0IsQ0FBQzs7QUFFakI7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7QUFDQSxrQkFBa0I7RUFDaEIsY0FBYztBQUNoQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLCtDQUErQztBQUMvQyxnQkFBZ0I7O0FBRWhCIiwiZmlsZSI6ImNhcnRlcmEuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4tUHJlc2VudGFjaW9uIHtcbiAgd2lkdGg6IDEwJTtcbiAgbWF4LXdpZHRoOiAxMCU7XG59XG4gIFxuLm1hdC1jb2x1bW4tQ2FudGlkYWQge1xuICB3aWR0aDogNSU7XG4gIG1heC13aWR0aDogNSU7XG59XG4gIFxuLm1hdC1jb2x1bW4tUHJlY2lvcHJvZHVjdG8ge1xuICB3aWR0aDogMTAlO1xuICBtYXgtd2lkdGg6IDEwJTtcbn1cbiAgXG4ubWF0LWNvbHVtbi1Ub3RhbEl0ZW0gIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4gIFxudGFibGV7XG5cbm1pbi13aWR0aDogNzAwcHg7fVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXJ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVydGFibGV7XG5oZWlnaHQ6Zml0LWNvbnRlbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xubWF4LXdpZHRoOiA4MDBweDtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5ib3gtc2hhZG93OiA1cHggMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbm1heC1oZWlnaHQ6NDUwcHg7XG5cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 48174:
/*!**********************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/cartera/pdf_cartera/pdf.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePDFfa": () => (/* binding */ generatePDFfa)
/* harmony export */ });
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__);


//import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__;
const generatePDFfa = (data) => {
    //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.
    const nuevaVentana = window.open('', '_blank');
    if (!nuevaVentana) {
        alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
        return null;
    }
    let item = data.respuesta[0];
    let contador = 0;
    const tableBody = [
        [
            { text: 'Codigo', style: 'tableHeader' },
            { text: 'nombre', style: 'tableHeader' },
            { text: 'fechaEmision', style: 'tableHeader' },
            { text: 'fechaVencimiento', style: 'tableHeader' },
            { text: 'dias', style: 'tableHeader' },
            { text: 'totalFactura', style: 'tableHeader' },
            { text: 'saldo', style: 'tableHeader' },
            { text: 'vendedor', style: 'tableHeader' },
            { text: 'cliente', style: 'tableHeader' },
        ],
    ];
    tableBody.push([
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
    ]);
    data.respuesta.forEach((fact, index) => {
        if (item.cliente !== fact.cliente) {
            // Fila de factura
            tableBody.push([
                { text: item.cliente, colSpan: 3, alignment: 'left', bold: true },
                {},
                {},
                {},
                { text: 'Total', colSpan: 2 },
                {},
                {},
                {
                    text: `$${item.totalSaldoCliente.toLocaleString('de-DE')}`,
                    bold: true,
                },
                {}, // cliente vacío
            ]);
            // Fila de resumen
            tableBody.push([
                { text: String(fact.codigo), noWrap: false, fontSize: 8 },
                { text: String(fact.nombre), noWrap: false, fontSize: 8 },
                { text: String(fact.fechaEmision), noWrap: false, fontSize: 8 },
                { text: String(fact.fechaVencimiento), noWrap: false, fontSize: 8 },
                { text: String(fact.dias), noWrap: false, fontSize: 8 },
                {
                    text: String(`$${fact.totalFactura.toLocaleString('de-DE')}`),
                    noWrap: false,
                    fontSize: 8,
                },
                {
                    text: String(`$${fact.saldo.toLocaleString('de-DE')}`),
                    noWrap: false,
                    fontSize: 8,
                },
                { text: String(fact.vendedor), noWrap: false, fontSize: 8 },
                { text: String(fact.cliente), noWrap: false, fontSize: 8 },
            ]);
            item = data.respuesta[contador];
            contador++;
        }
        else {
            contador++;
            if (index !== 0) {
                tableBody.push([
                    { text: String(fact.codigo), noWrap: false, fontSize: 8 },
                    { text: String(fact.nombre), noWrap: false, fontSize: 8 },
                    { text: String(fact.fechaEmision), noWrap: false, fontSize: 8 },
                    { text: String(fact.fechaVencimiento), noWrap: false, fontSize: 8 },
                    { text: String(fact.dias), noWrap: false, fontSize: 8 },
                    {
                        text: String(`$${fact.totalFactura.toLocaleString('de-DE')}`),
                        noWrap: false,
                        fontSize: 8,
                    },
                    {
                        text: String(`$${fact.saldo.toLocaleString('de-DE')}`),
                        noWrap: false,
                        fontSize: 8,
                    },
                    { text: String(fact.vendedor), noWrap: false, fontSize: 8 },
                    { text: String(fact.cliente), noWrap: false, fontSize: 8 },
                ]);
            }
        }
    });
    tableBody.push([
        { text: item.cliente, colSpan: 3, alignment: 'left', bold: true },
        {},
        {},
        {},
        { text: 'Total', colSpan: 2 },
        {},
        {},
        {
            text: `$${item.totalSaldoCliente.toLocaleString('de-DE')}`,
            bold: true,
        },
        {}, // cliente vacío
    ]);
    //Se calcula la suma total de todos los productos usando reduce.
    const totalGeneral = data.respuesta.reduce((sum, product) => sum + product.saldo, 0);
    //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    const content = [];
    //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.
    content.push({
        stack: [{ text: 'Pdf consulta de cartera', fontSize: 20, bold: true }],
        alignment: 'center',
    });
    content.push({ text: '\n' });
    //Muestra la tabla de productos con sus cantidades y totales.
    //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.
    content.push({
        columns: [
            {
                width: 'auto',
                table: {
                    headerRows: 1,
                    widths: [
                        'auto',
                        'auto',
                        'auto',
                        'auto',
                        'auto',
                        '*',
                        '*',
                        'auto',
                        'auto',
                    ],
                    body: tableBody,
                },
                alignment: 'left',
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
                text: `Total saldo: $ ${totalGeneral.toLocaleString('de-DE')}`,
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
            fontSize: 9,
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

/***/ 18691:
/*!************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/pedidos/pedidos.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialogdetalles": () => (/* binding */ Dialogdetalles),
/* harmony export */   "PedidosComponent": () => (/* binding */ PedidosComponent)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _tienda_pdf_pdfpedido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tienda/pdf/pdfpedido */ 99475);
/* harmony import */ var src_app_utils_formatearhora__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/formatearhora */ 92596);
/* harmony import */ var _tienda_pdf_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tienda/pdf/pdf */ 5484);
/* harmony import */ var src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material/alerta */ 63060);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/serviciosdbs/serviciodb.service */ 60981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 93819);

























function PedidosComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PedidosComponent_mat_option_21_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const item_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.selecionaritem(item_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r18);
  }
}

function PedidosComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Numero pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function PedidosComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r21.codigo_pedido);
  }
}

function PedidosComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function PedidosComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r22.nombrevendedor);
  }
}

function PedidosComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Estado pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function PedidosComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r23.estadopedido);
  }
}

function PedidosComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Raz\u00F3n social");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function PedidosComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r24.razonsocial_clientes, " ");
  }
}

function PedidosComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Fecha de creaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function PedidosComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r25.fecha_creacion);
  }
}

function PedidosComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function PedidosComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $", element_r26.totalpedido.toLocaleString("de-DE"), " ");
  }
}

function PedidosComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function PedidosComponent_td_43_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PedidosComponent_td_43_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const element_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.eliminar_pedido(element_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function PedidosComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PedidosComponent_td_43_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);
      const element_r27 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.pdf(element_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PedidosComponent_td_43_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);
      const element_r27 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.enviarcorreo(element_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "forward_to_inbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, PedidosComponent_td_43_button_6_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r27.estadopedido !== "ANULADO" && element_r27.estadopedido !== "FACTURADO");
  }
}

function PedidosComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 40);
  }
}

function PedidosComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 41);
  }
}

const _c0 = function () {
  return ["/admin/pedido"];
};

const _c1 = function (a0) {
  return {
    pagina: a0
  };
};

function Dialogdetalles_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogdetalles_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r8.nombre, " ");
  }
}

function Dialogdetalles_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " codigobarra");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogdetalles_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r9.codigobarra, " ");
  }
}

function Dialogdetalles_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function Dialogdetalles_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r10.estado, " ");
  }
}

function Dialogdetalles_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 10);
  }
}

function Dialogdetalles_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 11);
  }
}

class PedidosComponent {
  constructor(dialog, sedeselect, router, productser, route) {
    this.dialog = dialog;
    this.sedeselect = sedeselect;
    this.router = router;
    this.productser = productser;
    this.route = route;
    this.pedido = [];
    this.numero = 0;
    this.otrocorreo = '';
    this.total_registros = 0;
    this.registros_max = 15;
    this.pagina = 0;
    this.descripcio = '';
    this.esta = '';
    this.estado = ['PENDIENTE', 'FACTURADO', 'ANULADO', 'TODO'];
    this.estado2 = '';
    this.displayedColumns = ['codigo', 'nombrevendedor', 'estadopedido', 'razonsocial_clientes', 'fecha creacion', 'totalpedido', 'acciones'];
    this.obtenerregistros();
  }

  obtenerregistros(busqueda = '', estado = '') {
    this.productser.obtenernregistros(busqueda, estado).subscribe(data => {
      if (!data.response) {
        window.location.reload();
      } else {
        this.total_registros = data.nregistros.nregistros;
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const pagina = Number(params['pagina']) || 0;
      this.pagina = pagina;

      if (this.pagina <= 0) {
        this.pagina = 1;
      }

      if (this.pagina > this.total_registros) {
        if (this.total_registros === 0) {
          this.pagina = 1;
        } else {
          this.pagina = this.total_registros;
        }
      }

      this.cargarPedidos(); // función que obtiene los datos según la página
    });
  }

  comensarbusqueda() {
    this.router.navigateByUrl(`admin/pedido?pagina=1`);
  }

  selecionaritem(item) {
    this.estado2 = item;
    this.pagina = 1;
    this.buscarpedido();
  }

  cargarPedidos() {
    if (this.descripcio === '') {
      this.productser.obtenerpedidos_realizados(this.pagina, this.descripcio, this.estado2).subscribe(data => {
        this.pedido = data.pedidos;
        this.obtenerregistros(this.descripcio, this.estado2);
      });
    } else {
      this.productser.obtenerpedidos_realizados(this.pagina, this.descripcio, this.estado2).subscribe(data => {
        this.pedido = data.pedidos;
        this.obtenerregistros(this.descripcio, this.estado2);
      });
    }
  }

  buscarpedido() {
    this.pagina = 1;
    this.productser.obtenerpedidos_realizados(this.pagina, this.descripcio, this.estado2).subscribe(data => {
      this.pedido = data.pedidos;
      this.obtenerregistros(this.descripcio, this.estado2);
    });
  }

  verdetalles() {
    const dialogref = this.dialog.open(Dialogdetalles, {
      data: this.pedido,
      disableClose: true,
      width: '100%'
    });
    dialogref.afterClosed().subscribe(datos => {});
  }

  pdf(pedido) {
    this.productser.obteneritemspedido(pedido.codigo_pedido).subscribe(datos => {
      (0,_tienda_pdf_pdfpedido__WEBPACK_IMPORTED_MODULE_1__["default"])({
        cliente: {
          nombre: pedido.razonsocial_clientes,
          identificacion: pedido.identificacion,
          email: pedido.email,
          telefonoFijo: pedido.telefonoFijo
        },
        numero: pedido.codigo_pedido,
        productos: datos.result,
        fecha_actual: pedido.fecha_creacion,
        horaActual: (0,src_app_utils_formatearhora__WEBPACK_IMPORTED_MODULE_2__.Horaforma)(pedido.hora),
        config: datos.config,
        nombre: datos.vendedor
      });
    });
  }

  enviarcorreo(pedido) {
    var _this = this;

    const horfecha = `${pedido.fecha_creacion} ${(0,src_app_utils_formatearhora__WEBPACK_IMPORTED_MODULE_2__.Horaforma)(pedido.hora)}`;
    const dialogref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__.DialogoAlerta, {
      data: {
        boton: 'Continuar',
        input: true,
        boton1: 'Cancelar',
        mensaje: 'Digite otro correo si lo desea',
        type: 'email',
        inputIcon: 'mail',
        inputText: 'Ingrese correo',
        tipo: 'info'
      },
      disableClose: true
    });
    dialogref.afterClosed().subscribe(data => {
      if (data) {
        this.productser.obteneritemspedido(pedido.codigo_pedido).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datos) {
            if (datos) {
              const pdf = yield (0,_tienda_pdf_pdf__WEBPACK_IMPORTED_MODULE_3__.generatePDFemail)({
                cliente: {
                  nombre: pedido.razonsocial_clientes,
                  identificacion: pedido.identificacion,
                  email: pedido.email,
                  telefonoFijo: pedido.telefonoFijo
                },
                numero: pedido.codigo_pedido,
                productos: datos.result,
                fecha_actual: pedido.fecha_creacion,
                horaActual: (0,src_app_utils_formatearhora__WEBPACK_IMPORTED_MODULE_2__.Horaforma)(pedido.hora),
                config: datos.config,
                nombre: datos.vendedor
              });

              _this.productser.enviaremail({
                idpedido: pedido.codigo_pedido,
                itemspedido: datos.result,
                cliente: {
                  nombre: pedido.razonsocial_clientes,
                  identificacion: pedido.identificacion,
                  email: pedido.email,
                  telefonoFijo: pedido.telefonoFijo,
                  direccion: pedido.direccion
                },
                pdf: pdf,
                email: data,
                fecha: horfecha
              }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(datos => {
                const dialogref = _this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__.DialogoAlerta, {
                  data: {
                    boton: 'OK',
                    tipo: 'done',
                    mensaje: 'Correo enviado'
                  },
                  disableClose: true
                });

                dialogref.afterClosed().subscribe(datos => {});
              });
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    });
  }

  eliminar_pedido(element) {
    let dialogref;

    if (element.estadopedido === 'PENDIENTE') {
      dialogref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__.DialogoAlerta, {
        data: {
          boton: 'Si',
          boton1: 'No',
          mensaje: 'Desea anular  este pedido?',
          tipo: 'question'
        }
      });
      dialogref.afterClosed().subscribe(dato => {
        if (dato) {
          this.productser.anularpedido('ANULADO', element.codigo_pedido, element.codigousuario).subscribe(data => {
            dialogref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__.DialogoAlerta, {
              data: {
                boton: 'Ok',
                mensaje: data.mensaje,
                tipo: 'done'
              }
            });
            dialogref.afterClosed().subscribe(datos => {
              this.pagina = 1;
              this.cargarPedidos();
            });
          }, error => {
            dialogref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__.DialogoAlerta, {
              data: {
                boton: 'Ok',
                mensaje: error.error.mensaje,
                tipo: 'error'
              }
            });
          });
        }
      });
    } else {
      dialogref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_4__.DialogoAlerta, {
        data: {
          icon: 'error',
          boton1: 'Ok',
          mensaje: 'Este pedido no puede ser eliminado ',
          tipo: 'error'
        }
      });
    }
  }

}

PedidosComponent.ɵfac = function PedidosComponent_Factory(t) {
  return new (t || PedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_5__.serviciodb), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_6__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
};

PedidosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PedidosComponent,
  selectors: [["app-pedidos"]],
  decls: 60,
  vars: 18,
  consts: [[1, "row", 2, "overflow-x", "auto !important"], [1, "col-12"], ["mat-raised-button", "", "routerLink", "/admin/tienda", 1, "custom-button-pedido"], [2, "min-width", "100vh", "width", "100%"], [1, "col-12", 2, "display", "flex"], [2, "flex", "0 0 50%"], ["appearance", "fill", "search", ""], ["matInput", "", "id", "descripcion", 3, "ngModel", "ngModelChange", "click", "keyup"], ["descripcion", ""], ["matSuffix", ""], [2, "flex", "0 0 50%", "display", "flex", "justify-content", "end"], [2, "display", "inline-flex !important", "max-width", "200px"], ["value", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], ["mat-table", "", 1, "mat-elevation-z8", "col-12", 3, "dataSource"], ["matColumnDef", "codigo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombrevendedor"], ["matColumnDef", "estadopedido"], ["matColumnDef", "razonsocial_clientes"], ["matColumnDef", "fecha creacion"], ["matColumnDef", "totalpedido"], ["matColumnDef", "acciones"], ["mat-cell", "", "style", "display: flex", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "col-12", 2, "display", "flex", "justify-content", "center"], [2, "display", "inline-flex"], [2, "display", "flex"], [3, "routerLink", "queryParams"], [3, "value", "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "display", "flex"], ["mat-icon-button", "", "color", "socondary", 3, "click"], ["src", "../../../../../assets/images/imgpdf.svg", 1, "imgicon", 2, "color", "#fe676c", "width", "34px", "height", "36px"], ["mat-icon-button", "", 2, "color", "#5db5f2", 3, "click"], ["mat-icon-button", "", "color", "socondary", 3, "click", 4, "ngIf"], ["src", "../../../../../assets/images/delete_button.svg", 1, "imgicon"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function PedidosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "arrow_back");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " volver ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Descripcion");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PedidosComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.descripcio = $event;
      })("click", function PedidosComponent_Template_input_click_12_listener() {
        return ctx.comensarbusqueda();
      })("keyup", function PedidosComponent_Template_input_keyup_12_listener() {
        return ctx.buscarpedido();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 10)(17, "mat-form-field", 11)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Estado");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PedidosComponent_mat_option_21_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, PedidosComponent_th_24_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, PedidosComponent_td_25_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, PedidosComponent_th_27_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, PedidosComponent_td_28_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](29, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, PedidosComponent_th_30_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, PedidosComponent_td_31_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](32, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, PedidosComponent_th_33_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, PedidosComponent_td_34_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](35, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, PedidosComponent_th_36_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, PedidosComponent_td_37_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](38, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, PedidosComponent_th_39_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, PedidosComponent_td_40_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](41, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, PedidosComponent_th_42_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, PedidosComponent_td_43_Template, 7, 1, "td", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, PedidosComponent_tr_44_Template, 1, 0, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, PedidosComponent_tr_45_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 27)(47, "div", 28)(48, "div", 29)(49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 29)(52, "a", 30)(53, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "a", 30)(58, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "chevron_right");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.descripcio);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.estado);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.pedido);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.pagina, "-", ctx.total_registros, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c1, ctx.pagina - 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.pagina);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c1, ctx.pagina + 1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.RouterLinkWithHrefDelegate],
  styles: [".usuario_pedido[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InBlZGlkb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXN1YXJpb19wZWRpZG97XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgXHJcbn1cclxuXHJcbiJdfQ== */"]
});
let Dialogdetalles = class Dialogdetalles {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.displayedColumns = ['nombre', 'codigobarra', 'estado'];
  }

};

Dialogdetalles.ɵfac = function Dialogdetalles_Factory(t) {
  return new (t || Dialogdetalles)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
};

Dialogdetalles.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: Dialogdetalles,
  selectors: [["dialog-detalles"]],
  decls: 12,
  vars: 3,
  consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "nombre"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigobarra"], ["matColumnDef", "estado"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function Dialogdetalles_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, Dialogdetalles_th_2_Template, 2, 0, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, Dialogdetalles_td_3_Template, 2, 1, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, Dialogdetalles_th_5_Template, 2, 0, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, Dialogdetalles_td_6_Template, 2, 1, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, Dialogdetalles_th_8_Template, 2, 0, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, Dialogdetalles_td_9_Template, 2, 1, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, Dialogdetalles_tr_10_Template, 1, 0, "tr", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, Dialogdetalles_tr_11_Template, 1, 0, "tr", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.data.pedido);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow],
  encapsulation: 2
});
Dialogdetalles = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.HostBinding)('container')], Dialogdetalles);


/***/ }),

/***/ 5484:
/*!*************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/tienda/pdf/pdf.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePDFemail": () => (/* binding */ generatePDFemail)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);


 //import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__;
const generatePDFemail = /*#__PURE__*/function () {
  var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.
    const tableBody = [[{
      text: 'Codigo',
      style: 'tableHeader'
    }, {
      text: 'Descripción',
      style: 'tableHeader'
    }, {
      text: 'Referencia',
      style: 'tableHeader'
    }, {
      text: 'Presentación',
      style: 'tableHeader'
    }, {
      text: 'Cant.',
      style: 'tableHeader'
    }, {
      text: 'Precio',
      style: 'tableHeader'
    }, {
      text: 'Total',
      style: 'tableHeader'
    }], ...data?.productos.map(product => [product.codigo, product.nombre, product.referencia, `${product.presentacion === undefined ? '' : product.presentacion}`, product.cantidad.toString(), ` $${product.precio.toLocaleString('de-DE')}`, `$${(product.cantidad * product.precio).toLocaleString('de-DE')}`])]; //Se calcula la suma total de todos los productos usando reduce.

    const totalGeneral = data.productos.reduce((sum, product) => sum + product.cantidad * product.precio, 0); //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:

    const content = []; //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.

    content.push({
      stack: [{
        text: `${data.config.RAZON_SOCIAL}`,
        style: 'header'
      }, {
        text: `${data.config.NIT}`,
        style: 'subheader'
      }],
      alignment: 'center'
    });
    content.push({
      //Usa columns para alinear dos bloques en paralelo (uno a la izquierda, otro a la derecha).
      //Asigna width: '*' a ambos para que se repartan el espacio.
      //Cada stack tiene su propio alignment para alinearse correctamente.
      columns: [{
        stack: [{
          text: `Cliente: ${data.cliente.nombre}`,
          style: 'header'
        }, {
          text: `Identificación: ${data.cliente.identificacion}`,
          style: 'subheader'
        }, {
          text: `Email: ${data.cliente.email}`,
          style: 'subheader'
        }, {
          text: `Telefono: ${data.cliente.telefonoFijo}`,
          style: 'subheader'
        }],
        alignment: 'left',
        width: '*'
      }, {
        stack: [{
          text: `Pedido No. ${data.numero}`,
          style: 'header'
        }, {
          text: `Fecha de creacion: ${data.fecha_actual}`,
          style: 'subheader'
        }, {
          text: `Hora de creacion: ${data.horaActual}`,
          style: 'subheader'
        }, {
          text: `Vendedor: ${data.nombre}`,
          style: 'subheader'
        }],
        alignment: 'right',
        width: '*'
      }]
    });
    content.push({
      text: '\n'
    }); //Muestra la tabla de productos con sus cantidades y totales.
    //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.

    content.push({
      table: {
        headerRows: 1,
        widths: [40, 90, 60, 60, 20, 80, 80],
        body: tableBody
      },
      layout: 'lightHorizontalLines',
      margin: [0, 10, 0, 10]
    }); //Muestra el total de la compra alineado a la derecha.

    content.push({
      columns: [{
        text: '',
        width: '*'
      }, {
        text: `Total: $ ${totalGeneral.toLocaleString('de-DE')}`,
        style: 'total',
        alignment: 'right',
        margin: [0, 10, 0, 10]
      }]
    }); //Define estilos reutilizables usados en el contenido: encabezados, subencabezados, etc.

    const styles = {
      header: {
        fontSize: 14,
        bold: true
      },
      subheader: {
        fontSize: 12,
        margin: [0, 5, 0, 5]
      },
      tableHeader: {
        bold: true,
        fontSize: 12,
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

    function getPdfBase64(docDefinition) {
      return new Promise(resolve => {
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.createPdf(docDefinition).getBase64(base64 => {
          resolve(base64);
        });
      });
    }

    return yield getPdfBase64(docDefinition);
  });

  return function generatePDFemail(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 52157:
/*!********************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/tienda/pdf/pdffactura.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);


 //import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__;

const generatePDFfactura = /*#__PURE__*/function () {
  var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    const nuevaVentana = window.open('', '_blank');

    if (!nuevaVentana) {
      alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
      return null;
    } //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.


    const tableBody = [[{
      text: 'Codigo',
      style: 'tableHeader'
    }, {
      text: 'Descripción',
      style: 'tableHeader'
    }, {
      text: 'Referencia',
      style: 'tableHeader'
    }, {
      text: 'Presentación',
      style: 'tableHeader'
    }, {
      text: 'Cantidad',
      style: 'tableHeader'
    }, {
      text: 'Precio',
      style: 'tableHeader'
    }, {
      text: 'Total',
      style: 'tableHeader'
    }], ...data?.productos.map(product => [product.codigoContable, product.nombre, product.referencia, `${product.presentacion === undefined ? '' : product.presentacion}`, product.cantidad.toString(), ` $${product.precio.toLocaleString('de-DE')}`, `$${(product.cantidad * product.precio).toLocaleString('de-DE')}`])]; //Se calcula la suma total de todos los productos usando reduce.

    const totalGeneral = data.productos.reduce((sum, product) => sum + product.cantidad * product.precio, 0); //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:

    const content = []; //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.

    content.push({
      stack: [{
        text: `${data.config.RAZON_SOCIAL}`,
        style: 'header'
      }, {
        text: `${data.config.NIT}`,
        style: 'subheader'
      }],
      alignment: 'center'
    });
    content.push({
      //Usa columns para alinear dos bloques en paralelo (uno a la izquierda, otro a la derecha).
      //Asigna width: '*' a ambos para que se repartan el espacio.
      //Cada stack tiene su propio alignment para alinearse correctamente.
      columns: [{
        stack: [{
          text: `Cliente: ${data.cliente.nombre}`,
          style: 'header'
        }, {
          text: `Identificación: ${data.cliente.identificacion}`,
          style: 'subheader'
        }, {
          text: `Email: ${data.cliente.email}`,
          style: 'subheader'
        }, {
          text: `Telefono: ${data.cliente.telefonoFijo}`,
          style: 'subheader'
        }],
        alignment: 'left',
        width: '*'
      }, {
        stack: [{
          text: `factura No. ${data.prefijo} ${data.factura.codigo}`,
          style: 'header'
        }, {
          text: `Fecha de creacion: ${data.factura.fechaEmision}`,
          style: 'subheader'
        }, {
          text: `Hora de creacion: ${data.factura.horaCreacion}`,
          style: 'subheader'
        }, {
          text: `Vendedor: ${data.nombre}`,
          style: 'subheader'
        }],
        alignment: 'right',
        width: '*'
      }]
    });
    content.push({
      text: '\n'
    }); //Muestra la tabla de productos con sus cantidades y totales.
    //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.

    content.push({
      table: {
        headerRows: 1,
        widths: ['auto', 'auto', 'auto', 'auto', '*', '*', 'auto'],
        body: tableBody
      },
      layout: 'lightHorizontalLines',
      margin: [0, 10, 0, 10]
    }); //Muestra el total de la compra alineado a la derecha.

    content.push({
      columns: [{
        text: '',
        width: '*'
      }, {
        text: `Total: $ ${totalGeneral.toLocaleString('de-DE')}`,
        style: 'total',
        alignment: 'right',
        margin: [0, 10, 0, 10]
      }]
    });
    content.push({
      stack: [{
        text: `Observaciones`,
        style: 'header'
      }],
      alignment: 'left',
      width: '*'
    });
    content.push({
      stack: [{
        text: data.factura.observaciones,
        style: 'subheader'
      }],
      alignment: 'left',
      width: '*'
    }); //Define estilos reutilizables usados en el contenido: encabezados, subencabezados, etc.

    const styles = {
      header: {
        fontSize: 14,
        bold: true
      },
      subheader: {
        fontSize: 12,
        margin: [0, 5, 0, 5]
      },
      tableHeader: {
        bold: true,
        fontSize: 12,
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
    // ✅ 3. Genera el PDF y escribe el contenido en la ventana ya abierta

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

  return function generatePDFfactura(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePDFfactura);

/***/ }),

/***/ 20491:
/*!*************************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/tienda/pdf/pdffacturagmail.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);


 //import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__;

const generatePDFfacturagmail = /*#__PURE__*/function () {
  var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.
    const tableBody = [[{
      text: 'Codigo',
      style: 'tableHeader'
    }, {
      text: 'Descripción',
      style: 'tableHeader'
    }, {
      text: 'Referencia',
      style: 'tableHeader'
    }, {
      text: 'Presentación',
      style: 'tableHeader'
    }, {
      text: 'Cantidad',
      style: 'tableHeader'
    }, {
      text: 'Precio',
      style: 'tableHeader'
    }, {
      text: 'Total',
      style: 'tableHeader'
    }], ...data?.productos.map(product => [product.codigoContable, product.nombre, product.referencia, `${product.presentacion === undefined ? '' : product.presentacion}`, product.cantidad.toString(), ` $${product.precio.toLocaleString('de-DE')}`, `$${(product.cantidad * product.precio).toLocaleString('de-DE')}`])]; //Se calcula la suma total de todos los productos usando reduce.

    const totalGeneral = data.productos.reduce((sum, product) => sum + product.cantidad * product.precio, 0); //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:

    const content = []; //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.

    content.push({
      stack: [{
        text: `${data.config.RAZON_SOCIAL}`,
        style: 'header'
      }, {
        text: `${data.config.NIT}`,
        style: 'subheader'
      }],
      alignment: 'center'
    });
    content.push({
      //Usa columns para alinear dos bloques en paralelo (uno a la izquierda, otro a la derecha).
      //Asigna width: '*' a ambos para que se repartan el espacio.
      //Cada stack tiene su propio alignment para alinearse correctamente.
      columns: [{
        stack: [{
          text: `Cliente: ${data.cliente.nombre}`,
          style: 'header'
        }, {
          text: `Identificación: ${data.cliente.identificacion}`,
          style: 'subheader'
        }, {
          text: `Email: ${data.cliente.email}`,
          style: 'subheader'
        }, {
          text: `Telefono: ${data.cliente.telefonoFijo}`,
          style: 'subheader'
        }],
        alignment: 'left',
        width: '*'
      }, {
        stack: [{
          text: `factura No. ${data.prefijo} ${data.factura.codigo}`,
          style: 'header'
        }, {
          text: `Fecha de creacion: ${data.factura.fechaEmision}`,
          style: 'subheader'
        }, {
          text: `Hora de creacion: ${data.factura.horaCreacion}`,
          style: 'subheader'
        }, {
          text: `Vendedor: ${data.nombre}`,
          style: 'subheader'
        }],
        alignment: 'right',
        width: '*'
      }]
    });
    content.push({
      text: '\n'
    }); //Muestra la tabla de productos con sus cantidades y totales.
    //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.

    content.push({
      table: {
        headerRows: 1,
        widths: ['auto', 'auto', 'auto', 'auto', '*', '*', 'auto'],
        body: tableBody
      },
      layout: 'lightHorizontalLines',
      margin: [0, 10, 0, 10]
    }); //Muestra el total de la compra alineado a la derecha.

    content.push({
      columns: [{
        text: '',
        width: '*'
      }, {
        text: `Total: $ ${totalGeneral.toLocaleString('de-DE')}`,
        style: 'total',
        alignment: 'right',
        margin: [0, 10, 0, 10]
      }]
    });
    content.push({
      stack: [{
        text: `Observaciones`,
        style: 'header'
      }],
      alignment: 'left',
      width: '*'
    });
    content.push({
      stack: [{
        text: data.factura.observaciones,
        style: 'subheader'
      }],
      alignment: 'left',
      width: '*'
    }); //Define estilos reutilizables usados en el contenido: encabezados, subencabezados, etc.

    const styles = {
      header: {
        fontSize: 14,
        bold: true
      },
      subheader: {
        fontSize: 12,
        margin: [0, 5, 0, 5]
      },
      tableHeader: {
        bold: true,
        fontSize: 12,
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

    function getPdfBase64(docDefinition) {
      return new Promise(resolve => {
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.createPdf(docDefinition).getBase64(base64 => {
          resolve(base64);
        });
      });
    }

    return yield getPdfBase64(docDefinition);
  });

  return function generatePDFfacturagmail(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePDFfacturagmail);

/***/ }),

/***/ 99475:
/*!*******************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/tienda/pdf/pdfpedido.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);


 //import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__;

const generatePDF = /*#__PURE__*/function () {
  var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    const nuevaVentana = window.open('', '_blank');

    if (!nuevaVentana) {
      alert('El navegador bloqueó la ventana emergente. Permite pop-ups.');
      return null;
    } //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.


    const tableBody = [[{
      text: 'Codigo',
      style: 'tableHeader'
    }, {
      text: 'Descripción',
      style: 'tableHeader'
    }, {
      text: 'Referencia',
      style: 'tableHeader'
    }, {
      text: 'Presentación',
      style: 'tableHeader'
    }, {
      text: 'Cant.',
      style: 'tableHeader'
    }, {
      text: 'Precio',
      style: 'tableHeader'
    }, {
      text: 'Total',
      style: 'tableHeader'
    }], ...data?.productos.map(product => [product.codigo, product.nombre, product.referencia, `${product.presentacion === undefined ? '' : product.presentacion}`, product.cantidad.toString(), ` $${product.precio.toLocaleString('de-DE')}`, `$${(product.cantidad * product.precio).toLocaleString('de-DE')}`])]; //Se calcula la suma total de todos los productos usando reduce.

    const totalGeneral = data.productos.reduce((sum, product) => sum + product.cantidad * product.precio, 0); //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:

    const content = []; //Aquí se va construyendo todo el contenido que aparecerá en el PDF, paso a paso:
    //Se muestra una imagen a la izquierda (el logo) y el recibo con fecha a la derecha.

    content.push({
      stack: [{
        text: `${data.config.RAZON_SOCIAL}`,
        style: 'header'
      }, {
        text: `${data.config.NIT}`,
        style: 'subheader'
      }],
      alignment: 'center'
    });
    content.push({
      //Usa columns para alinear dos bloques en paralelo (uno a la izquierda, otro a la derecha).
      //Asigna width: '*' a ambos para que se repartan el espacio.
      //Cada stack tiene su propio alignment para alinearse correctamente.
      columns: [{
        stack: [{
          text: `Cliente: ${data.cliente.nombre}`,
          style: 'header'
        }, {
          text: `Identificación: ${data.cliente.identificacion}`,
          style: 'subheader'
        }, {
          text: `Email: ${data.cliente.email}`,
          style: 'subheader'
        }, {
          text: `Telefono: ${data.cliente.telefonoFijo}`,
          style: 'subheader'
        }],
        alignment: 'left',
        width: '*'
      }, {
        stack: [{
          text: `Pedido No. ${data.numero}`,
          style: 'header'
        }, {
          text: `Fecha de creacion: ${data.fecha_actual}`,
          style: 'subheader'
        }, {
          text: `Hora de creacion: ${data.horaActual}`,
          style: 'subheader'
        }, {
          text: `Vendedor: ${data.nombre}`,
          style: 'subheader'
        }],
        alignment: 'right',
        width: '*'
      }]
    });
    content.push({
      text: '\n'
    }); //Muestra la tabla de productos con sus cantidades y totales.
    //layout: 'lightHorizontalLines' agrega líneas horizontales ligeras para separar filas.

    content.push({
      table: {
        headerRows: 1,
        widths: [40, 90, 60, 60, 20, 80, 80],
        body: tableBody
      },
      layout: 'lightHorizontalLines',
      margin: [0, 10, 0, 10]
    }); //Muestra el total de la compra alineado a la derecha.

    content.push({
      columns: [{
        text: '',
        width: '*'
      }, {
        text: `Total: $ ${totalGeneral.toLocaleString('de-DE')}`,
        style: 'total',
        alignment: 'right',
        margin: [0, 10, 0, 10]
      }]
    }); //Define estilos reutilizables usados en el contenido: encabezados, subencabezados, etc.

    const styles = {
      header: {
        fontSize: 14,
        bold: true
      },
      subheader: {
        fontSize: 12,
        margin: [0, 5, 0, 5]
      },
      tableHeader: {
        bold: true,
        fontSize: 12,
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
    // ✅ 3. Genera el PDF y escribe el contenido en la ventana ya abierta

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

  return function generatePDF(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePDF);

/***/ }),

/***/ 53969:
/*!**********************************************************************************!*\
  !*** ./src/app/plantillas/administracion/componentes/tienda/tienda.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogFactura": () => (/* binding */ DialogFactura),
/* harmony export */   "TiendaComponent": () => (/* binding */ TiendaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/angular-material/alerta */ 63060);
/* harmony import */ var src_app_modelos_datos_peticion_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/datos-peticion copy */ 26557);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/library */ 70796);
/* harmony import */ var src_app_angular_material_pedidoguardos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material/pedidoguardos */ 6276);
/* harmony import */ var _pdf_pdfpedido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pdf/pdfpedido */ 99475);
/* harmony import */ var src_app_utils_formatearhora__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/formatearhora */ 92596);
/* harmony import */ var src_app_angular_material_alertaob__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/angular-material/alertaob */ 99108);
/* harmony import */ var src_app_angular_material_alertaupdateitempedido__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/angular-material/alertaupdateitempedido */ 16782);
/* harmony import */ var _pdf_pdffacturagmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pdf/pdffacturagmail */ 20491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/socket/socket.service */ 38245);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/serviciosdbs/serviciodb.service */ 60981);
/* harmony import */ var src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/socket/socket.producto.service.ts.service */ 21541);
/* harmony import */ var src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/auth/auth.service */ 74067);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/facturaservice/facturaservice.service */ 53358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ionic/angular */ 93819);









































const _c0 = ["inCodigo"];
const _c1 = ["inCantidad"];
const _c2 = ["inPrecio"];
const _c3 = ["descripcion"];

function TiendaComponent_mat_list_option_20_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "img", 68);
  }

  if (rf & 2) {
    const _cliente_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", "http://localhost:3000/" + _cliente_r18.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}

function TiendaComponent_mat_list_option_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function TiendaComponent_mat_list_option_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-list-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_mat_list_option_20_Template_mat_list_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r24);
      const _cliente_r18 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r23.seleccionarCliente(_cliente_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, TiendaComponent_mat_list_option_20_img_2_Template, 1, 1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, TiendaComponent_mat_list_option_20_ng_template_3_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div")(6, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 67)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _cliente_r18 = ctx.$implicit;

    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", _cliente_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _cliente_r18.imagen)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_cliente_r18.razonSocial);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _cliente_r18.identificacion, "");
  }
}

function TiendaComponent_img_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "img", 70);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", "http://localhost:3000/" + ctx_r2.clienteSeleccionado.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}

function TiendaComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " face ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function TiendaComponent_mat_card_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-card", 72)(1, "mat-card-header", 73)(2, "div", 18)(3, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, " shopping_cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "mat-card-title", 21)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "mat-card-subtitle", 75)(9, "div", 76)(10, "div")(11, "div", 77)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "Codigo contable: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 78)(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "Disponible: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "div", 78)(20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "Cantidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "div", 78)(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, "Precio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 78)(28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_mat_card_52_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r25.reiniciar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r5.productoActual.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx_r5.productoActual.codigoContable, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx_r5.cantidadactual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx_r5.cantidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("$", ctx_r5.precio.toLocaleString("de-DE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("$", (ctx_r5.cantidad * ctx_r5.precio).toLocaleString("de-DE"), " ");
  }
}

function TiendaComponent_mat_option_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("keyup.enter", function TiendaComponent_mat_option_70_Template_mat_option_keyup_enter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r29);
      const option_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r28.elegirCantidad(option_r27));
    })("click", function TiendaComponent_mat_option_70_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r29);
      const option_r27 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r30.elegirCantidad(option_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", option_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", option_r27.nombre, " ");
  }
}

function TiendaComponent_mat_card_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-card", 81)(1, "mat-card-header", 82)(2, "div", 18)(3, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, " shopping_cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "mat-card-title", 21)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "mat-card-subtitle", 83)(9, "div", 84)(10, "div")(11, "div", 77)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "Codigo contable: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div")(16, "div", 77)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18, "Disponible: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 85)(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, "Cantidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div")(25, "div", 85)(26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27, "Precio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 85)(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_mat_card_108_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r31.reiniciar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r13.productoActual.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx_r13.productoActual.codigoContable, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx_r13.cantidadactual, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r13.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("$", ctx_r13.precio.toLocaleString("de-DE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("$", (ctx_r13.cantidad * ctx_r13.precio).toLocaleString("de-DE"), " ");
  }
}

function TiendaComponent_mat_list_item_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-list-item", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_mat_list_item_112_Template_mat_list_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const _producto_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r34.seleccionaritem(_producto_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 87)(2, "div", 88)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 89)(6, "div", 90)(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "C\u00F3digo contable: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 90)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, "Referencia: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 89)(15, "div", 90)(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "div", 90)(20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "div", 89)(24, "div", 91)(25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](28, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 92)(30, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_mat_list_item_112_Template_button_click_30_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const _producto_r33 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r36.eliminarProducto($event, _producto_r33.codigo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const _producto_r33 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("active_product", ctx_r15.codigoitemseled === _producto_r33.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("id", "p_" + _producto_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("# ", _producto_r33.numero, " - ", _producto_r33.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _producto_r33.codigoContable, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _producto_r33.referencia, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" $", _producto_r33.precio.toLocaleString("de-DE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _producto_r33.cantidad.toLocaleString("de-DE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" $", _producto_r33.total.toLocaleString("de-DE"), " ");
  }
}

function TiendaComponent_button_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_button_118_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r37.crearfactura());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Facturar pedido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

function TiendaComponent_button_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_button_121_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r39.eliminarproductoreservado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Eliminar pedido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}

const _c4 = function () {
  return ["/admin/pedido"];
};

const _c5 = function () {
  return {
    pagina: 1
  };
};

const _c6 = ["tirilla"];

function DialogFactura_table_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "table", 10)(1, "tbody", 10)(2, "tr", 11)(3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "tr", 19)(8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r2.referencia, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r2.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r2.cantidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r2.precio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r2.tasaiva, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r2.total, " ");
  }
}

class TiendaComponent {
  constructor(_snackBar, socketServices, app, dialog, socketservidbs, socketproduct, serviauth, router, facturaservice) {
    this._snackBar = _snackBar;
    this.socketServices = socketServices;
    this.app = app;
    this.dialog = dialog;
    this.socketservidbs = socketservidbs;
    this.socketproduct = socketproduct;
    this.serviauth = serviauth;
    this.router = router;
    this.facturaservice = facturaservice;
    this.id_cliente_store = '';
    this.shoping_card1 = false;
    this.shoping_card2 = false;
    this.ventana = null;
    this.videoConstraints = {
      width: {
        ideal: 1280
      },
      height: {
        ideal: 720
      },
      facingMode: 'environment' // para cámara trasera

    };
    this.cantidadproducto = '';
    this.nombrevendedor = '';
    this.identificacion = '';
    this.numeropedido = 0;
    this.id_select = '';
    this.escanedo = false;
    this.formatsEnabled = [_zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.EAN_13, _zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.CODE_128, _zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.UPC_A, _zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.CODABAR, _zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.CODE_39, _zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.CODE_93, _zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.ITF, _zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.UPC_A, _zxing_library__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormat.RSS_14];
    this.beepAudio = new Audio('assets/sounds/beep.mp3');
    this.modificarPrecio = 0;
    this.terceroConsultado = null;
    this.codigoitemseled = 0;
    this.fechahora = '';
    this.ventaNegativo = 0;
    this.clientes = [];
    this.clientesIniciales = [];
    this.productinico = [];
    this.productos = [
      /*{
              cantidad: 13,
              codigo: "005",
              codigoContable: "00",
              id: "001",
              nombre: "PROD PRUEBA",
              numero: 0,
              precio: 5000,
              referencia: "REF 000",
              total: 500000,
              producto: {}
          },
             {
              cantidad: 13,
              codigo: "005",
              codigoContable: "00",
              id: "001",
              nombre: "PROD PRUEBA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0",
              numero: 0,
              precio: 5000,
              referencia: "REF 000",
              total: 500000,
              producto: {}
           },
           {
              cantidad: 13,
              codigo: "005",
              codigoContable: "00",
              id: "001",
              nombre: "PROD PRUEBA",
              numero: 0,
              precio: 5000,
              referencia: "REF 000",
              total: 500000,
                  producto: {}
              },
                  {
          cantidad: 13,
          codigo: "005",
          codigoContable: "00",
          id: "001",
          nombre: "PROD PRUEBA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0",
          numero: 0,
          precio: 5000,
          referencia: "REF 000",
          total: 500000,
          producto: {}
       },*/
    ];
    this.productosMostrar = [];
    this.buscarDescripcion = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.UntypedFormControl('');
    this.buscarCliente = '';
    this.opcionesFiltradas = [];
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
      plazo: 0
    };
    this.sede = '';
    this.productoActual = {
      numero: 0,
      id: '_vacio',
      nombre: 'Nombre del producto',
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
      costo: 0,
      codigoMedida: 0,
      codigoLinea: 0,
      descuento: 0,
      costoPromedio: 0,
      codigoGrupo: 0
    };
    this.cantidadactual = 0;
    this.cantidad = 0;
    this.precio = 0;
    this.codigo = '';
    this.referencia = '';
    this.totalPagar = 0;
    this.loader = true;
    this.facturarPedidos = 0;
    this.enterPrecio = 0;
    this.almacen = '';
    this.basedatosactual = '';
    this.facturaservice.conectar();
  }

  ngOnInit() {
    this.serviauth.mode.value = 'side';
    this.seleccionardb();
  }

  seleccionardb() {
    this.socketservidbs.tienesedeselccionada().subscribe(datos => {
      if (datos.response) {
        this.loader = true; //take para obtener un unico valor del observable y no mantener la suscribcion activa

        this.iniciarprograma();
        this.socketproduct.obteneralmacen().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(datos => {
          this.almacen = datos.almacen;
          this.configuracion = datos.config;
          this.identificacion = datos.identificacion;
          this.nombrevendedor = datos.nombre;
          this.modificarPrecio = datos.modificarPrecio;
          this.ventaNegativo = datos.ventaEnNegativo;
          this.facturarPedidos = datos.facturarPedidos;
        });
      } else {}
    });
  }

  crearinstanciadb(pruebas) {
    this.socketservidbs.crearinstanciadb(pruebas).subscribe(datos => {
      if (datos.response) {
        window.location.reload();
      }
    });
  }

  iniciarprograma() {
    if (!localStorage.getItem('pedido') || localStorage.getItem('pedido') === null) {
      this.loader = false;
      this.respuestacliente();
    } else {
      this.loader = false;
      this.productosMostrar = JSON.parse(localStorage.getItem('pedido') || '{nombre:""}');
      let itemsPedidos = this.productosMostrar.map(producto => {
        this.totalPagar += producto.total;
      });
      this.respuestacliente();
    }
  }

  sonidoescaner(start, end) {
    this.beepAudio.currentTime = start;
    this.beepAudio.play();

    const stopAudio = () => {
      if (this.beepAudio.currentTime >= end) {
        this.beepAudio.pause();
        this.beepAudio.removeEventListener('timeupdate', stopAudio);
      }
    };

    this.beepAudio.addEventListener('timeupdate', stopAudio);
  }

  onCodeResult(codigo) {
    var _this = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.escanedo) {
        _this.escanedo = true;
        yield _this.repuestaproductos('DESCRIPCION', codigo, false);
        _this.escanedo = false; // this.descripcion.nativeElement.value = codigo;

        _this.buscarDescripcion.setValue(codigo);

        _this.sonidoescaner(0, 1.5);

        _this.elegirCantidad(_this.productinico[0]); // Puedes hacer algo con el valor, como buscar en tu base de datos

      }
    })();
  }

  seleccionaritem(_producto) {
    var _this2 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.shoping_card2 = true;
      _this2.shoping_card1 = false;
      _this2.codigoitemseled = Number(_producto.codigo);
      document.getElementById('p_actual')?.classList.add('active');
      yield _this2.repuestaproductos('ID', _producto.codigo, false);

      const indexproduct = _this2.productinico.findIndex(product => product.codigo === _producto.codigo);

      _this2.dialog.open(src_app_angular_material_alertaupdateitempedido__WEBPACK_IMPORTED_MODULE_8__.DialogoAlertaitemspedido, {
        data: {
          cantidaddisponible: _this2.productinico[indexproduct]?.cantidaddisponible,
          descripcion: _this2.productinico[indexproduct]?.nombre,
          cantidad: _producto.cantidad,
          precio: _producto.precio,
          modificarPrecio: _this2.modificarPrecio
        },
        disableClose: true
      }).afterClosed().subscribe(data => {
        if (data) {
          _this2.actulizaritems(_producto, data);
        } else {
          _this2.reiniciar();

          _this2.codigoitemseled = 0;
        }
      }); //  this.cantidadactual = this.productinico[indexproduct]?.cantidaddisponible;

      /*this.productoActual = _producto;
      this.precio = this.productoActual.precio;
      this.cantidad = _producto.cantidad;
            this.productoActual.id = '_vacio';*/

    })();
  }

  buscarProductos(key, campo) {
    var _this3 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.repuestaproductos('DESCRIPCION', _this3.buscarDescripcion.value, true);
    })();
  }

  displayFn(_prod) {
    return _prod && _prod.nombre ? _prod.nombre : '';
  }

  reiniciar() {
    document.getElementById('p_actual')?.classList.remove('active');
    this.shoping_card1 = false;
    this.shoping_card2 = false;
    this.productoActual = {
      numero: 0,
      id: '_vacio',
      nombre: 'Nombre del producto',
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
      costo: 0,
      codigoMedida: 0,
      codigoLinea: 0,
      descuento: 0,
      costoPromedio: 0,
      codigoGrupo: 0
    };
    this.codigo = '';
    this.referencia = '';
    this.cantidad = 0;
    this.precio = 0;
    this.buscarDescripcion.patchValue(''); //document.getElementById('descripcion')?.focus();

    this.opcionesFiltradas = [];
    document.getElementById('p_actual')?.classList.remove('active');
    this.codigoitemseled = 0;
    this.enumerarProductos();
  }

  enumerarProductos() {
    this.productosMostrar.forEach((__prod, index) => {
      __prod.numero = index + 1;
    });
  }

  verpedidos() {
    this.socketServices.buscarclientes().subscribe(datos => {});
    this.socketproduct.verpedido().subscribe(data => {
      const dialogref = this.dialog.open(src_app_angular_material_pedidoguardos__WEBPACK_IMPORTED_MODULE_4__.Pedidoguardado, {
        width: '100%',
        height: '80%',
        data: data.pedido
      });
      dialogref.afterClosed().subscribe(data => {
        this.clienteSeleccionado = data.cliente;
        let clienteguardar = data.cliente;
        this.productosMostrar = data.productos_pedido;
        localStorage.setItem('pedido', JSON.stringify(data.productos_pedido));
        this.id_select = data._id;
        delete clienteguardar._id;
        this.socketServices.guardarcliente(clienteguardar);
        this.totalPagar = this.productosMostrar.reduce((i, item) => i += item.total, 0);
        this.socketServices.guardarcliente({
          identificacion: clienteguardar.identificacion,
          razonSocial: clienteguardar.nombre,
          telefonoFijo: clienteguardar.telefonoFijo,
          email: clienteguardar.email,
          celulares: clienteguardar.celulares,
          direccion: clienteguardar.direccion,
          codigo: clienteguardar.codigo
        }).subscribe(dat => {});
      });
    });
  }

  reservarpedido() {
    const datospedido = {
      cliente: this.clienteSeleccionado,
      productos_pedido: this.productosMostrar
    };
    console.log("datos pedidod reservar", datospedido);

    if (this.clienteSeleccionado.codigo === 0) {
      this.openDialogAlerta({
        boton: 'Ok',
        mensaje: 'Selecciona un cliente primero',
        tipo: 'error'
      });
    } else {
      if (this.productosMostrar.length <= 0) {
        this.openDialogAlerta({
          boton: 'Ok',
          mensaje: 'No has agregado ningun producto',
          tipo: 'error'
        });
      } else {
        const dialogRef = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
          data: {
            titulo: 'CORRECTO',
            mensaje: 'Desea continuar?',
            boton: 'Confirmar',
            tipo: 'question',
            boton1: 'Cancelar',
            input: false
          },
          disableClose: true
        });
        dialogRef.afterClosed().subscribe(data => {
          if (data) {
            if (this.id_select !== '') {
              this.socketproduct.actulizarpedido(this.id_select, datospedido).subscribe(data => {
                this.openDialogAlerta({
                  mensaje: data.message,
                  tipo: 'done',
                  boton: 'Ok'
                });
              });
              return;
            }

            this.socketproduct.reservarpedidos(datospedido).subscribe(data => {
              this.openDialogAlerta({
                mensaje: data.message,
                tipo: 'done',
                boton: 'Ok'
              });
            });
          }
        });
      }
    }
    /**/

  }

  eliminarproductoreservado() {
    const dialogref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
      data: {
        tipo: 'warning',
        boton: 'Confirmar',
        boton1: 'Cancelar',
        mensaje: 'Seguro desea eliminar este pedido reservado?'
      }
    });
    dialogref.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.socketproduct.aliminarpedidoreservado(this.id_select).subscribe(data => {
          this.id_select = '';

          if (data.repuesta) {
            this.deleteAll();
          }
        }, error => {});
      }
    });
  }

  elegirCantidad(_prod) {
    if (typeof _prod == 'object') {
      if (this.buscarDescripcion.value) {
        this.shoping_card1 = true;
        this.productoActual = {
          numero: null,
          ..._prod
        };
        this.precio = this.productoActual.precio;
        document.getElementById('p_actual')?.classList.add('active');
        this.cantidad = 1;
        this.codigo = this.productoActual.codigo;
        this.referencia = this.productoActual.referencia;
        this.cantidadactual = _prod.cantidaddisponible;
        document.getElementById('cantidad')?.focus();
      } else if (this.productos.length > 0) {
        this.productoActual = this.productos[0];
        this.precio = this.productoActual.precio;
        document.getElementById('p_actual')?.classList.add('active');
        this.cantidad = 1;
        document.getElementById('cantidad')?.focus();
      } else {
        this.inCodigo.nativeElement.focus();
      }
    }
  }

  displayrefer(_prod) {
    return _prod && _prod.referencia ? _prod.referencia : '';
  }

  elegirreferencia(_prod) {
    this.productoActual = {
      numero: null,
      ..._prod
    };
    this.precio = this.productoActual.precio;
    document.getElementById('p_actual')?.classList.add('active');
    this.cantidad = 1;
    this.referencia = this.productoActual.referencia;
    this.codigo = this.productoActual.codigo;
    this.buscarDescripcion.setValue(this.productoActual);
  }

  confirmDeleteAll() {
    const data = {
      titulo: 'ATENCIÓN',
      mensaje: '¿Desea reiniciar la venta?',
      boton: 'SI',
      tipo: 'question',
      boton1: 'NO',
      input: false
    };
    const dialogRef = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
      data: data,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado == true) {
        this.deleteAll();
      }

      this.loader = false;
    });
  }

  deleteAll() {
    this.id_select = '';
    this.productosMostrar = [];
    this.totalPagar = 0;
    this.productosMostrar.forEach(producto => {
      this.totalPagar += producto.total;
    });
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
      plazo: 0
    };
    localStorage.removeItem('pedido');
    this.reiniciar();
    this.loader = false;
    this.socketServices.buscarclientes().subscribe(dat => {
      if (dat.datos._id) {
        this.socketServices.eliminarproducto(dat.datos._id).subscribe(datos => {
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
            plazo: 0
          };
        });
      }
    });
  }

  elegirPrecio(event) {
    var _this4 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.calcularProductoActual();

      if (event.keyCode == 13) {
        document.getElementById('precio')?.focus();
      }
    })();
  }

  abrirpanel() {
    if (this.opcionesFiltradas.length > 0) {
      this.codigoitemseled = 0;
      this.inDescripcion.openPanel();
    }
  }

  agregarProducto() {
    var _this5 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (Number(_this5.cantidad) > 0) {
        _this5.opcionesFiltradas = [];
        yield _this5.calcularProductoActual();
        _this5.productoActual.precio = Number(_this5.precio);
        _this5.productoActual.cantidad = Number(_this5.cantidad);
        let cantidadVerificada = 0;

        let index = _this5.productosMostrar.findIndex(item => {
          return item.codigo == _this5.productoActual.codigo;
        });

        if (index != -1) {
          let _cantidad = _this5.productosMostrar[index].cantidad + _this5.cantidad;

          let _precio_total = Number(_cantidad) * Number(_this5.precio);

          if (_this5.productoActual.cantidaddisponible >= _cantidad || _this5.ventaNegativo > 0) {
            _this5.productosMostrar[index].cantidad = _cantidad;
            _this5.productosMostrar[index].precio = _this5.precio;
            _this5.productosMostrar[index].total = _precio_total;
            localStorage.setItem('pedido', JSON.stringify(_this5.productosMostrar));
          } else {
            _this5.openSnackBar('Supera la cantidad disponible');
          }
        } else {
          let options = _this5.productinico.findIndex(option => {
            return option.codigo === _this5.productoActual.codigo;
          });

          if (_this5.productinico[options].cantidaddisponible <= 0 && _this5.ventaNegativo === 0) {
            /* console.log(
              this.opcionesFiltradas[options]['producto'][
                `cantidad${(Number(this.almacen.slice(-1)) - 1).toString()}`
              ]
            );*/
            _this5.cantidadproducto;

            _this5.openSnackBar('Este producto esta agotado');
          } else {
            if (_this5.productinico[options].cantidaddisponible < _this5.productoActual.cantidad && _this5.ventaNegativo === 0) {
              _this5.openSnackBar('Cantidad no disponible');
            } else {
              if (_this5.productinico[options].precio <= 0 && _this5.precio <= 0) {
                _this5._snackBar.open('producto sin precio', 'ok', {
                  duration: 3000,
                  verticalPosition: 'top',
                  horizontalPosition: 'center' // ⬅️ puede ser 'start' | 'center' | 'end' | 'left' | 'right'

                });
              } else {
                delete _this5.productoActual.producto;

                if (_this5.precio > 0) {
                  _this5.productoActual.precio = _this5.precio;
                }

                let products = [..._this5.productosMostrar, _this5.productoActual];
                _this5.productosMostrar = products;
                localStorage.setItem('pedido', JSON.stringify(products));
              }
            }
          }
        }

        _this5.totalPagar = 0;

        _this5.productosMostrar.forEach(producto => {
          _this5.totalPagar += producto.total;
        });

        _this5.reiniciar();
      } else {
        if (_this5.enterPrecio % 2 == 0) {
          const data = {
            titulo: 'ERROR',
            mensaje: 'La cantidad del producto no puede ser menor o igual a cero.',
            boton: 'OK',
            tipo: 'error',
            input: false
          };

          _this5.openDialogAlerta(data);

          _this5.enterPrecio += 1;
        } else {
          _this5.enterPrecio += 1;
        }
      }
    })();
  }

  actulizaritems(product, datos) {
    var _this6 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.codigoitemseled > 0) {
        if (_this6.codigoitemseled === Number(product.codigo)) {
          yield _this6.repuestaproductos('CODIGO-EQUAL', Number(product.codigo), false);

          let index = _this6.productosMostrar.findIndex(pro => Number(pro.codigo) === _this6.codigoitemseled);

          let options = _this6.productos.findIndex(pro => Number(pro.codigo) === _this6.codigoitemseled);

          if (_this6.productos[options].cantidaddisponible < datos.cantidad && _this6.ventaNegativo === 0) {
            _this6.openSnackBar('Cantidad no disponible');

            _this6.reiniciar();

            _this6.codigoitemseled = 0;
          } else {
            _this6.productosMostrar[index].cantidad = datos.cantidad;
            _this6.productosMostrar[index].precio = datos.precio;
            _this6.productosMostrar[index].total = Number(datos.cantidad) * Number(datos.precio);

            _this6.reiniciar();

            _this6.codigoitemseled = 0;
            _this6.totalPagar = 0;

            _this6.productosMostrar.forEach(producto => {
              _this6.totalPagar += producto.total;
            });
          }
        }
      }
    })();
  }

  eliminarProducto(e, id) {
    e.stopPropagation();
    const dialigref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
      data: {
        boton: 'Si',
        boton1: 'No',
        mensaje: 'Desea eliminar este item?',
        tipo: 'question'
      }
    });
    dialigref.afterClosed().subscribe(data => {
      if (data) {
        document.getElementById('p_' + id)?.classList.add('deleted');
        let filteredItems = this.productosMostrar.filter(item => id !== item.codigo);
        localStorage.setItem('pedido', JSON.stringify(filteredItems));
        this.productosMostrar = [...filteredItems];
        this.totalPagar = 0;
        this.productosMostrar.forEach(producto => {
          this.totalPagar += producto.total;
        });
        this.enumerarProductos();
      }
    });
  }

  crearfactura() {
    if (this.productosMostrar.length <= 0) {
      const data = {
        titulo: 'ERROR',
        mensaje: 'Primero debe ingresar un producto.',
        boton: 'OK',
        tipo: 'error',
        input: false
      };
      this.openDialogAlerta(data);
      return;
    } else if (this.clienteSeleccionado.codigo <= 0) {
      const data = {
        titulo: 'ERROR',
        mensaje: 'Seleccione un cliente primero.',
        boton: 'OK',
        tipo: 'error',
        input: false
      };
      this.openDialogAlerta(data);
      return;
    } else if (this.clienteSeleccionado.email == '') {
      const data = {
        titulo: 'VERIFICAR',
        mensaje: 'Ingrese un correo para enviar el recibo de factura al cliente.',
        boton: 'ENVIAR',
        boton1: 'CANCELAR',
        tipo: 'info',
        input: true,
        inputIcon: 'alternate_email',
        inputText: 'Correo',
        type: 'email'
      };
      this.openDialogAlerta(data);
      return;
    } else {
      /*const respon: DatosAlerta = {
                titulo: 'realizado',
                mensaje: 'pedido creado ',
                boton: "OK",
                tipo: "info",
                input: false
            }
            this.openDialogAlerta(respon);*/
      const dialogref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
        data: {
          boton: 'Confirmar',
          boton1: 'Cancelar',
          tipo: 'question',
          mensaje: 'Confirma realizar esta factura?'
        },
        disableClose: true
      });
      dialogref.afterClosed().subscribe(datos => {
        if (datos) {
          this.facturarPedido();
        }
      });
    }
  }

  facturarPedido() {
    this.dialog.open(src_app_angular_material_alertaob__WEBPACK_IMPORTED_MODULE_7__.DialogoAlertaob, {
      data: {
        boton: 'Continuar',
        mensaje: 'Escribe información más detallada sobre el pedido',
        tipo: 'question',
        input: true,
        type: 'text',
        inputText: 'Ingresa observación'
      },
      disableClose: false
    }).afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(data => {
      if (!data) return; // Evita continuar si el usuario cerró el diálogo sin escribir

      this.enviarFacturaObservacion(data);
    });
  }

  enviarFacturaObservacion(observacion) {
    var _this7 = this;

    this.loader = true;
    this.totalPagar = 0;
    let fechaActual = this.obtenerFechaHora();
    this.fechahora = `${fechaActual.diaActual} ${fechaActual.horaActual}`;
    let itemsPedidos = this.productosMostrar.map(producto => {
      this.totalPagar += producto.total;
      return {
        codigoProducto: producto.codigo,
        valor: producto.precio,
        cantidad: producto.cantidad,
        nombre: producto.nombre,
        precio: producto.precio,
        total: producto.total,
        tasaiva: producto.tasaiva,
        referencia: producto.referencia,
        costo: producto.costo,
        codigoMedida: producto.codigoMedida,
        codigoLinea: producto.codigoLinea,
        codigoContable: producto.codigoContable,
        presentacion: producto.presentacion,
        descuento: producto.descuento,
        costoPromedio: producto.costoPromedio,
        codigoGrupo: producto.codigoGrupo,
        codigoUsuario: this.clienteSeleccionado.codigo
      };
    });
    let pedido = {
      tercero: this.clienteSeleccionado,
      itemsPedidos,
      totalPagar: this.totalPagar,
      observacion
    };
    this.facturaservice.realizarfactura(pedido).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        let cliente = _this7.clienteSeleccionado;
        let pdf = yield (0,_pdf_pdffacturagmail__WEBPACK_IMPORTED_MODULE_9__["default"])({ ...data,
          productos: itemsPedidos,
          cliente
        });

        _this7.facturaservice.enviaremailfactura({
          pdf: pdf,
          cliente
        }).subscribe(data => {
          console.log(data);

          if (data.estadoPeticion === "Done") {
            _this7.dialog.open(src_app_angular_material_alertaob__WEBPACK_IMPORTED_MODULE_7__.DialogoAlertaob, {
              data: {
                boton: 'Continuar',
                mensaje: "Factura creada",
                tipo: 'question'
              },
              disableClose: false
            }).afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe( /*#__PURE__*/function () {
              var _ref2 = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dat) {
                if (!dat) return; // Evita continuar si el usuario cerró el diálogo sin escribir
                // Abrir PDF aquí

                const fileURL = URL.createObjectURL(_this7.base64ToBlob(pdf));
                window.open(fileURL, "_blank");

                _this7.deleteAll();

                window.location.reload();
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          } else if (data.estadoPeticion === "ERROR") {
            console.log(data.error);
          }
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      this.loader = false;
    });
    /*let pedido = new DatosPedido(
      this.clienteSeleccionado.codigo,
      fechaActual.diaActual,
      fechaActual.horaActual,
      this.clienteSeleccionado.codigo,
      this.totalPagar,
      this.id_select,
      observacion
    );*/
  } //metodo para converitir un base 64 a blob


  base64ToBlob(base64, contentType = "application/pdf") {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], {
      type: contentType
    });
  }

  calcularProductoActual() {
    return new Promise((resolve, err) => {
      let _precio_total = Number(this.cantidad) * Number(this.precio);

      this.productoActual.total = _precio_total;
      resolve(_precio_total);
    });
  }

  eventoEnter(e, input) {
    var _this8 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.shoping_card1 = false;
      yield _this8.calcularProductoActual();

      if (e.keyCode == 13) {
        switch (input) {
          case 'codigo':
            _this8.buscarProducto(_this8.codigo, 'CODIGO-EQUAL');

            break;

          case 'referencia':
            _this8.buscarProducto(_this8.referencia, 'CODIGO-EQUAL');

            break;

          case 'descripcion':
            _this8.buscarProducto(_this8.buscarDescripcion.value, 'DESCRIPCION');

            break;

          case 'cantidad':
            _this8.inPrecio.nativeElement.focus();

            break;

          case 'precio':
            if (_this8.productoActual.id != '_vacio') {
              _this8.agregarProducto();
            } else {
              const data = {
                titulo: 'ERROR',
                mensaje: 'Por favor ingrese un producto valido',
                boton: 'OK',
                tipo: 'error',
                input: false
              };

              _this8.openDialogAlerta(data);
            }

            break;

          default:
            break;
        }
      }
    })();
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
    this.clienteSeleccionado.plazo = cliente.plazo || 0;
    this.buscarCliente = '';
    this.clientes = [];
    this.socketServices.guardarcliente(cliente).subscribe();
  }

  buscarProducto(valor, tipo) {
    var _this9 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.loader = true;
      _this9.productos = [];

      try {
        _this9.socketServices.consultarProducto(_this9.sedeSeleccionada.po.canalsocket, tipo, valor, _this9.sedeSeleccionada.usuario.usuario);
      } catch (error) {} finally {
        setTimeout(() => {
          if (tipo != 'DESCRIPCION') {
            _this9.elegirCantidad(null);
          }
        }, 1000);
      }
    })();
  }

  respuestacliente() {
    this.socketServices.buscarclientes().subscribe(datos => {
      if (datos.datos && datos.datos.razonSocial) {
        this.id_cliente_store = datos.datos._id;
        this.clienteSeleccionado.nombre = datos.datos.razonSocial;
        this.clienteSeleccionado.identificacion = datos.datos.identificacion;
        this.clienteSeleccionado.email = datos.datos.email;
        this.clienteSeleccionado.celulares = datos.datos.celulares;
        this.clienteSeleccionado.direccion = datos.datos.direccion;
        this.clienteSeleccionado.telefonoFijo = datos.datos.telefonoFijo;
        this.clienteSeleccionado.codigo = datos.datos.codigo;
        this.clienteSeleccionado.imagen = datos.datos.imagen || null;
        this.clienteSeleccionado.ciudad = datos.datos.municipio;
      }

      this.loader = false;
    });
  }

  repuestaproductos(condicion = '', datoCondicion, buscartodo = false) {
    var _this10 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        _this10.socketServices.escucha = _this10.socketproduct.obtenerInfo('aws', 'pazzioli-pos-3', {
          metodo: 'CONSULTAR',
          condicion,
          consulta: 'productos',
          datoCondicion,
          sede: localStorage.getItem('sede')
        }); //this.socketServices.consultarTercero(this.sedeSeleccionada.po.canalsocket, '', '', this.sedeSeleccionada.usuario.usuario);

        _this10.socketServices.escucha.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe( /*#__PURE__*/function () {
          var _ref3 = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (info) {
            _this10.loader = false;
            _this10.totalPagar = 0;

            _this10.productosMostrar.forEach(producto => {
              _this10.totalPagar += producto.total;
            });

            info = JSON.parse(info);

            switch (info.tipoConsulta) {
              case 'PRODUCTO':
                if (info.estadoPeticion === 'SUCCESS') {
                  _this10.procesarproductos(info, true, buscartodo);

                  resolve();
                } else {
                  resolve();
                }

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

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }());
      });
    })();
  }

  procesarproductos(info, estado, buscartodo) {
    if (estado) {
      this.productos = info.mensajePeticion.map(producto => {
        return {
          id: producto.codigo,
          nombre: producto.descripcion,
          codigo: producto.codigo,
          codigoContable: producto.codigocontable,
          referencia: producto.referencia,
          precio: producto.precio,
          codigobarra: producto.codigoBarra,
          total: 0,
          producto: producto,
          tasaiva: producto.tasaIva,
          presentacion: producto.presentacion,
          cantidaddisponible: producto.cantidad,
          costo: producto.costo,
          codigoMedida: producto.codigoMedida,
          codigoLinea: producto.codigoLinea,
          descuento: producto.descuento,
          costoPromedio: producto.costoPromedio,
          codigoGrupo: producto.codigoGrupo
        };
      });
      this.productinico = this.productos;

      if (this.almacen === 'BODEGA') {
        this.cantidadproducto = 'cantidad';
      } else {
        this.cantidadproducto = `cantidad${(Number(this.almacen.slice(-1)) + 1).toString()}`;
      }

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
      };
      this.openDialogAlerta(data);
      this.loader = false;
    }

    this.loader = false;
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'OK', {
      duration: 2000
    });
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

  buscarClientes() {
    this.clientes = [];
    this.clientesIniciales.forEach(cliente => {
      if (cliente.razonSocial.toLowerCase().includes(this.buscarCliente.toLowerCase()) || cliente.identificacion.toLowerCase().includes(this.buscarCliente.toLowerCase())) {
        this.clientes.push(cliente);
      }
    });
  }

  crearPedido() {
    if (this.productosMostrar.length <= 0) {
      const data = {
        titulo: 'ERROR',
        mensaje: 'Primero debe ingresar un producto.',
        boton: 'OK',
        tipo: 'error',
        input: false
      };
      this.openDialogAlerta(data);
      return;
    } else if (this.clienteSeleccionado.codigo <= 0) {
      const data = {
        titulo: 'ERROR',
        mensaje: 'Seleccione un cliente primero.',
        boton: 'OK',
        tipo: 'error',
        input: false
      };
      this.openDialogAlerta(data);
      return;
    } else if (this.clienteSeleccionado.email == '') {
      const data = {
        titulo: 'VERIFICAR',
        mensaje: 'Ingrese un correo para enviar el pedido al cliente.',
        boton: 'ENVIAR',
        boton1: 'CANCELAR',
        tipo: 'info',
        input: true,
        inputIcon: 'alternate_email',
        inputText: 'Correo',
        type: 'email'
      };
      this.openDialogAlerta(data);
      return;
    } else {
      /*const respon: DatosAlerta = {
                titulo: 'realizado',
                mensaje: 'pedido creado ',
                boton: "OK",
                tipo: "info",
                input: false
            }
            this.openDialogAlerta(respon);*/
      const dialogref = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
        data: {
          boton: 'Confirmar',
          boton1: 'Cancelar',
          tipo: 'question',
          mensaje: 'Confirma realizar este pedido?'
        },
        disableClose: true
      });
      dialogref.afterClosed().subscribe(datos => {
        if (datos) {
          this.enviarPedido();
        }
      });
    }
  } //si queremos que el resultado de una suscripcion ejecute una anterior esta logica deberia
  //ser separada ya que se puede dar el caso de que una suscripcion se repita dos veces o incluso mas


  enviarPedido() {
    this.dialog.open(src_app_angular_material_alertaob__WEBPACK_IMPORTED_MODULE_7__.DialogoAlertaob, {
      data: {
        boton: 'Continuar',
        mensaje: 'Escribe información más detallada sobre el pedido',
        tipo: 'question',
        input: true,
        type: 'text',
        inputText: 'Ingresa observación'
      },
      disableClose: false
    }).afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(data => {
      if (!data) return; // Evita continuar si el usuario cerró el diálogo sin escribir

      this.enviarPedidoConObservacion(data);
    });
  }

  enviarPedidoConObservacion(observacion) {
    this.loader = true;
    this.totalPagar = 0;
    let fechaActual = this.obtenerFechaHora();
    this.fechahora = `${fechaActual.diaActual} ${fechaActual.horaActual}`;
    let itemsPedidos = this.productosMostrar.map(producto => {
      this.totalPagar += producto.total;
      return {
        codigoProducto: producto.codigo,
        valor: producto.precio,
        cantidad: producto.cantidad,
        nombre: producto.nombre,
        precio: producto.precio,
        total: producto.total,
        tasaiva: producto.tasaiva,
        referencia: producto.referencia,
        descuento: producto.descuento,
        costoPromedio: producto.costoPromedio,
        codigoGrupo: producto.codigoGrupo,
        codigoUsuario: this.clienteSeleccionado.codigo
      };
    });
    let pedido = new src_app_modelos_datos_peticion_copy__WEBPACK_IMPORTED_MODULE_2__.DatosPedido(this.clienteSeleccionado.codigo, fechaActual.diaActual, fechaActual.horaActual, this.clienteSeleccionado.codigo, this.totalPagar, this.id_select, observacion);
    this.socketproduct.crearpedido('pedido', 'pazzioli-pos-3', {
      metodo: 'CREAR',
      condicion: 'nombres',
      consulta: 'PEDIDO',
      canalserver: 'pedido',
      datos: {
        pedido: pedido.datos,
        itemsPedido: itemsPedidos,
        cliente: this.clienteSeleccionado,
        pdf: this.pdf,
        modificaInventario: this.clienteSeleccionado.email
      },
      sede: localStorage.getItem('sede')
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(inf => {
      try {
        if (inf.estadoPeticion === 'SUCCESS') {
          this.openDialogFactura();
        } else if (JSON.parse(inf).estadoPeticion === 'ERROR') {
          const sqlMsg = JSON.parse(inf).mensajePeticion.original.sqlMessage;

          if (sqlMsg.includes('Data too long for column')) {
            this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
              data: {
                boton: 'OK',
                mensaje: 'Haz una observación más corta',
                tipo: 'error'
              }
            }).afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(() => {
              this.enviarPedido(); // Aquí se vuelve a abrir el diálogo inicial
            });
          }
        }
      } catch (e) {
        console.error('Error al procesar la respuesta:', e);
      }
    });
  }

  respuestaPedidos(info) {
    let elementos = document.getElementsByClassName('cdk-overlay-container');
    elementos[0].style.zIndex = '1000';

    if (info.estadoPeticion === 'SUCCESS' && info.tipoConsulta === 'PEDIDO') {
      this.deleteAll();
      const data = {
        titulo: 'CORRECTO',
        mensaje: 'Pedido creado exitosamente',
        boton: 'OK',
        tipo: 'done',
        input: false
      };
      this.openDialogAlerta(data);
    }
  }

  obtenerFechaHora() {
    let fechaActual = new Date(); //.padStart(2, '0')Le dice: "haz que el string tenga al menos 2 caracteres. Si le falta, agrega '0' al inicio".

    const pad = n => n.toString().padStart(2, '0');

    let diaActual = fechaActual.getFullYear() + '-' + pad(fechaActual.getMonth() + 1) + '-' + pad(fechaActual.getDate());
    let horaActual = pad(fechaActual.getHours()) + ':' + pad(fechaActual.getMinutes()) + ':' + pad(fechaActual.getSeconds());
    return {
      diaActual,
      horaActual
    };
  }

  respuestaTerceros(info) {
    this.clientes = info.mensajePeticion;
    this.clientesIniciales = info.mensajePeticion;
    this.loader = false;
  }

  openDialogAlerta(data) {
    const dialogRef = this.dialog.open(src_app_angular_material_alerta__WEBPACK_IMPORTED_MODULE_1__.DialogoAlerta, {
      data: data,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado != false && data.tipo == 'info') {
        this.clienteSeleccionado.email = resultado == true ? null : resultado; //this.openDialogFactura();
      }

      if (data.tipo == 'done') {
        this.deleteAll();
      }

      this.loader = false;
    });
  }

  openDialogFactura() {
    var _this11 = this;

    return (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let numerofactura = 0;

      const {
        diaActual,
        horaActual
      } = _this11.obtenerFechaHora();

      _this11.loader = true;
      const obtenerpedido = new Promise((resolve, reject) => {
        _this11.socketproduct.obtenernumeropedido().subscribe( /*#__PURE__*/function () {
          var _ref4 = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (datos) {
            resolve(datos.codigo.codigo);
          });

          return function (_x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      });
      numerofactura = yield obtenerpedido;
      const pdf = yield (0,_pdf_pdfpedido__WEBPACK_IMPORTED_MODULE_5__["default"])({
        productos: _this11.productosMostrar,
        cliente: _this11.clienteSeleccionado,
        total: _this11.totalPagar,
        infoEmpresa: _this11.clienteSeleccionado,
        fecha_actual: diaActual,
        horaActual: (0,src_app_utils_formatearhora__WEBPACK_IMPORTED_MODULE_6__.Horaforma)(horaActual),
        config: _this11.configuracion,
        numero: numerofactura,
        nombre: _this11.nombrevendedor,
        identificacion: _this11.identificacion
      });
      _this11.pdf = pdf;

      _this11.socketproduct.enviaremail({
        idpedido: numerofactura,
        itemspedido: _this11.productosMostrar,
        cliente: _this11.clienteSeleccionado,
        pdf: _this11.pdf,
        fecha: _this11.fechahora
      }).subscribe(datos => {
        if (datos.estadoPeticion === 'Done') {
          _this11.deleteAll();
        } else {
          _this11.deleteAll();
        }
      });
      /*const dialogRef = this.dialog.open(DialogFactura, {
        data: {
          productos: this.productosMostrar,
          cliente: this.clienteSeleccionado,
          total: this.totalPagar,
          infoEmpresa: this.clienteSeleccionado,
          fecha_actual: diaActual,
          horaActual: Horaforma(horaActual),
          config: this.configuracion,
          numero: numerofactura,
          vendedor: this.nombrevendedor,
          identificacion: this.identificacion,
        },
              disableClose: false,
        maxWidth: '100vw',
      });
            let elementos = document.getElementsByClassName(
        'cdk-overlay-container'
      ) as HTMLCollectionOf<HTMLElement>;
          );
      //elementos[0].style.zIndex = "0";
      dialogRef.afterClosed().subscribe(async (resultado) => {
        // PDF CONVERTIDO A BASE64
              /* const dialoref = this.dialog.open(DialogoAlerta, {
          data: {
            boton: 'Generar',
            boton1: 'cancelar',
            mensaje: 'Quisieras generar pdf ',
            tipo: 'warning',
          },
        });*/

      /*dialoref.afterClosed().subscribe(async (datos) => {
              });*/

    })();
  }

}

TiendaComponent.ɵfac = function TiendaComponent_Factory(t) {
  return new (t || TiendaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_10__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_serviciosdbs_serviciodb_service__WEBPACK_IMPORTED_MODULE_12__.serviciodb), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_13__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_facturaservice_facturaservice_service__WEBPACK_IMPORTED_MODULE_15__.FacturaserviceService));
};

TiendaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: TiendaComponent,
  selectors: [["app-tienda"]],
  viewQuery: function TiendaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteTrigger, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteTrigger);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c3, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.inCodigo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.inDescripcion = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.inCantidad = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.inPrecio = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.descripcion = _t.first);
    }
  },
  decls: 122,
  vars: 40,
  consts: [[1, "loader", "loader-fixed", 3, "diameter", "strokeWidth"], [1, "loader", "loader-text", "mat-text-primary", 2, "position", "fixed !important"], [1, "row", "loader-content"], [1, "col-12", "col-sm-10", "col-md-6", "col-lg-4", "mx-auto"], [1, "search-card"], [1, "search"], [1, "m-0"], [1, "row"], [1, "col-12"], ["appearance", "fill", "search", ""], ["matInput", "", "placeholder", "", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], [1, "overflow-content", 2, "height", "auto"], [1, "clientelist", 3, "multiple"], ["shoes", ""], ["style", "width: calc(100% - 32px); margin: auto; border-radius: 8px", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "b-primary", "icon-card", 2, "height", "100px"], [2, "border", "none !important"], ["mat-card-avatar", ""], ["style", "\n                width: 40px;\n                height: 40px;\n                border-radius: 50%;\n                object-fit: cover;\n              ", 3, "src", 4, "ngIf", "ngIfElse"], ["sinimagen", ""], [1, "client-name"], [1, "separator"], [1, "client-info"], [1, "col-6", "p-0", "elipsis"], [1, "col-12", "p-0", "elipsis"], ["class", "b-primary card_shoping", "id", "p_actual", "style", "height: 175px !important", 4, "ngIf"], [1, "col-12", "col-sm-12", "-col-md-6", "col-lg-8"], [1, "row", "col-12", 2, "width", "calc(100% - 64px)"], [1, "col-6", "col-log-6", "col-sm-12", "col-md-5"], ["matInput", "", "placeholder", "", "id", "descripcion", 3, "formControl", "matAutocomplete", "keyup"], ["trigger", "matAutocompleteTrigger", "descripcion", ""], [1, "mi-autocomplete-panel", 3, "displayWith"], ["auto", "matAutocomplete"], [2, "height", "246px", 3, "items"], ["scroll_prods", ""], ["class", "desplegable", 3, "value", "keyup.enter", "click", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-12", "col-md-6", "col-lg-6"], [2, "font-size", "1rem"], ["matInput", "", "placeholder", "", "name", "inputCantidad", "id", "cantidad", "type", "number", "onfocus", "this.select()", 3, "ngModel", "ngModelChange"], ["inCantidad", ""], ["matInput", "", "placeholder", "", "name", "inputPrecio", "id", "precio", "type", "number", "onfocus", "this.select()", 3, "ngModel", "disabled", "ngModelChange"], ["inprecio", ""], [1, "row", "col-12"], [1, "col-12", 2, "display", "flex", "flex-wrap", "wrap"], [1, "col-boton", 2, "display", "flex", "justify-content", "center", "flex-grow", "1"], ["mat-raised-button", "", 1, "custom-button-pedido", 2, "display", "flex", "justify-content", "center", "align-items", "center", 3, "routerLink", "queryParams"], ["mat-raised-button", "", 1, "custom-button-pedido", 3, "click"], ["src", "../../../../../assets/images/icon_orders.svg", 1, "imgicon", 2, "color", "#000"], [1, "col-12", 2, "display", "flex", "flex-grow", "1", "gap", "2", "justify-content", "space-between", "flex-wrap", "wrap"], ["mat-fab", "", "color", "warn", 1, "mr-3", 3, "click"], [1, "total"], ["mat-fab", "", "color", "primary", 1, "add-product", 3, "disabled", "click"], [1, "overflow-content"], ["class", "b-primary icon-card prod_card card-list active carro", 4, "ngIf"], [3, "items"], ["scroll_productosMostrar", ""], ["style", "max-height: 400px !important", 3, "id", "active_product", "click", 4, "ngFor", "ngForOf"], [2, "bottom", "0", "width", "100%", "left", "0", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "prod-actions", 2, "display", "flex", "background", "#fff", "width", "100%", "border-radius", "20px", "margin-right", "8px !important", "flex-wrap", "wrap"], [1, "botonesactions", 2, "display", "flex", "flex", "1", "justify-content", "space-between"], ["mat-flat-button", "", "color", "primary", "full-button", "", "pedido", "", 1, "botonotions", 2, "box-shadow", "4px 4px 10px rgba(0, 0, 0, 0.2) !important", 3, "click"], ["mat-flat-button", "", "color", "primary", "full-button", "", "pedido", "", "class", "botonotionsfacturar", "style", "box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2) !important", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "full-button", "", "class", "botontionsdel", "pedido", "", "style", "\n                box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2) !important;\n                background: #e74c3c !important  ;\n                color: #fff !important;\n              ", 3, "click", 4, "ngIf"], [2, "width", "calc(100% - 32px)", "margin", "auto", "border-radius", "8px", 3, "value", "click"], ["style", "\n                  width: 40px;\n                  height: 40px;\n                  border-radius: 50%;\n                  object-fit: cover;\n                  padding: 10px;\n                ", 3, "src", 4, "ngIf", "ngIfElse"], ["mat-line", "", 1, "bold"], ["mat-line", ""], [2, "width", "40px", "height", "40px", "border-radius", "50%", "object-fit", "cover", "padding", "10px", 3, "src"], ["mat-list-icon", "", 2, "padding", "10px"], [2, "width", "40px", "height", "40px", "border-radius", "50%", "object-fit", "cover", 3, "src"], [1, "head-icon", 2, "margin", "11px 0"], ["id", "p_actual", 1, "b-primary", "card_shoping", 2, "height", "175px !important"], [1, "carrito", 2, "border", "none !important"], [1, "head-icon"], [1, "client-info", 2, "margin", "0 !important"], [1, "row-pro"], [1, "p-0", 2, "display", "flex"], [1, "col-6", "p-0", 2, "display", "flex"], ["mat-mini-fab", "", "color", "warn", 1, "cancel", 3, "click"], [1, "desplegable", 3, "value", "keyup.enter", "click"], [1, "b-primary", "icon-card", "prod_card", "card-list", "active", "carro"], [1, "carrito2", 2, "border", "none !important", "height", "fit-content"], [1, "client-info", 2, "margin", "0 !important", "width", "100% !important"], [1, "row", "row-pro", 2, "width", "100% !important", "justify-content", "space-between"], [1, "p-0"], [2, "max-height", "400px !important", 3, "id", "click"], [1, "row", "row-list-product", 2, "width", "100%"], ["mat-line", "", 1, "col-12", "p-0"], ["mat-line", "", 1, "col-12", "p-0", "row", 2, "display", "flex"], [1, "col-12", "col-md-6", "p-0"], [1, "col-12", "p-0"], [1, "edit-remove"], ["mat-mini-fab", "", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", "full-button", "", "pedido", "", 1, "botonotionsfacturar", 2, "box-shadow", "4px 4px 10px rgba(0, 0, 0, 0.2) !important", 3, "click"], ["mat-flat-button", "", "color", "primary", "full-button", "", "pedido", "", 1, "botontionsdel", 2, "box-shadow", "4px 4px 10px rgba(0, 0, 0, 0.2) !important", "background", "#e74c3c !important", "color", "#fff !important", 3, "click"]],
  template: function TiendaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "mat-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Espere...");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "mat-card", 4)(6, "mat-card-header", 5)(7, "mat-card-title", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "Clientes");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "mat-form-field", 9)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "Buscar clientes");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function TiendaComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.buscarCliente = $event;
      })("ngModelChange", function TiendaComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.autocompletarinputclient($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "mat-card-content", 12)(18, "mat-selection-list", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, TiendaComponent_mat_list_option_20_Template, 12, 5, "mat-list-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "mat-card", 16)(22, "mat-card-header", 17)(23, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](24, TiendaComponent_img_24_Template, 1, 1, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, TiendaComponent_ng_template_25_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "mat-card-title", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](29, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "mat-card-subtitle", 23)(31, "div", 7)(32, "div", 24)(33, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](34, "perm_identity");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "div", 24)(37, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](38, "phone_android");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 24)(41, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](42, "phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "div", 24)(45, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46, "alternate_email");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "div", 25)(49, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](50, "location_city");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](52, TiendaComponent_mat_card_52_Template, 34, 6, "mat-card", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "div", 27)(54, "mat-card", 4)(55, "mat-card-header", 5)(56, "mat-card-title", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](57, "Productos");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "div", 28)(59, "div", 29)(60, "mat-form-field", 9)(61, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](62, "Descripcion");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](63, "input", 30, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("keyup", function TiendaComponent_Template_input_keyup_63_listener($event) {
        return ctx.buscarProductos($event, "descripcion");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "mat-autocomplete", 32, 33)(68, "virtual-scroller", 34, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](70, TiendaComponent_mat_option_70_Template, 2, 2, "mat-option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](71, "div", 37)(72, "mat-form-field", 9)(73, "mat-label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](74, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](75, "input", 39, 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function TiendaComponent_Template_input_ngModelChange_75_listener($event) {
        return ctx.cantidad = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](77, "div", 37)(78, "mat-form-field", 9)(79, "mat-label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](80, "precio");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](81, "input", 41, 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function TiendaComponent_Template_input_ngModelChange_81_listener($event) {
        return ctx.precio = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](83, "div", 43)(84, "div", 44)(85, "div", 45)(86, "a", 46)(87, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](88, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](89, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](90, "Pedidos realizados");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](91, "div", 45)(92, "button", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_Template_button_click_92_listener() {
        return ctx.verpedidos();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](93, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](94, " Pedidos por confirmar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](95, "div", 49)(96, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_Template_button_click_96_listener() {
        return ctx.confirmDeleteAll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](97, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](98, "delete_forever");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](99, "h1", 51)(100, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](101, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](102, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](104, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_Template_button_click_104_listener() {
        return ctx.eventoEnter({
          keyCode: 13
        }, "precio");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](105, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](106, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](107, "mat-card-content", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](108, TiendaComponent_mat_card_108_Template, 36, 6, "mat-card", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](109, "mat-list")(110, "virtual-scroller", 55, 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](112, TiendaComponent_mat_list_item_112_Template, 33, 10, "mat-list-item", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](113, "div", 58)(114, "div", 59)(115, "div", 60)(116, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_Template_button_click_116_listener() {
        return ctx.reservarpedido();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](117);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](118, TiendaComponent_button_118_Template, 2, 0, "button", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](119, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TiendaComponent_Template_button_click_119_listener() {
        return ctx.crearPedido();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](120, " Realizar pedido ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](121, TiendaComponent_button_121_Template, 2, 0, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](26);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](67);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](69);

      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](111);

      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("shown", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("diameter", 50)("strokeWidth", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("shown", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("hidden", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.buscarCliente);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("multiple", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.clientes);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.clienteSeleccionado.imagen)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.clienteSeleccionado.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.identificacion, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.celulares, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.telefonoFijo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.email, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.clienteSeleccionado.direccion, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.shoping_card1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formControl", ctx.buscarDescripcion)("matAutocomplete", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("displayWith", ctx.displayFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx.opcionesFiltradas);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _r9.viewPortItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.cantidad);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.precio)("disabled", ctx.modificarPrecio === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](38, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](39, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.totalPagar.toLocaleString("de-DE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", ctx.productoActual.id == "_vacio");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.shoping_card2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx.productosMostrar);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _r14.viewPortItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.id_select !== "" ? "Actualizar pedido" : "Reservar pedido", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.facturarPedidos === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.id_select !== "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardAvatar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatOption, _angular_material_list__WEBPACK_IMPORTED_MODULE_31__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_31__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_31__.MatListIconCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_31__.MatSelectionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_31__.MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDivider, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlDirective, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_16__.VirtualScrollerComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__.MatProgressSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_34__.RouterLinkWithHrefDelegate],
  styles: [".add-product[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 44px;\n  right: 9px;\n}\n\n.search-product[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndiv.separator[_ngcontent-%COMP%] {\n  width: calc(100% - 74px);\n  position: absolute;\n  height: 1px;\n  border-bottom-width: 1px;\n  border-bottom-style: dashed;\n  right: 11px;\n  top: 38px;\n}\n\n.head-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  width: 52px;\n  height: 52px;\n}\n\n.client-name[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 4px !important;\n  font-size: 19px;\n  display: flex;\n  height: 20px !important;\n}\n\n.client-info[_ngcontent-%COMP%] {\n  margin: 0% !important;\n  font-size: 15px;\n}\n\n.client-info[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 15px !important;\n  height: 15px !important;\n  font-size: 15px !important;\n}\n\n.icon-card[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  bottom: 0px;\n  margin: 0 9px;\n  box-shadow: 0 0px 17px 0px rgba(129, 121, 211, 0.9) !important;\n}\n\n.overflow-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 310px);\n  overflow: hidden;\n  margin: 0 5px !important;\n  padding: 0 !important;\n}\n\n.overflow-content[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  width: 100%;\n  height: 100%;\n}\n\n.overflow-content[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%]   .vertical.selfScroll[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.row-prooducts[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 0;\n  width: calc(100% - 158px);\n}\n\n.mat-card.search-card[_ngcontent-%COMP%] {\n  padding: 17px 0px;\n  padding-bottom: 10px;\n}\n\n.prod-actions[_ngcontent-%COMP%] {\n  padding: 17px !important;\n  position: relative !important;\n  padding-bottom: 10px !important;\n  margin: 0 !important;\n}\n\n.total[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  font-size: 30px;\n  font-weight: 800 !important;\n}\n\nbutton[pedido][_ngcontent-%COMP%] {\n  max-width: 200px;\n  right: 8px;\n  font-size: 1.2rem !important;\n}\n\n.botonotions[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: #1f618d !important;\n  text-align: center !important;\n  padding: 0 !important;\n  font-size: 6px !important;\n  border-radius: 10px !important;\n  max-width: 150px !important;\n}\n\n.botonotionsfacturar[_ngcontent-%COMP%] {\n  background: #DCEC7D !important;\n  text-align: center !important;\n  padding: 0 !important;\n  font-size: 6px !important;\n  max-width: 20px;\n  color: #FFF !important;\n  border-radius: 10px !important;\n  max-width: 150px !important;\n}\n\n.botonotions[_ngcontent-%COMP%]     .mat-button-wrapper {\n  font-size: 12px !important;\n}\n\n.botonotionsfacturar[_ngcontent-%COMP%]     .mat-button-wrapper {\n  font-size: 12px !important;\n}\n\n.prod_card[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 104px;\n  width: calc(100% - 28px);\n  transform: scale(0);\n  transform-origin: bottom left;\n  transition: transform 400ms cubic-bezier(0.5, 0.25, 0, 1);\n  z-index: 100000;\n}\n\n.prod_card.active[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.prod_card.active[_ngcontent-%COMP%]    ~ .mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 156px;\n}\n\n.row-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transform-origin: bottom left;\n  transition: transform 400ms cubic-bezier(0.5, 0.25, 0, 1);\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item.deleted[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n\n.cancel[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 9px;\n  top: 23px;\n}\n\n.mat-form-field-appearance-fill[br-l0][_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.mat-form-field-appearance-fill[br-r0][_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n#p_actual[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.edit-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  display: flex;\n  top: 0;\n  bottom: 0;\n  height: fit-content;\n  margin: auto;\n}\n\n@media (max-width: 970px) {\n  .prod_card[_ngcontent-%COMP%] {\n    max-height: 140px !important;\n  }\n  .card-list[_ngcontent-%COMP%] {\n    bottom: 160px;\n  }\n  .botonesactions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  #p_actual[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .vertical[_ngcontent-%COMP%]   .selfScroll[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n}\n\n.row-pro[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.card_shoping[_ngcontent-%COMP%] {\n  height: 120px !important;\n}\n\n.carrito[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.overflow-content[_ngcontent-%COMP%] {\n  overflow-y: auto !important;\n}\n\n.col-4-pro[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.botonaction[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n\n@media (max-width: 700px) {\n  button[pedido][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n  .row-action-pro[_ngcontent-%COMP%] {\n    gap: 5px;\n  }\n  .col-boton[_ngcontent-%COMP%] {\n    flex: 1 0 50%;\n  }\n}\n\n@media (max-width: 467px) {\n  .col-boton[_ngcontent-%COMP%] {\n    flex: 1;\n    margin-top: 10px;\n  }\n  .col-boton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .col-boton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n  zxing-scanner video {\n  max-height: 70px;\n}\n\n@media (max-width: 700px) {\n  .botonotions[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .botonotionsfacturar[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .botontionsdel[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n\n@media (max-width: 590px) {\n  .row-pro[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    width: 100% !important;\n  }\n  .overflow-content[_ngcontent-%COMP%] {\n    max-height: 300px !important;\n  }\n  mat-card.carro[_ngcontent-%COMP%] {\n    height: 200px !important;\n    max-height: 200px !important;\n    bottom: 35px;\n  }\n  .overflow-content[_ngcontent-%COMP%] {\n    max-height: 150px !important;\n  }\n}\n\n.imgicon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #000;\n}\n\nbutton[pedido_con][_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n\n  .mat-list-text {\n  display: flex !important;\n  flex-direction: row !important;\n  column-gap: 10px;\n}\n\n.clientelist[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow: auto;\n}\n\n.carrito[_ngcontent-%COMP%]     .mat-card-header-text {\n  display: flex !important;\n  flex-direction: column !important;\n  width: 100%;\n  max-width: calc(100% - 80px) !important;\n}\n\n.carrito[_ngcontent-%COMP%]     .mat-card-header-text   .mat-card-title {\n  height: fit-content !important;\n}\n\n.carrito[_ngcontent-%COMP%]     .mat-card-header-text   .mat-card-title span {\n  display: inline-block;\n  width: 100%;\n  word-wrap: break-word !important;\n  height: fit-content;\n}\n\n.carrito2[_ngcontent-%COMP%]     .mat-card-header-text {\n  display: flex !important;\n  width: 100%;\n  max-width: calc(100% - 130px) !important;\n  flex-wrap: wrap !important;\n}\n\n.carrito2[_ngcontent-%COMP%]     .mat-card-header-text   .mat-card-title {\n  display: block !important; \n  width: 100% !important;\n  max-width: 100% !important;\n  height: auto !important;\n}\n\n.carrito2[_ngcontent-%COMP%]     .mat-card-header-text   .mat-card-title span {\n  display: block !important;\n  max-width: 100% !important;\n  white-space: normal !important;\n  overflow-wrap: break-word !important;\n  word-break: break-word !important;\n}\n\n  .overflow-content {\n  max-height: 500px !important;\n}\n\n.prod_card[_ngcontent-%COMP%] {\n  height: 120px !important;\n}\n\n.escaner[_ngcontent-%COMP%] {\n  border: 1px solid #28b463;\n}\n\n.scanner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-height: 100% !important;\n}\n\n  zxing-scanner video {\n  max-height: 100% !important;\n}\n\n.botontionsdel[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  max-width: 150px !important;\n  font-size: 6px !important;\n  text-align: center !important;\n}\n\n.botontionsdel[_ngcontent-%COMP%]     .mat-button-wrapper {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpZW5kYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOERBQUE7QUFGRjs7QUFLQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7O0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFFQSxVQUFBO0VBQ0EsNEJBQUE7QUFIRjs7QUFLQTtFQUlHLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBRUEseUJBQUE7RUFDRCw4QkFBQTtFQUNFLDJCQUFBO0FBTko7O0FBU0E7RUFDSyw4QkFBQTtFQUNGLDZCQUFBO0VBQ0EscUJBQUE7RUFFQSx5QkFBQTtFQUNELGVBQUE7RUFDRCxzQkFBQTtFQUNBLDhCQUFBO0VBQ0csMkJBQUE7QUFQSjs7QUFZRTtFQUNBLDBCQUFBO0FBVEY7O0FBaUJFO0VBQ0EsMEJBQUE7QUFkRjs7QUFvQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSx5REFBQTtFQUNBLGVBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsbUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UscUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFqQkY7O0FBcUJBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUVBLHlEQUFBO0FBbEJGOztBQXFCQTtFQUNFLG1CQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsVUFBQTtBQWxCRjs7QUFxQkE7RUFDRSxVQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBbEJGOztBQXNCQTtFQUVFO0lBRUMsNEJBQUE7RUFyQkQ7RUEwQkQ7SUFDQyxhQUFBO0VBeEJBO0VBMkJBO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQXpCRjtFQTRCQTtJQUNFLGFBQUE7RUExQkY7RUFnQ0E7SUFDRSxnQkFBQTtFQTlCRjtBQUNGOztBQWtDQTtFQUNDLGVBQUE7QUFoQ0Q7O0FBbUNBO0VBQ0Usd0JBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0MsYUFBQTtBQWhDRDs7QUE2Q0E7RUFDRSwyQkFBQTtBQTFDRjs7QUE2Q0E7RUFDRSxhQUFBO0FBMUNGOztBQThDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUEzQ0Y7O0FBOENBO0VBQ0U7SUFDRSxXQUFBO0lBRUEsVUFBQTtFQTVDRjtFQStDQTtJQUNFLFFBQUE7RUE3Q0Y7RUFnREE7SUFDRSxhQUFBO0VBOUNGO0FBQ0Y7O0FBaURBO0VBQ0U7SUFDRSxPQUFBO0lBQ0EsZ0JBQUE7RUEvQ0Y7RUFnREU7SUFDRSxXQUFBO0VBOUNKO0VBZ0RFO0lBQ0UsV0FBQTtFQTlDSjtBQUNGOztBQWlEQTtFQUVDLGdCQUFBO0FBaEREOztBQW1EQTtFQUNFO0lBQ0UsZ0JBQUE7RUFoREY7RUFrREE7SUFDRSxnQkFBQTtFQWhERjtFQW1EQTtJQUNFLGdCQUFBO0VBakRGO0FBQ0Y7O0FBb0RBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLHNCQUFBO0VBbERGO0VBcURDO0lBQ0MsNEJBQUE7RUFuREY7RUFxREE7SUFDRSx3QkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtFQW5ERjtFQXNEQTtJQUNFLDRCQUFBO0VBcERGO0FBQ0Y7O0FBMERFO0VBQ0UsV0FBQTtBQXhESjs7QUE2REE7RUFDQSxnQkFBQTtBQTFEQTs7QUE4REE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUEzREY7O0FBaUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBOURGOztBQW1FRTtFQUNFLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QUFoRUo7O0FBa0VJO0VBQ0UsOEJBQUE7QUFoRU47O0FBaUVNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0QsZ0NBQUE7RUFDQSxtQkFBQTtBQS9EUDs7QUFzRUU7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLDBCQUFBO0FBbkVKOztBQXNFSTtFQUNFLHlCQUFBLEVBQUEsb0NBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUFwRU47O0FBc0VNO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBQXBFUjs7QUEwRUE7RUFDRSw0QkFBQTtBQXZFRjs7QUF5RUE7RUFDRSx3QkFBQTtBQXRFRjs7QUF5RUE7RUFDRSx5QkFBQTtBQXRFRjs7QUE0RUU7RUFDRSwyQkFBQTtBQXpFSjs7QUE4RUU7RUFDRSwyQkFBQTtBQTNFSjs7QUErRUE7RUFDRyw4QkFBQTtFQUNDLDJCQUFBO0VBQ0YseUJBQUE7RUFDQyw2QkFBQTtBQTVFSDs7QUErRUk7RUFDRiwwQkFBQTtBQTVFRiIsImZpbGUiOiJ0aWVuZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXByb2R1Y3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ0cHg7XHJcbiAgcmlnaHQ6IDlweDtcclxufVxyXG5cclxuLnNlYXJjaC1wcm9kdWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgXHJcbn1cclxuXHJcbmRpdi5zZXBhcmF0b3Ige1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3NHB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGRhc2hlZDtcclxuICByaWdodDogMTFweDtcclxuICB0b3A6IDM4cHg7XHJcbn1cclxuXHJcbi5oZWFkLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxuICB3aWR0aDogNTJweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiBcclxufVxyXG5cclxuLmNsaWVudC1uYW1lIHtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbGllbnQtaW5mbyB7XHJcbiAgbWFyZ2luOiAwJSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuIFxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uLWNhcmQge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbjogMCA5cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwcHggMTdweCAwcHggcmdiYSgxMjksIDEyMSwgMjExLCAwLjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdmVyZmxvdy1jb250ZW50IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMTBweCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDAgNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIC5tYXQtbGlzdC1iYXNlIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLnZlcnRpY2FsLnNlbGZTY3JvbGwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJvdy1wcm9vZHVjdHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE2cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1OHB4KTtcclxufVxyXG5cclxuLm1hdC1jYXJkLnNlYXJjaC1jYXJkIHtcclxuICBwYWRkaW5nOiAxN3B4IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb2QtYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMTdweCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgbWFyZ2luOiAxNHB4IDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uW3BlZGlkb10ge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgXHJcbiAgcmlnaHQ6IDhweDtcclxuICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5ib3Rvbm90aW9uc3tcclxuXHJcbiAgXHJcblxyXG4gICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyAgXHJcbiAgIGJhY2tncm91bmQ6IzFmNjE4ZCAhaW1wb3J0YW50O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgIGZvbnQtc2l6ZTogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcbi5ib3Rvbm90aW9uc2ZhY3R1cmFye1xyXG4gICAgIGJhY2tncm91bmQ6I0RDRUM3RCAhaW1wb3J0YW50O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gICBmb250LXNpemU6IDZweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDoyMHB4O1xyXG4gY29sb3I6I0ZGRiAhaW1wb3J0YW50O1xyXG4gYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50OyAgXHJcbiBcclxufVxyXG5cclxuLmJvdG9ub3Rpb25zIHtcclxuICA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBcclxuXHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcbi5ib3Rvbm90aW9uc2ZhY3R1cmFye1xyXG4gIDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIFxyXG5cclxuICB9XHJcbn1cclxuXHJcbi5wcm9kX2NhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwNHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGN1YmljLWJlemllcigwLjUsIDAuMjUsIDAsIDEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBjdWJpYy1iZXppZXIoMC41LCAwLjI1LCAwLCAxKTtcclxuICB6LWluZGV4OiAxMDAwMDA7XHJcbn1cclxuXHJcbi5wcm9kX2NhcmQuYWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4ucHJvZF9jYXJkLmFjdGl2ZSB+IC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNTZweDtcclxufVxyXG5cclxuLnJvdy1hY3Rpb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiBcclxufVxyXG5cclxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgY3ViaWMtYmV6aWVyKDAuNSwgMC4yNSwgMCwgMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGN1YmljLWJlemllcigwLjUsIDAuMjUsIDAsIDEpO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbS5kZWxldGVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcblxyXG4uY2FuY2VsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDlweDtcclxuICB0b3A6IDIzcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGxbYnItbDBdIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsW2JyLXIwXSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuI3BfYWN0dWFsIHtcclxuICBoZWlnaHQ6MTAwcHggO1xyXG59XHJcblxyXG4uZWRpdC1yZW1vdmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk3MHB4KXtcclxuICBcclxuICAucHJvZF9jYXJke1xyXG4gICAvLyBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgbWF4LWhlaWdodDoxNDBweCAhaW1wb3J0YW50O1xyXG4gICBcclxuICBcclxuICB9XHJcblxyXG4gLmNhcmQtbGlzdHtcclxuICBib3R0b206MTYwcHg7XHJcbiAgXHJcbiB9XHJcbiAgLmJvdG9uZXNhY3Rpb25ze1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAjcF9hY3R1YWwge1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gXHJcblxyXG4gXHJcbiAgLnZlcnRpY2FsIC5zZWxmU2Nyb2xse1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcblxyXG4gXHJcbn1cclxuLnJvdy1wcm97XHJcbiBmbGV4LXdyYXA6IHdyYXA7XHJcbiBcclxufVxyXG4uY2FyZF9zaG9waW5ne1xyXG4gIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcnJpdG97XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMDAwcHgpe1xyXG4gXHJcbiBcclxuICBcclxuICBcclxuIFxyXG4gIFxyXG4gXHJcbn1cclxuLm92ZXJmbG93LWNvbnRlbnR7XHJcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sLTQtcHJve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4uYm90b25hY3Rpb257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDpzdGFydDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3MDBweCl7XHJcbiAgYnV0dG9uW3BlZGlkb117XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICB9XHJcbiAgLnJvdy1hY3Rpb24tcHJve1xyXG4gICAgZ2FwOjVweDtcclxuICB9XHJcblxyXG4gIC5jb2wtYm90b257XHJcbiAgICBmbGV4OjEgMCA1MCVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDY3cHgpe1xyXG4gIC5jb2wtYm90b257XHJcbiAgICBmbGV4OjE7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG46Om5nLWRlZXAgenhpbmctc2Nhbm5lciB2aWRlbyB7XHJcbiBcclxuIG1heC1oZWlnaHQ6NzBweDtcclxuXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3MDBweCl7XHJcbiAgLmJvdG9ub3Rpb25ze1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIH1cclxuICAuYm90b25vdGlvbnNmYWN0dXJhcntcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICB9XHJcblxyXG4gIC5ib3RvbnRpb25zZGVse1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NTkwcHgpIHtcclxuICAucm93LXByb3tcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuICAgLm92ZXJmbG93LWNvbnRlbnR7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgbWF0LWNhcmQuY2Fycm8ge1xyXG4gICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTozNXB4O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJmbG93LWNvbnRlbnR7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcbi5pbWdpY29ue1xyXG4gIHN2Z3tcclxuICAgIGNvbG9yOiMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuYnV0dG9uW3BlZGlkb19jb25de1xyXG5tYXgtd2lkdGg6MTAwcHg7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1saXN0LXRleHR7XHJcbiAgZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93ICFpbXBvcnRhbnQ7XHJcbiAgY29sdW1uLWdhcDogMTBweDtcclxuXHJcbiBcclxuXHJcbiAgXHJcbn1cclxuLmNsaWVudGVsaXN0e1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmNhcnJpdG97XHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gICAgOjpuZy1kZWVwIC5tYXQtY2FyZC10aXRsZXtcclxuICAgICAgaGVpZ2h0OmZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICAgICAgIGhlaWdodDpmaXQtY29udGVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcnJpdG8yIHtcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMzBweCkgIWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgXHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IC8qIEZPUlpBUiBxdWUgb2N1cGUgYW5jaG8gY29tcGxldG8gKi9cclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7ICAgICAgICAgICAvLyDihpAgZXN0byBlcyBjbGF2ZSBhbCBlc3RlYmxlc2VybG8gbm9ybWFsIGVzdG8gbWUgcGVtaXRpcmEgcGFzYSBlbCBjb250aWRvICBkZSBtaSBzcGFuIGEgbGEgc2lndWllbnRlIGxpbmVhXHJcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50OyAvL1NpZ25pZmljYTogXCJTaSB1bmEgcGFsYWJyYSBtdXkgbGFyZ2Egbm8gY2FiZSBlbiBzdSBjb250ZW5lZG9yLCBwZXJtaXRlIHJvbXBlcmxhIGVuXHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm92ZXJmbG93LWNvbnRlbnR7XHJcbiAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG4ucHJvZF9jYXJke1xyXG4gIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzY2FuZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4YjQ2MztcclxuICBcclxuICBcclxufVxyXG5cclxuLnNjYW5uZXJ7XHJcbiAgdmlkZW97XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgenhpbmctc2Nhbm5lcntcclxuICB2aWRlb3tcclxuICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcbi5ib3RvbnRpb25zZGVse1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7ICBcclxuICBmb250LXNpemU6IDZweCAhaW1wb3J0YW50O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4uYm90b250aW9uc2RlbHtcclxuICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIFxyXG5cclxuICB9XHJcbiBcclxufVxyXG5cclxuIl19 */"]
});
class DialogFactura {
  constructor(dialogRef, data, servisocket, platform, route) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.servisocket = servisocket;
    this.platform = platform;
    this.route = route;
    this.dataSource = [];
    this.clienteSeleccionado = {};
    this.total = 0;
    this.total_items = 0;
    this.showBtn = true;
    this.archivoBase64 = null;
    this.infoEmpresa = {};
    this.htmlRenderizado = '';
    this.dataSource = data.productos;
    this.clienteSeleccionado = data.cliente;
    this.total = data.total;
    this.infoEmpresa = data.infoEmpresa;
    /*setTimeout(() => {
      let doc = new jsPDF('p', 'px', 'letter'); // A4 TAMAÑO
      if (this.infoEmpresa.logo) {
        doc.addImage(this.infoEmpresa.logo, 'PNG', 30, 30, 60, 60);
      }
            autoTable(doc, {
        html: '#rsTb',
        startY: 30,
        margin: { top: 0, bottom: 0, left: 110 },
        theme: 'plain',
        styles: { fillColor: [255, 255, 255], fontSize: 20 },
      });
            let finalY = (doc as any).lastAutoTable.finalY;
      autoTable(doc, {
        html: '#empresaTb',
        startY: finalY + 5,
        theme: 'plain',
        margin: { top: 0, bottom: 0, left: 110 },
        styles: { fillColor: [255, 255, 255], textColor: [80, 80, 80] },
        headStyles: {
          fontSize: 10,
          lineWidth: 1,
          lineColor: [200, 200, 200],
        },
        bodyStyles: {
          fontSize: 9,
          lineWidth: 1,
          textColor: [80, 80, 80],
          lineColor: [200, 200, 200],
        },
      });
            let finalY0 = (doc as any).lastAutoTable.finalY;
      autoTable(doc, {
        html: '#clienteTb',
        startY: finalY0 + 20,
        theme: 'plain',
        styles: { fillColor: [255, 255, 255], textColor: [80, 80, 80] },
        headStyles: {
          fontSize: 10,
          lineWidth: 1,
          lineColor: [200, 200, 200],
        },
        bodyStyles: {
          fontSize: 9,
          lineWidth: 1,
          textColor: [80, 80, 80],
          lineColor: [200, 200, 200],
        },
      });
            let finalY1 = (doc as any).lastAutoTable.finalY;
      autoTable(doc, {
        html: '#productosTb',
        startY: finalY1 + 20,
        theme: 'plain',
        styles: { fillColor: [255, 255, 255], textColor: [80, 80, 80] },
        headStyles: {
          fontSize: 10,
          lineWidth: 1,
          lineColor: [200, 200, 200],
        },
        bodyStyles: {
          fontSize: 9,
          lineWidth: 1,
          textColor: [80, 80, 80],
          lineColor: [200, 200, 200],
        },
      });
            let finalY2 = (doc as any).lastAutoTable.finalY;
      autoTable(doc, {
        theme: 'plain',
        startY: finalY2 + 5,
        styles: { fillColor: [255, 255, 255], textColor: [80, 80, 80] },
        headStyles: {
          fontSize: 15,
          halign: 'left',
        },
        bodyStyles: {
          fontSize: 15,
          halign: 'left',
        },
        body: [['TOTAL']],
      });
            autoTable(doc, {
        theme: 'plain',
        startY: finalY2 + 5,
        margin: { top: 0, bottom: 0, left: 110 },
        styles: { fillColor: [255, 255, 255], textColor: [80, 80, 80] },
        headStyles: {
          fontSize: 15,
          halign: 'right',
        },
        bodyStyles: {
          fontSize: 15,
          halign: 'right',
        },
        body: [['$' + this.total.toLocaleString('de-DE')]],
      });
            //doc.save('MYPdf.pdf'); // PDF GENERADO
      this.archivoBase64 = doc.output('datauristring');
      this.dialogRef.close(this.archivoBase64);
    }, 100000);*/

    this.total = data.productos.reduce((sum, datos) => sum + datos.total, 0);
    this.total_items = data.productos.reduce((sum, datos) => sum + datos.cantidad, 0);
  }

  onNoClick(e) {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    // Aquí capturas TODO el HTML del componente ya interpretado/renderizado

    /* this.htmlRenderizado = this.tirillaRef.nativeElement.outerHTML;
    console.log(this.htmlRenderizado); // Esto ya es un string con todo el contenido*/
    setTimeout(() => {
      this.dialogRef.close(null);
    }, 1000);
  }

  imprimir() {
    const contenido = this.tirillaRef.nativeElement.innerHTML;
    const ventana = window.open('', '_blank', 'width=300,height=600');
    ventana.document.open();
    ventana.document.write(`
        <html>
          <head>
            <style>
              body { font-family: monospace; font-size: 12px; width:58mm; padding: 10px; }
              h3, p { margin: 0; text-align: center; }
              hr { border: none; border-top: 1px dashed #000; margin: 4px 0; }

              .row > div > span {
                font-size: 10px;
              }
              @media print {
                body {
                  font-family: monospace;
                  font-size: 12px;
                }
              }
              tr {
                display: flex;
              }
              tr > th {
                flex: 1;
                display: flex;
                justify-content: center;
                font-size: 10px;
              }
        
              .trsuperior > :nth-child(1) {
                flex: 1;
                justify-content: start;
                margin-left: 8px;
              }
              .trsuperior > :nth-child(2) {
                flex: 2;
                justify-content: start;
                margin-left: 10px;
              }
              .tdchild {
                font-size: 8px;
              }
        
              ::ng-deep .mat-dialog-container {
                padding: 0 !important;
                max-height: 80vw !important; /* para limitar altura */
                overflow: auto !important; /* activa scroll cuando sea necesario */
              }
        
              .bodyinferior > td {
                font-size: 10px;
                flex: 1;
              }


            </style>
          </head>
          <body onload="window.print(); window.close();">
            ${contenido}
          </body>
        </html>
      `);
    ventana.document.close(); // Espera 100ms para que el DOM termine de renderizar}

    /* generarImagenTirilla() {
    html2canvas(this.tirillaRef.nativeElement, {
      scale: 2, // mejor calidad
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); // aquí tienes la imagen
      // this.enviarImagenAlServidor(imgData);
    });
    }*/

    /* enviarImagenAlServidor(base64Imagen: string) {
    this.servisocket.enviarImagenAlServidor(base64Imagen);
    }*/
  }

  imprimirmovil() {}

}

DialogFactura.ɵfac = function DialogFactura_Factory(t) {
  return new (t || DialogFactura)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_services_socket_socket_producto_service_ts_service__WEBPACK_IMPORTED_MODULE_13__.Socket_producto), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_34__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router));
};

DialogFactura.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: DialogFactura,
  selectors: [["dialog-factura"]],
  viewQuery: function DialogFactura_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c6, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.tirillaRef = _t.first);
    }
  },
  decls: 62,
  vars: 17,
  consts: [[2, "width", "58mm", "overflow", "auto"], ["tirilla", ""], [1, "row"], [1, "col-12", 2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center"], [2, "font-weight", "bold"], [1, "col-12", 2, "padding", "0", "text-align", "center", "border", "1px solid #000"], [1, "col-12", 2, "display", "flex", "flex-direction", "column"], [2, "font-size", "10px", "font-weight", "bold"], [2, "font-size", "10px"], [2, "width", "100%", "border", "1px solid #000"], [2, "width", "100%"], [1, "trsuperior", 2, "width", "100%"], ["style", "width:100%;", 4, "ngFor", "ngForOf"], [2, "display", "flex", "width", "100%", "position", "relative", "margin", "10px 0"], [2, "flex", "1", "border", "1px solid #000", "height", "0"], [2, "position", "absolute", "left", "50%", "transform", "translateX(-50%)", "background", "white", "padding", "0 4px", "top", "-10px", "font-size", "10px"], [2, "display", "flex", "justify-content", "end"], [2, "display", "flex", "justify-content", "center"], [1, "tdchild"], [1, "bodyinferior", 2, "width", "100%"]],
  template: function DialogFactura_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 6)(12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "comprobante");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](32, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "table", 10)(34, "thead", 10)(35, "tr", 11)(36, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](37, " Ref ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39, " descripcion ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "tr", 10)(41, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](42, " cantidad ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44, " valor/uni ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46, " IVA ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](48, " TOTAL ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](50, DialogFactura_table_50_Template, 18, 6, "table", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](52, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](54, "totales");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](55, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](56, "div", 16)(57, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 17)(60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.data.config.RAZON_SOCIAL);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("NIT. ", (+ctx.data.config.NIT.substring(4, 12)).toLocaleString("de-DE"), " ", ctx.data.config.NIT.substring(14), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("pedido No:", ctx.data.numero, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("fecha emision:", ctx.data.fecha_actual, " ", ctx.data.horaActual, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Cliente:", ctx.data.cliente.nombre, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Cliente:", ctx.data.cliente.identificacion, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Direccion:", ctx.data.cliente.direccion, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Ciudad:", ctx.data.cliente.ciudad, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Email: ", ctx.data.cliente.email, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Telefono: ", ctx.data.cliente.telefonoFijo, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Vendedor:", ctx.data.vendedor, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("identificacion", ctx.data.identificacion, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.data.productos);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Total venta:", ctx.total, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Total items:", ctx.total_items, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf],
  styles: [".row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n        font-size: 10px;\n      }\n      tr[_ngcontent-%COMP%] {\n        display: flex;\n      }\n      tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n        flex: 1;\n        display: flex;\n        justify-content: center;\n        font-size: 10px;\n      }\n      .trsuperior[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(1) {\n        flex: 1;\n        justify-content: start;\n        margin-left: 8px;\n      }\n      .trsuperior[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n        flex: 2;\n        justify-content: start;\n        margin-left: 10px;\n      }\n      .tdchild[_ngcontent-%COMP%] {\n        font-size: 8px;\n      }\n        .mat-dialog-container {\n        padding: 0 !important;\n        max-height: 80vw !important; \n        overflow: auto !important; \n      }\n      .bodyinferior[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n        font-size: 10px;\n        flex: 1;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpZW5kYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsYUFBYTtNQUNmO01BQ0E7UUFDRSxPQUFPO1FBQ1AsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixlQUFlO01BQ2pCO01BRUE7UUFDRSxPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLGdCQUFnQjtNQUNsQjtNQUNBO1FBQ0UsT0FBTztRQUNQLHNCQUFzQjtRQUN0QixpQkFBaUI7TUFDbkI7TUFDQTtRQUNFLGNBQWM7TUFDaEI7TUFFQTtRQUNFLHFCQUFxQjtRQUNyQiwyQkFBMkIsRUFBRSx3QkFBd0I7UUFDckQseUJBQXlCLEVBQUUsdUNBQXVDO01BQ3BFO01BRUE7UUFDRSxlQUFlO1FBQ2YsT0FBTztNQUNUIiwiZmlsZSI6InRpZW5kYS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5yb3cgPiBkaXYgPiBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuICAgICAgdHIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgdHIgPiB0aCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC50cnN1cGVyaW9yID4gOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICAudHJzdXBlcmlvciA+IDpudGgtY2hpbGQoMikge1xuICAgICAgICBmbGV4OiAyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICAgIC50ZGNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIDo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDgwdncgIWltcG9ydGFudDsgLyogcGFyYSBsaW1pdGFyIGFsdHVyYSAqL1xuICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyAvKiBhY3RpdmEgc2Nyb2xsIGN1YW5kbyBzZWEgbmVjZXNhcmlvICovXG4gICAgICB9XG5cbiAgICAgIC5ib2R5aW5mZXJpb3IgPiB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAiXX0= */"]
});

/***/ }),

/***/ 98882:
/*!*******************************************!*\
  !*** ./src/app/utils/convertiraletras.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numeroALetras": () => (/* binding */ numeroALetras)
/* harmony export */ });
function numeroALetras(num) {
    const UNIDADES = [
        'cero',
        'uno',
        'dos',
        'tres',
        'cuatro',
        'cinco',
        'seis',
        'siete',
        'ocho',
        'nueve',
    ];
    const DECENAS = [
        'diez',
        'once',
        'doce',
        'trece',
        'catorce',
        'quince',
        'dieciséis',
        'diecisiete',
        'dieciocho',
        'diecinueve',
    ];
    const DIEZMAS = [
        '',
        '',
        'veinte',
        'treinta',
        'cuarenta',
        'cincuenta',
        'sesenta',
        'setenta',
        'ochenta',
        'noventa',
    ];
    const CIENTOS = [
        '',
        'ciento',
        'doscientos',
        'trescientos',
        'cuatrocientos',
        'quinientos',
        'seiscientos',
        'setecientos',
        'ochocientos',
        'novecientos',
    ];
    function convertir(n) {
        if (n < 10)
            return UNIDADES[n];
        if (n < 20)
            return DECENAS[n - 10];
        if (n < 100)
            return (DIEZMAS[Math.floor(n / 10)] +
                (n % 10 > 0 ? ' y ' + UNIDADES[n % 10] : ''));
        if (n < 1000)
            return ((n === 100 ? 'cien' : CIENTOS[Math.floor(n / 100)]) +
                (n % 100 > 0 ? ' ' + convertir(n % 100) : ''));
        if (n < 1000000) {
            const miles = Math.floor(n / 1000);
            const resto = n % 1000;
            let milesTexto = miles === 1 ? 'mil' : convertir(miles) + ' mil';
            return milesTexto + (resto > 0 ? ' ' + convertir(resto) : '');
        }
        if (n < 10000000) {
            const millones = Math.floor(n / 1000000);
            const resto = n % 1000000;
            let milesTexto = millones === 1 ? 'unmillo' : convertir(millones) + ' millones';
            return milesTexto + (resto > 0 ? ' ' + convertir(resto) : '');
        }
        return 'numero muy grande';
    }
    const partes = num.toString().split('.');
    const entero = parseInt(partes[0]);
    const pesos = partes[1] ? parseInt(partes[1].substring(0, 2)) : 0;
    let texto = convertir(entero).trim() + ' pesos';
    if (pesos > 0) {
        texto += ' con ' + convertir(pesos).trim() + 'centavos';
    }
    return texto;
}
// Ejemplo
// ➜ "ciento cuarenta y ocho mil cincuenta y dos pesos con setenta y cinco centavos"


/***/ }),

/***/ 12740:
/*!********************************************!*\
  !*** ./src/app/utils/formatearfechasql.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatearfechasql": () => (/* binding */ formatearfechasql)
/* harmony export */ });
function formatearfechasql(fecha) {
    const fe = new Date(fecha);
    const dia = fe.getDate().toString().padStart(2, '0');
    const mes = (fe.getMonth() + 1).toString().padStart(2, '0');
    const anio = fe.getFullYear();
    return `${anio}-${mes}-${dia}`;
}


/***/ }),

/***/ 92596:
/*!****************************************!*\
  !*** ./src/app/utils/formatearhora.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Horaforma": () => (/* binding */ Horaforma)
/* harmony export */ });
const Horaforma = (formato) => {
    //Para agregar si es AM o PM a tu función formatearfecha, puedes obtener la hora y luego determinar si está antes o después del mediodía.
    const formaarray = formato.split(':');
    const pad = (n) => n.toString().padStart(2, '0');
    // Determinar AM o PM
    let ampm = +formaarray[0] >= 12 ? 'PM' : 'AM';
    // Convertir a formato 12 horas
    let horas = +formaarray[0] % 12;
    horas = horas ? horas : 12; // el 0 se convierte en 12
    let horaActual = pad(horas) + ':' + pad(+formaarray[1]) + ':' + pad(+formaarray[2]) + ampm;
    return horaActual;
};


/***/ }),

/***/ 19818:
/*!*****************************************!*\
  !*** ./src/app/utils/formaterafecha.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatearFecha": () => (/* binding */ formatearFecha)
/* harmony export */ });
function formatearFecha(fecha) {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${anio}-${mes}-${dia}`;
}


/***/ }),

/***/ 32678:
/*!************************************!*\
  !*** ./src/app/utils/pdfrecibo.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePDFrecibos": () => (/* binding */ generatePDFrecibos)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_utils_convertiraletras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/convertiraletras */ 98882);



 //import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__;
const generatePDFrecibos = /*#__PURE__*/function () {
  var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    let pago = ''; //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.

    if (data.recibo.efectivo > 0) {
      pago += 'Efectivo' + '  ';
    }

    if (data.recibo.cheque > 0) {
      pago += 'Chaque' + ' ';
    }

    if (data.recibo.banco > 0) {
      pago += 'Trasnferencia bancaria' + ' ';
    }

    if (data.recibo.credito > 0) {
      pago += 'Credito' + ' ';
    }

    if (data.recibo.debito > 0) {
      pago += 'Debito' + ' ';
    }

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
      text: 'CREDITO',
      style: 'tableHeader',
      colSpan: 1
    }, {
      text: 'DEBITO',
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
      text: '\u200B',
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
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
      text: 'OBSERVACION:',
      colSpan: 5,
      border: [true, true, true, true]
    }, {}, {}, {}, {}, {
      text: 'SALDO TOTAL ACTUAL:' + data.saldoactual.toLocaleString('de-DE'),
      colSpan: 4,
      border: [true, true, true, true]
    }, {}, {}, {}]);
    tablebody2.push([{
      text: 'ELABORADO POR:' + '  ' + data.usuario + '(' + data.recibo.nombre + ')',
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
        text: data.recibo.fecha.substring(0, data.recibo.fecha.indexOf('T')),
        margin: [30, 0, 0, 0],
        fontSize: 8
      }]
    }, {}, {}, {}, {}, {}, {
      text: `VALOR:$${data.recibo.Valor.toLocaleString('de-DE')}`,
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
        text: data.recibo.razonSocial + '  ' + data.recibo.direccion + '  ' + data.recibo.identificacion,
        margin: [50, 0, 0, 0],
        fontSize: 8
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
        text: (0,src_app_utils_convertiraletras__WEBPACK_IMPORTED_MODULE_3__.numeroALetras)(data.recibo.Valor),
        margin: [50, 0, 0, 0],
        fontSize: 8
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
        text: data.recibo.concepto,
        margin: [50, 0, 0, 0],
        fontSize: 8
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
          text: data.razonsocial
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
          text: data.nombreComprobanteRI + data.recibo.codigo.toString(),
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

  return function generatePDFrecibos(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 34692:
/*!*****************************************!*\
  !*** ./src/app/utils/pdfrecibogmail.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePDFrecibosgmail": () => (/* binding */ generatePDFrecibosgmail)
/* harmony export */ });
/* harmony import */ var C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 41660);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 50786);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_utils_convertiraletras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/convertiraletras */ 98882);



 //import { variable64 } from '../../assets/img';
//Esta línea asigna las fuentes cargadas a la instancia de pdfMake, necesario para que funcione correctamente.

pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__;
const generatePDFrecibosgmail = /*#__PURE__*/function () {
  var _ref = (0,C_Users_cavsistem_Desktop_tomapedido_pazziolifrond_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
    let pago = ''; //Se crea el contenido de la tabla, con:
    //Una fila de encabezado (títulos).
    //Una fila por cada producto en el array recibido.

    if (data.recibo.efectivo > 0) {
      pago += 'Efectivo' + '  ';
    }

    if (data.recibo.cheque > 0) {
      pago += 'Chaque' + ' ';
    }

    if (data.recibo.banco > 0) {
      pago += 'Trasnferencia bancaria' + ' ';
    }

    if (data.recibo.credito > 0) {
      pago += 'Credito' + ' ';
    }

    if (data.recibo.debito > 0) {
      pago += 'Debito' + ' ';
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
      text: 'CREDITO',
      style: 'tableHeader',
      colSpan: 1
    }, {
      text: 'DEBITO',
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
      text: '\u200B',
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      colSpan: 2,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
    }, {
      text: '\u200B',
      colSpan: 1,
      border: [true, false, true, true],
      alignment: 'left',
      verticalAlignment: 'top',
      lineHeight: 7,
      height: 100,
      minHeight: 100
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
      text: 'OBSERVACION:',
      colSpan: 5,
      border: [true, true, true, true]
    }, {}, {}, {}, {}, {
      text: 'SALDO TOTAL ACTUAL:' + data.saldoactual.toLocaleString('de-DE'),
      colSpan: 4,
      border: [true, true, true, true]
    }, {}, {}, {}]);
    tablebody2.push([{
      text: 'ELABORADO POR:' + '  ' + data.usuario + '(' + data.recibo.nombre + ')',
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
        text: data.recibo.fecha.substring(0, data.recibo.fecha.indexOf('T')),
        margin: [30, 0, 0, 0],
        fontSize: 8
      }]
    }, {}, {}, {}, {}, {}, {
      text: `VALOR:$${data.recibo.Valor.toLocaleString('de-DE')}`,
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
        text: data.recibo.razonSocial + '  ' + data.recibo.direccion + '  ' + data.recibo.identificacion,
        margin: [50, 0, 0, 0],
        fontSize: 8
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
        text: (0,src_app_utils_convertiraletras__WEBPACK_IMPORTED_MODULE_3__.numeroALetras)(data.recibo.Valor),
        margin: [50, 0, 0, 0],
        fontSize: 8
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
        text: data.recibo.concepto,
        margin: [50, 0, 0, 0],
        fontSize: 8
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
          text: data.razonsocial
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
          text: data.nombreComprobanteRI + data.recibo.codigo.toString(),
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

    function getPdfBase64(docDefinition) {
      return new Promise(resolve => {
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__.createPdf(docDefinition).getBase64(base64 => {
          resolve(base64);
        });
      });
    }

    return yield getPdfBase64(docDefinition);
  });

  return function generatePDFrecibosgmail(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    vendedor: 'token_vendedor',
    api: 'http://192.168.20.8:3000/api',
    apisocket: 'http://192.168.20.8:3000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 74067:
/*!*******************************************!*\
  !*** ./src/services/auth/auth.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 25502);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);






class AuthService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.mode = { value: 'side' };
    }
    login(user) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/login`, user, {
            withCredentials: true,
        });
    }
    creartoken(token) {
        this.cookieService.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.vendedor, token.token, 1, '/');
        // this.router.navigateByUrl('/admin/tienda')
    }
    gettoken() {
        if (this.cookieService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.vendedor) &&
            this.cookieService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.vendedor) != '') {
            return { token: this.cookieService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.vendedor) };
        }
        else {
            return null;
        }
    }
    verificarvendedor() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/verify`, { withCredentials: true });
    }
    getHeaders(clave) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: clave ? `Bearer ${clave}` : '',
        });
    }
    salir() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/logout`, {
            withCredentials: true,
        });
    }
    traerempresa(info) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/traerempresas?documento=${info}`, {
            withCredentials: true,
        });
    }
    obtenernivel() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/nivel`, { withCredentials: true });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35818:
/*!*********************************************!*\
  !*** ./src/services/crypt/crypt.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptService": () => (/* binding */ CryptService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class CryptService {
    constructor() {
        this.passwordFromUI = '';
        this.resetPassword();
    }
    resetPassword() {
        if (!localStorage.getItem('eA20')) {
            this.passwordFromUI = Math.random().toString(36).slice(-10);
            // 			localStorage.setItem("eA20", this.passwordFromUI)
        }
    }
    encrypt(data, name) {
        let eA20 = localStorage.getItem('eA20');
        // let _key = eA20;
        let _iv = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(eA20 ? eA20 : '');
        let encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(data, eA20 ? eA20 : '');
        localStorage.setItem(name, encrypted.toString());
    }
    decrypt(name) {
        if (localStorage.getItem(name)) {
            let data = localStorage.getItem(name);
            let eA20 = localStorage.getItem('eA20');
            // let _key = eA20;
            let _iv = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(eA20 ? eA20 : '');
            let _decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(data ? data : '', eA20 ? eA20 : '');
            return _decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
        }
        else {
            return false;
        }
    }
}
CryptService.ɵfac = function CryptService_Factory(t) { return new (t || CryptService)(); };
CryptService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CryptService, factory: CryptService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53358:
/*!***************************************************************!*\
  !*** ./src/services/facturaservice/facturaservice.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacturaserviceService": () => (/* binding */ FacturaserviceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ 34769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class FacturaserviceService {
    constructor(http) {
        this.http = http;
        this.socketiniciado = false;
    }
    conectar() {
        // this.socket = io("http://52.86.140.114:3000");
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apisocket}`, {
            transports: ['websocket'],
            withCredentials: true,
        });
        // this.socket = io("localhost:3000");
        this.socket.on('connect', () => {
            this.socketiniciado = true;
        });
        this.socket.on('connect_error', (err) => {
            console.error('❌ Error de conexión:', err);
        });
        this.socket.on('disconnect', () => {
            console.warn('⚠️ Desconectado del servidor');
        });
    }
    traerfacturas(pagina, codigotercero) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/obtenerfactura?pagina=${pagina}&codigo=${codigotercero}`, { withCredentials: true });
    }
    obtenerInfo(socket, canal, flujo) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((observer) => {
            if (socket) {
                this.socket.emit(canal, flujo);
                this.socket.on(socket, (dato) => {
                    if (!dato) {
                        observer.next(JSON.stringify({ Error: 'Datos vacíos o nulos' }));
                    }
                    else {
                        observer.next(dato);
                    }
                });
            }
            else {
                observer.next('socket no disponidle');
            }
        });
    }
    traertodaslasfacturas(pagina) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/obtenerfacturaall?pagina=${pagina}`, { withCredentials: true });
    }
    traeritemsfactura(row) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/traeritemsfactura?codigo=${row.codigo}&codigoComprobante=${row.codigoComprobante}`, {
            withCredentials: true,
        });
    }
    facturapdf() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/pdffactura`, {
            withCredentials: true,
        });
    }
    obtenertotalpornombrefactura(nombret) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/obtenertotalpornombrefactura?nombret=${nombret}`, {
            withCredentials: true
        });
    }
    traerbancos() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/traerbancos`, {
            withCredentials: true,
        });
    }
    crearreciboingreso(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/crearreciboingreso`, data, {
            withCredentials: true,
        });
    }
    enviaremail(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((obser) => {
            this.socket.emit('pazzioli-pos-3', { metodo: 'EMAILINGRESO', data });
            this.socket.on('estadocorreoingreso', (datos) => {
                obser.next(datos);
            });
        });
    }
    enviaremailfactura(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((obser) => {
            this.socket.emit('pazzioli-pos-3', { metodo: 'EMAILFACTURA', data });
            this.socket.on('estadocorreoingreso', (datos) => {
                obser.next(datos);
            });
        });
    }
    consultaritemubicacion(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((obser) => {
            this.socket.emit('pazzioli-pos-3', { metodo: 'CONSULTAR', consulta: 'inventario',
                datoCondicion: data
            });
            this.socket.on('respuestaitemsinventario', (datos) => {
                obser.next(datos);
            });
        });
    }
    traerrecibos(techainicio, fechafinal, cliente) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/traerrecibos?razonsocial=${cliente}&fechainicial=${techainicio}&fechafinal=${fechafinal}`, { withCredentials: true });
    }
    totalrecibo(codigo) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/traersaldoactual?codigotercero=${codigo}`, {
            withCredentials: true,
        });
    }
    insertaritemsinventario(item) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/insertariteminventario`, item, { withCredentials: true });
    }
    consultaritemsiventario(pagina, cliente = '') {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/consultaritemsiventario?pagina=${pagina}&cliente=${cliente}`, { withCredentials: true });
    }
    consultaritems(pagina, cliente = '', ubicacion = '') {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/consultaritems?pagina=${pagina}&descripcion=${cliente}&ubicacion=${ubicacion}`, { withCredentials: true });
    }
    eliminaritemsinventario(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/eliminariteminventario`, body, { withCredentials: true });
    }
    realizarfactura(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/realizarfactura`, data, {
            withCredentials: true,
        });
    }
}
FacturaserviceService.ɵfac = function FacturaserviceService_Factory(t) { return new (t || FacturaserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
FacturaserviceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FacturaserviceService, factory: FacturaserviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60981:
/*!*********************************************************!*\
  !*** ./src/services/serviciosdbs/serviciodb.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serviciodb": () => (/* binding */ serviciodb)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class serviciodb {
    constructor(http) {
        this.http = http;
    }
    obtenerdbfiltradas() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/obtenerdbfiltradas`, { withCredentials: true });
    }
    tienesedeselccionada() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/selectempresa`, {
            withCredentials: true,
        });
    }
    crearinstanciadb(data) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/crearinstanciadb`, data, { withCredentials: true });
    }
    variablesinicializadas() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/verificarvariablesseccion`, {
            withCredentials: true,
        });
    }
}
serviciodb.ɵfac = function serviciodb_Factory(t) { return new (t || serviciodb)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
serviciodb.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: serviciodb, factory: serviciodb.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21541:
/*!*******************************************************************!*\
  !*** ./src/services/socket/socket.producto.service.ts.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Socket_producto": () => (/* binding */ Socket_producto)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 34769);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class Socket_producto {
    constructor(http) {
        this.http = http;
        this.socketEscucha = 'DASHBOARD';
        this.almacen = '';
        this.socketiniciado = false;
    }
    conectar() {
        // this.socket = io("http://52.86.140.114:3000");
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apisocket}`, {
            transports: ['websocket'],
            withCredentials: true,
        });
        // this.socket = io("localhost:3000");
        this.socket.on('connect', () => {
            this.socketiniciado = true;
        });
        this.socket.on('connect_error', (err) => {
            console.error('❌ Error de conexión:', err);
        });
        this.socket.on('disconnect', () => {
            console.warn('⚠️ Desconectado del servidor');
        });
    }
    obteneralmacen() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((observable) => {
            this.socket.emit('pazzioli-pos-3', { metodo: 'traeralmacen' });
            this.socket.on('obteneralmacen', (datos) => {
                this.almacen = datos.almacen;
                this.config = datos.config;
                observable.next(datos);
            });
        });
    }
    obtenerInfo(socket, canal, flujo) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((observer) => {
            if (socket) {
                this.socket.emit(canal, flujo);
                this.socket.on(socket, (dato) => {
                    if (!dato) {
                        observer.next(JSON.stringify({ Error: 'Datos vacíos o nulos' }));
                    }
                    else {
                        observer.next(dato);
                    }
                });
            }
            else {
                observer.next('socket no disponidle');
            }
        });
    }
    crearpedido(socket, canal, flujo) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((observer) => {
            this.obtenerInfo(socket, canal, flujo).subscribe((data) => observer.next(data));
        });
    }
    obtenerpedidos_realizados(paginas, busqueda = '', estado = '') {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/obtenerpedidos?pagina=${paginas}&busqueda=${busqueda}&estado=${estado}`, {
            withCredentials: true,
        });
    }
    obteneritemspedido(codigo) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/obteneritemspedido?codigo=${codigo}`, { withCredentials: true });
    }
    reservarpedidos(pedido) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/reservarpedido`, pedido, {
            withCredentials: true,
        });
    }
    verpedido() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/reservado`, {
            withCredentials: true,
        });
    }
    actulizarpedido(id, data) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/actulizarreservado/${id}`, data, {
            withCredentials: true,
        });
    }
    aliminarpedidoreservado(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/eliminarpedidoreservado/${id}
    `, { withCredentials: true });
    }
    enviarImagenAlServidor(base64Imagen) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/guardarfactura`, {
            imagenBase64: base64Imagen,
        });
    }
    obtenernumeropedido() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/obtenernumeropedido`, {
            withCredentials: true,
        });
    }
    obtenernregistros(busqueda = '', estado = '') {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/obtenernregistros?busqueda=${busqueda}&estado=${estado}`, {
            withCredentials: true,
        });
    }
    enviaremail(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((obser) => {
            this.socket.emit('pazzioli-pos-3', { metodo: 'EMAIL', data });
            this.socket.on('estadocorreo', (datos) => {
                obser.next(datos);
            });
        });
    }
    anularpedido(esta, codigo, codigousuario) {
        const estado = { estado: esta };
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/eliminarpedido?codigo=${codigo}&codigousuario=${codigousuario}`, estado, { withCredentials: true });
    }
    cargarPedidosSemana(codigoVendedor) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/traerPedidosPorSemana?codigoVendedor=${codigoVendedor}`, {
            withCredentials: true,
        });
    }
    cargarTopProductosSemana(codigoVendedor, top) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/topProductosMasPedidosSemana?codigoVendedor=${codigoVendedor}&top=${top}`, { withCredentials: true });
    }
    cargarTotalPedidosMesVendedor(codigoVendedor) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/totalPedidosVendedorMes?codigoVendedor=${codigoVendedor}`, { withCredentials: true });
    }
    cargarTotalPedidosVsTRecibosIMes(codigoVendedor) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}/cargarTotalPedidosVsTotalRecibosIngresoMes?codigoVendedor=${codigoVendedor}`, { withCredentials: true });
    }
}
Socket_producto.ɵfac = function Socket_producto_Factory(t) { return new (t || Socket_producto)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
Socket_producto.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: Socket_producto, factory: Socket_producto.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38245:
/*!***********************************************!*\
  !*** ./src/services/socket/socket.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 34769);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var src_app_modelos_datos_peticion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modelos/datos-peticion */ 14148);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);






class SocketService {
    constructor(http) {
        this.http = http;
        this.socketEscucha = 'DASHBOARD';
        this.escuchando = false;
        this.componentMethodCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    callComponentMethod() {
        this.componentMethodCallSource.next({ algo: 'por aqui paso algo' });
    }
    conectar(token) {
        // this.socket = io("http://52.86.140.114:3000");
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)('http://localhost:3000', {
            transports: ['websocket'],
            auth: { token },
        });
        // this.socket = io("localhost:3000");
        this.socket.on('connect', () => { });
        this.socket.on('connect_error', (err) => {
            console.error('❌ Error de conexión:', err);
        });
        this.socket.on('disconnect', () => {
            console.warn('⚠️ Desconectado del servidor');
        });
        if (this.socket !== undefined) {
            this.socketConexion = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
                this.socket.on(this.socketEscucha, (dato) => {
                    observer.next(dato);
                });
            });
            //    }
        }
    }
    enviarInfo(data) {
        this.socket.emit('aws', data);
    }
    obtenerInfo(socket) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable((observer) => {
            if (!this.escuchando)
                this.socket.on(socket, (dato) => {
                    observer.next(dato);
                    this.escuchando = true;
                });
        });
    }
    consultarTercero(canalPos, condicion, datoCondicion, canalUsuario) {
        let infoPeticion = new src_app_modelos_datos_peticion__WEBPACK_IMPORTED_MODULE_1__.DatosPeticion(canalPos, 'TERCEROS', condicion, datoCondicion, canalUsuario);
        this.enviarInfo(infoPeticion.datos);
    }
    consultarProducto(canalPos, condicion, datoCondicion, canalUsuario) {
        let infoPeticion = new src_app_modelos_datos_peticion__WEBPACK_IMPORTED_MODULE_1__.DatosPeticion(canalPos, 'PRODUCTOS', condicion, datoCondicion, canalUsuario);
        this.enviarInfo(infoPeticion.datos);
    }
    crearPedido(canalPos, canalUsuario, data) {
        let infoPeticion = {
            sistema: 'DASHBOARD',
            tipoConsulta: 'POS',
            canalPos: canalPos,
            canalUsuario: canalUsuario,
            metodo: 'CREAR',
            consulta: 'PEDIDO',
            crear: data,
        };
        this.enviarInfo(infoPeticion);
    }
    guardarcliente(cliente) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}/guardarpedido`, cliente, {
            withCredentials: true,
        });
    }
    buscarclientes() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}/obtenercliente`, {
            withCredentials: true,
        });
    }
    eliminarproducto(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}/eliminarcliente/cliente/${id}`, {
            withCredentials: true,
        });
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
SocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		91614,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map