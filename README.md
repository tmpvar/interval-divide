# interval-divide

divide an interval by another where an interval is a 2 part array

Sources: 
 * [Implicit Solid Modeling Using Interval Methods](https://github.com/tmpvar/interval-min/files/76491/Implicit.Solid.Modeling.Using.Interval.Methods.pdf)
 * [wikipedia/Interval_Arithmetic](http://en.wikipedia.org/wiki/Interval_arithmetic#Simple_arithmetic)

## install 

`npm install interval-divide`

## use

```javascript
var idiv = require('interval-divide');

console.log(idiv([1, 2], [3, 4]));
// output: [0.25, 0.66666666666666]

console.log(idiv([1, 2], [0, 0]));
// output: [-Infinity, Infinity]
```

### api signature

__idiv__(`a`, `b`, `out`)

* `a` is the first interval
* `b` is the second interval
* `out` is an optional 2 part araray. Provide this to avoid generating garbage
* returns: 2 part array

## license

[MIT](LICENSE.txt)
