# whatsit-sdk-js
[![npm version](https://badge.fury.io/js/whatsit-sdk-js.svg)](https://badge.fury.io/js/whatsit-sdk-js)

whatsit-sdk-js provides a minimal higher-level wrapper around WhatsIt's API.

## Usage

```javascript
/*
   Data can be retrieved from the API either using callbacks (as in versions < 1.0)
   or using a new promise-based API. The promise-based API returns the raw Axios
   request promise.
 */
var WhatsIt = require('whatsit-sdk-js');

const aw = new WhatsIt();
let project = aw.Project(); 
let projectId = 'xxxxx'
project.getProject( projectId)
    .then(project => {
      // Promise !
      // Do something
      })
```

## API Documentation

https://whatsit.github.io/whatsit-sdk-js/


## Installation
WhatsIt.js is available from `npm` or [unpkg][unpkg].

```shell
npm install whatsit-api
```

```html
<!-- just whatsit-api source (5.3kb) -->
<script src="https://unpkg.com/whatsit-api/dist/WhatsIt.min.js"></script>

<!-- standalone (20.3kb) -->
<script src="https://unpkg.com/whatsit-api/dist/WhatsIt.bundle.min.js"></script>
```

## Compatibility
`WhatsIt.js` is tested on Node.js:
* 6.x

Note: `WhatsIt.js` uses Promise, hence it will not work in Node.js < 4 without polyfill.

