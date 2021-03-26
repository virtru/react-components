react-components
================

# Warning

**Note: This library is deprecated. Please consider using [virtuoso-design-system](https://github.com/virtru/virtuoso-design-system)**

# Usage

This library exports both ES Modules (ESM) and CommonJS (CJS).

We highly recommend that you use the ESM version of this library, as it will allow your build process to perform tree-shaking to remove unused code in your generated bundle. To do this, use a ESM-aware build system, such as Rollup or webpack 2+, as they respect the `module` field in `package.json`.

## ES Modules (ESM)

```js
import { Tooltip } from 'react-components';
import 'react-components/dist/styles.css';
```

## CommonJS (CJS)

```js
const Tooltip = require('react-components').Tooltip;
require('react-components/dist/styles.css');
```

# Visual Regression Testing (VRT)

This repository uses Loki for VRT to ensure the visual appearance of states of the components does not regress. Baseline reference images are intentionally checked into this repository in `.loki/reference/`.

## Running VRT locally

You can run the VRT tests locally to check to see if your changes have caused visual regressions from the existing baselines:

```
$ npm run test:vrt
```

Any failed tests will be output in `.loki/difference/`. You can inspect any visual differences that are highlighted in these output images.

If the differences are intended, you can update the baselines by following the instructions in the next section.

## Updating Loki Baselines

_Note_: Before performing this step, you must first run the VRT once (see previous section).

If you run the tests above and have legitimate changes in the visual appearance of the components, you can approve new baselines, which will replace the existing baseline images with the new, current images:

```
$ npx loki approve
```

This will immediately take all new baseline images from the last test run and replace the existing baseline images. If you wish to update a specific test case image only but reject other changes, see the [Loki CLI reference](https://loki.js.org/command-line-arguments.html).

We recommend only approving new baselines once all unintended visual changes have been fixed, then running the command above so no fine-grained filtering of new baselines is needed.
