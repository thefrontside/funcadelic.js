import { Filterable } from '../filterable';
import { foldr } from '../foldable';
import { append } from '../semigroup';

const { create, getPrototypeOf } = Object;

Filterable.instance(Object, {
  filter(fn, object) {
    let instance = create(getPrototypeOf(object));
    return foldr((filtered, entry) => {
      if (fn(entry)) {
        return append(filtered, {
          get [entry.key]() { return entry.value; }
        });
      } else {
        return filtered;
      }
    }, instance, object);
  }
});
