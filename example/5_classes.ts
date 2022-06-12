// ES5 (JS)
/*
function Student(name, age) {
  this.name = name;
  this.age = age;
}
const hulk = new Student('Banner', 33);
*/

// ES6 + 타입스크립트
class Person {
  private name: string; //변수의 유효범위를 사용할 수 있다. (private, protected, public)
  public age: number;
  readonly log: string; //readonly : 값을 접근(읽기)만 할 수 있고 변경할 수 없다.

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.log = name + '이 생성되었습니다.'
  }
}
const solar = new Person('Steve', 100);
console.log('class ts => ', solar)
// console.log('name => ', solar.name) // X - 접근 불가
console.log('age => ', solar.age) // O
// solar.log = '로그 남기기'; // X - 수정 불가
console.log('log => ', solar.log) // O


// NOTE: 위 코드의 컴파일 결과 확인
// https://www.typescriptlang.org/play/index.html?target=1#code/MYGwhgzhAEAKCmAnCB7AdtA3gKGn6aYAtvAFzQQAuiAlmgOYDcu+Y9ZBArkQEZLMs8wdFUSdglFIgAUhEuVF16AGmhsOabn0QBKLIPx5KACxoQAdHPjQAvAWLxmhwybPn1tteyf4AvtgMAExROHhB4AEF2aT0cZ3xXCw87RPd2aAAqaAAmHzx-XyA
