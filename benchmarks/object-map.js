const Benchmark = require("benchmark");

const { stable, foldr, append } = require("../dist/funcadelic.cjs");
const { getPrototypeOf, assign } = Object;

function forMap(fn, object) {

  let descriptors = {};
  for (let key in object) {
    descriptors[key] = {
      enumerable: true,
      get: stable(() => fn(object[key], key))
    }
  }

  return Object.create(getPrototypeOf(object), descriptors);
}

function foldrAppendMap(fn, object) {
  let properties = foldr(function(properties, entry) {
    return append(properties, {
      [entry.key]: {
        enumerable: true,
        get: stable(() => fn(entry.value, entry.key))
      }
    });
  }, {}, object);
  let prototype = getPrototypeOf(object);
  return Object.create(prototype, properties);
}

function foldrAssignMap(fn, object) {
  let properties = foldr(function(properties, entry) {
    return assign({}, properties, {
      [entry.key]: {
        enumerable: true,
        get: stable(() => fn(entry.value, entry.key))
      }
    });
  }, {}, object);
  let prototype = getPrototypeOf(object);
  return Object.create(prototype, properties);
}

let data = { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', k: 'k' };

module.exports = new Benchmark.Suite()
  .add("map with foldr and append", () => {
    for (let i = 0; i < 1000; i++) {
      foldrAppendMap(v => v, data);
    }
  })
  .add("map with foldr and assign", () => {
    for (let i = 0; i < 1000; i++) {
      foldrAssignMap(v => v, data);
    }
  })
  .add("map with for", () => {
    for (let i = 0; i < 1000; i++) {
      forMap(v => v, data);
    }
  });