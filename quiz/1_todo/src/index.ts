// 방법1 - 타입 정의
// '할 일' 이라는 스펙(타입)을 정의
// type에 이름을 붙여서 이 별칭을 사용할 수 있다.
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

// 방법2 - 인터페이스 정의
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// 타입 종류
// any - string, number, array등 모든 타입을 통칭. 실행하는 시점에 타입을 구분해서 할당(동적)
// void - 반환값이 없다는 것을 명시적으로 지정
let todoItems: Todo[];
// let todoItems: {id: number; title: string; done: boolean}[]; //직접 명시

// api
// function fetchTodoItems(): {id: number; title: string; done: boolean}[] {
function fetchTodoItems(): Todo[] {
  const todos: Todo[] = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

// function addTodo(todo: {id: number; title: string; done: boolean}): void { //직접 명시
function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter(item => item.done);
  //화살표 함수와 동일한 로직
  // return todoItems.filter(function (item) {
  //   if (item.done) {
  //     return item;
  //   }
  // });
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이텝4',
    done: false,
  };
  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
