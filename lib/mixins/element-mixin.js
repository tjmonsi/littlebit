// a modified copy of polymer element-mixin

import { dedupingMixin } from '../utils/mixin.js';
import { propertiesForClass } from '../utils/properties-for-class.js';
import { camelToDashCase } from '../utils/case-map.js';
import { hasClassFinalized } from '../utils/has-class-finalized.js';
import { finalizeClassAndSuper } from '../utils/finalize-class-and-super.js';

export const ElementMixin = dedupingMixin(base => {
  
  const Base = base;
  
  class LittleBit extends Base {
    
    /**
     * Standard Custom Elements V1 API.  The default implementation returns
     * a list of dash-cased attributes based on a flattening of all properties
     * declared in `static get properties()` for this element and any
     * superclasses.
     *
     * @return {Array} Observed attribute list
     */
    static get observedAttributes () {
      if (!this.hasOwnProperty('__observedAttributes')) {
        let list = [];
        let properties = propertiesForClass(this, LittleBit);
        for (let prop in properties) {
          list.push(camelToDashCase(prop));
        }
        this.__observedAttributes = list;
      }
      return this.__observedAttributes;
    }
    
    /**
     * Called automatically when the first element instance is created to
     * ensure that class finalization work has been completed.
     * May be called by users to eagerly perform class finalization work
     * prior to the creation of the first element instance.
     *
     * Class finalization work generally includes meta-programming such as
     * creating property accessors and any property effect metadata needed for
     * the features used.
     *
     * @public
     */
    static finalize() {
      if (!hasClassFinalized(this)) {
        finalizeClassAndSuper(this, LittleBit);
      }
    }
  }
});