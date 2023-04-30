const toDoForm = document.getElementById('todo-form');
const toDoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-form input');
const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;   
   
     toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
     saveToDos();
     li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = 'X';
    button.classList.add('btn', 'btn-primary');
    button.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.append(li);
}



const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }    
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);


const saveTodos =  localStorage.getItem(TODOS_KEY);
if(saveTodos !== null) {
    const parsedToDos = JSON.parse(saveTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}