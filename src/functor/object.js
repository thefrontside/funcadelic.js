import { Functor } from '../functor';
import stable from '../stable';

const { getPrototypeOf, keys } = Object;

Functor.instance(Object, {
  map(fn, object) {

    let descriptors = keys(object).reduce((acc, key) => {
      acc[key] = {
        enumerable: true,
        get: stable(() => fn(object[key], key))
      }
      return acc;
    }, {});

    return Object.create(getPrototypeOf(object), descriptors);
  }
});
