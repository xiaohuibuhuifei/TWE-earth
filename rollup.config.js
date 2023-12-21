import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";
// terser 代码压缩
import terser from "@rollup/plugin-terser";

var outputPath = "build/";

// 通用包配置
export default {
  input: "src/twearth.js",
  output: [
    {
      file: outputPath + "twearth.esm.js",
      format: "es",
    },
    // {
    //   name: "twearth",
    //   file: outputPath + "twearth.aio.js",
    //   format: "umd",
    // },
    {
      name: "twearth",
      file: outputPath + "twearth.min.js",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [json(), image(), commonjs(), nodeResolve(), babel({ babelHelpers: "bundled" })],
};
