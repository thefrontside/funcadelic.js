import GeneratorFunction from '../generator-function';

import { Semigroup } from '../semigroup';

Semigroup.instance(GeneratorFunction, {
  append(left, right) {
    return function*(...args) {
      yield* left(...args);
      yield* right(...args);
    }
  }
})
