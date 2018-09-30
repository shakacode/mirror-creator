# mirror-creator

[![npm version](https://img.shields.io/npm/v/mirror-creator.svg?style=flat-square)](https://www.npmjs.com/package/mirror-creator)
[![build status](https://img.shields.io/travis/shakacode/mirror-creator/master.svg?style=flat-square)](https://travis-ci.org/shakacode/mirror-creator)
[![dependencies status](https://img.shields.io/gemnasium/shakacode/mirror-creator.svg?style=flat-square)](https://gemnasium.com/shakacode/mirror-creator)
[![license](https://img.shields.io/npm/l/mirror-creator.svg?style=flat-square)](https://www.npmjs.com/package/mirror-creator)

One more way to create an object with values equal to its key names.

## Install

Get it via `npm`:

```
npm install --save mirror-creator
```

## Usage

```javascript
// actionTypes.js
import mirrorCreator from 'mirror-creator';

export default mirrorCreator([
  'SOME_ACTION_TYPE',
  'ANOTHER_ACTION_TYPE',
  'ONE_MORE_ACTION_TYPE',
]);

// Or you can specify prefix to avoid type name conflicts
export default mirrorCreator([
  'SOME_ACTION_TYPE',
  'ANOTHER_ACTION_TYPE',
  'ONE_MORE_ACTION_TYPE',
], { prefix: 'mydomain/' });

// keyMirror way
export default mirrorCreator({
  SOME_ACTION_TYPE: '',
  ANOTHER_ACTION_TYPE: '',
  ONE_MORE_ACTION_TYPE: '',
})

// string way
export default mirrorCreator('SOME_ACTION_TYPE|ANOTHER_ACTION_TYPE|ONE_MORE_ACTION_TYPE')

// value of key is symbol
export default mirrorCreator('SOME_ACTION_TYPE|ANOTHER_ACTION_TYPE|ONE_MORE_ACTION_TYPE', { useSymbol: true })

// add prefix, suffix, if useSymol value is true, don't add prefix and suffix.
export default mirrorCreator([
  'SOME_ACTION_TYPE',
  'ANOTHER_ACTION_TYPE',
  'ONE_MORE_ACTION_TYPE',
], { prefix: 'pre', suffix: 'suf' })

// actionCreator.js
import actionTypes from 'actionTypes';

dispatch({ type: actionTypes.SOME_ACTION_TYPE });
```
## mirrorCreator second argument(options) explain
- `options.useSymbol`: value of key is unique Symbol value. have heighter priority than `prefix` and `suffix`.
- `options.prefix`: add prefix
- `options.suffix`: add suffix
- `options.splidStr`: during first argument type is string, *options.splidStr* is a flag how split method of argument to split string to array, visit usage of mirrorCreator.


**Pros**: DRY & clean.  
**Cons**: If you use Closure Compiler advanced mode for JS minification — keys are not optimized. Use [`keyMirror`](https://github.com/STRML/keyMirror) instead. [Details](https://github.com/facebook/react/issues/1639#issuecomment-45188026).


## Why

Use it if you don't like native or `keyMirror` ways of defining constants in flux / redux apps.

Native way:

```javascript
// actionTypes.js
export const SOME_ACTION_TYPE     = 'SOME_ACTION_TYPE';
export const ANOTHER_ACTION_TYPE  = 'ANOTHER_ACTION_TYPE';
export const ONE_MORE_ACTION_TYPE = 'ONE_MORE_ACTION_TYPE';

// actionCreator.js
import * as actionTypes from 'actionTypes';

dispatch({ type: actionTypes.SOME_ACTION_TYPE });
```

**Pros**: No third-party lib required.  
**Cons**: Duplications. Noisy.


`keyMirror` way:

```javascript
// actionTypes.js
import keyMirror from 'keyMirror';

export default keyMirror({
  SOME_ACTION_TYPE    : null,
  ANOTHER_ACTION_TYPE : null,
  ONE_MORE_ACTION_TYPE: null,
});

// actionCreator.js
import actionTypes from 'actionTypes';

dispatch({ type: actionTypes.SOME_ACTION_TYPE });
```

**Pros**: DRY. If Closure Compiler advanced mode is used — keys are optimized.  
**Cons**: `null` noise.
