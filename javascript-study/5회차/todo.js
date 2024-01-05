const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
let todoArr = [];

function handleBTn(){
    todoArr = todoArr.filter(function(atodo){
        return atodo.todoDo !== clickedID
    })
    displayTodos()
}

function handleTodoItemclick(clickedID){
    todoArr.map(function(atodo){
        if(atodo.todoID === clickedID){
            return{
                ...atodo, todoDone: !atodo.todoDone
            }
        }else {
            return atodo
        }
    })
    displayTodos()
}

function displayTodos(){
    todoList.innerHTML = ""
    todoArr.forEach(function(atodo){
        todoList.innerHTML = "";
        const todoItem = document.createElement('li');
        const todoDelbtn = document.createElement('span');
        todoDelbtn.textContent = ' x'
        todoItem.textContent = atodo.todoText;
        todoItem.title = "클릭하면 완료됨"
        if(atodo.todoDone){
            todoItem.classList.add("done")
        }else {
            todoItem.classList.add("yet")
        }
        todoDelbtn.title = "클릭하면 삭제됨"

        todoItem.addEventListener("click", function(){
            handleTodoItemclick(atodo.todoID)
        })
        todoDelbtn.addEventListener("click", function(){
            handleBTn(atodo.todoID)
        })

        todoItem.appendChild(todoDelbtn);
        todoList.appendChild(todoItem);
    })
}

todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    const tobeAdded = {
        todoText: todoForm.todo.value,
        todoID: new Date().getTime(),
        todoDone: false
    }
    todoForm.todo.value = ""
    todoArr.push(tobeAdded)
    displayTodos();
})