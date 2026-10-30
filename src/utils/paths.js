const base = import.meta.env.BASE_URL;

export const sitePath = (path = '') => `${base}${path.replace(/^\/+/, '')}`;

export function pageFromPath(pathname) {
  if (!pathname.startsWith(base)) return null;
  const path = pathname.slice(base.length).replace(/^\/+|\/+$/g, '');
  return path === '' || path === 'index.html'
    ? 'about'
    : path.replace(/\/index\.html$/, '');
}
