import { Functor } from '../functor';
import stable from '../stable';

const { getPrototypeOf, keys } = Object;

Functor.instance(Object, {
  map(fn, object) {

    let descriptors = keys(object).reduce((descriptors, key) => {
      descriptors[key] = {
        configurable: true,
        enumerable: true,
        get: stable(() => fn(object[key], key))
      }
      return descriptors;
    }, {});

    return Object.create(getPrototypeOf(object), descriptors);
  }
});
