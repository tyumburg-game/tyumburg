function generateKey(args: any[]) {
  return args.map(arg => `${typeof(arg)}<${String(arg)}>`).join(',');
}

export function memoize(fn: Function) {
  type Cache = {
    [key: string]: any;
  };

  const cache: Cache = {};

  return function (...args: any[]) {
    const key = generateKey(args);
    let result = cache[key];

    if (typeof result === 'undefined') {
      result = fn(...args);

      cache[key] = result;
    }

    return result;
  };
}
