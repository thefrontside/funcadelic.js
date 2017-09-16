import { Functor } from '../functor';

Functor.instance(Object, {
  map(fn, object) {
    return Object.keys(object).reduce((obj, key) => Object.assign(obj, {[key]: fn(object[key])}), {});
  }
});
