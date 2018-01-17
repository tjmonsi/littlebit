import { finalizeClass } from './finalize-class.js';

/**
 * Called by `ElementClass.finalize()`. Ensures this `klass` and
 * *all superclasses* are finalized by traversing the prototype chain
 * and calling `klass.finalize()`.
 *
 * @param {PolymerElementConstructor} klass Element class
 * @private
 */
export const finalizeClassAndSuper = (klass, instance) => {
  let proto = /** @type LittleBitElementConstructor */ (klass).prototype;
  let superCtor = Object.getPrototypeOf(proto).constructor;
  if (superCtor.prototype instanceof instance) {
    superCtor.finalize();
  }
  finalizeClass(klass);
}