# fn.js

The Fundamentals of Functional Programming are Fun!


`fn` takes the simple idea that a single function can operate on many
different data structures and brings it to JavaScript. Sure, there
are a lot of FP libraries out there, but this one is oriented along
the idea of not just using functions, but having those functions
operate on lots of different kinds of data. Oh, and also having fun!

Quick example.:

``` javascript
import { map } from 'fn';

function double(i) { return i * 2; }

map(double, [1,2]); //=> [2,4]
map(double, {one: 1, two: 2}) //=> {one: 2, two: 4}
```



## Semigroup.

A semi group is fancy name isn't it? It's just a data structure that
can be "mashed" together with itself. Instead of `Semigroup`, you
could call it `MashableTogetherableWithItselfable`, but that's a lot
to say every time. You mash two items in a `Semigroup` together with
the `append` function.

Arrays are classic example. Mash two arrays together and what do you
get? Well another array of course!

``` javascript
import { append } from 'fn';

append([1,2], [3,4]) //=> [1,2,3,4]

```

But arrays aren't the only things that can be mashed together. Objects
can too!

``` javascript
append({name: 'Charles'}, {occupation: 'Developer'}) //=> {name: 'Charles', occupation: 'Developer'}
```

Notice how we have a single function operating on _multiple_ data
types? That's what `fn` is all about.

## Functor

I used to think that Functor was some strange amalgamation of the words
"Function" and "Constructor". I don't think that any more because it
isn't true, although I still have yet to find a satisfying origin for
that word.

Nowadays, it's enough for me to reflect upon the fact that if George
Clinton were running an empire, instead of calling the provincial
governors "Satraps", he would have probably called them "Functors".

![Bootsy](bootsy.jpg)

Once you give up hope on trying to understand the etymology of the
word "Functor", you can focus on the idea that it represents some
kind of "container" with its own intrinsic structure separate from
the things that it contains. Using the `map` function, you can swap
out the values in a container without changing the structure of the
container itself.

Arrays are once again a classic example of Functors. You can use `map`
to change the values in an array without changing the structure of the
array itself:

``` javascript
import { map } from 'fn';

map(i => i * 2, [1,2]); //=> [2,4]
```

And guess what? Objects, are also Functors! you can map over
them too. When you map over an object, you change the value associated
with each key, but _the keys present remain the same_.

``` javascript
map(i => i * 2, {one: 1, two: 2}); //=> {one: 2, two: 4}
```

In that example, the values change, but both the input and the output
have the same keys (one, two)


## Deveolpment

```
$ yarn
$ yarn test
```
