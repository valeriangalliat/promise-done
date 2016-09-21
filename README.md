# promise-done [![npm version](http://img.shields.io/npm/v/promise-done.svg?style=flat-square)](https://www.npmjs.org/package/promise-done)

> Propagate errors out of promise context.

Description
-----------

This library allows to terminate promises by throwing an exception for
unhandled errors. This is especially useful when we just want the stack
trace to be displayed in case of unhandled error.

Usage
-----

```js
import done from 'promise-done'

stuff()
  .then(otherStuff())
  .catch(done)
```
