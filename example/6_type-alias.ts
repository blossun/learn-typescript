// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types

// # 타입을 붙일 수 있는 모든 곳에 별칭을 붙일 수 있다.
// 예제
//  - string 타입에 별칭을 줘보자
type MyString = string; //string 타입에 MyString이라는 별칭을 지정
var str: MyString = 'hello' //타입 별칭으로 타입을 사용할 수 있다.
console.log("타입 별칭 str = > ", str)

// #1 함수 타입 별칭
// function sum(a: number, b:number) {
//   return a + b;
// }
type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}

// #2
type Person = {
  name: string;
  age: number;
};

function getPerson(): Person { //리턴 타입
  var solar: Person = {
    name: '홀라',
    age: 30
  }
  return solar;
}

// #3
type Hero = {
  skill: string;
}

const capt: Hero = { 
  skill: 'throwing a shield'
}

// # 타입과 인터페이스 차이
// 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부입니다.
// 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능합니다.
// 따라서, 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천합니다.
// Type은 어느 곳이든 사용할 수 있다. 인터페이스 etc...
interface Teacher {
  name: string;
  grade: number;
}

type Student = {
  name: string;
  grade: number;
}

// Teacher, Student의 프리뷰(마우스 오버시 보여지는 창)의 차이가 있다.
var holar: Teacher = { //interface 사용
  name: '홀라',
  grade: 3
}

var solar: Student = { //type 별칭 사용
  name: '솔라',
  grade: 2
}