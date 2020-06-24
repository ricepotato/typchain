# typechain

## typescript 설치

아래 명령어 실행해서 global 로 설치

`yarn global add typescript ` 

설치하면 tsc 명령어를 사용할 수 있게 됨.


## typescript compile

tsc 명령 사용. tsc 를 실행하면 index.ts 를 index.js 로 컴파일함

tsconfig.json 에서 어떤 파일을 compile 할지 지정할 수 있음 ("include" list 에 지정)

## 실행

yarn start 로 실행

package.json 에 script 추가.

start 하기 전에 먼저 ts 파일을 js 로 컴파일 해야 함. 

따라서 prestart 에 tsc 명령을 수행하고 나서 index.js 파일을 node 로 실행.