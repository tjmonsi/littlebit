/**
 * Configures a `proto` based on a `observers` array.
 * Leverages `PropertyEffects` to create observers.
 * @param {PolymerElement} proto Element class prototype to add accessors
 *   and effects to
 * @param {Object} observers Flattened array of observer descriptors for
 *   this class
 * @param {Object} dynamicFns Object containing keys for any properties
 *   that are functions and should trigger the effect when the function
 *   reference is changed
 * @private
 */
export const finalizeObservers = (proto, observers, dynamicFns) => {
  for (let i=0; i < observers.length; i++) {
    proto._createMethodObserver(observers[i], dynamicFns);
  }
}