// # Union 타입을 사용하지 않았을 경우
// 다음과 같이 logMessage의 값으로 string과 number를 모두 받고 싶다면?
// any 타입으로 받아야 한다.
// function logMessage(value: string) {
//   console.log(value);
// }
// function logMessage(value: number) {
//   console.log(value);
// }
// function logMessage(value: any) {
//   console.log(value);
  // value 타입이 any로 되어있기 때문에 코드가 읽히는 시점
  // 즉, ts가 타입을 추론하는 시점에는 타입을 정의할 수 없어서
  // number나 string의 api나 속성들을 확인할 수 없다.
// }

// # Union 타입
// |
// - 사용할 수 있는 타입을 늘릴 수 있다.
// - `any` 보다는 명시적임
// - 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 (필터링하는) 과정
function logMessage(value: string | number) {
  if (typeof value === 'string') {
    console.log('value의 타입은 string? ', typeof value)
    //여기서 바로 타입추론을 통해 value의 타입을 알 수 있고, string타입의 api나 속성들을 사용할 수 있다.
    // (smart cast를 지원해주는 것 같다.)
    // (any 타입을 사용할 경우 불가능)
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # 함수 인자로 사용 시 특징
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // O - Developer과 Person의 공통된 속성만 접근할 수 있다.
  // someone.age; // X - Developer과 Person 각각에만 선언된 속성은 접근할 수 없다.
  // someone.skill; // X
}

// # Intersection 타입 문법
// &
// 정해진 타입 모두가 될 수 있다.
// var capt: string & number & boolean; // 3가지 타입 모두가 될 수 있는 타입을 지정 (예제는 불가능)
function askSomeone2(someone: Developer & Person) { //Developer 타입이면서 Person 타입에 속하는 타입이 들어온다.
  // Develop과 Person의 모든 api와 속성을 사용할 수 있다.
  someone.name; // O
  someone.age; // O
  someone.skill; // O
}


logMessage('hello')
logMessage(100)

// askSomeone의 파라미터로 Developer객체나 Person 객체를 넘기면 된다.
askSomeone({name: '디벨로퍼', skill: '웹 개발'})
askSomeone({name: '솔라', age: 30})

// askSomeone2는 Developer와 Person 객체의 모든 속성을 가진 객체를 넘겨야 된다.
// askSomeone2({name: '디벨로퍼', skill: '웹 개발'}) // X
// askSomeone2({name: '솔라', age: 30}) // X
askSomeone2({name: '디벨로퍼', skill: '웹 개발', age: 30}) // O

