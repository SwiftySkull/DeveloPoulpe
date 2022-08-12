/**
 * Gives the number of days from a specific date until now
 *
 * @param {string} date The date of the first day
 */
export default function (cookies, cookieStatus, url) {
  window.scroll(0, 0);

  if (cookieStatus || cookies.get('cookies-accept') === 'true') {
    cookies.set('url', url);
  }

  if (!cookieStatus && cookies.get('cookies-accept') !== 'true') {
    cookies.remove('url');
  }
}
