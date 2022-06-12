// 제네릭을 사용하지 않은 경우, value의 타입이 늘어날 때마다 정의해주는 interface도 늘어난다.
interface Email {
    value: string;
    selected: boolean;
}

const emails: Email[] = [
    {value: 'naver.com', selected: true},
    {value: 'gmail.com', selected: false},
    {value: 'hanmail.net', selected: false},
];

interface ProductNumber {
    value: number;
    selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
    {value: 1, selected: true},
    {value: 2, selected: false},
    {value: 3, selected: false},
];

// value 타입이 추가될 수록 타입 정의를 위한 인터페이스도 늘어난다.
interface TrueFalse {
    value: boolean;
    selected: boolean;
}

// 1. emails에 해당하는 타입 정의
//    -> "이메일 드롭 다운 아이템 추가"하는 로직에 문제가 없다.
//    function createDropdownItem(item: {value: string, selected: boolean}) {
// 2. numberOfProducts에 해당하는 타입을 정의하면?
//    -> "이메일 드롭 다운 아이템 추가"하는 로직에 문제가 발생한다. value의 타입이 number이기 때문에
//    function createDropdownItem(item: {value: number, selected: boolean}) {
function createDropdownItem(item: Email | Email) {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
    const item = createDropdownItem(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
});