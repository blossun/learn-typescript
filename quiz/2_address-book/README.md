# address-book 프로젝트 실습 방법

전화번호 등록, 검색 등의 기능을 제공한다.
- 기존 메서드에 타입을 정의해나가면 된다.
- 비동기처리했을 때 타입에 대한 처리 고민

1. 노드 버전 확인 - 10이상이어야 함

   `node -v`
2. 패키지 설치

   (터미널 2_address-book 디렉토리로 이동)

   `npm i`

   (또는 Intellij에서 `package.json` 우클릭 > Run `npm install` 클릭)

   설치 후 `node_modules` 폴더 생성된 것 확인
3. `src/index.tx` 파일 내용 확인
4. `tsconfig.json` 파일의 `"noImplicitAny"` 값을 `true`로 변경
   그러면 `src/index.tx` 파일에서 문법 오류 부분을 IDE가 알려준다. 이를 해결하지 않으면 컴파일이 되지 않도록 하는 옵션이다.
   이를 다 해결하면 된다.
5. 컴파일러 옵션 추가
   ```
   "strict": true, #타입 스크립트의 엄격한 타입 검사
   "strictFunctionTypes": true
   ```
6. `.eslintrc.js`의 옵션 주석 처리
   ```
    // '@typescript-eslint/no-explicit-any': 'off',
    // "@typescript-eslint/explicit-function-return-type": 'off',
   ```   


