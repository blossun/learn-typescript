# todo 프로젝트 실습 진행 방법

1. 노드 버전 확인 - 10이상이어야 함
    
    `node -v`
2. 패키지 설치
    
   (터미널 1_todo 디렉토리로 이동)
    
    `npm i`

   설치 후 `node_modules` 폴더 생성된 것 확인
3. `src/index.tx` 파일 내용 확인
4. `tsconfig.json` 파일의 `"noImplicitAny"` 값을 `true`로 변경

   그러면 `src/index.tx` 파일에서 문법 오류 부분을 IDE가 알려준다. 이를 해결하지 않으면 컴파일이 되지 않도록 하는 옵션이다.
   이를 다 해결하면 된다.

---
# filter 예제 및 JS 파일 실행 확인
`filter.js`에 작성한 filter 함수 예제를 실행해서 결과 확인
```shell
learn-typescript/quiz/1_todo/src >
> node filter.js
[ { gender: 'female', name: 'sarah' } ]
```

node 란?
브라우저를 실행하지 않고 js를 실행할 수 있는 환경

# TS 파일 실행
### 🌈 ts-node Install
터미널에 아래 명령어 실행
```shell
npm install -g ts-node
```

### 🌈  TypeScript 실행
터미널에 아래 명령어 실행
```shell
ts-node 타입스크립트파일명.ts

# js 파일 실행
node 자바스크립트파일명.js
```

```shell
> ts-node index.ts 
[
  { id: 1, title: '안녕', done: false },
  { id: 2, title: '타입', done: false },
  { id: 3, title: '스크립트', done: false },
  { id: 4, title: '아이텝4', done: false },
  { id: 5, title: '아이템5', done: false }
]
```

 