import { Functor } from '../functor';
import { append } from '../semigroup';
import { foldr } from '../foldable';

const { assign, keys } = Object;

Functor.instance(Object, {
  map(fn, object) {
    return foldr((output, [key, value]) => append(output, {[key]: fn(value)}), {}, object);
  }
});
