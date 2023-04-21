/**
 * 主入口
 * @description twEarth主入口
 */
import { author, version, organization, blog } from "../package.json";
import { initEarth, putRectangle } from "./Kernel";
import Inspect from "./Inspect";

export default {
  author,
  version,
  organization,
  blog,
  initEarth, // 初始化地球
  putRectangle,
  Inspect, // 检查类
};
