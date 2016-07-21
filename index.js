var assertFunction = require('assert-function');

module.exports = {
  timeout: wrap(setTimeout, clearTimeout),
  interval: wrap(setInterval, clearInterval)
};

function wrap (set, unset) {
  return function (fn, ms) {
    assertFunction(fn);
    return handler(unset, set(fn, ms));
  };
}

function handler (unset, id) {
  return function () {
    return unset(id);
  };
}
