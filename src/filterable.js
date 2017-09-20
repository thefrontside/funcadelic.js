import { type } from './typeclasses';

export const Filterable = type(class Filterable {});

export function filter(fn, f) {
  return Filterable(f).filter(fn, f);
}
