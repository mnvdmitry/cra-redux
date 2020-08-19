export function cn(...args) {
  return args.reduce((acc, cur) => {
    if (cur) return `${acc} ${cur}`;

    return acc;
  }, '');
}
