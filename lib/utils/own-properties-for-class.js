/**
 * Returns the `properties` object specifically on `klass`. Use for:
 * (1) super chain mixes togther to make `propertiesForClass` which is
 * then used to make `observedAttributes`.
 * (2) properties effects and observers are created from it at `finalize` time.
 *
 * @param {HTMLElement} klass Element class
 * @return {Object} Object containing own properties for this class
 * @private
 */
export const ownPropertiesForClass = (klass) => {
  if (!klass.hasOwnProperty('__ownProperties')) {
    klass.__ownProperties = klass.hasOwnProperty('properties') ? (klass).properties : {};
  }
  return klass.__ownProperties;
}