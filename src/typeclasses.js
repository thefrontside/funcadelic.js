export function type(Class) {
  let name = Class.name || '[Unknown Typeclass]';

  Class.symbol = Symbol(name);
  Class.instance = function(constructor, impl) {
    constructor.prototype[Class.symbol] = impl;
  };

  return Class;
}

export function instance(typeclass, value) {
  let i = value[typeclass.symbol];
  if (!i) {
    throw new Error(`No instance found on ${value} of typeclass ${typeclass}`);
  }
  return i;
}
