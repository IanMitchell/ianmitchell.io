export function getStandardDate(date) {
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getShortMonth(date) {
  return date.toLocaleString('en-US', { month: 'short' });
}

export function getTwoDigitDate(date) {
  return `0${date.getDate() + 1}`.slice(-2);
}
