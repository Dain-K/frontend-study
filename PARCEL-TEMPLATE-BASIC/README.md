# :peach: parcel-bundler
<details>
<summary> :bookmark_tabs: 프로젝트 생성  </summary>
<div markdown="1">
 
## 프로젝트 생성
### :bulb: npm 설치하기
```bash
npm init -y
```
### :bulb: 의존성 추가
```bash
npm i -D parcel-bundler
```
</div>
</details>

<details>
<summary> :bookmark_tabs: favicon.ico 만들기  </summary>
<div markdown="1">

## favicon.ico 만들기
### :bulb: 사이트 접속
[ico converter](https://www.icoconverter.com/)
### :one: Image file
파일 선택하여 원하는 이미지(.png, .jpeg) 첨부
### :two: Sizes
32 pixels 선택
### :three: Bit depth
32 bits 선택
### :four: Convert
### :five: 프로젝트 이미지 삽입
직접 dist 파일에 넣는 것이 아니라 자동으로 파일에 삽입되도록 해야한다.
- [parcel plugin static files copy](https://www.npmjs.com/package/parcel-plugin-static-files-copy) 검색 

### :six: 의존성 모듈 설치
터미널 창에 아래의 코드 입력 후 의존성 설치
```bash
npm i -D parcel-plugin-static-files-copy
```
### :seven: package.json 코드 입력
아래의 코드를 작성하면 static 이라는 폴더를 parcel 패키지가 `dist 폴더` 에 생성해준다.
```json
    "staticFiles": {
        "staticPath": "static"
    }
```
### :eight: favicon.ico 이동
`static` 폴더 안으로 이동시켜준다.
### :nine: npm run dev
</div>
</details>


<details>
<summary> :bookmark_tabs: Autoprefixer </summary>
<div markdown="1">

## 공급 업체 접두사 (Vender Prefix)
브라우저 제조업체마다 지원되는 CSS가 다르기 때문에 각 브라우저에 필요한 접두사를 추가해주어야한다. <br>
하지만 공급업체에 맞게 속성을 일일이 추가하는 것은 사실상 어렵다. <br>
그러므로 좀더 간편하게 코드를 `자동으로` 추가할 수 있는 패키지를 사용하고자 한다.
### :one: 의존성 모듈 설치
```bash
$ npm i -D postcss 
$ npm i -D autoprefixer
```
### :two: package.json 코드 입력
`browserslist` 옵션: 현재 npm 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도이다. <br>
그 명시를 Autoprefixer 패키지가 활용하게 된다.
```json
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
```
### :three: 파일 생성
`.postcssrc.js` 파일을 생성한다. <br>
파일 이름 앞에 `.`이 있는 것은 옵션이나 숨김파일을 의미한다. <br>
- 브라우저 환경에서 동작할 경우 : ESM
- node.js에서 동작할 경우: CommonJS
```js
// ESM
// CommonJS

// import
require()

// export
module.exports
```
위 파일은 node.js 에서 동작하므로 이에 맞게 코드를 작성해주어야 한다.<br>
아래의 코드를 추가한다.
```js
// ESM
// CommonJS

// import autoprefixer from 'autoprefixer' 
const autoprefixer = require('autoprefixer') // autoprefixer 패키지 가져오기

// export {
//     plugin: [
//         autoprefixer
//     ]
// }
module.exports = {
    plugin: [
        autoprefixer
    ]
}
```
### :four: 작동하는지 확인하기
scss 파일에 `display: flex`를 추가하고 개발자 도구를 열어 확인하면 다른 코드들이 추가된 것을 확인할 수 있다.
</div>
</details>


<details>
<summary> :bookmark_tabs: babel </summary>
<div markdown="1">

## babel 
최신 버전 자바스크립트(ES6, ES7, ES8)에서 동작하지만 구형 버전(ES5)에서 동작하지 않을 수 있다. <br>
`BABEL`을 통해서 구형 브라우저에서도 동작할 수 있도록 최신 버전의 코드를 구형 버전의 코드로 변환할 수 있다. <br>
이를 프로젝트에 적용할 수 있다.
</div>
</details>
