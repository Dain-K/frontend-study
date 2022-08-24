# :lollipop: SCSS study
<details>
<summary> :bookmark_tabs: CSS, SASS, SCSS  </summary>
<div markdown="1">

## CSS, SCSS
- `CSS` : Cascading Style Sheets - 종속형 시트
- `SCSS` : Sassy CSS - 문법적으로 완전 멋진(Sassy) CSS

## SCSS 사용 이유
CSS가 복잡한 언어는 아니지만, 프로젝트의 크기가 커지고 고도화 될수록 유지보수의 어려움이 발생하게 된다.<br>
이러한 문제점을 <b>SCSS</b> 가 해소시켜줄 수 있다.

</div>
</details>

<details>
<summary> :bookmark_tabs: 기본 설정  </summary>
<div markdown="1">

## parcel bundler 설치
```javascript
npm i -D parcel-bundler
```
## parcel bundler 사용하기 위한 설정
package.jsom 파일 수정
```json
{
  "name": "scss-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.5"
  }
}

```

## index.html과 main.scss 연결
index.html `<head>` 부분에 아래의 태그 추가하기
```html
<link rel="stylesheet" href="./main.scss" />
```
scss 파일을 생성 후, build 하면 package.json 의 `parcel-bundler` 가 이를 진지하고 자동으로 아래의 의존성을 추가한다.
```json
    "devDependencies": {
        "parcel-bundler": "^1.12.5",
        "sass": "^1.54.5"
    }
```

</div>
</details>








## css와 scss 차이
scss를 작성하면 css 파일이 생성된다.
- css
```css
.container h1 {
  color: royalblue;
}
```
- scss
```scss
$color: royalblue;
.container {
    h1 {
        color: $color;
    }
}
```


## scss 주석
```scss
$color: royalblue;
.container {
    h1 {
        color: $color;
        /* background-color: orange; */
        // font-size: 60px;
    }
}
```
위 코드를 css 로 변환하면
```css
.container h1 {
    color: royalblue;
    /* background-color: orange; */
}
```


## 중첩 with SassMeister
- scss
```scss
.container {
    ul {
        li {
            font-size: 40px;
        }
        .name {
            color: royalblue;
        }
        .age {
            color: orange;
        }
    }
}
```
- css
```css
.container ul li {
  font-size: 40px;
}
.container ul .name {
  color: royalblue;
}
.container ul .age {
  color: orange;
}

```
자식 요소인 것을 명확히 표시하기
- scss
```scss
.container {
    > ul {
        li {
            font-size: 40px;
        }
        .name {
            color: royalblue;
        }
        .age {
            color: orange;
        }
    }
}
```
- css
```css
.container > ul li {
  font-size: 40px;
}
.container > ul .name {
  color: royalblue;
}
.container > ul .age {
  color: orange;
}
```

## 상속(부모), 선택자 참조
`&` 기호 사용
- scss
```scss
.btn {
    position: absolute;
    &.active {
        color: red;
    }
}
.list {
    li {
        &:last-child {
            margin-right: 0;
        }
    }
}
```
- css
```css
.btn {
  position: absolute;
}
.btn.active {
  color: red;
}

.list li:last-child {
  margin-right: 0;
}
```
- scss
```scss
.fs{
    &-small { font-size: 12px;}
    &-medium { font-size: 14px;}
    &-large { font-size: 16px;}
}
```
- css
```css
.fs-small {
  font-size: 12px;
}
.fs-medium {
  font-size: 14px;
}
.fs-large {
  font-size: 16px;
}
```


## 중첩된 속성
네임스페이스가 동일할 때 사용
- scss
```scss
.box{
    font: {
        weight: bold;
        size: 10px;
        family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    };
    margin: {
        top: 10px;
        left: 20px;
    };
    padding: {
        top: 10px;
        bottom: 40px;
        left: 20px;
        right: 30px;
    };
}
```
- css
```css
.box {
  font-weight: bold;
  font-size: 10px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 30px;
}
```
## 변수 (variables)
- scss
```scss
// 변수 (variables)
$size: 200px; // 전역변수
.container {
    position: fixed;
    top: $size;
    .item {
        $size: 100px; // 재할당 가능
        width: $size;
        height: $size;
        transform: translateX($size);
    }
    left: $size;
}
```
- css
```css
.container {
  position: fixed;
  top: 200px;
  left: 200px;
}
.container .item {
  width: 100px;
  height: 100px;
  transform: translateX(100px);
}
```
## 산술연산
산술 연산을 할때 기본적으로 단위가 동일해야함
- scss
```scss
// 산술 연산
div {
    $size: 30px;
    width: 20px + 20px;
    height: 40px - 10px;
    font-size: 10px * 2;
    // margin: 30px / 2; // 결과가 제대로 동작하지 않음
    margin: (30px / 2);
    margin-top: $size / 2;
    margin-bottom: 10px + 12px / 2;
    padding: 20px % 7;
}
```
- css
```css
div {
  width: 40px;
  height: 30px;
  font-size: 20px;
  margin: 15px;
  margin-top: 15px;
  margin-bottom: 16px;
  padding: 6px;
}
```
## 재활용 (Mixins) - @mixin
mixin(믹스인)은 반복적으로 재사용할 CSS 스타일 그룹 선언을 정의하는 기능이다.
:heavy_check_mark: 정의하기: `@mixin` 믹스인 이름 {CSS 스타일}
:heavy_check_mark: 호출하기: `@include` 믹스인 이름
```scss
//@mixin - 스타일 정의
@mixin 믹스인 이름 {
	//CSS 스타일 내용
}

//@include - 믹스인 호출
@include 믹스인 이름
```
### :pushpin: 믹스인 기본 문법
- scss
```scss
// 재활용
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    @include center;
    .item {
        @include center;
    }
}
.box {
    @include center;
}

```
- css
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
### :pushpin: 인수
함수처럼 인수를 가질 수 있다. <br>
믹스인에서 매개변수를 지정해주고 include로 인수를 사용하면 된다.
```scss
//정의하기
@mixin 믹스인 이름($매개변수) {
	//CSS 스타일 내용	
}

//호출하기
@include 믹스인 이름(인수);
```
- scss
```scss
@mixin box($size: 100px) {
    width: $size;
    height: $size;
    background-color: tomato;
}
.container {
    @include box(200px);
    .item {
        @include box;
    }
}
.box {
    @include box;
}

```
- css
``` css
.container {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: tomato;
}

.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
}
```

### :pushpin: 함수 인수 여러개 사용
- scss
```scss
@mixin box($size: 70px, $color: tomato) {
    width: $size;
    height: $size;
    background-color: tomato;
}
.container {
    @include box(200px, red);
    .item {
        @include box($color: green); 
    }
}
.box {
    @include box;
}
```
- css
```css
.container {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.container .item {
  width: 70px;
  height: 70px;
  background-color: tomato;
}

.box {
  width: 70px;
  height: 70px;
  background-color: tomato;
}
```
## 반복문(@for)
`@for`는 클래스 스타일 또는 값을 일정하게 변화하면서 일정 횟수동안 반복하여 사용할 수 있는 문법이다. <br>
자바스크립트의 for문과 유사하다. <br>
### :pushpin: 반복문 기본 문법
```scss
// through - 시작부터 종료조건까지 반복
@for $변수 from 시작 through 종료 {
	// 반복내용
};
```
- scss
```scss
@for $i from 1 through 10 {
    .box:nth-child(#{$i}) {
        width: 100px * $i;
    }
}
```
- css
```css
.box:nth-child(1) {
  width: 100px;
}

.box:nth-child(2) {
  width: 200px;
}

.box:nth-child(3) {
  width: 300px;
}

.box:nth-child(4) {
  width: 400px;
}

.box:nth-child(5) {
  width: 500px;
}

.box:nth-child(6) {
  width: 600px;
}

.box:nth-child(7) {
  width: 700px;
}

.box:nth-child(8) {
  width: 800px;
}

.box:nth-child(9) {
  width: 900px;
}

.box:nth-child(10) {
  width: 1000px;
}
```
## 함수
- scss
```scss
// 함수
@mixin center{
    display: flex;
    justify-content: center;
    align-items: center;
}

@function ratio($size, $ratio) {
    @return $size * $ratio;
}

.box {
    $width: 100px;
    width: $width;
    height: ratio($width, 1/2);
    @include center;
}
```
- css
```css
.box {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
## 색상 내장 함수
- mix()
- lighten()
- darken()
- saturate()
- desaturate()
- grayscale()
- invert()
- rgba()
## 데이터 종류
- scss
```scss
$number: 1;
$string: bold;
$color: red;
$boolean: true;
$null: numm;
$list: orange, royalblue, yellow; // 배열 형태로 가지고 있음
$map: (
  o: orange;
  r: royalblue,
  y: yellow
);
.box {
  width: 100px;
  color: red;
  position: relative;
}

```
- css
```css
.box {
  width: 100px;
  color: red;
  position: relative;
}
```
## 반복문 @each
