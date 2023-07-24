const todoList = document.getElementById("todoList");
const inputTodo = document.getElementById("inputTodo");
const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener('click', function (e) {
    let todoValue = inputTodo.value.trim();
    if (todoValue === "") {
        alert('할 일을 입력하세요.');
        return;
    }
    const listItem = document.createElement('li');
    listItem.className = 'd-flex list-group-item';
    listItem.innerText = todoValue;

    const listBtn = document.createElement('button');
    listBtn.className = 'btn-close ms -auto';
    listBtn.onclick = function(e){
        let pNode = e.target.parentNode;
        todoList.appendChild(listBtn);
    }

    listItem.appendChild(listBtn);


    inputTodo.value = "";
});