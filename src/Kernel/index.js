import Inspect from "../Inspect";
import { FlagMaterialProperty } from "../Materials/FlagMaterialProperty";

/**
 * 核心类
 * @description twEarth核心库，大部分函数导出到twearth下可以通过twearth对象直接调用
 */
export const initEarth = (el) => {
  Inspect.checkCesium();
  Inspect.checkNull(el, "请指定承载地球实例的DOM元素或ID");
  let viewer = new Cesium.Viewer(el, {
    animation: false, // 动画小部件
    baseLayerPicker: false, // 底图选择器
    fullscreenButton: false, // 全屏按钮
    geocoder: false, // POI搜索框
    homeButton: false, // 主视图按钮
    infoBox: false, // 信息框
    sceneModePicker: false, // 视图模式选择器
    selectionIndicator: false, // 选取指示器
    timeline: false, // 时间线小部件
    navigationHelpButton: false, // 帮助按钮
    navigationInstructionsInitiallyVisible: false,
    contextOptions: {
      requestWebgl1: true,
    },
  });
  // 去除logo
  viewer.cesiumWidget.creditContainer.style.display = "none";
  return viewer;
};

export const putRectangle = () => {
  viewer.entities.add({
    rectangle: {
      coordinates: Cesium.Rectangle.fromDegrees(105, 32, 109, 35),
      material: new FlagMaterialProperty(),
    },
  });
};
