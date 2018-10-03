import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { OpenArray } from '../OpenArray';


let arr = ObjectFactory.getInstance(OpenArray, [[1,2,3,4,5,6,7,8,9]]);
console.log(arr);


/***
 Example of using OpenArray


 arr.remove.allAfterFirst(4);
 arr.remove.allBeforeFirst(3);
 arr.prepend.one(100);
 arr.append.one(100);

 ***/