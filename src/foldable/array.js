import { Foldable } from '../foldable';

Foldable.instance(Array, {
  foldr(fn, initial, array) {
    return array.reduceRight(fn, initial);
  }
});
