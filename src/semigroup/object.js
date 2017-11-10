import { Semigroup } from '../semigroup';

const { keys, assign, getOwnPropertyDescriptor } = Object;

Semigroup.instance(Object, {
  append(o1, o2) {
    let properties = assign({}, propertiesOf(o1), propertiesOf(o2));
    return Object.create(Object.getPrototypeOf(o1), properties);
  }
});

function propertiesOf(object) {
  return keys(object).reduce(function(descriptors, key) {
    return assign(descriptors, {[key]: getOwnPropertyDescriptor(object, key)});
  }, {});
}
