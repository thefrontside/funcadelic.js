import { map, append, foldr, foldl, filter } from '../src/funcadelic';
import chai  from 'chai';
import mocha from 'mocha';

const { expect } = chai;
const { describe, it } = mocha;

describe('Functor', function() {
  it('maps objects', function() {
    expect(map((i) => i * 2, {one: 1, two: 2})).to.deep.equal({one: 2, two: 4});
  });
  it('maps arrays', function() {
    expect(map(i => i * 2, [1, 2, 3])).to.deep.equal([2,4,6]);
  });
  it('passes the key to the mapping function for objects', function() {
    expect(map((_, name) => `hello ${name}`, {one: 1, two: 2})).to.deep.equal({one: 'hello one', two: 'hello two'});
  });
});

describe('Semigroup', function() {
  it('appends objects', function() {
    expect(append({one: 1, two: 2}, {two: 'two', three: 3})).to.deep.equal({one: 1, two: 'two', three: 3});
  });
  it('appends arrays', function() {
    expect(append([1,2,3], [4,4,4])).to.deep.equal([1,2,3,4,4,4]);
  });
});

describe('Foldable', function() {
  it('folds arrays', function() {
    expect(foldr((sum, i) => sum + i, 0, [1,2,3,4])).to.equal(10);
    expect(foldl((sum, i) => sum + i, 0, [1,2,3,4])).to.equal(10);
  });
  it('folds objects', function() {
    expect(foldl((reverse, entry) => append(reverse, {[entry.value]: entry.key}), {}, {
      one: 'won',
      two: 'two'
    })).to.deep.equal({won: 'one', two: 'two'});
    expect(foldr((reverse, { key, value }) => append(reverse, {[value]: key}), {}, {
      one: 'won',
      two: 'two'
    })).to.deep.equal({won: 'one', two: 'two'});
  });
});

describe('Filterable', function() {
  it('filters arrays', function() {
    expect(filter(x => x > 5, [10,3,10, 5])).to.deep.equal([10,10]);
  });
  it('filters objects', function() {
    expect(filter(({key}) => key !== 'nope', {yes: 1, yep: 2, nope: 3, yup: 4}))
      .to.deep.equal({yes: 1, yep: 2, yup: 4});
  });
});
