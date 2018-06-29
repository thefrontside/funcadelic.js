import { append } from './semigroup';
import { map } from './functor';
import { flatMap } from './monad';
import { filter } from './filterable';
import stable  from './stable';

class Chain {
  map(fn) {
    return new Thunk(() => map(fn, this.valueOf()));
  }

  flatMap(fn) {
    return new Thunk(() => flatMap(fn, this.valueOf()));
  }

  filter(fn) {
    return new Thunk(() => filter(fn, this.valueOf()));
  }

  append(thing) {
    return new Thunk(() => append(this.valueOf(), thing));
  }

  tap(fn) {
    fn(this.valueOf());
    return this;
  }
}

class Value extends Chain {
  constructor(value) {
    super();
    this.value = value;
  }

  valueOf() {
    return this.value;
  }
}

class Thunk extends Chain {
  constructor(fn) {
    super();
    this.fn = stable(fn);
  }
  valueOf() {
    return this.fn();
  }
}

export default function chain(value) {
  return new Value(value);
}
