const { keys, assign } = Object;

export default function stable(fn) {
  switch (fn.length) {
  case 0:
    return thunk(fn);
  default:
    throw new Error('Cannot (yet) make functions with arguments stable');
  }
}

function thunk(fn) {
  let evaluated = false;
  let result = undefined;
  return function evaluate() {
    if (evaluated) {
      return result;
    } else {
      result = fn.call(this);
      evaluated = true;
      return result;
    }
  };
}

export function cacheGetters(descriptors) {
  return keys(descriptors).reduce(function(memo, key) {
    let descriptor = descriptors[key];
    return assign(memo, {
      [key]: descriptor.get ? assign(descriptor, {
        get: stable(descriptor.get)
      }) : descriptor
    });
  }, {});
}