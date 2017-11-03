import { Monoid } from '../monoid';

Monoid.instance(Object, {
  empty() { return {}; }
});
