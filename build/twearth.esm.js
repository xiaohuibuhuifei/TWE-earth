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

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
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
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
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
 * 检查是否为空
 * @param {String} value 要判断的值
 * @param {String} message 报错信息
 */
Check.checkNull = function (value, message) {
  if (isNil_1(value)) {
    throw new GlobalError(message || "参数不能为空");
  }
};

var img = "data:image/png;base64,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";

/**
 * 图片材质
 */
var FlagMaterialProperty = /*#__PURE__*/function () {
  function FlagMaterialProperty() {
    this._definitionChanged = new Cesium.Event();
  }
  var _proto = FlagMaterialProperty.prototype;
  _proto.getType = function getType(time) {
    return Cesium.Material.FlagMaterialType;
  };
  _proto.getValue = function getValue(time, result) {
    result.time = performance.now() / 10000;
    return result;
  };
  _proto.equals = function equals(other) {
    return this === other || other instanceof FlagMaterialProperty;
  };
  _createClass(FlagMaterialProperty, [{
    key: "definitionChanged",
    get: function get() {
      return this._definitionChanged;
    }
  }, {
    key: "isConstant",
    get: function get() {
      return false;
    }
  }]);
  return FlagMaterialProperty;
}();
Cesium.FlagMaterialProperty = FlagMaterialProperty;
Cesium.Material.FlagMaterialProperty = "FlagMaterialProperty";
Cesium.Material.FlagMaterialType = "FlagMaterialType";
Cesium.Material.FlagMaterialSource = "\n  czm_material czm_getMaterial(czm_materialInput materialInput)\n  {\n    czm_material material = czm_getDefaultMaterial(materialInput);\n    vec2 muv = materialInput.st;\n    vec4 imageColor = texture(uImage, vec2(fract(muv.x + time), fract(muv.y + time)));\n    material.diffuse = vec3(imageColor.rgb);\n    return material;\n  }\n  ";
Cesium.Material._materialCache.addMaterial(Cesium.Material.FlagMaterialType, {
  fabric: {
    type: Cesium.Material.FlagMaterialType,
    uniforms: {
      uImage: img,
      time: 0
    },
    source: Cesium.Material.FlagMaterialSource
  },
  translucent: function translucent(material) {
    return true;
  }
});

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
    navigationInstructionsInitiallyVisible: false,
    contextOptions: {
      requestWebgl1: true
    }
  });
  // 去除logo
  viewer.cesiumWidget.creditContainer.style.display = "none";
  return viewer;
};
var putRectangle = function putRectangle() {
  viewer.entities.add({
    rectangle: {
      coordinates: Cesium.Rectangle.fromDegrees(105, 32, 110, 35),
      material: new FlagMaterialProperty()
    }
  });
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
  putRectangle: putRectangle,
  Inspect: Check // 检查类
};

export { twearth as default };
