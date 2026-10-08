const normalize = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "") : path;

/** True when `href` points at the page currently being rendered. */
export const isCurrentPath = (pathname: string, href: string) =>
  normalize(pathname) === normalize(href);
