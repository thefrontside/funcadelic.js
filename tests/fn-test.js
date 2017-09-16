import { map, append, foldr } from '../src/fn';
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
  });
});
