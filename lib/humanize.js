export default function humanize(source) {
  if (!source) {
    return '';
  }

  switch (source.length) {
    case 0:
      return '';
    case 1:
      return source[0];
    case 2:
      return source.sort().join(' and ');
    default: {
      const [last, ...arr] = source.sort().reverse();
      return `${arr.reverse().join(', ')}, and ${last}`;
    }
  }
}
