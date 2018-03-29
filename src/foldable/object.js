import { Foldable } from '../foldable';


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

function keys(object) {
  return [].concat(Object.keys(object), Object.getOwnPropertySymbols(object));
}