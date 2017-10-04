import { Functor } from '../functor';
import { append } from '../semigroup';
import { foldr } from '../foldable';

const { assign, keys, getPrototypeOf } = Object;

Functor.instance(Object, {
  map(fn, object) {
    let properties = foldr(function(properties, entry) {
      return append(properties, {
        [entry.key]: {
          enumerable: true,
          get() {
            return fn(entry.value, entry.key);
          }
        }
      });
    }, {}, object);
    let prototype = getPrototypeOf(object);
    return Object.create(prototype, properties);
  }
});
