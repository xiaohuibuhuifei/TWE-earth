// lodash
import isUndefined from "lodash/isUndefined";
import isNil from "lodash/isNil";
import isNull from "lodash/isNull";
// exceptions
import GlobalError from "../Exception/GlobalError";
import Errors from "../Constants/Errors";

/**
 * 检查类
 * @description 检查、校验相关函数
 */
const Check = {};

/**
 * 检查是否引入Cesium
 */
Check.checkCesium = () => {
  try {
    if (isUndefined(Cesium)) {
      throw new GlobalError(Errors.NO_CESIUM);
    }
  } catch (e) {
    throw new GlobalError(Errors.NO_CESIUM);
  }
};

/**
 * 检查是否传入Viewer
 */
Check.checkViewer = (viewer) => {
  if (!viewer) {
    try {
      if (isUndefined(window.viewer) || isNull(window.viewer)) {
        throw new GlobalError(Errors.NO_VIEWER);
      } else {
        return window.viewer;
      }
    } catch (e) {
      throw new GlobalError(Errors.NO_VIEWER);
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
Check.checkNull = (value, message) => {
  if (isNil(value)) {
    throw new GlobalError(message || "参数不能为空");
  }
};

export default Check;
