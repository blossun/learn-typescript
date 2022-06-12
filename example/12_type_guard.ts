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

