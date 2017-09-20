import { Filterable } from '../filterable';
import { foldr } from '../foldable';
import { append } from '../semigroup';

Filterable.instance(Object, {
  filter(fn, object) {
    return foldr((filtered, entry) => {
      if (fn(entry)) {
        return append(filtered, {
          get [entry.key]() { return entry.value; }
        });
      } else {
        return filtered;
      }
    }, {}, object);
  }
});
