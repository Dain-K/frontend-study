"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Person {
} // 클래스 생성
const p1 = new Person(); //  object 생성
console.log(p1); // 출력: Person {}
/////////////////////////////////////////////////////////////
class Person1 {
    constructor(name) {
        this.name = name;
    }
}
const p2 = new Person1("Mark");
/////////////////////////////////////////////////////////////
class Person2 {
    constructor() {
        // stict가 true로 되어있기 때문에 초기값을 선언해주어야함
        this.name = "Mark";
    }
}
const p3 = new Person2(); //  default 생성자만 호출
p3.age = 39; // !를 적어줬으므로 무조건 초기값을 선언해주어야 함
console.log(p3); // 출력: Person {}
/////////////////////////////////////////////////////////////
class Person3 {
    constructor(age) {
        this.name = "Mark";
        this.age = age;
    }
}
const p4 = new Person3(39);
console.log(p4);
/////////////////////////////////////////////////////////////
class Person4 {
    constructor(age) {
        this.name = "Mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
const p5 = new Person4(39);
const p6 = new Person4();
console.log(p5);
/////////////////////////////////////////////////////////////
class Person5 {
    constructor(_age) {
        this.name = "Mark";
        if (_age === undefined) {
            this._age = 20;
        }
        else {
            this._age = _age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
/////////////////////////////////////////////////////////////
class Person6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p7 = new Person6("Mark", 39);
/////////////////////////////////////////////////////////////
class Person8 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        //
        // console.log("get")
        return this._name + " Lee";
    }
    set name(n) {
        // console.log("set")
        this._name = n;
    }
}
const p8 = new Person8("Mark", 39);
console.log(p8.name); // get을 하는 함수 getters
p8.name = "Kevin"; // set 을 하는 함수 setters
console.log(p8.name);
/////////////////////////////////////////////////////////////
class Person9 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        // readonly
        // 밖에서 name을 바꾸려고 하면 에러 발생
        // 초기화 되는 영역에서만 바꿀 수 있음
        this.name = "Mark";
        this.country = "Korea";
        this.country = "China";
    }
}
const p9 = new Person9("Mark", 39);
