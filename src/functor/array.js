import { Functor } from '../functor';

Functor.instance(Array, {
  map(fn, array) {
    return array.map(fn);
  }
});
