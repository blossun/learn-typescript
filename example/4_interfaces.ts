// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const seho: User = { name: 'hi', age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}
getUser(seho);

// 함수의 전체 타입(스펙(구조))에 사용하는 경우
// 협업 시 미리 함수 구조를 정해서 인터페이스로 잡아놓고 구현을 진행해나간다.
interface SumFunction {
  (a: number, b: number): number; // number 타입의 인자 2개를 받아서 number 타입을 반환한다.
}
let sum: SumFunction;
sum = function (num1: number, num2: number): number { //앞서 SumFunction에 정한 규칙(스펙)에 따라 이에 맞는 형태의 function을 구현해야 한다.
  return num1 + num2;
};

// sum = function (num1: number, num2: string): number { //SumFunction 규칙과 다르게 string으로 받는 코드... return 타입이 달라져서 오류가 난다.
//   return num1 + num2;
// };

// 인덱싱
// 배열의 인덱싱에 사용하는 경우
interface StringArray {
  [index: number]: string; //속성 이름이 정해져있지 않고, StringArray를 사용할 때마다 속성이름을 임의로 부여해서 사용할 수 있는 방식
}
let stringArray: StringArray = {[0]:'original'};
stringArray[0] = 'hi';
// arr[1] = 10; //StringArray에 들어가는 값의 타입이 string으로 정의돼있기 떄문에 number 타입의 값을 할당할 수 없다.
console.log("stringArray => " + stringArray[0])

// 딕셔너리 패턴 (유용)
// 다음 obj 형태의 데이터를 받는 인터페이스를 정의
var obj = {
  sth: /abc/
}

interface StringRegexDictionary {
  // [sth를 받는 속성의 이름: 속성의 타입]: 값타입
  // RegExp : ts에서 제공하는 정규표현식 생성자같은 예약어
  [key: string]: RegExp;
}

var dictionary: StringRegexDictionary = {
  // sth: /abc/
  // cssFile: 'css' //오류 - 오른쪽 값으로 정규표현식 타입이 와야하는데 문자열을 넣으려고 한다. 할당 불가
  cssFile: /\.css$/, // .css 확장자로 끝나는 파일
  jsFile: /\.js$/,
}
// dictionary['htmlFile'] = 'html' //타입 오류 할당 불가

// 타입추론 - ts가 타입을 알아서 정의해준다.
// 위처럼 사용하면 dictionary의 key 값들을 모아서 forEach를 돌리면 반복문 안에 들어오는 값이 string 타입으로 정의가 된다.
Object.keys(dictionary).forEach(function (value) { //value의 타입이 string임을 알 수 있다.
  console.log("value => " + value + " type : " + typeof value)
})


// 인터페이스 확장
// (OOP의 상속, JS의 prototype)
interface Person {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능 ( age?: number; )
}
interface Developer extends Person { // extends 키워드 사용
  language: string;
}
// const zoo: Developer = { language: 'ts' }; //오류 - 상속 받은 인터페이스 속성도 값을 넣어줘야한다.
const joo: Developer = { name: 'joo', age: 20, language: 'ts' };

console.log("sum => " + sum(1, 2));
console.log("인터페이스 확장 : joo => ", joo);