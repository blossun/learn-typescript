// # 타입 호환

// 1. 인터페이스
// `=` 의 오른쪽 값이 구조적으로 교집합이상 더 많은 값을 가지고 있을 때, 왼쪽값과 호환이 된다.
// 반대의 경우는 불가능
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer = {
  name: '개발자',
  skill: '개발'
};
var person: Person = {
    name: '솔라'
};
// developer = person; // error - Property 'skill' is missing in type 'Person' but required in type 'Developer'.

person = developer;
console.log("person = developer => ", person); // { name: '개발자', skill: '개발' }

// class도 마찬가지
// class Human {
//     name: string;
// }
// developer = new Human(); // error - Property 'skill' is missing in type 'Human' but required in type 'Developer'.

interface HumanDeveloper {
    name: string;
    skill: string;
}

var humanDeveloper: HumanDeveloper = {
    name: '휴먼',
    skill: '일하기'
}

developer = humanDeveloper;
console.log("developer = humanDeveloper => ", developer); //{ name: '휴먼', skill: '일하기' }

// ----------------------------------------------------------------------------------------
// 2. 함수
// `=` 왼쪽의 함수가 구조적으로 (오른쪽의 파라미터를 포함해) 더 큰 범위를 가지면 오른쪽 함수와 호환된다.
// 반대의 경우는 불가능
var add = function (a: number) {
    // ...
}
var sum = function (a: number, b: number) {
    // ...
}
sum = add; // ok.
// add = sum; // no. Type '(a: number, b: number) => void' is not assignable to type '(a: number) => void'.

// ----------------------------------------------------------------------------------------
// 3. 제네릭
interface Empty<T> {
    // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; //ok
empty2 = empty1; //ok

// - 인터페이스 내에 제네릭에 의해서 어떠한 값이 바뀌는 경우는 호환되지 않는다.
interface NotEmpty<T> {
    data: T;
}

// 동일한 속성이 있지만 실제 구조적인 타입의 차이가 생기게 된다.
// string 타입 !== number 타입
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2; //no. Type 'NotEmpty<number>' is not assignable to type 'NotEmpty<string>'. Type 'number' is not assignable to type 'string'.
