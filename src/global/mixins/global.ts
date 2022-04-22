import { APP_DOMAIN } from '../settings';

const url = require('url');

/**
 * Generic URL formatter function.
 *
 * @param {*} path
 *   Path for formatted URL.
 * @param {*} options
 *   NodeJS URL object.
 * @returns Formatted URL string.
 */
export const formatUrl = (path, options = {}) => {
  const urlObject = {
    host: APP_DOMAIN,
    pathname: path || null,
    ...options,
  };
  const urlStr = url.format(urlObject);
  return urlStr.toString();
};
