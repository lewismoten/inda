# Initialize new dimensional array

Create a new multi-dimensional array with initialized values.

## Example

```javascript
let inda = require('inda');

// A single-dimensional array where all values are 23
inda(23, 3);
// [23, 23, 23]

// An array with different values via callback
let i = 0;
inda(() => i++), 3);
// [0, 1, 2]

// A two-dimensional array
inda(1, 2, 3);
// [[1, 1, 1], [1, 1, 1]]

// A 12-dimensional array
inda(1, ...inda(1, 12));
// [[[[[[[[[[[[1]]]]]]]]]]]]

// Assigning a function as a value
inda(() => () => 6, 2);
// [() => 6, () => 6)]
```
## Installation
```
$ npm install inda
```
## API
```javascript
var inda = require('inda');
```
### inda(initialValue, size, ...sizes)
| Type | Data Type | Name | Description |
| --- | --- | --- | --- |
| parameter | \* | initialValue | A value to each element in the array. If a callback is provided, the returned value will be used. |
| parameter | number | size | The size of the array to return. |
| parameter | ...number | sizes | The sizes of nested-arrays. |
| returns | \*[] | | An array of initialized values. |

## Links
- Github: [inda](https://github.com/lewismoten/inda)
