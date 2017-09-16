export function type(Class) {

  let name = Class.name;

  if (!name) {
    throw new Error('invalid typeclass name: ' + name);
  }

  let symbol = Symbol(name);

  function getTypeclassInstanceForValue(value) {
    let i = value[symbol];
    if (!i) {
      throw new Error(`No instance found on ${value} of typeclass ${typeclass}`);
    }
    return i;
  };

  getTypeclassInstanceForValue.instance = function(constructor, impl) {
    constructor.prototype[symbol] = impl;
  };

  return getTypeclassInstanceForValue;
}
