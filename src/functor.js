import { type, instance } from './typeclasses';

export const Functor = type(class Functor {});

export function map(fn, f) {
  let { map } = instance(Functor, f);
  return map(fn, f);
}
