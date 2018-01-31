# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
