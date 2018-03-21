import { Semigroup } from '../semigroup';
import propertiesOf from 'object.getownpropertydescriptors';
import { cacheGetters } from '../stable';

const { assign, getPrototypeOf, keys } = Object;

Semigroup.instance(Object, {
  append(o1, o2) {
    let properties = assign({}, propertiesOf(o1), cacheGetters(propertiesOf(o2)));
    return Object.create(getPrototypeOf(o1), properties);
  }
});