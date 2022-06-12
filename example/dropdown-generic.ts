const emails = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// 배열 값들을 html 속성에 연결한다.
// option 태그하나가 생성된다.
function createDropdownItem(item) { //item : 배열의 하나의 요소
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