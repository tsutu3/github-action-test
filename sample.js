"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const message = "hello world";
console.log(message);
const array = [1, 2, 3, 4, 5];
const total = (0, lodash_1.sum)(array);
console.log("Sum of array:", total);
