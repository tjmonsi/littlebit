import { createPropertyFromConfig } from './create-property-from-config.js';

/**
 * Configures a `proto` based on a `properties` object.
 * Leverages `PropertyEffects` to create property accessors and effects
 * supporting, observers, reflecting to attributes, change notification,
 * computed properties, and read only properties.
 * @param {LittleBitElement} proto Element class prototype to add accessors
 *    and effects to
 * @param {Object} properties Flattened bag of property descriptors for
 *    this class
 * @private
 */
export const finalizeProperties = (proto, properties) => {
  for (let p in properties) {
    createPropertyFromConfig(proto, p, properties[p], properties);
  }
}