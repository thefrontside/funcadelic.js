import { Applicative } from '../applicative';

Applicative.instance(Promise, {
  pure(value) {
    return Promise.resolve(value);
  },
  apply(left, right) {
    return Promise.all([left, right]).then(([fn, value]) => fn(value));
  }
});
