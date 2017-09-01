/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ele = __webpack_require__(1);
	
	var _ele2 = _interopRequireDefault(_ele);
	
	var _resources = __webpack_require__(4);
	
	var _resources2 = _interopRequireDefault(_resources);
	
	var _xhr = __webpack_require__(5);
	
	var _xhr2 = _interopRequireDefault(_xhr);
	
	var _console = __webpack_require__(7);
	
	var _console2 = _interopRequireDefault(_console);
	
	var _timeline = __webpack_require__(8);
	
	var _timeline2 = _interopRequireDefault(_timeline);
	
	var _main = __webpack_require__(9);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _menu = __webpack_require__(10);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _cookie = __webpack_require__(11);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _localStorage = __webpack_require__(12);
	
	var _localStorage2 = _interopRequireDefault(_localStorage);
	
	var _jsCookie = __webpack_require__(13);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	__webpack_require__(14);
	
	__webpack_require__(19);
	
	var _util = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __init = function __init() {
	    //let main = __main()
	    window.Cookies = _jsCookie2.default;
	    var xhr = __xhrInit();
	    var conl = __consoleInit();
	    var resources = __resourcesInit();
	    var menu = __menuInit();
	    window.onload = function () {
	        var body = _util.select.E('body');
	        _util.dynamicLoading.css('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
	        var mainContainer = (0, _util.crtE)({
	            classes: ['main-container']
	        });
	        var element = __domElementInit();
	        //timeline 等待文档加载好输出
	        var main = __main();
	        var timeline = __timelineInit();
	        var coo = __CooInit();
	        var ls = __LocalStorageInit();
	        var components = {
	            console: conl,
	            ele: element,
	            resourse: resources,
	            timeline: timeline,
	            xhr: xhr,
	            root: mainContainer,
	            coo: coo,
	            ls: ls
	        };
	        body.appendChild(menu);
	        new _main2.default(components);
	        body.appendChild(mainContainer);
	    };
	};
	
	//stage_1
	var __main = function __main() {
	    var root = (0, _util.crtE)({
	        classes: ['main']
	    });
	    return root;
	};
	
	var __domElementInit = function __domElementInit() {
	    var __root = (0, _util.crtE)({
	        classes: ['elements_container', 'container']
	    });
	    new _ele2.default({ root: __root });
	    return __root;
	};
	
	var __consoleInit = function __consoleInit() {
	    var __root = (0, _util.crtE)({
	        classes: ['console_container', 'container']
	    });
	    new _console2.default({ root: __root });
	    return __root;
	};
	
	var __xhrInit = function __xhrInit() {
	    var __root = (0, _util.crtE)({
	        classes: ['xhr_container', 'container']
	    });
	    new _xhr2.default({ root: __root });
	    return __root;
	};
	
	var __timelineInit = function __timelineInit() {
	    var __root = (0, _util.crtE)({
	        classes: ['timeline_container', 'container']
	    });
	    new _timeline2.default({ root: __root });
	    return __root;
	};
	
	var __resourcesInit = function __resourcesInit() {
	    var __root = (0, _util.crtE)({
	        classes: ['resources_container', 'container']
	    });
	    new _resources2.default({ root: __root });
	    return __root;
	};
	
	var __menuInit = function __menuInit() {
	    var __root = (0, _util.crtE)({
	        classes: ['menu_container']
	    });
	    new _menu2.default({ root: __root });
	    return __root;
	};
	
	var __CooInit = function __CooInit() {
	    var __root = (0, _util.crtE)({
	        classes: ['coo_container']
	    });
	    new _cookie2.default({ root: __root });
	    return __root;
	};
	
	var __LocalStorageInit = function __LocalStorageInit() {
	    var __root = (0, _util.crtE)({
	        classes: ['ls_container']
	    });
	    new _localStorage2.default({ root: __root });
	    return __root;
	};
	
	__init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	var _detail = __webpack_require__(3);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ELement = function () {
	    function ELement(props) {
	        _classCallCheck(this, ELement);
	
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['elements']
	        });
	        this.detail = (0, _util.crtE)({
	            classes: ['detail-container', 'ele-style']
	        });
	        this.__init();
	    }
	
	    _createClass(ELement, [{
	        key: 'eventBind',
	        value: function eventBind(root) {
	            var containers = root.querySelectorAll('.start-span');
	
	            var _loop = function _loop(i) {
	                containers[i].addEventListener('click', function (e) {
	                    if (containers[i].nextSibling.className.indexOf('hide') !== -1) {
	                        containers[i].nextSibling.className = containers[i].nextSibling.className.replace(' hide', '');
	                        containers[i].className = containers[i].className.replace(' icon-plus', ' icon-minus');
	                    } else {
	                        containers[i].nextSibling.className += ' hide';
	                        containers[i].className = containers[i].className.replace(' icon-minus', ' icon-plus');
	                    }
	                });
	            };
	
	            for (var i = 0; i < containers.length; i++) {
	                _loop(i);
	            }
	        }
	    }, {
	        key: 'getText',
	        value: function getText(e) {
	            var _this = this;
	
	            var ele = e;
	            var tagName = e.tagName.toLowerCase();
	            var ele_attrs = '';
	            var root = (0, _util.crtE)({
	                classes: "text-html"
	            });
	            for (var i = 0; i < e.attributes.length; i++) {
	                ele_attrs += e.attributes[i].name + ":\"" + e.attributes[i].value + "\" ";
	            }
	            var start = (0, _util.crtE)({
	                tagName: 'span',
	                classes: ["start-span", 'icon-plus'],
	                text: "<" + tagName + " " + ele_attrs + '>'
	            });
	            start.addEventListener('click', function (event) {
	                // let style_from_page = ele.style
	                // let style_from_file = css(ele)
	                // let computed_style = window.getComputedStyle(ele)
	                // let arr = {}
	                // log(style_from_page)
	                // //从页面获取
	                // for(let i in style_from_page){
	                //     if(style_from_page[i] !== '' && typeof style_from_page[i] !== 'function'){
	                //         arr[i] = computed_style[i]
	                //     }
	                // }
	                // //从文件获取
	                // let reg = new RegExp('\{(.| )+?\}')
	                // for(let i in style_from_file){
	                //     let s = style_from_file[i]
	                //     let a = {}
	                //     s.split("{")[1].split('}')[0].trim().split(';')
	                //     for(let j = 0; j < s.length-1; j++){
	                //         let p = s[j].split(':')[0].trim()
	                //         arr[p] = computed_style[p]
	                //     }
	                // }
	                //reg.exec()
	                //str.split("{")[1].split('}')[0].trim().split(';')
	                var arr = (0, _util.filterInheritedStyles)(ele);
	                _this.detail.updata(arr);
	            });
	            var content = (0, _util.crtE)({
	                tagName: 'span',
	                classes: ["content-span", 'hide']
	            });
	
	            var end = (0, _util.crtE)({
	                tagName: 'span',
	                classes: "end-span",
	                text: "<\/" + tagName + ">"
	            });
	            root.appendChild(start);
	            root.appendChild(content);
	            root.appendChild(end);
	            return root;
	        }
	    }, {
	        key: 'getElements',
	        value: function getElements(__root) {
	            var textRoot = this.getText(__root);
	            if (__root.children.length > 0) {
	                for (var i = 0; i < __root.children.length; i++) {
	                    var t = textRoot.querySelector('.content-span');
	                    var c = this.getElements(__root.children[i]);
	                    t.appendChild(c);
	                }
	            }
	            return textRoot;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.container.innerHTML = '';
	        }
	
	        // goDetail(){
	        //     let net = this.root.parentNode
	
	        //     net.appendChild(this.detail)
	        // }
	
	    }, {
	        key: 'detailInit',
	        value: function detailInit() {
	            new _detail2.default({
	                root: this.detail
	            });
	        }
	    }, {
	        key: '__init',
	        value: function __init() {
	            this.detailInit();
	            var __domRoot = _util.select.E('html');
	            var __content = this.getElements(__domRoot);
	            this.root.appendChild(__content);
	            this.root.appendChild(this.detail);
	            this.eventBind(__content);
	        }
	    }]);
	
	    return ELement;
	}();
	
	exports.default = ELement;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var log = console.log.bind(console);
	
	//sectors
	var select = {
	    E: function E(e) {
	        return document.querySelector(e);
	    },
	    E_s: function E_s(e) {
	        return document.querySelectorAll(e);
	    }
	};
	
	var crtE = function crtE(options) {
	    var _options = options ? options : {};
	    var _classes = _options.classes ? _options.classes : [];
	    var _tagName = _options.tagName ? _options.tagName : "div";
	    var _attrs = _options.attrs ? _options.attrs : {};
	    var _text = _options.text ? _options.text : '';
	    var _html = _options.html ? _options.html : '';
	    var e = document.createElement(_tagName);
	    e.innerText = _text;
	    e.className = _classes.toString().split(",").join(' ');
	    if (_attrs.length > 0) {
	        for (i in _attrs) {
	            e.setAttribute(i, _attrs[i]);
	        }
	    }
	    return e;
	};
	var dynamicLoading = {
	    css: function css(path) {
	        if (!path || path.length === 0) {
	            throw new Error('argument "path" is required !');
	        }
	        var head = document.getElementsByTagName('head')[0];
	        var link = document.createElement('link');
	        link.href = path;
	        link.rel = 'stylesheet';
	        link.type = 'text/css';
	        head.appendChild(link);
	    },
	    js: function js(path) {
	        if (!path || path.length === 0) {
	            throw new Error('argument "path" is required !');
	        }
	        var head = document.getElementsByTagName('head')[0];
	        var script = document.createElement('script');
	        script.src = path;
	        script.type = 'text/javascript';
	        head.appendChild(script);
	    }
	};
	
	var css = function css(el) {
	    var sheets = document.styleSheets,
	        ret = [];
	    el.matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
	    for (var i in sheets) {
	        var rules = sheets[i].rules || sheets[i].cssRules;
	        for (var r in rules) {
	            if (el.matches(rules[r].selectorText)) {
	                ret.push(rules[r].cssText);
	            }
	        }
	    }
	    return ret;
	};
	
	function filterInheritedStyles(el) {
	    var tester = document.createElement(el.tagName);
	    document.body.appendChild(tester); // 基础元素必须插入到文档中才能计算出默认样式
	    var defaultStyle = window.getComputedStyle(tester, null);
	    log(defaultStyle);
	    var currentStyle = window.getComputedStyle(el, null);
	    log(currentStyle);
	    var ret = {};
	
	    for (var k in currentStyle) {
	        if (currentStyle.getPropertyValue(k) !== defaultStyle.getPropertyValue(k)) {
	            ret[k] = currentStyle.getPropertyValue(k);
	        }
	    }
	
	    document.body.removeChild(tester);
	    return ret;
	}
	
	exports.log = log;
	exports.crtE = crtE;
	exports.select = select;
	exports.dynamicLoading = dynamicLoading;
	exports.css = css;
	exports.filterInheritedStyles = filterInheritedStyles;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Detail = function () {
	    function Detail(props) {
	        _classCallCheck(this, Detail);
	
	        this.data = props.data ? props.data : {};
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['detail']
	        });
	        this.dataContainer = (0, _util.crtE)({
	            classes: ['data-container']
	        });
	        this.init();
	    }
	
	    //方法对外暴露 用来更换信息
	
	
	    _createClass(Detail, [{
	        key: 'updata',
	        value: function updata(data) {
	            this.data = data;
	            var o = this.container;
	            o.innerHTML = '';
	            this.filldata();
	        }
	    }, {
	        key: 'filldata',
	        value: function filldata() {
	            var o = this.data;
	            for (var i in o) {
	                var d_item = (0, _util.crtE)({
	                    classes: ['data-item', 'item', 'box']
	                });
	                d_item.innerHTML = '<div>' + i + ':</div><div>' + o[i] + '</div>';
	                this.container.appendChild(d_item);
	            }
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            this.filldata();
	            this.root.appendChild(this.container);
	            this.root.updata = this.updata.bind(this);
	        }
	    }]);
	
	    return Detail;
	}();
	
	exports.default = Detail;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	var _detail = __webpack_require__(3);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Resources = function () {
	    function Resources(props) {
	        _classCallCheck(this, Resources);
	
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['resources']
	        });
	        this.detail = (0, _util.crtE)({
	            classes: ['detail-container', 'ele-style']
	        });
	        this.nav = (0, _util.crtE)({
	            classes: ['common-nav'],
	            text: 'Resource Timing'
	        });
	        this.resourcesList = performance.getEntries();
	        this.__init();
	    }
	
	    _createClass(Resources, [{
	        key: 'createResourcesDiv',
	        value: function createResourcesDiv(res) {
	            var _this = this;
	
	            var resouceContainer = (0, _util.crtE)({
	                classes: ['resource', 'item', 'box']
	            });
	            for (var i in res) {
	                var prop = (0, _util.crtE)({
	                    classes: ['res-prop']
	                });
	                prop.innerHTML = '<p>' + res[i] + '</p>';
	                resouceContainer.appendChild(prop);
	            }
	            resouceContainer.addEventListener('click', function (e) {
	                _this.detail.updata(res);
	                _this.goDetail();
	            });
	            return resouceContainer;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.container.innerHTML = '';
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            this.container.innerHTML = '';
	            for (var i in this.resourcesList) {
	                var resource = {};
	                resource.time = this.resourcesList[i].responseEnd - this.resourcesList[i].responseStart;
	                resource.name = this.resourcesList[i].name.split('/').slice(-2).join('/');
	                resource.url = this.resourcesList[i].name;
	                var resDom = this.createResourcesDiv(resource);
	                this.container.appendChild(resDom);
	            }
	        }
	    }, {
	        key: 'goDetail',
	        value: function goDetail() {
	            var net = this.root.parentNode;
	            net.innerHTML = '';
	            net.appendChild(this.detail);
	        }
	    }, {
	        key: 'detailInit',
	        value: function detailInit() {
	            new _detail2.default({
	                root: this.detail
	            });
	        }
	    }, {
	        key: '__init',
	        value: function __init() {
	            var _this2 = this;
	
	            this.show();
	            this.detailInit();
	            setInterval(function () {
	                if (_this2.resourcesList.length !== performance.getEntries()) {
	                    _this2.resourcesList = performance.getEntries();
	                    _this2.show();
	                }
	            }, 1000);
	            this.root.appendChild(this.nav);
	            this.root.appendChild(this.container);
	        }
	    }]);
	
	    return Resources;
	}();
	
	exports.default = Resources;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	var _detail = __webpack_require__(3);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _tool = __webpack_require__(6);
	
	var tool = _interopRequireWildcard(_tool);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var xhrElement = function () {
	    function xhrElement(props) {
	        _classCallCheck(this, xhrElement);
	
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['xhr']
	        });
	        this.detail = (0, _util.crtE)({
	            classes: ['detail-container']
	        });
	        this.nav = (0, _util.crtE)({
	            classes: ['common-nav'],
	            text: 'XMLHttpRequest'
	        });
	        this.reqList = {};
	        this.resourcesList = {};
	        //复制 一份xhr
	        this.__init();
	    }
	
	    _createClass(xhrElement, [{
	        key: 'creatXHRDiv',
	        value: function creatXHRDiv(req) {
	            var _this = this;
	
	            var XHRContainer = (0, _util.crtE)({
	                classes: ['req', 'box']
	            });
	            for (var i in req) {
	                if (i !== 'postData' && i !== 'response') {
	                    var prop = (0, _util.crtE)({
	                        classes: ['req-prop']
	                    });
	                    prop.innerHTML = '<p>' + req[i] + '</p>';
	                    XHRContainer.appendChild(prop);
	                }
	            }
	
	            XHRContainer.addEventListener('click', function (e) {
	                if (!req.postData) {
	                    _this.detail.updata(req);
	                } else {
	                    req.postData.response = req.response;
	                    _this.detail.updata(req.postData);
	                }
	                _this.goDetail();
	            });
	
	            return XHRContainer;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.container.innerHTML = '';
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            this.container.innerHTML = '';
	            for (var i in this.reqList) {
	                var req = {};
	                req.name = 'test';
	                req.status = this.reqList[i].status;
	                req.method = this.reqList[i].method;
	                req.time = this.reqList[i].endTime - this.reqList[i].startTime;
	                req.url = this.reqList[i].url;
	                if (this.reqList[i].method === 'POST') {
	                    req.postData = this.reqList[i].postData;
	                    req.response = this.reqList[i].response;
	                }
	                var reqDom = this.creatXHRDiv(req);
	                this.container.appendChild(reqDom);
	            }
	        }
	    }, {
	        key: 'goDetail',
	        value: function goDetail() {
	            var net = this.root.parentNode;
	            net.innerHTML = '';
	            net.appendChild(this.detail);
	        }
	    }, {
	        key: 'detailInit',
	        value: function detailInit() {
	            new _detail2.default({
	                root: this.detail
	            });
	        }
	    }, {
	        key: 'updateRequest',
	        value: function updateRequest(id, data) {
	            var item = this.reqList[id] || {};
	            for (var key in data) {
	                item[key] = data[key];
	            }
	            this.reqList[id] = item;
	            //updata dom
	            this.clear();
	            this.show();
	        }
	    }, {
	        key: 'mockAjax',
	        value: function mockAjax() {
	            var _XMLHttpRequest = window.XMLHttpRequest;
	            if (!_XMLHttpRequest) {
	                return;
	            }
	            var that = this;
	            var _open = window.XMLHttpRequest.prototype.open,
	                _send = window.XMLHttpRequest.prototype.send;
	            that._open = _open;
	            that._send = _send;
	            window.XMLHttpRequest.prototype.open = function () {
	                var XMLReq = this;
	                var args = [].slice.call(arguments),
	                    method = args[0],
	                    url = args[1],
	                    id = that.getUniqueID();
	
	                // may be used by other functions
	                XMLReq._requestID = id;
	                XMLReq._method = method;
	                XMLReq._url = url;
	
	                // mock onreadystatechange
	                var _onreadystatechange = XMLReq.onreadystatechange || function () {};
	                XMLReq.onreadystatechange = function () {
	
	                    var item = that.reqList[id] || {};
	
	                    // update status
	                    item.readyState = XMLReq.readyState;
	                    item.status = XMLReq.status;
	                    item.responseType = XMLReq.responseType;
	
	                    if (XMLReq.readyState == 0) {
	                        // UNSENT
	                        item.startTime = +new Date();
	                    } else if (XMLReq.readyState == 1) {
	                        // OPENED
	                        item.startTime = +new Date();
	                    } else if (XMLReq.readyState == 2) {
	                        // HEADERS_RECEIVED
	                        item.header = {};
	                        var header = XMLReq.getAllResponseHeaders() || '',
	                            headerArr = header.split("\n");
	                        // extract plain text to key-value format
	                        for (var i = 0; i < headerArr.length; i++) {
	                            var line = headerArr[i];
	                            if (!line) {
	                                continue;
	                            }
	                            var arr = line.split(': ');
	                            var key = arr[0],
	                                value = arr.slice(1).join(': ');
	                            item.header[key] = value;
	                        }
	                    } else if (XMLReq.readyState == 3) {
	                        // LOADING
	                    } else if (XMLReq.readyState == 4) {
	                        // DONE
	                        item.endTime = +new Date(), item.costTime = item.endTime - (item.startTime || item.endTime);
	                        item.response = XMLReq.response;
	                    }
	
	                    if (!XMLReq._noVConsole) {
	                        that.updateRequest(id, item);
	                    }
	                    return _onreadystatechange.apply(XMLReq, arguments);
	                };
	
	                return _open.apply(XMLReq, args);
	            };
	
	            // mock send()
	            window.XMLHttpRequest.prototype.send = function () {
	                var XMLReq = this;
	                var args = [].slice.call(arguments),
	                    data = args[0];
	
	                var item = that.reqList[XMLReq._requestID] || {};
	                item.method = XMLReq._method.toUpperCase();
	
	                var query = XMLReq._url.split('?'); // a.php?b=c&d=?e => ['a.php', 'b=c&d=', '?e']
	                item.url = query.shift(); // => ['b=c&d=', '?e']
	
	                if (query.length > 0) {
	                    item.getData = {};
	                    query = query.join('?'); // => 'b=c&d=?e'
	                    query = query.split('&'); // => ['b=c', 'd=?e']
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;
	
	                    try {
	                        for (var _iterator = query[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var q = _step.value;
	
	                            q = q.split('=');
	                            item.getData[q[0]] = q[1];
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	                }
	
	                if (item.method == 'POST') {
	
	                    // save POST data
	                    if (tool.isString(data)) {
	                        var arr = data.split('&');
	                        item.postData = {};
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;
	
	                        try {
	                            for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var _q = _step2.value;
	
	                                _q = _q.split('=');
	                                item.postData[_q[0]] = _q[1];
	                            }
	                        } catch (err) {
	                            _didIteratorError2 = true;
	                            _iteratorError2 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                    _iterator2.return();
	                                }
	                            } finally {
	                                if (_didIteratorError2) {
	                                    throw _iteratorError2;
	                                }
	                            }
	                        }
	                    } else if (tool.isPlainObject(data)) {
	                        item.postData = data;
	                    }
	                }
	
	                if (!XMLReq._noVConsole) {
	                    that.updateRequest(XMLReq._requestID, item);
	                }
	
	                return _send.apply(XMLReq, args);
	            };
	        }
	    }, {
	        key: 'getUniqueID',
	        value: function getUniqueID() {
	            var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	                var r = Math.random() * 16 | 0,
	                    v = c == 'x' ? r : r & 0x3 | 0x8;
	                return v.toString(16);
	            });
	            return id;
	        }
	    }, {
	        key: '__init',
	        value: function __init() {
	            this.detailInit();
	            this.mockAjax();
	            this.root.appendChild(this.nav);
	            this.root.appendChild(this.container);
	        }
	    }]);
	
	    return xhrElement;
	}();
	
	exports.default = xhrElement;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.getDate = getDate;
	exports.isNumber = isNumber;
	exports.isString = isString;
	exports.isArray = isArray;
	exports.isBoolean = isBoolean;
	exports.isUndefined = isUndefined;
	exports.isNull = isNull;
	exports.isSymbol = isSymbol;
	exports.isObject = isObject;
	exports.isFunction = isFunction;
	exports.isElement = isElement;
	exports.isWindow = isWindow;
	exports.isPlainObject = isPlainObject;
	exports.htmlEncode = htmlEncode;
	exports.JSONStringify = JSONStringify;
	exports.getObjAllKeys = getObjAllKeys;
	exports.getObjName = getObjName;
	exports.setStorage = setStorage;
	exports.getStorage = getStorage;
	/**
	 * Utility Functions
	 *
	 * @author WechatFE
	 */
	
	/**
	 * get formatted date by timestamp
	 * @param  int    time
	 * @return  object
	 */
	function getDate(time) {
	  var d = time > 0 ? new Date(time) : new Date();
	  var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
	      month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1,
	      year = d.getFullYear(),
	      hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
	      minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
	      second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(),
	      millisecond = d.getMilliseconds() < 10 ? '0' + d.getMilliseconds() : d.getMilliseconds();
	  if (millisecond < 100) {
	    millisecond = '0' + millisecond;
	  }
	  return {
	    time: +d,
	    year: year,
	    month: month,
	    day: day,
	    hour: hour,
	    minute: minute,
	    second: second,
	    millisecond: millisecond
	  };
	}
	
	/**
	 * determines whether the passed value is a specific type
	 * @param mixed value
	 * @return boolean
	 */
	function isNumber(value) {
	  return Object.prototype.toString.call(value) == '[object Number]';
	}
	function isString(value) {
	  return Object.prototype.toString.call(value) == '[object String]';
	}
	function isArray(value) {
	  return Object.prototype.toString.call(value) == '[object Array]';
	}
	function isBoolean(value) {
	  return Object.prototype.toString.call(value) == '[object Boolean]';
	}
	function isUndefined(value) {
	  return Object.prototype.toString.call(value) == '[object Undefined]';
	}
	function isNull(value) {
	  return Object.prototype.toString.call(value) == '[object Null]';
	}
	function isSymbol(value) {
	  return Object.prototype.toString.call(value) == '[object Symbol]';
	}
	function isObject(value) {
	  return Object.prototype.toString.call(value) == '[object Object]' ||
	  // if it isn't a primitive value, then it is a common object
	  !isNumber(value) && !isString(value) && !isBoolean(value) && !isArray(value) && !isNull(value) && !isFunction(value) && !isUndefined(value) && !isSymbol(value);
	}
	function isFunction(value) {
	  return Object.prototype.toString.call(value) == '[object Function]';
	}
	function isElement(value) {
	  return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? value instanceof HTMLElement : //DOM2
	  value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
	}
	function isWindow(value) {
	  var toString = Object.prototype.toString.call(value);
	  return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
	}
	
	/**
	 * check whether an object is plain (using {})
	 * @param object obj
	 * @return boolean
	 */
	function isPlainObject(obj) {
	  var hasOwn = Object.prototype.hasOwnProperty;
	  // Must be an Object.
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj.nodeType || isWindow(obj)) {
	    return false;
	  }
	  try {
	    if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
	      return false;
	    }
	  } catch (e) {
	    return false;
	  }
	  var key = void 0;
	  for (key in obj) {}
	  return key === undefined || hasOwn.call(obj, key);
	}
	
	/**
	 * HTML encode a string
	 * @param string text
	 * @return string
	 */
	function htmlEncode(text) {
	  return document.createElement('a').appendChild(document.createTextNode(text)).parentNode.innerHTML;
	}
	
	/**
	 * JSON stringify, support circular structure
	 */
	function JSONStringify(obj) {
	  var json = '',
	      lv = 0;
	
	  // use a map to track parent relationship
	  var objMap = [];
	  function _hasSameParentAsChild(child) {
	    // find upper item which child is equal to this child
	    for (var i = objMap.length - 1; i >= 0; i--) {
	      if (objMap[i].child == child) {
	        return true;
	      }
	    }
	    return false;
	  }
	
	  function _iterateObj(val) {
	    if (isObject(val)) {
	      // object
	      if (_hasSameParentAsChild(val)) {
	        // this object is circular, skip it
	        json += "CircularObject";
	        return;
	      }
	      objMap.push({ parent: parent, child: val });
	
	      var keys = Object.keys(val);
	      json += "{";
	      lv++;
	      for (var i = 0; i < keys.length; i++) {
	        var k = keys[i];
	        if (val.hasOwnProperty && !val.hasOwnProperty(k)) {
	          continue;
	        }
	        json += k + ': ';
	        _iterateObj(val[k], val);
	        if (i < keys.length - 1) {
	          json += ', ';
	        }
	      }
	      lv--;
	      json += '}';
	
	      objMap.pop();
	    } else if (isArray(val)) {
	      // array
	      if (_hasSameParentAsChild(val)) {
	        // this array is circular, skip it
	        json += "CircularArray";
	        return;
	      }
	      objMap.push({ parent: parent, child: val });
	
	      json += '[';
	      lv++;
	      for (var _i = 0; _i < val.length; _i++) {
	        _iterateObj(val[_i], val);
	        if (_i < val.length - 1) {
	          json += ', ';
	        }
	      }
	      lv--;
	      json += ']';
	
	      objMap.pop();
	    } else if (isString(val)) {
	      json += '"' + val + '"';
	    } else if (isNumber(val)) {
	      json += val;
	    } else if (isBoolean(val)) {
	      json += val;
	    } else if (isNull(val)) {
	      json += 'null';
	    } else if (isUndefined(val)) {
	      json += 'undefined';
	    } else if (isFunction(val)) {
	      json += 'function()';
	    } else if (isSymbol(val)) {
	      json += 'symbol';
	    } else {
	      json += 'unknown';
	    }
	  }
	  _iterateObj(obj, null);
	
	  return json;
	}
	
	/**
	 * get an object's all keys ignore whether they are not enumerable
	 */
	function getObjAllKeys(obj) {
	  if (!isObject(obj) && !isArray(obj)) {
	    return [];
	  }
	  var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	  var keys = [];
	  for (var key in obj) {
	    if (dontEnums.indexOf(key) < 0) {
	      keys.push(key);
	    }
	  }
	  keys = keys.sort();
	  return keys;
	}
	
	/**
	 * get an object's prototype name
	 */
	function getObjName(obj) {
	  return Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '');
	}
	
	/**
	 * localStorage methods
	 */
	function setStorage(key, value) {
	  if (!window.localStorage) {
	    return;
	  }
	  key = 'vConsole_' + key;
	  localStorage.setItem(key, value);
	}
	function getStorage(key) {
	  if (!window.localStorage) {
	    return;
	  }
	  key = 'vConsole_' + key;
	  return localStorage.getItem(key);
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //复写log函数
	
	
	var _util = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Console = function () {
	    function Console(props) {
	        _classCallCheck(this, Console);
	
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['console']
	        });
	        this.__console = window.console;
	        this.__log = console.log;
	        this.__error = console.error;
	        this.__info = console.info;
	        this.__warn = console.warn;
	        this.message = [];
	        this.filters = {};
	        //1:all,2:log,3:error,4:info,5:warn
	        this.state = 'all';
	        this.__overWriteLog();
	        this.catchError();
	        this.__init();
	    }
	
	    _createClass(Console, [{
	        key: '__overWriteLog',
	        value: function __overWriteLog() {
	            var _this = this;
	
	            console.log = function (msg) {
	                var o = _this.creatMsgDiv(msg, 'log');
	                _this.message.push(o);
	                _this.container.appendChild(o);
	                _this.__log(msg);
	            };
	            console.error = function (msg) {
	                var o = _this.creatMsgDiv(msg, 'error');
	                _this.message.push(o);
	                _this.container.appendChild(o);
	                _this.__error(msg);
	            };
	            console.info = function (msg) {
	                var o = _this.creatMsgDiv(msg, 'info');
	                _this.message.push(o);
	                _this.container.appendChild(o);
	                _this.__info(msg);
	            };
	            console.warn = function (msg) {
	                var o = _this.creatMsgDiv(msg, 'warn');
	                _this.message.push(o);
	                _this.container.appendChild(o);
	                _this.__warn(msg);
	            };
	        }
	    }, {
	        key: 'catchError',
	        value: function catchError() {
	            window.onerror = function (e) {
	                console.error(e);
	            };
	        }
	    }, {
	        key: 'creatMsgDiv',
	        value: function creatMsgDiv(msg, type) {
	            var msgContainer = (0, _util.crtE)({
	                classes: [type, 'item']
	            });
	            msgContainer.innerHTML = '[<span class = "' + type + '" >' + type + '</span>] <p>' + msg + '</p>';
	            return msgContainer;
	        }
	    }, {
	        key: 'eventBind',
	        value: function eventBind() {
	            var _this2 = this;
	
	            this.filters['clear'].addEventListener('click', function () {
	                _this2.clear();
	            });
	            this.filters['all'].addEventListener('click', function () {
	                _this2.container.innerHTML = '';
	                for (var i = 0; i < _this2.message.length; i++) {
	                    _this2.container.appendChild(_this2.message[i]);
	                }
	            });
	            this.filters['error'].addEventListener('click', function () {
	                _this2.container.innerHTML = '';
	                for (var i = 0; i < _this2.message.length; i++) {
	                    if (_this2.message[i].className.indexOf('error') !== -1) {
	                        _this2.container.appendChild(_this2.message[i]);
	                    }
	                }
	            });
	            this.filters['warning'].addEventListener('click', function () {
	                _this2.container.innerHTML = '';
	                for (var i = 0; i < _this2.message.length; i++) {
	                    if (_this2.message[i].className.indexOf('warn') !== -1) {
	                        _this2.container.appendChild(_this2.message[i]);
	                    }
	                }
	            });
	            this.filters['info'].addEventListener('click', function () {
	                _this2.container.innerHTML = '';
	                for (var i = 0; i < _this2.message.length; i++) {
	                    if (_this2.message[i].className.indexOf('info') !== -1) {
	                        _this2.container.appendChild(_this2.message[i]);
	                    }
	                }
	            });
	            this.filters['log'].addEventListener('click', function () {
	                _this2.container.innerHTML = '';
	                for (var i = 0; i < _this2.message.length; i++) {
	                    if (_this2.message[i].className.indexOf('log') !== -1) {
	                        _this2.container.appendChild(_this2.message[i]);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'createFilter',
	        value: function createFilter() {
	            this.filter = (0, _util.crtE)({
	                classes: ['filter', "clearfix"]
	            });
	            this.filters['clear'] = (0, _util.crtE)({
	                classes: ['filter_clear']
	            });
	            this.filters['clear'].innerHTML = '<i class="fa fa-ban" aria-hidden="true"></i>';
	            this.filters['all'] = (0, _util.crtE)({
	                classes: ['filter_all'],
	                text: 'All'
	            });
	            this.filters['error'] = (0, _util.crtE)({
	                classes: ['filter_error'],
	                text: 'Error'
	            });
	            this.filters['warning'] = (0, _util.crtE)({
	                classes: ['filter_warn'],
	                text: 'Warning'
	            });
	            this.filters['info'] = (0, _util.crtE)({
	                classes: ['filter_info'],
	                text: 'Info'
	            });
	            this.filters['log'] = (0, _util.crtE)({
	                classes: ['filter_log'],
	                text: 'Log'
	            });
	            for (var i in this.filters) {
	                this.filter.appendChild(this.filters[i]);
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.container.innerHTML = '';
	            this.message = [];
	        }
	    }, {
	        key: '__init',
	        value: function __init() {
	            this.createFilter();
	            this.eventBind();
	            this.root.appendChild(this.filter);
	            this.root.appendChild(this.container);
	        }
	    }]);
	
	    return Console;
	}();
	
	exports.default = Console;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TimeLine = function () {
	    function TimeLine(props) {
	        _classCallCheck(this, TimeLine);
	
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['timeline']
	        });
	        this.timeArr = performance.timing;
	        this.__init();
	    }
	
	    _createClass(TimeLine, [{
	        key: 'creatTimeDiv',
	        value: function creatTimeDiv() {
	            var t_arr = this.timeArr;
	            var t_div_c = (0, _util.crtE)({
	                classes: ['timeline']
	            });
	            var requireTime = {
	                'redirectTime': t_arr.redirectEnd - t_arr.redirectStart,
	                'appcacheTime': t_arr.responseEnd - t_arr.responseStart,
	                'unloadEventTime': t_arr.unloadEventEnd - t_arr.unloadEventStart,
	                'lookupDomainTime': t_arr.domainLookupEnd - t_arr.domainLookupStart,
	                'connectTime': t_arr.connectEnd - t_arr.connectStart,
	                'requestTime': t_arr.responseEnd - t_arr.requestStart,
	                'initDomTreeTime': t_arr.domComplete - t_arr.domInteractive,
	                'loadEventTime': t_arr.loadEventEnd - t_arr.loadEventStart };
	            for (var i in requireTime) {
	                var t_div = (0, _util.crtE)({
	                    targetName: 'p',
	                    classes: ['timeline-item', 'item', 'box']
	                });
	                t_div.innerHTML = '<div>' + i + ':</div> <div>' + requireTime[i] + 'ms</div>';
	                t_div_c.appendChild(t_div);
	            }
	            return t_div_c;
	        }
	    }, {
	        key: 'show',
	        value: function show() {
	            this.container.innerHTML = '';
	        }
	    }, {
	        key: '__init',
	        value: function __init() {
	            var _this = this;
	
	            this.root.appendChild(this.container);
	            setTimeout(function () {
	                var times = _this.creatTimeDiv();
	                _this.container.appendChild(times);
	            }, 0);
	        }
	    }]);
	
	    return TimeLine;
	}();
	
	exports.default = TimeLine;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Main = function () {
	    function Main(props) {
	        _classCallCheck(this, Main);
	
	        this.console = props.console;
	        this.ele = props.ele;
	        this.resourse = props.resourse;
	        this.timeline = props.timeline;
	        this.xhr = props.xhr;
	        this.coo = props.coo;
	        this.ls = props.ls;
	        this.components = {
	            console: [this.console],
	            network: [this.resourse, this.xhr],
	            element: [this.ele],
	            timeline: [this.timeline],
	            store: [this.coo, this.ls]
	        };
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['main']
	        });
	        this.init();
	    }
	
	    _createClass(Main, [{
	        key: 'eventBind',
	        value: function eventBind() {
	            var _this = this;
	
	            this.header.addEventListener('click', function (e) {
	                //click style change
	                e.target.innerText.toLowerCase();
	                _this.container.innerHTML = '';
	                for (var i = 0; i < _this.components[e.target.innerText.toLowerCase()].length; i++) {
	                    _this.container.appendChild(_this.components[e.target.innerText.toLowerCase()][i]);
	                }
	            });
	        }
	    }, {
	        key: 'createHeader',
	        value: function createHeader() {
	            var header = (0, _util.crtE)({
	                targetName: 'header',
	                classes: ['common-header']
	            });
	            var con = (0, _util.crtE)({
	                classes: ['header-item', 'switch-console'],
	                text: 'Console'
	            });
	            var net = (0, _util.crtE)({
	                classes: ['header-item', 'switch-network'],
	                text: 'Network'
	            });
	            var ele = (0, _util.crtE)({
	                classes: ['header-item', 'switch-element'],
	                text: 'Element'
	            });
	            var time = (0, _util.crtE)({
	                classes: ['header-item', 'switch-timeline'],
	                text: 'Timeline'
	            });
	            var store = (0, _util.crtE)({
	                classes: ['header-item', 'switch-store'],
	                text: 'Store'
	            });
	            header.appendChild(con);
	            header.appendChild(net);
	            header.appendChild(ele);
	            header.appendChild(time);
	            header.appendChild(store);
	            return header;
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            this.header = this.createHeader();
	            this.root.appendChild(this.header);
	            this.eventBind();
	            this.container.appendChild(this.console);
	            this.root.appendChild(this.container);
	        }
	    }]);
	
	    return Main;
	}();
	
	exports.default = Main;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Menu = function () {
	    function Menu(props) {
	        _classCallCheck(this, Menu);
	
	        this.root = props.root;
	        this.state = false;
	        this.container = (0, _util.crtE)({
	            classes: ['common-menu']
	        });
	        this.init();
	    }
	
	    _createClass(Menu, [{
	        key: 'eventBind',
	        value: function eventBind() {
	            var _this = this;
	
	            this.container.querySelector('#menu-open').addEventListener('click', function () {
	                if (!_this.state) {
	                    document.querySelector('.main-container').style.visibility = 'visible';
	                    _this.state = !_this.state;
	                } else {
	                    document.querySelector('.main-container').style.visibility = 'hidden';
	                    _this.state = !_this.state;
	                }
	            });
	            this.container.querySelector('#open-console').addEventListener('click', function () {
	                (0, _util.log)(1);
	                _util.select.E('.switch-console').click();
	            });
	            this.container.querySelector('#open-timeline').addEventListener('click', function () {
	                (0, _util.log)(2);
	                _util.select.E('.switch-timeline').click();
	            });
	            this.container.querySelector('#open-network').addEventListener('click', function () {
	                (0, _util.log)(3);
	                _util.select.E('.switch-network').click();
	            });
	            this.container.querySelector('#open-element').addEventListener('click', function () {
	                (0, _util.log)(4);
	                _util.select.E('.switch-element').click();
	            });
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            this.container.innerHTML = '<nav class="menu">\n        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />\n        <label class="menu-open-button" for="menu-open">\n         <span class="lines line-1"></span>\n         <span class="lines line-2"></span>\n         <span class="lines line-3"></span>\n       </label>\n     \n        <a href="#" class="menu-item blue" id="open-console"> <i class="fa fa-code"></i> </a>\n        <a href="#" class="menu-item green" id="open-timeline"> <i class="fa fa-history"></i> </a>\n        <a href="#" class="menu-item red" id="open-network"> <i class="fa fa-file"></i> </a>\n        <a href="#" class="menu-item purple" id="open-element"> <i class="fa fa-html5"></i> </a>\n     </nav>';
	            this.root.appendChild(this.container);
	            this.eventBind();
	        }
	    }]);
	
	    return Menu;
	}();
	
	exports.default = Menu;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	var _detail = __webpack_require__(3);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Coo = function () {
	    function Coo(props) {
	        _classCallCheck(this, Coo);
	
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['resources']
	        });
	        this.detail = (0, _util.crtE)({
	            classes: ['detail-container']
	        });
	        this.nav = (0, _util.crtE)({
	            classes: ['common-nav'],
	            text: 'Cookie'
	        });
	        this.__init();
	    }
	
	    _createClass(Coo, [{
	        key: 'createCookieDiv',
	        value: function createCookieDiv(cookies) {
	            var _this = this;
	
	            // log(cookies.length,cookies[0])
	            // let cookieContainer = crtE({
	            //     classes: ['cookie', 'item','box'],
	            // })
	            // for(let cookie in cookies){
	            //     let cookie_div = crtE({
	            //         classes: ['cookie-item'],
	            //     })
	            //     for(let i in cookie){
	            //         let prop = crtE({
	            //             classes: ['cookie-prop'],
	            //         })
	            //         prop.innerHTML = `<p>${cookie[i]}</p>`
	            //         cookie_div.appendChild(prop)
	            //         prop.addEventListener('click',(e) => {
	            //             this.detail.updata(cookie)
	            //             this.goDetail()
	            //         })
	            //     }
	            //     cookieContainer.appendChild(cookie_div)
	            // }
	            // this.container.appendChild(cookieContainer)
	
	
	            var cookieContainer = (0, _util.crtE)({
	                classes: ['cookie', 'item', 'box']
	            });
	
	            for (var i in cookies) {
	                var prop = (0, _util.crtE)({
	                    classes: ['cookie-prop', 'item', 'box']
	                });
	                prop.innerHTML = '<div>' + i + '</div><div>' + cookies[i] + '</div>';
	                cookieContainer.appendChild(prop);
	                prop.addEventListener('click', function (e) {
	                    _this.detail.updata(cookies);
	                    _this.goDetail();
	                });
	            }
	            this.container.appendChild(cookieContainer);
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.container.innerHTML = '';
	        }
	    }, {
	        key: 'goDetail',
	        value: function goDetail() {
	            var net = this.root.parentNode;
	            net.innerHTML = '';
	            net.appendChild(this.detail);
	        }
	    }, {
	        key: 'detailInit',
	        value: function detailInit() {
	            new _detail2.default({
	                root: this.detail
	            });
	        }
	    }, {
	        key: '__init',
	        value: function __init() {
	            var _this2 = this;
	
	            setTimeout(function () {
	                _this2.cookies = Cookies.get();
	                _this2.createCookieDiv(_this2.cookies);
	                _this2.detailInit();
	                _this2.root.appendChild(_this2.nav);
	                _this2.root.appendChild(_this2.container);
	            }, 0);
	        }
	    }]);
	
	    return Coo;
	}();
	
	exports.default = Coo;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(2);
	
	var _detail = __webpack_require__(3);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LocalStorage = function () {
	    function LocalStorage(props) {
	        _classCallCheck(this, LocalStorage);
	
	        this.root = props.root;
	        this.container = (0, _util.crtE)({
	            classes: ['resources']
	        });
	        this.detail = (0, _util.crtE)({
	            classes: ['detail-container']
	        });
	        this.nav = (0, _util.crtE)({
	            classes: ['common-nav'],
	            text: 'LocalStorage'
	        });
	        this.ls = localStorage;
	        this.__init();
	    }
	
	    _createClass(LocalStorage, [{
	        key: 'createLSDiv',
	        value: function createLSDiv(ls) {
	            var lsContainer = (0, _util.crtE)({
	                classes: ['local-storage']
	            });
	
	            for (var i in ls) {
	                var prop = (0, _util.crtE)({
	                    classes: ['ls-prop', 'item', 'box']
	                });
	                prop.innerHTML = '<div>' + i + '</div><div>' + ls[i] + '</div>';
	                lsContainer.appendChild(prop);
	            }
	
	            this.container.appendChild(lsContainer);
	        }
	    }, {
	        key: 'goDetail',
	        value: function goDetail() {
	            var net = this.root.parentNode;
	            net.innerHTML = '';
	            net.appendChild(this.detail);
	        }
	    }, {
	        key: 'detailInit',
	        value: function detailInit() {
	            new _detail2.default({
	                root: this.detail
	            });
	        }
	    }, {
	        key: '__init',
	        value: function __init() {
	            var _this = this;
	
	            setTimeout(function () {
	                _this.ls = localStorage;
	                _this.createLSDiv(_this.ls);
	                _this.detailInit();
	                _this.root.appendChild(_this.nav);
	                _this.root.appendChild(_this.container);
	            }, 0);
	        }
	    }]);
	
	    return LocalStorage;
	}();
	
	exports.default = LocalStorage;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * JavaScript Cookie v2.1.4
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (( false ? 'undefined' : _typeof(exports)) === 'object') {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	})(function () {
		function extend() {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[i];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init(converter) {
			function api(key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					// We're using "expires" because "max-age" is not supported by IE
					attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					var stringifiedAttributes = '';
	
					for (var attributeName in attributes) {
						if (!attributes[attributeName]) {
							continue;
						}
						stringifiedAttributes += '; ' + attributeName;
						if (attributes[attributeName] === true) {
							continue;
						}
						stringifiedAttributes += '=' + attributes[attributeName];
					}
					return document.cookie = key + '=' + value + stringifiedAttributes;
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;
	
	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)(undefined);
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);
	
	// exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function (useSourceMap) {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if (item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}
	
		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
			});
	
			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}
	
		return [content].join('\n');
	}
	
	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
	
		return '/*# ' + data + ' */';
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	
	var stylesInDom = {};
	
	var	memoize = function (fn) {
		var memo;
	
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};
	
	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});
	
	var getElement = (function (fn) {
		var memo = {};
	
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
	
			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});
	
	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];
	
	var	fixUrls = __webpack_require__(18);
	
	module.exports = function(list, options) {
		if (false) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
	
		options.attrs = typeof options.attrs === "object" ? options.attrs : {};
	
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton) options.singleton = isOldIE();
	
		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";
	
		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";
	
		var styles = listToStyles(list, options);
	
		addStylesToDom(styles, options);
	
		return function update (newList) {
			var mayRemove = [];
	
			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
	
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
	
			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}
	
			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
	
				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
	
					delete stylesInDom[domStyle.id];
				}
			}
		};
	};
	
	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
	
			if(domStyle) {
				domStyle.refs++;
	
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
	
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
	
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
	
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};
	
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
	
			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}
	
		return styles;
	}
	
	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)
	
		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}
	
		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
	
		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);
	
		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement (options) {
		var style = document.createElement("style");
	
		options.attrs.type = "text/css";
	
		addAttrs(style, options.attrs);
		insertStyleElement(options, style);
	
		return style;
	}
	
	function createLinkElement (options) {
		var link = document.createElement("link");
	
		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";
	
		addAttrs(link, options.attrs);
		insertStyleElement(options, link);
	
		return link;
	}
	
	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}
	
	function addStyle (obj, options) {
		var style, update, remove, result;
	
		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);
	
		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
	
			style = singleton || (singleton = createStyleElement(options));
	
			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);
	
		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);
	
				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}
	
		update(obj);
	
		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}
	
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
	
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;
	
			if (childNodes[index]) style.removeChild(childNodes[index]);
	
			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			style.setAttribute("media", media)
		}
	
		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}
	
			style.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;
	
		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}
	
		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = link.href;
	
		link.href = URL.createObjectURL(blob);
	
		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */
	
	module.exports = function (css) {
		// get current location
		var location = typeof window !== "undefined" && window.location;
	
		if (!location) {
			throw new Error("fixUrls requires window.location");
		}
	
		// blank or null?
		if (!css || typeof css !== "string") {
			return css;
		}
	
		var baseUrl = location.protocol + "//" + location.host;
		var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
	
		// convert each url(...)
		/*
	 This regular expression is just a way to recursively match brackets within
	 a string.
	 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	    (  = Start a capturing group
	      (?:  = Start a non-capturing group
	          [^)(]  = Match anything that isn't a parentheses
	          |  = OR
	          \(  = Match a start parentheses
	              (?:  = Start another non-capturing groups
	                  [^)(]+  = Match anything that isn't a parentheses
	                  |  = OR
	                  \(  = Match a start parentheses
	                      [^)(]*  = Match anything that isn't a parentheses
	                  \)  = Match a end parentheses
	              )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
	  \)  = Match a close parens
	 	 /gi  = Get all matches, not the first.  Be case insensitive.
	  */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
				return $1;
			}).replace(/^'(.*)'$/, function (o, $1) {
				return $1;
			});
	
			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
				return fullMatch;
			}
	
			// convert the url to a full url
			var newUrl;
	
			if (unquotedOrigUrl.indexOf("//") === 0) {
				//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}
	
			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});
	
		// send back the fixed css
		return fixedCss;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;
	
	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)(undefined);
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n    font-family: 'icomoon';\n    src: url(" + __webpack_require__(21) + ");\n    src: url(" + __webpack_require__(21) + "#iefix) format('embedded-opentype'), url(" + __webpack_require__(22) + ") format('truetype'), url(" + __webpack_require__(23) + ") format('woff'), url(" + __webpack_require__(24) + "#icomoon) format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n    font-family: 'icomoon' !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-plus:before {\n    content: \"\\EA0A\";\n}\n\n.icon-minus:before {\n    content: \"\\EA0B\";\n}\n\n.item {\n    padding: 0 14px;\n    border-bottom: 1px solid rgba(204, 204, 204, 0.47);\n}\n\n.clearfix::after {\n    content: '';\n    clear: both;\n    visibility: hidden;\n    display: none\n}\n\n.hide {\n    display: none\n}\n\n.box {\n    display: flex;\n    padding: 8px 4px;\n    font-size: 12px;\n}\n\n.box>div {\n    flex: 1;\n    overflow: hidden\n}\n\n.container {\n    height: 100%;\n    overflow-y: scroll;\n    overflow-x: hidden\n}\n.ele-style{\n    border-top: 1px solid gray;\n    max-height: 50vh;\n    \n}\n\n/* menu */\n\n.main-container {\n    position: absolute;\n    visibility: hidden;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: snow\n}\n.main{\n    background: snow\n}\n\n\n\n/* console */\n\n.filter {\n    width: 100%;\n    position: relative;\n    height: 34px;\n    background: #fff;\n    box-shadow: 1px 1px 1px #ccc;\n}\n\n.filter div {\n    display: block;\n    float: left;\n    margin-left: 6px;\n    height: 16px;\n    line-height: 16px;\n    border-radius: 4px;\n    background: #fff;\n    color: #000;\n    padding: 4px 6px;\n    font-size: 12px;\n    margin-top: 4px;\n}\n\n.console p {\n    display: inline-block;\n}\n\n.error p {\n    color: red;\n}\n\n.warn p {\n    color: rgb(200, 139, 75);\n}\n\n.console span {\n    color: gray\n}\n\n\n/*resources xhr*/\n\n.req-prop:last-child {\n    color: rgb(32, 160, 255)\n}\n\n.res-prop:last-child {\n    color: rgb(32, 160, 255)\n}\n\n.req div {\n    padding: 0 4px;\n    overflow: hidden;\n    white-space: nowrap;\n    flex-grow: 1;\n    text-overflow: ellipsis;\n}\n\n.resource div {\n    padding: 0 4px;\n    overflow: hidden;\n    white-space: nowrap;\n    flex-grow: 1;\n    text-overflow: ellipsis;\n}\n\n.common-nav {\n    display: block;\n    background: #6b6b6b;\n    color: #fff;\n    font-size: 14px;\n    height: 40px;\n    line-height: 40px;\n    padding-left: 10px;\n}\n\n\n/*ele*/\n\n.text-html .text-html {\n    padding-left: 10px\n}\n\n.start-span {\n    color: gray\n}\n\n.end-span {\n    color: gray\n}\n\n\n/*header*/\n\n.common-header {\n    font-family: Consolas;\n    display: flex;\n    background: #A0E4F1\n}\n\n.common-header>div {\n    flex-grow: 1;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    transition: background 1s\n}\n\n.header-item:hover {\n    background: #03D5FF\n}\n\n.header-item-focus {\n    background: #009CBB\n}\n\n\n\n/*main*/\n\n/* menu */\n\na {\n    color: inherit;\n}\n\n.menu-item,\n.menu-open-button {\n    background: #EEEEEE;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    margin-left: -40px;\n    position: absolute;\n    color: #FFFFFF;\n    text-align: center;\n    line-height: 40px;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    -webkit-transition: -webkit-transform ease-out 200ms;\n    transition: -webkit-transform ease-out 200ms;\n    transition: transform ease-out 200ms;\n    transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;\n}\n\n.menu-open {\n    display: none;\n}\n\n.lines {\n    width: 25px;\n    height: 3px;\n    background: #596778;\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -12.5px;\n    margin-top: -1.5px;\n    -webkit-transition: -webkit-transform 200ms;\n    transition: -webkit-transform 200ms;\n    transition: transform 200ms;\n    transition: transform 200ms, -webkit-transform 200ms;\n}\n\n.line-1 {\n    -webkit-transform: translate3d(0, -8px, 0);\n    transform: translate3d(0, -8px, 0);\n}\n\n.line-2 {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n.line-3 {\n    -webkit-transform: translate3d(0, 8px, 0);\n    transform: translate3d(0, 8px, 0);\n}\n\n.menu-open:checked+.menu-open-button .line-1 {\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n    transform: translate3d(0, 0, 0) rotate(45deg);\n}\n\n.menu-open:checked+.menu-open-button .line-2 {\n    -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);\n    transform: translate3d(0, 0, 0) scale(0.1, 1);\n}\n\n.menu-open:checked+.menu-open-button .line-3 {\n    -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);\n    transform: translate3d(0, 0, 0) rotate(-45deg);\n}\n\n.menu {\n    margin: auto;\n    position: fixed;\n    bottom: 80px;\n    right: 10px;\n    width: 40px;\n    height: 40px;\n    text-align: center;\n    box-sizing: border-box;\n    font-size: 13px;\n    z-index: 2\n}\n\n\n/* .menu-item {\n    transition: all 0.1s ease 0s;\n } */\n\n.menu-item:hover {\n    background: #EEEEEE;\n    color: #3290B1;\n}\n\n.menu-item:nth-child(3) {\n    -webkit-transition-duration: 180ms;\n    transition-duration: 180ms;\n}\n\n.menu-item:nth-child(4) {\n    -webkit-transition-duration: 180ms;\n    transition-duration: 180ms;\n}\n\n.menu-item:nth-child(5) {\n    -webkit-transition-duration: 180ms;\n    transition-duration: 180ms;\n}\n\n.menu-item:nth-child(6) {\n    -webkit-transition-duration: 180ms;\n    transition-duration: 180ms;\n}\n\n.menu-open-button {\n    z-index: 3;\n    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    -webkit-transition-duration: 400ms;\n    transition-duration: 400ms;\n    -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n    transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n    cursor: pointer;\n    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n}\n\n.menu-open-button:hover {\n    -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n    transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n}\n\n.menu-open:checked+.menu-open-button {\n    -webkit-transition-timing-function: linear;\n    transition-timing-function: linear;\n    -webkit-transition-duration: 200ms;\n    transition-duration: 200ms;\n    -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);\n    transform: scale(0.8, 0.8) translate3d(0, 0, 0);\n}\n\n.menu-open:checked~.menu-item {\n    -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);\n    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);\n}\n\n.menu-open:checked~.menu-item:nth-child(3) {\n    transition-duration: 580ms;\n    -webkit-transition-duration: 580ms;\n    -webkit-transform: translate3d(-45.86291px, 26.62064px, 0);\n    transform: translate3d(-45.86291px, 26.62064px, 0);\n}\n\n.menu-open:checked~.menu-item:nth-child(4) {\n    transition-duration: 680ms;\n    -webkit-transition-duration: 680ms;\n    -webkit-transform: translate3d(-45.03006px, -26.33095px, 0);\n    transform: translate3d(-45.03006px, -26.33095px, 0);\n}\n\n.menu-open:checked~.menu-item:nth-child(5) {\n    transition-duration: 780ms;\n    -webkit-transition-duration: 780ms;\n    -webkit-transform: translate3d(-0.13084px, -50.9997px, 0);\n    transform: translate3d(-0.13084px, -50.9997px, 0);\n}\n\n.menu-open:checked~.menu-item:nth-child(6) {\n    transition-duration: 480ms;\n    -webkit-transition-duration: 480ms;\n    -webkit-transform: translate3d(0.08361px, 50.99997px, 0);\n    transform: translate3d(0.08361px, 50.99997px, 0);\n}\n\n.blue {\n    background-color: #669AE1;\n    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.blue:hover {\n    color: #669AE1;\n    text-shadow: none;\n}\n\n.green {\n    background-color: #70CC72;\n    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.green:hover {\n    color: #70CC72;\n    text-shadow: none;\n}\n\n.red {\n    background-color: #FE4365;\n    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.red:hover {\n    color: #FE4365;\n    text-shadow: none;\n}\n\n.purple {\n    background-color: #C49CDE;\n    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.purple:hover {\n    color: #C49CDE;\n    text-shadow: none;\n}\n\n.orange {\n    background-color: #FC913A;\n    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.orange:hover {\n    color: #FC913A;\n    text-shadow: none;\n}\n\n.lightblue {\n    background-color: #62C2E4;\n    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);\n}\n\n.lightblue:hover {\n    color: #62C2E4;\n    text-shadow: none;\n}\n\n.credit {\n    margin: 24px 20px 120px 0;\n    text-align: right;\n    color: #EEEEEE;\n}\n\n.credit a {\n    padding: 8px 0;\n    color: #C49CDE;\n    text-decoration: none;\n    transition: all 0.3s ease 0s;\n}\n\n.credit a:hover {\n    text-decoration: underline;\n}", ""]);
	
	// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a50e295103aac6091242b5a31af97474.eot";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89e1fb503eb1bb8b5d986a7da5966745.ttf";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a8c4116100e96d14df8204d679700070.woff";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b8363a268984d8b1c0addf808b46c640.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map