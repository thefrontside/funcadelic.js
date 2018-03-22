import { Semigroup } from '../semigroup';
import propertiesOf from 'object.getownpropertydescriptors';
import stable from '../stable';

const { assign, getPrototypeOf, keys } = Object;

Semigroup.instance(Object, {
  append(o1, o2) {
    let properties = assign({}, propertiesOf(o1), propertiesOf(o2));
    return Object.create(getPrototypeOf(o1), cacheGetters(properties));
  }
});

function cacheGetters(descriptors) {
  return keys(descriptors).reduce(function(memo, key) {
    let descriptor = descriptors[key];
    if (!descriptor.get) {
      return assign({}, memo, {
        [key]: descriptor
      });
    } else {
      return assign(memo, {
        [key]: assign({}, descriptor, {
          get: stable(descriptor.get)
        }),
      });
    }
  }, {});
}