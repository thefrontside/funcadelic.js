export const Stable = Symbol('Stable');

export default function stable(fn) {
  switch (fn.length) {
  case 0:
    return thunk(fn);
  default:
    throw new Error('Cannot (yet) make functions with arguments stable');
  }
}

function thunk(fn) {
  if (fn[Stable]) {
    return fn;
  }
  let evaluated = false;
  let result = undefined;
  function evaluate() {
    if (evaluated) {
      return result;
    } else {
      result = fn.call(this);
      evaluated = true;
      return result;
    }
  };
  evaluate[Stable] = true;
  return evaluate;
}