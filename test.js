var test = require('tape');
var idiv = require('./interval-divide');

// test the _extended_ interval arithmetic implementation
// of division
// reference: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.41.7726&rep=rep1&type=pdf

test('au <= 0, bu === 0', function(t) {
  var r = idiv([-2, -1], [-1, 0]);
  t.deepEqual(r, [1, Infinity]);
  t.end();
});

test('au <= 0, bl < 0 < bu', function(t) {
  var r = idiv([-1, 0], [-1, 1]);
  t.deepEqual(r, [-Infinity, Infinity]);
  t.end();
});

test('au <  0, bl === 0', function(t) {
  var r = idiv([-2,-1], [0, 1]);
  t.deepEqual(r, [-Infinity, -2]);
  t.end();
});

test('bl < 0 < bu', function(t) {
  var r = idiv([-2, 2], [-1, 1]);
  t.deepEqual(r, [-Infinity, Infinity]);
  t.end();
});

test('al >= 0, bu === 0', function(t) {
  var r = idiv([1, 2], [-1, 0]);
  t.deepEqual(r, [-Infinity, -1]);
  t.end();
});

test('al >= 0, bl < 0 < bu (0)', function(t) {
  var r = idiv([0, 1], [-1 , 1]);
  t.deepEqual(r, [-Infinity, Infinity]);
  t.end();
});

test('al >= 0, bl === 0', function(t) {
  var r = idiv([1, 2], [0,1]);
  t.deepEqual(r, [1, Infinity]);
  t.end();
});

test('standard', function(t) {
  var r = idiv([1, 1], [1, 1]);
  t.deepEqual(r, [1, 1]);
  t.end();
});

test('standard [min, max]', function(t) {
  var r = idiv([1, 2], [3, 4]);
  t.deepEqual(r, [0.25, 0.6666666666666666]);
  t.end();
});

test('accepts out param', function(t) {
  var out = [0, 0];
  var r = idiv([1, 1], [1, 1], out);
  t.equal(r, out);
  t.deepEqual(r, [1, 1]);
  t.end();
});
