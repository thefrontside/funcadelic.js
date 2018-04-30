import { Functor } from '../functor';
import stable from '../stable';

const { getPrototypeOf } = Object;

Functor.instance(Object, {
  map(fn, object) {
    
    let descriptors = {};
    for (let key in object) {
      descriptors[key] = {
        enumerable: true,
        get: stable(() => fn(object[key], key))
      }
    }
  
    return Object.create(getPrototypeOf(object), descriptors);
  }
});
