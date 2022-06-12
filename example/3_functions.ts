// 자바스크립트 함수 선언
function sum(a, b) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 매개 변수
function add(a: number, b: number) { //리턴 타입 추론, (코틀린은 문으로 쓰일 때는 리턴 타입 생략 불가)
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 반환 타입
function add2(a: number, b: number): number {
  return a + b;
}

// function add3(a: number, b: number): string {
//   return a + b; //error - Type 'number' is not assignable to type 'string'.
// }

// 함수 인자
function log(a: string) {
  console.log(a);
}
// log('a', 10); //X - 인자값으로 문자열 하나만 받는다.
log('a');

// 함수 옵셔널 파라미터(optional parameter)
function printText(text: string, type?: string) { //코틀린은 타입뒤에 물음표 형태로 표현 `type: String?`
  console.log(text);
}
printText('hi');
