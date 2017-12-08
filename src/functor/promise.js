import { Functor } from '../functor';

Functor.instance(Promise, {
  map(fn, promise) {
    return promise.then(fn);
  }
});
