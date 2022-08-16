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

// actionCreator.js
import actionTypes from 'actionTypes';

dispatch({ type: actionTypes.SOME_ACTION_TYPE });
```

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

## Supporters

<a href="https://www.jetbrains.com">
  <img src="https://user-images.githubusercontent.com/4244251/184837695-2c00e329-7241-4d9b-9373-644c1ce215be.png" alt="JetBrains" height="120px">
</a>
<a href="https://scoutapp.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/4244251/184837700-a910106b-1b1b-4117-88b8-9b5389425e66.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/4244251/184837704-83960568-1599-485b-b184-5fd8b05d5051.png">
    <img alt="ScoutAPM" src="https://user-images.githubusercontent.com/4244251/184837704-83960568-1599-485b-b184-5fd8b05d5051.png" height="120px">
  </picture>
</a>
<br />
<a href="https://www.browserstack.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/4244251/184838560-ada89877-abd1-4d11-b144-b52ef69e0bb9.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/4244251/184838569-35f4d4b1-5545-4ee4-a015-41ca7a5dbc7c.png">
    <img alt="BrowserStack" src="https://user-images.githubusercontent.com/4244251/184838569-35f4d4b1-5545-4ee4-a015-41ca7a5dbc7c.png" height="55px">
  </picture>
</a>
<a href="https://railsautoscale.com">
  <img src="https://user-images.githubusercontent.com/4244251/184838579-f8c2fd95-f376-4f0d-a661-50bbdeee892b.png" alt="Rails Autoscale" height="55px">
</a>
<a href="https://www.honeybadger.io">
  <img src="https://user-images.githubusercontent.com/4244251/184838575-e56cac82-5853-448c-a623-67280a91d75f.png" alt="Honeybadger" height="55px">
</a>

<br />
<br />

The following companies support our open source projects, and ShakaCode uses their products!
