import { chain as $ } from 'funcadelic';

describe('Chain', function() {
  it('can map', function() {
    expect($([1,2,4])
           .map(x => x * 2)
           .map(x => x * 2)
           .valueOf()).toEqual([4, 8, 16])
  });
  it('can flatMap', function() {
    expect($([1,2,3])
           .flatMap(x => [x * x, x * x])
           .flatMap(x => [x * 2])
           .valueOf()).toEqual([2,2, 8, 8, 18, 18])
  });
  it('can append', function() {
    expect($(['hello'])
           .append('world')
           .append('!')
           .valueOf()).toEqual(['hello', 'world', '!'])
  });
  it('can filter', function() {
    expect($(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])
           .filter(word => word.length > 6)
           .valueOf()).toEqual(["exuberant", "destruction", "present"])
  });
  it('can tap', function() {
    let tapped;
    expect($('Tha Thing')
           .tap(subject => {
             tapped = subject;
             return 'OTHER THING';
           })
           .valueOf()).toEqual('Tha Thing');
    expect(tapped).toEqual('Tha Thing');
  });
});
