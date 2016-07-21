# Thyming
Small wrappers for setTimeout and setInterval which return methods to cancel them.

## Install

`npm install thyming`

## Usage

```js
// same with require('thyming').timeout;
var interval = require('thyming').interval;

var stop = interval(function () {
  // do something later!
});

/* ... */
// cancel the timer
stop();
```

# API

#### `thyming.timeout(fn, ms)` -> `function`

Returns a method to cancel the timer.

##### fn

*Required*  
Type: `function`

The method to pass in to setTimeout, will be run after `ms` milliseconds.

##### ms

Type: `number`

The number of milliseconds to wait before executing `fn`.

#### `thyming.interval(fn, ms)` -> `function`

Returns a method to cancel the timer.


##### fn

*Required*  
Type: `function`

The method to pass in to setInterval, will be run every `ms` milliseconds.

##### ms

Type: `number`

The number of milliseconds to wait between executing `fn`.

# License
MIT
