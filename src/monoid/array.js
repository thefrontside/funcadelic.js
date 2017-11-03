import { Monoid } from '../monoid';

Monoid.instance(Array, {
  empty() { return []; }
});
