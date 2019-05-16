react-components
================

# Warning

**Note: This library is incomplete and can chanage in breaking ways at any time**

# Usage

This library exports both ES Modules (ESM) and CommonJS (CJS).

We highly recommend that you use the ESM version of this library, as it will allow your build process to perform tree-shaking to remove unused code in your generated bundle.

## ES Modules (ESM)

```js
import { Button } from 'react-components';
import 'react-components/dist/styles.css';
```

## CommonJS (CJS)

```js
const Button = require('react-components/dist/bundle.cjs').Button;
require('react-components/dist/styles.css');
```
