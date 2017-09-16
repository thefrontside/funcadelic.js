import { type, instance } from './typeclasses';

export const Semigroup = type(class Semigroup {});

export function append(left, right) {
  let { append } = instance(Semigroup, left);
  return append(left, right);
}
