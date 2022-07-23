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
</div>
</details>
