// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/JS/modules/HeaderEvents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menu = exports.closeBtn = exports.burger = void 0;
var _SubLists = require("./SubLists");
var _functions = require("./functions");
var burger = document.querySelector(".list");
exports.burger = burger;
var header = document.querySelector("header");
var closeBtn = document.getElementsByClassName("close-button")[0];
exports.closeBtn = closeBtn;
var menu = document.querySelector("section.menu");
exports.menu = menu;
var input = document.querySelector(".header_wrapper input");
var liList = document.querySelectorAll("section ul li");
input.addEventListener("click", function (event) {
  event.target.style.opacity = 1;
});
burger.addEventListener("click", function (event) {
  event.stopPropagation();
  menu.style.left = "0";
  menu.style.transition = "all .5s";
  closeBtn.style.left = "".concat(menu.offsetWidth + 5, "px");
  (0, _functions.toggleDisability)('ON');
});
closeBtn.addEventListener("click", function () {
  (0, _functions.closeList)();
  (0, _functions.toggleDisability)('OFF');
});
var prevScrollValue = window.scrollY;
window.addEventListener("scroll", function () {
  var currentScrollValue = window.scrollY;
  if (currentScrollValue > 200) {
    if (currentScrollValue > prevScrollValue) {
      header.style.transition = "all .3s";
      header.style.top = "-90px";
    } else {
      header.style.top = "0px";
    }
    prevScrollValue = currentScrollValue;
  }
});
window.addEventListener("click", function (event) {
  if (!event.target.closest(".list") && !event.target.closest(".menu") && !event.target.closest(".subList-wrapper")) {
    (0, _functions.closeList)();
  }
  if (event.target != input) {
    input.style.opacity = 0.5;
  }
  (0, _functions.toggleDisability)('OFF');
});
liList.forEach(function (li) {
  li.addEventListener("mouseover", function () {
    if (Array.from(li.classList).includes('forWomen')) {
      (0, _functions.switchONsublist)(0);
    }
    if (Array.from(li.classList).includes('shoes')) {
      (0, _functions.switchONsublist)(1);
    }
    if (Array.from(li.classList).includes('forChildren')) {
      (0, _functions.switchONsublist)(2);
    }
    if (Array.from(li.classList).includes('forMen')) {
      (0, _functions.switchONsublist)(3);
    }
    if (Array.from(li.classList).includes('house')) {
      (0, _functions.switchONsublist)(4);
    }
    if (Array.from(li.classList).includes('newYear')) {
      (0, _functions.switchONsublist)(5);
    }
    if (Array.from(li.classList).includes('beauty')) {
      (0, _functions.switchONsublist)(6);
    }
    if (Array.from(li.classList).includes('accessories')) {
      (0, _functions.switchONsublist)(7);
    }
    if (Array.from(li.classList).includes('electro')) {
      (0, _functions.switchONsublist)(8);
    }
    if (Array.from(li.classList).includes('toys')) {
      (0, _functions.switchONsublist)(9);
    }
    if (Array.from(li.classList).includes('furniture')) {
      (0, _functions.switchONsublist)(10);
    }
    if (Array.from(li.classList).includes('forAdult')) {
      (0, _functions.switchONsublist)(11);
    }
    if (Array.from(li.classList).includes('products')) {
      (0, _functions.switchONsublist)(12);
    }
  });
});
},{"./SubLists":"src/JS/modules/SubLists.js","./functions":"src/JS/modules/functions.js"}],"src/JS/modules/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeList = closeList;
exports.createEl = createEl;
exports.scrollByX = scrollByX;
exports.switchONsublist = switchONsublist;
exports.toggleDisability = toggleDisability;
var _HeaderEvents = require("./HeaderEvents");
var _SubLists = require("./SubLists");
function createEl() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var el = document.createElement(tag);
  if (options.src) el.src = options.src;
  if (options.className) el.className = options.className;
  if (options.textContent) el.textContent = options.textContent;
  return el;
}
function scrollByX(el, slide) {
  el.scrollTo({
    top: 0,
    left: slide.offsetLeft,
    behavior: "smooth"
  });
}
function closeList() {
  _HeaderEvents.menu.style.left = "-25rem";
  _HeaderEvents.closeBtn.style.left = "-20rem";
  _SubLists.subListsArray.forEach(function (sublist) {
    sublist.classList.remove("active");
  });
}
function switchONsublist(index) {
  _SubLists.subListsArray.forEach(function (sublist) {
    sublist.classList.remove("active");
  });
  _SubLists.subListsArray[index].classList.add("active");
  _HeaderEvents.closeBtn.style.left = "".concat(_HeaderEvents.menu.offsetWidth + _SubLists.subListsArray[index].offsetWidth + 5, "px");
}
function toggleDisability(type) {
  if (type === 'ON') {
    Array.from(document.body.children).forEach(function (child) {
      Array.from(child.children).forEach(function (subChild) {
        if (!Array.from(subChild.classList).includes('menu') && !Array.from(subChild.classList).includes("subList-wrapper")) {
          subChild.classList.add('passive');
        }
      });
    });
  } else {
    Array.from(document.body.children).forEach(function (child) {
      Array.from(child.children).forEach(function (subChild) {
        if (!Array.from(subChild.classList).includes('menu') && !Array.from(subChild.classList).includes("subList-wrapper")) {
          subChild.classList.remove('passive');
        }
      });
    });
  }
}
},{"./HeaderEvents":"src/JS/modules/HeaderEvents.js","./SubLists":"src/JS/modules/SubLists.js"}],"src/JS/modules/SubLists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subListsArray = exports.SubList = void 0;
var _functions = require("./functions");
var _HeaderEvents = require("./HeaderEvents");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var main = document.querySelector("main");
var subListsArray = [];
exports.subListsArray = subListsArray;
var SubList = /*#__PURE__*/function () {
  function SubList() {
    _classCallCheck(this, SubList);
    this.wrapper = (0, _functions.createEl)("div", {
      //<---В каждом новом подсписке создается новый враппер, в который добавляются товары.
      className: "subList-wrapper" ///Как сделать общий враппер, чтобы в него добавлялись товары, в зависимости от выбранного пункта и удалялись старые?
    });

    main.append(this.wrapper);
    this.wrapper.style.position = "fixed";
    this.wrapper.style.zIndex = 11;
    this.wrapper.style.borderRadius = "10px";
    this.wrapper.style.top = "".concat(_HeaderEvents.menu.offsetTop, "px");
    this.wrapper.style.left = "".concat(_HeaderEvents.menu.offsetWidth, "px");
    this.wrapper.style.height = "".concat(_HeaderEvents.menu.offsetHeight, "px");
    this.wrapper.style.width = "300px";
    this.wrapper.style.backgroundColor = "white";
    subListsArray.push(this.wrapper);
  }
  _createClass(SubList, [{
    key: "addItem",
    value: function addItem(text) {
      this.item = (0, _functions.createEl)("div", {
        className: "item",
        textContent: text
      });
      this.wrapper.append(this.item);
    }
  }, {
    key: "addDefiniteNumberOfItems",
    value: function addDefiniteNumberOfItems(arr) {
      for (var counter = 0; counter < arr.length; counter++) {
        this.addItem(arr[counter]);
      }
    }
  }]);
  return SubList;
}();
exports.SubList = SubList;
var forWomenList = ["Блузки и рубашки", "Брюки", "Верхняя одежда", "Джемперы, водолазки и кардиганы", "Джинсы", "Комбинезоны", "Костюмы", "Лонгсливы", "Пиджаки,жилеты и жакеты", "Платья и сарафаны", "Толстовки, свитшоты и худи", "Туники", "Футболки и топы", "Халаты", "Шорты", "Юбки", "Белье", "Большие размеры", "Будущие мамы", "Для высоких", "Для невысоких", "Одежда для дома", "Офис", "Пляжная мода", "Религиозная", "Свадьба", "Спецодежда и СИЗы", "Подарки женщинам"];
var shoesList = ["Детская", "Для новорожденных", "Женская", "Мужская", "Ортопедическая обувь", "Аксессуары для обуви"];
var forChildrenList = ["Для девочек", "Для мальчиков", "Для новорожденных", "Детская электроника", "Конструкторы", "Детский транспорт", "Детское питание", "Религиозная одежда", "Товары для малыша", "Подарки детям"];
var forMenList = ["Брюки", "Верхняя одежда", "Джемперы, водолазки и кардиганы", "Джинсы", "Комбинезоны и полукомбинезоны", "Костюмы", "Лонгсливы", "Майки", "Пиджаки, жилеты и жакеты", "Пижамы", "Рубашки", "Толстовки, свитшоты и худи", "Футболки", "Футболки-поло", "Халаты"];
var houseList = ["Ванная", "Кухня", "Предметы интерьера", "Спальня", "Гостиная", "Детская", "Досуг и творчество", "Зеркала", "Коврики", "Кронштейны", "Освещение", "Для курения"];
var newYearList = ["Вечерний образ", "Праздничная обувь", "Наряды для детей", "Карнавальные товары", "Елки", "Новогодний декор", "Новогодние книги", "Открытки", "Подарки", "Подарочная упаковка", "Праздничный стол", "Свечи и подсвечники", "Символ года"];
var beautyList = ["Аксессуары", "Волосы", "Аптченая косметика", "Детская декоративная косметика", "Для загара", "Для мам и малышей", "Израильская косметика", "Инструменты для парикмахеров", "Корейские бренды", "Макияж", "Мужская линия", "Наборы для ухода", "Ногти", "Органическая косметика", "Парфюмерия", "Уход за кожей", "Гигиена полости рта"];
var accessoriesList = ["Аксессуары для волос", "Аксессуары для одежды", "Бижутерия", "Веера", "Галстуки и бабочки", "Головные уборы", "Зеркальца", "Зонты", "Кошельки и кредитницы", "Маски для сна", "Носовые платки", "Oчки и футляры", "Перчатки и варежки", "Платки и шарфы", "Религиозные", "Ремни и пояса"];
var electroList = ["Автоэлеткроника и навигация", "Гарнитуры и наушники", "Детская электроника", "Игровые консоли и игры", "Кабели и зарядные устройства", "Музыка и видео", "Ноутбуки и компьютеры", "Офисная техника", "Развлечения и гаджеты", "Сетевое оборудование", "Системы безопасности", "Смартфоны и телефоны", "Умный дом"];
var toysList = ["Антистресс", "Для малышей", "Для песочницы", "Игровые комплексы", "Игровые наборы", "Игрушечный транспорт", "Игрушки для ванной", "Интерактивные", "Кинетический песок", "Конструкторы", "Куклы и аксессуары", "Музыкальные", "Мыльные пузыри", "Мягкие игрушки", "Наборы для опытов", "Настольные игры", "Радиоуправляемые", "Сборные модели", "Спортивные игры", "Фигурки и роботы"];
var furnitureList = ["Бескаркасная мебель", "Детская мебель", "Диваны и кресла", "Столы и стулья", "Мебель для гостиной", "Мебель для кухни", "Мебель для прихожей", "Mебель для спальни", "Офисная мебель", "Мебельная фурнитура"];
var forAdultList = ["Белье и аксессуары", "Игры и сувениры", "Интимная косметика", "Интимная съедобная косметика", "Презервативы и лубриканты", "Секс игрушки", "Фетиш и БДСМ"];
var productsList = ["Вкусные подарки", "Чай и кофе", "Сладости и хлебобулочные изделия", "Бакалея", "Детское питание", "Добавик пищевые", "Здоровое питание", "Мясная продукция", "Молочные продукты и яйца", "Напитки", "Снеки", "Замороженная продукция", "Фрукты и ягоды", "Овощи"];
var forWomen = new SubList();
forWomen.addDefiniteNumberOfItems(forWomenList);
var shoes = new SubList();
shoes.addDefiniteNumberOfItems(shoesList);
var forChildren = new SubList();
forChildren.addDefiniteNumberOfItems(forChildrenList);
var forMen = new SubList();
forMen.addDefiniteNumberOfItems(forMenList);
var house = new SubList();
house.addDefiniteNumberOfItems(houseList);
var newYear = new SubList();
newYear.addDefiniteNumberOfItems(newYearList);
var beauty = new SubList();
beauty.addDefiniteNumberOfItems(beautyList);
var accessories = new SubList();
accessories.addDefiniteNumberOfItems(accessoriesList);
var electro = new SubList();
electro.addDefiniteNumberOfItems(electroList);
var toys = new SubList();
toys.addDefiniteNumberOfItems(toysList);
var furniture = new SubList();
furniture.addDefiniteNumberOfItems(furnitureList);
var forAdult = new SubList();
forAdult.addDefiniteNumberOfItems(forAdultList);
var products = new SubList();
products.addDefiniteNumberOfItems(productsList);
},{"./functions":"src/JS/modules/functions.js","./HeaderEvents":"src/JS/modules/HeaderEvents.js"}],"src/JS/modules/Swiper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swiper = void 0;
var _functions = require("./functions");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
///<---У меня не получилось импортировать сюда картинки, 
var main = document.querySelector("main"); ///можешь сам попробовать
var Swiper = /*#__PURE__*/function () {
  function Swiper(parentNode) {
    _classCallCheck(this, Swiper);
    _defineProperty(this, "slidesList", []);
    _defineProperty(this, "swiper", (0, _functions.createEl)("div", {
      className: "swiper"
    }));
    _defineProperty(this, "page", 0);
    parentNode.prepend(this.swiper);
  }
  _createClass(Swiper, [{
    key: "addSlide",
    value: function addSlide() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.slide = (0, _functions.createEl)("div", {
        className: "slide"
      });
      this.image = (0, _functions.createEl)("image", {
        className: "image-bg"
      });
      this.arrowNext = (0, _functions.createEl)("div", {
        className: "arrow arrowNext",
        textContent: "➤"
      });
      this.arrowPrev = (0, _functions.createEl)("div", {
        className: "arrow arrowPrev",
        textContent: "➤"
      });
      this.info = (0, _functions.createEl)("div", {
        className: "info"
      });
      this.price = (0, _functions.createEl)("div", {
        className: "price",
        textContent: options.price
      });
      this.description = (0, _functions.createEl)("div", {
        className: "description",
        textContent: options.description
      });
      this.info.append(this.price, this.description);
      this.slide.append(this.arrowPrev, this.arrowNext, this.image, this.info);
      this.swiper.append(this.slide);
      this.slidesList.push({
        slide: this.slide,
        arrowNext: this.arrowNext,
        arrowPrev: this.arrowPrev,
        price: this.price,
        description: this.description
      });
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;
      this.slidesList.forEach(function (slide) {
        slide.arrowNext.addEventListener("click", function () {
          _this.autoScroll();
          _this.page++;
          if (_this.page > _this.slidesList.length - 1) _this.page = 0;
          // console.log( window.scrollX + this.slidesList[this.page].slide.getBoundingClientRect().left);<---посмотри, как изменяется абсолютное значение по Х для третьего слайда, в чем проблема?
          (0, _functions.scrollByX)(_this.swiper, _this.slidesList[_this.page].slide); // Я час сидел не мог понять почему это так работает, пока не добавил координату через offsetLeft
        });

        slide.arrowPrev.addEventListener("click", function () {
          clearInterval(_this.idInterval);
          _this.page--;
          if (_this.page < 0) _this.page = _this.slidesList.length - 1;
          (0, _functions.scrollByX)(_this.swiper, _this.slidesList[_this.page].slide);
        });
      });
    }
  }, {
    key: "autoScroll",
    value: function autoScroll() {
      var _this2 = this;
      this.idInterval = setInterval(function () {
        _this2.page++;
        if (_this2.page > _this2.slidesList.length - 1) _this2.page = 0;
        (0, _functions.scrollByX)(_this2.swiper, _this2.slidesList[_this2.page].slide);
      }, 3000);
    }
  }]);
  return Swiper;
}();
exports.Swiper = Swiper;
var swiper = new Swiper(main);
swiper.addSlide();
swiper.addSlide();
swiper.addSlide();
swiper.addEvents();
swiper.autoScroll();
window.addEventListener('mouseover', function (event) {
  if (event.target.className === 'slide') {
    event.target.style.opacity = 0.8;
  } else {
    document.querySelectorAll('.slide').forEach(function (slide) {
      slide.style.opacity = 1;
    });
  }
});
},{"./functions":"src/JS/modules/functions.js"}],"src/JS/index.js":[function(require,module,exports) {
"use strict";

var _SubLists = require("./modules/SubLists");
var _functions = require("./modules/functions");
var _Swiper = require("./modules/Swiper");
var _HeaderEvents = require("./modules/HeaderEvents");
},{"./modules/SubLists":"src/JS/modules/SubLists.js","./modules/functions":"src/JS/modules/functions.js","./modules/Swiper":"src/JS/modules/Swiper.js","./modules/HeaderEvents":"src/JS/modules/HeaderEvents.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57050" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/JS/index.js"], null)
//# sourceMappingURL=/JS.634691b8.js.map