// Ref: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
import anime from "animejs";

const slice = Array.prototype.slice;

/**
 * Check if a value is defined
 *
 * @function isDefined
 * @param {?} val
 * @returns {boolean}
 * @example
 * console.log(isDefined(undefined)); // false
 * console.log(isDefined(null)); // false
 * console.log(isDefined(0)); // true
 */
export function isDefined(val: unknown): boolean {
  if (val == null || typeof val === "undefined") return false;
  return true;
}

export function isObject(obj: any): boolean {
  return typeof obj === "object" && !!obj;
}

export function curryr2(fn: (a: any, b: any) => any) {
  return (b: any) => (a: any) => fn.apply(null, [a, b]);
}

export const eq = curryr2((a: any, b: any) => a === b);

export const not = function not(fn) {
  return function () {
    return !fn.apply(null, arguments);
  };
};

export const redeem = (nullable, replacement) =>
  isDefined(nullable) ? nullable : replacement;

/**
 * check object is truthy
 *
 * @static
 * @method truthy
 * @param {*} obj
 * @returns {Boolean} return boolean
 * @example
 * console.log( truthy(true) ); // true
 * console.log( truthy([]) ); // true
 * console.log( truthy(0) ); // false
 * console.log( truthy('') ); // false
 */
export const truthy = (any: any): boolean => !!any;

export function keys(obj: any): any[] {
  return isObject(obj) ? Object.keys(obj) : [];
}

export function each(
  list: any[],
  iterateeFn: (item: any, index: number) => void
): any[] {
  const _keys: any[] = keys(list);
  for (let i = 0, len = _keys.length; i < len; i++) {
    iterateeFn(list[_keys[i]], i);
  }
  return list;
}

export function map(
  list: any[],
  mapperFn: (item: any, index: number) => any
): any[] {
  const result: any[] = [];
  each(list, (item, index) => {
    result.push(mapperFn(item, index));
  });
  return result;
}

export function rest(list: any[], num = 1): any[] {
  return slice.call(list, num);
}

export function reduce(
  list: any[],
  iterateeFn: (memo: any, item: any) => any,
  memo?: any
): any {
  let result = memo;

  if (arguments.length === 2) {
    result = list[0];
    list = rest(list);
  }

  each(list, (item: any): void => {
    result = iterateeFn(result, item);
  });

  return result;
}

// FIXME: Arrange
export const nreduce = (n, func, seed) => {
  if (n <= 0) return;

  let accumulator = seed;
  for (let i = 0; i < n; i++) {
    accumulator = func(accumulator, i);
  }

  return accumulator;
};

export const decimalInt = curryr2(parseInt)(10);

export const digitLength = (number) => decimalInt(number).toString().length;

export const uppercase = (str) => str.toUpperCase();

export const numberStrHasMinDigit = (number, minDigit) => {
  const intLength = digitLength(number);
  if (intLength < minDigit) {
    return (
      nreduce(
        minDigit - intLength,
        (accum, index) => {
          return (accum += "0");
        },
        ""
      ) + number
    );
  }

  return number.toString();
};

export const removeAnime = (animeObj, targets) => {
  animeObj?.pause();
  if (targets) anime.remove(targets);
};

export const isInteger = function (int: number): boolean {
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  return isFinite(int) && Math.floor(int) === int;
};

export const getRandomInt = function (
  minInt: number,
  maxInt: number
): number | never {
  if (!isInteger(minInt) || !isInteger(maxInt)) {
    throw new TypeError(
      "[getRandomInt] Type of parameters must be Integer Number."
    );
  }

  return minInt + Math.floor(Math.random() * (maxInt - minInt + 1));
};

export const remap = (
  target: number,
  min: number,
  max: number,
  remapedMin: number,
  remapedMax: number
): number => {
  return (
    ((target - min) / (max - min)) * (remapedMax - remapedMin) + remapedMin
  );
};

export const partial = function (func /*, args... */) {
  var args = rest(slice.call(arguments));

  return function (/* args... */) {
    return func.apply(func, args.concat(slice.call(arguments)));
  };
};
