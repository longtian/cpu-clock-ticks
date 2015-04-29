# cpu-clock-ticks
--------------------------

pure javascript implementation to get `sysconf(_SC_CLK_TCK))` value

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## Sample Code

```javascript
var cct=require('cpu-clock-ticks');
console.log('Clock ticks for CPU is %d HZ',cct());
```

Normally it will be 100HZ.

## Inspiration
[node-usage](https://github.com/arunoda/node-usage)

## Limitation
Works only on Linux ( tested on `Ubuntu` and `CentOS` ), because the code assumes `/proc/{pid}/stat` exists.

## Validation
Execute following command will return `_SC_CLK_TCK`
```shell
getconf CLK_TCK
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/cpu-clock-ticks.svg
[npm-url]: https://npmjs.org/package/cpu-clock-ticks
[downloads-url]: https://npmjs.org/package/cpu-clock-ticks
[downloads-image]: https://img.shields.io/npm/dm/cpu-clock-ticks.svg
[travis-image]: https://travis-ci.org/wyvernnot/cpu-clock-ticks.svg
[travis-url]: https://travis-ci.org/wyvernnot/cpu-clock-ticks
[coveralls-image]: https://img.shields.io/coveralls/wyvernnot/cpu-clock-ticks/master.svg
[coveralls-url]: https://coveralls.io/r/wyvernnot/cpu-clock-ticks?branch=master


