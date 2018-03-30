import { Monad } from '../monad';
import { map } from '../functor';
import { reduce } from '../monoid';

Monad.instance(Array, {
  flatMap(fn, array) {
    return reduce(Array, map(fn, array));
  }
});
