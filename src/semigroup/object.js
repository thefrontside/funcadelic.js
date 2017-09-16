import { Semigroup } from '../semigroup';

Semigroup.instance(Object, {
  append(o1, o2) {
    return Object.assign({}, o1, o2);
  }
});
