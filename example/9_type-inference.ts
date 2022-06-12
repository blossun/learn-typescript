// ----------------------------------------------------------------------------------------
// # 타입 추론 기본 1

// let temp: any
let temp;

// var a: string
var a = 'a';

// var num: number
var num = 10;

// function getB(b: any): any
// function getB(b) {
//   return b;
// }

// 옵셔널 키워드
// ?
// 값이 있을 수도 있고 없을 수도 있다.
// function logA(a?: string): string
function logA(a = 'a') { //파라미터 기본값 설정 가능. 파라미터 a 값을 넘겨주지않으면 기본값을 사용
  var b = 10; //var b: number
  return a + b;
}
// 10 + '10' => 1010
console.log(logA()); //a10

// ----------------------------------------------------------------------------------------
// # 타입 추론 기본 2 - 인터페이스와 제네릭을 이용한 타입 추론 방식

interface Dropdown<T> {
  value: T;
  title: string;
}

// T에 number 타입을 넘겼기 떄문에 {value: number; title: string} 형태의 Dropdown 데이터 타입을 가지게 된다.
var items: Dropdown<number> = {
  value: 10, //(value의 타입추론) Dropdown<T>.value: number
  title: 'a'
}

// ----------------------------------------------------------------------------------------
// # 타입 추론 기본 3 - 복잡한 구조에서의 타입 추론 방식
// 인터페이스 2개 중첩
// - DetailedDropdown<T> 의 T 는 tag의 타입을 지정
// - Dropdown<T> 의 T는 Dropdown의 value 타입을 지정
// - 하나의 T 만 받기 때문에 두 tag와 value가 동일한 타입으로 지정된다.
interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
// var detailItems: DetailedDropdown<number> = { // 오류 - value와 tag의 타입을 number로 명시했는데 string 값을 넣고 있다.
var detailItems: DetailedDropdown<string> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c'
}
console.log("detailItems => ", detailItems);

// - DetailedDropdown<T, K> 의 T 는 tag의 타입을 지정
// - Dropdown<K> 의 K는 Dropdown의 value 타입을 지정
interface VeryDetailedDropdown<T, K> extends Dropdown<K> {
  description: string;
  tag: T;
}
var veryDetailItems: VeryDetailedDropdown<string, number> = {
  value: 100, //number
  title: 'a',
  description: 'b',
  tag: 'c' //string
}
console.log("veryDetailItems => ", veryDetailItems);

// ----------------------------------------------------------------------------------------
// # Best Common Type(가장 적절한 타입) 추론 방식
// 문맥을 이용한 타입 추론 방식 : https://joshua1988.github.io/ts/guide/type-inference.html#%EB%AC%B8%EB%A7%A5%EC%83%81%EC%9D%98-%ED%83%80%EC%9D%B4%ED%95%91-contextual-typing
// 타입스크립트가 코드를 어떤 타입인지 해석

// var arr: number[]
var arr = [1,2,3];

// var arr2: (number | boolean)[]
var arr2 = [1,2,true];

// 데이터들의 타입이 될 수 있는 목록을 Union으로 지정해나간다.
// var arr3: (string | number | boolean)[]
var arr3 = [1,2,true,true,'10'];


