# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.5.2] - 2018-07-02 - [v0.5.0...v0.5.1](https://github.com/cowboyd/funcadelic.js/compare/v0.5.1...v0.5.2)

### Added

- chaining operator for composing sequences of maps, flatMaps,
  appends, filters, and folds. https://github.com/cowboyd/funcadelic.js/pull/53

## [0.5.1] - 2018-06-29 - [v0.5.0...v0.5.1](https://github.com/cowboyd/funcadelic.js/compare/v0.5.0...v0.5.1)

### Changed

- Use native classes in Node.js https://github.com/cowboyd/funcadelic.js/pull/49

## [0.5.0] - 2018-05-30

### Changed

- Attach symbols to global Symbol object https://github.com/cowboyd/funcadelic.js/pull/48

## [0.4.3] - 2018-05-22

### Changed

- Replace lodash.curry with something smaller https://github.com/cowboyd/funcadelic.js/pull/44

## [0.4.2] - 2018-05-17

### Changed

- Remove dependency on object.getownpropertydescriptors https://github.com/cowboyd/funcadelic.js/pull/43
- Using local assign in Object Semigroup https://github.com/cowboyd/funcadelic.js/pull/42

## [0.3.2] - 2018-02-03

### Changed

- Include README.md as well as the `src/` directory in the bundled
  NPM. https://github.com/cowboyd/funcadelic.js/pull/16

## [0.3.1] - 2018-01-31

### Changed

- For commonjs environments, the app is now pre-built using rollup.js
  instead of being lazily transpiled with @std/esm
- remove package-lock.json
- Allow `Applicative.pure` to be invoked
  statically. I.e. `pure(Promise, 5)` had a bug that was not able to
  find the applicative instance for Promise.

## [0.3.0] - 2018-01-19

### Added

- CI coverage for node versions 6,7,8,9 https://github.com/cowboyd/funcadelic.js/pull/11
- applyOne() to support recursively structured applicatives. https://github.com/cowboyd/funcadelic.js/pull/12
