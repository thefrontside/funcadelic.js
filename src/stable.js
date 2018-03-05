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
      result = fn();
      evaluated = true;
      return result;
    }
  };
}
