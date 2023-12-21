var author = "xiaohui";
var version = "0.0.2";
var blog = "https://blog.csdn.net/u010358183";
var organization = "Zhongchuangzhiwei Technology Co., LTD";

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

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
var isUndefined$1 = /*@__PURE__*/getDefaultExportFromCjs(isUndefined_1);

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
var isNil$1 = /*@__PURE__*/getDefaultExportFromCjs(isNil_1);

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
var isNull$1 = /*@__PURE__*/getDefaultExportFromCjs(isNull_1);

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
    if (isUndefined$1(Cesium)) {
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
      if (isUndefined$1(window.viewer) || isNull$1(window.viewer)) {
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
  if (isNil$1(value)) {
    throw new GlobalError(message || "参数不能为空");
  }
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAgCAYAAABkS8DlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADSSURBVHja7NYxEoUgDEDBYM39z2qHtZViwMFxt1FJnF/98ZXWWkRE7LWWOOt5Lsm9q/vsbu9Zdtazs/J19O5bs1XPZrwze/6V31zxbOZs1n905Wt2p3f25GzE7ohv6q3nLQCA3xEAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAA8g4AAAD//wMA4WEFTJOT5UIAAAAASUVORK5CYII=";

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
// Cesium.Material.FlagMaterialSource = `
//   czm_material czm_getMaterial(czm_materialInput materialInput)
//   {
//     czm_material material = czm_getDefaultMaterial(materialInput);
//     vec2 muv = materialInput.st;
//     // material.diffuse = texture(uImage, materialInput.st).rgb;
//     // vec2 center = vec2(0.2, 0.2);
//     // float dis = distance(center, materialInput.st);
//     // material.alpha=mod(materialInput.st.s,1.0);
//     vec4 imageColor = texture(uImage, vec2(fract(muv.y + time), fract(muv.x + time)));
//     material.diffuse = vec3(imageColor.rgb);
//     return material;
//   }
//   `;
Cesium.Material.FlagMaterialSource = "\n  czm_material czm_getMaterial(czm_materialInput materialInput)\n  {\n    czm_material material = czm_getDefaultMaterial(materialInput);\n    vec2 st = materialInput.st;\n    vec4 colorImage = texture(image, vec2(fract(st.t - time), st.t));\n    vec4 fragColor;\n    fragColor.rgb = color.rgb / 1.0;\n    fragColor = czm_gammaCorrect(fragColor);\n    material.alpha = colorImage.a * color.a;\n    material.diffuse = color.rgb;\n    material.emission = fragColor.rgb;\n    return material;\n  }\n  ";
Cesium.Material._materialCache.addMaterial(Cesium.Material.FlagMaterialType, {
  fabric: {
    type: Cesium.Material.FlagMaterialType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.5),
      image: img,
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
      coordinates: Cesium.Rectangle.fromDegrees(105, 32, 109, 35),
      material: new FlagMaterialProperty()
    }
  });
};
var putWall = function putWall() {
  // 定义墙面的起点和终点坐标
  var startPoint = Cesium.Cartesian3.fromDegrees(-75.1704, 39.9319);
  var endPoint = Cesium.Cartesian3.fromDegrees(-78.1692, 39.9314);

  // 定义墙面的高度
  var height = 100000;

  // 定义墙面的顶点数组
  var positions = [startPoint, endPoint];

  // 创建墙面实体
  viewer.entities.add({
    name: "Wall",
    wall: {
      positions: positions,
      maximumHeights: [height, height],
      minimumHeights: [0, 0],
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
  putWall: putWall,
  Inspect: Check // 检查类
};

export { twearth as default };
