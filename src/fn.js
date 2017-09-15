function type(Class) {
  let name = Class.name || '[Unknown Typeclass]';

  Class.symbol = Symbol(name);
  Class.instance = function(constructor, impl) {
    constructor.prototype[Class.symbol] = impl;
  };

  return Class;
}

function instance(typeclass, value) {
  let i = value[typeclass.symbol];
  if (!i) {
    throw new Error(`No instance found on ${value} of typeclass ${typeclass}`);
  }
  return i;
}

const Functor = type(class Functor {});

Functor.instance(Object, {
  map(fn, object) {
    return Object.keys(object).reduce((obj, key) => Object.assign(obj, {[key]: fn(object[key])}), {});
  }
});

Functor.instance(Array, {
  map(fn, array) {
    return array.map(fn);
  }
});

export function map(fn, f) {
  let { map } = instance(Functor, f);
  return map(fn, f);
}


const Semigroup = type(class Semigroup {});

Semigroup.instance(Object, {
  append(o1, o2) {
    return Object.assign({}, o1, o2);
  }
});

Semigroup.instance(Array, {
  append(a1, a2) {
    return a1.concat(a2);
  }
});

export function append(left, right) {
  let { append } = instance(Semigroup, left);
  return append(left, right);
}
