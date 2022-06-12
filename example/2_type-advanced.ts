// ----------------------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------------------
// # 타입 단언(추정) (type assertion)
// ts보다 개발자가 타입을 더 잘 알고 있다.
// ts에게 개발자가 정의한 타입으로 간주하라고 지정한다.
var value; //이 때, value에게 값을 할당하지 않았기 때문에 타입 추론을 통해 var a: any 라고 나온다.
//중간에 value에 number도 넣었다가 string도 넣었다. 최종 value에 들어간 값의 타입은 string임을 개발자가 알고있다.
value = 20;
value = 'hi';
var b = value; //이렇게만 적으면 ts는 value의 타입을 추론하지 못해 var b: any 라고 해석한다.
// 이때 value는 string 이라는 것을 단언할 수 있다.
var c = value as string; //var c: string //c의 타입이 string으로 해석된다.

let str = '이건 문자열 타입이 됩니다.';

let num: number;
num = 'str' as any;

// - 보통 DOM API를 조작할 때 타입 단언을 많이 사용한다.
// DOM API - web page의 태그 정보에 접근해서 조작할 수 있는 API
const divElement = document.querySelector('div'); //(타입 추론) const divElement: HTMLDivElement | null
//보통 특정 시점에 지정한 selector가 있는지 확신할 수 없기 떄문에 이를 확인하는 if문 내에서 처리하는 것이 일반적이다.
if (divElement) {
    divElement.innerHTML; //InnerHTML.innerHTML: string
}

// 위의 divElement는 HTMLDivElement | null 타입이 된다.
// 다음 코드 처럼 무조건 null이 아니고 Element 임을 보장하는 타입단언을 선언하면 if문 없이 바로 사용할 수 있다.
const appElement = document.querySelector('#app') as Element; //const appElement: Element
appElement.innerHTML; //if문으로 존재하는지 확인하지 않고 바로 사용할 수 있다.


const empty = document.querySelector('#app') as null;
// empty.innerHTML; //X -> 위에서 empty 타입이 null임을 단언했기 때문에 innerHTML을 사용할 수 없다.
