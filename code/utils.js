// code/utils.js
export function cleanAwsUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    const cleanedHost = url.host.replace(/^\d{12}-[a-z0-9]+\./, '');
    return `${url.protocol}//${cleanedHost}${url.pathname}${url.search}${url.hash}`;
  } catch (e) {
    return null;
  }
}