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


<details>
<summary> :bookmark_tabs: 코드로 보는 css와 scss  </summary>
<div markdown="1">

## css와 scss 차이
scss를 작성하면 css 파일이 dist 디렉토리 안에 자동으로  <br>
:seedling: scss
```scss
$color: royalblue;
.container {
    h1 {
        color: $color;
    }
}
```
:seedling: css
```css
.container h1 {
  color: royalblue;
}
```
</div>
</details>



<details>
<summary> :bookmark_tabs: 주석  </summary>
<div markdown="1">

## scss 주석
`//` 와 `/**/` 사용 가능 <br>
:seedling: scss
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
:seedling: css
```css
.container h1 {
    color: royalblue;
    /* background-color: orange; */
}
```

</div>
</details>



<details>
<summary> :bookmark_tabs: 중첩(Nesting)  </summary>
<div markdown="1">

## 중첩 with SassMeister
상위 선택자의 반복을 피하고 좀 더 편리하게 복잡한 구조를 작성할 수 있음 <br>
:seedling: scss
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
:seedling: css
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
자식 요소인 것을 명확히 표시하기 <br>
:seedling: scss
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
:seedling: css
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
</div>
</details>


<details>
<summary> :bookmark_tabs: 상위 선택자 참조(Ampersand)  </summary>
<div markdown="1">

## 상속(부모), 선택자 참조
`&` 기호 사용 <br>
:seedling: scss
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
:seedling: css
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
& 키워드가 참조한 상위 선택자로 치환되는 것이기 때문에 다음과 같이 응용할 수도 있음 <br>
:seediling: scss
```scss
.fs{
    &-small { font-size: 12px;}
    &-medium { font-size: 14px;}
    &-large { font-size: 16px;}
}
```
:seediling: css
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
</div>
</details>

<details>
<summary> :bookmark_tabs: 중첩된 속성  </summary>
<div markdown="1">

## 중첩된 속성
네임스페이스가 동일할 때 가지는 속성들을 다음과 같이 사용할 수 있음 <br>
:seedling: scss
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
:seedling: css
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

</div>
</details>

<details>
<summary> :bookmark_tabs: 변수 (variables)  </summary>
<div markdown="1">

## 변수 (variables)
반복적으로 사용되는 값을 변수로 지정<br>
:seedling: scss
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
:seedling: css
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
</div>
</details>

<details>
<summary> :bookmark_tabs: 여러 파일 가져오기 @import  </summary>
<div markdown="1">

`@import`로 외부에서 가져온 SASS 파일은 모두 단일 CSS 출력 파일로 병합됨 <br>
또한, 가져온 파일에 정의된 모든 변수 또는 Mixins 드을 주 파일에서 사용할 수 있음 <br>
하나의 `@import` 로 여러 파일을 가져올 수도 있음 <br>
<br>
파일 이름은 `,`로 구분 <br>
:seedling: scss

```scss
@import "header", "footer"; 
```

</div>
</details>


<details>
<summary> :bookmark_tabs: 산술연산 (Operations)  </summary>
<div markdown="1">

## 산술연산
기본적인 연산 기능을 지원 <br>
레이아웃 작업 시 상황에 맞게 크기를 계산 하거나 정해진 값을 나눠 작성할 경우 유용<br>
산술 연산을 할때 기본적으로 단위가 동일해야함
:seedling: scss

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
:seedling: css
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
### :pushpin: 상대적 단위 연산
일반적으로 절대값을 나타내는 `px` 단위로 연산을 한다. <br>
하지만 상대적 단위 (`%`, `em`, `vw` 등)의 연산의 경우 `CSS calc()` 로 연산해야 한다.
:seedling: scss
```scss
  width: 50% - 20px;  // 단위 모순 에러(Incompatible units error)
  width: calc(50% - 20px);  // 연산 가능
```
</div>
</details>


<details>
<summary> :bookmark_tabs: 재활용 (Mixins) - `@mixin` </summary>
<div markdown="1">

## 재활용 (Mixins) - @mixin
mixin(믹스인)은 반복적으로 재사용할 CSS 스타일 그룹 선언을 정의하는 기능이다. <br>
:heavy_check_mark: 정의하기: `@mixin` 믹스인 이름 {CSS 스타일}<br>
:heavy_check_mark: 호출하기: `@include` 믹스인 이름 <br>
:seedling: 사용 틀
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
</div>
</details>

<details>
<summary> :bookmark_tabs: 반복문 - `@for` </summary>
<div markdown="1">

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
:seedling: scss
```scss
@for $i from 1 through 10 {
    .box:nth-child(#{$i}) {
        width: 100px * $i;
    }
}
```
:seedling: css
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
</div>
</details>

<details>
<summary> :bookmark_tabs: 함수 </summary>
<div markdown="1">

## 함수
:seedling: scss
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
:seedling: css
```css
.box {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
</div>
</details>

<details>
<summary> :bookmark_tabs: 색상 내장 함수 </summary>
<div markdown="1">

## 색상 내장 함수
- mix()
- lighten()
- darken()
- saturate()
- desaturate()
- grayscale()
- invert()
- rgba()
</div>
</details>

<details>
<summary> :bookmark_tabs: 데이터 종류 </summary>
<div markdown="1">

## 데이터 종류
:seedling: scss
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
:seedling: css
```css
.box {
  width: 100px;
  color: red;
  position: relative;
}
```
</div>
</details>

<details>
<summary> :bookmark_tabs: 반복문 @each </summary>
<div markdown="1">

:seedling: scss
```scss
$number: 1;
$string: bold;
$color: red;
$boolean: true;
$null: numm;
$list: orange, royalblue, yellow;
$map: (
    o: orange,
    r: royalblue,
    y: yellow
);
@each $c in $list {
    .box {
        color: $c;
    }
}
```
:seedling: css
```css
.box {
  color: orange;
}

.box {
  color: royalblue;
}

.box {
  color: yellow;
}
```

:seedling: scss
```scss
@each $k, $v in $map {
    .box-#{$k} {
        color: $v;
    }
}
```
:seedling: css
```css
.box-o {
  color: orange;
}

.box-r {
  color: royalblue;
}

.box-y {
  color: yellow;
}
```
</div>
</details>

<details>
<summary> :bookmark_tabs: 재활용 @content </summary>
<div markdown="1">

선언된 Mixin에 `@content` 이 포함되어 있다면 해당 부분에 원하는 스타일 블록 을 전달할 수 있음.<br>
이 방식을 사용하여 기존 Mixin이 가지고 있는 기능에 선택자나 속성 등을 추가
:seeding: 사용 틀
```scss
@mixin 믹스인이름() {
  스타일;
  @content;
}

@include 믹스인이름() {
  // 스타일 블록
  스타일;
}
```
:seedling: scss
```scss
@mixin left-top {
    position: absolute;
    top: 0;
    left: 0;
    @content;
}
.container {
    width: 100px;
    height: 100px;
    @include left-top;
}
.box {
    width: 200px;
    height: 300px;
    @include left-top{
        bottom: 0;
        right: auto;
        margin: auto;
    }
}
```
:seedling: css
```css
.container {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
}

.box {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: auto;
  margin: auto;
}
```
</div>
</details>
