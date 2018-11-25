# PublicArray

A TypeScript/JavaScript class for general array manipulation.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/public-array
```

## Loading
```
// If using TypeScript:
import {PublicArray} from '@writetome51/public-array';
// If using ES5 JavaScript:
var PublicArray = require('@writetome51/public-array').PublicArray;
```


## Public API

### Constructor
```
new PublicArray(array = [])
```

### Properties

```
data : any[] (read-writable) // This is the array to be operated on.
```

### Methods

```

```



## Usage

```
// getting an instance:
let arr = new PublicArray(['h','e','l','l','o']);

// changing the array content:
arr.data = [1,2,3,4,5,6,7];

```


## License
[MIT](https://choosealicense.com/licenses/mit/)