import { Semigroup } from '../semigroup';

Semigroup.instance(Array, {
  append(a1, a2) {
    return a1.concat(a2);
  }
});
