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
