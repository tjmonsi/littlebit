/**
 * Returns true if a `klass` has finalized. Called in `ElementClass.finalize()`
 * @param {PolymerElementConstructor} klass Element class
 * @return {boolean} True if all metaprogramming for this class has been
 *   completed
 * @private
 */
export const hasClassFinalized = (klass) => {
  return klass.hasOwnProperty('__finalized');
}