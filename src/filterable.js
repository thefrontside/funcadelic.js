import { type } from './typeclasses';

export const Filterable = type(class Filterable {
  filter(fn, f) {
    return this(f).filter(fn, f);
  }
});

export const { filter } = Filterable.prototype;
