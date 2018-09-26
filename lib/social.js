export function getUrl(request) {
  if (req) {
    return `${process.env.NOW_URL || 'http://localhost:3000'}${req.url}`;
  }

  return document.location;
}
