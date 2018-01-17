import { flattenProperties } from './flatten-properties.js';
import { ownPropertiesForClass } from './own-properties-for-class.js';

/**
 * Returns a flattened list of properties mixed together from the chain of all
 * constructor's `config.properties`. This list is used to create
 * (1) observedAttributes,
 * (2) class property default values
 *
 * @param {PolymerElementConstructor} klass Element class
 * @return {PolymerElementProperties} Flattened properties for this class
 * @suppress {missingProperties} class.prototype is not a property for some reason?
 * @private
 */
export const propertiesForClass = (klass, instance) => {
  if (!klass.hasOwnProperty('__classProperties')) {
    klass.__classProperties =
    flattenProperties({}, ownPropertiesForClass(klass));
    let superCtor = Object.getPrototypeOf(klass.prototype).constructor;
    if (superCtor.prototype instanceof instance) {
      klass.__classProperties = Object.assign(
        Object.create(propertiesForClass(/** @type LittleBitElementConstructor */(superCtor))),
        klass.__classProperties);
    }
  }
  return klass.__classProperties;
}