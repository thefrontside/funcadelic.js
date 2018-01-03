import { type } from './typeclasses';

export const Functor = type(class Functor {
  map(fn, f) {
    let { map } = this(f);
    return map(fn, f);
  }
});

export const { map } = Functor.prototype;
