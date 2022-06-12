// # 제네릭을 사용하지 않은 경우
// - 함수 중복 선언 단점
//      : 인자가 number인 타입과 string[] 타입인 함수를 2개 만들어야 한다.
// - 또는 any 타입, union 타입을 사용
// - 코드 가독성, 유지보수성이 좋지 않다.
function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// ------------------------------------------------------------------------------------
// # 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
// 함수를 호출하는 시점에, 넘겨주는 인자의 타입도 함께 넘기게 된다.
// 실제 호출되는 형태 (프리뷰) : function getValue<"hi">(value: "hi"): "hi"
let getStringValue = getValue('hi').toLocaleUpperCase();
let getNumberValue = getValue(100).toLocaleString();
console.log('getStringValue => ', getStringValue); // HI
console.log('getNumberValue => ', getNumberValue); // 100
// 타입 명시
// 프리뷰 : function getValue<string>(value: string): string
getStringValue = getValue<string>('hi').toLocaleUpperCase();
// 프리뷰 : function getValue<number>(     value: number): number
getNumberValue = getValue<number>(100).toLocaleString();

// ------------------------------------------------------------------------------------
// # 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };
// const tony: Developer<number> = { name: 'tony', age: '백살' }; // age의 타입으로 number를 정의했으므로 string 타입을 넣으려면 오류가 난다.

// ------------------------------------------------------------------------------------
// # 제네릭 타입 제한 1 - 구체적인 타입
// function getNumberAndArray01<T>(value: T) { // 리턴타입 T 생략가능 - 명시하지 않아도 타입추론할 수 있다.
function getNumberAndArray01<T>(value: T): T {
  // value.length; // X - value로 들어오는 값의 타입을 알 수 없기 때문에 Array에서 제공하는 langth api를 사용할 수 없다.
  return value;
}

// 제네릭에도 들어오는 값이 배열이다라는 추가적인 정보를 줄 수 있다.
// 배열 타입이 올 것이라고 힌트를 줘서 Array에서 제공하는 length, forEach를 사용할 수 있다.
function getNumberAndArray02<T>(value: T[]): T[] {
  value.length; // O
  console.log('value length => ', value.length);
  value.forEach(function (text) {
    console.log(text);
  });
  return value;
}

console.log('getNumberAndArray01("hi") => ', getNumberAndArray01('hi'));
console.log('getNumberAndArray02([\'hi\', \'solar\']) => ', getNumberAndArray02(['hi', 'solar']));

// ------------------------------------------------------------------------------------
// # 제네릭 타입 제한 2 - 정의된 타입으로 타입을 제한하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length; // extends LengthType 으로 타입을 제한했기 때문에 text에는 length가 있음을 보장할 수 있다.
  console.log('text.length =>', text.length);
  return text;
}

logTextLength('a'); // O
// logTextLength(10); // X - 숫자 10에는 기본적으로 length가 내부 속성으로 제공하지 않기 때문에 인자로 줄 수 없다.
logTextLength({length: 10})// O - 객체도 가능, length 속성만 있으면 된다.
// logTextLength({name: 'solar'})// X - length 속성이 정의되어있지 않다.

// ------------------------------------------------------------------------------------
// # 제네릭 타입 제한 3 - keyof
// 타입(인터페이스)의 키캆에 해당하는 값만 받도록 제한
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}

// ShoppingItems 인터페이스에 정의한 속성만 받도록 제한한다.
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
  console.log('option type is not name, price, address, stock')
  return option; //없으면 오류
}
// getAllowedOptions('nothing'); // X - ShoppingItems 키값에 해당하는 값만 넘겨줄 수 있다.
// (아래 프리뷰) function getAllowedOptions<"name">(option: "name"): "name"
const a = getAllowedOptions('name'); // option type is string
console.log(a.toUpperCase()); // Name