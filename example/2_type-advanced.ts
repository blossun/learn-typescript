// # 이넘(Enum)
// 1. 숫자형 이넘
// 별도의 값을 지정하지 않으면 숫자값으로 취급한다. (처음 지정한 숫자(default:0) 부터 1씩 증가하면서 값이 부여된다.
enum Avengers {
  Capt,
  Ironman,
  Hulk,
}
const myHero = Avengers.Capt;
console.log(myHero) //0

// 2. 문자형 이넘
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키
console.log(Shoes.Adidas) // 아디다스

// # 이넘 활용 예제
// (before) 이넘을 사용하지 않는 경우
function askQ(answer: string) { // string 타입의 인자
  if (answer === 'yes') { //문자열 비교
    console.log('정답입니다.')
  }
  if (answer === 'no') {
    console.log('오답입니다.')
  }
}
askQ('예스'); // O - 모든 문자열을 인자로 넘길 수 있다.
askQ('y'); // O
askQ('yes'); // O

// (after) 이넘을 활용하도록 리팩토링
enum Answer {
  Yes = 'Y',
  No = 'N'
}
function askQuestion(answer: Answer) { //Answer 이넘 타입의 인자
  if (answer === Answer.Yes) { //이넘 타입 비교
    console.log('정답입니다.')
  }
  if (answer === Answer.No) {
    console.log('오답입니다.')
  }
}
// askQuestion('예스'); // X - 모든 문자열을 인자로 넘길 수 없다.
// askQuestion('y'); // X
// askQuestion('yes'); // X
askQuestion(Answer.No); // O Answer 이넘에서 제공하는 데이터만 인자로 넘길 수 있다.


// # 타입 종류
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

// const divElement = document.querySelector('#app');
// divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;
