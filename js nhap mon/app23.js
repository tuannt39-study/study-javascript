var todos = [];
function onAddClick(){
    var newTodo = document.getElementById('newTodo').value;
    todos.push(newTodo);

    updateTodoList();

    document.getElementById('newTodo').value = '';

}

function updateTodoList(){
    var eleTodoList = document.getElementById('todo-list');
    eleTodoList.innerHTML = '';
    for (var i=0; i<todos.length ; i++){
        eleTodoList.innerHTML += '<li onlick="onTodoClick(' + i + ')">' + todos[i] + '</li>';
    }
}

function onTodoClick(index){
    todos.splice(index, 1);

    updateTodoList();
}
