import { Filterable } from '../filterable';

Filterable.instance(Array, {
  filter(fn, array) {
    return array.filter(fn);
  }
});
