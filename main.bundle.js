webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  padding-bottom: 20px;\n}\n\n.navbar {\n  margin-bottom: 20px;\n}\n\n.footer {\n  padding-top: 1.5rem;\n  color: #777;\n  border-top: .05rem solid gray;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <main role=\"main\" style=\"margin-top:10px;\">\n    <div class=\"jumbotron\">\n      <div class=\"col-sm-12 mx-auto\" style=\"margin-top:-40px;\">\n        <h1>SkorPlace - Demo</h1>\n        <app-skor-map></app-skor-map>\n        <br/>\n        <footer class=\"footer\">\n          <p>The site only for demo purpose.</p>\n        </footer>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_snazzy_info_window__ = __webpack_require__("../../../../@agm/snazzy-info-window/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_main_service__ = __webpack_require__("../../../../../src/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__skor_map_skor_map_component__ = __webpack_require__("../../../../../src/app/skor-map/skor-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













console.log("env", __WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__skor_map_skor_map_component__["a" /* SkorMapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyBkfxUiMAmNUnC4JnwZEqOnmnf93r0YNVQ"
                }),
                __WEBPACK_IMPORTED_MODULE_5__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/skor-map/skor-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 450px;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skor-map/skor-map.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Possition ( Lat: {{ position.lat | number:'1.3-3' }} ,Lng: {{ position.lng | number:'1.3-3' }} ), Radius: {{ radius }} meters.\n</p>\n<input type=\"number\" [(ngModel)]=\"radius\"\n   (ngModelChange)=\"refreshMap()\" class=\"form-control col-sm-3\" placeholder=\"Radius in Kilometers\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" [(ngModel)]=\"show_all\"\n           (ngModelChange)=\"refreshMap()\" class=\"form-check-input\">\n           Show All Rewards (Show all in 1000km)\n  </label>\n</div>\n<br/>\n<agm-map [latitude]=\"lat\" [zoom]=\"14\" [longitude]=\"lng\" [disableDefaultUI]=\"true\">\n  <agm-circle [latitude]=\"position.lat\" [fillOpacity]=\"0.2\" [longitude]=\"position.lng\" [radius]=\"radius*1000\"></agm-circle>\n  <agm-marker [iconUrl]=\"'https://weiztech.github.io/assets/image/hiker.png'\"\n    (markerClick)=\"clickedMarker()\" (dragEnd)=\"onDragEnd($event)\"\n    [latitude]=\"position.lat\" [longitude]=\"position.lng\" [markerDraggable]=\"true\">\n    <agm-snazzy-info-window [maxWidth]=\"200\" [closeWhenOthersOpen]=\"true\">\n      <ng-template>\n        My Location\n      </ng-template>\n    </agm-snazzy-info-window>\n  </agm-marker>\n\n  <agm-marker *ngFor=\"let reward of rewards_locations_geo\" (markerClick)=\"selectReward(reward)\" [latitude]=\"reward.lat\" [longitude]=\"reward.lng\">\n    <agm-snazzy-info-window [maxWidth]=\"250\" [maxHeight]=\"500\" [closeWhenOthersOpen]=\"true\">\n      <ng-template>\n        <img style=\"max-width:100px;\" [src]=\"getImage(selected_reward.reward_obj.img.display)\" />\n        <br/>\n        <h6>{{ selected_reward.name }}</h6>\n        <p>{{ selected_reward.address }}</p>\n        <p>{{ getDistance(reward.distance) }} meters</p>\n      </ng-template>\n    </agm-snazzy-info-window>\n  </agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/skor-map/skor-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkorMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkorMapComponent = (function () {
    function SkorMapComponent(service) {
        var _this = this;
        this.service = service;
        this.lat = -6.2505;
        this.lng = 106.825;
        this.radius = 1;
        this.show_all = true;
        this.position = { lat: -6.252, lng: 106.835 };
        this.rewards_locations_geo = [];
        this.rewards = [];
        this.reward_locations = [];
        this.env = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */]["env"];
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url[this.env];
        service.list_skor("skor_category").valueChanges().subscribe(function (resp) {
            //console.log("categories", resp)
        });
        service.list_skor("skor_contact").valueChanges().subscribe(function (resp) {
            //console.log("contacts", resp)
        });
        service.list_skor("skor_reward_location").valueChanges().subscribe(function (resp) {
            _this.reward_locations = resp;
        });
        service.list_skor("skor_reward_location").valueChanges().subscribe(function (resp) {
            resp.forEach(function (data, i) {
                _this.reward_locations[data.id] = data;
            });
        });
        service.list_skor("skor_rewards").valueChanges().subscribe(function (resp) {
            resp.forEach(function (data, i) {
                _this.rewards[data.id] = data;
            });
        });
        //service.seedDatabase()
        console.log("get locations", service.getLocations(this.getRadius(), [this.position.lat, this.position.lng]));
        //service.rewards_query()
        this.getRewards();
    }
    SkorMapComponent.prototype.ngOnInit = function () {
    };
    SkorMapComponent.prototype.clickedMarker = function () {
        console.log("clicked", this);
    };
    SkorMapComponent.prototype.getRewards = function () {
        var _this = this;
        this.service.near_rewards.subscribe(function (resp) {
            //console.log("near rewards", resp)
            _this.rewards_locations_geo = resp;
        });
    };
    SkorMapComponent.prototype.selectReward = function (reward) {
        this.selected_reward = this.reward_locations[Number(reward.key)];
        this.selected_reward.reward_obj = this.rewards[Number(this.selected_reward.reward)];
        console.log("selected_reward", this.selected_reward, this.url);
    };
    SkorMapComponent.prototype.getImage = function (image) {
        if (image) {
            return this.url + image;
        }
        return "https://i0.wp.com/d2leza6sedwevk.cloudfront.net/wp-content/uploads/2017/11/01233544/angular-logo2.png?resize=886%2C668&ssl=1";
    };
    SkorMapComponent.prototype.getKmRadius = function (meters) {
        return meters / 1000;
    };
    SkorMapComponent.prototype.getRadius = function () {
        if (this.show_all) {
            return 1000;
        }
        return this.radius;
    };
    SkorMapComponent.prototype.getDistance = function (distance_km) {
        // return distance in m
        var meters = distance_km * 1000;
        return meters.toFixed(2);
    };
    SkorMapComponent.prototype.refreshMap = function () {
        this.service.resetNearRewards();
        this.service.getLocations(this.getRadius(), [this.position.lat, this.position.lng]);
        this.getRewards();
    };
    SkorMapComponent.prototype.onDragEnd = function (event) {
        this.service.resetNearRewards();
        this.position = {
            lat: Number(event.coords.lat.toFixed(3)),
            lng: Number(event.coords.lng.toFixed(3)),
        };
        this.service.getLocations(this.getRadius(), [this.position.lat, this.position.lng]);
        this.getRewards();
    };
    SkorMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-skor-map',
            template: __webpack_require__("../../../../../src/app/skor-map/skor-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skor-map/skor-map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]])
    ], SkorMapComponent);
    return SkorMapComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    /*firebase: {
      apiKey: "AIzaSyBajOGVxBwzCKBBUPTNBzfETDBfoJGcUFw",
      authDomain: "testo-83ea4.firebaseapp.com",
      databaseURL: "https://testo-83ea4.firebaseio.com",
      projectId: "testo-83ea4",
      storageBucket: "testo-83ea4.appspot.com",
      messagingSenderId: "102895741749"
    },*/
    firebase: {
        apiKey: "AIzaSyCSJxFHoxz9r6Xkmf-0LtReV4MoSjLUMLA",
        authDomain: "staging-skor.firebaseapp.com",
        databaseURL: "https://staging-skor.firebaseio.com",
        projectId: "staging-skor",
        storageBucket: "staging-skor.appspot.com",
        messagingSenderId: "355962584990"
    },
    env: "stage",
    url: {
        stage: "https://staging.skorpoints.com",
        local: "http://localhost:8000",
        production: "https://skorpoints.com"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_geofire__ = __webpack_require__("../../../../geofire/dist/geofire.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainService = (function () {
    function MainService(http, db, afa) {
        var _this = this;
        this.http = http;
        this.db = db;
        this.afa = afa;
        this.near_rewards = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        var signIn = afa.auth.signInWithEmailAndPassword("firebase-user@skor.com", "fskor1234");
        //const signIn = afa.auth.signInWithEmailAndPassword("admin@skor.com", "jXyW43")
        //const signIn = afa.auth.signInWithEmailAndPassword("test@test.com", "tester")
        signIn.then(function (value) {
            _this.user = value;
        });
        this.dbRef = this.db.list('skor_reward_location');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_3_geofire__(this.dbRef.query);
    }
    MainService.prototype.people = function () {
        return this.http.get('https://swapi.co/api/people/');
    };
    MainService.prototype.list_skor = function (list_name) {
        return this.db.list(list_name);
    };
    /// Adds GeoFire data to database
    MainService.prototype.setLocation = function (key, coords) {
        this.geoFire.set(key, coords)
            .then(function (_) { return console.log('location updated'); })
            .catch(function (err) { return console.log(err); });
    };
    MainService.prototype.resetNearRewards = function () {
        this.near_rewards = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        //console.log("reset", this.near_rewards)
    };
    MainService.prototype.getLocations = function (radius, coords) {
        var _this = this;
        this.geoFire.query({
            center: coords,
            radius: radius
        })
            .on('key_entered', function (key, location, distance) {
            //console.log("Key entered Locations", key, location, distance)
            var hit = {
                location: location,
                distance: distance,
                key: key,
                lat: location[0],
                lng: location[1]
            };
            var currentHits = _this.near_rewards.value;
            currentHits.push(hit);
            _this.near_rewards.next(currentHits);
        });
    };
    MainService.prototype.seedDatabase = function () {
        var _this = this;
        var dummyPoints = [
            [-6.221, 106.82],
            [-6.261, 106.821],
            [-6.271, 106.822],
            [-6.251, 106.823],
            [-6.266, 106.823],
            [-6.251, 106.828]
        ];
        dummyPoints.forEach(function (val, idx) {
            var name = "dummyx-location-" + idx;
            //console.log(idx)
            _this.setLocation(name, val);
        });
    };
    MainService.prototype.rewards_query = function () {
        var dbRef = this.list_skor("skor_rewards");
        var geo = new __WEBPACK_IMPORTED_MODULE_3_geofire__(dbRef.query);
        var geoQuery = geo.query({
            radius: 1000,
            center: [-6.251, 106.825]
        });
        geoQuery.on('key_entered', function (key, location, distance) {
            //console.log("Key entered", key, location, distance)
        });
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map