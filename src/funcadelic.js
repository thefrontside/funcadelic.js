export { Functor, map } from './functor';
import './functor/object';
import './functor/array';

export { Semigroup, append } from './semigroup';
import './semigroup/object';
import './semigroup/array';

export { Foldable, foldr, foldl } from './foldable'
import './foldable/array';
import './foldable/object';

export { Filterable, filter } from './filterable'
import './filterable/object';
import './filterable/array';
