import { Semigroup } from '../semigroup';
import { foldl } from '../foldable';
import propertiesOf from 'object.getownpropertydescriptors';
import stable from '../stable';

const { assign, getPrototypeOf, getOwnPropertySymbols, keys } = Object;

Semigroup.instance(Object, {
  append(o1, o2) {
    let properties = assign({}, propertiesOf(o1), propertiesOf(o2));
    return Object.create(getPrototypeOf(o1), stableize(properties));
  }
});

/**
 * Make all of the computed values in this set of property descriptors
 * stable.
 *
 * Funcadelic works on immutable data, and as such the value of a
 * property should not change in between acesseses. If any of the
 * property descriptors have a `get` function, then that function
 * stableized so that it returns the same value every time.
 */
function stableize(properties) {
  return foldl((descriptors, key) => {
    let descriptor = properties[key];
    if (!descriptor.get) {
      return assign({}, descriptors, {
        [key]: descriptor
      });
    } else {
      let cached = stable(instance => descriptor.get.call(instance));
      return assign({}, descriptors, {
        [key]: assign({}, descriptor, {
          get() {
            return cached(this);
          }
        })
      });
    }
  }, {}, keys(properties).concat(getOwnPropertySymbols(properties)));
}