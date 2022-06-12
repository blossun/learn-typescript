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

> 참고 코드
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

## Typescript Language Server 소개
- [VSCode 타입스크립트 소개 문서](https://code.visualstudio.com/docs/languages/typescript#_code-suggestions)
- [VSCode Language Server Extension 가이드](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide)
- [Language Server 소개 사이트](https://langserver.org/)
- [Language Server Protocol 개요](https://docs.microsoft.com/ko-kr/visualstudio/extensibility/language-server-protocol?view=vs-2019)
