import { Functor, Foldable, map, foldr, foldl, append, filter } from './src/fn';

import R  from 'ramda';

const { lensPath, set, view } = R;

const { getOwnPropertyDescriptors } = Object;

class StringState {
  set(current, s) {
    return String(s);
  }
}

class BooleanState {
  set(current, t) {
    return !!t;
  }

  toggle(current) {
    return !current;
  }
}

function typeFor(Type) {
  if (Type === Boolean) {
    return BooleanState;
  } else if (Type === String) {
    return StringState;
  } else {
    return Type;
  }
}

class Switch {
  constructor() {
    this.label = String;
    this.on = Boolean;
  }
}

class House {
  constructor() {
    this.lights = Switch;
    this.ac = Switch;
  }

}


class Tree {
  constructor({ data, children }) {
    this.data = data;
    this.children = children;
  }
}

Functor.instance(Tree, {
  map(fn, tree) {
    return Object.create(Tree.prototype, {
      data: {
        enumerable: true,
        get() { return fn(tree.data); }
      },
      children: {
        enumerable: true,
        get() { return map(child => map(fn, child), tree.children); }
      }
    });
  }
});

Foldable.instance(Tree, {
  foldr(fn, initial, tree) {
    // fold all the children
    let fold = foldr((fold, child) => foldr(fn, fold, child), initial, tree.children);
    // then fold this node.
    return fn(fold, tree.data);
  },
  foldl(fn, initial, tree) {
    // fold this node
    let fold = fn(initial, tree.data);
    // now fold the g
    return foldl((fold, child) => foldl(fn, fold, child), fold, tree.children);
  }
});

function toTree(T, path = []) {
  let Type = typeFor(T);
  let properties = new Type();
  let transitions = map(desc => desc.value, getOwnPropertyDescriptors(Type.prototype));
  return new Tree({
    data: {
      path,
      Type,
      transitions: filter(({key, value}) => key !== 'constructor' && typeof value == 'function', transitions)
    },
    children: foldr((children, { key, value }) => append(children, toTree(value, append(path,key))), [], properties)
  });
}

// create the initial type tree
let tree = toTree(House);

// map it from the simple reducer to a general function that is
// location (path) aware.

let general = map((data) => {
  let { path, transitions } = data;
  let lens = lensPath(path);
  return append(data, {
    transitions: map((fn) => function(value, ...args) {
      let current = view(lens, value);
      let next = fn(current, ...args);
      return set(lens, next, value);
    }, transitions)
  });
}, tree);


// now fold the Tree into a simple object graph.
let transitions = foldl((fold, data) => {
  let { path, transitions } = data;
  return set(lensPath(path), transitions, fold);
}, {}, general);

// take an initial state.
let initial = {
  ac: {
    label: 'Air Conditioning',
    on: false
  },
  lights: {
    label: 'Hall Track Lighting',
    on: false
  }
};

console.log('** Uncurried ** ');
console.log(transitions.ac.on.toggle(initial));

// curry the general function to be bound to the initial
// value

let curriedTree = map(data => {
  let { transitions } = data;
  return append(data, {
    transitions: map(t => t.bind(null, initial), transitions)
  });
}, general);


//we can fold down the curried tree into a simple object graph
let curried = foldl((fold, data) => {
  let { path, transitions } = data;
  return set(lensPath(path), transitions, fold);
}, {}, curriedTree);

console.log('** Curried **');
console.log(curried.lights.on.toggle());
