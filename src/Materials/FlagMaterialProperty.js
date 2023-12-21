import logo from "../Assets/images/logo.png";
import ss from "../Assets/images/s.png";
import tt from "../Assets/images/t.png";
import flow from "../Assets/images/flow.png";

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
Cesium.Material.FlagMaterialSource = `
  czm_material czm_getMaterial(czm_materialInput materialInput)
  {
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec2 st = materialInput.st;
    vec4 colorImage = texture(image, vec2(fract(st.t - time), st.t));
    vec4 fragColor;
    fragColor.rgb = color.rgb / 1.0;
    fragColor = czm_gammaCorrect(fragColor);
    material.alpha = colorImage.a * color.a;
    material.diffuse = color.rgb;
    material.emission = fragColor.rgb;
    return material;
  }
  `;
Cesium.Material._materialCache.addMaterial(Cesium.Material.FlagMaterialType, {
  fabric: {
    type: Cesium.Material.FlagMaterialType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.5),
      image: flow,
      time: 0
    },
    source: Cesium.Material.FlagMaterialSource,
  },
  translucent: function (material) {
    return true;
  },
});

export { FlagMaterialProperty };
