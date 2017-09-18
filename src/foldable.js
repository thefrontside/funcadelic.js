import { type } from './typeclasses';

export const Foldable = type(class Foldable {});

export function foldr(fn, initial, foldable) {
  let { foldr } = Foldable(foldable);
  return foldr(fn, initial, foldable);
}

export function foldl(fn, initial, foldable) {
  let { foldl } = Foldable(foldable);
  return foldl(fn, initial, foldable);
}
