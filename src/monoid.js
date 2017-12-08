import { Semigroup, append } from './semigroup';
import { foldl } from './foldable';
import { map } from './functor';
import { type } from './typeclasses';

export const Monoid = type(class Monoid extends Semigroup {});

export function reduce(M, values) {
  let empty = Monoid(M.prototype).empty();
  return foldl((reduction, value) => append(reduction, value), empty, values);
}

Monoid.create = function create(Definition) {
  class Monoidal extends Definition {
    constructor(value = Monoidal.prototype.empty()) {
      super();
      this.value = value;
    }
  };

  Monoidal.reduce = (list) => reduce(Monoidal, map(i => new Monoidal(i), list)).value;

  Semigroup.instance(Monoidal, {
    append(a, b) {
      return new Monoidal(Monoidal.prototype.append(a.value, b.value));
    }
  });
  Monoid.instance(Monoidal, {
    empty() { return new Monoidal(); }
  });
  return Monoidal;
};
