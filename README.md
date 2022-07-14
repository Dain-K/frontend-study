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
</div>
</details>
