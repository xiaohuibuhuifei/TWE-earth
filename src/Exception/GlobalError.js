/**
 * 全局错误
 */
export default class GlobalError extends Error {
  constructor(message) {
    super(message);
    this.name = "TWEarthGlobalError";
  }
}
