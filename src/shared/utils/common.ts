// Ref: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html

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

export function curryr2(fn: (a: any, b: any) => any) {
  return (b: any) => (a: any) => fn.apply(null, [a, b]);
}

export const eq = curryr2((a: any, b: any) => a === b);

export const not = function not(fn) {
  return function () {
    return !fn.apply(null, arguments);
  };
};
