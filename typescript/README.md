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
#### :pushpin:
</div>
</details>