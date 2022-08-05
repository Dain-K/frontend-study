# :cherries: TypeScript Essentials

<details>
<summary> :file_folder: Typescript 기본설정 </summary>
<div markdown="1">

## Typescript 기본설정
#### :pushpin: npm 으로 만들기
```javascript
npm init -y
```
#### :pushpin: 타입스크립트 설치
```javascript
npm i typescript -D 
```
#### :pushpin: typescript 제공하는 기본 옵션 사용하기 위한 `tsconfig.json` 생성
```javascript
npx tsc --init
```
#### :pushpin: tsconfig.json 파일에서 확인해야할 것
```json
"strict": true, 
```  
이것이 true로 되어있는지 확인하는 것이 중요하다.
#### :pushpin: 컴파일 코드
```javascript
npx tsc
```
:arrow_right: `.ts` 파일과 파일명이 같은 `.js` 파일 생성 
#### :pushpin: 파일 실행
```javascript
node boolean.js // 파일명
```
</div>
</details>

<details>
<summary> :file_folder: ch 2. Basic Type </summary>
<div markdown="1">

## 📋 number
- JavaScript 와 같이 TypeScript의 모든 숫자는 부동 소수점 값이다.
- TypeScript는 16 진수 및 10 진수 리터럴 외에도, ECMAScript 2015에 도입된 2 진수 및 8진수를 지원한다.
```typescript
let decimal: number = 6; // 10 진수

let hex: number = 0xf00d; // 16 진수

let binary: number = 0b1010; // 2진수

let octal: number = 0o744; // 8 진수

let NotANumber: number = NaN;

let underscoreNum: number = 1_000_000;
```
## 📋 String
- 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 string 형식을 사용
- 문자열 데이터를 둘러싸기 위해 큰 따옴표(")나 작은 따옴표(')를 사용
```typescript
let myName: string = 'Inda';

myName = 'Dain';
```
### Template String
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick 기호에 둘러쌓여 있음
- 표함된 표현식은 `${expr}` 와 같은 형태로 사용
```typescript
let myName: string = 'Inda';

myName = 'Dain';

let fullName: String = 'Mark Lee';
let age: number = 39;

let sentence: string = `Hello, My name is ${ fullName }.

I'll be ${age + 1} years old next month.`;

console.log(sentence);
```
## 📋 symbol
- new symbol 로 사용할 수 없음
- symbol 을 함수로 사용해서 symbol 타입을 만들어낼 수 있음
```typescript
console.log(Symbol('foo'));
```
:arrow_right: 이를 에러없이 사용하기 위해서는 tsconfig.json에 Modules 부분에 아래의 코드를 추가해주어여 한다.
```json
/* Modules */
"module": "commonjs",                                /* Specify what module code is generated. */
"lib": [
    "ES2015", 
    "DOM"
],
```
#### :pushpin: Symbol은 어디에 사용되는 걸까
- 프리미티브 타입의 값을 담아 사용
- 고유하고 수정불가능한 값으로 만들어줌
- 주로 접근을 제어하는데 쓰는 경우가 많음
- 함수로 사용할때는 대문자 심볼, 타입으로 사용할 때는 소문자 심볼

## 📋 Undefined & Null
- Undefined와 Null은 실제로 각각 undefined 와 null이라는 타입을 가짐
- 둘다 소문자만 있음
```typescript
// let Myname: string = null;
// tsconfig.json 에 strict를 주석처리하면 가능

// let u: undefined = null;
let v: void = undefined;


// 아래와 같이 표기해야 사용 가능
let union: string | null = null;

union = "Mark";
```

#### :pushpin: null in js
- null 타입은 null 값만 가질 수 있음
- 런타임에서 typeof 연산자를 이용해서 알아내면, `object` 이다.
#### :pushpin: undefined in js
- 값을 할당하지 않은 변수는 undefined 값을 가짐
- object의 property가 없을 때도 undefined
-런타임에서 typeof 연산자를 이용해서 알아내면, `undefined` 이다.

## 📋 object
- "primitive type 이 아닌 것"을 나타내고 싶을 때 사용하는 타입
```typescript
const person1 = { name: "Mark", age: 27 };

const person2 = Object.create({name: 'Mark', age: 39});

let obj: object = {};
obj = {name: "Mark"};
```
## 📋 array
```typescript
let list: number[] = [1, 2, 3];
let list1: (number | string)[] = [1, 2, 3, "4"];

let list2: Array<number> = [1, 2, 3];
```
## 📋 tuple
```typescript
let x: [string, number];

x = ["hello", 39];
// 선언과 순서도 같고 길이도 같아야 함

// x = [10, "Mark"]; // 에러

const person: [string, number] = ["Mark", 39];

const [first, second] = person;

// const [first, second, third] = person;// 에러

```
## 📋 any
- 어떤 타입이어도 상관없음
- 최대한 쓰지 않는 것이 좋음
- 왜냐면 컴파일 타임에 타입 체크가 정상적으로 이루어지지 않기 때문
- any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션: `nolmplicitAny`
```typescript
function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString(); // 어떤 타입이든 상관 없음
```
- any는 계속해서 개체를 통해 전파
- 모든 편의는 타입 안정성을 잃는 대가로 온다
```typescript
let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;
```
## 📋 unknown
- any와 짝으로 any보다 type-safe 한 타입
- any와 같이 아무거나 할당할 수 있음
- 타입을 정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없음
- runtime error를 줄일 수 있음
```typescript
declare const maybe: unknown;
// const aNumber: number = maybe;
// unknown 형식은 바로 할당할 수 없음

// type을 한정시켜야 사용할 수 있음
// any 였으면 if 문 선언없이 사용가능
if(maybe === true) {
    const aBoolean: boolean =  maybe;
    // const aString: string = maybe;
}

if(typeof maybe === 'string'){
    const aString: string = maybe;
    // const aBoolean: boolean =  maybe;
}
```
## 📋 never
- 모든 타입의 subtype
- 모든 타입에 할당할 수 있음
- 하지만, never에는 그 어떤 것도 할당할 수 없음
- any 조차 never에게 할당할 수 없음
- 잘못된 타입을 넣는 실수를 막고자할 때 사용하기도 함
```typescript
function error(message: string): never{
    throw new Error(message);
}

function fail() {
    return error("failed");
}

function infiniteLoop(): never {
    while(true){

    }
}

let a: string = "hello";
declare let b: string | number;

if(typeof a !== 'string') {
    a; // a: never
}

type Indexable<T> = T extends string ? T & { [index: string]: any } :never;

// const c: Indexable<{}> = '';
```
</div>
</details>

<details>
<summary> :file_folder: ch 3. Type system </summary>
<div markdown="1">

## 📋 작성자와 사용자의 관점으로 코드 바라보기
#### :pushpin: 타입시스템
- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
- 컴파일러가 자동으로 타입을 추론하는 시스템
#### :pushpin: 타입스크립트의 타임 시스템
- 타입을 명시적으로 지정할 수 있음
- 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 추론
#### :pushpin: 타입이란 해당 변수가 할 수 있는 일을 결정
```javascript
// f1 이라는 함수의 body에서는 a를 사용할 것
// a가 할 수 있는 일은 a의 타입이 결정

function f1(a) {
    return a;
}
```
#### :pushpin: 함수에 대한 오해를 야기하는 자바스크립트
```javascript
// (f2 실행의 결과가 NaN을 의도한 것이 아니라면)
// 이 함수의 작성자는 매개변수 a가 number 타입이라는 가정으로 함수를 작성
function f2(a) {
    return a * 38;
}

// 사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행

console.log(f2(10)); // 380
console.log(f2('Mark')); // NaN
```
#### :pushpin: nolmplicitAny 옵셥을 켜면
타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론 중 'any'라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.
- nolmplicitAny에 의한 방어
```javascript
// error 발생
funciot f3(a) {
    return a * 38;
}

// 사용자의 코드를 실행할 수 없음
// 컴파일이 정상적으로 마무리 될 수 있도록 수정해야함

console.log(f3(10));
console.log(f3('Mark') + 5);
```
- number 타입으로 추론된 리턴 타입
```javascript
// 매개변수의 타입은 명시적으로 지정
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number로 추롭

function f4(a: number) {
    if(a > 0) {
        return a * 38;
    }
}

// 사용자는 사용법에 맞게 숫자혀을 사용하여 함수를 실행
// 해당 함수의 리턴 타입은 number 이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있음
// 하지만 실제 undefined + 5가 실행되어 NaN가 출력
console.log(f4(5)); // 190
console.log(f4(-5) + 5);
```
#### :pushpin: srtirctNullChecks 옵션을 켜면
모든 타입에 자동으로 포함되어 있는 `null`과 `undefined`를 제거해준다.
- 명시적으로 리턴타입을 지정해야할까
```javascript
// 매개변수의 타입과 함수의 리턴 타입을 멱시적으로 지정
// 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러 발생

// error
function f5(a: number): number{
    if(a > 0) {
        return a * 38;
    }
}
```
#### :pushpin: nolmplicitReturns 옵션을 켜면
함수내에서 보든 코드가 값을 리턴하지 않으면, 컴파일 에러가 발생
#### :pushpin: object literal type
```javascript
function f7(a: {name: string; age: number}): string {
    return `이름은 ${s.name} 이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`
}

console.log(f7({name: 'Mark', age: 38}));
console.log(f7('Mark')); // error
```

## 📋 Structural Type System vs Nominal Type System
#### :pushpin: Structural Type
구조가 같으면, 같은 타입이다.
```javascript
interface IPerson{
    name: string;
    age: number;
    speak(): string;
}

type PersonType = {
    name: string;
    age: number;
    speak(): string;
};

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
```
#### :pushpin: Nominal Type System
구조가 같아도 이름이 다르면, 다른 타입이다.
```javascript
type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
    return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-aaaa'));
getPersonById('id-aaaa') // error
```

## 📋 타입호환성
```javascript
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // error! Type 'number' is not assignable type '1'.

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2 // error! Type '{}' is missing the following properties from type 'number[]'

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;

// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5; // error!

class Animal {}
class Dog extends Animal {
    eat() {}
}

// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6: Dog = new Dog();
let sup6: Animal = sub6;
sub6 = sup6; // error!
```
1. 같거나 서브 타입인 경우, 할당이 가능하다. => 공변
```javascript
// primitive type
let sub7: string = '';
let sup7: string | number = sub7;

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: { a: string; b: number } = [{ a: '', b: 1 }];
let sup8: { a: string | number; b: number } = sub8;

// array - object 와 마찬가지
let sub9: Array<{ a: string; b: number }> = [{ a: '', b: 1 }];
let sup9: Array<{ a: string | number; b: number }> = sub9;
```
2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반병
#### :pushpin: strictFunctionTypes 옵션을 켜면
함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 통해 경고
## 📋 타입 별칭(별명)
- interface와 비슷해보임
- 기타 직접 작성해야하는 타입을 다른 이름으로 지정할 수 있음
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아님
#### :pushpin: Aliasing Primitive
```javascript
type MyStringType = string;
const str = 'world';

let mySter: MyStringType = 'hello';
myStr = str;
```
#### :pushpin: Aliasing Union Type
```javascript
let person: string | number = 0;
person = 'Mark';

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = 'Anna';

/*

1. 유니온 타입은 A 도 가능하고 B 도 가능한 타입
2. 길게 쓰는걸 짧게

*/
```
#### :pushpin: Aliasing Tuple
```javascript
let person: [string, number] = ['Mark', 35];

type PersonTuple = [string, number];

let another: PersonTuple = ['Anna', 24];

/*

1. 튜플 타입에 별칭을 줘서 여루군데서 사용할 수 있게 한다.

*/
```
</div>
</details>

<details>
<summary> :file_folder: ch 4. Typescript Compiler </summary>
<div markdown="1">

## 📋 tsconfig schema
#### :pushpin: 최상위 프로퍼티
- complieOnSave
- extends
- compileOptions
- files
- include
- exclude
- references
## 📋 complieOnSave
- `true` or `false`
- default false
- `true` 일 경우 save를 하면 컴파일 해줌
## 📋 extends 
- 파일(상대) 경로명: string
:arrow_right: in POJECT/base.json
```javascript
{
    "compilerIptions": {
        "strict": true
    }
}
```
:arrow_right: in POJECT/tsconfig.json
```javascript
{
    "extends": "./base.json",
}
```
## 📋 files, include, exclude
- 셋 다 설정이 없으면, 전부 다 컴파일
- `files`
    - 상대 혹은 절대 경로의 리스트 배열
    - exclude 보다 쎄다
- `include`
    - glob 패턴(마치 .gitignore)
    - exclude 보다 약하다
    - `*` 같은걸 사용하면, .ts / .tsx / .d.ts만 include 
- `exclude`
    - glob 패턴(마치 .gitignore)
    - 설정 안하면 `4가지(node_modules, bower_components, jspm_pacages, <outDir>)`를 default로 제외
    - `<outDir>`은 항상 제외
## 📋 compileOptions
#### :pushpin: React 설치
```javascript
$ npm i react
$ npm i --save-dev @types/react
```
#### :pushpin: @types
- 아무 설정을 안하면?
    - node_modules/@types라는 모든 경로를 찾아서 사용
- typeRoots를 사용하면?
    - 배열 안에 들어있는 경로들 아래서만 가져옴
- types를 사용하면?
    - 배열 안의 모듈 혹은 ./node_modules/@type/ 안의 모듈 이름에서 찾아옴
    - [] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 의미
- typeRoots와 types를 같이 사용하지 않음
#### :pushpin: target
- target 된 버전에 따라 ts에서 js 가 다르게 나옴
- 빌드의 결과물을 어떤 버전으로 할 것인가

#### :pushpin: lib
- 기본 type definition 라이브러리를 어떤 것을 사용할 것인가
- lib 를 지정하지 않을 때
    - target 이 'es3'이고, 디폴트로 lib.d.ts를 사용
- lib 를 지정하면 그 lib 배열로만 라이브러리를 사용
    - 빈 [] => 'no definition found ...'
## 📋 outDir, outFile, rootDir
#### :pushpin: tsconfig.json
```json
{
    "outDir": "./dist", // 출력 파일 경로
    "rootDir": "./src",  // ts 파일 경로(출력할 파일 경로)
}

```
</div>
</details>

<details>
<summary> :file_folder: ch 5. Interfaces </summary>
<div markdown="1">

## 📋 what is interfaces ??
```typescript
interface Person1 { 
    name: string; 
    age:number;
}

// function hello1(person: {name: string; age: number}): void {
//     console.log(`안녕하세요! ${person.name} 입니다.`);
// }

function hello1(person: Person1): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
    name: "Mark",
    age: 39,
}

hello1(p1);
```
## 📋 optional property
:one:
```typescript  
interface Person2 {
    name: string; // 꼭 있어야 함
    age?: number; // 있어도 되고 없어도 됨
}

function hello2(person: Person2): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({ name: "Mark", age: 39 });
hello2({ name: "Anna" });
```
:two:
```typescript
interface Person3{
    name: string;
    age?: number;
    [index: string]: any;
}

function hello3(person: Person3): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
    name: "Mark",
    age: 39, 
};

const p32: Person3 = {
    name: "Anna",
    sisters: ["Sung", "Chan"],
};

const p33: Person3 = {
    name: "Bokdaengi",
    father: p31,
    moter: p32,
};

hello3(p33);
```

## 📋 functio in interface
```typescript
interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: "Mark",
    age: 39,
    hello: function(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }  
}

const p42: Person4 = {
    name: "Mark",
    age: 39,
    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }  
}

// const p43: Person4 = {
//     name: "MArk",
//     age: 39,
//     hello(): void => {
//         console.log(`안녕하세요! ${this.name} 입니다.`);
//     }  
// }

p41.hello()
p42.hello()
```

## 📋 class implements interface
```typescript
interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string) { // 생성자를 지정해주어야 오류가 안뜸
        this.name = name;
    }
    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
    
}

const person: IPerson1 = new Person("Mark");
// IPerson1로 부터 생성된 Person 이므로 IPerson1을 명시해주어야 함
person.hello()
```
## 📋 interface extends interface
```typescript
interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2{ // 상속관계로 인터페이스 표현
    city: string;
}

const k: IKorean = {
    name: "김다인",
    city: "서울"
}

HTMLDivElement
```
## 📋 functio interface
```typescript
interface HelloPerson {
    (name: string, age?: number): void;
}

// HelloPerson 형식에 맞춰야함
const helloPerson: HelloPerson = function (name: string) {
    console.log(`안녕하세요! ${name} 입니다.`);
}

helloPerson("Mark", 39);
```
## 📋 Readonly Interface Properties
```typescript
interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: "Mark",
    gender: "male",
};

// readonly를 사용하여 수정이 불가능함
// p81.gender = "fmaale";

```
## 📋 type ailas vs interface
#### :pushpin: function
```typescript
// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
    (food: string): void;
}
```
#### :pushpin: array
```typescript
// type alias
type PersonList = string[];

// interface
interface IPersonList {
    [index: number]: string;
}
```
</div>
</details>

<details>
<summary> :file_folder: ch 6. Classes </summary>
<div markdown="1">

## 📋 What are Classes ??
- object 를 만드는 blueprint (청사지느 설계도)
- 클래스 이전에 object를 만드는 기본적인 방법은 function
- js 에도 class 는 es6부터 사용 가능
- OOP을 위한 초석
- TypeScript 에서는 클래스도 사용자가 만드는 타입의 하나
## 📋 Quick Start - class
```typescript
class Person {} // 클래스 생성

const p1 = new Person(); //  object 생성

console.log(p1); // 출력: Person {}


class Person1 {
    name;
    constructor(name: string){
        this.name = name;
    }
} 

const p2 = new Person1("Mark");
```
- class 키워드를 이용하여 클래스를 만들 수 있음
- class 이름은 보통 대문자를 이용
- new 를 이용하여 class 를 통해 object 를 만들 수 있음
- constructor 를 이용하여 object 를 생성하면서 값을 전달할 수 있음
- this 를 이용해서 만들어진 object 를 가리킬 수 있음
- JS 로 컴파일되면 es5 의 경우 function 으로 변경
## 📋 constructor & initialize
클래스의 생성자와 초기화
- 생성자 함수가 없으면, 디폴트 생성자가 불린다.
- 프로그래머가 만든 새엉자가 하낟라도 있으면, 디폴트 생성자가 사라진다.
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 `!` 를 붙여서 위험을 표현한다.
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
- 생성자에는 async 를 설정할 수 없다.
```typescript
class Person2 { 
    // stict가 true로 되어있기 때문에 초기값을 선언해주어야함
    name: string = "Mark";
    age!: number;
} 

const p3: Person2 = new Person2(); //  default 생성자만 호출
p3.age = 39; // !를 적어줬으므로 무조건 초기값을 선언해주어야 함
console.log(p3); // 출력: Person {}

/////////////////////////////////////////////////////////////

class Person3 { 
    name: string = "Mark";
    age: number;

    constructor(age: number) {
        this.age = age;
    }
} 

const p4: Person3 = new Person3(39); 
console.log(p4); 

/////////////////////////////////////////////////////////////

class Person4 { 
    name: string = "Mark";
    age: number;

    constructor(age?: number) {
        if(age === undefined){
            this.age = 20;
        } else{
            this.age = age;
        }
    }
} 

const p5: Person4 = new Person4(39); 
const p6: Person4 = new Person4(); 
console.log(p5); 
```
## 📋 접근제어자(Access Modifiers)
- typescript는 기본적으로 모두 외부에서 접근이 가능하다. - `public`
- 접근제어자에는 public, private, protected 가 있다.
- 설정하지 않으면 `public` 이다.
- 클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드) 설정 가능하다.
- private 으로 설정하면 클래스 외부에서 접근할 수 없다.
- 자바스크립트에서 private 지원하지 않아 오랫동안 프로퍼티나 메서드 이름 앞에 `_`를 붙여서 포현했다.
```typescript
class Person5 { 
    public name: string = "Mark";
    private _age: number;

    constructor(_age?: number) {
        if(_age === undefined){
            this._age = 20;
        } else{
            this._age = _age;
        }
    }
    public async init() {}
} 
```
## 📋 initialization in constructor parameters
```typescript
class Person6 { 
    constructor(public name: string, private age?: number) {}
} 

const p7: Person6 = new Person6("Mark", 39); 
console.log(p7); 
```
## 📋 Getters & Setters
```typescript
class Person8 { 
    constructor(private _name: string, private age?: number) {}
    
    get name() { // return을 반드시 해줘야 함
        //
        // console.log("get")
        return this._name + " Lee";
    }

    set name(n: string) { // 인자를 받아서 설정해주어야 함
        // console.log("set")
        this._name = n;
    }
} 

const p8: Person8 = new Person8("Mark", 39); 
console.log(p8.name); // get을 하는 함수 getters
p8.name = "Kevin"; // set 을 하는 함수 setters
console.log(p8.name);
```
## 📋 readonly properties
```typescript
class Person9 { 
    // readonly
    // 밖에서 name을 바꾸려고 하면 에러 발생
    // 초기화 되는 영역에서만 바꿀 수 있음
    public readonly name: string = "Mark"; 
    private readonly country: string = "Korea"; 

    constructor(private _name: string, private age?: number) {
        this.country = "China";
    }

    // hello(){
    //     this.country = "China";
    // } 오류 발생
} 

const p9: Person9 = new Person9("Mark", 39); 
```
## 📋 Index Signatures in class
```typescript
// class => object
// { mark: 'mail', jade: 'mail' }
// { chloe: 'femaile', alex: 'male', anna: 'female' }

class Students {
    [index: string]: "male" | "female";
    // 정해진 값만 넣을 수 있음
    mark: 'male' = "male";
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);
```
## 📋 Static Properties & Methods
```typescript
class Person10 {
    private static CITY = "Seoul";
    public static hello() {
        console.log("안녕하세요", Person10.CITY);
    }
}

const p10 = new Person10();

// p10.hello();

Person10.hello(); // static 키워드를 적으면 사용가능

////////////////////////////////

class Person11 {
    private static CITY = "Seoul";
    public hello() {
        console.log("안녕하세요", Person11.CITY);
    }
    public change() {
        Person11.CITY = "LA";
    }
}

const p12 = new Person11();
const p13 = new Person11();

p12.hello();
p13.hello();
p13.change();
p13.hello();

```
## 📋 Singletons
어플리케이션이 실행되는 중간에 클래스로부터 단 하나의 오브젝트를 생성
```typescript
class ClassName {
    private static instance: ClassName | null = null;
    public static getInstance(): ClassName {
        // ClassName 으로부터 만든 object 가 있으면, 그걸 return
        // ClassName 으로부터 만든 object 가 없으면, 만든다.
        if(ClassName.instance === null){
            ClassName.instance = new ClassName();
        }

        return ClassName.instance;
    }
    private constructor() {} // 외부에서 new를 직접 호출 못하도록
}

const a1 = ClassName.getInstance();
const b1 = ClassName.getInstance();

console.log(a === b); // true
```
## 📋 상속(Inheritance)
```typescript
class Parent {
    constructor (protected _name: string, private _age: number) {}
    // protected: 외부에서 접근할수 없지만 상속 받는 관계에 있는 경우 접근 가능

    public print(): void {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다`);
    }

    protected printName(): void {
        console.log(this._name);
    }
}

// const p = new Parent("Mark", 39);
// p.print();

class Child extends Parent {
    public _name = "Mark Jr."; // 위의 name을 오버라이딩
    public gender = "male";

    constructor (age: number) {
        super("Mark Jr.", age);

        this.printName();
    };
}

// const c = new Child("Son", 5); // Parent의 형식을 지켜야 한다.
const c = new Child(5);
c.gender;
c._name;
c.print();
```
## 📋 Abstract Classes
완전하지 않은 클래스 표현
```typescript
abstract class AbstractPerson {
    protected _name: string= 'Mark';

    abstract setName(name: string): void;
}
// abstract의 경우 기능이 완전하지 않아
// new abstract()를 바로 사용할 수 없음

class APerson extends AbstractPerson {
    setName(name: string): void {
        this._name = name;
    }
}

const p = new APerson();
p.setName('MArk');
```
</div>
</details>

<details>
<summary> :file_folder: ch 7. Generics </summary>
<div markdown="1">

## 📋 Generics, Any 와 다른 점
- 들어오는 인자와 나가는 인자의 로직이 같음
- 더 많은 반복된 함수들이 생김
```typescript
function helloString(message: string): string {
    return message; 
}

function helloNumber(message: number): number {
    return message;
}
```
:right_arrow: 이를 해결하기 위해 `any` 사용
```typescript
function hello(message: any): any {
    return message;
}

console.log(hello("Mark").length);
console.log(hello(39).length);
```
하지만 type을 알 수가 없다 <br>
:right_arrow: 들어가는 type을 리턴되는 type에 연관을 시켜주면 좋겠다 하여 나온것이 `generic`
```typescript
function helloGeneric<T>(message: T): T {
    return message;
}

console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));
```
## 📋 Generics Basic
Generics 타입 지정 방법
```typescript
function helloBasic<T>(message: T): T {
    return message;
}

// type을 string으로 지정해줌
helloBasic<string>("Mark");
// type을 추론
helloBasic(36);

function helloBasic1<T, U>(message: T, comment: U): T {
    return message;
}

helloBasic1<string, number>("Mark", 9);
helloBasic1(36, 39);
```
## 📋 Generics Array & Tuple
#### :pushpin: 배열로 받기
```typescript
function helloArray<T>(message: T[]): T {
    return message[0];
}

helloArray(["Hello", "World"]); // [string, string]
helloArray(["Hello", 5]); // [string, number]

function helloTuple<T, K>(message: [T, K]): T{
    return message[0];
}

helloTuple(["Hello", "World"]); // [string, string]
helloTuple(["Hello", 5]); // [string, string]
```
## 📋 Generics Function
함수의 타입만 선언하는 방식
```typescript
type HelloFunctionGeneric1 = <T>(message: T) => T;

const hellofunction1: HelloFunctionGeneric1 =  <T>(message: T) : T => {
    return message;
}

interface HelloFunctionGeneric2 {
    <T>(message: T) : T;
}

const hellofunction2: HelloFunctionGeneric2 = <T>(message: T) : T => {
    return message;
}
```
## 📋 Generics class
```typescript
class Person<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person("Mark", 39);
// new Person<string>(39);
```
## 📋 Generics with extends
타입은 가장 작은 범위로 제한하는 것이 좋다
```typescript
class PersonExtends <T extends string | number> {
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true);
```
## 📋 keyof & type lookup system
타입을 정확하게 찾아낼 수 있는 방식
</div>
</details>