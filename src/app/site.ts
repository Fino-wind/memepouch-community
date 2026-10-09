export const SITE_URL = "https://memepouch.tetherme.app";
// App Store 营销活动链接（ASC → Analytics → Campaigns 的统计靠它）。
// 🔴 pt 是 ASC「生成营销活动链接」给的 provider token，不是销售报表的 vendor 编号 94022652 ——
//    2026-10-09 前一直填的是后者，Apple 不认，营销活动报表因此是空的。
export const APP_ID = "6763726992";
export const APP_STORE_PT = "128558141";
export const APP_STORE_URL = `https://apps.apple.com/us/app/memepouch/id${APP_ID}?pt=${APP_STORE_PT}&ct=site_web&mt=8`;

export const siteUrl = (path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
};
