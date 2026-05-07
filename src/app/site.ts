export const SITE_URL = "https://memepouch.tetherme.app";
export const APP_STORE_URL = "https://apps.apple.com/us/app/memepouch/id6763726992";

export const siteUrl = (path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
};
