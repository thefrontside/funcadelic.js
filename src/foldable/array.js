import { Foldable } from '../foldable';

Foldable.instance(Array, {
  foldr(fn, initial, array) {
    return array.reduceRight(fn, initial);
  },

  foldl(fn, initial, array) {
    return array.reduce(fn, initial);
  }
});
