<details>
<summary> :bookmark_tabs: 프로젝트 생성  </summary>
<div markdown="1">
## 프로젝트 시작하기
```
npm init -y
```
## 필요한 패키지 설치
```
npm i -D webpack webpack-cli webpack-dev-server@next
```
### :pushpin: webpack.config.js 파일 추가하기
webpack-dev-server을 통헤서 개발서버를 오픈하려면 파슬 번들러와 달리 구성파일을 만들어주어야 한다. <br>
파일에 직접적으로 구성 옵션을 작성해야 한다는 단점이 있다. <br>
그래서 작은 프로젝트에서 보다 규모가 있는 프로젝트에서 많이 사용된다. <br>
- webpack.config.js 는 브라우저에서 동작하는 것이 아니라 node.js에서 동작한다.
- `export` 가 아닌 `module.exports` 를 통해 내보내기를 한다.
</div>
</details>

<details>
<summary> :bookmark_tabs: entry, output  </summary>
<div markdown="1">

## webpack.config.js
### :pushpin: 코드 작성
```js
const path = require('path') // 파일 경로

module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // 절대 경로를 적어야함. __dirname : 현재 파일 경로
        path: path.resolve(__dirname, 'dist'), 
        filename: 'main.js',
        clean: true // 기본에 만들었던 파일 제거하고 만들어줌
    }
}
```
- path 와 filename 은 자동으로 생성되기 때문에 제거하여도 된다. 
### :pushpin: webpack 사이트
[webpack 사이트 접속](https://webpack.js.org)
</div>
</details>

<details>
<summary> :bookmark_tabs: plugins  </summary>
<div markdown="1">

## plugins
dist 폴더에 index.html 파일 추가하기
### :pushpin: 개발 의존성 모듈 설치
```
npm i -D
```
### :pushpin: webpack.config.js 코드 작성
```js
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'), 
        // filename: 'main.js',
        clean: true 
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플로그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        host: 'localhost'
    }
}
```
</div>
</details>

<details>
<summary> :bookmark_tabs: 정적 파일 연결  </summary>
<div markdown="1">

## 정적 파일 연결
### :pushpin: 개발 의존성 모듈 설치
```
npm i -D copy-webpack-plugin
```
### :pushpin: webpack.config.js 코드 작성
```js
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'), 
        // filename: 'main.js',
        clean: true 
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플로그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}
```
</div>
</details>

<details>
<summary> :bookmark_tabs: module  </summary>
<div markdown="1">

## module
프로젝트 스타일 추가하기
### :pushpin: 개발 의존성 모듈 설치
```
npm i -D css-loader style-loader
```
### :pushpin: webpack.config.js 코드 작성
```js
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './js/main.js',
    output: {
        clean: true 
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ // 순서 중요
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],
    devServer: {
        host: 'localhost'
    }
}
```
### :pushpin: main.js 파일에 연결
```js
import '../css/main.css'

console.log('Webpack!')
```
</div>
</details>

<details>
<summary> :bookmark_tabs: SCSS  </summary>
<div markdown="1">

## SCSS
css 기존 파일을 모두 scss 파일로 변경해준다.
### :one: 의존성 모듈 설치
```
npm i -D sass-loader sass
```
### :two: main.js 변경
```js
import '../scss/main.scss'

console.log('Webpack!')
```
### :three: webpack.config.js 코드 변경
```js
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './js/main.js',
    output: {
        clean: true 
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [ // 순서 중요
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],
    devServer: {
        host: 'localhost'
    }
}
```
### :four: main.scss 코드 작성
```js
$color--black: #000;
$color--white: #fff;


body {
    background-color: $color--black;
    h1 {
        color: $color--white;
        font-size: 40px;
    }
}
```
### :five: 확인하기
```
npm run dev
```

</div>
</details>

<details>
<summary> :bookmark_tabs: Autoprefixer(PostCSS)  </summary>
<div markdown="1">

## Autoprefixer(PostCSS)
### :one: 의존성 패키지 설치
```
npm i -D postcss autoprefixer postcss-loader
```
### :two: package.json 코드 추가
```js
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
```

### :three: .postcssrc.js 파일 생성
```js
module.exports = {
    plugin: [
        require('autoprefixer') 
    ]
}
```
</div>
</details>

<details>
<summary> :bookmark_tabs: babel  </summary>
<div markdown="1">

### :one: 의존성 패키지 설치
```
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime
```
### :two: .babelrc.js 파일 생성
```js
module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}
```
### :three: webpack.config.js 코드 추가
```js
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './js/main.js',

    output: {
        clean: true 
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}
```
### :four: babel-loader 추가 설치
```
npm i -D babel-loader
```
</div>
</details>