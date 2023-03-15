const Entity = {
  version: "0.0.1",
};

/**
 * 创建动态点
 * @param {String|Number} options.lat 经度
 * @param {String|Number} options.lng 纬度
 * @param {Object} viewer 地球视图对象
 */
Entity.createPoint = (options, viewer) => {
  if (!viewer) viewer = window.viewer;
  var point = viewer.entities.add({
    position: new Cesium.CallbackProperty(function () {
      return Cesium.Cartesian3.fromDegrees(options.lng, options.lat);
    }, false),
    point: {
      pixelSize: 10,
      color: Cesium.Color.YELLOW,
    },
  });
  return point;
};

export default Entity;
