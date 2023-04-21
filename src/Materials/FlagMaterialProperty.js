import logo from "../Assets/images/logo.png";

/**
 * 图片材质
 */
class FlagMaterialProperty {
  constructor() {
    this._definitionChanged = new Cesium.Event();
  }

  get definitionChanged() {
    return this._definitionChanged;
  }

  get isConstant() {
    return false;
  }

  getType(time) {
    return Cesium.Material.FlagMaterialType;
  }

  getValue(time, result) {
    result.time = performance.now() / 10000;
    return result;
  }

  equals(other) {
    return this === other || other instanceof FlagMaterialProperty;
  }
}

Cesium.FlagMaterialProperty = FlagMaterialProperty;
Cesium.Material.FlagMaterialProperty = "FlagMaterialProperty";
Cesium.Material.FlagMaterialType = "FlagMaterialType";
Cesium.Material.FlagMaterialSource = `
  czm_material czm_getMaterial(czm_materialInput materialInput)
  {
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec2 muv = materialInput.st;
    vec4 imageColor = texture(uImage, vec2(fract(muv.x + time), fract(muv.y + time)));
    material.diffuse = vec3(imageColor.rgb);
    return material;
  }
  `;
Cesium.Material._materialCache.addMaterial(Cesium.Material.FlagMaterialType, {
  fabric: {
    type: Cesium.Material.FlagMaterialType,
    uniforms: {
      uImage: logo,
      time: 0,
    },
    source: Cesium.Material.FlagMaterialSource,
  },
  translucent: function (material) {
    return true;
  },
});

export { FlagMaterialProperty };
