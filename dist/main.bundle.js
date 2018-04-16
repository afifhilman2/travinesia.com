webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./jual-trip-content2/jual-trip-content2.module": [
		"../../../../../src/app/jual-trip-content2/jual-trip-content2.module.ts",
		"jual-trip-content2.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jual_trip_content_jual_trip_content_component__ = __webpack_require__("../../../../../src/app/jual-trip-content/jual-trip-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'JualTrip/JualTripContent',
        component: __WEBPACK_IMPORTED_MODULE_2__jual_trip_content_jual_trip_content_component__["a" /* JualTripContentComponent */]
    },
    {
        path: 'JualTrip/JualTripContent2',
        loadChildren: './jual-trip-content2/jual-trip-content2.module#JualTripContent2Module'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'Travinesia';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landingpage_landingpage_component__ = __webpack_require__("../../../../../src/app/landingpage/landingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pemesanan_pemesanan_component__ = __webpack_require__("../../../../../src/app/pemesanan/pemesanan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_user_header_user_component__ = __webpack_require__("../../../../../src/app/header-user/header-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sidebar_akun_profil_sidebar_akun_profil_component__ = __webpack_require__("../../../../../src/app/sidebar-akun-profil/sidebar-akun-profil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__eksternal_eksternal_component__ = __webpack_require__("../../../../../src/app/eksternal/eksternal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lupa_kata_sandi_lupa_kata_sandi_component__ = __webpack_require__("../../../../../src/app/lupa-kata-sandi/lupa-kata-sandi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ubah_kata_sandi_ubah_kata_sandi_component__ = __webpack_require__("../../../../../src/app/ubah-kata-sandi/ubah-kata-sandi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__loginpage_loginpage_component__ = __webpack_require__("../../../../../src/app/loginpage/loginpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__favorit_user_favorit_user_component__ = __webpack_require__("../../../../../src/app/favorit-user/favorit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__trv_sidebar_trv_sidebar_component__ = __webpack_require__("../../../../../src/app/trv-sidebar/trv-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__trv_search_result_trv_search_result_component__ = __webpack_require__("../../../../../src/app/trv-search-result/trv-search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__trv_search_navbar_trv_search_navbar_component__ = __webpack_require__("../../../../../src/app/trv-search-navbar/trv-search-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__etalase_travel_etalase_travel_component__ = __webpack_require__("../../../../../src/app/etalase-travel/etalase-travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__daftar_travel_daftar_travel_component__ = __webpack_require__("../../../../../src/app/daftar-travel/daftar-travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__jual_trip_jual_trip_component__ = __webpack_require__("../../../../../src/app/jual-trip/jual-trip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__jual_trip_content_jual_trip_content_component__ = __webpack_require__("../../../../../src/app/jual-trip-content/jual-trip-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__jual_trip_content2_jual_trip_content2_component__ = __webpack_require__("../../../../../src/app/jual-trip-content2/jual-trip-content2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__token_auth_service__ = __webpack_require__("../../../../../src/app/token/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__token_auth_guard_service__ = __webpack_require__("../../../../../src/app/token/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_route__ = __webpack_require__("../../../../../src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__saldo_saldo_component__ = __webpack_require__("../../../../../src/app/saldo/saldo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__daftar_trip_daftar_trip_component__ = __webpack_require__("../../../../../src/app/daftar-trip/daftar-trip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ubah_profil_travel_ubah_profil_travel_component__ = __webpack_require__("../../../../../src/app/ubah-profil-travel/ubah-profil-travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__transaksi_penjualan_transaksi_penjualan_component__ = __webpack_require__("../../../../../src/app/transaksi-penjualan/transaksi-penjualan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__daftar_pemesan_daftar_pemesan_component__ = __webpack_require__("../../../../../src/app/daftar-pemesan/daftar-pemesan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__detail_paket_detail_paket_component__ = __webpack_require__("../../../../../src/app/detail-paket/detail-paket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ubah_profil_ubah_profil_component__ = __webpack_require__("../../../../../src/app/ubah-profil/ubah-profil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__proses_bayar_proses_bayar_component__ = __webpack_require__("../../../../../src/app/proses-bayar/proses-bayar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__proses_bayar2_proses_bayar2_component__ = __webpack_require__("../../../../../src/app/proses-bayar2/proses-bayar2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__proses_pemesanan_proses_pemesanan_component__ = __webpack_require__("../../../../../src/app/proses-pemesanan/proses-pemesanan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__eksternal_eksternal_component__["a" /* EksternalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__landingpage_landingpage_component__["a" /* LandingpageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pemesanan_pemesanan_component__["a" /* PemesananComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_user_header_user_component__["a" /* HeaderUserComponent */],
            __WEBPACK_IMPORTED_MODULE_10__sidebar_akun_profil_sidebar_akun_profil_component__["a" /* SidebarAkunProfilComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__lupa_kata_sandi_lupa_kata_sandi_component__["a" /* LupaKataSandiComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ubah_kata_sandi_ubah_kata_sandi_component__["a" /* UbahKataSandiComponent */],
            __WEBPACK_IMPORTED_MODULE_15__loginpage_loginpage_component__["a" /* LoginpageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__favorit_user_favorit_user_component__["a" /* FavoritUserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__trv_sidebar_trv_sidebar_component__["a" /* TrvSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__trv_search_result_trv_search_result_component__["a" /* TrvSearchResultComponent */],
            __WEBPACK_IMPORTED_MODULE_19__trv_search_navbar_trv_search_navbar_component__["a" /* TrvSearchNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_20__etalase_travel_etalase_travel_component__["a" /* EtalaseTravelComponent */],
            __WEBPACK_IMPORTED_MODULE_21__daftar_travel_daftar_travel_component__["a" /* DaftarTravelComponent */],
            __WEBPACK_IMPORTED_MODULE_22__jual_trip_jual_trip_component__["a" /* JualTripComponent */],
            __WEBPACK_IMPORTED_MODULE_23__jual_trip_content_jual_trip_content_component__["a" /* JualTripContentComponent */],
            __WEBPACK_IMPORTED_MODULE_24__jual_trip_content2_jual_trip_content2_component__["a" /* JualTripContent2Component */],
            __WEBPACK_IMPORTED_MODULE_31__saldo_saldo_component__["a" /* SaldoComponent */],
            __WEBPACK_IMPORTED_MODULE_32__daftar_trip_daftar_trip_component__["a" /* DaftarTripComponent */],
            __WEBPACK_IMPORTED_MODULE_33__ubah_profil_travel_ubah_profil_travel_component__["a" /* UbahProfilTravelComponent */],
            __WEBPACK_IMPORTED_MODULE_34__transaksi_penjualan_transaksi_penjualan_component__["a" /* TransaksiPenjualanComponent */],
            __WEBPACK_IMPORTED_MODULE_35__daftar_pemesan_daftar_pemesan_component__["a" /* DaftarPemesanComponent */],
            __WEBPACK_IMPORTED_MODULE_36__detail_paket_detail_paket_component__["a" /* DetailPaketComponent */],
            __WEBPACK_IMPORTED_MODULE_37__ubah_profil_ubah_profil_component__["a" /* UbahProfilComponent */],
            __WEBPACK_IMPORTED_MODULE_38__proses_bayar_proses_bayar_component__["a" /* ProsesBayarComponent */],
            __WEBPACK_IMPORTED_MODULE_39__proses_bayar2_proses_bayar2_component__["a" /* ProsesBayar2Component */],
            __WEBPACK_IMPORTED_MODULE_40__proses_pemesanan_proses_pemesanan_component__["a" /* ProsesPemesananComponent */],
            __WEBPACK_IMPORTED_MODULE_41__calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_42__register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_29__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_30__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBClUZWzmnXM-51wYSX22_lI2dBouzEDXM',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_27__app_route__["a" /* routes */], { useHash: false, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* PreloadAllModules */] }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_28__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_25__token_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_26__token_auth_guard_service__["a" /* AuthGuardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token_auth_guard_service__ = __webpack_require__("../../../../../src/app/token/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landingpage_landingpage_component__ = __webpack_require__("../../../../../src/app/landingpage/landingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pemesanan_pemesanan_component__ = __webpack_require__("../../../../../src/app/pemesanan/pemesanan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eksternal_eksternal_component__ = __webpack_require__("../../../../../src/app/eksternal/eksternal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lupa_kata_sandi_lupa_kata_sandi_component__ = __webpack_require__("../../../../../src/app/lupa-kata-sandi/lupa-kata-sandi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loginpage_loginpage_component__ = __webpack_require__("../../../../../src/app/loginpage/loginpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorit_user_favorit_user_component__ = __webpack_require__("../../../../../src/app/favorit-user/favorit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trv_sidebar_trv_sidebar_component__ = __webpack_require__("../../../../../src/app/trv-sidebar/trv-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trv_search_result_trv_search_result_component__ = __webpack_require__("../../../../../src/app/trv-search-result/trv-search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__trv_search_navbar_trv_search_navbar_component__ = __webpack_require__("../../../../../src/app/trv-search-navbar/trv-search-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__etalase_travel_etalase_travel_component__ = __webpack_require__("../../../../../src/app/etalase-travel/etalase-travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__daftar_travel_daftar_travel_component__ = __webpack_require__("../../../../../src/app/daftar-travel/daftar-travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__jual_trip_jual_trip_component__ = __webpack_require__("../../../../../src/app/jual-trip/jual-trip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__jual_trip_content_jual_trip_content_component__ = __webpack_require__("../../../../../src/app/jual-trip-content/jual-trip-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__saldo_saldo_component__ = __webpack_require__("../../../../../src/app/saldo/saldo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__daftar_trip_daftar_trip_component__ = __webpack_require__("../../../../../src/app/daftar-trip/daftar-trip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ubah_profil_travel_ubah_profil_travel_component__ = __webpack_require__("../../../../../src/app/ubah-profil-travel/ubah-profil-travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__transaksi_penjualan_transaksi_penjualan_component__ = __webpack_require__("../../../../../src/app/transaksi-penjualan/transaksi-penjualan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__detail_paket_detail_paket_component__ = __webpack_require__("../../../../../src/app/detail-paket/detail-paket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ubah_profil_ubah_profil_component__ = __webpack_require__("../../../../../src/app/ubah-profil/ubah-profil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__proses_pemesanan_proses_pemesanan_component__ = __webpack_require__("../../../../../src/app/proses-pemesanan/proses-pemesanan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__proses_bayar_proses_bayar_component__ = __webpack_require__("../../../../../src/app/proses-bayar/proses-bayar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__proses_bayar2_proses_bayar2_component__ = __webpack_require__("../../../../../src/app/proses-bayar2/proses-bayar2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");


























var routes = [
    // with login header
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__landingpage_landingpage_component__["a" /* LandingpageComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_9__trv_search_result_trv_search_result_component__["a" /* TrvSearchResultComponent */] },
            { path: 'searchNavbar/:query', component: __WEBPACK_IMPORTED_MODULE_10__trv_search_navbar_trv_search_navbar_component__["a" /* TrvSearchNavbarComponent */] },
            { path: 'Notifikasi', component: __WEBPACK_IMPORTED_MODULE_4__eksternal_eksternal_component__["a" /* EksternalComponent */] },
            { path: 'JadiTravel', component: __WEBPACK_IMPORTED_MODULE_12__daftar_travel_daftar_travel_component__["a" /* DaftarTravelComponent */], },
            { path: 'EtalaseTravel', component: __WEBPACK_IMPORTED_MODULE_11__etalase_travel_etalase_travel_component__["a" /* EtalaseTravelComponent */] },
            { path: 'DetailPaket', component: __WEBPACK_IMPORTED_MODULE_19__detail_paket_detail_paket_component__["a" /* DetailPaketComponent */] },
            { path: 'ProsesPemesanan', component: __WEBPACK_IMPORTED_MODULE_21__proses_pemesanan_proses_pemesanan_component__["a" /* ProsesPemesananComponent */] },
            { path: 'ProsesBayar', canActivate: [__WEBPACK_IMPORTED_MODULE_0__token_auth_guard_service__["a" /* AuthGuardService */]], component: __WEBPACK_IMPORTED_MODULE_22__proses_bayar_proses_bayar_component__["a" /* ProsesBayarComponent */] },
            { path: 'ProsesBayar2', component: __WEBPACK_IMPORTED_MODULE_23__proses_bayar2_proses_bayar2_component__["a" /* ProsesBayar2Component */] },
            { path: 'Daftar', component: __WEBPACK_IMPORTED_MODULE_24__register_register_component__["a" /* RegisterComponent */] },
            { path: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_25__calendar_calendar_component__["a" /* CalendarComponent */] },
            { path: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__loginpage_loginpage_component__["a" /* LoginpageComponent */] },
            { path: 'Akun', component: __WEBPACK_IMPORTED_MODULE_8__trv_sidebar_trv_sidebar_component__["a" /* TrvSidebarComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pemesanan_pemesanan_component__["a" /* PemesananComponent */] },
                    { path: 'Profil', component: __WEBPACK_IMPORTED_MODULE_20__ubah_profil_ubah_profil_component__["a" /* UbahProfilComponent */] },
                    { path: 'Pemesanan', component: __WEBPACK_IMPORTED_MODULE_3__pemesanan_pemesanan_component__["a" /* PemesananComponent */] },
                    { path: 'Favorit', component: __WEBPACK_IMPORTED_MODULE_7__favorit_user_favorit_user_component__["a" /* FavoritUserComponent */] },
                    { path: 'Notifikasi', component: __WEBPACK_IMPORTED_MODULE_4__eksternal_eksternal_component__["a" /* EksternalComponent */] },
                    { path: 'Promo', component: __WEBPACK_IMPORTED_MODULE_4__eksternal_eksternal_component__["a" /* EksternalComponent */] }
                ]
            },
            { path: 'JualTrip', component: __WEBPACK_IMPORTED_MODULE_13__jual_trip_jual_trip_component__["a" /* JualTripComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__jual_trip_content_jual_trip_content_component__["a" /* JualTripContentComponent */] },
                    { path: 'Saldo', component: __WEBPACK_IMPORTED_MODULE_15__saldo_saldo_component__["a" /* SaldoComponent */] },
                    { path: 'JualTrip', component: __WEBPACK_IMPORTED_MODULE_14__jual_trip_content_jual_trip_content_component__["a" /* JualTripContentComponent */] },
                    { path: 'TransaksiPenjualan', component: __WEBPACK_IMPORTED_MODULE_18__transaksi_penjualan_transaksi_penjualan_component__["a" /* TransaksiPenjualanComponent */] },
                    { path: 'UbahProfilTravel', component: __WEBPACK_IMPORTED_MODULE_17__ubah_profil_travel_ubah_profil_travel_component__["a" /* UbahProfilTravelComponent */] },
                    { path: 'DaftarTrip', component: __WEBPACK_IMPORTED_MODULE_16__daftar_trip_daftar_trip_component__["a" /* DaftarTripComponent */] },
                ]
            }
        ]
    },
    // forget header
    {
        path: 'lupaPassword', component: __WEBPACK_IMPORTED_MODULE_5__lupa_kata_sandi_lupa_kata_sandi_component__["a" /* LupaKataSandiComponent */],
    },
];
//# sourceMappingURL=app.route.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    // setHeader2() {
    //     this.headers = new Headers({
    //         'Content-Type' : 'application/json',
    //         'Authorization' : 'Bearer ' + localStorage.getItem('token')
    //     })
    // }
    AppService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    };
    AppService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get('http://travinesia.com:3000/v1/user/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.getDataTrip = function () {
        return this.http.get('http://travinesia.com:3000/get/trip')
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.registerUser = function (newUser) {
        return this.http.post('http://travinesia.com:3000/v1/user/users', newUser)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.addUser = function (user) {
        return this.http.post('http://travinesia.com:3000/v1/user/authenticate', user)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.postBeTravel = function (travel) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        // console.log(headers)
        return this.http.post('http://travinesia.com:3000/v1/user/register_provider', travel, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.editProfileUser = function (editUser) {
        return this.http.put('http://travinesia.com:3000/v1/user/profile', editUser)
            .map(function (res) { return res.json(); });
    };
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nul {list-style-type: none;}\r\n\r\n.calendar{\r\n  border: 1px solid #dddddd;\r\n  background-color: #ffffff;\r\n  width: 275px;\r\n  height: auto;\r\n  padding-left: 7px;\r\n  margin-top: -1px;\r\n}\r\n.month {\r\n  padding: 10px 25px;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n}\r\n\r\n.month ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.month ul li {\r\n  margin-top: -10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.month .prev {\r\n  float: left;\r\n  padding-top: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.month .next {\r\n  float: right;\r\n  padding-top: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.weekdays {\r\n  margin: 0;\r\n  padding: 10px 0;\r\n  \r\n}\r\n\r\n.weekdays li {\r\n  display: inline-block;\r\n  width: 13.6%;\r\n  color: #666;\r\n  text-align: center;\r\n}\r\n\r\n.days {\r\n  padding: 0 0;\r\n  margin: 0;\r\n}\r\n\r\n.days li {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  width: 13.6%;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  text-align: center;\r\n  font-size:12px;\r\n  color: #777;\r\n}\r\n\r\n.days li:hover {\r\n  height: 13.6%;\r\n  border-radius: 50%;\r\n  background-color: #e91e63;\r\n  color: white;\r\n  opacity: 0.2;\r\n  cursor: pointer;\r\n}\r\n\r\n.today{\r\n  color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"flex-container flex-center\">\r\n    <div  class=\"calendar\"> \r\n        <div class=\"month\">      \r\n        <ul>\r\n            <li class=\"prev\" (click)=\"prevMonth()\">&#10094;</li>\r\n            <li class=\"next\" (click)=\"nextMonth()\">&#10095;</li>\r\n            <li>\r\n            <div>{{date.format('MMMM')}} {{date.format('YYYY')}}</div>\r\n            </li>\r\n        </ul>\r\n        </div>\r\n        <ul class=\"weekdays\">\r\n        <li *ngFor=\"let nama of dayNames\">\r\n            {{nama}}\r\n        </li>\r\n        </ul>\r\n        <div class=\"\">\r\n        <ul class=\"days\">\r\n            <li *ngFor=\"let day of daysArr\" [ngClass]=\"{'today':todayCheck(day)}\">{{day?.date()}}</li>\r\n        </ul>\r\n        </div> \r\n    </div>\r\n</div>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarComponent = (function () {
    function CalendarComponent() {
        this.dayNames = ['S', 'S', 'R', 'K', 'J', 'S', 'M'];
        this.date = __WEBPACK_IMPORTED_MODULE_1_moment__();
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.daysArr = this.creatCalendar(this.date);
    };
    CalendarComponent.prototype.creatCalendar = function (month) {
        var firsDay = __WEBPACK_IMPORTED_MODULE_1_moment__(month).startOf('M');
        var days = Array.apply(null, { length: month.daysInMonth() })
            .map(Number.call, Number)
            .map(function (n) {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(firsDay).add(n, 'd');
        });
        for (var n = 0; n < firsDay.weekday(); n++) {
            days.unshift(null);
        }
        return days;
    };
    CalendarComponent.prototype.todayCheck = function (day) {
        if (!day) {
            return false;
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__().format('L') === day.format('L');
    };
    CalendarComponent.prototype.nextMonth = function () {
        this.date.add(1, 'M');
        this.daysArr = this.creatCalendar(this.date);
    };
    CalendarComponent.prototype.prevMonth = function () {
        this.date.subtract(1, 'M');
        this.daysArr = this.creatCalendar(this.date);
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calendar',
        template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/daftar-pemesan/daftar-pemesan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead {\r\n    border: 1px solid #dddddd;\r\n    background-color: #f9f9f9;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\nthead th {\r\n    text-align: center;\r\n    height: 36px;\r\n}\r\n\r\nth:nth-child(1) {\r\n    width: 110px;\r\n}\r\n\r\ntbody {\r\n    border: 1px solid #dddddd;\r\n    background-color: #f9f9f9;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    text-align: center;\r\n}\r\n\r\ntbody tr td {\r\n    border: none;\r\n}\r\n\r\ntd:nth-child(1) {\r\n    text-align: left;\r\n}\r\n\r\n.accept-table {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #58b957;\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.kembali-transaksi {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n    cursor: pointer;\r\n}\r\n\r\n.wrap-paket-trip {\r\n    width: 100%;\r\n    height: 165px;\r\n    border: 1px solid #dddddd;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    box-shadow: 0px 2px 5.9px 0.1px rgba(233, 30, 99, 0.5);\r\n}\r\n\r\n.wrap-content-paket-trip {\r\n    height: 120px;\r\n    background-color: #f9f9f9;\r\n    border-bottom: 1px solid #dddddd;\r\n    padding: 10px;\r\n}\r\n\r\n.img-paket-trip {\r\n    width: 158px;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n.wrap-info-paket-trip {\r\n    position: relative;\r\n    width: 250px;\r\n    height: 100%;\r\n    border-right: 1px solid #dddddd;\r\n    margin-left: 20px;\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.tittle-paket-trip {\r\n    height: 43px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.tittle-info {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.tittle-info-value {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    display: inline;\r\n    position: absolute;\r\n    left: 120px;\r\n}\r\n\r\n.colon-info {\r\n    position: absolute;\r\n    left: 105px;\r\n}\r\n\r\n.wrap-info-harga {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.tittle-info-harga {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.info-harga {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.info-kuota {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.info-detail-trip {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n}\r\n\r\n.info-detail-trip:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.wrap-btn-trv {\r\n    padding-left: 12px;\r\n    margin-top: 7px;\r\n    margin-right: 25px;\r\n}\r\n\r\n.tgl-berangkat {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.form-tgl {\r\n    display: inline;\r\n    width: 180px;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    color: #e91e63;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n}\r\n\r\n.sisa-kuota {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-left: 10px;\r\n}\r\n\r\n.highlight-kuota {\r\n    font-size: 11px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    font-weight: bold;\r\n    color: #e91e63;\r\n}\r\n\r\n.wrap-sort-pesan {\r\n    margin-top: 30px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.sort-by {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.form-sort {\r\n    display: inline;\r\n    width: 206px;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    color: #e91e63;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/daftar-pemesan/daftar-pemesan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='transaksi1'>\r\n\r\n    <a (click)=\"togglePesan()\" class=\"kembali-transaksi\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Kembali ke Transaksi Penjualan</a>\r\n\r\n    <div class=\"wrap-paket-trip\">\r\n        <div class=\"wrap-content-paket-trip\">\r\n            <img class=\"img-paket-trip\" src=\"../assets/img/trip.jpg\">\r\n\r\n            <div class=\"wrap-info-paket-trip\">\r\n                <p class=\"tittle-paket-trip\">Kepulaun Raja Ampat </p>\r\n\r\n                <div class=\"tittle-info\">Durasi\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">3 Hari 2 Malam</div>\r\n                </div>\r\n\r\n                <div class=\"tittle-info\">Kategori\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">Beach</div>\r\n                </div>\r\n\r\n                <div class=\"tittle-info\">Jenis Trip\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">Open Trip</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"wrap-info-harga\">\r\n                <div class=\"tittle-info-harga\">Harga per orang :</div>\r\n                <div class=\"info-harga\">Rp 900.000,-</div>\r\n                <div class=\"info-kuota\">Kuota : 50</div>\r\n                <a href=\"#\" class=\"info-detail-trip\">Lihat Detail Trip</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"wrap-btn-trv\">\r\n            <span class=\"tgl-berangkat\">Tanggal Berangkat : </span> <select class=\"form-control form-tgl\">\r\n            <option>Sabtu, 14 Desember 2018</option>\r\n            <option>Sabtu, 14 Desember 2018</option>\r\n            <option>Sabtu, 14 Desember 2018</option>\r\n            <option>Sabtu, 14 Desember 2018</option>\r\n            <option>Sabtu, 14 Desember 2018</option>\t\r\n          </select>\r\n            <span class=\"sisa-kuota\">Sisa Kuota : <span class=\"highlight-kuota\"> 36</span> </span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-sort-pesan\">\r\n        <span class=\"sort-by\">Urutkan Berdasarkan : </span>\r\n        <select class=\"form-control form-sort\">\r\n        <option>Pesanan Baru (Waktu Diterima)</option>\r\n        <option>Sabtu, 14 Desember 2018</option>\r\n        <option>Sabtu, 14 Desember 2018</option>\r\n        <option>Sabtu, 14 Desember 2018</option>\r\n        <option>Sabtu, 14 Desember 2018</option>\t\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <th>Pemesan</th>\r\n                <th>Waktu Pemesanan</th>\r\n                <th>Kuota Dipesan</th>\r\n                <th>Status</th>\r\n                <th>Tenggat Waktu</th>\r\n                <th>Konfirmasi Travel</th>\r\n            </thead>\r\n\r\n            <tbody>\r\n                <tr>\r\n                    <td>Afif Hilman Habibi (10134BTYUIK218)</td>\r\n                    <td>Minggu, 30-12-2018</td>\r\n                    <td>6</td>\r\n                    <td>Belum dibayar</td>\r\n                    <td>2 Hari Lagi</td>\r\n                    <td>\r\n                        <a href=\"\" class=\"accept-table\">Terima</a>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Azmi Iqbal Furqoni (10134BTYUIK218)</td>\r\n                    <td>Minggu, 30-12-2018</td>\r\n                    <td>6</td>\r\n                    <td>Belum dibayar</td>\r\n                    <td>2 Hari Lagi</td>\r\n                    <td>\r\n                        <a href=\"\" class=\"accept-table\">Terima</a>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Haraldi Ikhsan (10134BTYUIK218)</td>\r\n                    <td>Minggu, 30-12-2018</td>\r\n                    <td>6</td>\r\n                    <td>Belum dibayar</td>\r\n                    <td>2 Hari Lagi</td>\r\n                    <td>\r\n                        <a href=\"\" class=\"accept-table\">Terima</a>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Bagus Ali Mahsyar (10134BTYUIK218)</td>\r\n                    <td>Minggu, 30-12-2018</td>\r\n                    <td>6</td>\r\n                    <td>Belum dibayar</td>\r\n                    <td>2 Hari Lagi</td>\r\n                    <td>\r\n                        <a href=\"\" class=\"accept-table\">Terima</a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf='transaksi2'>\r\n    <app-transaksi-penjualan></app-transaksi-penjualan>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/daftar-pemesan/daftar-pemesan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaftarPemesanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DaftarPemesanComponent = (function () {
    function DaftarPemesanComponent() {
        this.transaksi1 = true;
        this.transaksi2 = false;
    }
    DaftarPemesanComponent.prototype.togglePesan = function () {
        this.transaksi1 = !this.transaksi1;
        this.transaksi2 = !this.transaksi2;
    };
    DaftarPemesanComponent.prototype.ngOnInit = function () {
    };
    return DaftarPemesanComponent;
}());
DaftarPemesanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-daftar-pemesan',
        template: __webpack_require__("../../../../../src/app/daftar-pemesan/daftar-pemesan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/daftar-pemesan/daftar-pemesan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DaftarPemesanComponent);

//# sourceMappingURL=daftar-pemesan.component.js.map

/***/ }),

/***/ "../../../../../src/app/daftar-travel/daftar-travel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[hidden] {\r\n    display: none !important;\r\n}\r\n\r\n.blur {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, .5);\r\n    z-index: 99;\r\n    top: 0;\r\n}\r\n\r\n.wrap-form-daftar {\r\n    width: 476px;\r\n    height: 899px;\r\n    border-radius: 5px;\r\n    background-color: #fafafa;\r\n    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), 0px 2px 5.9px 0.1px rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.head-daftar {\r\n    width: 476px;\r\n    height: 57px;\r\n    padding: 15px 36px;\r\n    background-color: #ab47bc;\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ffffff;\r\n}\r\n\r\n.wrap-form-content {\r\n    padding: 36px;\r\n    padding-right: 45px;\r\n}\r\n\r\n.label-form {\r\n    display: block;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.form-control {\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.namaTrv {\r\n    width: 396px;\r\n    height: 33px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.sloganTrv {\r\n    width: 396px;\r\n    height: 83px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.deskripsiTrv {\r\n    width: 396px;\r\n    height: 83px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.wrap-alamat {\r\n    position: relative;\r\n}\r\n\r\n.alamatTrv {\r\n    width: 213px;\r\n    height: 125px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.sort {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 111px;\r\n    top: 0px;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.form-sort {\r\n    position: absolute;\r\n    top: 25px;\r\n    right: 0px;\r\n    width: 167px;\r\n    height: 33px;\r\n    border-radius: 2.4px;\r\n    display: inline-block;\r\n    padding: 0px;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.nomorTrv {\r\n    width: 396px;\r\n    height: 33px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.domain-name {\r\n    display: inline-block;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #9c27b0;\r\n    margin-top: 8px;\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.domainTrv {\r\n    display: inline-block;\r\n    width: 290px;\r\n    height: 33px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.wrap-domain {\r\n    float: right;\r\n}\r\n\r\n.checkbox:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -0.125rem;\r\n    left: 0;\r\n    width: 1.3rem;\r\n    height: 1.4rem;\r\n    background: #fafafa;\r\n    cursor: pointer;\r\n}\r\n\r\n.label-checkbox {\r\n    position: absolute;\r\n    width: 383px;\r\n    bottom: 106px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.55;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.btn-daftar-trv {\r\n    width: 395px;\r\n    height: 35px;\r\n    margin-top: 55px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    border: solid 1px #b7b7b7;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ffffff;\r\n}\r\n\r\n.logo {\r\n    width: 88px;\r\n    height: 21px;\r\n    margin-top: 20px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.tittle-head {\r\n    font-size: 32px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n}\r\n\r\n.title-content {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-top: 15px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.head-category {\r\n    list-style: none;\r\n    display: inline-block;\r\n    padding: 0px;\r\n}\r\n\r\nul.head-category li {\r\n    display: inline;\r\n    margin-right: 21px;\r\n    position: relative;\r\n}\r\n\r\nli>a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.wrap-modal {\r\n    border: 1px solid #dddddd;\r\n    position: fixed;\r\n    top: 75px;\r\n    left: 160px;\r\n    z-index: 99;\r\n    width: 342px;\r\n    height: 450px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    padding: 11px;\r\n}\r\n\r\n.close-modal {\r\n    display: block;\r\n    position: relative;\r\n    left: 143px;\r\n    margin-bottom: 100px;\r\n    text-align: center;\r\n    margin: auto;\r\n    color: white;\r\n    font-size: 28px;\r\n    width: 31px;\r\n    height: 31px;\r\n    line-height: 31px;\r\n    border-radius: 3px;\r\n    background-color: #d24d57;\r\n    cursor: pointer;\r\n}\r\n\r\n.exit:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.wrap-foto-content {\r\n    margin: 38px auto;\r\n    width: 204px;\r\n    height: 204px;\r\n}\r\n\r\n.img-modal {\r\n    width: 204px;\r\n    height: 204px;\r\n}\r\n\r\n.tittle-foto {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.detail-tittle {\r\n    text-align: center;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-top: -10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.btn-trv-modal {\r\n    width: 319px;\r\n    height: 45px;\r\n    line-height: 42px;\r\n    border: 1px solid #dddddd;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/daftar-travel/daftar-travel.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='showLogin' (click)=\"toggleLogin()\" class=\"blur\"></div>\r\n<div class=\"container-etalase\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"wrap-form-daftar\">\r\n                <div class=\"head-daftar\">\r\n                    Daftarkan Travel\r\n                </div>\r\n                <form class=\"wrap-form-content\" (submit)=\"onSubmitTravel()\">\r\n                    <label class=\"label-form\" for=\"namaTravel\">Nama Travel</label>\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"namaTrv form-control\" id=\"namaTravel\" [(ngModel)]=\"travel.travel_name\" name=\"travel_name\">\r\n                    </div>\r\n\r\n                    <label class=\"label-form\" for=\"slogan\">Slogan</label>\r\n                    <div class=\"input-group\">\r\n                        <textarea type=\"textarea\" class=\"sloganTrv form-control\" id=\"slogan\" [(ngModel)]=\"travel.slogan\" name=\"slogan\"> </textarea>\r\n                    </div>\r\n\r\n                    <label class=\"label-form\" for=\"deskripsi\">Deskripsi</label>\r\n                    <div class=\"input-group\">\r\n                        <textarea type=\"textarea\" class=\"deskripsiTrv form-control\" id=\"deskripsi\" [(ngModel)]=\"travel.description\" name=\"description\"> </textarea>\r\n                    </div>\r\n\r\n                    <div class=\"wrap-alamat\">\r\n                        <label class=\"label-form\" for=\"alamat\">Alamat Kantor</label>\r\n                        <div class=\"input-group\">\r\n                            <textarea type=\"textarea\" class=\"alamatTrv form-control\" id=\"alamat\" [(ngModel)]=\"travel.office_address\" name=\"office_address\"> </textarea>\r\n                        </div>\r\n\r\n                        <label class=\"sort\" for=\"lokasi\">Provinsi : </label>\r\n                        <select class=\"form-control form-sort\">\r\n                            <option >Pilih Provinsi</option>\r\n                            <option >Nanggroe Aceh Darussalam </option>\r\n                            <option >Sumatra Utara</option>\r\n                            <option >Sumatra Selatan </option>\r\n                            <option >Sumatra Barat</option>\r\n                            <option >Bengkulu</option>\r\n                            <option >Riau</option>\r\n                            <option >Kepulauan Riau</option>\r\n                            <option >Jambi</option>\r\n                            <option >Lampung</option>\r\n                            <option >Bangka Belitung</option>\r\n                            <option >Kalimantan Barat</option>\r\n                            <option >Kalimantan Timur</option>\r\n                            <option >Kalimantan Selatan</option>\r\n                            <option >Kalimantan Tengah</option>\r\n                            <option >Kalimantan Utara</option>\r\n                            <option >Banten </option>\r\n                            <option >DKI Jakarta  </option>\r\n                            <option >Jawa Barat </option>\r\n                            <option >Jawa Tengah </option>\r\n                            <option >DI Yogyakarta </option>\r\n                            <option >Jawa Timur </option>\r\n                            <option >Bali </option>\r\n                            <option >Nusa Tenggara Timur </option>\r\n                            <option >Nusa Tenggara Barat </option>\r\n                            <option >Gorontalo </option>\r\n                            <option >Sulawesi Barat </option>\r\n                            <option >Sulawesi Tengah </option>\r\n                            <option >Sulawesi Utara </option>\r\n                            <option >Sulawesi Tenggara </option>\r\n                            <option >Sulawesi Selatan </option>\r\n                            <option >Maluku Utara </option>\r\n                            <option >Maluku </option>\r\n                            <option >Papua Barat </option>\r\n                            <option >Papua  </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <label class=\"label-form\" for=\"nomorTravel\">Nomor Telepon Travel</label>\r\n                    <div class=\"input-group\">\r\n                        <input type=\"tel\" max=\"13\" class=\"nomorTrv form-control\" id=\"nomorTravel\" [(ngModel)]=\"travel.office_phone_number\" name=\"office_phone_number\">\r\n                    </div>\r\n\r\n                    <label class=\"label-form\" for=\"domainTravel\">Domain</label>\r\n                    <p class=\"domain-name\">travinesia.com/</p>\r\n                    <div class=\"input-group wrap-domain\">\r\n                        <input type=\"text\" class=\"domainTrv form-control\" id=\"domainTravel\" [(ngModel)]=\"travel.domain\" name=\"domain\">\r\n                    </div>\r\n\r\n                    <input type=\"checkbox\" class=\"checkbox\">\r\n                    <label class=\"label-checkbox\"> Dengan ini saya menyetujui bergabung dengan Travinesia sebagai agen\r\n                            Travel dan bersedia mengikuti segala bentuk kebijakan yang berlaku</label>\r\n\r\n                    <button data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn-daftar-trv\"> Lanjutkan </button>\r\n                    <input data-toggle=\"modal\" type=\"submit\" value=\"kirim\" class=\"btn-daftar-trv\">\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n            <img src=\"../assets/img/travinesia-logo.png\" class=\"logo\">\r\n            <p class=\"tittle-head\"> Kemudahan Pengembangan Bisnis Skala Besar untuk Travel Anda. </p>\r\n            <p class=\"title-content\"> Kemudahan promosi untuk bisnis travel yang lebih besar. Travinesia membantu anda dalam promosi, ini itu, ini itu dan masih banyak lagi keuntungan menjadi Agen Travel di Travinesia. Promosikan paket wisata anda, ada banyak ategori yang sisediakan\r\n                oleh Travinesia. </p>\r\n\r\n            <ul class=\"head-category\">\r\n                <li>\r\n                    <a> <span class=\"icon-island-with-palm-trees\"></span></a>\r\n                </li>\r\n                <li>\r\n                    <a> <span class=\"icon-hotel-with-three-floors\"></span></a>\r\n                </li>\r\n                <li>\r\n                    <a> <span class=\"icon-theatre-masks\"></span></a>\r\n                </li>\r\n                <li>\r\n                    <a> <span class=\"icon-fishing-sign\"></span></a>\r\n                </li>\r\n                <li>\r\n                    <a> <span class=\"icon-mountains-with-trees\"></span></a>\r\n                </li>\r\n                <li>\r\n                    <a> <span class=\"icon-love-hot-air-balloon\"></span></a>\r\n                </li>\r\n                <li>\r\n                    <a><span class=\"icon-human-foot-prints\"></span> </a>\r\n                </li>\r\n                <li>\r\n                    <a><span class=\"icon-sea-ship-with-containers\"></span></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"wrap-modal\">\r\n                <a class=\"exit\">\r\n                    <div data-dismiss=\"modal\" class=\"close-modal\"> X </div>\r\n                </a>\r\n\r\n                <div class=\"wrap-foto-content\">\r\n                    <img class=\"img-modal\" src=\"../assets/img/user.png\">\r\n                </div>\r\n\r\n                <p class=\"tittle-foto\">Tambahkan Foto</p>\r\n                <p class=\"detail-tittle\"> dapat berupa logo, kantor atau yang berhubungan </p>\r\n\r\n                <label class=\"btn-trv-modal\"> <input type=\"file\" hidden (change)=\"handleFileSelect($event)\"> Unggah Foto </label>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/daftar-travel/daftar-travel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaftarTravelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DaftarTravelComponent = (function () {
    function DaftarTravelComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.showLogin = false;
        this.travel = {
            travel_name: '',
            slogan: '',
            description: '',
            office_address: '',
            province: '',
            office_phone_number: '',
            domain: '',
            logo: ''
        };
        this.base64textString = "";
    }
    DaftarTravelComponent.prototype.toggleLogin = function () {
        this.showLogin = !this.showLogin;
    };
    DaftarTravelComponent.prototype.onSubmitTravel = function () {
        this.appService.postBeTravel(this.travel).subscribe(function (travel) {
            console.log(travel);
        });
    };
    DaftarTravelComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    DaftarTravelComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        console.log(this.base64textString);
    };
    DaftarTravelComponent.prototype.ngOnInit = function () {
    };
    return DaftarTravelComponent;
}());
DaftarTravelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-daftar-travel',
        template: __webpack_require__("../../../../../src/app/daftar-travel/daftar-travel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/daftar-travel/daftar-travel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], DaftarTravelComponent);

var _a, _b;
//# sourceMappingURL=daftar-travel.component.js.map

/***/ }),

/***/ "../../../../../src/app/daftar-trip/daftar-trip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-tittle {\r\n    position: relative;\r\n}\r\n\r\n.head-tittle {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.info-paket {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-paket-trip {\r\n    width: 100%;\r\n    height: 164px;\r\n    border: 1px solid #dddddd;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.wrap-content-paket-trip {\r\n    height: 120px;\r\n    background-color: #f9f9f9;\r\n    border-bottom: 1px solid #dddddd;\r\n    padding: 10px;\r\n}\r\n\r\n.img-paket-trip {\r\n    width: 158px;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n.wrap-info-paket-trip {\r\n    position: relative;\r\n    width: 250px;\r\n    height: 100%;\r\n    border-right: 1px solid #dddddd;\r\n    margin-left: 20px;\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.tittle-paket-trip {\r\n    height: 43px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.tittle-info {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.tittle-info-value {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    display: inline;\r\n    position: absolute;\r\n    left: 120px;\r\n}\r\n\r\n.colon-info {\r\n    position: absolute;\r\n    left: 105px;\r\n}\r\n\r\n.wrap-info-harga {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.tittle-info-harga {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.info-harga {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.info-kuota {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.info-detail-trip {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n}\r\n\r\n.info-detail-trip:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.wrap-btn-trv {\r\n    float: right;\r\n    margin-top: 7px;\r\n    margin-right: 25px;\r\n}\r\n\r\n.btn-trv-ubah {\r\n    width: 130px;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    border: 1px solid #9c27b0;\r\n    background-color: transparent;\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ab47bc;\r\n    margin-right: 10px;\r\n}\r\n\r\n.btn-trv-kosong {\r\n    width: 130px;\r\n    ;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    border: 1px solid #9c27b0;\r\n    background-color: transparent;\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ab47bc;\r\n    margin-right: 10px;\r\n}\r\n\r\n.btn-trv-hapus {\r\n    width: 130px;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    border: 1px solid #db524b;\r\n    background-color: transparent;\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #db524b;\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/daftar-trip/daftar-trip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-tittle\">\r\n    <p class=\"head-tittle\">Daftar Trip</p>\r\n</div>\r\n\r\n<p class=\"info-paket\">Berikut adalah daftar trip yang Anda jual. Anda dapat mengubah informasi paket trip Anda.</p>\r\n\r\n<div class=\"wrap-paket-trip\">\r\n    <div class=\"wrap-content-paket-trip\">\r\n        <img class=\"img-paket-trip\" src=\"../assets/img/trip.jpg\">\r\n\r\n        <div class=\"wrap-info-paket-trip\">\r\n            <p class=\"tittle-paket-trip\">Kepulaun Raja Ampat </p>\r\n\r\n            <div class=\"tittle-info\">Durasi\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">3 Hari 2 Malam</div>\r\n            </div>\r\n\r\n            <div class=\"tittle-info\">Kategori\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">Beach</div>\r\n            </div>\r\n\r\n            <div class=\"tittle-info\">Jenis Trip\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">Open Trip</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"wrap-info-harga\">\r\n            <div class=\"tittle-info-harga\">Harga per orang :</div>\r\n            <div class=\"info-harga\">Rp 900.000,-</div>\r\n            <div class=\"info-kuota\">Kuota : 50</div>\r\n            <a href=\"#\" class=\"info-detail-trip\">Lihat Detail Trip</a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"wrap-btn-trv\">\r\n        <button class=\"btn-trv-ubah\">Ubah Trip </button>\r\n        <button class=\"btn-trv-kosong\">Kosongkan Trip </button>\r\n        <button class=\"btn-trv-hapus\">Hapus Trip </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"wrap-paket-trip\">\r\n    <div class=\"wrap-content-paket-trip\">\r\n        <img class=\"img-paket-trip\" src=\"../assets/img/6.jpg\">\r\n\r\n        <div class=\"wrap-info-paket-trip\">\r\n            <p class=\"tittle-paket-trip\">Kepulaun Raja Ampat </p>\r\n\r\n            <div class=\"tittle-info\">Durasi\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">3 Hari 2 Malam</div>\r\n            </div>\r\n\r\n            <div class=\"tittle-info\">Kategori\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">Beach</div>\r\n            </div>\r\n\r\n            <div class=\"tittle-info\">Jenis Trip\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">Open Trip</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"wrap-info-harga\">\r\n            <div class=\"tittle-info-harga\">Harga per orang :</div>\r\n            <div class=\"info-harga\">Rp 900.000,-</div>\r\n            <div class=\"info-kuota\">Kuota : 50</div>\r\n            <a href=\"#\" class=\"info-detail-trip\">Lihat Detail Trip</a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"wrap-btn-trv\">\r\n        <button class=\"btn-trv-ubah\">Ubah Trip </button>\r\n        <button class=\"btn-trv-kosong\">Kosongkan Trip </button>\r\n        <button class=\"btn-trv-hapus\">Hapus Trip </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"wrap-paket-trip\">\r\n    <div class=\"wrap-content-paket-trip\">\r\n        <img class=\"img-paket-trip\" src=\"../assets/img/1.jpg\">\r\n\r\n        <div class=\"wrap-info-paket-trip\">\r\n            <p class=\"tittle-paket-trip\">Kepulaun Raja Ampat </p>\r\n\r\n            <div class=\"tittle-info\">Durasi\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">3 Hari 2 Malam</div>\r\n            </div>\r\n\r\n            <div class=\"tittle-info\">Kategori\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">Beach</div>\r\n            </div>\r\n\r\n            <div class=\"tittle-info\">Jenis Trip\r\n                <span class=\"colon-info\">:</span>\r\n                <div class=\"tittle-info-value\">Open Trip</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"wrap-info-harga\">\r\n            <div class=\"tittle-info-harga\">Harga per orang :</div>\r\n            <div class=\"info-harga\">Rp 900.000,-</div>\r\n            <div class=\"info-kuota\">Kuota : 50</div>\r\n            <a href=\"#\" class=\"info-detail-trip\">Lihat Detail Trip</a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"wrap-btn-trv\">\r\n        <button class=\"btn-trv-ubah\">Ubah Trip </button>\r\n        <button class=\"btn-trv-kosong\">Kosongkan Trip </button>\r\n        <button class=\"btn-trv-hapus\">Hapus Trip </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/daftar-trip/daftar-trip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaftarTripComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DaftarTripComponent = (function () {
    function DaftarTripComponent() {
    }
    DaftarTripComponent.prototype.ngOnInit = function () {
    };
    return DaftarTripComponent;
}());
DaftarTripComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-daftar-trip',
        template: __webpack_require__("../../../../../src/app/daftar-trip/daftar-trip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/daftar-trip/daftar-trip.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DaftarTripComponent);

//# sourceMappingURL=daftar-trip.component.js.map

/***/ }),

/***/ "../../../../../src/app/detail-paket/detail-paket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, td, th{\r\n    width: 273px;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n    padding: 5px;\r\n    padding-left: 13px;\r\n    font-size: 11px;\r\n}\r\n\r\n.alamat-agen{\r\n    font-size: 12px;\r\n}\r\n.alamat-paket{\r\n    font-size: 11px;\r\n}\r\n\r\n.bagikan{\r\n    font-size: 11px;\r\n}\r\n\r\n.body-info{\r\n    display: inline-block;\r\n    width: 250px;\r\n}\r\n\r\n.body-title{\r\n    display: inline;\r\n    margin-left: 30px;\r\n}\r\n\r\n.button-body{\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 25px;\r\n}\r\n\r\n.btn-lihatProfil{\r\n    width: 140px;\r\n    height: 37px;\r\n    border-radius: 2.4px;\r\n    background-color: #e91e63;\r\n    color: white;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n}\r\n\r\n.btn-kirimPesan{\r\n    width: 140px;\r\n    height: 37px;\r\n    border-radius: 2.4px;\r\n    border: solid 0.8px #ab47bc;\r\n    background-color: #ffffff;\r\n    color: #ab47bc;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n}\r\n\r\n.btn-pesan{\r\n    width: 274px;\r\n    height: 43px;\r\n    border-radius: 2.4px;\r\n    background-color: #9c27b0;\r\n    color: white;\r\n    margin-left: 50px;\r\n    margin-top: 15px;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n}\r\n\r\n.calendar{\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n.card{\r\n    margin-top: 20px;\r\n}\r\n.carousel{\r\n    \r\n    height: 350px;\r\n}\r\n\r\n.col-md-4{\r\n    position: fixed;\r\n    right: 0;\r\n}\r\n\r\n.collapse{\r\n    position: relative;\r\n    left: 15px;\r\n    top: 5px;\r\n}\r\n.container-fluid-page{\r\n    margin-left: 100px;\r\n    \r\n}\r\n\r\n\r\n.diskon{\r\n    display: inline-block;\r\n    color: #e91e63;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    margin-left: 2px;\r\n}\r\n\r\n.harga{\r\n    width: 273px;\r\n    height: 72px;\r\n    border-radius: 2.4px;\r\n    background-color: #ffffff;\r\n    border: solid 0.8px #9c27b0;\r\n    padding-top: 7px;\r\n}\r\n\r\n.harga-diskon{\r\n    font-size: 24.9px;\r\n    color:#9c27b0;\r\n    font-weight: bold;\r\n    margin-left: 50px;\r\n    margin-top: 15px;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.harga-normal{\r\n    text-decoration: line-through;\r\n    margin-left: 55px;\r\n    font-size: 12.9px;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.orang{\r\n    font-weight: bold;\r\n    color: #9c27b0;\r\n}\r\n\r\n.harga-tanggal{\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n.img-agen{\r\n    width: 50px;\r\n    height: 59px;\r\n    float: left;\r\n    margin-right: 22px;\r\n}\r\n\r\n.img-share{\r\n    \r\n    margin-left: 10px;\r\n    display: inline-block;\r\n}\r\n\r\n.img-share img{\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n.info{\r\n    margin-left: 16px;\r\n    padding-top: 10px;\r\n    font-weight: bold;\r\n}\r\n.informasi-agen{\r\n    width: 437px;\r\n    height: 143px;\r\n    border: solid 0.8px #dddddd;\r\n    margin-bottom: 20px;\r\n    margin-top: 28px;\r\n}\r\n\r\n.item img{\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.jenis-trip{\r\n    font-weight: bold;\r\n    color: #ff9800;\r\n    font-size: 13.4px;\r\n    margin-left: 11px;\r\n}\r\n\r\n.jenis-paket{\r\n    margin-top: 25px;\r\n}\r\n\r\n.judul-paket{\r\n    width: 461px;\r\n    height: 36px;\r\n    font-family: sans-serif;\r\n    font-size: 34.7px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 0.89;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.kanan{\r\n    margin-bottom: 15px;\r\n    font-weight: bold; \r\n}\r\n\r\n.kanan-deskripsi{\r\n    font-size: 13.4px;\r\n    margin-top: 15px;\r\n    border-bottom: solid 1px #dddddd;\r\n    border-top: solid 1px #dddddd;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.kanan-fasilitas{\r\n    font-size: 13.4px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-bottom: solid 1px #dddddd;\r\n}\r\n\r\n.kanan-meeting{\r\n    font-size: 13.4px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-bottom: solid 1px #dddddd;\r\n}\r\n\r\n.kanan-catatan{\r\n    font-size: 13.4px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-bottom: solid 1px #dddddd;\r\n}\r\n\r\n.kategori-detail{\r\n    display: inline;\r\n}\r\n\r\n.kelas-agen{\r\n    font-size: 10.2px;\r\n    color: #9c27b0;\r\n    font-family: sans-serif;\r\n    font-weight: normal;\r\n    margin-top: -8px;\r\n}\r\n\r\n.komen{\r\n    width: 814px;\r\n    height: 106px;\r\n    border: solid 0.8px #dddddd;\r\n    padding: 12px;\r\n    display: -webkit-inline-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.komen-image{\r\n    width: 37px;\r\n    height: 37px;\r\n    border-radius: 50%;\r\n    border: solid 1.5px #dddddd;\r\n    padding: 1.5px;\r\n    display: block;\r\n}\r\n\r\n.komen-star{\r\n    margin-left: 18px;\r\n}\r\n\r\n.komen-tanggal{\r\n    font-size: 11px;\r\n    color: #4a4a4a;\r\n    margin-left: 18px;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.komen-tanggapan{\r\n    font-size: 13.4px;\r\n    color: #4a4a4a;\r\n    margin-left: 18px;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.komen-user-name{\r\n    font-size: 13.4px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n    color: #9c27b0;\r\n    display: inline;\r\n    margin-left: 18px;\r\n}\r\n\r\n.lokasi-detail{\r\n    display: inline;\r\n}\r\n\r\n.map-responsive{\r\n    width: 432px;\r\n    height: 226px;\r\n    overflow:hidden;\r\n    padding-bottom:50%;\r\n    position:relative;\r\n    height:0;\r\n}\r\n.map-responsive iframe{\r\n    left:0;\r\n    top:0;\r\n    height:100%;\r\n    width:100%;\r\n    position:absolute;\r\n}\r\n\r\n.nama-agen{\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n.nama-paket{\r\n    margin-bottom: 15px;\r\n    margin-top: 12px;\r\n}\r\n\r\n/* .nav-tabs> li.active{\r\n    border-bottom: solid #9c27b0;\r\n    color: #9c27b0;\r\n     \r\n} */\r\n\r\n.nav-tabs{\r\n    border: none;\r\n    font-family: sans-serif;\r\n    font-size: 13.4px;\r\n    font-weight: bold;\r\n}\r\n\r\n.nav-tabs> li> a{\r\n    border: none;\r\n    background-color: transparent;\r\n    \r\n}\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li>a:hover {\r\n    border: none;\r\n    color: #ab47bc !important;\r\n    background: transparent;\r\n}\r\n\r\n.nav-tabs>li>a::after {\r\n    content: \"\";\r\n    background: #ab47bc;\r\n    height: 2px;\r\n    position: absolute;\r\n    width: 91%;\r\n    left: 9px;\r\n    bottom: -1px;\r\n    transition: all 250ms ease 0s;\r\n    transform: scale(0);\r\n    margin-left: -5px;\r\n}\r\n\r\n.nav-tabs>li.active>a::after,\r\n.nav-tabs>li:hover>a::after {\r\n    transform: scale(1);\r\n}\r\n\r\n.tab-nav>li>a::after {\r\n    background: #ab47bc none repeat scroll 0% 0%;\r\n    color: #fff;\r\n}\r\n\r\n.nominal-table{\r\n    font-weight: bold;\r\n    color: #8e3caa;\r\n}\r\n\r\n.pembatas{\r\n    display: inline\r\n}\r\n.pilih-tanggal{\r\n    width: 275px;\r\n    height: 40px;\r\n    background-color: #f5f5f5;\r\n    margin-left: 50px;\r\n    padding-left: 50px;\r\n    padding-top: 10px;\r\n    border: 1px solid #dddddd;\r\n}\r\n\r\n.pilih-tanggal p{\r\n    width: 183px;\r\n    height: 15px;\r\n    font-family: sans-serif;\r\n    font-size: 13.9px;\r\n    font-weight: bold;\r\n    color: #9c27b0;\r\n}\r\n.tab-content{\r\n    border: none;\r\n}\r\n\r\n.table{\r\n    margin-left: 50px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.title-info{\r\n    width: 435px;\r\n    height: 40px;\r\n    background-color: #f5f5f5;\r\n    border-bottom: solid 0.8px #dddddd;\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n    \r\n}\r\n\r\n.waktu-trip{\r\n    font-weight: Bold;\r\n    font-size: 13.4px;\r\n    margin-left: 6px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail-paket/detail-paket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid-page\">\n  <div class=\"row\">\n    <div class=\"col-md-8 \">\n      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        </ol>\n\n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\">\n          <div class=\"item active\">\n              <img src=\"../assets/img/edit2.jpg\" class=\"img-slider\" alt=\"pulau\">\n          </div>\n\n          <div class=\"item\">\n              <img src=\"../assets/img/edit2.jpg\" class=\"img-slider\" alt=\"pulau\">\n          </div>\n\n          <div class=\"item\">\n              <img src=\"../assets/img/edit2.jpg\" class=\"img-slider\" alt=\"pulau\">\n          </div>\n        </div>\n\n        <!-- Left and right controls -->\n        <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n      <div class=\"jenis-paket\">\n        <span class=\"glyphicon glyphicon-tag\"></span>\n        <span class=\"jenis-trip\">Open Trip</span>\n        <span class=\"waktu-trip\">(2 Hari 1 Malam) <p class=\"pembatas\">|</p></span>\n        <span class=\"lokasi\">Lokasi : <p class=\"lokasi-detail\">DKI Jakarta </p> <p class=\"pembatas\">|</p></span>\n        <span class=\"kategori\">Kategori : <p class=\"kategori-detail\">Beach</p></span>\n        <div class=\"share pull-right\">\n          <span class=\"bagikan\">Bagikan: </span>\n          <div class=\"img-share\">\n            <img src=\"assets/img/foto.png\" class=\"img-share\">\n            <img src=\"assets/img/foto.png\" class=\"img-share\">\n            <img src=\"assets/img/foto.png\" class=\"img-share\">\n            <img src=\"assets/img/foto.png\" class=\"img-share\">\n            <img src=\"assets/img/foto.png\" class=\"img-share\">\n          </div> \n        </div>\n      </div>\n      <div class=\"nama-paket\">\n        <div class=\"judul-paket\">Pulau Harapan Kep. Seribu</div>\n        <div class=\"alamat-paket\">\n          <span>Kecamatan Kepulauan Seribu Utara, Kabupaten Kepulauan Seribu,</span>\n          <p>Jakarta, Indonesia</p>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <span class=\"icon-star\"></span>\n            <span class=\"icon-star\"></span>\n            <span class=\"icon-star\"></span>\n            <span class=\"icon-star\"></span>\n            <span class=\"icon-star\"></span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"penjelasan\">\n        <div class=\"kanan-deskripsi\">\n          <a data-toggle=\"collapse\" href=\"#deskripsi\" ><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n          <span class=\"kanan\">Deskripsi</span>\n          <div id=\"deskripsi\" class=\"collapse\">\n            deskripsi ini adalah\n          </div>\n        </div>\n        <div class=\"kanan-fasilitas\">\n          <a data-toggle=\"collapse\" href=\"#fasilitas\"><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n          <span class=\"kanan\">Fasilitas</span>\n          <div id=\"fasilitas\" class=\"collapse\">\n            fasilitas yang disediakan.......\n          </div>\n        </div>\n        <div class=\"kanan-meeting\">\n          <a data-toggle=\"collapse\" href=\"#meetingpoint\"><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n          <span class=\"kanan\">Meeting Point</span>\n          \n          <div id=\"meetingpoint\" class=\"collapse\">\n            <div class=\"map-responsive\">\n              <iframe src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n            </div>\n            <span> fasilitas yang disediakan....... </span>\n          </div>\n        </div>\n        <div class=\"kanan-catatan\">\n          <a data-toggle=\"collapse\" href=\"#catatan\"><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n          <span class=\"kanan\">Catatan untuk Travel</span>\n          <div id=\"catatan\" class=\"collapse\">\n            fasilitas yang disediakan.......\n          </div>\n        </div>\n      </div>\n      <div class=\"kanan-catatan\">\n        <a data-toggle=\"collapse\" href=\"#infoAgen\"><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n        <span class=\"kanan\">Informasi Travel Agen</span>\n        <div id=\"infoAgen\" class=\"collapse\">\n          <div class=\"body-info\">\n            <img class=\"img-agen\" src=\"assets/img/foto.png\">\n              <div class=\"nama\">\n                <span class=\"nama-agen\">Kuylah Travel</span>\n                <p class=\"alamat-agen\">Bogor, Jawa Barat </p>\n                <p class=\"kelas-agen\"> Travel Kelas Satu</p>\n              </div>\n          </div>\n          <div class=\"button-body\">\n            <button class=\"btn btn-lihatProfil\">Lihat Profil Travel</button>\n            <button class=\"btn btn-kirimPesan\">Kirim Pesan</button>\n          </div>\n        </div>\n      </div> \n      <div class=\"card\">\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\"><a href=\"#status-pembayaran\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Ulasan</a></li>\n            <li role=\"presentation\"><a href=\"#daftar-transaksi\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Diskusi</a></li>\n        </ul>\n        <!-- Tab panes -->\n        <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"status-pembayaran\">\n              <div class=\"komen\">\n                <img src=\"assets/img/foto.png\" class=\"komen-image\">\n                <div class=\"komen-user\">\n                  <p class=\"komen-user-name\">Paulo Torres</p>\n                  <p class=\"komen-tanggal\">15 Februari 2018, 11.17 WIB</p>\n                  <div class=\"komen-star\">\n                    <span class=\"icon-star\"></span>\n                    <span class=\"icon-star\"></span>\n                    <span class=\"icon-star\"></span>\n                    <span class=\"icon-star\"></span>\n                    <span class=\"icon-star\"></span>\n                  </div> \n                  <p class=\"komen-tanggapan\">\"kualitas terbaik dan sangat sesuai dengan ekspetasi\"</p>\n                </div>\n              </div>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"daftar-transaksi\">\n              <div class=\"komen\">\n                <img src=\"assets/img/foto.png\" class=\"komen-image\">\n                <div class=\"komen-user\">\n                  <p class=\"komen-user-name\">Paulo Torres</p>\n                  <p class=\"komen-tanggal\">15 Februari 2018, 11.17 WIB</p>\n                  <div class=\"komen-star\">\n                    <span class=\"icon-star\"></span>\n                    <span class=\"icon-star\"></span>\n                    <span class=\"icon-star\"></span>\n                    <span class=\"icon-star\"></span>\n                    <span class=\"icon-star\"></span>\n                  </div> \n                  <p class=\"komen-tanggapan\">\"kualitas terbaik dan sangat sesuai dengan ekspetasi\"</p>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"col-md-4\">\n      <div class=\"kolom-kanan\">\n        <div class=\"harga-tanggal\">\n          <div class=\"harga\">\n            <span class=\"harga-diskon\"> Rp 290.000 </span> \n            <span class=\"orang\"> / Orang </span>\n            <p class=\"harga-normal\"> Rp 300.000/orang <span class=\"diskon\"> Diskon 10%</span> </p>\n          </div>\n        </div>\n        <div class=\"table\">\n          <table>\n            <tr>\n              <td>Dilihat : <span class=\"nominal-table\">20</span></td>\n              <td>Terjual : <span class=\"nominal-table\">20</span></td>\n              <td>Difavoritkan : <span class=\"nominal-table\">20</span></td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"pilih-tanggal\">\n          <p>Silahkan Pilih Tanggal Trip</p>\n        </div>\n        <div class=\"calendar\">\n          <app-calendar></app-calendar>\n        </div>\n        <button type=\"submit\" class=\"btn btn-pesan\"> Pesan Sekarang </button>\n      </div>\n    </div>\n  </div>\n  \n</div>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/detail-paket/detail-paket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPaketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailPaketComponent = (function () {
    function DetailPaketComponent() {
    }
    DetailPaketComponent.prototype.ngOnInit = function () {
    };
    return DetailPaketComponent;
}());
DetailPaketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-detail-paket',
        template: __webpack_require__("../../../../../src/app/detail-paket/detail-paket.component.html"),
        styles: [__webpack_require__("../../../../../src/app/detail-paket/detail-paket.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DetailPaketComponent);

//# sourceMappingURL=detail-paket.component.js.map

/***/ }),

/***/ "../../../../../src/app/eksternal/eksternal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-found {\r\n    margin-left: 40%;\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/eksternal/eksternal.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"not-found\">Awesome Travel Site</p>"

/***/ }),

/***/ "../../../../../src/app/eksternal/eksternal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EksternalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EksternalComponent = (function () {
    function EksternalComponent() {
    }
    EksternalComponent.prototype.ngOnInit = function () {
    };
    return EksternalComponent;
}());
EksternalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-eksternal',
        template: __webpack_require__("../../../../../src/app/eksternal/eksternal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/eksternal/eksternal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EksternalComponent);

//# sourceMappingURL=eksternal.component.js.map

/***/ }),

/***/ "../../../../../src/app/etalase-travel/etalase-travel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper-content {\r\n    margin-top: -35px;\r\n}\r\n\r\n.wrap-img {\r\n    position: relative;\r\n}\r\n\r\n.img-background {\r\n    width: 1138px;\r\n    height: 299px;\r\n}\r\n\r\n.wrap-img-logo {\r\n    position: absolute;\r\n    z-index: 9;\r\n    top: 362px;\r\n    left: 140px;\r\n}\r\n\r\n.img-logo {\r\n    width: 152px;\r\n    height: 152px;\r\n    border-radius: 50%;\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), 0px 1px 5.9px 0.1px rgba(66, 66, 66, 0.5);\r\n}\r\n\r\n.btn-chat-trv {\r\n    position: absolute;\r\n    right: 40px;\r\n    bottom: 20px;\r\n    width: 122px;\r\n    height: 31px;\r\n    border-radius: 2.4px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #b7b7b7;\r\n    font-size: 12.8px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n}\r\n\r\n.wrap-info {\r\n    width: 1138px;\r\n    height: 147px;\r\n    border-bottom: solid 1px #dddddd;\r\n    border: solid .5px #dddddd;\r\n}\r\n\r\n.wrap-tittle {\r\n    position: relative;\r\n    width: 1136px;\r\n    height: 85px;\r\n    padding-left: 210px;\r\n    padding-top: 10px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.tittle-head {\r\n    display: inline-block;\r\n    font-size: 24.6px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #263238;\r\n}\r\n\r\n.slogan-head {\r\n    font-size: 12.8px;\r\n    font-weight: normal;\r\n    font-style: italic;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.number-success-trip {\r\n    position: absolute;\r\n    right: 170px;\r\n    top: 10px;\r\n    font-size: 19.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.success-trip {\r\n    position: absolute;\r\n    top: 45px;\r\n    right: 150px;\r\n    font-size: 10.8px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.badge-travel {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 10px;\r\n    font-size: 19.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.level-travel {\r\n    position: absolute;\r\n    top: 45px;\r\n    right: 35px;\r\n    font-size: 10.8px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.info-travel {\r\n    padding-left: 210px;\r\n    margin-top: 9px;\r\n    margin-bottom: -4px;\r\n    font-size: 10.8px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.share {\r\n    position: absolute;\r\n    right: 280px;\r\n    top: 506px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-info-penawaran {\r\n    position: relative;\r\n    height: 60px;\r\n    width: 1138px;\r\n    border-bottom: 1px solid #dddddd;\r\n    padding-top: 18px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.paket-penawaran {\r\n    display: inline-block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.sort {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0px;\r\n    font-size: 13.4px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4c4c4c;\r\n}\r\n\r\n.form-sort {\r\n    width: 183px;\r\n    height: 26px;\r\n    border-radius: 2.4px;\r\n    display: inline-block;\r\n    font-size: 11px;\r\n    padding: 0px;\r\n}\r\n\r\n.category {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 345px;\r\n    font-size: 13.4px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4c4c4c;\r\n}\r\n\r\n.thumb-promo {\r\n    border-radius: 10px;\r\n    border: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 0px 1px #dddddd;\r\n    margin-top: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.thumb-promo:hover {\r\n    border-radius: 10px;\r\n    border: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 0px 1px #dddddd;\r\n    margin-top: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0px 1px 5.9px 0.1px rgba(233, 30, 99, 0.6);\r\n}\r\n\r\n.img-thumb img {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.img-promo {\r\n    width: 100%;\r\n    height: 155px;\r\n}\r\n\r\n.body-caption {\r\n    text-align: left;\r\n    padding: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.disc {\r\n    position: absolute;\r\n    width: 50px;\r\n    background-color: #ab47bc;\r\n    text-align: center;\r\n    top: 0;\r\n    left: 0;\r\n    color: white;\r\n    border-radius: 5px 0 5px 0;\r\n}\r\n\r\n.trip {\r\n    color: white;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    background-color: orange;\r\n    top: 45%;\r\n    left: 30%;\r\n    width: 70px;\r\n    text-align: center;\r\n    border-radius: 25px;\r\n}\r\n\r\n.caption-price {\r\n    color: #ab47bc;\r\n    font-size: 11px;\r\n}\r\n\r\n.caption-tittle {\r\n    font-size: 13px;\r\n    text-align: left;\r\n    margin-top: 10px;\r\n    line-height: 1.15;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.caption-duration {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    line-height: 1.3;\r\n    margin-top: 10px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.travel-name {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    color: #9e9e9e;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/etalase-travel/etalase-travel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-etalase\">\r\n    <div class=\"wrapper-content\">\r\n        <div class=\"wrap-img\">\r\n            <img src=\"../assets/img/edit2.jpg\" class=\"img-background\">\r\n            <button class=\"btn-chat-trv\">Chat Travel</button>\r\n        </div>\r\n\r\n        <div class=\"wrap-img-logo\">\r\n            <img class=\"img-logo\" src=\"../assets/img/kuylah.png\">\r\n        </div>\r\n\r\n        <div class=\"wrap-info\">\r\n            <div class=\"wrap-tittle\">\r\n                <div class=\"tittle-head\">Kuylah Travel Indonesia </div> <span class=\"glyphicon glyphicon-education\"></span>\r\n                <div class=\"slogan-head\">Mencari dan Memberi yang Terbaik </div>\r\n\r\n                <div class=\"number-success-trip\"> 89 </div>\r\n                <div class=\"success-trip\"> Trip Berhasil </div>\r\n\r\n                <div class=\"badge-travel\">\r\n                    <span class=\"glyphicon glyphicon-bookmark\"></span>\r\n                    <span class=\"glyphicon glyphicon-bookmark\"></span>\r\n                    <span class=\"glyphicon glyphicon-bookmark\"></span>\r\n                    <span class=\"glyphicon glyphicon-bookmark\"></span>\r\n                    <span class=\"glyphicon glyphicon-bookmark\"></span>\r\n                </div>\r\n                <div class=\"level-travel\"> Travel Kelas Satu </div>\r\n            </div>\r\n            <p class=\"info-travel\"> <span class=\"glyphicon glyphicon-home\"> </span> Dramaga Cantik Residence Blok K51, Dramaga, Kabupaten Bogor Jawa Barat, Indonesia </p>\r\n            <p class=\"info-travel\"> <span class=\"glyphicon glyphicon-time\"> </span> Bergabung Sejak 30 Desember 2012 </p>\r\n            <p class=\"share\">Bagikan :</p>\r\n        </div>\r\n\r\n        <div class=\"wrap-info-penawaran\">\r\n            <div class=\"paket-penawaran\">Paket Trip yang Ditawarkan</div>\r\n            <div class=\"sort\"> Urutkan :\r\n                <select class=\"form-control form-sort\">\r\n                        <option >Paling Sesuai</option>\r\n                        <option >Terbaru</option>\r\n                        <option >Termurah</option>\r\n                        <option >Termahal</option>\r\n                        <option >Terlaris</option>\r\n                     </select>\r\n            </div>\r\n\r\n            <div class=\"category\"> Kategori :\r\n                <select class=\"form-control form-sort\">\r\n                        <option >Beach</option>\r\n                        <option >City Tour</option>\r\n                        <option >Culture</option>\r\n                        <option >Fishing</option>\r\n                        <option >Hiking</option>\r\n                        <option >Honeymoon</option>\r\n                        <option >Tracking</option>\r\n                        <option >Sailing</option>\r\n                     </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <div class=\"thumb-promo\">\r\n                    <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                    <div class=\"disc\">-10%</div>\r\n                    <div class=\"trip\">Open</div>\r\n                    <div class=\"body-caption\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-sm-6 \">\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <div class=\"caption-price\">Rp 300.000</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                        <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                        <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <div class=\"thumb-promo\">\r\n                    <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                    <div class=\"disc\">-10%</div>\r\n                    <div class=\"trip\">Open</div>\r\n                    <div class=\"body-caption\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <div class=\"caption-price\">Rp 300.000</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                        <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                        <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <div class=\"thumb-promo\">\r\n                    <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                    <div class=\"disc\">-10%</div>\r\n                    <div class=\"trip\">Open</div>\r\n                    <div class=\"body-caption\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <div class=\"caption-price\">Rp 300.000</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                        <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                        <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <div class=\"thumb-promo\">\r\n                    <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                    <div class=\"disc\">-10%</div>\r\n                    <div class=\"trip\">Open</div>\r\n                    <div class=\"body-caption\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <div class=\"caption-price\">Rp 300.000</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                        <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                        <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6 \">\r\n                <div class=\"thumb-promo\">\r\n                    <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                    <div class=\"disc\">-10%</div>\r\n                    <div class=\"trip\">Open</div>\r\n                    <div class=\"body-caption\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <div class=\"caption-price\">Rp 300.000</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                        <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                        <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                <div class=\"thumb-promo\">\r\n                    <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                    <div class=\"disc\">-10%</div>\r\n                    <div class=\"trip\">Open</div>\r\n                    <div class=\"body-caption\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                                <span class=\"icon-star\"></span>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6\">\r\n                                <div class=\"caption-price\">Rp 300.000</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                        <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                        <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/etalase-travel/etalase-travel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtalaseTravelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EtalaseTravelComponent = (function () {
    function EtalaseTravelComponent() {
    }
    EtalaseTravelComponent.prototype.ngOnInit = function () {
    };
    return EtalaseTravelComponent;
}());
EtalaseTravelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-etalase-travel',
        template: __webpack_require__("../../../../../src/app/etalase-travel/etalase-travel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/etalase-travel/etalase-travel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EtalaseTravelComponent);

//# sourceMappingURL=etalase-travel.component.js.map

/***/ }),

/***/ "../../../../../src/app/favorit-user/favorit-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-2 {\r\n    width: 19.666667% !important;\r\n}\r\n\r\n.thumb-promo {\r\n    width: 165px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 0px 1px #dddddd;\r\n    margin-top: 8px;\r\n}\r\n\r\n.img-thumb img {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.img-promo {\r\n    width: 100%;\r\n    height: 155px;\r\n}\r\n\r\n.body-caption {\r\n    text-align: left;\r\n    padding: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.exit {\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 3px;\r\n    background-color: #d24d57;\r\n    text-align: center;\r\n    top: 6px;\r\n    right: 12px;\r\n    color: white;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n\r\n.trip {\r\n    color: white;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    background-color: orange;\r\n    top: 42%;\r\n    left: 35%;\r\n    width: 70px;\r\n    text-align: center;\r\n    border-radius: 25px;\r\n}\r\n\r\n.caption-price {\r\n    color: #ab47bc;\r\n    font-size: 11px;\r\n}\r\n\r\n.caption-tittle {\r\n    font-size: 13px;\r\n    text-align: left;\r\n    margin-top: 10px;\r\n    line-height: 1.15;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.caption-duration {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    line-height: 1.3;\r\n    margin-top: 10px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.travel-name {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.pesan-travel {\r\n    width: 100%;\r\n    height: 34px;\r\n    line-height: 34px;\r\n    background-color: #ab47bc;\r\n    color: white;\r\n}\r\n\r\n.pesan:hover {\r\n    text-decoration: none;\r\n    color: white;\r\n    background-color: #ab47bc;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorit-user/favorit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"\">\r\n                <a href=\"#\">\r\n                    <div class=\"exit\"> X </div>\r\n                </a>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"#\">\r\n                <div class=\"exit\"> X </div>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"#\">\r\n                <div class=\"exit\"> X </div>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"#\">\r\n                <div class=\"exit\"> X </div>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"#\">\r\n                <div class=\"exit\"> X </div>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"\">\r\n                <a href=\"#\">\r\n                    <div class=\"exit\"> X </div>\r\n                </a>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"#\">\r\n                <div class=\"exit\"> X </div>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"#\">\r\n                <div class=\"exit\"> X </div>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"#\">\r\n                <div class=\"exit\"> X </div>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-2 col-sm-4\">\r\n        <div class=\"thumb-promo\">\r\n            <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n            <a href=\"#\">\r\n                <div class=\"exit\"> X </div>\r\n            </a>\r\n            <div class=\"trip\">Open</div>\r\n            <div class=\"body-caption\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                        <span class=\"icon-star\"></span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"caption-price\">Rp 300.000</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                <a [routerLink]=\"['/EtalaseTravel']\">\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </a>\r\n            </div>\r\n            <a href=\"#\" class=\"pesan\">\r\n                <div class=\"pesan-travel text-center\"> Pesan Sekarang</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/favorit-user/favorit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoritUserComponent = (function () {
    function FavoritUserComponent() {
    }
    FavoritUserComponent.prototype.ngOnInit = function () {
    };
    return FavoritUserComponent;
}());
FavoritUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-favorit-user',
        template: __webpack_require__("../../../../../src/app/favorit-user/favorit-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/favorit-user/favorit-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FavoritUserComponent);

//# sourceMappingURL=favorit-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    width: 101%;\r\n    height: 206px;\r\n    background-color: #9c27b0;\r\n    margin-top: 61px;\r\n    padding-top: 42px;\r\n}\r\n\r\n.footer-brand-logo {\r\n    margin-top: -2px;\r\n}\r\n\r\n.cr-head {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    margin-bottom: 21px;\r\n}\r\n\r\n.cr-tittle {\r\n    font-size: 13px;\r\n    color: #ffffff;\r\n}\r\n\r\n.footer-black {\r\n    width: 101%;\r\n    height: 44px;\r\n    background-color: #1b1b1b;\r\n}\r\n\r\n.cr-black {\r\n    font-size: 13px;\r\n    text-align: left;\r\n    color: #ffffff;\r\n    margin-left: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"col-md-2\">\r\n        <img alt=\"Brand\" src=\"../assets/img/logo.png\" class=\"footer-brand-logo\">\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n        <p class=\"cr-head\">Travinesia</p>\r\n        <p class=\"cr-tittle\">Tentang Travinesia</p>\r\n        <p class=\"cr-tittle\">Hubungi Kami</p>\r\n        <p class=\"cr-tittle\">Syarat dan Ketentuan</p>\r\n        <p class=\"cr-tittle\">Karir</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n        <p class=\"cr-head\">Informasi</p>\r\n        <p class=\"cr-tittle\">Jadi Travel di Travinesia</p>\r\n        <p class=\"cr-tittle\">Pesan Paket Wisata</p>\r\n        <p class=\"cr-tittle\">Promo</p>\r\n        <p class=\"cr-tittle\">Dikon</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n        <p class=\"cr-head\">Kontak</p>\r\n        <p class=\"cr-tittle\"><span class=\"glyphicon glyphicon-earphone\"></span> (+62) 897 1234 4321</p>\r\n        <p class=\"cr-tittle\"><span class=\"glyphicon glyphicon-envelope\"></span> ask@travinesia.com</p>\r\n        <p class=\"cr-tittle\">Dramaga Cantik Residence Blok K51 Bogor, Jawa Barat Indonesia </p>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n        <p class=\"cr-head\">Ikuti Kami</p>\r\n        <p class=\"cr-tittle\">Logo</p>\r\n        <p class=\"cr-tittle\">Logo</p>\r\n        <p class=\"cr-tittle\">Logo</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n        <p class=\"cr-head\">Download App</p>\r\n        <p class=\"cr-tittle\">Logo</p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"footer-black\">\r\n    <p class=\"cr-black\">Copyright &copy; 2017 Travinesia</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header-user/header-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-profil {\r\n    background-color: #f5f5f5;\r\n    border-bottom: 1px solid #dddddd;\r\n    /* padding-bottom: 10px;\r\n    padding-top: 10px; */\r\n}\r\n\r\n.brand-logo {\r\n    width: 140px;\r\n    margin-top: -7px;\r\n}\r\n\r\n.icon-bar {\r\n    background-color: grey;\r\n}\r\n\r\nli>a {\r\n    color: #4c4c4c;\r\n    font-family: 'Noto Sans';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nli>a:hover {\r\n    color: #ab47bc;\r\n    text-decoration: none;\r\n}\r\n\r\nli>a:focus {\r\n    color: #ab47bc;\r\n    text-decoration: none;\r\n}\r\n\r\n.glyphicon-chevron-down {\r\n    margin-left: 7px;\r\n}\r\n\r\nul>li>a:focus .glyphicon-chevron-down {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.btn-trv {\r\n    position: relative;\r\n    top: 8px;\r\n    border-radius: 3px;\r\n    color: #ab47bc;\r\n    border: solid 1px #ab47bc;\r\n    background-color: transparent;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.notif {\r\n    position: absolute;\r\n    top: 13px;\r\n    right: 21px;\r\n    width: 5px;\r\n    height: 5px;\r\n    border-radius: 50%;\r\n    background-color: #ab47bc;\r\n}\r\n\r\n.foto-profil {\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 7px;\r\n    right: 10px;\r\n}\r\n\r\n.profil {\r\n    margin-right: 20px;\r\n}\r\n\r\nul.head-category li {\r\n    display: inline;\r\n    margin-right: 33px;\r\n    position: relative;\r\n    padding-left: 0px;\r\n}\r\n\r\n.line-category {\r\n    border-bottom: 1px solid #dddddd;\r\n    width: 101.5%;\r\n    position: relative;\r\n    bottom: 18px;\r\n}\r\n\r\nli.kanan {\r\n    float: right;\r\n    margin-right: -15px;\r\n    list-style: none;\r\n}\r\n\r\n.margin-content {\r\n    margin-top: 150px;\r\n}\r\n\r\n@media (max-width:425px) {\r\n    .stylish-input-group {\r\n        width: 313px;\r\n    }\r\n    .notif {\r\n        position: absolute;\r\n        top: 8px;\r\n        left: 98px;\r\n        width: 5px;\r\n        height: 5px;\r\n        border-radius: 50%;\r\n        background-color: #ab47bc;\r\n    }\r\n    .foto-profil {\r\n        width: 46px;\r\n        height: 46px;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        top: 1px;\r\n        left: 12px;\r\n    }\r\n    .btn-trv {\r\n        position: relative;\r\n        top: -4px;\r\n        border-radius: 3px;\r\n        color: #ab47bc;\r\n        border: solid 1px #ab47bc;\r\n        background-color: transparent;\r\n        margin-left: 15px;\r\n        margin-right: -8px;\r\n        margin-top: 8px;\r\n        margin-bottom: 8px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-user/header-user.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-profil navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n    <span class=\"sr-only\"></span>\r\n    <span class=\"icon-bar\"></span>\r\n    <span class=\"icon-bar\"></span>\r\n    <span class=\"icon-bar\"></span>\r\n  </button>\r\n            <a [routerLink]=\"['']\" class=\"navbar-brand\" href=\"#\">\r\n                <img alt=\"Brand\" src=\"../assets/img/travinesia-logo.png\" class=\"brand-logo\">\r\n            </a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\r\n\r\n            <form class=\"navbar-form navbar-left\">\r\n                <div class=\"input-group stylish-input-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Cari Lokasi Wisata\">\r\n                    <span class=\"input-group-addon\">\r\n                <button [routerLink]=\"['/searchNavbar/1']\" type=\"submit\">\r\n                    <span class=\"glyphicon glyphicon-search\"></span>\r\n                    </button>\r\n                    </span>\r\n                </div>\r\n            </form>\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a [routerLink]=\"['/Akun/Pemesanan']\" role=\"button\">Pemesanan</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/Notifikasi']\" role=\"button\">Notifikasi</a>\r\n                </li>\r\n                <li>\r\n                    <button [routerLink]=\"['/JadiTravel']\" class=\"btn btn-trv\">Jadi Travel</button> <span class=\"notif\"></span>\r\n                </li>\r\n                <li>\r\n                    <a (click)=\"logout()\" role=\"button\" class=\"profil\"> foto\r\n                      <img src=\"./assets/img/foto.png\" class=foto-profil>\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n\r\n    <div class=\"container-fluid-bar-fixed\">\r\n        <ul class=\"head-category\">\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Beach'}\"> <span class=\"icon-island-with-palm-trees\"></span> Beach</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'City Tour'}\"> <span class=\"icon-hotel-with-three-floors\"></span> City Tour</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Culture'}\"> <span class=\"icon-theatre-masks\"></span> Culture</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Fishing'}\"> <span class=\"icon-fishing-sign\"></span> Fishing</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Hiking'}\"> <span class=\"icon-mountains-with-trees\"></span> Hiking</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Honeymoon'}\"> <span class=\"icon-love-hot-air-balloon\"></span> Honeymoon</a>\r\n            </li>\r\n            <li><a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Tracking'}\"><span class=\"icon-human-foot-prints\"></span> Tracking</a> </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Sailing'}\"> <span class=\"icon-sea-ship-with-containers\"></span> Sailing</a>\r\n            </li>\r\n            <li class=\"kanan\">\r\n                <a [routerLink]=\"['/JualTrip']\"> <span class=\"icon-question\">\r\n                    <span class=\"path1\"></span><span class=\"path2\"></span>\r\n                    </span>\r\n                    Bantuan\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <hr class=\"line-category\">\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"margin-content\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-user/header-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderUserComponent = (function () {
    function HeaderUserComponent(appService) {
        this.appService = appService;
        this.profile = [];
        this.changeHead = true;
        this.changeHeadUser = false;
        this.appService.getUsers().subscribe(function (profile) {
            console.log(profile);
        });
    }
    HeaderUserComponent.prototype.querySearch = function (e) {
        this.query = e.target.value;
        console.log(this.query);
    };
    HeaderUserComponent.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    HeaderUserComponent.prototype.ngOnInit = function () {
    };
    return HeaderUserComponent;
}());
HeaderUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header-user',
        template: __webpack_require__("../../../../../src/app/header-user/header-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header-user/header-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], HeaderUserComponent);

var _a;
//# sourceMappingURL=header-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-bar {\r\n    background-color: grey;\r\n}\r\n\r\nul.head-category li {\r\n    display: inline;\r\n    margin-right: 33px;\r\n    position: relative;\r\n    padding-left: 0px;\r\n}\r\n\r\n.line-category {\r\n    border-color: transparent;\r\n    position: relative;\r\n    bottom: 16px;\r\n}\r\n\r\nli.kanan {\r\n    float: right;\r\n    margin-right: -15px;\r\n    list-style: none;\r\n}\r\n\r\n.navbar-transparent {\r\n    background-color: #f5f5f5;\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.brand-logo {\r\n    width: 140px;\r\n    margin-top: -7px;\r\n}\r\n\r\nli>a {\r\n    color: #4c4c4c;\r\n    font-family: 'Noto Sans';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nli>a:hover {\r\n    color: #ab47bc;\r\n    text-decoration: none;\r\n}\r\n\r\nli>a:focus {\r\n    color: #ab47bc;\r\n    text-decoration: none;\r\n}\r\n\r\n.glyphicon-chevron-down {\r\n    margin-left: 7px;\r\n}\r\n\r\nul>li>a:focus .glyphicon-chevron-down {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.login-form {\r\n    position: fixed;\r\n    width: 317px;\r\n    height: 371px;\r\n    background-color: #ffffff;\r\n    padding: 28px 26px 27px 30px;\r\n    right: 0;\r\n    top: 51px;\r\n    z-index: 999;\r\n    box-sizing: border-box;\r\n    border-radius: 0 0 0 10px;\r\n}\r\n\r\n.trv-form-login {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.login-forgot {\r\n    margin-top: 20px;\r\n    font-size: 12px;\r\n}\r\n\r\n.btn-masuk {\r\n    width: 100%;\r\n    height: 35px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    margin-top: 9px;\r\n    margin-bottom: 24px;\r\n    color: white;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn-facebook {\r\n    width: 100%;\r\n    height: 34px;\r\n    border-radius: 3px;\r\n    background-color: #3a589b;\r\n    margin: 24px 28px 10px 2px;\r\n    font-size: 13px;\r\n    text-align: left;\r\n    color: #ffffff;\r\n}\r\n\r\n.btn-gmail {\r\n    width: 100%;\r\n    height: 34px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #b7b7b7;\r\n    margin: 0 0 0 2px;\r\n    font-size: 13px;\r\n    text-align: left;\r\n    color: #000000;\r\n}\r\n\r\n.trv-line-login {\r\n    width: 288px;\r\n    height: 1px;\r\n    background-color: #e3e3e3;\r\n    border: solid 1px #e3e3e3;\r\n    margin-left: -12px;\r\n}\r\n\r\n.label-checkbox {\r\n    position: relative;\r\n    top: -6px;\r\n    font-weight: normal;\r\n}\r\n\r\n.trv-alert {\r\n    font-size: 11px;\r\n    color: #d24d57;\r\n    position: absolute;\r\n    left: 44px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.modal-bg {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, .5);\r\n    z-index: 99;\r\n    top: 0;\r\n}\r\n\r\n@media (max-width:425px) {\r\n    .stylish-input-group {\r\n        width: 313px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='changeHead'>\r\n\r\n    <nav class=\"navbar navbar-transparent navbar-fixed-top\">\r\n        <div class=\"container-fluid\">\r\n            <!-- Brand and toggle get grouped for better mobile display -->\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n            <span class=\"sr-only\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n\r\n                <a [routerLink]=\"['']\" class=\"navbar-brand\" href=\"#\">\r\n                    <img alt=\"Brand\" src=\"../assets/img/travinesia-logo.png\" class=\"brand-logo\">\r\n                </a>\r\n            </div>\r\n\r\n            <!-- Collect the nav links, forms, and other content for toggling -->\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\r\n                <form class=\"navbar-form navbar-left\">\r\n                    <div class=\"input-group stylish-input-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Cari Lokasi Wisata\">\r\n                        <span class=\"input-group-addon\">\r\n                                <button [routerLink]=\"['/searchNavbar/1']\" type=\"submit\">\r\n                                    <span class=\"glyphicon glyphicon-search\"></span>\r\n                        </button>\r\n                        </span>\r\n                    </div>\r\n                </form>\r\n\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/Daftar']\">Daftar</a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a role=\"button\" (click)=\"toggleLogin()\">Masuk <span class=\"glyphicon glyphicon-chevron-down\"></span></a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- /.navbar-collapse -->\r\n        </div>\r\n        <!-- /.container-fluid -->\r\n    </nav>\r\n\r\n    <div class=\"container-fluid-bar-fixed\">\r\n        <ul class=\"head-category\">\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Beach'}\"> <span class=\"icon-island-with-palm-trees\"></span> Beach</a>\r\n            </li>\r\n\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'City Tour'}\"> <span class=\"icon-hotel-with-three-floors\"></span> City Tour</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Culture'}\"> <span class=\"icon-theatre-masks\"></span> Culture</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Fishing'}\"> <span class=\"icon-fishing-sign\"></span> Fishing</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Hiking'}\"> <span class=\"icon-mountains-with-trees\"></span> Hiking</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Honeymoon'}\"> <span class=\"icon-love-hot-air-balloon\"></span> Honeymoon</a>\r\n            </li>\r\n            <li><a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Tracking'}\"><span class=\"icon-human-foot-prints\"></span> Tracking</a> </li>\r\n            <li>\r\n                <a [routerLink]=\"['/search']\" [queryParams]=\"{order:'Sailing'}\"> <span class=\"icon-sea-ship-with-containers\"></span> Sailing</a>\r\n            </li>\r\n            <li class=\"kanan\">\r\n                <a href=\"\"> <span class=\"icon-question\">\r\n                                <span class=\"path1\"></span><span class=\"path2\"></span>\r\n                    </span>\r\n                    Bantuan\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <hr class=\"line-category\">\r\n    </div>\r\n\r\n\r\n    <div class=\"margin-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <div *ngIf='showLogin' (click)=\"toggleLogin()\" class=\"modal-bg\">\r\n    </div>\r\n\r\n    <div *ngIf='showLogin' class=\"login-form\">\r\n        <form [formGroup]=\"rForm\" (ngSubmit)=\"addPost(rForm.value)\" (submit)=\"onSubmit()\">\r\n            <div class=\"trv-form-login\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" autofocus [(ngModel)]=\"user.email\" name=\"email\">\r\n                <div class=\"trv-alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">{{emailAlertMessage}}</div>\r\n            </div>\r\n\r\n            <div class=\"trv-form-login\">\r\n                <input id=\"password\" class=\"form-control\" placeholder=\"Password\" type=\"password\" data-toggle=\"password\" formControlName=\"password\" [(ngModel)]=\"user.password\" name=\"password\">\r\n                <div class=\"trv-alert\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">{{passwordAlertMessage}}</div>\r\n            </div>\r\n\r\n            <div class=\"login-forgot\">\r\n                <div class=\"col-md-6\">\r\n                    <input type=\"checkbox\" class=\"checkbox\">\r\n                    <label class=\"label-checkbox\"> Ingat Saya\r\n                    </label>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                    <a role=\"button\" [routerLink]=\"['/login']\">\r\n                        <p>Lupa Password ?</p>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <button class=\"btn btn-masuk\" type=\"submit Form\">Masuk</button>\r\n\r\n            <div class=\"trv-line-login\"></div>\r\n\r\n            <button class=\"btn btn-facebook\" type=\"submit\"> <span class=\"icon-facebook\"></span> Masuk Dengan Facebook</button>\r\n            <button class=\"btn btn-gmail\" type=\"submit\">Masuk Dengan Gmail</button>\r\n        </form>\r\n    </div>\r\n\r\n    <!-- end login form  -->\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf='changeHeadUser'>\r\n    <app-header-user></app-header-user>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token_auth_service__ = __webpack_require__("../../../../../src/app/token/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(fb, appService, authService) {
        this.fb = fb;
        this.appService = appService;
        this.authService = authService;
        this.user = {
            email: '',
            password: ''
        };
        this.showLogin = false;
        this.email = '';
        this.password = '';
        this.emailAlertMessage = '';
        this.passwordAlertMessage = '';
        this.emailAtAlertMessage = '';
        this.changeHead = true;
        this.changeHeadUser = false;
        this.initializeErrorMessage();
        this.rForm = fb.group({
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
        });
    }
    HeaderComponent.prototype.toggleLogin = function () {
        this.showLogin = !this.showLogin;
    };
    HeaderComponent.prototype.initializeErrorMessage = function () {
        this.emailAlertMessage = "Email harus diisi";
        this.passwordAlertMessage = "Password harus diisi";
        this.emailAtAlertMessage = "Alamat email salah";
    };
    HeaderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.appService.addUser(this.user).subscribe(function (user) {
            localStorage.setItem("token", user.token);
            if (localStorage.token == user.token) {
                _this.changeHead = !_this.changeHead;
                _this.changeHeadUser = !_this.changeHeadUser;
            }
        });
    };
    HeaderComponent.prototype.addPost = function (post) {
        this.email = post.email;
        this.password = post.password;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.myToken = this.authService.AccessToken;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__token_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__token_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/jual-trip-content/jual-trip-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[hidden] {\r\n    display: none !important;\r\n}\r\n\r\n.wrap-fasilitas .col-md-3 {\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.wrap-tittle {\r\n    position: relative;\r\n}\r\n\r\n.head-content {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    display: inline-block;\r\n}\r\n\r\n.state-all {\r\n    position: absolute;\r\n    bottom: 22px;\r\n    right: 0px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    background-color: #f5f5f5;\r\n    border-radius: 13.5px;\r\n    width: 95px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.info-trip-term {\r\n    width: 100%;\r\n    letter-spacing: normal;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.info-term {\r\n    width: 100%;\r\n    height: 41px;\r\n    line-height: 41px;\r\n    background-color: #eff9e9;\r\n    border: solid 1px #dddddd;\r\n    font-size: 11px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #569156;\r\n    text-align: center;\r\n}\r\n\r\n.bold-term {\r\n    font-weight: bold;\r\n}\r\n\r\n.label-form {\r\n    display: block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.nama-trip {\r\n    width: 660px;\r\n    height: 72px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.wrap-form-trip {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.sort {\r\n    display: inline-block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.kategori {\r\n    display: block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.kategori-tittle {\r\n    width: 115px;\r\n    display: inline-block;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.kategori-tittle-lanjutan {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-category-item {\r\n    width: 303px;\r\n    height: 127px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n    padding: 15px;\r\n    display: inline;\r\n    float: right;\r\n}\r\n\r\n.durasi {\r\n    display: inline-block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.form-sort {\r\n    width: 100%;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.form-kategori {\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n    width: 156px;\r\n    height: 35px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.form-durasi {\r\n    right: 0px;\r\n    width: 100%;\r\n    height: 35px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.img-paket {\r\n    width: 100%;\r\n    height: 165px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.img-paket-core {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.img-add {\r\n    width: 88px;\r\n    height: 88px;\r\n    border-radius: 5px;\r\n    background-color: #ffffff;\r\n    border: dashed 1px #ab47bc;\r\n    text-align: center;\r\n    line-height: 85px;\r\n    cursor: pointer;\r\n}\r\n\r\n.add {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tittle-img-core {\r\n    width: 88px;\r\n    font-size: 11px;\r\n    margin-top: 7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.img-paket-gallery {\r\n    width: 536px;\r\n    height: 100%;\r\n    position: absolute;\r\n    border-left: 1px solid #dddddd;\r\n    top: 0px;\r\n    left: 135px;\r\n    padding: 20px 25px 0px 25px;\r\n}\r\n\r\n.tittle-img-gallery {\r\n    font-size: 11px;\r\n    margin-top: 7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.wrap-progress-bar {\r\n    position: relative;\r\n}\r\n\r\n.img-quality {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #9e9e9e;\r\n    position: absolute;\r\n    top: -4px;\r\n}\r\n\r\n.quality-bar {\r\n    width: 563px;\r\n    height: 9px;\r\n    border-radius: 3.5px;\r\n    display: inline-block;\r\n    margin-left: 100px;\r\n}\r\n\r\n.progress-bar {\r\n    width: 75%;\r\n    background-color: #00c853;\r\n}\r\n\r\n.wrap-option {\r\n    position: relative;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.radio label {\r\n    margin-right: 13px;\r\n}\r\n\r\n.radio {\r\n    margin-top: -2px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.wrap-label-fasilitas {\r\n    position: relative;\r\n    height: 80px;\r\n}\r\n\r\n.tittle-fasilitas {\r\n    position: absolute;\r\n    margin-left: 13px;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.wrap-fasilitas {\r\n    width: 100%;\r\n    height: 271px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n    padding: 25px;\r\n}\r\n\r\n.label-fasilitas {\r\n    display: block;\r\n    font-size: 13px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.label-checkbox {\r\n    position: absolute;\r\n    width: 383px;\r\n    bottom: 106px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.55;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.head-category {\r\n    padding: 0px;\r\n}\r\n\r\n.head-category li {\r\n    display: inline;\r\n    margin-right: 80px;\r\n    position: relative;\r\n    padding-left: 0px;\r\n}\r\n\r\n.checkbox-label-fasilitas {\r\n    position: relative;\r\n    bottom: 6px;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.margin-fasilitas {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.wrap-btn {\r\n    margin: 20px auto;\r\n    text-align: right;\r\n}\r\n\r\n.btn-content {\r\n    width: 195px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    border: 1px solid #dddddd;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ffffff;\r\n}\r\n\r\n.wrap-category-item .col-md-6 {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.tittle-tanggal a {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n    line-height: 32px;\r\n    margin-top: 25px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n\r\n.tittle-tanggal a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.waktu-bertemu-input {\r\n    text-align: center;\r\n    width: 216px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.tanggal-trip {\r\n    width: 216px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jual-trip-content/jual-trip-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='content1'>\r\n    <div class=\"wrap-tittle\">\r\n        <p class=\"head-content\"> Jual Trip </p>\r\n        <span class=\"state-all\"> Tahap 1 dari 2</span>\r\n    </div>\r\n\r\n    <div class=\"info-trip-term\"> Jual Trip Travel Anda disini. Masukkan informasi trip selengkap mungkin untuk meningkatkan kepercayaan traveller terhadap paket trip yang ditawarkan. Berikan fasilitas yang terbaik Travel Anda.</div>\r\n\r\n    <div class=\"info-term\" *ngIf='successedTrip'><span class=\"bold-term\">Trip berhasil ditambahkan. </span> Silahkan cek pilihan \"Daftar Trip\" untuk melihat seluruh trip yang anda jual</div>\r\n\r\n    <div class=\"wrap-img-trip\">\r\n        <label class=\"label-form\" for=\"namaTrip\">Gambar Trip</label>\r\n\r\n        <div class=\"img-paket\">\r\n            <div class=\"img-paket-core\">\r\n                <label>\r\n                            <div class=\"img-add\">\r\n                                <img src=\"../assets/img/add.png\" class=\"add\">\r\n                                <input type=\"file\" hidden>\r\n                            </div>\r\n                        </label>\r\n\r\n                <p class=\"tittle-img-core\">Gambar utama Paket wisata</p>\r\n            </div>\r\n\r\n            <div class=\"img-paket-gallery\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <label>\r\n                                    <div class=\"img-add\">\r\n                                        <img src=\"../assets/img/add.png\" class=\"add\">\r\n                                        <input type=\"file\" hidden>\r\n                                    </div>\r\n                                </label>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <label>\r\n                                    <div class=\"img-add\">\r\n                                        <img src=\"../assets/img/add.png\" class=\"add\">\r\n                                        <input type=\"file\" hidden>\r\n                                    </div>\r\n                                </label>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <label>\r\n                                    <div class=\"img-add\">\r\n                                        <img src=\"../assets/img/add.png\" class=\"add\">\r\n                                        <input type=\"file\" hidden>\r\n                                    </div>\r\n                                </label>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3\">\r\n                        <label>\r\n                                    <div class=\"img-add\">\r\n                                        <img src=\"../assets/img/add.png\" class=\"add\">\r\n                                        <input type=\"file\" hidden>\r\n                                    </div>\r\n                                </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <p class=\"tittle-img-gallery\">Tentukan gambar lainnya untuk memperkuat daya tarik traveller. Pilih gambar dengan kualtas terbaik (format .JPG .JPEG .PNG maksimal 10 MB)</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-progress-bar\">\r\n        <span class=\"img-quality\">Kualitas Gambar\r\n                  </span>\r\n        <div class=\"progress quality-bar\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"wrap-form-trip\">\r\n        <label class=\"label-form\" for=\"namaTrip\">Nama Trip</label>\r\n        <div class=\"input-group\">\r\n            <textarea class=\"form-control nama-trip\" id=\"namaTrip\" placeholder=\"Contoh : Pulau Harapan Kepulauan Seribu\"></textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-option\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <label class=\"label-form\">Jenis Trip</label>\r\n                <div class=\"radio\">\r\n                    <label class=\"radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>Open</label>\r\n                    <label class=\"radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>Private</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"label-form\">Tanggal Berangkat</label>\r\n                        <div class=\"tanggal-trip input-group\">\r\n                            <div class=\"input-group-btn\">\r\n                                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"icon-calendar\"></span></button>\r\n                            </div>\r\n                            <input type=\"date\" class=\" form-control\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"tittle-tanggal\"> <a href=\"\">Tambah Tanggal Berangkat </a></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <label class=\"durasi\">Durasi Trip </label>\r\n                <select class=\"form-control form-durasi\">\r\n                                <option>1 Hari</option>\r\n                                <option>2 Hari</option>\r\n                                <option>3 Hari</option>\r\n                                <option>4 Hari</option>\r\n                                <option>5 Hari</option>\t\r\n                              </select>\r\n            </div>\r\n\r\n            <div class=\"col-md-8\">\r\n                <label class=\"kategori\">Kategori Trip </label>\r\n                <span class=\"kategori-tittle\">Kategori Utama :</span>\r\n                <select class=\"form-control form-kategori\">\r\n                                <option>Pilih Kategori</option>\r\n                                <option id=\"Beach\" >Beach</option>\r\n                                <option id=\"City Tour\" >City Tour</option>\r\n                                <option id=\"Culture\">Culture</option>\r\n                                <option id=\"Fishing\">Fishing</option>\r\n                                <option id=\"Hiking\">Hiking</option>\r\n                                <option id=\"Honeymoon\">Honeymoon</option>\r\n                                <option id=\"Tracking\">Tracking</option>\r\n                                <option id=\"Sailing\">Sailing</option>\r\n                            </select>\r\n            </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <label class=\"sort\" for=\"lokasi\"> Lokasi (Provinsi) </label>\r\n                <select class=\"form-control form-sort\">\r\n                                                        <option >Pilih Provinsi</option>\r\n                                                        <option >Nanggroe Aceh Darussalam </option>\r\n                                                        <option >Sumatra Utara</option>\r\n                                                        <option >Sumatra Selatan </option>\r\n                                                        <option >Sumatra Barat</option>\r\n                                                        <option >Bengkulu</option>\r\n                                                        <option >Riau</option>\r\n                                                        <option >Kepulauan Riau</option>\r\n                                                        <option >Jambi</option>\r\n                                                        <option >Lampung</option>\r\n                                                        <option >Bangka Belitung</option>\r\n                                                        <option >Kalimantan Barat</option>\r\n                                                        <option >Kalimantan Timur</option>\r\n                                                        <option >Kalimantan Selatan</option>\r\n                                                        <option >Kalimantan Tengah</option>\r\n                                                        <option >Kalimantan Utara</option>\r\n                                                        <option >Banten </option>\r\n                                                        <option >DKI Jakarta  </option>\r\n                                                        <option >Jawa Barat </option>\r\n                                                        <option >Jawa Tengah </option>\r\n                                                        <option >DI Yogyakarta </option>\r\n                                                        <option >Jawa Timur </option>\r\n                                                        <option >Bali </option>\r\n                                                        <option >Nusa Tenggara Timur </option>\r\n                                                        <option >Nusa Tenggara Barat </option>\r\n                                                        <option >Gorontalo </option>\r\n                                                        <option >Sulawesi Barat </option>\r\n                                                        <option >Sulawesi Tengah </option>\r\n                                                        <option >Sulawesi Utara </option>\r\n                                                        <option >Sulawesi Tenggara </option>\r\n                                                        <option >Sulawesi Selatan </option>\r\n                                                        <option >Maluku Utara </option>\r\n                                                        <option >Maluku </option>\r\n                                                        <option >Papua Barat </option>\r\n                                                        <option >Papua  </option>\r\n                                                    </select>\r\n            </div>\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"kategori-tittle\">\r\n                    <span class=\"kategori-tittle-lanjutan\">Kategori Lainnya : (Pilih Dua)</span>\r\n                </div>\r\n                <div class=\"wrap-category-item\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <span class=\"checkbox-label-fasilitas\">Beach</span>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <span class=\"checkbox-label-fasilitas\">Hiking</span>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <span class=\"checkbox-label-fasilitas\">City Tour</span>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <span class=\"checkbox-label-fasilitas\">Honeymoon</span>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <span class=\"checkbox-label-fasilitas\">Culture</span>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <span class=\"checkbox-label-fasilitas\">Tracking</span>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <span class=\"checkbox-label-fasilitas\">Fishing</span>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <span class=\"checkbox-label-fasilitas\">Sailing</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-label-fasilitas\">\r\n        <label class=\"label-form\">Fasilitas Trip </label>\r\n        <span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n        <span class=\"tittle-fasilitas\">Pilih fasilitas apa saja yang termasuk dalam paket wisata yang akan anda jual. Jika tidak ada pada pilihan, anda dapat menulisakn pada kolom deskripsi di halaman berikutnya.</span>\r\n    </div>\r\n\r\n    <div class=\"wrap-fasilitas\">\r\n        <label class=\"label-fasilitas\">Penginapan</label>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Homestay</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Villa</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Hotel</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"margin-fasilitas\"></div>\r\n        <label class=\"label-fasilitas\">Transportasi</label>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Kapal</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Speedboat</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Minibus</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Bus</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Mobil Elf</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Flight</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"margin-fasilitas\"></div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Makan</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Snack</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Barbeque</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Souvenir</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Welcome Drink</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Guide</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">P3K / Obat-obatan</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Life Jacket</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Karaoke</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Dokumentasi</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                <input type=\"checkbox\" class=\"checkbox\">\r\n                <span class=\"checkbox-label-fasilitas\">Tiket Objek Wisata</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-btn\">\r\n        <button (click)=\"toggleJual()\" class=\"btn-content\"> Selanjutnya</button>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf='content2'>\r\n    <app-jual-trip-content2></app-jual-trip-content2>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/jual-trip-content/jual-trip-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JualTripContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JualTripContentComponent = (function () {
    function JualTripContentComponent() {
        this.successedTrip = false;
        this.content1 = true;
        this.content2 = false;
    }
    JualTripContentComponent.prototype.toggleJual = function () {
        this.content1 = !this.content1;
        this.content2 = !this.content2;
    };
    JualTripContentComponent.prototype.ngOnInit = function () {
    };
    return JualTripContentComponent;
}());
JualTripContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jual-trip-content',
        template: __webpack_require__("../../../../../src/app/jual-trip-content/jual-trip-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jual-trip-content/jual-trip-content.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JualTripContentComponent);

//# sourceMappingURL=jual-trip-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/jual-trip-content2/jual-trip-content2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 305px;\r\n}\r\n\r\n.wrap-tittle {\r\n    position: relative;\r\n}\r\n\r\n.head-content {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    display: inline-block;\r\n}\r\n\r\n.state-all {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 0px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    background-color: #f5f5f5;\r\n    border-radius: 13.5px;\r\n    width: 95px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.state-back a {\r\n    position: absolute;\r\n    bottom: 22px;\r\n    right: 90px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n    cursor: pointer;\r\n}\r\n\r\n.state-back span {\r\n    margin-left: 12px;\r\n    margin-right: 14px;\r\n    color: #dddddd;\r\n}\r\n\r\n.state-back a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.info-trip-term {\r\n    width: 100%;\r\n    letter-spacing: normal;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.bold-term {\r\n    font-weight: bold;\r\n}\r\n\r\n.wrap-deskripsi {\r\n    margin-top: 30px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.label-form {\r\n    display: block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.deskripsi-trip {\r\n    width: 663px;\r\n    height: 147px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.catatan-trip {\r\n    width: 663px;\r\n    height: 191px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.wrap-catatan {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.wrap-mepo {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.btn-mepo {\r\n    width: 77px;\r\n    height: 49px;\r\n}\r\n\r\n.mepo-trip {\r\n    border-radius: 0px !important;\r\n    height: 49px;\r\n}\r\n\r\n.glyphicon-search:before {\r\n    color: #ab47bc\r\n}\r\n\r\n.note-mepo {\r\n    font-size: 12.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    float: left;\r\n    margin-left: 13px;\r\n    margin-right: 20px;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.catatan-mepo {\r\n    width: 662px;\r\n    height: 25px;\r\n    border-bottom: solid 1px #dddddd;\r\n    border-left: solid 1px #dddddd;\r\n    border-right: solid 1px #dddddd;\r\n    font-size: 12.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9e9e9e;\r\n    padding: 2px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.wrap-petunjuk {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.petunjuk-trip {\r\n    width: 662px;\r\n    height: 68px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.wrap-waktu {\r\n    margin-top: 15px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.tittle-waktu {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.54;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    padding: 8px 0;\r\n}\r\n\r\n.note-waktu {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.36;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9e9e9e;\r\n    padding: 2px 0;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.tittle-tanggal a {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n    line-height: 32px;\r\n    cursor: pointer;\r\n}\r\n\r\n.tittle-tanggal a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.waktu-bertemu-input {\r\n    text-align: center;\r\n    width: 216px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.tanggal-trip {\r\n    width: 216px;\r\n}\r\n\r\n.waktu-bertemu::-webkit-input-placeholder {\r\n    text-align: center;\r\n}\r\n\r\n.waktu-bertemu::-moz-placeholder {\r\n    text-align: center;\r\n}\r\n\r\n.waktu-bertemu:-ms-input-placeholder {\r\n    text-align: center;\r\n}\r\n\r\n.waktu-bertemu:-moz-placeholder {\r\n    text-align: center;\r\n}\r\n\r\n.input-group-addon {\r\n    background-color: #fdfdfd;\r\n}\r\n\r\n.rupiah {\r\n    font-weight: bold;\r\n}\r\n\r\n.wrap-harga {\r\n    position: relative;\r\n    width: 663px;\r\n    height: 127px;\r\n    border-radius: 3px;\r\n    border: solid 1px #ab47bc;\r\n    padding: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.perorang {\r\n    position: absolute;\r\n    right: -60px;\r\n    top: 34px;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.publish-trip {\r\n    width: 225px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.wrap-publish {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.wrap-kuota {\r\n    float: right;\r\n}\r\n\r\n.wrap-checkbox {\r\n    position: relative;\r\n}\r\n\r\n.label-checkbox {\r\n    position: absolute;\r\n    width: 660px;\r\n    top: -4px;\r\n    left: 25px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.55;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-btn {\r\n    margin: 45px auto;\r\n}\r\n\r\n.btn-content {\r\n    width: 100%;\r\n    height: 49px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    border: 1px solid #dddddd;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 49px;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jual-trip-content2/jual-trip-content2.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='jual2'>\r\n    <div class=\"wrap-tittle\">\r\n        <p class=\"head-content\"> Jual Trip </p>\r\n        <span class=\"state-all\"> Tahap 2 dari 2</span>\r\n        <span class=\"state-back\"> <a (click)=\"toggleJual()\"> < Kembali ke halaman sebelumnya <span>|</span> </a>\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"info-trip-term\"> Jual Trip Travel Anda disini. Masukkan informasi trip selengkap mungkin untuk meningkatkan kepercayaan traveller terhadap paket trip yang ditawarkan. Berikan fasilitas yang terbaik Travel Anda.</div>\r\n\r\n    <div class=\"wrap-deskripsi\">\r\n        <label class=\"label-form\" for=\"Deskripsi\">Deskripsi</label>\r\n        <div class=\"input-group\">\r\n            <textarea class=\"deskripsi-trip form-control\" id=\"Deskripsi\" placeholder=\"Tuliskan deskripsi singkat trip (dapat juga berupa keunggulan atau pelayanan travel anda) beserta itinerary. Tuliskan juga fasilitas yang tidak tercantum di kolom sebelumnya\"></textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-catatan\">\r\n        <label class=\"label-form\" for=\"catatan\">Catatan untuk Traveller</label>\r\n        <div class=\"input-group\">\r\n            <textarea class=\"catatan-trip form-control\" id=\"catatan\" placeholder=\"Contoh : Traveller diharapkan membawa obat pribadi, payung jas hujan dan peralatan lainnya yang bersifat pribadi\"></textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-mepo\">\r\n        <label class=\"label-form\" for=\"mepo\">Meeting Point</label>\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-btn\">\r\n                <button type=\"button\" class=\"btn btn-mepo dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-search\"></span></button>\r\n            </div>\r\n            <input type=\"text\" class=\"mepo-trip form-control\" placeholder=\"Cari lokasi meeting point\" aria-describedby=\"mepo\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search [formControl]=\"searchControl\">\r\n        </div>\r\n        <div class=\"catatan-mepo\"> <span class=\"note-mepo\">Catatan :</span> Masukkan nama tempat atau gedung populer di sekitar meeting point</div>\r\n\r\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"> </agm-marker>\r\n        </agm-map>\r\n    </div>\r\n\r\n    <div class=\"wrap-petunjuk\">\r\n        <label class=\"label-form\" for=\"petunjuk\">Petunjuk ke Meeting Point</label>\r\n        <div class=\"input-group\">\r\n            <textarea class=\"petunjuk-trip form-control\" id=\"petunjuk\" placeholder=\"Contoh : Traveller diharapkan membawa obat pribadi, payung jas hujan dan peralatan lainnya yang bersifat pribadi\"></textarea>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-waktu\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"tittle-waktu\">Waktu bertemu:</div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <input type=\"text\" placeholder=\"Jam : Menit\" class=\"waktu-bertemu-input form-control\">\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"note-waktu\">Diisi sesuai pembagian wilayah waktu lokasi trip berada</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-harga\">\r\n        <div class=\"wrap-publish\">\r\n            <label class=\"label-form\" for=\"harga\">Harga Trip</label>\r\n            <div class=\"publish-trip input-group\">\r\n                <span class=\" input-group-addon\" id=\"harga\"> <span class=\"rupiah\"> Rp </span> </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Harga Publish\">\r\n            </div>\r\n            <span class=\"perorang\">/ Orang </span>\r\n        </div>\r\n\r\n        <div class=\"wrap-kuota\">\r\n            <label class=\"label-form\" for=\"harga\">Kuota Maksimal</label>\r\n            <div class=\"publish-trip input-group\">\r\n                <input type=\"text\" class=\"form-control\">\r\n                <span class=\" input-group-addon\" id=\"harga\"> Peserta </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-checkbox\">\r\n        <input type=\"checkbox\" class=\"checkbox\">\r\n        <label class=\"label-checkbox\"> Dengan ini saya meneyetujui bahwa paket trip yang saya jual sesuai dengan syarat dan\r\n                ketentuan pihak Travinesia dan bersedia mengikuti segala kebijakan yang berlaku</label>\r\n    </div>\r\n\r\n    <div class=\"wrap-btn\">\r\n        <button class=\"btn-content\"> Jual</button>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf='jual1'>\r\n    <app-jual-trip-content></app-jual-trip-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/jual-trip-content2/jual-trip-content2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JualTripContent2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JualTripContent2Component = (function () {
    function JualTripContent2Component(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.jual1 = false;
        this.jual2 = true;
        this.latitude = -6.104273;
        this.longitude = 106.776137;
    }
    JualTripContent2Component.prototype.toggleJual = function () {
        this.jual1 = !this.jual1;
        this.jual2 = !this.jual2;
    };
    JualTripContent2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.latitude = -6.104273;
        this.longitude = 106.776137;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                });
            });
        });
    };
    JualTripContent2Component.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    return JualTripContent2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], JualTripContent2Component.prototype, "searchElementRef", void 0);
JualTripContent2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jual-trip-content2',
        template: __webpack_require__("../../../../../src/app/jual-trip-content2/jual-trip-content2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jual-trip-content2/jual-trip-content2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _c || Object])
], JualTripContent2Component);

var _a, _b, _c;
//# sourceMappingURL=jual-trip-content2.component.js.map

/***/ }),

/***/ "../../../../../src/app/jual-trip/jual-trip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-sidebar-info {\r\n    position: relative;\r\n    width: 314px;\r\n    border: solid 1px #dddddd;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.wrap-info-content {\r\n    position: relative;\r\n    padding: 25px;\r\n    padding-bottom: 35px;\r\n    text-align: center;\r\n}\r\n\r\n.wrap-content-padding {\r\n    width: 100%;\r\n    padding-left: 135px;\r\n    padding-right: 50px;\r\n}\r\n\r\n.badge-travel {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 20px;\r\n    width: 34px;\r\n    height: 34px;\r\n}\r\n\r\n.img-info {\r\n    width: 179px;\r\n    height: 179px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.info-tittle {\r\n    font-size: 20px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.info-tittle-address {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.info-level-travel {\r\n    display: inline-block;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #9c27b0;\r\n    margin-right: 8px;\r\n}\r\n\r\n.info-footer {\r\n    width: 312px;\r\n    height: 31px;\r\n    line-height: 31px;\r\n    position: absolute;\r\n    bottom: -1px;\r\n    background-color: #eff9e9;\r\n    border-top: solid 1px #dddddd;\r\n    border-bottom: solid 1px #dddddd;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #569156;\r\n}\r\n\r\n.wrap-menu-info {\r\n    width: 314px;\r\n    height: 288px;\r\n    border: solid 1px #dddddd;\r\n    padding-top: 8px;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.list-menu {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n.list-menu li {\r\n    text-indent: 0;\r\n    line-height: 45px;\r\n}\r\n\r\n.wrap-menu-info .list-menu li a {\r\n    display: block;\r\n    text-decoration: none;\r\n}\r\n\r\n.list-menu li a {\r\n    color: #4a4a4a;\r\n}\r\n\r\n.list-menu li a:focus {\r\n    background-color: #f7f7f7;\r\n    color: #ab47bc;\r\n    width: 100%;\r\n}\r\n\r\n.wrap-menu-info .list-menu li a .sidebar-icon {\r\n    width: 45px;\r\n    height: 45px;\r\n    font-size: 15px;\r\n    padding-left: 15px;\r\n    display: inline-block;\r\n    text-indent: 15px;\r\n    margin-right: 40px;\r\n    float: left;\r\n}\r\n\r\n.root-sidebar {\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #9e9e9e;\r\n    margin-bottom: 28px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jual-trip/jual-trip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"wrap-sidebar-info\">\r\n                <div class=\"wrap-info-content\">\r\n                    <img src=\"../assets/img/Award.png\" class=\"badge-travel\">\r\n\r\n                    <img class=\"img-info\" src=\"../assets/img/kuylah.png\">\r\n\r\n                    <div class=\"info-tittle\"> Kuylah Travel Indonesia </div>\r\n                    <div class=\"info-tittle-address\"> <span class=\"glyphicon glyphicon-home\"></span> Bogor, Jawa Barat</div>\r\n                    <p class=\"info-level-travel\"> Travel Kelas Satu</p>\r\n                    <span class=\"icon-star\"></span>\r\n                    <span class=\"icon-star\"></span>\r\n                    <span class=\"icon-star\"></span>\r\n                    <span class=\"icon-star\"></span>\r\n                    <span class=\"icon-star\"></span>\r\n                </div>\r\n                <div class=\"info-footer\"> <span class=\"glyphicon glyphicon-ok-circle\"></span> Akun Terverifikasi </div>\r\n            </div>\r\n\r\n            <div class=\"wrap-menu-info\">\r\n                <ul class=\"list-menu\">\r\n                    <li>\r\n                        <a [routerLink]=\"['JualTrip']\" [queryParams]=\"{order:'Jual Trip'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i>\r\n                                                      </span>\r\n                            <span class=\"sidebar-title\">Jual Trip</span>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a [routerLink]=\"['Saldo']\" [queryParams]=\"{order:'Saldo'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-file\"></i>\r\n                                                      </span>\r\n                            <span class=\"sidebar-title\">Saldo</span>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a [routerLink]=\"['TransaksiPenjualan']\" [queryParams]=\"{order:'Transaksi Penjualan'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-heart-empty\"></i>\r\n                                                      </span>\r\n                            <span class=\"sidebar-title\">Transaksi Penjualan</span>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a [routerLink]=\"['DaftarTrip']\" [queryParams]=\"{order:'Daftar Trip'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-bell\"></i>\r\n                                                      </span>\r\n                            <span class=\"sidebar-title\">Daftar Trip</span>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a [routerLink]=\"['/EtalaseTravel']\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-cog\"></i>\r\n                                                      </span>\r\n                            <span class=\"sidebar-title\">Etalase Travel</span>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a [routerLink]=\"['UbahProfilTravel']\" [queryParams]=\"{order:'Ubah Profil Travel'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-cog\"></i>\r\n                                                      </span>\r\n                            <span class=\"sidebar-title\">Ubah Profil Travel</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-9\">\r\n            <div class=\"wrap-content-padding\">\r\n                <p class=\"root-sidebar\"> Beranda > Travel Saya > {{ order }}</p>\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/jual-trip/jual-trip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JualTripComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JualTripComponent = (function () {
    function JualTripComponent(routeActive) {
        this.routeActive = routeActive;
    }
    JualTripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeActive.queryParams.filter(function (params) { return params.order; }).subscribe(function (params) {
            // console.log(params); {order: "popular"}
            _this.order = params.order;
            // console.log(this.order);  popular
        });
    };
    return JualTripComponent;
}());
JualTripComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jual-trip',
        template: __webpack_require__("../../../../../src/app/jual-trip/jual-trip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jual-trip/jual-trip.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], JualTripComponent);

var _a;
//# sourceMappingURL=jual-trip.component.js.map

/***/ }),

/***/ "../../../../../src/app/landingpage/landingpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=date]::-webkit-datetime-edit {\r\n    visibility: hidden;\r\n}\r\n\r\ninput[type=date]::-webkit-datetime-edit {\r\n    padding: 0px;\r\n    font-size: 12px;\r\n}\r\n\r\ninput[type=date]::-webkit-inner-spin-button {\r\n    display: none;\r\n}\r\n\r\ninput[type=date]::-webkit-calendar-picker-indicator {\r\n    margin-left: -15px;\r\n}\r\n\r\n.diskon-category {\r\n    display: inline-block;\r\n    padding-right: 15px;\r\n    position: relative;\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.lihat-diskon {\r\n    float: right;\r\n    margin-right: -15px;\r\n    color: #9c27b0;\r\n    font-size: 15px;\r\n}\r\n\r\n.lihat-diskon:hover {\r\n    text-decoration: none;\r\n}\r\n\r\nli a {\r\n    color: #4a4a4a;\r\n    font-family: 'Noto Sans';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nul>li>a {\r\n    font-family: 'Noto Sans';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nul>li>a:hover {\r\n    text-decoration: none;\r\n    color: #ab47bc;\r\n}\r\n\r\nul>li>a:focus {\r\n    text-decoration: none;\r\n    border-bottom: 2px solid #ab47bc;\r\n    padding-bottom: 2px;\r\n}\r\n\r\nol,\r\nul {\r\n    margin-top: -9px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nli.kanan {\r\n    float: right;\r\n    margin-right: -15px;\r\n    list-style: none;\r\n}\r\n\r\ndiv.item.active {\r\n    max-height: 293px;\r\n}\r\n\r\n.wrap-list {\r\n    border: 1px solid transparent;\r\n    padding: 14px 27px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24);\r\n    box-sizing: border-box;\r\n    background-color: white;\r\n}\r\n\r\ninput[type=number] {\r\n    border-radius: 3px;\r\n}\r\n\r\n.sigmPeople {\r\n    display: block;\r\n}\r\n\r\n.jumlah {\r\n    width: 100px;\r\n}\r\n\r\n.jumlah-orang {\r\n    margin-left: 8px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.carousel-inner {\r\n    border-radius: 10px;\r\n}\r\n\r\n.carousel-control.right,\r\n.carousel-control.left {\r\n    border-radius: 10px;\r\n}\r\n\r\ndiv.search-right {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #4a4a4a;\r\n    margin-bottom: 7px;\r\n}\r\n\r\nlabel {\r\n    color: #4a4a4a;\r\n    font-weight: lighter;\r\n}\r\n\r\n.radio label {\r\n    margin-right: 13px;\r\n}\r\n\r\n.radio {\r\n    margin-top: -2px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.btn-cari {\r\n    background-color: #ab47bc;\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    color: white;\r\n    margin-top: 2px;\r\n}\r\n\r\n.text-diskon {\r\n    font-size: 15px !important;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.thumb-promo {\r\n    border-radius: 10px;\r\n    border: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 0px 1px #dddddd;\r\n    margin-top: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.thumb-promo:hover {\r\n    border-radius: 10px;\r\n    border: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 0px 1px #dddddd;\r\n    margin-top: 8px;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-shadow: 0px 1px 5.9px 0.1px rgba(233, 30, 99, 0.6);\r\n}\r\n\r\n.img-thumb img {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.img-promo {\r\n    width: 100%;\r\n    height: 155px;\r\n}\r\n\r\n.body-caption {\r\n    text-align: left;\r\n    padding: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.disc {\r\n    position: absolute;\r\n    width: 50px;\r\n    background-color: #ab47bc;\r\n    text-align: center;\r\n    top: 0;\r\n    left: 0;\r\n    color: white;\r\n    border-radius: 5px 0 5px 0;\r\n}\r\n\r\n.trip {\r\n    color: white;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    background-color: orange;\r\n    top: 45%;\r\n    left: 30%;\r\n    width: 70px;\r\n    text-align: center;\r\n    border-radius: 25px;\r\n}\r\n\r\n.caption-price {\r\n    color: #ab47bc;\r\n    font-size: 13px;\r\n}\r\n\r\n.caption-tittle {\r\n    font-size: 13px;\r\n    text-align: left;\r\n    margin-top: 10px;\r\n    line-height: 1.15;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.caption-duration {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    line-height: 1.3;\r\n    margin-top: 10px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.travel-name {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    color: #9e9e9e;\r\n}\r\n\r\n@media (max-width: 425px) {\r\n    .wrap-list {\r\n        margin-top: 10px;\r\n        border: 1px solid transparent;\r\n        padding: 14px 27px;\r\n        border-radius: 10px;\r\n        box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24);\r\n        box-sizing: border-box;\r\n        background-color: white;\r\n    }\r\n    .input-group.sigm {\r\n        margin-top: -33px;\r\n        margin-bottom: 0px;\r\n        margin-left: 71px;\r\n    }\r\n    .sigmPeople {\r\n        display: inline-block;\r\n    }\r\n    .thumb-promo {\r\n        border-radius: 10px;\r\n        border: none;\r\n        position: relative;\r\n        display: inline-block;\r\n        overflow: hidden;\r\n        box-sizing: border-box;\r\n        box-shadow: 0px 0px 1px #dddddd;\r\n        margin-top: 8px;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .img-thumb img {\r\n        width: 100%;\r\n        position: relative;\r\n    }\r\n    .img-promo {\r\n        width: 100%;\r\n        height: 155px;\r\n    }\r\n    .trip {\r\n        color: white;\r\n        position: absolute;\r\n        margin: 0 auto;\r\n        background-color: orange;\r\n        top: 130px;\r\n        left: 30%;\r\n        width: 70px;\r\n        text-align: center;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\n@media (min-width:768px) {\r\n    .thumb-promo {\r\n        border-radius: 10px;\r\n        border: none;\r\n        position: relative;\r\n        display: inline-block;\r\n        overflow: hidden;\r\n        box-sizing: border-box;\r\n        box-shadow: 0px 0px 1px #dddddd;\r\n        margin-top: 8px;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .img-thumb img {\r\n        width: 100%;\r\n        position: relative;\r\n    }\r\n    .img-promo {\r\n        width: 100%;\r\n        height: 155px;\r\n    }\r\n    .trip {\r\n        color: white;\r\n        position: absolute;\r\n        margin: 0 auto;\r\n        background-color: orange;\r\n        top: 130px;\r\n        left: 35%;\r\n        width: 70px;\r\n        text-align: center;\r\n        border-radius: 25px;\r\n    }\r\n}\r\n\r\n@media (max-width:1200px) {\r\n    .radio label {\r\n        margin-right: 13px;\r\n        display: block;\r\n    }\r\n    .radio {\r\n        margin-top: -2px;\r\n        margin-bottom: 0px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landingpage/landingpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 col-sm-12 col-xs-12\">\r\n            <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                <!-- Indicators -->\r\n                <ol class=\"carousel-indicators\">\r\n                    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n                    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n                    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n                </ol>\r\n\r\n                <!-- Wrapper for slides -->\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"item active\">\r\n                        <img src=\"../assets/img/edit2.jpg\" class=\"img-slider\" alt=\"pulau\">\r\n                    </div>\r\n\r\n                    <div class=\"item\">\r\n                        <img src=\"../assets/img/edit2.jpg\" class=\"img-slider\" alt=\"pulau\">\r\n                    </div>\r\n\r\n                    <div class=\"item\">\r\n                        <img src=\"../assets/img/edit2.jpg\" class=\"img-slider\" alt=\"pulau\">\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Left and right controls -->\r\n                <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 col-sm-12 col-xs-12\">\r\n            <div class=\"wrap-list\">\r\n                <form>\r\n                    <div class=\"search-right\">Cari paket Wisata</div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"lokasi\">Lokasi : </label>\r\n                                <select class=\"form-control\">\r\n                                            <option >Pilih Lokasi</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option >Jawa</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option >Kalimantan</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option >Sumatera</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option >Sulawesi</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option >NTB</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option >NTT</option>\r\n\t\t\t\t\t\t\t\t\t \t</select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"kategori\">Kategori : </label>\r\n                                <select class=\"form-control\">\r\n                                            <option>Pilih Kategori</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option id=\"Beach\" >Beach</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option id=\"City Tour\" >City Tour</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option id=\"Culture\">Culture</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option id=\"Fishing\">Fishing</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option id=\"Hiking\">Hiking</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option id=\"Honeymoon\">Honeymoon</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option id=\"Tracking\">Tracking</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option id=\"Sailing\">Sailing</option>\t\r\n\t\t\t\t\t\t\t\t</select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"tanggal\">Tanggal Berangkat :</label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-btn\">\r\n                                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"icon-calendar\"></span></button>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"date-form form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"kategori\">Hari : </label>\r\n                                <select class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t \t\t<option>1 Hari</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option>2 Hari</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option>3 Hari</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option>4 Hari</option>\r\n\t\t\t\t\t\t\t\t\t \t\t<option>5 Hari</option>\t\r\n\t\t\t\t\t\t\t\t\t\t </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"optradio\">Jenis Trip : </label>\r\n                                <div class=\"radio\">\r\n                                    <label class=\"radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>Open</label>\r\n                                    <label class=\"radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>Private</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"kategori\" class=\"sigmPeople\">Jumlah :</label>\r\n                                <div class=\"input-group sigm\">\r\n                                    <input type=\"number\" min=\"1\" max=\"100\" class=\"jumlah form-control\">\r\n                                    <label class=\"jumlah-orang\">Orang</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <button [routerLink]=\"['/searchNavbar/Jawa']\" class=\"btn btn-cari\" type=\"submit\">Cari</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <!-- wraplist end -->\r\n        </div>\r\n        <!-- col-md-4 -->\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"diskon-category text-diskon\">\r\n                Diskon Minggu Ini </div>\r\n            <a class=\"diskon-category lihat-diskon\">Lihat Semua <span class=\"glyphicon glyphicon-chevron-right\"> </span></a>\r\n\r\n            <div class=\"row\">\r\n                <div *ngFor=\"let trip of dataTrip; let i=index\">\r\n                    <div *ngIf=\"i<6\">\r\n                        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                            <div class=\"thumb-promo\">\r\n                                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                                <div class=\"disc\">-10%</div>\r\n                                <div class=\"trip\">Open</div>\r\n                                <div class=\"body-caption\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 col-sm-6 \">\r\n                                            <span class=\"icon-star\"></span>\r\n                                            <span class=\"icon-star\"></span>\r\n                                            <span class=\"icon-star\"></span>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-sm-6\">\r\n                                            <div class=\"caption-price\">Rp 300.000</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"caption-tittle\"> {{ trip.trip_name }} </div>\r\n                                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                                    <a [routerLink]=\"['/EtalaseTravel']\">\r\n                                        <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                    <div class=\"thumb-promo\">\r\n                        <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                        <div class=\"disc\">-10%</div>\r\n                        <div class=\"trip\">Open</div>\r\n                        <div class=\"body-caption\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <div class=\"caption-price\">Rp 300.000</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                            <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                            <a [routerLink]=\"['/EtalaseTravel']\">\r\n                                <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                    <div class=\"thumb-promo\">\r\n                        <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                        <div class=\"disc\">-10%</div>\r\n                        <div class=\"trip\">Open</div>\r\n                        <div class=\"body-caption\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <div class=\"caption-price\">Rp 300.000</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                            <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                            <a [routerLink]=\"['/EtalaseTravel']\">\r\n                                <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                    <div class=\"thumb-promo\">\r\n                        <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                        <div class=\"disc\">-10%</div>\r\n                        <div class=\"trip\">Open</div>\r\n                        <div class=\"body-caption\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <div class=\"caption-price\">Rp 300.000</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                            <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                            <a [routerLink]=\"['/EtalaseTravel']\">\r\n                                <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-sm-4 col-xs-6 \">\r\n                    <div class=\"thumb-promo\">\r\n                        <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                        <div class=\"disc\">-10%</div>\r\n                        <div class=\"trip\">Open</div>\r\n                        <div class=\"body-caption\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <div class=\"caption-price\">Rp 300.000</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                            <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                            <a [routerLink]=\"['/EtalaseTravel']\">\r\n                                <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                    <div class=\"thumb-promo\">\r\n                        <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                        <div class=\"disc\">-10%</div>\r\n                        <div class=\"trip\">Open</div>\r\n                        <div class=\"body-caption\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6\">\r\n                                    <div class=\"caption-price\">Rp 300.000</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                            <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                            <a [routerLink]=\"['/EtalaseTravel']\">\r\n                                <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/landingpage/landingpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingpageComponent = (function () {
    function LandingpageComponent(router, appService) {
        var _this = this;
        this.router = router;
        this.appService = appService;
        this.appService.getDataTrip().subscribe(function (dataTrip) {
            _this.dataTrip = dataTrip.data;
        });
    }
    LandingpageComponent.prototype.goLogin = function () {
        this.router.navigate(['login']);
    };
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    return LandingpageComponent;
}());
LandingpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landingpage',
        template: __webpack_require__("../../../../../src/app/landingpage/landingpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landingpage/landingpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object])
], LandingpageComponent);

var _a, _b;
//# sourceMappingURL=landingpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginpage/loginpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.wrap-form {\r\n\twidth: 526px;\r\n    height: 690px;\r\n    border-radius: 15px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), \r\n                0px 2px 5.9px 0.1px rgba(0, 0, 0, 0.16);\r\n    padding: 47px;\r\n}\r\n\r\n.form-group{\r\n    margin-bottom: 30px;\r\n}\r\n.form-control{\r\n    width: 414px;\r\n    height: 44px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n\r\n.btn-daftar{\r\n    width: 100px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    color: white;\r\n    margin-right: 127px;\r\n    margin-top: 45px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn-daftar:hover{\r\n    background-color: #6a1b9a;\r\n\r\n}\r\n\r\n.btn-facebook{\r\n    width: 317px;\r\n    height: 44px;\r\n    border-radius: 3px;\r\n    background-color: #3a589b;\r\n    color: white;\r\n    position: absolute;\r\n    left: 100px;\r\n    top: 45px\r\n}\r\n\r\n.btn-google{\r\n    width: 317px;\r\n    height: 44px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #b7b7b7;\r\n    position: absolute;\r\n    left: 100px;\r\n    top: 100px;\r\n}\r\n\r\n.trv-atau{\r\n    position: absolute;\r\n    left: 118px;\r\n    font-size: 13px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.trv-tema-atas{\r\n    margin-left: 20px;\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.label--checkbox {\r\n    position: absolute;\r\n    font-family: sans-serif;\r\n    font-size : 13px;\r\n    line-height: 100%;\r\n    font-weight: normal;\r\n    width: 427px;\r\n}\r\n  \r\n.checkbox {\r\n    position: relative;\r\n    top: -0.375rem;\r\n    margin: 0 1rem 0 0;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n \r\n.checkbox:before {\r\n    transition: all 0.3s ease-in-out;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: 2;\r\n    width: 13px;\r\n    height: 13px;\r\n    border: 2px solid #dddddd;\r\n}\r\n \r\n.checkbox:checked:before {\r\n    transform: rotate(-45deg);\r\n    height: 0.7rem;\r\n    border-color: purple;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n}\r\n \r\n.checkbox:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -0.125rem;\r\n    left: 0;\r\n    width: 1.3rem;\r\n    height: 1.4rem;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n.trv-punya-akun{\r\n    width: 310px;\r\n    height: 16px;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    margin-top: -7px;\r\n}\r\n\r\nlabel{\r\n    color: #4a4a4a;\r\n}\r\n\r\nsmall{\r\n    color: #9e9e9e;\r\n}\r\n\r\n.trv-alert{\r\n    font-size:11px;\r\n    color: #d24d57;\r\n    margin-left: -15px;\r\n    margin-top: -10px;\r\n    position: absolute;\r\n\r\n}\r\n\r\n.garis-vertical{\r\n    border-left: 1px solid #ececec;\r\n    height: 430px;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n    margin-top: -29px;\r\n}\r\n\r\n.lupa{\r\n    font-size: 13px;\r\n    margin-top: -3px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginpage/loginpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"trv-tema-atas\">\r\n      <h2><strong> Masuk di Travinesia </strong></h2>\r\n      <div class=\"garis-vertical\"></div>\r\n      <div class=\"trv-punya-akun\">\r\n        <p> Belum Punya Akun Travinesia? Daftar <a role=\"button\" [routerLink]=\"['/Daftar']\">disini</a></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\"> Email </label>\r\n          <input id=\"email\" type=\"email\" class=\"form-control\" [(ngModel)]=\"loginUser.email\" name=\"email\" #newUserEmail=\"ngModel\" required> \r\n          <div *ngIf=\"newUserEmail.errors?.required && newUserEmail.touched\" class=\"alert trv-alert\">Email Tidak Boleh Kosong</div> \r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\"> Password </label>\r\n          <input id=\"password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"loginUser.password\" name=\"password\" #newUserPassword=\"ngModel\" required minlength=\"8\"> \r\n          <div *ngIf=\"newUserPassword.errors?.required && newUserPassword.touched\" class=\"alert trv-alert\">Password Tidak Boleh Kosong</div> \r\n          <div *ngIf=\"newUserPassword.errors?.minlength && newUserPassword.touched\" class=\"alert trv-alert\">Minimal 8 Karakter</div> \r\n        </div>\r\n        <div>\r\n          <div class=\"col-md-6\">\r\n            <input type=\"checkbox\" class=\"checkbox\">\r\n            <label class=\"label--checkbox\">\r\n              Ingat saya\r\n            </label>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <a role=\"button\" [routerLink]=\"['/lupaPassword']\">\r\n              <p class=\"lupa\">Lupa Password?</p>\r\n            </a>\r\n          </div> \r\n        </div>\r\n        <button class=\"btn btn-daftar pull-right\" type=\"submit\">Masuk</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"trv-atau\">\r\n          <p>Atau</p>\r\n        </div>\r\n      </div>  \r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <button class=\"btn btn-facebook\">Daftar Dengan Facebook</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <button class=\"btn btn-google\">Daftar Dengan Google</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/loginpage/loginpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginpageComponent = (function () {
    function LoginpageComponent() {
        this.loginUser = {
            email: '',
            password: '',
        };
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    return LoginpageComponent;
}());
LoginpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-loginpage',
        template: __webpack_require__("../../../../../src/app/loginpage/loginpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginpage/loginpage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginpageComponent);

//# sourceMappingURL=loginpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/lupa-kata-sandi/lupa-kata-sandi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head {\r\n    width: 1366px;\r\n    height: 75px;\r\n    background-color: #f5f5f5;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.wrap-head {\r\n    width: 181px;\r\n    margin: 12px auto;\r\n}\r\n\r\n.head-password {\r\n    width: 181px;\r\n    height: 44px;\r\n}\r\n\r\n.wrapper-lupa-sandi {\r\n    width: 463px;\r\n    height: 269px;\r\n    border-radius: 5px;\r\n    border: solid 1px #dddddd;\r\n    margin: 54px auto;\r\n    padding: 5px 33px 0px 33px;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), 0px 2px 5.9px 0.1px rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.head-kata-sandi {\r\n    font-size: 25.2px;\r\n    font-weight: bold;\r\n    color: #4a4a4a;\r\n    margin-bottom: 13px;\r\n}\r\n\r\n.content-kata-sandi {\r\n    font-size: 13px;\r\n    color: #4a4a4a;\r\n    margin-bottom: 29px;\r\n}\r\n\r\n.input-kata-sandi {\r\n    width: 396px;\r\n    height: 33px;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.input-kata-sandi:focus {\r\n    border-color: #dddddd;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #e91e63;\r\n}\r\n\r\n.input-kata-sandi::-webkit-input-placeholder {\r\n    text-align: center;\r\n    font-size: 13px;\r\n    color: rgba(158, 158, 158, 0.6);\r\n}\r\n\r\n.input-kata-sandi::-moz-placeholder {\r\n    text-align: center;\r\n    font-size: 13px;\r\n    color: rgba(158, 158, 158, 0.6);\r\n}\r\n\r\n.input-kata-sandi::-o-input-placeholder {\r\n    text-align: center;\r\n    font-size: 13px;\r\n    color: rgba(158, 158, 158, 0.6);\r\n}\r\n\r\n.btn-kata-sandi {\r\n    width: 167px;\r\n    height: 35px;\r\n    border-radius: 3px;\r\n    margin-top: 34px;\r\n    background-color: #8e3caa;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n}\r\n\r\n.disini {\r\n    color: #8e3caa;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lupa-kata-sandi/lupa-kata-sandi.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"head\">\r\n    <div class=\"wrap-head\">\r\n        <a [routerLink]=\"['']\">\r\n            <img src=\"../assets/img/travinesia-logo.png\" class=\"head-password\">\r\n        </a>\r\n    </div>\r\n</header>\r\n\r\n<div class=\"wrapper-lupa-sandi text-center\">\r\n    <h2 class=\"head-kata-sandi\">Lupa Password ?</h2>\r\n    <p class=\"content-kata-sandi\">Masukkan email login Anda, Travinesia akan mengirimkan email dan tautan untuk reset password Anda</p>\r\n    <form (submit)=\"onSubmitEmail(isEdit)\">\r\n        <input type=\"text\" placeholder=\"Email Anda\" class=\"input-kata-sandi\" [(ngModel)]=\"user.email\" name=\"email\">\r\n        <a class=\"btn btn-kata-sandi\">Ubah Password</a>\r\n    </form>\r\n</div>\r\n\r\n<p class=\"text-center\">Masuk Travinesia, <a class=\"disini\" role=\"button\" [routerLink]=\"['/LoginPage']\">disini</a></p>"

/***/ }),

/***/ "../../../../../src/app/lupa-kata-sandi/lupa-kata-sandi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LupaKataSandiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LupaKataSandiComponent = (function () {
    function LupaKataSandiComponent(appService) {
        this.appService = appService;
        this.user = {
            email: '',
            password: ''
        };
        this.isEdit = false;
    }
    LupaKataSandiComponent.prototype.onSubmitEmail = function (isEdit) {
    };
    LupaKataSandiComponent.prototype.onForgot = function (user) {
        this.isEdit = true;
        this.user = user;
    };
    LupaKataSandiComponent.prototype.ngOnInit = function () {
    };
    return LupaKataSandiComponent;
}());
LupaKataSandiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-lupa-kata-sandi',
        template: __webpack_require__("../../../../../src/app/lupa-kata-sandi/lupa-kata-sandi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lupa-kata-sandi/lupa-kata-sandi.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], LupaKataSandiComponent);

var _a;
//# sourceMappingURL=lupa-kata-sandi.component.js.map

/***/ }),

/***/ "../../../../../src/app/pemesanan/pemesanan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* content */\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li.active>a:focus,\r\n.nav-tabs>li.active>a:hover {\r\n    border-width: 0;\r\n}\r\n\r\n.nav-tabs {\r\n    border-bottom: 0px solid #ddd;\r\n}\r\n\r\n.nav-tabs>li>a {\r\n    border: none;\r\n    color: #666;\r\n}\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li>a:hover {\r\n    border: none;\r\n    color: #ab47bc !important;\r\n    background: transparent;\r\n}\r\n\r\n.nav-tabs>li>a::after {\r\n    content: \"\";\r\n    background: #ab47bc;\r\n    height: 2px;\r\n    position: absolute;\r\n    width: 91%;\r\n    left: 9px;\r\n    bottom: -1px;\r\n    transition: all 250ms ease 0s;\r\n    transform: scale(0);\r\n}\r\n\r\n.nav-tabs>li.active>a::after,\r\n.nav-tabs>li:hover>a::after {\r\n    transform: scale(1);\r\n}\r\n\r\n.tab-nav>li>a::after {\r\n    background: #ab47bc none repeat scroll 0% 0%;\r\n    color: #fff;\r\n}\r\n\r\n.tab-pane {\r\n    padding: 15px;\r\n}\r\n\r\n.tab-content {\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    border: solid 1px #e0e0e0;\r\n    font-weight: bold;\r\n}\r\n\r\n.card {\r\n    background: transparent;\r\n    width: 100%;\r\n}\r\n\r\n.box-wrap-pemesanan {\r\n    border-radius: 3px;\r\n    width: 100%;\r\n    height: 225px;\r\n    margin-bottom: 15px;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.head-box {\r\n    margin-left: -1px;\r\n    margin-top: -1px;\r\n    width: 100.2%;\r\n    height: 36px;\r\n    padding-right: 14px;\r\n    background-color: #f5f5f5;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.tittle-box {\r\n    font-size: 13px;\r\n    letter-spacing: normal;\r\n    line-height: 12px;\r\n    padding: 10px 0 0 14px;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    overflow: auto;\r\n}\r\n\r\n.tittle-left {\r\n    display: inline;\r\n}\r\n\r\n.tittle-right {\r\n    float: right;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.status-green {\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    color: #4bae4f;\r\n}\r\n\r\n.content-box {\r\n    padding: 13px;\r\n    overflow: auto;\r\n    position: relative;\r\n}\r\n\r\n.img-trip {\r\n    width: 165px;\r\n    height: 155px;\r\n    float: left;\r\n}\r\n\r\n.list-content {\r\n    margin-bottom: 8px;\r\n    margin-left: 180px;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.semicolon-margin {\r\n    position: absolute;\r\n    left: 335px;\r\n}\r\n\r\n.content-value {\r\n    position: absolute;\r\n    left: 370px;\r\n    text-align: left;\r\n}\r\n\r\n.detail-pack {\r\n    position: absolute;\r\n    right: 23px;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #ab47bc;\r\n}\r\n\r\n.detail-pack:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-trv-pemesanan {\r\n    display: inline-block;\r\n    width: 111px;\r\n    height: 33px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #ab47bc;\r\n    color: #ab47bc;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    margin-left: 18px;\r\n    margin-top: 9px;\r\n}\r\n\r\n\r\n/* end content */\r\n\r\n@media (min-width:450px) and (max-width: 992px) {\r\n    .tab-content {\r\n        padding: 0px 41px 0px 230px;\r\n        width: 565px;\r\n        height: 384px;\r\n        border-radius: 3px;\r\n        border: solid 1px #e0e0e0;\r\n        line-height: 384px;\r\n        font-weight: bold;\r\n    }\r\n}\r\n\r\n@media (max-width:450px) {\r\n    .card {\r\n        background: transparent;\r\n        margin-left: 15px;\r\n    }\r\n    .tab-content {\r\n        padding: 0px;\r\n        width: 330px;\r\n        height: 384px;\r\n        border-radius: 3px;\r\n        border: solid 1px #e0e0e0;\r\n        line-height: 384px;\r\n        font-weight: bold;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pemesanan/pemesanan.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Nav tabs -->\r\n<div class=\"card\">\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n        <li role=\"presentation\" class=\"active\"><a href=\"#status-pembayaran\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Status Pembayaran</a></li>\r\n        <li role=\"presentation\"><a href=\"#daftar-transaksi\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Daftar Transaksi</a></li>\r\n    </ul>\r\n\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"status-pembayaran\">\r\n            <div class=\"box-wrap-pemesanan\">\r\n                <div class=\"head-box\">\r\n                    <div class=\"tittle-box\">\r\n                        <p class=\"tittle-left\">Nomor Pemesanan : <span class=\"bold\">92000-10001</span> </p>\r\n                        <p class=\"tittle-right\">Status : <span class=\"status-green\">Dibayar</span> </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"content-box\">\r\n                    <img src=\"./assets/img/6.jpg\" class=\"img-trip\">\r\n                    <a class=\"detail-pack\" role=\"button\" [routerLink]=\"['/DetailPaket']\"> Detil Paket </a>\r\n                    <p class=\"list-content\">Nama Trip <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Pulau Harapan Kepulauan Seribu</span> </p>\r\n                    <p class=\"list-content\">Tanggal Berangkat <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Sabtu, 14 Februari 2018</span> </p>\r\n                    <p class=\"list-content\">Total <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Rp 3.600.000</span> </p>\r\n                    <p class=\"list-content\">Metode Pembayaran <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Transfer (Bank Mandiri) </span> </p>\r\n                    <p class=\"list-content\">Nama Pemesan <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Ney Nack DC</span> </p>\r\n\r\n                    <button class=\"btn-trv-pemesanan\"> Batalkan Trip</button>\r\n                    <button class=\"btn-trv-pemesanan\"> Kirim Pesan</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"box-wrap-pemesanan\">\r\n                <div class=\"head-box\">\r\n                    <div class=\"tittle-box\">\r\n                        <p class=\"tittle-left\">Nomor Pemesanan : <span class=\"bold\">92000-10001</span> </p>\r\n                        <p class=\"tittle-right\">Status : <span class=\"status-green\">Dibayar</span> </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"content-box\">\r\n                    <img src=\"./assets/img/6.jpg\" class=\"img-trip\">\r\n                    <a class=\"detail-pack\" role=\"button\"> Detil Paket </a>\r\n                    <p class=\"list-content\">Nama Trip <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Pulau Harapan Kepulauan Seribu</span> </p>\r\n                    <p class=\"list-content\">Tanggal Berangkat <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Sabtu, 14 Februari 2018</span> </p>\r\n                    <p class=\"list-content\">Total <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Rp 3.600.000</span> </p>\r\n                    <p class=\"list-content\">Metode Pembayaran <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Transfer (Bank Mandiri) </span> </p>\r\n                    <p class=\"list-content\">Nama Pemesan <span class=\"semicolon-margin\">:</span> <span class=\"content-value\"> Ney Nack DC</span> </p>\r\n\r\n                    <button class=\"btn-trv-pemesanan\"> Batalkan Trip</button>\r\n                    <button class=\"btn-trv-pemesanan\"> Kirim Pesan</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"daftar-transaksi\">Belum ada Transaksi</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pemesanan/pemesanan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PemesananComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PemesananComponent = (function () {
    function PemesananComponent(routeActive) {
        this.routeActive = routeActive;
    }
    PemesananComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeActive.queryParams.filter(function (params) { return params.order; }).subscribe(function (params) {
            console.log(params); // {order: "popular"}
            _this.order = params.order;
            console.log(_this.order); // popular
        });
    };
    return PemesananComponent;
}());
PemesananComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pemesanan',
        template: __webpack_require__("../../../../../src/app/pemesanan/pemesanan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pemesanan/pemesanan.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], PemesananComponent);

var _a;
//# sourceMappingURL=pemesanan.component.js.map

/***/ }),

/***/ "../../../../../src/app/proses-bayar/proses-bayar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    width: 959px;\r\n}\r\n\r\n.panel-default:hover{\r\n    box-shadow: 0px 2px 5.9px 0.1px rgba(233, 30, 99, 0.5);\r\n}\r\n\r\n.tahapan-proses{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-left: 15px;\r\n    margin-bottom: 30px;\r\n}\r\n.no-proses1{\r\n    width: 24px;\r\n    height: 24px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    padding-left: 6px;\r\n    margin-top: 8px;\r\n    margin-right: 20px;\r\n    margin-left: 290px;\r\n    \r\n}\r\n\r\n\r\n.no-proses1 p{\r\n    line-height: 24px;\r\n    font-size: 20px;\r\n    font-family: sans-serif;\r\n    color: #f5f5f5;\r\n}\r\n\r\n.no-proses2{\r\n    width: 24px;\r\n    height: 24px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    padding-left: 6.5px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.no-proses2 p{\r\n    line-height: 24px;\r\n    font-size: 20px;\r\n    font-family: sans-serif;\r\n    color: #9c27b0;\r\n}\r\n.tahapan-proses1{\r\n    width: 449px;\r\n    height: 68px;\r\n    background-color: #f5f5f5;\r\n    padding-top: 15px;\r\n    padding-right: 30px;\r\n    border-top-left-radius: 10px;\r\n\r\n}\r\n\r\n.proses1{\r\n    font-size: 30px;\r\n    font-family: sans-serif;\r\n    color: white;\r\n    margin-top: -32px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.tahapan-proses2{\r\n    width: 449px;\r\n    height: 68px;\r\n    background-color: #9c27b0;\r\n    padding-top: 15px;\r\n    padding-left: 30px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.proses2{\r\n    font-size: 30px;\r\n    font-family: sans-serif;\r\n    color: white;\r\n    margin-top: -32px;\r\n    margin-left: 40px;\r\n}\r\n\r\n.trv-notice{\r\n    width: 895px;\r\n    margin-left: 17px;\r\n    height: 52px;\r\n    border-radius: 3px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.txt-notice{\r\n    width: 412px;\r\n    height: 13px;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    line-height: 3.5;\r\n    letter-spacing: normal;\r\n    margin-left: 52px;\r\n    color: #ab47bc;\r\n    margin: auto;\r\n    display: block;\r\n}\r\n\r\n.metode-bayar{\r\n    width: 584px;\r\n    height: 323px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n    margin-top: 30px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.batas-waktu{\r\n    margin-top: 30px;\r\n    width: 274px;\r\n    height: 36px;\r\n    mix-blend-mode: undefined;\r\n    border-radius: 3px;\r\n    border: solid 1px #dddddd;\r\n    padding: 7px;\r\n}\r\n\r\n.batas-waktu p{\r\n    margin-left: 30px;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n}\r\n\r\n.glyphicon-time{\r\n    margin-right: 5px;\r\n}\r\n\r\n.waktu{\r\n    font-weight: bold;\r\n    color: #e91e63;\r\n}\r\n\r\n.body-metode{\r\n    padding: 0;\r\n}\r\n\r\n.titik-dua{\r\n    position: absolute;\r\n    left: 199px;\r\n}\r\n\r\n.nominal{\r\n    position: relative;\r\n    left: -20px;\r\n    -ms-flex-item-align: right;\r\n        -ms-grid-row-align: right;\r\n        align-self: right;\r\n    font-size: 15px;\r\n}\r\n\r\nhr{\r\n    width: 520px;\r\n}\r\n.detail span.jumlah{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    margin-left:  5px;\r\n}\r\n\r\n.detail p{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.total{\r\n    margin-left: 20px;\r\n}\r\n\r\n.total p{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.total span{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n.no-pesanan{\r\n    margin-top: 22px;\r\n}\r\n\r\n.btn-batal{\r\n    width: 240px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n    background-color: #ffffff;\r\n    color: #9c27b0;\r\n    margin-left:72px;\r\n}\r\n.btn-simpan{\r\n    width: 273px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    background-color: #e91e63;\r\n    color: white;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.no-resi{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.pesan{\r\n    font-family: sans-serif;\r\n    font-size: 11px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.salin{\r\n    font-size: 11px;\r\n    color: #9c27b0;\r\n    font-weight: normal;\r\n}\r\n\r\n.detail-pesanan{\r\n    background-color: #ffffff;\r\n\r\n}\r\n\r\n.glyphicon-briefcase{\r\n    margin-right: 10px;\r\n}\r\n\r\n.total-bayar{\r\n    display: inline;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n}\r\n\r\n.tanggal{\r\n    margin-left: 20px;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n}\r\n\r\n.pemesan{\r\n    margin-left: 20px;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    display: inline;\r\n}\r\n\r\n.jumlah-orang{\r\n    margin-left: 20px;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n}\r\n\r\n.panel-heading p{\r\n    display: inline;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.panel-heading{\r\n    background-color: #ebebeb;\r\n}\r\n\r\n.gambar{\r\n    width: 127px;\r\n    height: 127px;\r\n    border-radius: 3px;\r\n    border: solid 1px #e91e63;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}\r\n\r\n.gambar img{\r\n    width: 120px;\r\n    height: 45px;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.ul-transver{\r\n    list-style-type: none;\r\n    margin-left: -10px;\r\n\r\n}\r\n\r\n.transver{\r\n    float: left;\r\n    margin-right: 5px;\r\n    border-radius: 3px;\r\n    border: solid 1px #e91e63;\r\n    padding: 46px 9px 46px 9px;\r\n    width: 127px;\r\n    height: 127px;\r\n}\r\n\r\nli img{\r\n    width: 109px;\r\n    height: 35px;\r\n    \r\n}\r\n\r\nli a{\r\n    color: #4a4a4a;\r\n}\r\n\r\n.heading-no{\r\n    background-color: #ab47bc;\r\n    color: white;\r\n}\r\n\r\n.nav-tabs>li.active>a{\r\n    background-color: #ebebeb;\r\n    color: #ab47bc;\r\n    font-weight: bold;\r\n    border-radius: 0px;\r\n}\r\n\r\n.pilih-bank{\r\n    padding: 20px 0 0 30px;\r\n    font-size: 15px;\r\n}\r\n\r\n.info-no{\r\n    padding: 20px 0 0 30px;\r\n    position: relative;\r\n}\r\n\r\n.info-no p{\r\n    font-size: 13px;\r\n    color: #9e9e9e;\r\n    position: absolute;\r\n}\r\n\r\n.panel-footer{\r\n    padding: 15px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proses-bayar/proses-bayar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"tahapan-proses\">\n    <div class=\"tahapan-proses1\">\n      <div class=\"no-proses1\">\n        <p>1</p>\n      </div>\n      <p class=\"proses1 pull-right\">Pesan</p>\n    </div>\n    <div class=\"tahapan-proses2\">\n      <div class=\"no-proses2\">\n        <p>2</p>\n      </div>\n      <p class=\"proses2\">\n        Bayar\n      </p>\n    </div>\n  </div>\n  <div class=\"trv-notice\">\n    <span class=\"txt-notice\"> Pesanan telah disimpan. Silahkan <b>Pilih metode pembayaran</b></span>\n  </div>\n  <div class=\"col-md-8\">\n    <div>\n      <div class=\"panel panel-default metode-bayar\">\n        <div class=\"panel-heading\">\n          <p>Pilih Metode Pembayaran</p>\n        </div>\n        <div class=\"panel-body body-metode\">\n          <div class=\"card\">\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n              <li role=\"presentation\" class=\"active\"><a href=\"#transfer\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Transfer</a></li>\n              <li role=\"presentation\"><a href=\"#kartu-kredit\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Kartu Kredit</a></li>\n              <li role=\"presentation\"><a href=\"#indomart\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Indomart</a></li>\n              <li role=\"presentation\"><a href=\"#alfamart\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Alfamart</a></li>\n            </ul>\n            <!-- Tab panes -->\n            <div class=\"tab-content\">\n\n              <p class=\"pilih-bank\">Pilih Bank:</p>\n              <div role=\"tabpanel\" class=\"tab-pane active\" id=\"transfer\">\n                <ul class=\"ul-transver\">\n                  <li class=\"transver\"><img src=\"assets/img/bca.png\"></li>\n                  <li class=\"transver\"><img src=\"assets/img/bca.png\"></li>\n                  <li class=\"transver\"><img src=\"assets/img/bca.png\"></li>\n                  <li class=\"transver\"><img src=\"assets/img/bca.png\"></li>\n                </ul>\n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane\" id=\"kartu-kredit\">\n                \n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane\" id=\"indomart\">\n                \n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane\" id=\"alfamart\">\n                <div class=\"gambar\">\n                  <div class=\"ceklist\">\n\n                  </div>\n                  <img src=\"assets/img/alfa.png\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"info-no\">\n            <p>Nomer rekening tujuan muncul setelah menekan tombol Bayar Dengan Transfer</p>\n          </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <p>Rincian Harga</p>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"detail\">\n              <p>Harga Paket<span class=\"jumlah\">x 10</span><span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 3 000 000</span></p>\n              <p>Diskon atau Promo<span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 3 000 000</span></p>\n              <p>Kode Unik<span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 300000</span></p>\n              <p>Asuransi<span class=\"jumlah\">x 10</span><span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 4002004990</span></p>\n              <p>Biaya Admin<span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 4002004990</span></p>\n          </div>\n          <hr>\n          <div class=\"total\">\n            <p class=\"total-bayar\">Total Harga<span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 3 000 000</span></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div>\n      <button type=\"button\" class=\"btn btn-batal\">Kembali ke Halaman Pemesanan</button>\n      <button type=\"button\" class=\"btn btn-simpan\">Bayar dengan <span>Alfamart</span></button>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"batas-waktu\">\n      <p><span class=\"glyphicon glyphicon-time\"></span>Selesaikan dalam : <span class=\"waktu\">1:12:13</span></p>\n    </div>\n    <div>\n      <div class=\"panel panel-default no-pesanan\">\n        <div class=\"panel-heading heading-no\">\n          <p>Nomor Pesanan</p>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"no\">\n            <p class=\"no-resi\">90090-0987789 <span class=\"salin pull-right\">Salin</span></p>\n            <p class=\"pesan\">Nomor Pesanan digunakan untuk mewakili paket trip yang dipesan</p>\n          </div>\n        </div>\n        <div class=\"panel-footer detail-pesanan\">\n          <p class=\"total-bayar\"><span class=\"glyphicon glyphicon-briefcase\"></span>Pulau Harapan</p>\n          <p class=\"tanggal\"> 14-16 November 2018</p>\n          <p class=\"pemesan\">Jumlah Orang : <span>Irfan Harianto</span></p>\n          <p class=\"jumlah-orang\">Jumlah yang dipesan : <span>10 Orang</span></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/proses-bayar/proses-bayar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProsesBayarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProsesBayarComponent = (function () {
    function ProsesBayarComponent() {
    }
    ProsesBayarComponent.prototype.ngOnInit = function () {
    };
    return ProsesBayarComponent;
}());
ProsesBayarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-proses-bayar',
        template: __webpack_require__("../../../../../src/app/proses-bayar/proses-bayar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/proses-bayar/proses-bayar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProsesBayarComponent);

//# sourceMappingURL=proses-bayar.component.js.map

/***/ }),

/***/ "../../../../../src/app/proses-bayar2/proses-bayar2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    width: 959px;\r\n}\r\n\r\n.tahapan-proses{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-left: 15px;\r\n    margin-bottom: 30px;\r\n}\r\n.no-proses1{\r\n    width: 24px;\r\n    height: 24px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    padding-left: 6px;\r\n    margin-top: 8px;\r\n    margin-right: 20px;\r\n    margin-left: 290px;\r\n    \r\n}\r\n\r\n.no-proses1 p{\r\n    line-height: 24px;\r\n    font-size: 20px;\r\n    font-family: sans-serif;\r\n    color: #f5f5f5;\r\n}\r\n\r\n.no-proses2{\r\n    width: 24px;\r\n    height: 24px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    padding-left: 6.5px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.no-proses2 p{\r\n    line-height: 24px;\r\n    font-size: 20px;\r\n    font-family: sans-serif;\r\n    color: #9c27b0;\r\n}\r\n.tahapan-proses1{\r\n    width: 449px;\r\n    height: 68px;\r\n    background-color: #f5f5f5;\r\n    padding-top: 15px;\r\n    padding-right: 30px;\r\n    border-top-left-radius: 10px;\r\n\r\n}\r\n\r\n.proses1{\r\n    font-size: 30px;\r\n    font-family: sans-serif;\r\n    color: white;\r\n    margin-top: -32px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.tahapan-proses2{\r\n    width: 449px;\r\n    height: 68px;\r\n    background-color: #9c27b0;\r\n    padding-top: 15px;\r\n    padding-left: 30px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.proses2{\r\n    font-size: 30px;\r\n    font-family: sans-serif;\r\n    color: white;\r\n    margin-top: -32px;\r\n    margin-left: 40px;\r\n}\r\n\r\n.batas{\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: #4a4a4a;\r\n    margin-bottom: 0;\r\n    \r\n}\r\n\r\n.perintah{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.waktu{\r\n    font-size: 50px;\r\n    font-family: sans-serif;\r\n    color: #4a4a4a;\r\n    margin-top: 35px;\r\n}\r\n\r\n.panel-transfer{\r\n    width: 577px;\r\n    margin: auto;\r\n\r\n}\r\n\r\n.panel-heading p{\r\n    display: inline;\r\n}\r\n\r\n.transfer{\r\n    margin-bottom: 2px;\r\n    margin-top: 60px;\r\n}\r\n.panel-heading{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    color: #4e4e4e;\r\n}\r\n.no-resi{\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: #9c27b0;\r\n}\r\n\r\n.pesan{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.salin{\r\n    color:#9c27b0;\r\n}\r\n\r\n.panel-footer{\r\n    background-color: white;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}\r\n.panel-footer img{\r\n    width: 109px;\r\n    height: 35px;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.total{\r\n    width: 577px;\r\n    height: 56px;\r\n    border-radius: 3px;\r\n    border: solid 1px #dddddd;\r\n    padding: 19px 32px 0 32px;\r\n    background-color: white;\r\n}\r\n\r\n.total p{\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.titik-dua{\r\n    position: relative;\r\n    left: 50px;\r\n}\r\n\r\n.nominal{\r\n    font-size: 25px;\r\n    margin-top: -7px;\r\n}\r\n\r\n.code{\r\n    color: #e91e63;\r\n}\r\n\r\n.btn-bayar{\r\n    width: 577px;\r\n    height: 46px;\r\n    border-radius: 2.4px;\r\n    background-color: #e91e63;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n.notice{\r\n    width: 262px;\r\n    height: 32px;\r\n    border-radius: 2px;\r\n    box-shadow: 0px 7px 9.4px 0.6px rgba(0, 0, 0, 0.24), 0px 3px 12.7px 0.3px rgba(0, 0, 0, 0.16);\r\n    float: right;\r\n    margin-right:35px;\r\n    margin-top: -8px;\r\n    background-color: white; \r\n}\r\n\r\n.notice p{\r\n    font-family: sans-serif;\r\n    font-size: 11px;\r\n    color: #4a4a4a;\r\n    padding: 10px 20px 0 20px;\r\n}\r\n\r\n.perhatikan{\r\n    font-weight: bold;\r\n    color: #e91e63;\r\n}\r\n/* checkbox */\r\n\r\n\r\n.bungkus-checkbox{\r\n    margin-top: 50px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.label--checkbox {\r\n    position: absolute;\r\n    margin-left: 3px;\r\n    font-family: sans-serif;\r\n    font-size : 11px;\r\n    line-height: 158%;\r\n    margin-top: -5px;\r\n    font-weight: normal;\r\n    width: 553px;\r\n    margin-right: 10px;\r\n}\r\n  \r\n.checkbox {\r\n    position: relative;\r\n    top: -0.375rem;\r\n    margin: 0 1rem 0 0;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n \r\n.checkbox:before {\r\n    transition: all 0.3s ease-in-out;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: 2;\r\n    width: 13px;\r\n    height: 13px;\r\n    border: 2px solid #dddddd;\r\n}\r\n \r\n.checkbox:checked:before {\r\n    transform: rotate(-45deg);\r\n    height: 0.7rem;\r\n    border-color: purple;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n}\r\n \r\n.checkbox:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -0.125rem;\r\n    left: 0;\r\n    width: 1.3rem;\r\n    height: 1.4rem;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.panel-heading{\r\n    background-color: #ebebeb;\r\n}\r\n\r\n.transfer{\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proses-bayar2/proses-bayar2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"tahapan-proses\">\n    <div class=\"tahapan-proses1\">\n      <div class=\"no-proses1\">\n        <p>1</p>\n      </div>\n      <p class=\"proses1 pull-right\">Pesan</p>\n    </div>\n    <div class=\"tahapan-proses2\">\n      <div class=\"no-proses2\">\n        <p>2</p>\n      </div>\n      <p class=\"proses2\">\n        Bayar\n      </p>\n    </div>\n  </div>\n  <div class=\"batas-pemesanan\">\n    <p class=\"text-center batas\">Batas Pembayaran</p>\n    <p class=\"text-center perintah\">Silahkan segera selesaikan pembayaran sebelum batas waktu habis</p>\n  </div>\n  <div>\n    <p class=\"text-center waktu\">02 : 03 : 58</p>\n  </div>\n  <div class=\"panel-transfer\">\n    <div class=\"panel panel-default transfer\">\n      <div class=\"panel-heading\">\n        <p class=\"transfer\">Transfer ke : <span class=\"salin pull-right\">Salin Nomor Rekening</span></p>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"no\">\n          <p class=\"text-center no-resi\">9009 0987 7892 13268</p>\n          <p class=\"text-center pesan\">an. PT Travinesia</p>\n        </div>\n      </div>\n      <div class=\"panel-footer detail-pesanan\">\n        <img src=\"assets/img/bca.png\">    \n      </div>\n    </div>\n\n    <div class=\"total\">\n      <p class=\"total-bayar\">Total Harga<span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 3.000.<span class=\"code\">000</span></span></p>\n    </div>\n    <div class=\"notice\">\n      <p><span class=\"perhatikan\">Perhatikan !</span> Transfer hingga 3 digit terakhir</p>      \n    </div>\n\n    <div class=\"bungkus-checkbox\">\n      <input type=\"checkbox\" class=\"checkbox\">\n      <label class=\"label--checkbox\">\n        Dengan menekan tombol dibawah, saya mengkonfirmasi telah melakukan pembayaran sesuai dengan total harga yang dicantumkan oleh Travinesia\n      </label>\n    </div>\n    <div>\n      <button type=\"button\" class=\"btn btn-bayar\">Kembali ke Halaman Pemesanan</button>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/proses-bayar2/proses-bayar2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProsesBayar2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProsesBayar2Component = (function () {
    function ProsesBayar2Component() {
    }
    ProsesBayar2Component.prototype.ngOnInit = function () {
    };
    return ProsesBayar2Component;
}());
ProsesBayar2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-proses-bayar2',
        template: __webpack_require__("../../../../../src/app/proses-bayar2/proses-bayar2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/proses-bayar2/proses-bayar2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProsesBayar2Component);

//# sourceMappingURL=proses-bayar2.component.js.map

/***/ }),

/***/ "../../../../../src/app/proses-pemesanan/proses-pemesanan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    width: 959px;\r\n}\r\n\r\n.panel-default:hover{\r\n    box-shadow: 0px 2px 5.9px 0.1px rgba(233, 30, 99, 0.5);\r\n}\r\n\r\n.panel-default:visited{\r\n    box-shadow: 0px 2px 5.9px 0.1px rgba(233, 30, 99, 0.5);\r\n}\r\n\r\n.tahapan-proses{\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-left: 15px;\r\n    margin-bottom: 64px;\r\n}\r\n.no-proses1{\r\n    width: 24px;\r\n    height: 24px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    padding-left: 6px;\r\n    margin-top: 8px;\r\n    margin-right: 20px;\r\n    margin-left: 290px;\r\n    \r\n}\r\n\r\n.no-proses1 p{\r\n    line-height: 24px;\r\n    font-size: 20px;\r\n    font-family: sans-serif;\r\n    color: #9c27b0;\r\n}\r\n\r\n.no-proses2{\r\n    width: 24px;\r\n    height: 24px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    padding-left: 6px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.no-proses2 p{\r\n    line-height: 24px;\r\n    font-size: 20px;\r\n    font-family: sans-serif;\r\n    color: #f5f5f5;\r\n}\r\n.tahapan-proses1{\r\n    width: 449px;\r\n    height: 68px;\r\n    background-color: #9c27b0;\r\n    padding-top: 15px;\r\n    padding-right: 30px;\r\n    border-top-left-radius: 10px;\r\n\r\n}\r\n\r\n.proses1{\r\n    font-size: 30px;\r\n    font-family: sans-serif;\r\n    color: white;\r\n    margin-top: -32px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.tahapan-proses2{\r\n    width: 449px;\r\n    height: 68px;\r\n    background-color: #f5f5f5;\r\n    padding-top: 15px;\r\n    padding-left: 30px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.proses2{\r\n    font-size: 30px;\r\n    font-family: sans-serif;\r\n    color: white;\r\n    margin-top: -32px;\r\n    margin-left: 40px;\r\n}\r\n\r\n.isi-tahapan-pesanan{\r\n    width: 264px;\r\n    height: auto;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), 0px 2px 5.9px 0.1px rgba(0, 0, 0, 0.16);\r\n    border: solid 1px #dddddd;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.isi-tahapan-title{\r\n    width: 264px;\r\n    height: 42px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    margin-left: -1px;\r\n    background-color: #9c27b0;\r\n    \r\n}\r\n\r\n.isi-tahapan-title p{\r\n    color: white;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    margin-left: 20px;\r\n    padding-top: 14px; \r\n}\r\n\r\n.gambar{\r\n    width: 264px;\r\n    height: 231px;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    /* align-items: center; */\r\n    margin-left: -1px;\r\n}\r\n\r\n.gambar img{\r\n    width: 264px;\r\n    height: auto;\r\n    display: block;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n\r\n}\r\n\r\n.detail-pesanan{\r\n    padding-left: 23px;\r\n    margin-top: 19px;\r\n    padding-right: 23px;\r\n}\r\n\r\n.isi-pesanan-nama-pulau p{\r\n    font-size: 15px;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.isi-pesanan-waktu{\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.isi-pesanan-waktu.waktu{\r\n    font-family: sans-serif;\r\n    font-size: 13.4px;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.isi-pesanan-travel.travel{\r\n    font-family: sans-serif;\r\n    font-size: 13.4px;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.isi-detail{\r\n    margin-top: 28px;\r\n    width: 271px;\r\n}\r\n\r\n.panel-detail{\r\n    width: 264px;\r\n}\r\n\r\n.panel-heading p{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    color: #4a4a4a;\r\n    margin-bottom: 0px;\r\n    font-weight: bold;\r\n    padding-top: 1px;\r\n    padding-left: 2px;\r\n}\r\n\r\n.panel-body span{\r\n    font-size: 13px;\r\n    font-family: sans-serif;\r\n}\r\n.detail-pelaksanaan p{\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n.detail-jumlah p{\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n.detail-keterangan p{\r\n    font-family: sans-serif;\r\n    font-size: 11px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.form-data-pemesan{\r\n    margin-left: 34px;\r\n    margin-right: 42px;\r\n    border-radius:3px;\r\n    \r\n}\r\n\r\n.label-form-pemesanan{\r\n    margin-top: 10px;\r\n    font-weight: normal;\r\n}\r\n\r\n.form-email{\r\n    width: 225px;\r\n    height: 34px;\r\n    margin-top: 19px;\r\n}\r\n\r\n.form-telepon{\r\n    width: 225px;\r\n    height: 34px;\r\n    margin-top: -34px;\r\n}\r\n\r\n.ubah-data p{\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    color: #9c27b0;\r\n    font-weight: bold;\r\n    margin-top: 60px;\r\n    margin-left: 35px;\r\n}\r\n\r\ntextarea{\r\n    width: 508px;\r\n    height: 170px;\r\n    padding-left: 0;\r\n    margin-left: -10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n.keterangan{\r\n    margin-left: 20px;\r\n}\r\n\r\n.dana{\r\n    margin-right: 20px;\r\n}\r\n\r\n.form-kode-promo{\r\n    display: inline;\r\n}\r\n\r\n\r\n.form-kode-promo input{\r\n    width: 234px;\r\n    height: 26px;\r\n    display: inline-block;\r\n    margin-left: 30px;\r\n    border-radius: 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n.form-kode-promo label{\r\n    margin-left: 20px;\r\n}\r\n.btn-kode{\r\n    width: 113px;\r\n    height: 26px;\r\n    background-color: white;\r\n    border-color: #ccc;\r\n    color: #9c27b0;\r\n    padding-top: 5px;\r\n    padding-left: 10px;\r\n    font-size: 11px;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    margin-left: -4px;\r\n    margin-top: -4px;\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.pembayaran{\r\n    width: 588px;\r\n    height: 41px;\r\n    mix-blend-mode: undefined;\r\n    border-radius: 2.4px;\r\n    background-color: #e91e63;\r\n    padding-top: 12px;\r\n}\r\n\r\n.pembayaran p{\r\n    color:white;\r\n    font-family: sans-serif;\r\n    text-align: center;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n.titik-dua{\r\n    position: absolute;\r\n    left: 177px;\r\n}\r\n\r\n.nominal{\r\n    position: relative;\r\n    left: -20px;\r\n    -ms-flex-item-align: right;\r\n        -ms-grid-row-align: right;\r\n        align-self: right;\r\n    font-size: 15px;\r\n}\r\n\r\nhr{\r\n    width: 520px;\r\n}\r\n.detail span.jumlah{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    margin-left:  5px;\r\n}\r\n\r\n.detail span{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.total{\r\n    margin-left: 20px;\r\n}\r\n\r\n.total p{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.total span{\r\n    margin-left: 20px;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n}\r\n\r\n/* checkbox */\r\n\r\n.cbx{\r\n    padding-top: 12px;\r\n}\r\n.cbx label{\r\n    font-weight: bold;\r\n}\r\n\r\n.label--checkbox {\r\n    position: absolute;\r\n    margin-left: 3px;\r\n    font-family: sans-serif;\r\n    font-size : 13px;\r\n    font-weight: bold;\r\n    line-height: 158%;\r\n    margin-top: -5px;\r\n    font-weight: normal;\r\n    width: 427px;\r\n    margin-right: 10px;\r\n}\r\n  \r\n.checkbox {\r\n    position: relative;\r\n    top: -0.375rem;\r\n    margin: 0 1rem 0 0;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n \r\n.checkbox:before {\r\n    transition: all 0.3s ease-in-out;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: 2;\r\n    width: 13px;\r\n    height: 13px;\r\n    border: 2px solid #dddddd;\r\n}\r\n \r\n.checkbox:checked:before {\r\n    transform: rotate(-45deg);\r\n    height: 0.7rem;\r\n    border-color: purple;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n}\r\n \r\n.checkbox:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -0.125rem;\r\n    left: 0;\r\n    width: 1.3rem;\r\n    height: 1.4rem;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-control{\r\n    resize: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proses-pemesanan/proses-pemesanan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"tahapan-proses\">\n    <div class=\"tahapan-proses1\">\n      <div class=\"no-proses1\">\n        <p>1</p>\n      </div>\n      <p class=\"proses1 pull-right\">Pesan</p>\n    </div>\n    <div class=\"tahapan-proses2\">\n      <div class=\"no-proses2\">\n        <p>2</p>\n      </div>\n      <p class=\"proses2\">\n        Bayar\n      </p>\n    </div>\n  </div>\n  <div class=\"isi-tahapan\">\n    <div class=\"col-md-4\">\n      <div class=\"isi-tahapan-pesanan\">\n        <div class=\"isi-tahapan-title\">\n          <p>Trip Pesanan Anda</p>\n        </div>\n        <div class=\"gambar\">\n          <img src=\"assets/img/edit.jpg\" align=\"center\">\n        </div>\n        <div class=\"detail-pesanan\">\n          <div class=\"isi-pesanan-star\">\n            <span class=\"icon-star\"></span>\n            <span class=\"icon-star\"></span>\n            <span class=\"icon-star\"></span>\n            <span class=\"icon-star\"></span>\n            <span class=\"icon-star\"></span>\n          </div>\n          <div class=\"isi-pesanan-nama-pulau\">\n            <p>Pulau Harapan Kepulauan Seribu Jakarta Utara</p>\n          </div>\n          <div class=\"isi-pesanan-waktu\">\n            <span class=\"glyphicon glyphicon-time\"></span> <span class=\"waktu\">2 Hari 1 Malam</span>\n          </div>\n          <div class=\"isi-pesanan-travel\">\n            <span class=\"glyphicon glyphicon-user\"></span> <span class=\"travel\">Kuylah Travel</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"isi-detail\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <p>Detail Trip Lainnya</p>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"detail-pelaksanaan\">\n              <span>Pelaksanaan :</span>\n              <p>14-16 November 2018</p>\n            </div>\n            <div class=\"detail-jumlah\">\n              <span>Jumlah Peserta (yang anda pesan) :</span>\n              <p>10 Orang</p>\n            </div>\n            <div class=\"detail-keterangan\">\n              <p>Data peserta dilengkapi setelah melakukan pembayaran</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"isi-data-pemesan\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <p>Data Pemesan</p>\n          </div>\n          <div class=\"panel-body\">\n            <form class=\"form-data-pemesan\">\n              <div class=\"form-group\">\n                <label class=\"label-form-pemesanan\">Nama Lengkap</label>\n                <input type=\"text\" class=\"form-control\"> \n              </div>\n              <div class=\"form-email\">\n                <div class=\"form-group\">\n                  <label class=\"label-form-pemesanan\">Email</label>\n                  <input type=\"email\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"form-telepon pull-right\">\n                <div class=\"form-group\">\n                  <label class=\"label-form-pemesanan\">No Telepon</label>\n                  <input type=\"number\" class=\"form-control\">\n                </div>\n              </div>\n            </form>\n            <div class=\"ubah-data\">\n              <p>Ubah Data Pemesan?</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"catatan-provider\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <p>Cacatan untuk Provider</p>\n          </div>\n          <div class=\"panel-body\">\n            <form class=\"form-data-pemesan\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\"> </textarea>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"asuransi-perjalanan\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <div class=\"cbx\">\n              <input type=\"checkbox\" class=\"checkbox\">\n              <label class=\"label--checkbox\">\n                Asuransi perjalanan\n              </label>\n            </div>\n          </div>\n          <div class=\"panel-body\">\n           <div class=\"keterangan\">\n            <p>Perlindungan atas kehilangan barang dan batal perjalanan hingga Rp350.000 dan kecelakaan hingga Rp60 000 000</p>\n            <span class=\"pelajari\">Pelajari Selengkapnya</span>\n            <span class=\"dana pull-right\">+ Rp 30 000/Orang</span>\n           </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"kode-promo\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n             <form class=\"form-kode-promo\">\n              <div class=\"form-group\">\n                <label>Punya Kode Promo?</label>\n                <input type=\"text\" class=\"form-control\">\n                <button class=\"btn btn-kode\" type=\"submit\">Gunakan Kode</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"rincian-harga\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <p>Rincian Harga</p>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"detail\">\n              <div class=\"harga\">\n                <span>Harga Paket</span><span class=\"jumlah\">x 10</span><span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 3 000 000</span>\n              </div>\n              <div class=\"diskon\">\n                <span>Diskon atau Promo</span><span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 3 000 000</span>\n              </div>\n              <div class=\"kode\">\n                <span>Kode Unik</span><span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 300000</span>\n              </div>\n              <div class=\"asuransi\">\n                <span>Asuransi</span><span class=\"jumlah\">x 10</span><span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 4002004990</span>\n              </div>\n            </div>\n            <hr>\n            <div class=\"total\">\n              <p class=\"total-bayar\">Total Harga<span class=\"titik-dua\">:</span><span class=\"nominal pull-right\">Rp 3 000 000</span></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pembayaran\">\n        <p>Lanjut ke Pembayaran</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/proses-pemesanan/proses-pemesanan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProsesPemesananComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProsesPemesananComponent = (function () {
    function ProsesPemesananComponent() {
    }
    ProsesPemesananComponent.prototype.ngOnInit = function () {
    };
    return ProsesPemesananComponent;
}());
ProsesPemesananComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-proses-pemesanan',
        template: __webpack_require__("../../../../../src/app/proses-pemesanan/proses-pemesanan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/proses-pemesanan/proses-pemesanan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProsesPemesananComponent);

//# sourceMappingURL=proses-pemesanan.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.wrap-form {\r\n\twidth: 526px;\r\n    height: 690px;\r\n    border-radius: 15px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), \r\n                0px 2px 5.9px 0.1px rgba(0, 0, 0, 0.16);\r\n    padding: 47px;\r\n}\r\n\r\n.form-group{\r\n    margin-bottom: 30px;\r\n}\r\n.form-control{\r\n    width: 414px;\r\n    height: 44px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n\r\n.btn-daftar{\r\n    width: 100px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    color: white;\r\n    margin-right: 127px;\r\n    margin-top: 45px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn-daftar:hover{\r\n    background-color: #6a1b9a;\r\n\r\n}\r\n\r\n.btn-facebook{\r\n    width: 317px;\r\n    height: 44px;\r\n    border-radius: 3px;\r\n    background-color: #3a589b;\r\n    color: white;\r\n    margin-left: 100px;\r\n    margin-bottom: 8.5px;\r\n}\r\n\r\n.btn-google{\r\n    width: 317px;\r\n    height: 44px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #b7b7b7;\r\n    margin-left: 100px;\r\n    margin-top: 8.5px;\r\n}\r\n\r\n.trv-atau{\r\n    margin-left: 118px;\r\n    font-size: 13px;\r\n    padding-top: 50px;\r\n}\r\n\r\n.trv-tema-atas{\r\n    margin-left: 20px;\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.label--checkbox {\r\n    position: absolute;\r\n    margin-left: 3px;\r\n    font-family: sans-serif;\r\n    font-size : 13px;\r\n    line-height: 158%;\r\n    margin-top: -5px;\r\n    font-weight: normal;\r\n    width: 427px;\r\n    margin-right: 10px;\r\n}\r\n  \r\n.checkbox {\r\n    position: relative;\r\n    top: -0.375rem;\r\n    margin: 0 1rem 0 0;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n \r\n.checkbox:before {\r\n    transition: all 0.3s ease-in-out;\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: 2;\r\n    width: 13px;\r\n    height: 13px;\r\n    border: 2px solid #dddddd;\r\n}\r\n \r\n.checkbox:checked:before {\r\n    transform: rotate(-45deg);\r\n    height: 0.7rem;\r\n    border-color: purple;\r\n    border-top-style: none;\r\n    border-right-style: none;\r\n}\r\n \r\n.checkbox:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -0.125rem;\r\n    left: 0;\r\n    width: 1.3rem;\r\n    height: 1.4rem;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n.trv-punya-akun{\r\n    width: 310px;\r\n    height: 16px;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    margin-top: -7px;\r\n}\r\n\r\nlabel{\r\n    color: #4a4a4a;\r\n}\r\n\r\nsmall{\r\n    color: #9e9e9e;\r\n}\r\n\r\n.trv-alert{\r\n    font-size:11px;\r\n    color: #d24d57;\r\n    margin-left: -15px;\r\n    margin-top: -10px;\r\n    position: absolute;\r\n\r\n}\r\n\r\n.garis-vertical{\r\n    border-left: 1px solid #ececec;\r\n    height: 612px;\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n    margin-top: -29px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"trv-tema-atas\">\r\n    <h2><strong> Daftar di Travinesia </strong></h2>\r\n    <div class=\"garis-vertical\"></div>\r\n    <div class=\"trv-punya-akun\">\r\n      <p> Sudah Punya Akun Travinesia? Masuk <a role=\"button\" [routerLink]=\"['/LoginPage']\">disini</a></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"label_form\"> Nama Lengkap </label>\r\n        <input id=\"name\" type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.name\" name=\"name\" #newUserName=\"ngModel\" required autofocus>\r\n        <div *ngIf=\"newUserName.errors?.required && newUserName.touched\" class=\"alert trv-alert\">Nama Tidak Boleh Kosong</div> \r\n      </div> \r\n      <div class=\"form-group\">\r\n        <label for=\"telephone\"> Nomor Telepon </label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.telephone\" name=\"telephone\" #newUserTelephone=\"ngModel\" required>\r\n        <small>Harap mengisi nomor telepon yang aktif untuk keamanan transaksi</small>\r\n        <div *ngIf=\"newUserTelephone.errors?.required && newUserTelephone.touched\" class=\"alert trv-alert\">No Telepon Tidak Boleh Kosong</div> \r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\"> Email </label>\r\n        <input id=\"email\" type=\"email\" class=\"form-control\" [(ngModel)]=\"newUser.email\" name=\"email\" #newUserEmail=\"ngModel\" required> \r\n        <div *ngIf=\"newUserEmail.errors?.required && newUserEmail.touched\" class=\"alert trv-alert\">Email Tidak Boleh Kosong</div> \r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\"> Password </label>\r\n        <input id=\"password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"newUser.password\" name=\"password\" #newUserPassword=\"ngModel\" required minlength=\"8\"> \r\n        <div *ngIf=\"newUserPassword.errors?.required && newUserPassword.touched\" class=\"alert trv-alert\">Password Tidak Boleh Kosong</div> \r\n        <div *ngIf=\"newUserPassword.errors?.minlength && newUserPassword.touched\" class=\"alert trv-alert\">Minimal 8 Karakter</div> \r\n      </div>\r\n      <div>\r\n        <input type=\"checkbox\" class=\"checkbox\">\r\n        <label class=\"label--checkbox\">\r\n          Saya mengkonfirmasi telah menyetujui Syarat dan ketentuan,serta Kebijakan Privasi Travinesia. Baca Selengkapnya\r\n        </label>  \r\n      </div>\r\n      <button class=\"btn btn-daftar pull-right\" type=\"submit\">Daftar</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n      <div class=\"trv-atau\">\r\n        <p>Atau</p>\r\n      </div>\r\n    </div>  \r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <button class=\"btn btn-facebook\">Daftar Dengan Facebook</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <button class=\"btn btn-google\">Daftar Dengan Google</button>\r\n      </div>\r\n    </div>\r\n    <button id=\"googleBtn\">Google Sign-In</button>\r\n    <button class=\"g-signin2\" data-onsuccess=\"onSignIn\" data-theme=\"dark\">nn</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(fb, appService, element) {
        this.fb = fb;
        this.appService = appService;
        this.element = element;
        this.newUser = {
            name: '',
            telephone: '',
            email: '',
            password: ''
        };
        this.clientId = '258497599579-huijc4vde4m7bkanb30809clib040aic.apps.googleusercontent.com';
        this.scope = [
            'profile',
            'email',
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/contacts.readonly',
            'https://www.googleapis.com/auth/admin.directory.user.readonly'
        ].join(' ');
        console.log('ElementRef: ', this.element);
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.appService.registerUser(this.newUser).subscribe(function (newUser) {
            console.log(newUser);
        });
    };
    RegisterComponent.prototype.googleInit = function () {
        var that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            });
            that.attachSignin(that.element.nativeElement.firstChild);
        });
    };
    RegisterComponent.prototype.attachSignin = function (element) {
        var that = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/saldo/saldo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\nth {\r\n    height: 28px;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    padding: 10px;\r\n}\r\n\r\nth:nth-child(1) {\r\n    width: 110px;\r\n}\r\n\r\nth:nth-child(2) {\r\n    width: 115px;\r\n}\r\n\r\nth:nth-child(3) {\r\n    width: 115px;\r\n}\r\n\r\ntd {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-tittle {\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.head-tittle {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.current-saldo {\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-saldo {\r\n    padding: 0 30px;\r\n    width: 100%;\r\n    height: 94px;\r\n    line-height: 94px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.rupiah {\r\n    font-size: 40px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n}\r\n\r\n.saldo-price {\r\n    font-size: 40px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n}\r\n\r\n.wrap-search {\r\n    position: relative;\r\n    text-align: right;\r\n    margin-top: 20px;\r\n    padding: 0 15px;\r\n}\r\n\r\n.petunjuk-pencarian {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n    margin-right: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n.petunjuk-pencarian:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-trv-ajukan {\r\n    width: 180px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    background-color: #58b957;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ffffff;\r\n}\r\n\r\n.btn-trv-ok {\r\n    width: 73px;\r\n    height: 27px;\r\n    border-radius: 3px;\r\n    background-color: transparent;\r\n    border: solid 1px #ab47bc;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ab47bc;\r\n}\r\n\r\n.detail-saldo {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-modal-content {\r\n    margin-top: 180px;\r\n    margin-left: 60px;\r\n    width: 490px;\r\n    height: 305px;\r\n    border-radius: 3px;\r\n    background-color: white\r\n}\r\n\r\n.wrap-modal-header {\r\n    border-radius: 3px 3px 0px 0px;\r\n    width: 490px;\r\n    height: 41px;\r\n    line-height: 41px;\r\n    padding-left: 20px;\r\n    background-color: #dddddd;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-modal-body {\r\n    padding: 25px 60px;\r\n}\r\n\r\n.margin-tittle-label {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.margin-tittle-ikon {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.tittle-label-modal {\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 3px\r\n}\r\n\r\n.tittle-sign {\r\n    display: inline;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.batal {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n    cursor: pointer;\r\n    margin-right: 15px;\r\n}\r\n\r\n.wrap-btn {\r\n    text-align: right;\r\n    margin-top: 20px;\r\n}\r\n\r\n.btn-trv-kirim {\r\n    width: 160px;\r\n    height: 31px;\r\n    border-radius: 3px;\r\n    border: 1px solid #ab47bc;\r\n    background-color: #ab47bc;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ffffff;\r\n}\r\n\r\n.wrap-modal-pencarian {\r\n    margin-top: 180px;\r\n    margin-left: 60px;\r\n    padding: 40px 60px;\r\n    width: 473px;\r\n    text-align: center;\r\n    background-color: #ffffff;\r\n    border-radius: 3px;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.img-modal-pencarian {\r\n    width: 84px;\r\n    height: 84px;\r\n}\r\n\r\n.tittle-modal-pencarian {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #4a4a4a;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/saldo/saldo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-tittle\">\r\n    <p class=\"head-tittle\">Saldo</p>\r\n</div>\r\n\r\n<p class=\"current-saldo\">Saldo Anda saat ini</p>\r\n\r\n<div class=\"wrap-saldo\">\r\n    <span class=\"rupiah\">Rp</span> <span class=\"saldo-price\">137.100.000</span>\r\n</div>\r\n\r\n<div class=\"wrap-search\">\r\n    <a data-toggle=\"modal\" data-target=\"#ModalPencarian\" class=\"petunjuk-pencarian\">Lihat Petunjuk Pencairan </a>\r\n    <button class=\"btn-trv-ajukan\" data-toggle=\"modal\" data-target=\"#myModal\"> Ajukan Pencairan </button>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"ModalPencarian\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"wrap-modal-pencarian\">\r\n            <img src=\"../assets/img/Award.png\" class=\"img-modal-pencarian\">\r\n            <p class=\"tittle-modal-pencarian\">Travinesia, beberapa saat lagi akan menghubungi nomor yang tertera pada profil agen travel Anda. Silahkan pergi ke tab pilihan <span class=\"bold\">“pencairan” </span> untuk memantau status proses penarikan.</p>\r\n            <button data-dismiss=\"modal\" class=\"btn-trv-ok\">Ok</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"wrap-modal-content\">\r\n            <div class=\"wrap-modal-header\">\r\n                Ajukan Pencairan\r\n            </div>\r\n            <div class=\"wrap-modal-body\">\r\n                <div class=\"tittle-label-modal\">Nomor Rekening :</div>\r\n                <input class=\"form-control margin-tittle-label\">\r\n\r\n                <div class=\"tittle-label-modal\">Atas Nama :</div>\r\n                <input class=\"form-control margin-tittle-ikon\">\r\n\r\n                <span class=\"glyphicon glyphicon-info-sign\"></span>\r\n                <div class=\"tittle-sign\">Pengajuan pencairan dapat dilakukan pada pukul 08.00 - 14.00 WIB</div>\r\n\r\n                <div class=\"wrap-btn\">\r\n                    <span data-dismiss=\"modal\" class=\"batal\">Batal</span>\r\n                    <button class=\"btn-trv-kirim\">Kirim</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<p class=\"detail-saldo\">Detail Saldo</p>\r\n\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <th>Waktu</th>\r\n            <th>Mutasi <span class=\"glyphicon glyphicon-info-sign \"></span></th>\r\n            <th>Saldo</th>\r\n            <th>Keterangan</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>Minggu, 30 Januari 2019</td>\r\n                <td>+ Rp.3.000.000</td>\r\n                <td>Rp.137.100.000</td>\r\n                <td>Pulau Harapan Kepulauan Seribu ( No. Pemesanan : 000xbvcw122018 )</td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <td>Minggu, 30 Januari 2019</td>\r\n                <td>+ Rp.3.000.000</td>\r\n                <td>Rp.137.100.000</td>\r\n                <td>Pulau Harapan Kepulauan Seribu ( No. Pemesanan : 000xbvcw122018 )</td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <td>Minggu, 30 Januari 2019</td>\r\n                <td>+ Rp.3.000.000</td>\r\n                <td>Rp.137.100.000</td>\r\n                <td>Pulau Harapan Kepulauan Seribu ( No. Pemesanan : 000xbvcw122018 )</td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <td>Minggu, 30 Januari 2019</td>\r\n                <td>+ Rp.3.000.000</td>\r\n                <td>Rp.137.100.000</td>\r\n                <td>Pulau Harapan Kepulauan Seribu ( No. Pemesanan : 000xbvcw122018 )</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/saldo/saldo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaldoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaldoComponent = (function () {
    function SaldoComponent() {
    }
    SaldoComponent.prototype.ngOnInit = function () {
    };
    return SaldoComponent;
}());
SaldoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-saldo',
        template: __webpack_require__("../../../../../src/app/saldo/saldo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/saldo/saldo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SaldoComponent);

//# sourceMappingURL=saldo.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-akun-profil/sidebar-akun-profil.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-akun {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin-left: 27px;\r\n    margin-top: -9px;\r\n    margin-bottom: 20px;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    display: inline-block;\r\n}\r\n\r\n.root-akun {\r\n    font-size: 15px;\r\n    margin-left: 164px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.wrapper {\r\n    padding-left: 0;\r\n    transition: all .5s ease;\r\n}\r\n\r\n.show {\r\n    display: none !important;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .btn-toggle {\r\n        display: none;\r\n    }\r\n    .wrapper {\r\n        padding-left: 236px;\r\n    }\r\n    .wrapper .sidebar-wrapper {\r\n        width: 236px;\r\n    }\r\n}\r\n\r\n.sidebar-wrapper {\r\n    z-index: 1000;\r\n    position: absolute;\r\n    left: 0px;\r\n    height: 60%;\r\n    overflow-y: auto;\r\n    background: #fbfbfb;\r\n    transition: all .5s ease;\r\n}\r\n\r\n.sidebar-nav {\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.sidebar-nav li {\r\n    text-indent: 0;\r\n    line-height: 45px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-nav li a {\r\n    display: block;\r\n    text-decoration: none;\r\n}\r\n\r\n.sidebar-nav li a {\r\n    color: #4a4a4a;\r\n}\r\n\r\n.sidebar-nav li a:focus {\r\n    background-color: #f7f7f7;\r\n    color: #ab47bc;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-nav li a .sidebar-icon {\r\n    width: 45px;\r\n    height: 45px;\r\n    font-size: 15px;\r\n    padding: 0 2px;\r\n    display: inline-block;\r\n    text-indent: 15px;\r\n    margin-right: 10px;\r\n    float: left;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-nav li ul.panel-collapse {\r\n    list-style: none;\r\n    -moz-padding-start: 0;\r\n    -webkit-padding-start: 0;\r\n    -khtml-padding-start: 0;\r\n    -o-padding-start: 0;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-nav li ul.panel-collapse li i {\r\n    margin-right: 10px;\r\n}\r\n\r\n.sidebar-wrapper .sidebar-nav li ul.panel-collapse li {\r\n    text-indent: 15px;\r\n}\r\n\r\n@media (min-width:450px) and (max-width: 992px) {\r\n    .btn-toggle {\r\n        display: none;\r\n    }\r\n    .wrapper .sidebar-wrapper {\r\n        width: 76px;\r\n        margin-left: -25px;\r\n    }\r\n    .sidebar-nav li a span:nth-child(2) {\r\n        display: none;\r\n    }\r\n    .wrapper .sidebar-wrapper #sidebar #sidemenu li ul {\r\n        position: fixed;\r\n        left: 45px;\r\n        margin-top: -45px;\r\n        z-index: 1000;\r\n        width: 200px;\r\n        height: 0;\r\n    }\r\n}\r\n\r\n\r\n/* content */\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li.active>a:focus,\r\n.nav-tabs>li.active>a:hover {\r\n    border-width: 0;\r\n}\r\n\r\n.nav-tabs {\r\n    border-bottom: 0px solid #ddd;\r\n}\r\n\r\n.nav-tabs>li>a {\r\n    border: none;\r\n    color: #666;\r\n}\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li>a:hover {\r\n    border: none;\r\n    color: #ab47bc !important;\r\n    background: transparent;\r\n}\r\n\r\n.nav-tabs>li>a::after {\r\n    content: \"\";\r\n    background: #ab47bc;\r\n    height: 2px;\r\n    position: absolute;\r\n    width: 91%;\r\n    left: 9px;\r\n    bottom: -1px;\r\n    transition: all 250ms ease 0s;\r\n    transform: scale(0);\r\n}\r\n\r\n.nav-tabs>li.active>a::after,\r\n.nav-tabs>li:hover>a::after {\r\n    transform: scale(1);\r\n}\r\n\r\n.tab-nav>li>a::after {\r\n    background: #ab47bc none repeat scroll 0% 0%;\r\n    color: #fff;\r\n}\r\n\r\n.tab-pane {\r\n    padding: 15px 0;\r\n}\r\n\r\n.tab-content {\r\n    padding: 0px 41px 0px 440px;\r\n    width: 1003px;\r\n    height: 384px;\r\n    border-radius: 3px;\r\n    border: solid 1px #e0e0e0;\r\n    line-height: 384px;\r\n    font-weight: bold;\r\n}\r\n\r\n.card {\r\n    background: transparent;\r\n    margin-left: 57px;\r\n    width: 1003px;\r\n}\r\n\r\n@media (max-width:400px) {\r\n    .btn-toggle {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        position: relative;\r\n        left: -3px;\r\n        top: 98px;\r\n        z-index: 9999;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-akun-profil/sidebar-akun-profil.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-akun\"> Akun Saya</div>\r\n<span class=\"root-akun\">Beranda > Akun > {{order}}</span>\r\n<div class=\"wrapper\">\r\n    <div [class.show]=\"show\">\r\n\r\n        <div class=\"sidebar-wrapper\">\r\n            <aside id=\"sidebar\">\r\n                <ul id=\"sidemenu\" class=\"sidebar-nav\">\r\n                    <li>\r\n                        <a [routerLink]=\"['Profil']\" [queryParams]=\"{order:'Profil'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i>\r\n                            </span>\r\n                            <span class=\"sidebar-title\">Profil</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['Pemesanan']\" [queryParams]=\"{order:'Pemesanan'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                            <span class=\"sidebar-title\">Pemesanan</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['Favorit']\" [queryParams]=\"{order:'Favorit'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                            <span class=\"sidebar-title\">Favorit</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['Notifikasi']\" [queryParams]=\"{order:'Notifikasi'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                            <span class=\"sidebar-title\">Notifikasi</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['Promo']\" [queryParams]=\"{order:'Promo'}\">\r\n                            <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                            <span class=\"sidebar-title\">Promo</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </aside>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <main id=\"page-content-wrapper\" role=\"main\">\r\n        <div class=\"btn-toggle\" (click)=\"toggleCollapse()\" role=\"button\">Press</div>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar-akun-profil/sidebar-akun-profil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarAkunProfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarAkunProfilComponent = (function () {
    function SidebarAkunProfilComponent(routeActive) {
        this.routeActive = routeActive;
        this.show = false;
    }
    SidebarAkunProfilComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    SidebarAkunProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeActive.queryParams.filter(function (params) { return params.order; }).subscribe(function (params) {
            console.log(params); // {order: "popular"}
            _this.order = params.order;
            console.log(_this.order); // popular
        });
    };
    return SidebarAkunProfilComponent;
}());
SidebarAkunProfilComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar-akun-profil',
        template: __webpack_require__("../../../../../src/app/sidebar-akun-profil/sidebar-akun-profil.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-akun-profil/sidebar-akun-profil.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], SidebarAkunProfilComponent);

var _a;
//# sourceMappingURL=sidebar-akun-profil.component.js.map

/***/ }),

/***/ "../../../../../src/app/token/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/token/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    // canActivate(): boolean {
    //   if (!this.auth.isAuthenticated()) {
    //     this.router.navigate(['login']);
    //     return false;
    //   }
    //   return true;
    // }
    AuthGuardService.prototype.canActive = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/LoginPage']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/token/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.AccessToken = "";
        this.TokenAPI = 'http://travinesia.com:3000/v1/user/authenticate';
        this.AuthAPI = 'http://travinesia.com:3000/v1/user/profile';
    }
    AuthService.prototype.login = function (email, password) {
        var headerForTokenAPI = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-type': 'application/x-www-form-urlencoded' });
        var data = "grant_type=password&email=" + email + "&password=" + password;
        return this.http.post(this.TokenAPI, data, { headers: headerForTokenAPI })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.auth = function () {
        var HeadersForAuthAPI = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        if (this.AccessToken) {
            HeadersForAuthAPI.append('Authorization', 'Bearer' + this.AccessToken);
        }
        return this.http.get(this.AuthAPI, {
            headers: HeadersForAuthAPI
        })
            .map(function (res) { return res.json(); });
    };
    //guard route service
    // public isAuthenticated() { 
    //     const token = localStorage.getItem('token');
    //     return !this.jwtHelper.isTokenExpired(token);
    // }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem("acces_token");
        if (token) {
            return true;
        }
        return false;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/transaksi-penjualan/transaksi-penjualan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-tittle {\r\n    position: relative;\r\n}\r\n\r\n.head-tittle {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.info-paket {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 42px;\r\n}\r\n\r\n.margin-checkbox {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.checkbox-label-fasilitas {\r\n    position: relative;\r\n    bottom: 6px;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.wrap-paket-trip {\r\n    width: 100%;\r\n    height: 165px;\r\n    border: 1px solid #dddddd;\r\n    margin-bottom: 19px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.wrap-content-paket-trip {\r\n    height: 120px;\r\n    background-color: #f9f9f9;\r\n    border-bottom: 1px solid #dddddd;\r\n    padding: 10px;\r\n}\r\n\r\n.img-paket-trip {\r\n    width: 158px;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n.wrap-info-paket-trip {\r\n    position: relative;\r\n    width: 250px;\r\n    height: 100%;\r\n    border-right: 1px solid #dddddd;\r\n    margin-left: 20px;\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.tittle-paket-trip {\r\n    height: 43px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.tittle-info {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.tittle-info-value {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    display: inline;\r\n    position: absolute;\r\n    left: 120px;\r\n}\r\n\r\n.colon-info {\r\n    position: absolute;\r\n    left: 105px;\r\n}\r\n\r\n.wrap-info-harga {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.tittle-info-harga {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.info-harga {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.info-kuota {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.info-detail-trip {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n}\r\n\r\n.info-detail-trip:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.wrap-btn-trv {\r\n    padding-left: 12px;\r\n    margin-top: 7px;\r\n    margin-right: 25px;\r\n}\r\n\r\n.btn-trv-daftar {\r\n    width: 172px;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    border: 1px solid #ab47bc;\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    float: right;\r\n}\r\n\r\n.tgl-berangkat {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-left: 6px;\r\n    margin-right: 6px;\r\n}\r\n\r\n.form-tgl {\r\n    display: inline;\r\n    width: 180px;\r\n    height: 28px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    color: #e91e63;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n}\r\n\r\n.sisa-kuota {\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    margin-left: 10px;\r\n}\r\n\r\n.highlight-kuota {\r\n    font-size: 11px;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    font-weight: bold;\r\n    color: #e91e63;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transaksi-penjualan/transaksi-penjualan.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='content1'>\r\n\r\n    <div class=\"wrap-tittle\">\r\n        <p class=\"head-tittle\">Transaksi Penjualan </p>\r\n    </div>\r\n\r\n    <p class=\"info-paket\">Pantau perkembangan penjualan Paket Trip Anda, Pesanan Baru dari traveller, Status Pemesanan, Konfirmasi kehadiran dan riwayat trip Travel Anda.</p>\r\n\r\n    <div class=\"row margin-checkbox\">\r\n        <div class=\"col-md-2\">\r\n            <input type=\"checkbox\" class=\"checkbox\">\r\n            <span class=\"checkbox-label-fasilitas\">Open Trip</span>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n            <input type=\"checkbox\" class=\"checkbox\">\r\n            <span class=\"checkbox-label-fasilitas\">Private Trip</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-paket-trip\">\r\n        <div class=\"wrap-content-paket-trip\">\r\n            <img class=\"img-paket-trip\" src=\"../assets/img/trip.jpg\">\r\n\r\n            <div class=\"wrap-info-paket-trip\">\r\n                <p class=\"tittle-paket-trip\">Kepulaun Raja Ampat </p>\r\n\r\n                <div class=\"tittle-info\">Durasi\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">3 Hari 2 Malam</div>\r\n                </div>\r\n\r\n                <div class=\"tittle-info\">Kategori\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">Beach</div>\r\n                </div>\r\n\r\n                <div class=\"tittle-info\">Jenis Trip\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">Open Trip</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"wrap-info-harga\">\r\n                <div class=\"tittle-info-harga\">Harga per orang :</div>\r\n                <div class=\"info-harga\">Rp 900.000,-</div>\r\n                <div class=\"info-kuota\">Kuota : 50</div>\r\n                <a href=\"#\" class=\"info-detail-trip\">Lihat Detail Trip</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"wrap-btn-trv\">\r\n            <span class=\"tgl-berangkat\">Tanggal Berangkat : </span> <select class=\"form-control form-tgl\">\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\t\r\n            </select>\r\n            <span class=\"sisa-kuota\">Sisa Kuota : <span class=\"highlight-kuota\"> 36</span> </span>\r\n            <button class=\"btn-trv-daftar\" (click)=\"togglePesan()\">Lihat Daftar Pemesan </button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"wrap-paket-trip\">\r\n        <div class=\"wrap-content-paket-trip\">\r\n            <img class=\"img-paket-trip\" src=\"../assets/img/trip.jpg\">\r\n\r\n            <div class=\"wrap-info-paket-trip\">\r\n                <p class=\"tittle-paket-trip\">Kepulaun Raja Ampat </p>\r\n\r\n                <div class=\"tittle-info\">Durasi\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">3 Hari 2 Malam</div>\r\n                </div>\r\n\r\n                <div class=\"tittle-info\">Kategori\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">Beach</div>\r\n                </div>\r\n\r\n                <div class=\"tittle-info\">Jenis Trip\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">Open Trip</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"wrap-info-harga\">\r\n                <div class=\"tittle-info-harga\">Harga per orang :</div>\r\n                <div class=\"info-harga\">Rp 900.000,-</div>\r\n                <div class=\"info-kuota\">Kuota : 50</div>\r\n                <a href=\"#\" class=\"info-detail-trip\">Lihat Detail Trip</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"wrap-btn-trv\">\r\n            <span class=\"tgl-berangkat\">Tanggal Berangkat : </span> <select class=\"form-control form-tgl\">\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\t\r\n            </select>\r\n            <span class=\"sisa-kuota\">Sisa Kuota : <span class=\"highlight-kuota\"> 36</span> </span>\r\n            <button class=\"btn-trv-daftar\" (click)=\"togglePesan()\">Lihat Daftar Pemesan </button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"wrap-paket-trip\">\r\n        <div class=\"wrap-content-paket-trip\">\r\n            <img class=\"img-paket-trip\" src=\"../assets/img/trip.jpg\">\r\n\r\n            <div class=\"wrap-info-paket-trip\">\r\n                <p class=\"tittle-paket-trip\">Kepulaun Raja Ampat </p>\r\n\r\n                <div class=\"tittle-info\">Durasi\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">3 Hari 2 Malam</div>\r\n                </div>\r\n\r\n                <div class=\"tittle-info\">Kategori\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">Beach</div>\r\n                </div>\r\n\r\n                <div class=\"tittle-info\">Jenis Trip\r\n                    <span class=\"colon-info\">:</span>\r\n                    <div class=\"tittle-info-value\">Open Trip</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"wrap-info-harga\">\r\n                <div class=\"tittle-info-harga\">Harga per orang :</div>\r\n                <div class=\"info-harga\">Rp 900.000,-</div>\r\n                <div class=\"info-kuota\">Kuota : 50</div>\r\n                <a href=\"#\" class=\"info-detail-trip\">Lihat Detail Trip</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"wrap-btn-trv\">\r\n            <span class=\"tgl-berangkat\">Tanggal Berangkat : </span> <select class=\"form-control form-tgl\">\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\r\n              <option>Sabtu, 14 Desember 2018</option>\t\r\n            </select>\r\n            <span class=\"sisa-kuota\">Sisa Kuota : <span class=\"highlight-kuota\"> 36</span> </span>\r\n            <button class=\"btn-trv-daftar\" (click)=\"togglePesan()\">Lihat Daftar Pemesan </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf='content2'>\r\n    <app-daftar-pemesan></app-daftar-pemesan>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/transaksi-penjualan/transaksi-penjualan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransaksiPenjualanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransaksiPenjualanComponent = (function () {
    function TransaksiPenjualanComponent() {
        this.content1 = true;
        this.content2 = false;
    }
    TransaksiPenjualanComponent.prototype.togglePesan = function () {
        this.content1 = !this.content1;
        this.content2 = !this.content2;
    };
    TransaksiPenjualanComponent.prototype.ngOnInit = function () {
    };
    return TransaksiPenjualanComponent;
}());
TransaksiPenjualanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-transaksi-penjualan',
        template: __webpack_require__("../../../../../src/app/transaksi-penjualan/transaksi-penjualan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/transaksi-penjualan/transaksi-penjualan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TransaksiPenjualanComponent);

//# sourceMappingURL=transaksi-penjualan.component.js.map

/***/ }),

/***/ "../../../../../src/app/trv-search-navbar/trv-search-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon-star-empty:before {\r\n    content: \"\\E007\";\r\n    color: #dddddd;\r\n}\r\n\r\n.root-search {\r\n    margin-top: -23px;\r\n    margin-left: -45px;\r\n    font-size: 13.4px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.current-search {\r\n    display: inline-block;\r\n    font-size: 25.2px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.22px;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9c27b0;\r\n    margin-top: 10px;\r\n    margin-bottom: 21px;\r\n    margin-left: -45px;\r\n}\r\n\r\n.rslt {\r\n    left: 336px;\r\n    top: 128px;\r\n    position: absolute;\r\n    font-size: 13.4px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.sort {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 100px;\r\n    font-size: 13.4px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4c4c4c;\r\n    margin-left: 477px;\r\n}\r\n\r\n.form-sort {\r\n    width: 183px;\r\n    height: 26px;\r\n    border-radius: 2.4px;\r\n    display: inline-block;\r\n    font-size: 11px;\r\n    padding: 0px;\r\n}\r\n\r\n.thumb-promo {\r\n    width: 165px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 0px 1px #dddddd;\r\n    margin-top: 8px;\r\n}\r\n\r\n.img-thumb img {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.img-promo {\r\n    width: 100%;\r\n    height: 155px;\r\n}\r\n\r\n.body-caption {\r\n    text-align: left;\r\n    padding: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.disc {\r\n    position: absolute;\r\n    width: 50px;\r\n    background-color: #ab47bc;\r\n    text-align: center;\r\n    top: 0;\r\n    left: 0;\r\n    color: white;\r\n    border-radius: 5px 0 5px 0;\r\n}\r\n\r\n.trip {\r\n    color: white;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    background-color: orange;\r\n    top: 47%;\r\n    left: 30%;\r\n    width: 70px;\r\n    text-align: center;\r\n    border-radius: 25px;\r\n}\r\n\r\n.caption-price {\r\n    color: #ab47bc;\r\n    font-size: 11px;\r\n}\r\n\r\n.caption-tittle {\r\n    font-size: 13px;\r\n    text-align: left;\r\n    margin-top: 10px;\r\n    line-height: 1.15;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.caption-duration {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    line-height: 1.3;\r\n    margin-top: 10px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.travel-name {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.box-wrap-tipe {\r\n    position: relative;\r\n    border-radius: 5px 5px 0 0;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 95px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-lokasi {\r\n    position: relative;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 175px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-kategori {\r\n    position: relative;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 255px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-harga {\r\n    position: relative;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 97px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-rating {\r\n    position: relative;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 180px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-lainnya {\r\n    position: relative;\r\n    border-radius: 0 0 5px 5px;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 64px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.head-box {\r\n    width: 196px;\r\n    margin-top: 1px;\r\n    height: 30px;\r\n    background-color: #ebebeb;\r\n}\r\n\r\n.tittle-box {\r\n    font-size: 12.7px;\r\n    font-weight: bold;\r\n    letter-spacing: normal;\r\n    line-height: 9px;\r\n    padding: 10px 0 0 14px;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.listbox {\r\n    padding: 20px 0 0 25px;\r\n}\r\n\r\n.label-checkbox-search {\r\n    position: relative;\r\n    top: -6px;\r\n    font-size: 12.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4c4c4c;\r\n}\r\n\r\n.range-min {\r\n    font-size: 12.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n}\r\n\r\n.range-max {\r\n    font-size: 12.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    margin-left: 65px;\r\n}\r\n\r\n\r\n/* radio button  */\r\n\r\n.radio {\r\n    display: block;\r\n    line-height: 33px !important;\r\n    height: 20px;\r\n    margin-top: -8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.label-radio {\r\n    margin-left: -10px;\r\n}\r\n\r\n.radio input {\r\n    width: 1px;\r\n    height: 1px;\r\n    opacity: 0;\r\n}\r\n\r\n.radio input:checked+.outer .inner {\r\n    transform: scale(.7);\r\n    opacity: 1;\r\n}\r\n\r\n.radio input:checked+.outer {\r\n    border: 2px solid #ab47bc;\r\n}\r\n\r\n.radio input:focus+.outer .inner {\r\n    transform: scale(.7);\r\n    opacity: 1;\r\n    background-color: #ab47bc;\r\n}\r\n\r\n.radio .outer {\r\n    width: 13px;\r\n    height: 13px;\r\n    display: block;\r\n    float: left;\r\n    margin: 10px 9px 10px 10px;\r\n    border: 1.5px solid #ddd;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n}\r\n\r\n.radio .inner {\r\n    transition: all 0.25s ease-in-out;\r\n    width: 9px;\r\n    height: 9px;\r\n    transform: scale(0);\r\n    display: block;\r\n    margin: 0px;\r\n    border-radius: 50%;\r\n    background-color: #ab47bc;\r\n    opacity: 0;\r\n}\r\n\r\n\r\n/* end radio button */\r\n\r\n\r\n/* range bar slider */\r\n\r\n.slidecontainer {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    /* Width of the outside container */\r\n}\r\n\r\n\r\n/* The slider itself */\r\n\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 117px;\r\n    height: 1px;\r\n    margin-bottom: 10px;\r\n    background-color: #ab47bc;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 13px;\r\n    height: 13px;\r\n    background-color: #ab47bc;\r\n    border: solid 1px #ab47bc;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 13px;\r\n    height: 13px;\r\n    background-color: #ab47bc;\r\n    border: solid 1px #ab47bc;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* end range bar */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trv-search-navbar/trv-search-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-side\">\r\n    <div class=\"root-search\"> Home > Pencarian </div>\r\n    <div class=\"current-search\"> Hasil Pencarian </div>\r\n    <span class=\"rslt\"> Menampilkan xxx Paket Wisata untuk \"{{query}}\" </span>\r\n    <span class=\"sort\"> Urutkan :  \r\n          <select class=\"form-control form-sort\">\r\n                  <option >Paling Sesuai</option>\r\n                  <option >Terbaru</option>\r\n                  <option >Termurah</option>\r\n                  <option >Termahal</option>\r\n                  <option >Terlaris</option>\r\n               </select>\r\n      \r\n  </span>\r\n</div>\r\n\r\n<div class=\"container-side\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n            <div class=\"row\">\r\n                <div class=\"box-wrap-tipe\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Tipe</div>\r\n                        <div class=\"listbox\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Open Trip\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Private Trip\r\n                      </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-lokasi\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Lokasi</div>\r\n                        <div class=\"listbox\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Jawa\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Sumatera\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Kalimantan\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Sulawesi\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Maluku\r\n                      </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-kategori\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Kategori</div>\r\n                        <div class=\"listbox\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Beach\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> City Tour\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Culture\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Fishing\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Hiking\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Honeymoon\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Sailing\r\n                      </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Tracking\r\n                      </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-harga\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Harga</div>\r\n                        <div class=\"listbox\">\r\n\r\n                            <div class=\"slidecontainer\">\r\n                                <input type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"myRange\">\r\n                                <span class=\"range-min\">0</span> <span class=\"range-max\">10.000.000</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-rating\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Rating</div>\r\n                        <div class=\"listbox\">\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>    \r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>    \r\n                                </label>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-lainnya\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Lainnya</div>\r\n                        <div class=\"listbox\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Diskon\r\n                      </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/trv-search-navbar/trv-search-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrvSearchNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrvSearchNavbarComponent = (function () {
    function TrvSearchNavbarComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            _this.query = params.query;
        });
    }
    TrvSearchNavbarComponent.prototype.ngOnInit = function () {
    };
    return TrvSearchNavbarComponent;
}());
TrvSearchNavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-trv-search-navbar',
        template: __webpack_require__("../../../../../src/app/trv-search-navbar/trv-search-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trv-search-navbar/trv-search-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], TrvSearchNavbarComponent);

var _a, _b;
//# sourceMappingURL=trv-search-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/trv-search-result/trv-search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon-star-empty:before {\r\n    content: \"\\E007\";\r\n    color: #dddddd;\r\n}\r\n\r\n.root-search {\r\n    margin-top: -23px;\r\n    margin-left: -45px;\r\n    font-size: 13.4px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.current-search {\r\n    display: inline-block;\r\n    font-size: 25.2px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: 1.22px;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #9c27b0;\r\n    margin-top: 10px;\r\n    margin-bottom: 21px;\r\n    margin-left: -45px;\r\n}\r\n\r\n.rslt {\r\n    left: 336px;\r\n    top: 128px;\r\n    position: absolute;\r\n    font-size: 13.4px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.sort {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 100px;\r\n    font-size: 13.4px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    text-align: left;\r\n    color: #4c4c4c;\r\n    margin-left: 477px;\r\n}\r\n\r\n.form-sort {\r\n    width: 183px;\r\n    height: 26px;\r\n    border-radius: 2.4px;\r\n    display: inline-block;\r\n    font-size: 11px;\r\n    padding: 0px;\r\n}\r\n\r\n.thumb-promo {\r\n    width: 165px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 0px 1px #dddddd;\r\n    margin-top: 8px;\r\n}\r\n\r\n.img-thumb img {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.img-promo {\r\n    width: 100%;\r\n    height: 155px;\r\n}\r\n\r\n.body-caption {\r\n    text-align: left;\r\n    padding: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.disc {\r\n    position: absolute;\r\n    width: 50px;\r\n    background-color: #ab47bc;\r\n    text-align: center;\r\n    top: 0;\r\n    left: 0;\r\n    color: white;\r\n    border-radius: 5px 0 5px 0;\r\n}\r\n\r\n.trip {\r\n    color: white;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    background-color: orange;\r\n    top: 47%;\r\n    left: 30%;\r\n    width: 70px;\r\n    text-align: center;\r\n    border-radius: 25px;\r\n}\r\n\r\n.caption-price {\r\n    color: #ab47bc;\r\n    font-size: 11px;\r\n}\r\n\r\n.caption-tittle {\r\n    font-size: 13px;\r\n    text-align: left;\r\n    margin-top: 10px;\r\n    line-height: 1.15;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.caption-duration {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    line-height: 1.3;\r\n    margin-top: 10px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.travel-name {\r\n    font-size: 11px;\r\n    text-align: left;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.box-wrap-tipe {\r\n    position: relative;\r\n    border-radius: 5px 5px 0 0;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 95px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-lokasi {\r\n    position: relative;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 175px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-kategori {\r\n    position: relative;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 255px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-harga {\r\n    position: relative;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 97px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-rating {\r\n    position: relative;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 180px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.box-wrap-lainnya {\r\n    position: relative;\r\n    border-radius: 0 0 5px 5px;\r\n    top: 10px;\r\n    left: -32px;\r\n    margin-bottom: 3px;\r\n    width: 198px;\r\n    height: 64px;\r\n    border: solid 0.8px #dddddd;\r\n}\r\n\r\n.head-box {\r\n    width: 196px;\r\n    margin-top: 1px;\r\n    height: 30px;\r\n    background-color: #ebebeb;\r\n}\r\n\r\n.tittle-box {\r\n    font-size: 12.7px;\r\n    font-weight: bold;\r\n    letter-spacing: normal;\r\n    line-height: 9px;\r\n    padding: 10px 0 0 14px;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.listbox {\r\n    padding: 20px 0 0 25px;\r\n}\r\n\r\n.label-checkbox-search {\r\n    position: relative;\r\n    top: -6px;\r\n    font-size: 12.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4c4c4c;\r\n}\r\n\r\n.range-min {\r\n    font-size: 12.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n}\r\n\r\n.range-max {\r\n    font-size: 12.7px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    margin-left: 65px;\r\n}\r\n\r\n\r\n/* radio button  */\r\n\r\n.radio {\r\n    display: block;\r\n    line-height: 33px !important;\r\n    height: 20px;\r\n    margin-top: -8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.label-radio {\r\n    margin-left: -10px;\r\n}\r\n\r\n.radio input {\r\n    width: 1px;\r\n    height: 1px;\r\n    opacity: 0;\r\n}\r\n\r\n.radio input:checked+.outer .inner {\r\n    transform: scale(.7);\r\n    opacity: 1;\r\n}\r\n\r\n.radio input:checked+.outer {\r\n    border: 2px solid #ab47bc;\r\n}\r\n\r\n.radio input:focus+.outer .inner {\r\n    transform: scale(.7);\r\n    opacity: 1;\r\n    background-color: #ab47bc;\r\n}\r\n\r\n.radio .outer {\r\n    width: 13px;\r\n    height: 13px;\r\n    display: block;\r\n    float: left;\r\n    margin: 10px 9px 10px 10px;\r\n    border: 1.5px solid #ddd;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n}\r\n\r\n.radio .inner {\r\n    transition: all 0.25s ease-in-out;\r\n    width: 9px;\r\n    height: 9px;\r\n    transform: scale(0);\r\n    display: block;\r\n    margin: 0px;\r\n    border-radius: 50%;\r\n    background-color: #ab47bc;\r\n    opacity: 0;\r\n}\r\n\r\n\r\n/* end radio button */\r\n\r\n\r\n/* range bar slider */\r\n\r\n.slidecontainer {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    /* Width of the outside container */\r\n}\r\n\r\n\r\n/* The slider itself */\r\n\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 117px;\r\n    height: 1px;\r\n    margin-bottom: 10px;\r\n    background-color: #ab47bc;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 13px;\r\n    height: 13px;\r\n    background-color: #ab47bc;\r\n    border: solid 1px #ab47bc;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 13px;\r\n    height: 13px;\r\n    background-color: #ab47bc;\r\n    border: solid 1px #ab47bc;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* end range bar */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trv-search-result/trv-search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-side\">\r\n    <div class=\"root-search\"> Home > {{ order }}</div>\r\n    <div class=\"current-search\"> {{ order }} </div>\r\n    <span class=\"rslt\"> Hasil Pencarian Paket Wisata </span>\r\n    <span class=\"sort\"> Urutkan :  \r\n            <select class=\"form-control form-sort\">\r\n                    <option >Paling Sesuai</option>\r\n                    <option >Terbaru</option>\r\n                    <option >Termurah</option>\r\n                    <option >Termahal</option>\r\n                    <option >Terlaris</option>\r\n                 </select>\r\n    </span>\r\n</div>\r\n\r\n<div class=\"container-side\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n            <div class=\"row\">\r\n                <div class=\"box-wrap-tipe\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Tipe</div>\r\n                        <div class=\"listbox\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Open Trip\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Private Trip\r\n                        </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-lokasi\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Lokasi</div>\r\n                        <div class=\"listbox\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Jawa\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Sumatera\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Kalimantan\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Sulawesi\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Maluku\r\n                        </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-kategori\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Kategori</div>\r\n                        <div class=\"listbox\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Beach\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> City Tour\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Culture\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Fishing\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Hiking\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Honeymoon\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Sailing\r\n                        </label><br>\r\n\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Tracking\r\n                        </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-harga\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Harga</div>\r\n                        <div class=\"listbox\">\r\n\r\n                            <div class=\"slidecontainer\">\r\n                                <input type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"myRange\">\r\n                                <span class=\"range-min\">0</span> <span class=\"range-max\">10.000.000</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-rating\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Rating</div>\r\n                        <div class=\"listbox\">\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"icon-star\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>    \r\n                                </label>\r\n                            </div>\r\n                            <div class=\"radio\">\r\n                                <label class=\"label-radio\"><input type=\"radio\" name=\"radios\"><span class=\"outer\"><span class=\"inner\"></span></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                                    <span class=\"glyphicon glyphicon-star-empty\"></span>    \r\n                                </label>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"box-wrap-lainnya\">\r\n                    <div class=\"head-box\">\r\n                        <div class=\"tittle-box\">Lainnya</div>\r\n                        <div class=\"listbox\">\r\n                            <input type=\"checkbox\" class=\"checkbox\">\r\n                            <label class=\"label-checkbox-search\"> Diskon\r\n                        </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n            <div class=\"thumb-promo\">\r\n                <img src=\"../assets/img/1.jpg\" class=\"img-promo\">\r\n                <div class=\"disc\">-10%</div>\r\n                <div class=\"trip\">Open</div>\r\n                <div class=\"body-caption\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-sm-6 \">\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                            <span class=\"icon-star\"></span>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6\">\r\n                            <div class=\"caption-price\">Rp 300.000</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"caption-tittle\">Pantai Sangat Indah sekali sekali kesini lah</div>\r\n                    <div class=\"caption-duration\"><span class=\"glyphicon glyphicon-time\"></span> 2H1M</div>\r\n                    <div class=\"travel-name\"><span class=\"glyphicon glyphicon-user\"></span> Harapan Indah Tour</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/trv-search-result/trv-search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrvSearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrvSearchResultComponent = (function () {
    function TrvSearchResultComponent(routeActive) {
        this.routeActive = routeActive;
    }
    TrvSearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeActive.queryParams.filter(function (params) { return params.order; }).subscribe(function (params) {
            // console.log(params); {order: "popular"}
            _this.order = params.order;
            // console.log(this.order);  popular
        });
    };
    return TrvSearchResultComponent;
}());
TrvSearchResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-trv-search-result',
        template: __webpack_require__("../../../../../src/app/trv-search-result/trv-search-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trv-search-result/trv-search-result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TrvSearchResultComponent);

var _a;
//# sourceMappingURL=trv-search-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/trv-sidebar/trv-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-akun {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin-left: 27px;\r\n    margin-top: -9px;\r\n    margin-bottom: 20px;\r\n    text-align: left;\r\n    color: #4a4a4a;\r\n    display: inline-block;\r\n}\r\n\r\n.root-akun {\r\n    font-size: 15px;\r\n    margin-left: 125px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.show {\r\n    display: none !important;\r\n}\r\n\r\n.btn-toggle {\r\n    display: none;\r\n}\r\n\r\n.wrapper {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: stretch;\r\n        align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    transition: all .5s ease;\r\n}\r\n\r\n.sidebar-nav {\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.sidebar-nav li {\r\n    text-indent: 0;\r\n    line-height: 45px;\r\n}\r\n\r\n#sidebar .sidebar-nav li a {\r\n    display: block;\r\n    text-decoration: none;\r\n}\r\n\r\n.sidebar-nav li a {\r\n    color: #4a4a4a;\r\n}\r\n\r\n.sidebar-nav li a:focus {\r\n    background-color: #f7f7f7;\r\n    color: #ab47bc;\r\n    width: 85%;\r\n}\r\n\r\n#sidebar .sidebar-nav li a .sidebar-icon {\r\n    width: 45px;\r\n    height: 45px;\r\n    font-size: 15px;\r\n    padding: 0 2px;\r\n    display: inline-block;\r\n    text-indent: 15px;\r\n    margin-right: 10px;\r\n    float: left;\r\n}\r\n\r\n#sidebar .sidebar-nav li ul.panel-collapse {\r\n    list-style: none;\r\n    -moz-padding-start: 0;\r\n    -webkit-padding-start: 0;\r\n    -khtml-padding-start: 0;\r\n    -o-padding-start: 0;\r\n    padding: 0;\r\n}\r\n\r\n#sidebar .sidebar-nav li ul.panel-collapse li i {\r\n    margin-right: 10px;\r\n}\r\n\r\n#sidebar .sidebar-nav li ul.panel-collapse li {\r\n    text-indent: 15px;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n}\r\n\r\n@media (min-width:450px) and (max-width: 992px) {\r\n    .btn-toggle {\r\n        display: none;\r\n    }\r\n    .wrapper #sidebar {\r\n        width: 76px;\r\n        margin-left: 0px;\r\n    }\r\n    #sidebar {\r\n        min-width: 82px;\r\n        max-width: 82px;\r\n        background: #fbfbfb;\r\n        transition: all .5s ease;\r\n    }\r\n    .sidebar-nav li a span:nth-child(2) {\r\n        display: none;\r\n    }\r\n    #sidebar .sidebar-nav li a .sidebar-icon {\r\n        width: 45px;\r\n        float: none;\r\n        height: 45px;\r\n        font-size: 15px;\r\n        padding: 0 2px;\r\n        display: inline-block;\r\n        text-indent: 15px;\r\n        margin-right: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width:450px) {\r\n    .btn-toggle {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        position: relative;\r\n        left: -3px;\r\n        top: -11px;\r\n        z-index: 9999;\r\n    }\r\n    .root-akun {\r\n        font-size: 15px;\r\n        margin-left: 15px;\r\n        color: #9e9e9e;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trv-sidebar/trv-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-sidebar\">\r\n    <div class=\"my-akun\"> Akun Saya</div>\r\n    <span class=\"root-akun\">Beranda > Akun > {{order}}</span>\r\n\r\n    <div class=\"wrapper\">\r\n        <nav id=\"sidebar\" [class.show]=\"show\">\r\n            <ul id=\"sidemenu\" class=\"sidebar-nav\">\r\n                <li>\r\n                    <a [routerLink]=\"['/JualTrip']\" [queryParams]=\"{order:'Profil'}\">\r\n                        <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i>\r\n                        </span>\r\n                        <span class=\"sidebar-title\">Profil</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['Pemesanan']\" [queryParams]=\"{order:'Pemesanan'}\">\r\n                        <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                        <span class=\"sidebar-title\">Pemesanan</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['Favorit']\" [queryParams]=\"{order:'Favorit'}\">\r\n                        <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                        <span class=\"sidebar-title\">Favorit</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['Notifikasi']\" [queryParams]=\"{order:'Notifikasi'}\">\r\n                        <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                        <span class=\"sidebar-title\">Notifikasi</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['Promo']\" [queryParams]=\"{order:'Promo'}\">\r\n                        <span class=\"sidebar-icon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                        <span class=\"sidebar-title\">Promo</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n        </nav>\r\n\r\n        <div class=\"content\">\r\n            <div class=\"btn-toggle\" (click)=\"toggleCollapse()\" role=\"button\"><span class=\"glyphicon glyphicon-chevron-left\"></span></div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/trv-sidebar/trv-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrvSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrvSidebarComponent = (function () {
    function TrvSidebarComponent(routeActive) {
        this.routeActive = routeActive;
        this.show = false;
    }
    TrvSidebarComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    TrvSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeActive.queryParams.filter(function (params) { return params.order; }).subscribe(function (params) {
            // console.log(params); {order: "popular"}
            _this.order = params.order;
            // console.log(this.order);  popular
        });
    };
    return TrvSidebarComponent;
}());
TrvSidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-trv-sidebar',
        template: __webpack_require__("../../../../../src/app/trv-sidebar/trv-sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trv-sidebar/trv-sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TrvSidebarComponent);

var _a;
//# sourceMappingURL=trv-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ubah-kata-sandi/ubah-kata-sandi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head {\r\n    width: 1366px;\r\n    height: 75px;\r\n    background-color: #f5f5f5;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.wrap-head {\r\n    width: 181px;\r\n    margin: 12px auto;\r\n}\r\n\r\n.head-password {\r\n    width: 181px;\r\n    height: 44px;\r\n}\r\n\r\n.wrapper-ubah-sandi {\r\n    width: 565px;\r\n    height: 302px;\r\n    padding-top: 10px;\r\n    margin: 68px auto 49px;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    background-color: #fafafa;\r\n    box-shadow: 0px 3px 4.7px 0.3px rgba(0, 0, 0, 0.24), 0px 2px 5.9px 0.1px rgba(0, 0, 0, 0.16);\r\n}\r\n\r\n.head-ubah-kata-sandi {\r\n    font-size: 25.2px;\r\n    font-weight: bold;\r\n    color: #4a4a4a;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.content-ubah-kata-sandi {\r\n    width: 255px;\r\n    font-size: 13px;\r\n    color: #4a4a4a;\r\n    margin-top: -8px;\r\n    margin-bottom: 15px;\r\n    margin-left: 150px;\r\n}\r\n\r\n.label-kata-sandi {\r\n    display: block;\r\n    margin-top: 10px;\r\n    margin-bottom: 0px;\r\n    text-align: left;\r\n    font-weight: bold;\r\n    margin-left: 88px;\r\n}\r\n\r\n.input-ubah-kata-sandi {\r\n    width: 399px;\r\n    height: 42px;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n    border: solid 1px #dddddd;\r\n    margin-top: 10px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.input-ubah-kata-sandi:focus {\r\n    border-color: #dddddd;\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px #e91e63;\r\n}\r\n\r\n.input-ubah-kata-sandi::-webkit-input-placeholder {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    color: rgba(158, 158, 158, 0.6);\r\n}\r\n\r\n.input-ubah-kata-sandi::-moz-placeholder {\r\n    font-size: 12px;\r\n    color: rgba(158, 158, 158, 0.6);\r\n    text-align: center;\r\n}\r\n\r\n.input-ubah-kata-sandi::-o-input-placeholder {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    color: rgba(158, 158, 158, 0.6);\r\n}\r\n\r\n.btn-ubah-kata-sandi {\r\n    width: 167px;\r\n    height: 35px;\r\n    border-radius: 3px;\r\n    margin-top: 20px;\r\n    background-color: #8e3caa;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n}\r\n\r\n.disini {\r\n    color: #8e3caa;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ubah-kata-sandi/ubah-kata-sandi.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"head\">\r\n    <div class=\"wrap-head\">\r\n        <a [routerLink]=\"['']\">\r\n            <img src=\"../assets/img/travinesia-logo.png\" class=\"head-password\">\r\n        </a>\r\n    </div>\r\n</header>\r\n\r\n<div class=\"wrapper-ubah-sandi text-center\">\r\n    <h2 class=\"head-ubah-kata-sandi\">Ubah Password</h2>\r\n    <p class=\"content-ubah-kata-sandi\">Silahkan masukkan password baru Anda, kemudian ulangi pada kolom berikutnya</p>\r\n    <input type=\"text\" class=\"input-ubah-kata-sandi\" placeholder=\"Masukkan Password Baru Anda\">\r\n    <input type=\"text\" class=\"input-ubah-kata-sandi\" placeholder=\"Ulangi Password Baru Anda\">\r\n    <a class=\"btn btn-ubah-kata-sandi\">Ubah Password</a>\r\n</div>\r\n\r\n<p class=\"text-center\">Masuk Travinesia, <a class=\"disini\">disini</a></p>"

/***/ }),

/***/ "../../../../../src/app/ubah-kata-sandi/ubah-kata-sandi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbahKataSandiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UbahKataSandiComponent = (function () {
    function UbahKataSandiComponent() {
    }
    UbahKataSandiComponent.prototype.ngOnInit = function () {
    };
    return UbahKataSandiComponent;
}());
UbahKataSandiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ubah-kata-sandi',
        template: __webpack_require__("../../../../../src/app/ubah-kata-sandi/ubah-kata-sandi.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ubah-kata-sandi/ubah-kata-sandi.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UbahKataSandiComponent);

//# sourceMappingURL=ubah-kata-sandi.component.js.map

/***/ }),

/***/ "../../../../../src/app/ubah-profil-travel/ubah-profil-travel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap-tittle {\r\n    position: relative;\r\n}\r\n\r\n.head-tittle {\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.info-paket {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n    width: 615px;\r\n    margin-left: 6px;\r\n    display: inline-table;\r\n}\r\n\r\n.highlight {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n}\r\n\r\n.highlight:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.wrap-slogan {\r\n    margin-top: 30px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.label-form {\r\n    display: block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.slogan-trip {\r\n    width: 663px;\r\n    height: 89px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.wrap-deskripsi {\r\n    margin-top: 30px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.deskripsi-trip {\r\n    width: 663px;\r\n    height: 89px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.wrap-alamat {\r\n    margin-top: 30px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.alamat-trip {\r\n    width: 663px;\r\n    height: 89px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n    resize: none;\r\n}\r\n\r\n.wrap-info-trip {\r\n    position: relative;\r\n}\r\n\r\n.label-form {\r\n    display: block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.form-sort {\r\n    position: absolute;\r\n    top: 25px;\r\n    width: 238px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.label-phone {\r\n    display: block;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.phone-trip {\r\n    position: absolute;\r\n    width: 238px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n    border: solid 1px #dddddd;\r\n}\r\n\r\n.wrap-btn-trv {\r\n    position: relative;\r\n    text-align: right;\r\n    margin-top: 70px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.batal {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ab47bc;\r\n    margin-right: 20px;\r\n}\r\n\r\n.batal:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-trv-ubah {\r\n    width: 282px;\r\n    height: 44px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    border: 1px solid #ab47bc;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: normal;\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ubah-profil-travel/ubah-profil-travel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-tittle\">\r\n    <p class=\"head-tittle\">Ubah Profil Travel </p>\r\n</div>\r\n\r\n<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n<p class=\"info-paket\">Logo dan Nama tidak dapat dirubah demi menjaga kredibelitas traveller terhadap Travel Anda. Baca selengkapnya di <a href=\"\" class=\"highlight\"> Syarat dan ketentuan </a> Travinesia</p>\r\n\r\n<div class=\"wrap-slogan\">\r\n    <label class=\"label-form\" for=\"Slogan\">Slogan </label>\r\n    <div class=\"input-group\">\r\n        <textarea class=\"slogan-trip form-control\" id=\"Slogan\"> Mencari dan memberi yang terbaik </textarea>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"wrap-deskripsi\">\r\n    <label class=\"label-form\" for=\"Deskripsi\">Deskripsi </label>\r\n    <div class=\"input-group\">\r\n        <textarea class=\"deskripsi-trip form-control\" id=\"Deskripsi\"> Menjual paket trip ke wakanda juga loh!</textarea>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"wrap-alamat\">\r\n    <label class=\"label-form\" for=\"Alamat\">Alamat Kantor </label>\r\n    <div class=\"input-group\">\r\n        <textarea class=\"alamat-trip form-control\" id=\"Alamat\"> Tepat di depan PolongoShop</textarea>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"wrap-info-trip\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <label class=\"label-form\" for=\"provinsi\"> Provinsi </label>\r\n            <select class=\"form-control form-sort\">\r\n                                              <option >Pilih Provinsi</option>\r\n                                              <option >Nanggroe Aceh Darussalam </option>\r\n                                              <option >Sumatra Utara</option>\r\n                                              <option >Sumatra Selatan </option>\r\n                                              <option >Sumatra Barat</option>\r\n                                              <option >Bengkulu</option>\r\n                                              <option >Riau</option>\r\n                                              <option >Kepulauan Riau</option>\r\n                                              <option >Jambi</option>\r\n                                              <option >Lampung</option>\r\n                                              <option >Bangka Belitung</option>\r\n                                              <option >Kalimantan Barat</option>\r\n                                              <option >Kalimantan Timur</option>\r\n                                              <option >Kalimantan Selatan</option>\r\n                                              <option >Kalimantan Tengah</option>\r\n                                              <option >Kalimantan Utara</option>\r\n                                              <option >Banten </option>\r\n                                              <option >DKI Jakarta  </option>\r\n                                              <option >Jawa Barat </option>\r\n                                              <option >Jawa Tengah </option>\r\n                                              <option >DI Yogyakarta </option>\r\n                                              <option >Jawa Timur </option>\r\n                                              <option >Bali </option>\r\n                                              <option >Nusa Tenggara Timur </option>\r\n                                              <option >Nusa Tenggara Barat </option>\r\n                                              <option >Gorontalo </option>\r\n                                              <option >Sulawesi Barat </option>\r\n                                              <option >Sulawesi Tengah </option>\r\n                                              <option >Sulawesi Utara </option>\r\n                                              <option >Sulawesi Tenggara </option>\r\n                                              <option >Sulawesi Selatan </option>\r\n                                              <option >Maluku Utara </option>\r\n                                              <option >Maluku </option>\r\n                                              <option >Papua Barat </option>\r\n                                              <option >Papua  </option>\r\n                                          </select>\r\n        </div>\r\n\r\n        <div class=\"col-md-7\">\r\n            <label class=\"label-phone\" for=\"NoTelepon\"> No Telepon </label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"phone-trip form-control\" value=\"085759759395\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-btn-trv\">\r\n        <a href=\"\" class=\"batal\">Batal </a>\r\n        <button class=\"btn-trv-ubah\"> Ubah dan Simpan </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ubah-profil-travel/ubah-profil-travel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbahProfilTravelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UbahProfilTravelComponent = (function () {
    function UbahProfilTravelComponent() {
    }
    UbahProfilTravelComponent.prototype.ngOnInit = function () {
    };
    return UbahProfilTravelComponent;
}());
UbahProfilTravelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ubah-profil-travel',
        template: __webpack_require__("../../../../../src/app/ubah-profil-travel/ubah-profil-travel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ubah-profil-travel/ubah-profil-travel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UbahProfilTravelComponent);

//# sourceMappingURL=ubah-profil-travel.component.js.map

/***/ }),

/***/ "../../../../../src/app/ubah-profil/ubah-profil.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form{\r\n    margin-top: 30px;\r\n   \r\n}\r\n\r\n.form-group{\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.masukan-profil{\r\n    font-size: 13px;\r\n    width: 707px;\r\n    line-height: 1.56;\r\n}\r\n\r\n.profil{\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    font-family: sans-serif;\r\n    display: initial;\r\n}\r\n\r\n.col-md-4{\r\n    padding-top: 30px;\r\n    margin-left: -38px;\r\n}\r\n\r\n.form-select{\r\n    padding-top: 3px;\r\n}\r\n\r\n.label-radio{\r\n    width: 130px;\r\n    float: left;\r\n    padding-right: 16px;\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n    color: #4a4a4a;\r\n}\r\n\r\n.form-label{\r\n    width: 130px;\r\n    float: left;\r\n    padding-right: 16px;\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n    color: #4a4a4a;\r\n    padding-top: 6px; \r\n}\r\n\r\n.form-nama input{\r\n    width: 369px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    background-color: #fdfdfd;\r\n}\r\n\r\n.form-tanggal{\r\n    width: 109px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    background-color: #fdfdfd;\r\n    \r\n}\r\n\r\n\r\n.form-bulan{\r\n    width: 109px;\r\n    height: 36px;\r\n    display: inline-block;\r\n    margin-left: 17px;\r\n    margin-right: 17px;\r\n    background-color: #fdfdfd;\r\n    \r\n}\r\n\r\n.form-tahun{\r\n    width: 109px;\r\n    height: 36px;\r\n    display: inline-block;\r\n    background-color: #fdfdfd;\r\n    \r\n}\r\n\r\n.form-identitas input{\r\n    width: 369px;\r\n    height: 36px;\r\n    display: inline-block;\r\n    background-color: #fdfdfd;\r\n}\r\n\r\n.form-telepone input{\r\n    width: 189px;\r\n    height: 36px;\r\n    display: inline-block;\r\n    background-color: #fdfdfd;\r\n}\r\n\r\n.form-control{\r\n    margin-bottom: 15px;\r\n    height: 36px;\r\n    font-size: 13px;\r\n    text-align: left;\r\n    color: #9e9e9e;\r\n    display: inline-block;\r\n}\r\n\r\n.form-email input{\r\n    width: 369px;\r\n    height: 36px;\r\n    display: inline-block;\r\n    background-color: #fdfdfd;\r\n}\r\n\r\n.image{\r\n    width:155px;\r\n    height:155px;\r\n    margin: auto;\r\n    display: block; \r\n    border-radius: 50%;\r\n    border: solid 5px #dddddd;\r\n    padding: 3px;\r\n}\r\n\r\n.ubahPr{\r\n    margin: auto;\r\n    display: block;\r\n    margin-top: 30px;\r\n    width: 169px;\r\n    height: 88px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #dddddd;\r\n\r\n}\r\n\r\n.btn-ubahProfil{\r\n    margin: auto;\r\n    display: block;\r\n    width: 168px;\r\n    height: 33px;\r\n    background-color: #ab47bc;\r\n    color: white;\r\n    font-size: 13px;\r\n    border-radius: 0;\r\n    font-weight: bold;\r\n}\r\n.btn-deskripsi{\r\n    padding: 12px 12px;\r\n    font-family: sans-serif;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    line-height: 1.31;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.btn-ubahPassword{\r\n    margin: auto;\r\n    display: block;\r\n    margin-top: 24px;\r\n    width: 169px;\r\n    height: 33px;\r\n    border-radius: 3px;\r\n    background-color: #ffffff;\r\n    border: solid 1px #e0e0e0;\r\n    font-weight: bold;\r\n    font-size: 13px\r\n}\r\n\r\n.glyphicon-lock{\r\n    color: #4a4a4a;\r\n}\r\n\r\n\r\n.btn-simpan{\r\n    width: 120px;\r\n    height: 34px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: white;\r\n    margin-top: 24px;\r\n}\r\n\r\n.trv-notice{\r\n    width: 774px;\r\n    height: 41px;\r\n    border-radius: 3px;\r\n    background-color: #f5f5f5;\r\n    border: solid 1px #dddddd;\r\n    margin-top: 26px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.txt-notice{\r\n    width: 500px;\r\n    height: 13px;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    padding-top: 10px;\r\n    letter-spacing: normal;\r\n    margin: auto;\r\n    display: block;\r\n    color: #ab47bc;\r\n}\r\n\r\n.trv-radio{\r\n    margin-top: -22px;\r\n}\r\n\r\n.radio-trv{\r\n    padding-top: 13px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.radio{\r\n    margin-left: -30px;\r\n}\r\n\r\n\r\n\r\n.modal-header{\r\n    border-bottom: none;\r\n    background-color: #f5f5f5;\r\n    padding-left: 20px;\r\n}\r\n\r\n.close{\r\n    width: 26px;\r\n    height: 26px;\r\n    border-radius: 3px;\r\n    background-color: #d24d57;\r\n    color: white;\r\n    opacity: 1;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n}\r\n\r\n.glyphicon{\r\n    margin-right: 10px;\r\n    color: #ab47bc;\r\n}\r\n\r\n.modal-title{\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.modal-footer{\r\n    border-top: none;\r\n    padding-right: 250px;\r\n    margin-top: 30px; \r\n}\r\n\r\n.modal-form{\r\n    width: 375px;\r\n    height: 30px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.modal-body{\r\n    margin-left: 35px;\r\n    margin-top: 27px;\r\n}\r\n\r\n.label-modal{\r\n    width: 185px;\r\n    font-family: sans-serif;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n}\r\n\r\n.modal-content{\r\n    width: 681px;\r\n    height: 393px;\r\n    border-radius: 3px;\r\n    margin-top: 100px;\r\n    margin-left: -40px;\r\n}\r\n\r\n.btn-batal{\r\n    width: 90px;\r\n    height: 34px;\r\n    border-radius: 3px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n    background-color: #ffffff;\r\n    color: #4a4a4a;\r\n}\r\n.btn-save{\r\n    width: 90px;\r\n    height: 34px;\r\n    border-radius: 3px;\r\n    background-color: #ab47bc;\r\n    color: white;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\noptions li:hover {\r\n    background-color:#ab47bc;\r\n    color:white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ubah-profil/ubah-profil.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"page-content-wrapper\" role=\"main\">\r\n  <p class=\"profil\">Profil</p>\r\n  <p class=\"masukan-profil\">Masukkan profil Anda dengan benar. Travinesia akan menghubungi sesuai dengan informasi yang Anda masukkan. \r\n     Pastikan informasi pada Halaman Profil selalu update jika ada perubahan informasi terkait Anda.</p>\r\n  <div class=\"trv-notice\">\r\n    <span class=\"txt-notice\"> <b>Travinesia</b> akan selalu memberitahukan status terbaru pemesanan melaui email Anda </span>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"form\">\r\n      <form #fe=\"ngForm\" (ngSubmit)=\"submitEdit()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\" class=\" form-label\"> Nama Lengkap <p class=\"pull-right\">:</p></label>\r\n          <div class=\"form-nama\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editUser.name\" name=\"name\" #editUserName=\"ngModel\" autofocus> \r\n          </div>\r\n        </div> \r\n        <div class=\"form-group\">\r\n          <label for=\"tanggalLahir\" class=\"form-label\"> Tanggal Lahir <p class=\"pull-right\">:</p></label>\r\n            <div class=\"form-tanggal\">\r\n              <div class=\"form-group\">\r\n                <select class=\"form-control form-select\">\r\n                  <option>Tanggal</option>  \r\n                  <option>1</option>\r\n                  <option>2</option>\r\n                  <option>3</option>\r\n                  <option>4</option>\r\n                  <option>5</option>  \t\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-bulan\">\r\n              <div class=\"form-group\">\r\n                <select class=\"form-control form-select\">\r\n                  <option>Bulan</option>\r\n                  <option>Januari</option>\r\n                  <option>Februari</option>\r\n                  <option>Maret</option>\r\n                  <option>April</option>\r\n                  <option>Mei</option>\t\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-tahun\">\r\n              <div class=\"form-group\">\r\n                <select class=\"form-control form-select\">\r\n                  <option>Tahun</option>\r\n                  <option>1</option>\r\n                  <option>2</option>\r\n                  <option>3</option>\r\n                  <option>4</option>\r\n                  <option>5</option>\t\r\n                </select>\r\n              </div>\r\n            </div>\r\n          \r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"radio-trv\">\r\n            <label for=\"optradio\" class=\"label-radio\">Jenis Kelamin <p class=\"pull-right\">:</p></label>\r\n            <div class=\"radio\">\r\n              <label class=\"trv-radio\"><input type=\"radio\" name=\"gender\"><span class=\"outer\"><span class=\"inner\"></span></span>Laki-Laki</label>\r\n              <label class=\"trv-radio\"><input type=\"radio\" name=\"gender\"><span class=\"outer\"><span class=\"inner\"></span></span>Perempuan</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\" class=\"form-label\"> Email <p class=\"pull-right\">:</p></label>\r\n          <div class=\"form-email\">\r\n            <input id=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\">\r\n          </div> \r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"telephone\" class=\"form-label\"> No. HP <p class=\"pull-right\">:</p></label>\r\n          <div class=\"form-telepone\">\r\n            <input id=\"telephone\" type=\"text\" class=\"form-control\" formControlName=\"telephone\"> \r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"identity\" class=\"form-label\"> No Identitas <p class=\"pull-right\">:</p></label>\r\n          <div class=\"form-identitas\">\r\n            <input id=\"identity\" type=\"text\" class=\"form-control\" formControlName=\"identity\"> \r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-simpan\" type=\"submit\">Simpan</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <img src=\"assets/img/foto.png\" class=\"image\">\r\n    <div class=\"ubahPr\">\r\n      <button class=\"btn btn-ubahProfil\" type=\"file\">Ubah Foto Profil</button>\r\n      <p class=\"btn-deskripsi\">Maksimum ukuran file 2 Mb format.JPG,.JPEG atau.PNG</p>\r\n    </div>\r\n    <div class=\"ubahPa\">\r\n      <button class=\"btn btn-ubahPassword\" type=\"button\" data-toggle=\"modal\" data-target=\"#ubahpassword\">\r\n        <span class=\"glyphicon glyphicon-lock lock\"></span>Ubah Password</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"ubahpassword\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n          <p class=\"modal-title\"><span class=\"glyphicon glyphicon-lock\"></span> Ubah Password</p>   \r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label class=\"label-modal\">Password Lama</label>\r\n              <input type=\"text\" class=\"form-control modal-form\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"label-modal\">Password Baru</label>\r\n              <input type=\"text\" class=\"form-control modal-form\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"label-modal\">Ulangi Password Baru</label>\r\n              <input type=\"text\" class=\"form-control modal-form\">\r\n            </div>  \r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-batal\" data-dismiss=\"modal\">Batal</button>\r\n          <button type=\"button\" class=\"btn btn-save\">Simpan</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/ubah-profil/ubah-profil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbahProfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UbahProfilComponent = (function () {
    function UbahProfilComponent(appService) {
        this.appService = appService;
        this.editUser = {
            name: '',
            birthday: '',
            gender: '',
            email: '',
            telephone: '',
            identity_number: '',
            photo: ''
        };
    }
    UbahProfilComponent.prototype.ngOnInit = function () {
    };
    UbahProfilComponent.prototype.submitEdit = function () {
        this.appService.editProfileUser(this.editUser).subscribe(function (editUser) {
            console.log(editUser);
        });
    };
    return UbahProfilComponent;
}());
UbahProfilComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ubah-profil',
        template: __webpack_require__("../../../../../src/app/ubah-profil/ubah-profil.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ubah-profil/ubah-profil.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], UbahProfilComponent);

var _a;
//# sourceMappingURL=ubah-profil.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map