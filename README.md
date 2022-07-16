# :traffic_light: JavaScript Level up
### :file_folder: ch1. JS 데이터
<details>
<summary> :pencil: 01. 문자  </summary>
<div markdown="1">

## indexOf()
`indexOf()` 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫번째 인덱스를 반환  
일치하는 값이 없으면 -1을 반환
```javascript
  const result = 'Hello world!'.indexOf('wordl')
  console.log(result)
```

## length
`length` 속성은 문자열의 길이를 나타냄
```javascript
  const str = '0123'
  console.log('01 23'.length)    
  // 출력: '5'
```

## slice()
`slice()` 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환
```javascript
  const str = 'Hello world!'
  console.log(str.slice(0,3))
  // 출력: 'Hel'
```

## replace()
`replace()` 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
- pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않음
```javascript
  const str = 'Hello world!'
  console.log(str.replace('world', 'DAIN'))
  // 출력: 'Hello DAIN!'
```

## match()
`match()` 메서드는 문자열이 정규식과 매치되는 부분을 검색
```javascript
  const str = 'thesecon@gmail.com'
  console.log(str.match(/.+(?=@)/)[0])
  // 출력: 'thesecon'
```

## trim()
`trim()` 메서드는 문자열 양 끝의 공백을 제거
```javascript
  const str = '    Hello world  '
  console.log(str.trim())
  // 출력: 'Hello world'
```

## trimEnd()
`trimEnd()` 메서드는 문자열 끝부분의 공백을 제거
```javascript
  const str = '    Hello world  '
  console.log(str.trim())
  // 출력: '    Hello world'
```
## trimStart()
`trimStart()` 메서드는 문자열 시작부분의 공백을 제거
```javascript
  const str = '    Hello world  '
  console.log(str.trim())
  // 출력: 'Hello world  '
```
</div>
</details>

<details>
<summary> :pencil: 02. 숫자와 수학  </summary>
<div markdown="1">

## Number.parseFloat()
`parseFloat()` 메서드는 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환
## Number.parseInt()
`parseInt()` 메서드는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
## toFixed()
`toFixed()` 메서드는 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시
```javascript
  const pi = 3.14159265358979
  console.log(pi)
  // 출력: '3.14159265358979'
  const str = pi.toFixed(2)
  console.log(str)
  // 출력: '3.14'
  console.log(typeof str)
  // 출력: 'string'
  const integer = parseInt(str)
  cont float = parseFloat(Str)
  console.log(integer)
  // 출력: '3'
  console.log(float)
  // 출력: '3.14'
  console.log(typeof integer, typeof float)
  // 출력: 'number number'
```
## Math.abs()
`Math.abs()` 함수는 주어진 숫자의 절대값을 반환
## Math.max()
`Math.max()` 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
```javascript
  console.log(Math.max(2, 8))
  // 출력: '8'
```
## Math.min()
`Math.min()`함수는 주어진 숫자들 중 가장 작은 값을 반환
```javascript
  console.log(Math.min(2, 8))
  // 출력: '2'
```
## Math.ceil()
`Math.ceil()` 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
```javascript
  console.log(Math.ceil(3.14))
  // 출력: '4'
```
## Math.floor()
`Math.floor()` 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
```javascript
  console.log(Math.floor(3.14))
  // 출력: '3'
```
## Math.round()
`Math.round()` 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
```javascript
  console.log(Math.round(3.14))
  // 출력: '3'
```
## Math.random()
`Math.random()`함수는 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환
- 사용자가 원하는 범위로 변형 가능
```javascript
  console.log(Math.random())
  // 출력: '0.065845285'
```

[참고]
```javascript
  export defalut function random() {
    return Math.floor(Math.random() * 10)
  }
```
</div>
</details>

<details>
<summary> :memo: 03. 배열(1)  </summary>
<div markdown="1">

## 배열 만들기
```javascript
  const numbers = [1,2,3,4]
  console.log(numbers)
  // 출력: '[1, 2, 3, 4]'
 ```
## 인덱스로 배열의 항목에 접근하기
```javascript
  const fruits = ['Apple', 'Banana', 'Cherry']
  console.log(fruits[2])
  // 출력: 'Cherry'
  console.log(fruits.length - 1)
  // 출력: 'Cherry'
```
 
## Array.prototype.find()
`find()`  메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
```javascript
  const array = [5,12,8,130,44];
  const found = array.find(element => element > 10); // 배열의 0번째 숫자부터 비교해서 제일 처음 true가 되는 값을 반환
  console.log(found)
  // 출력: '12'
```
## Array.prototype.concat()
`concat()` 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  console.log(numbers.concat(fruits)) // 원본 수정 없이 두 배열이 합쳐짐
```
## Array.prototype.forEach()
`forEach()` 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  fruits.forEach(function (element, index, array) {
    console.log(element, index, array)
  })
  // fruits의 길이만큼 반복하여 element index array 순으로 출력
```
```javascript
  const a = fruits.forEach(function (fruit, index) {
    console.log(`${fruits} - ${index}`)
  })
  // 출력1: 'Apple-0'
  // 출력2: 'Banana-1'
  // 출력3: 'Cherry-2'
  console.log(a)
  // 출력: 'undefined'
```
## Array.prototype.map()
`map()` 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
```javascript
  const b = fruits.map(function (fruit, index) {
    return`${fruits} - ${index}`
  })
  console.log(b)
  // 출력: '(3) ["Apple-0", "Banana-1", "Cherry-2"]
```
```javascript
  const b = fruits.map(function (fruit, index) {
    return {
      id: index,
      name: fruit
    }
  })
  console.log(b)
  // 출력: '(3) ["...", "...", "..."]
  // 0: id:0 name:"Apple"...
```
위 코드를 아래와 같이 나타낼 수 있음
```javascript
  const b = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
  }))
  console.log(b)
```
</div>
</details>

<details>
<summary> :pencil: 04. 배열(2)  </summary>
<div markdown="1">

## Array.prototype.filter()
`filter()` 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  // true false 로 값을 반환하여 배열 생성
  const a = numbers.map(number => {
    return numver < 3
  })
  console.log(a)
  // 출력: (4) [true, true, false, false]
```
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  // 조건에 맞는 값을 찾아 새로운 배열에 담아줌
  const a = numbers.filter(number => {
    return numver < 3
  })
  console.log(a)
  // 출력: (2) [1, 2]
  // 원본 numbers는 손상되지 않음
```
## Array.prototype.find()
`find()` 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
- 배열 크기만큼 반복하는데, 만족하는 요소를 찾으면 반복을 멈춤
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  const a = fruits.find(fruit => {
    return /^B/.test(fruit) // 첫번째문자가 B인 문자를 찾음
  })
  console.log(a)
  // 출력: 'Banana'
```
## Array.prototype.findIndex()
`findIndex()` 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  const a = fruits.findIndex(fruit => {
    return /^B/.test(fruit)
  })
  console.log(a)
  // 출력: '1'
```
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  const a = fruits.findIndex(fruit => /^B/.test(fruit))
```
## Array.prototype.includes()
`includes()` 메서드는 배열이 특정 요소를 포함하고 있는지 판별
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  const a = numbers.includes(3)
  console.log(a)
  // 출력: true
```
## Array.prototype.push()
`push()` 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환 
- 배열의 가장 뒷 부분에 데이터를 삽입
- 원본 수정 주의!!
## Array.prototype.unshift()
`unshift()` 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
- 원본 수정 주의!!
## Array.prototype.reverse()
`reverse()` 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됨
- 원본 수정 주의!!
## Array.prototype.splice()
`splice()` 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  numbers.splice(2, 1)
  console.log(numbers)
  // 출력: '(3) [1, 2, 4]'
```
```javascript
  const numbers = [1,2,3,4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  numbers.splice(2, 0, 999)
  console.log(numbers)
  // 출력: '(3) [1, 2, 999, 3, 4]'
```
</div>
</details>

<details>
<summary> :pencil: 05. 객체  </summary>
<div markdown="1">

## Object.assign()
`Object.assign()` 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣음
- 매개변수
  - target: 대상객체
  - sources: 하나 이상의 출처 객체
- 반환값: 대상의 객체
```javascript
  const userAge = {
    // key: valu
    name: 'Dain'
    age: 85
  }
  const userEmail = {
    name: 'Dain'
    email: 'dksudi76@gmail.com'
  }
  
  const target = Object.assign(userAge, userEmail) // 정적 메소드
  console.log(target)
  // 출력: {name: "Dain", age: 85, email: "dksudi76@gmail.com"}
  console.log(userAge)
  // 출력: {name: "Dain", age: 85, email: "dksudi76@gmail.com"}
  console.log(target === userAge) // target과 userAge는 같은 메모리에 저장 되어 있으므로 true
  // 출력: 'true'
  
```
```javascript
  const userAge = {
    // key: valu
    name: 'Dain'
    age: 85
  }
  const userEmail = {
    name: 'Dain'
    email: 'dksudi76@gmail.com'
  }
  
  const target = Object.assign({}, userAge, userEmail) // 정적 메소드
  console.log(target)
  // 출력: {name: "Dain", age: 85, email: "dksudi76@gmail.com"}
  console.log(userAge)
  // 출력: {name: "Dain", age: 85}
  console.log(target === userAge) 
  // 출력: 'false'
  
```
## Object.keys()
```javascript
  const user = {
    name: 'Dain'
    age: 85,
    email: 'dksudi76@gmail.com'
  }
  
  const keys = Object.keys(user)
  console.log(keys)
  // 출력: (3) ["name", "age", "email"] 
  
  console.log(user['email'])
  // 출력: dksudi76@gmail.com
  
  const values = keys.map(key => user[key])
  console.log(valuses)
  // 출력: (3) ["Dain", "85", "dksudi76@gmail.com"] 
```
</div>
</details>

<details>
<summary> :pencil: 06. 구조 분해 할당  </summary>
<div markdown="1">

## 구조 분해 할당(Destructuring assignment)
`구조분해할당` 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
- 비구조화 할당 문법
```javascript
  const user = {
    name: 'Heropy',
    age: 85,
    email: 'dksudi76@gmail.com'
  }
  const {name, age, address} = user
  // E.g, user.address
  
  console.log(`사용자의 이름은 ${name}입니다.')
  console.log(`${name}의 나이는 ${age}세입니다.`)
  console.log(`${name}의 이메일 주소는 ${user.email}입니다.`)
  console.log(address)
  // 출력: undefined
  
  const fruits = ['Apple', 'Banana', 'Cherry]
  const [a,b,c,d] = fruits
  console.log(a,b,c,d)
  // 출력: Apple Banana Cherry undefined
```
## 기본값 지정 방법
```javascript
  const user = {
    name: 'Heropy',
    age: 85,
    email: 'dksudi76@gmail.com'
  }
  const {name, age, address = 'Korea'} = user
  // 주소가 없을 경우 기본값을 지정할 수 있음
```
## 변수 재선언 방법
```javascript
  const user = {
    name: 'Heropy',
    age: 85,
    email: 'dksudi76@gmail.com'
  }
  const {name: heropy, age, address = 'Korea'} = user
  onsole.log(`사용자의 이름은 ${heropy}입니다.')
```
## 원하는 값 출력
순서대로 출력하기 때문에 `,`를 적어주어야 함
```javascript
  const fruits = ['Apple', 'Banana', 'Cherry]
  const [,b] = fruits 
  console.log(b)
  // 출력: Banana
```
</div>
</details>

<details>
<summary> :pencil: 07. 전개 연산자  </summary>
<div markdown="1">

## 전개연산자(Spread)
```javascript
  const fruits = ['Apple', 'Banana', 'Cherry']
  console.log(fruits) 
  // 출력: (3) ["Apple", "Banana", "Cherry"]
  console.log(...frults)
  // 출력: Apple Banana Cherry
  
  function toObject(a, b, c) {
    return {
      a: a,
      b: b,
      c: c
    }
  }
  console.log(toObject(...fruits))
  // 출력: {a: "Apple", b: "Banana", c: "Cherry"}
```
## 배열에 새로운 값이 추가될 경우
```javascript
  const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
  console.log(fruits) 
  // 출력: (3) ["Apple", "Banana", "Cherry". "Orange"]
  console.log(...frults)
  // 출력: Apple Banana Cherry Orange
  
  function toObject(a, b, ...c) { // 매개변수 c가 나머지 값을 다 받아냄: rest parameter
    return {
      a: a,
      b: b,
      c: c
    }
  }
  console.log(toObject(...fruits))
  // 출력: {a: "Apple", b: "Banana", c: Array(2)}
```

## 축약형
데이터와 변수의 이름이 같을 경우
```javascript
  const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
  cosnt toObject = (a, b, ...c) => ({a, b, c})
  console.log(toObject(...fruits))
```
</div>
</details>

<details>
<summary> :pencil: 08. 불번성  </summary>
<div markdown="1">

## 데이터 불변성(Immutavility)
- 원시 데이터: String, Number, Boolean, undefined, null
- 참조형 데이터: Object, Array, Function
- 참조형 데이터: Object, Array, Function
</div>
</details>

<details>
<summary> :pencil: 09. 얕은 복사와 깊은 복사  </summary>
<div markdown="1">

## 같은 메모리 주소 할당
```javascript
  const user = {
    name: 'Heropy',
    age: 85,
    emails: ['dksudi76@gmail.com']
  }
  const copyUser = user // 같은 메모리 주소 할당
  console.log(copyUser === user)
  // 출력: true
  
  user.age = 22
  console.log('user', user)
  // 출력: {name: 'Heropy',  age: 22, emails: Arrays(1)}
  conole.log('copyUser', copyUser)
  // 출력: {name: 'Heropy',  age: 22, emails: Arrays(1)}
  // 같은 메모리를 할당 받으므로 두개 모두 값이 바뀜
```
## 다른 메모리 주소 할당
방법 :one:
```javascript
  const user = {
    name: 'Heropy',
    age: 85,
    emails: ['dksudi76@gmail.com']
  }
  const copyUser = Object.assign({}, user) // 새로운 객체데이터가 새로운 메모리에 할당
  console.log(copyUser === user)
  // 출력: false
  
  user.age = 22
  console.log('user', user)
  // 출력: {name: 'Heropy',  age: 22, emails: Arrays(1)}
  conole.log('copyUser', copyUser)
  // 출력: {name: 'Heropy',  age: 85, emails: Arrays(1)}
```
방법 :two: - `얕은복사`
```javascript
  const user = {
    name: 'Heropy',
    age: 85,
    emails: ['dksudi76@gmail.com']
  }
  const copyUser = {...user}
  console.log(copyUser === user)
  // 출력: false
  
  user.age = 22
  console.log('user', user)
  // 출력: {name: 'Heropy',  age: 22, emails: Arrays(1)}
  conole.log('copyUser', copyUser)
  // 출력: {name: 'Heropy',  age: 85, emails: Arrays(1)}
```
방벙 :three: - `깊은복사(Deep copy)`<br>
깊은 복사를 사용하기 위해서는 `lodash`를 이용
- 재귀적으로 모든 함수를 복사
1. lodash 설치
터미널(zsh)에서 아래의 코드 실행
```javascript
  npm i lodash
```
2. 개발서버 열기
```javascript
  npm run dev
```
3. package.json
lodash가 설치된 것을 확인 가능
```javascript
  "dependecies": {
    "lodash": "^4.17.21"
  }
```
4. main.js에서 lodash 이용하기
```javascript
  import _ from 'lodash'
  const user = {
    name: 'Heropy',
    age: 85,
    emails: ['dksudi76@gmail.com']
  }
  const copyUser = _.cloneDeep(user)
  console.log(copyUser === user)
  // 출력: false
  
  user.age = 22
  console.log('user', user)
  // 출력: {name: 'Heropy',  age: 22, emails: Arrays(1)}
  conole.log('copyUser', copyUser)
  // 출력: {name: 'Heropy',  age: 85, emails: Arrays(1)}
```
</div>
</details>

### :file_folder: ch2. JS 데이터 실습
<details>
<summary> :pencil: 01. 가져오기, 내보내기  </summary>
<div markdown="1">

#### import 키워드를 통해 외부의 js를 불러오기
## 내보내기 통로 `2개`
#### :clipboard: `Default export`: 이름 없이 내보내기 
  - default 키워드 적어주기
  - 데이터 이름을 따로 적어주지 않아도 된다.
  - 하나의 함수만 작성되어야 한다.
  ```javascript
    export default function random()
  ```
  위와 같이 함수 이름을 정의할 경우 아래와 같이 작성 가능
  ```javascript
    export default function ()
  ```
#### :clipboard: `Named export`
  - 여러개의 함수를 작성할 수 있음
  ```javascript
    export function random() {}
    export const user = {}
  ```
  import로 불러올 경우 아래와 같이 정의해야함
  ```javascript
    import {random, user as 원하는 이름} from './파일명'
  ```
  한번에 불러오고 싶은 경우
  ```javascript
    import * as R from './파일명'
  ```
</div>
</details>

<details>
<summary> :pencil: 02. Lodash 사용법  </summary>
<div markdown="1">

## 중복 없이 배열 합치기
#### :clipboard: `uniqBy`
배열이 하나일 때 사용
#### :clipboard: `unionBy`
배열이 두개일 때 사용
```javascript
  import _ from 'lodash'
  const usersA = [
    {userId: '1', name: 'Dain'},
    {userId: '2', name: 'Neo'}
  ]
  // 배열 안에 2개의 객체 데이터 생성
  const usersB = [
    {userId: '1', name: 'Dain'},
    {userId: '3', name: 'Kevin'}
  ]
  const usersC = usersA.concat(usersB) // 2개의 배열 데이터를 합쳐 새로운 배열 생성
  console.log('concat', usersC) // 4개의 데이터, 중복 데이터 포함
  console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 중복 데이터 userId로 구분
  
  const usersD = _.unionBy(usersA, usersB, 'userId')
  console.log('uniqBy', usersD)
```
</div>
</details>

<details>
<summary> :pencil: 03. JSON  </summary>
<div markdown="1">

</div>
</details>

<details>
<summary> :pencil: 04. Storage  </summary>
<div markdown="1">

</div>
</details>

<details>
<summary> :pencil: 05. OMDb API  </summary>
<div markdown="1">

</div>
</details>
