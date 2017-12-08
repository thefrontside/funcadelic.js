import { Applicative } from '../applicative';

Applicative.instance(Promise, {
  pure(value) {
    return Promise.resolve(value);
  },
  apply(left, right) {
    return left.then((fn) => right.then(fn));
  }
});
