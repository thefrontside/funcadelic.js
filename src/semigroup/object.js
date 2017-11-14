import { Semigroup } from '../semigroup';
import propertiesOf from 'object.getownpropertydescriptors';

const { assign, getPrototypeOf } = Object;

Semigroup.instance(Object, {
  append(o1, o2) {
    let properties = assign({}, propertiesOf(o1), propertiesOf(o2));
    return Object.create(getPrototypeOf(o1), properties);
  }
});