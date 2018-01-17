import { register } from './register.js';
import { ownPropertiesForClass } from './own-properties-for-class.js';
import { finalizeProperties } from './finalize-properties.js';
import { ownObserversForClass } from './own-observers-for-class.js';
import { finalizeObservers } from './finalize-observers.js';

/**
 * Configures a `klass` based on a staic `klass.config` object and
 * a `template`. This includes creating accessors and effects
 * for properties in `config` and the `template` as well as preparing the
 * `template` for stamping.
 *
 * @param {PolymerElementConstructor} klass Element class
 * @private
 */
export const finalizeClass = (klass) => {
  klass.__finalized = true;
  let proto = /** @type PolymerElementConstructor */ (klass).prototype;
  if (klass.hasOwnProperty('is') && klass.is) register(proto);
  let props = ownPropertiesForClass(klass);
  if (props) finalizeProperties(proto, props);
  let observers = ownObserversForClass(klass);
  if (observers) finalizeObservers(proto, observers, props);
  // note: create "working" template that is finalized at instance time
  // let template = /** @type PolymerElementConstructor */ (klass).template;
  // if (template) {
  //   if (typeof template === 'string') {
  //     let t = document.createElement('template');
  //     t.innerHTML = template;
  //     template = t;
  //   } else {
  //     template = template.cloneNode(true);
  //   }
  //   proto._template = template;
  // }
}