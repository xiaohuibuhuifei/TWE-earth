var author = "Yahui Zhao";
var version = "Version 0.0.1";
var blog = "https://blog.csdn.net/u010358183";
var organization = "Zhongchuangzhiwei Technology Co., LTD";

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}
var isUndefined_1 = isUndefined;

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}
var isNil_1 = isNil;

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}
var isNull_1 = isNull;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/**
 * 全局错误
 */
var GlobalError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(GlobalError, _Error);
  function GlobalError(message) {
    var _this;
    _this = _Error.call(this, message) || this;
    _this.name = "TWEarthGlobalError";
    return _this;
  }
  return GlobalError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * 错误常量
 * @description 报错枚举
 */
var Error$1 = {
  NO_CESIUM: "请引入Cesium.js",
  NO_VIEWER: "未找到Viewer, 请检查..."
};

// lodash

/**
 * 检查类
 * @description 检查、校验相关函数
 */
var Check = {};

/**
 * 检查是否引入Cesium
 */
Check.checkCesium = function () {
  try {
    if (isUndefined_1(Cesium)) {
      throw new GlobalError(Error$1.NO_CESIUM);
    }
  } catch (e) {
    throw new GlobalError(Error$1.NO_CESIUM);
  }
};

/**
 * 检查是否传入Viewer
 */
Check.checkViewer = function (viewer) {
  if (!viewer) {
    try {
      if (isUndefined_1(window.viewer) || isNull_1(window.viewer)) {
        throw new GlobalError(Error$1.NO_VIEWER);
      } else {
        return window.viewer;
      }
    } catch (e) {
      throw new GlobalError(Error$1.NO_VIEWER);
    }
  } else {
    return viewer;
  }
};

/**
 *
 * @param {String} value 要判断的值
 * @param {String} message 报错信息
 */
Check.checkNull = function (value, message) {
  if (isNil_1(value)) {
    throw new GlobalError(message || "参数不能为空");
  }
};

/**
 * 核心类
 * @description twEarth核心库，大部分函数导出到twearth下可以通过twearth对象直接调用
 */
var initEarth = function initEarth(el) {
  Check.checkCesium();
  Check.checkNull(el, "请指定承载地球实例的DOM元素或ID");
  var viewer = new Cesium.Viewer(el, {
    animation: false,
    // 动画小部件
    baseLayerPicker: false,
    // 底图选择器
    fullscreenButton: false,
    // 全屏按钮
    geocoder: false,
    // POI搜索框
    homeButton: false,
    // 主视图按钮
    infoBox: false,
    // 信息框
    sceneModePicker: false,
    // 视图模式选择器
    selectionIndicator: false,
    // 选取指示器
    timeline: false,
    // 时间线小部件
    navigationHelpButton: false,
    // 帮助按钮
    navigationInstructionsInitiallyVisible: false
  });
  // 去除logo
  viewer.cesiumWidget.creditContainer.style.display = "none";
  return viewer;
};

/**
 * 主入口
 * @description twEarth主入口
 */
var twearth = {
  author: author,
  version: version,
  organization: organization,
  blog: blog,
  initEarth: initEarth,
  // 初始化地球
  Inspect: Check // 检查类
};

export { twearth as default };
