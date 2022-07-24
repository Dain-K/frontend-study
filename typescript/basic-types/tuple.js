"use strict";
let x;
x = ["hello", 39];
// 선언과 순서도 같고 길이도 같아야 함
// x = [10, "Mark"]; // 에러
const person = ["Mark", 39];
const [first, second] = person;
// const [first, second, third] = person;// 에러
