import { type } from './typeclasses';

export const Semigroup = type(class Semigroup {});

export function append(left, right) {
  let { append } = Semigroup(left);
  return append(left, right);
}
