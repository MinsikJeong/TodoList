interface ITodoListContext {
  todoList: Array<string>;
  addTodoList: (todo: string) => void;
  removeTodoList: (index: number) => void;
}


/* 지금까지 데이터의 타입을 정의할 때에는
  같은 파일에서 정의해왔다.
  Props의 타입을 정의할 때와 같이 한 파일에서
  타입을 정의하면 해당 파일 안에서만
  타입을 사용할 수 있다.
  하지만 @type/index.d.ts 파일을 만들고
  해당 파일 안에서만 타입을 사용할 수 있다.
  Context의 데이터는 프로젝트 전반에 걸쳐서 사용할 예정이므로,
  Context의 타입은 @type/index.d.ts 파일에 따로 저장했다.
*/
