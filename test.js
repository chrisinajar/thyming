var test = require('tape');
var thyme = require('./index');

testMethod('timeout');
testMethod('interval');

test('interval runs more than once', function (t) {
  t.plan(4);
  var i = 0;
  var stop = thyme.interval(function () {
    t.pass('interval runs');
    if (++i === 3) {
      t.pass('stopping timer');
      stop();
    }
  });
});

function testMethod (method) {
  test(method, function (t) {
    t.plan(2);

    var _stop = thyme[method](function () {
      t.pass('Timeout runs!');
      _stop();
    }, 10);

    var stop = thyme[method](function () {
      t.fail('Timeout should not run!');
    }, 10);

    t.ok(typeof stop === 'function', 'returns function');
    stop();
  });
}
