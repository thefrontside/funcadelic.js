import GeneratorFunction from '../generator-function';
import { Functor } from '../functor';


Functor.instance(GeneratorFunction, {
  map(fn, generator) {
    return function* (...args) {
      for (let value of generator(...args)) {
        yield fn(value);
      }
    }
  }
});
