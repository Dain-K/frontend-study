# :traffic_light: JavaScript Level up
## :file_folder: ch1. JS 데이터
### :pencil: 01. 문자
### indexOf()
`indexOf()` 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫번째 인덱스를 반환  
일치하는 값이 없으면 -1을 반환
```java
  const result = 'Hello world!'.indexOf('wordl')
  console.log(result)
```

### length
`length` 속성은 문자열의 길이를 나타냄
```java
  const str = '0123'
  console.log('01 23'.length)    
  // 출력: '5'
```

### slice()
`slice()` 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환
```java
  const str = 'Hello world!'
  console.log(str.slice(0,3))
  // 출력: 'Hel'
```

### replace()
`replace()` 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
- pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않음
```java
  const str = 'Hello world!'
  console.log(str.replace('world', 'DAIN'))
  // 출력: 'Hello DAIN!'
```

### match()
`match()` 메서드는 문자열이 정규식과 매치되는 부분을 검색
```java
  const str = 'thesecon@gmail.com'
  console.log(str.match(/.+(?=@)/)[0])
  // 출력: 'thesecon'
```

### trim()
`trim()` 메서드는 문자열 양 끝의 공백을 제거
```java
  const str = '    Hello world  '
  console.log(str.trim())
  // 출력: 'Hello world'
```

### trimEnd()
`trimEnd()` 메서드는 문자열 끝부분의 공백을 제거
```java
  const str = '    Hello world  '
  console.log(str.trim())
  // 출력: '    Hello world'
```
### trimStart()
`trimStart()` 메서드는 문자열 시작부분의 공백을 제거
```java
  const str = '    Hello world  '
  console.log(str.trim())
  // 출력: 'Hello world  '
```

### :pencil: 02. 숫자와 수학
### Number.parseFloat()
`parseFloat()` 메서드는 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환
### Number.parseInt()
`parseInt()` 메서드는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
### toFixed()
`toFixed()` 메서드는 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시
```java
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
### Math.abs()
`Math.abs()` 함수는 주어진 숫자의 절대값을 반환
### Math.max()
`Math.max()` 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
```java
  console.log(Math.max(2, 8))
  // 출력: '8'
```
### Math.min()
`Math.min()`함수는 주어진 숫자들 중 가장 작은 값을 반환
```java
  console.log(Math.min(2, 8))
  // 출력: '2'
```
### Math.ceil()
`Math.ceil()` 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
```java
  console.log(Math.ceil(3.14))
  // 출력: '4'
```
### Math.floor()
`Math.floor()` 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
```java
  console.log(Math.floor(3.14))
  // 출력: '3'
```
### Math.round()
`Math.round()` 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
```java
  console.log(Math.round(3.14))
  // 출력: '3'
```
### Math.random()
`Math.random()`함수는 0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환
- 사용자가 원하는 범위로 변형 가능
```java
  console.log(Math.random())
  // 출력: '0.065845285'
```

[참고]
```java
  export defalut function random() {
    return Math.floor(Math.random() * 10)
  }
```

### :memo: 03. 배열(1)
