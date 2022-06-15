"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_NoteItem_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoteItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoteItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NoteItem",
  data: function data() {
    return {
      colors: ['bg-sky-200', 'bg-emerald-200', 'bg-green-200', 'bg-pink-200', 'bg-orange-200', 'bg-indigo-200']
    };
  },
  props: ['note'],
  methods: {
    switchForm: function switchForm() {
      this.$emit('switchForm', this.note);
    },
    switchFullscreen: function switchFullscreen() {
      this.$emit('switchFullscreen', this.note);
    },
    deleteItem: function deleteItem(id) {
      if (confirm('You really want to delete the note')) {
        this.$store.dispatch('DEL_NOTE', id);
      }
    },
    getDate: function getDate(dateTimeString) {
      var date = new Date(dateTimeString);
      return date.toLocaleDateString(date);
    },
    getColor: function getColor() {
      var rand = Math.floor(Math.random() * this.colors.length);
      return this.colors[rand];
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/NoteItem.vue":
/*!**********************************************!*\
  !*** ./resources/js/Components/NoteItem.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoteItem_vue_vue_type_template_id_2bcba8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteItem.vue?vue&type=template&id=2bcba8f0& */ "./resources/js/Components/NoteItem.vue?vue&type=template&id=2bcba8f0&");
/* harmony import */ var _NoteItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteItem.vue?vue&type=script&lang=js& */ "./resources/js/Components/NoteItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoteItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteItem_vue_vue_type_template_id_2bcba8f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _NoteItem_vue_vue_type_template_id_2bcba8f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/NoteItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/NoteItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Components/NoteItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoteItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/NoteItem.vue?vue&type=template&id=2bcba8f0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/NoteItem.vue?vue&type=template&id=2bcba8f0& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteItem_vue_vue_type_template_id_2bcba8f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteItem_vue_vue_type_template_id_2bcba8f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteItem_vue_vue_type_template_id_2bcba8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoteItem.vue?vue&type=template&id=2bcba8f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoteItem.vue?vue&type=template&id=2bcba8f0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoteItem.vue?vue&type=template&id=2bcba8f0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoteItem.vue?vue&type=template&id=2bcba8f0& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "relative" }, [
    _c(
      "div",
      {
        staticClass:
          "relative flex w-60 h-48 bg-gray-200 text-gray-600 rounded-md p-2 gap-2 cursor-pointer transition-colors duration-300 hover:bg-yellow-100 hover:text-gray-900",
        class: _vm.getColor(),
        on: {
          click: function ($event) {
            return _vm.switchFullscreen()
          },
        },
      },
      [
        _c("div", { staticClass: "m-4" }, [
          _c("h2", { staticClass: "text-lg font-bold" }, [
            _vm._v(_vm._s(_vm.note.title)),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-xs" }, [_vm._v(_vm._s(_vm.note.text))]),
          _vm._v(" "),
          _c("span", { staticClass: "text-xs absolute right-1 top-1" }, [
            _vm._v(_vm._s(_vm.getDate(_vm.note.created_at))),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "absolute left-2 bottom-2",
            attrs: { title: "Complete" },
          },
          [
            _vm.note.complete
              ? _c(
                  "svg",
                  {
                    staticClass: "h-36 w-36 text-gray-500 opacity-10",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z",
                      },
                    }),
                  ]
                )
              : _vm._e(),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "absolute right-12 bottom-2 cursor-pointer",
        attrs: { title: "Edit Note" },
      },
      [
        _c(
          "svg",
          {
            staticClass: "h-7 w-7 hover:text-gray-500",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
            },
            on: {
              click: function ($event) {
                return _vm.switchForm()
              },
            },
          },
          [
            _c("path", {
              attrs: {
                d: "M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z",
              },
            }),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "span",
      {
        staticClass: "absolute right-2 bottom-2 cursor-pointer",
        attrs: { title: "Delete Note" },
      },
      [
        _c(
          "svg",
          {
            staticClass: "h-7 w-7 hover:text-red-500",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
            },
            on: {
              click: function ($event) {
                return _vm.deleteItem(_vm.note.id)
              },
            },
          },
          [
            _c("path", {
              attrs: {
                d: "M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z",
              },
            }),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);