import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
// terser 代码压缩
import terser from "@rollup/plugin-terser";

// var outputPath = "dist/";
var outputPath = "D:/i-workspace/vue3-cesium/public/twearth/";

// 通用包配置
export default {
  input: "src/twearth.js",
  output: [
    {
      file: outputPath + "twearth.esm.js",
      format: "es",
    },
    {
      name: "twearth",
      file: outputPath + "twearth.aio.js",
      format: "umd",
    },
    {
      name: "twearth",
      file: outputPath + "twearth.min.js",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [
    json(),
    commonjs(),
    nodeResolve(),
    babel({ babelHelpers: "bundled" }),
  ],
};
