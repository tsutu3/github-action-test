import { sum as lodashSum } from 'lodash';

const message:string = "hello world";
console.log(message);

const array = [1, 2, 3, 4, 5];
const total = lodashSum(array);
console.log("Sum of array:", total);
