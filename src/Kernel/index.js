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

export const putWall = () => {
  // 定义墙面的起点和终点坐标
  var startPoint = Cesium.Cartesian3.fromDegrees(-75.1704, 39.9319);
  var endPoint = Cesium.Cartesian3.fromDegrees(-78.1692, 39.9314);

  // 定义墙面的高度
  var height = 100000;

  // 定义墙面的顶点数组
  var positions = [startPoint, endPoint];

  // 创建墙面实体
  var wallEntity = viewer.entities.add({
    name: "Wall",
    wall: {
      positions: positions,
      maximumHeights: [height, height],
      minimumHeights: [0, 0],
      material: new FlagMaterialProperty(),
    },
  });
};
