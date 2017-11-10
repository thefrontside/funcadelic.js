import { Semigroup } from '../semigroup';
import propertiesOf from 'object.getownpropertydescriptors';

const { assign } = Object;

Semigroup.instance(Object, {
  append(o1, o2) {
    let properties = assign({}, propertiesOf(o1), propertiesOf(o2));
    return Object.create(Object.getPrototypeOf(o1), properties);
  }
});