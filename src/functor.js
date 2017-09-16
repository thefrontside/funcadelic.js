import { type } from './typeclasses';

export const Functor = type(class Functor {});

export function map(fn, f) {
  let { map } = Functor(f);
  return map(fn, f);
}
