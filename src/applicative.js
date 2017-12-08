import { Monoid } from './monoid';
import { Functor } from './functor';
import { foldl } from './foldable';
import { type } from './typeclasses';
import curry from 'lodash/curry';

export const Applicative = type(class Applicative extends Functor {});

export function pure(Type, value) {
  return Applicative(Type).pure(value);
}

export function apply(Type, fn, list) {
  let applicative = Applicative(Type.prototype);
  let monoid = Monoid.create(class {
    empty() {
      return applicative.pure(curry(fn));
    }
    append(left, right) {
      return applicative.apply(left, right);
    }
  });
  return monoid.reduce(list);
}
