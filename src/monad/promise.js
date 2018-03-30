import { Monad } from '../monad';

Monad.instance(Promise, {
  flatMap(fn, promise) {
    return promise.then(fn);
  }
});
