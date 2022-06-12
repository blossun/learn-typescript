// # 클래스 (ES6)
// JS에서의 Class의 문법, 사용이유
// ES2015 (ES6) 에서 소개된 문법
// - 인스턴스를 만들어 준다.

// class(예약어) 클래스명 { // 클래스 로직 }
class Person {
    // 클래스 로직

    // 초기화 메서드 - 인스턴스 생성 시 수행된다.
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var solar = new Person('솔라', 30); //인스턴스 생성
console.log('클래스 => ', solar);

// ES5 (JS)
// class 키워드는 기존 `생성자 함수` 기능을 쉽게 사용하도록 제공된 Syntax Sugar이다.
// 위의 class Person 을 생성할 때 실제 동작하는 코드는 다음과 같다.
// 자바 개발자와 같이 class에 익숙한 개발자들이 편하게 사용하도록 class 문법을 지원해준 것이다.
// 바벨을 돌려보면 class 키워드는 실제로 생성자 함수를 사용해서 돌아간다.
function Student(name, age) {
    this.name = name;
    this.age = age;
}
var holar = new Student('홀라', 100)
console.log('함수 => ', holar);