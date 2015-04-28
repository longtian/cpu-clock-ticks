# cpu-clock-ticks
--------------------------

pure javascript implementation to get `sysconf(_SC_CLK_TCK))` value

## Usage

```javascript
var cct=require('cpu-clock-ticks');
console.log('Clock ticks for CPU is %d HZ',cct());
```
Normally it will be 100HZ.

## Inspiration
[node-usage](https://github.com/arunoda/node-usage)

## License
MIT


