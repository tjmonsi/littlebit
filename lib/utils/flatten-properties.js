/**
 * Mixes `props` into `flattenedProps` but upgrades shorthand type
 * syntax to { type: Type}.
 *
 * @param {Object} flattenedProps Bag to collect flattened properties into
 * @param {Object} props Bag of properties to add to `flattenedProps`
 * @return {Object} The input `flattenedProps` bag
 * @private
 */
export const flattenProperties = (flattenedProps, props) => {
  for (let p in props) {
    let o = props[p];
    if (typeof o == 'function') {
      o = { type: o };
    }
    flattenedProps[p] = o;
  }
  return flattenedProps;
}