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
import { getPublicArray } from '@writetome51/public-array';
// If using ES5 JavaScript:
var getPublicArray = require('@writetome51/public-array').getPublicArray;
```


## Public API

### Instantiation
```
getPublicArray(array = []): PublicArray
    // Examples:
    // let arr = getPublicArray([1,2,3,4,5]);
    // Or, instantiate with an empty array:
    // let arr = getPublicArray();

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

// changing the array content:
arr.data = [1,2,3,4,5,6,7];

```

## Performance

PublicArray has a large number of dependencies.  You should keep this in mind when optimizing the 
performance of your app. If your code only uses one property of PublicArray, like for 
instance .replace, you will get a slight performance boost if you just use an instance of
PublicArrayReplacer instead:
```
let replace = new PublicArrayReplacer(arr);
```

## License
[MIT](https://choosealicense.com/licenses/mit/)