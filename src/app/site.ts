export const SITE_URL = "https://memepouch.tetherme.app";
export const APP_STORE_URL = "https://apps.apple.com/us/app/memepouch/id6763726992?pt=94022652&ct=site_web&mt=8";

export const siteUrl = (path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
};
