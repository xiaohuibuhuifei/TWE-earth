import * as ER from "../constant/errorCode";

/**
 * 检查viewer可用性
 */
export const checkViewer = (viewer) => {
  if (!viewer) {
    if (!window.viewer) {
      throw new Error(`ecode:${ER.NO_VIEWER.code}, ${ER.NO_VIEWER.msg}`);
    } else {
      return window.viewer;
    }
  } else {
    return viewer;
  }
};
