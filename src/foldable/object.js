import { Foldable } from '../foldable';

const { keys } = Object;

Foldable.instance(Object, {
  foldr(fn, initial, object) {
    return keys(object).reduceRight((memo, key) => (
      fn(memo, {key, get value() { return object[key]; }})
    ), initial);
  },

  foldl(fn, initial, object) {
    return keys(object).reduce((memo, key) => (
      fn(memo, { key, get value() { return object[key]; }})
    ), initial);
  }
});
