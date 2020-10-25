


//-----------------------TASK class-----------------------//

class ToDo {
  constructor(task, tool, detail){
    this.task = task;
    this.tool = tool;
    this.detail = detail;
  }
}

//-----------------------UI class-----------------------//

class UI {
  static displayTodos (){
    const Storetodos = [
      {
        task: "Task One",
        tool: "Tool One",
        detail: "Page10 to 20"
      },
      {
        task: "Task Two",
        tool: "Tool Two",
        detail: "Page20 to 30"

      }
    ];
    const todos = Storetodos; //配列のなかにオブジェクトが入っている
    //
    todos.forEach((todo)=>{UI.addTodoTolist(todo)})
  }

  static addTodoTolist(todo){ //一つのデータの塊(上記でforEachしたので)を
    const List = document.querySelector('#todo-list');
    const row = document.createElement('tr') //row を作る
    //上で作ったrow(<tr>エレメント)の中のhtmlを書き加える
    row.innerHTML = `
    <td>${todo.task}</td>
    <td>${todo.tool}</td>
    <td>${todo.detail}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
    `;

    List.appendChild(row);
  }

  static deleteTodos(e){
    if (e.classList.contains('delete')){
      e.parentElement.parentElement.remove();
    }
  }

  static clearFields(){
    document.querySelector('#task').value = '';
    document.querySelector('#tool').value = '';
    document.querySelector('#detail').value = '';
  }
}

//-----------------------Store Class: handles Storage-----------------------//


//-----------------------Event: Display Todos-----------------------------//
document.addEventListener('DOMContentLoaded', UI.displayTodos);

//-----------------------Event: Add Todo-----------------------------//

document.querySelector('#todo-form').addEventListener('submit', (e) =>{
  e.preventDefault();

  //Get form value
  const task = document.querySelector('#task').value;
  const tool = document.querySelector('#tool').value;
  const detail = document.querySelector('#detail').value;

  //Instantiate book
  const todo = new ToDo(task, tool, detail)

  //Add new Todo to the list
    UI.addTodoTolist(todo);

  //Clear field
  UI.clearFields();

})

//-----------------------Event: Remove Todo-----------------------------//

document.querySelector('#todo-list').addEventListener('click', (e)=>{
  UI.deleteTodos(e.target)
});