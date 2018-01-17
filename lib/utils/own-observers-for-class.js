/**
 * Returns the `observers` array specifically on `klass`. Use for
 * setting up observers.
 *
 * @param {HTMLElement} klass Element class
 * @return {Array} Array containing own observers for this class
 * @private
 */
export const ownObserversForClass = (klass) => {
  if (!klass.hasOwnProperty('__ownObservers')) {
    klass.__ownObservers =
      klass.hasOwnProperty('observers') ?
      /** @type LittleBitElementConstructor */ (klass).observers : [];
  }
  return klass.__ownObservers;
}