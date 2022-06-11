// 이넘(Enum)
enum Avengers {
  Capt,
  Ironman,
  Hulk,
}
const myHero = Avengers.Capt;

// 타입 종류
// any - string, number, array등 모든 타입을 통칭. 실행하는 시점에 타입을 구분해서 할당(동적)
// void - 반환값이 없다는 것을 명시적으로 지정

// any
let a: any = 'hi';
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 추정 (type assertion)
let str = '이건 문자열 타입이 됩니다.';

let num: number;
num = 'str' as any;

const divElement = document.querySelector('#app');
divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;
