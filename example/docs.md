# JS의 클래스 
## prototype
* 기존 타입을 활용해 확장한다. (상속)

<img width="487" alt="image" src="https://user-images.githubusercontent.com/35985636/173220858-f2268877-1f27-415e-b070-bb1cfbf9e758.png">

> [MDN 자바스크립트 프로토타입과 상속](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

## 프로토타입의 활용 사례

> [MDN Object 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)

객체를 생성하면 기본적으로 `Object.xxxx()` Object가 제공하는 API를 사용할 수 있다.
객체 구조를 살펴보면 기본적으로 `__proto__`에 최상위 프로토타입인 `Object`를 상속받고 있다.
그래서 Object에 정의된 메서드나 속성들을 사용할 수 있다.

<img width="486" alt="image" src="https://user-images.githubusercontent.com/35985636/173221056-580770c1-a824-4098-af8c-84505257b8b6.png">

### Built-in Javascript API (Javascript Native API)
* Array를 생성하면 상위 프로토타입이 Array로 지정돼있어서 Array에서 제공되는 기본 메서드들을 사용할 수 있다.

<img width="479" alt="image" src="https://user-images.githubusercontent.com/35985636/173221169-aaa6ba45-aa5c-4a83-ab05-6a693aefdac3.png">

# 프로토타입과 클래스의 관계
* class 키워드는 기존 기능을 쉽게 사용하도록 제공된 Syntax Sugar이다.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 동일
function Student(name, age) {
    this.name = name;
    this.age = age;
}
```

기존에 ES6 이전에 제공했던 문법을 가지고도 prototype과 같은 상속의 개념을 생성자 함수로 구현할 수 있었다.
객체지향 개발자들이 JS를 좀 더 사용하기 쉽도록 `class` 기반의 문법을 제공했던 것이다.
class 문법을 바벨을 돌려 확인해보면 실질적으로는 생성자 함수를 사용한다.
프로토타입 기반으로 코딩하는 언어의 특성은 class로 문법이 바꼈다고 바뀐것이 아니다.
기존의 프로토타입 기반의 상속이 계속 유지된다.
class를 사용하지 않고도 생성자 함수로 충분히 만들어 나갈 수 있다.

> 예제 코드 : class.js

# 타입스크립트의 클래스 문법
> 예제 코드 : 5_classes.ts

---

# 제네릭

> [제네릭 교안](https://joshua1988.github.io/ts/guide/generics.html)

## 제네릭 실전 예제 살펴보기

타입을 정의했을 때 코드를 보면서, 제네릭을 적용하기 전/후를 비교

> 예제 코드
> - 8_generics.ts
> - dropdown-generic.html
> - dropdown-generic.ts

`dropdown-generic.ts` 에는 `dropdown-generic.html` 의 화면에서 보여주는 select 박스의 option에 들어가는 데이터들을 가지고 처리한다. 
(실제로 서버로 부터 받아오는 정보를 여기서 가공)

- `createDropdownItem(item)` 동작 예
  <img width="848" alt="image" src="https://user-images.githubusercontent.com/35985636/173222909-848b0f36-8c48-460b-be52-317c5a926ba3.png">

- 제네릭을 사용하지 않고 타입을 정의한 예제 : `dropdown-generic_add-type.ts`
- 제네릭 적용 예제 : `dropdown-generic_apply-generic.ts`

---
# 타입 추론

> 예제 코드 : 9_type-inference.ts

## Typescript Language Server 소개
- [VSCode 타입스크립트 소개 문서](https://code.visualstudio.com/docs/languages/typescript#_code-suggestions)
- [VSCode Language Server Extension 가이드](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide)
- [Language Server 소개 사이트](https://langserver.org/)
- [Language Server Protocol 개요](https://docs.microsoft.com/ko-kr/visualstudio/extensibility/language-server-protocol?view=vs-2019)

---
# 타입 단언(Type Assertion)

> 예제 코드
> - 9_type-inference.ts
> - quiz/2_address-book/src/index.ts -> DOM API에 적용한 예제

```ts
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
```

---
# 타입 가드

> 예제 코드 : 12_type_guard.ts

```ts
// ----------------------------------------------------------------------------------------
// # 타입 가드
// # 타입 가드

// # 타입 가드를 적용할 수 있는 예제
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {name:'Solar', age: 30, skill: "Iron Making"}
}

var solar = introduce();
console.log("solar => ", solar); //{ name: 'Solar', age: 30, skill: 'Iron Making' }
// console.log(solar.skill); //error - 분명 skill 속성을 정의해서 return했는데 접근할 수 없다.

// 접근을 위해 타입 단언을 사용할 수 있다.
if ((solar as Developer).skill) {
    var skill = (solar as Developer).skill;
    // 여전히 여기서 solar.skill 로 바로 접근할 수 없다. 공통된 속성만 접근 가능하다.
    console.log("skill => ", skill); //skill =>  Iron Making
} else if ((solar as Person).age) {
    var age = (solar as Person).age;
    console.log("age => ", age);
}

// # 타입 가드 적용

// 타입 가드 정의
// 보통 `is` 키워드를 많이 쓴다. "해당 타입이 맞니?"
// target(넘겨받은 파라미터)이 Developer 타입인지를 구분하는 키워드를 is로 선언했다.
// target이 isDeveloper 내부 로직을 통과하고 나면 Developer인지 아닌지 true/false값으로 반환해줘서 구분할 수 있게 된다.
function isDeveloper(target: Developer | Person): target is Developer {
    // taget에 skill 속성이 있으면 Developer라고 간주한다.
    return (target as Developer).skill !== undefined;
}

// 타입가드 사용
if (isDeveloper(solar)) {
    solar.skill //바로 solar.skill 속성에 접근할 수 있게 된다. (코틀린의 smart cast 같은 로직이되었다.)
} else {
    solar.age
}
```
# 타입 호환(Type Compatibility)

> 예제 코드 : 13_type_compatibility.ts, type-comp.ts

- [타입 호환이란?](https://joshua1988.github.io/ts/guide/type-compatibility.html)

타입 호환이란 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미합니다. 

---
# 타입 모듈화

- [타입스크립트의 모듈화](https://joshua1988.github.io/ts/usage/modules.html)

1. `ts-modules` 폴더 생성
2. `ts-modules` 폴더 내에 `app.ts` 파일 생성
3. `Todo` 인터페이스를 정의하고, `Todo` 타입의 `item` 변수를 하나 생성
    동일한 파일내에서 사용가능했다.
4. 실제로는 특정 타입을 여러 파일에서 나눠쓰게 되면서 한 곳에 분리해서 관리하려는 노력이 필요하다.
    => 가독성, 유지보수성이 좋아진다.
    타입의 정의를 별도의 하나의 파일에 모아서 정의하고 모듈로 export, import로 다루는 것이 좋다.
    - 타입 정의 부분을 별도의 `types.ts` 파일로 분리해낸다.

```ts
// app.ts
import {Todo} from './types'

var item: Todo = {
  title: '할일1',
  checked: true,
}
```

```ts
// types.ts
export interface Todo {
  title: string;
  checked: Boolean;
}
```

## 자바스크립트의 모듈 시스템

- [ES6 Modules](https://joshua1988.github.io/vue-camp/es6+/modules.html)
- [자바스크립트 모듈화 역사](https://d2.naver.com/helloworld/12864)




