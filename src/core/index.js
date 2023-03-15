import { checkViewer } from "../inspect/index";

export const initEarth = (el) => {
  if (!Cesium) {
    console.log("请引入cesium");
    return;
  }
  if (!el) {
    console.log("请传入页面元素id");
    return;
  }
  let viewer = new Cesium.Viewer(el, {
    animation: false, // 动画小部件
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    sceneModePicker: false,
    selectionIndicator: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
  });
  // 去除logo
  viewer.cesiumWidget.creditContainer.style.display = "none";
  return viewer;
};

export const flyTo = (options, viewer) => {
  viewer = checkViewer(viewer);
  console.log(viewer);
  let destination = Cesium.Cartesian3.fromDegrees(
    options.lng,
    options.lat,
    1000
  );
  viewer.camera.flyTo({
    destination: destination,
    duration: 3,
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-90),
      roll: 0,
    },
  });
};
