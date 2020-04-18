'use strict';

let todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

let toDoData = [];

let render = function() {

  todoList.textContent = '';
  todoCompleted.textContent = '';

  toDoData.forEach(function(item){
    let li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
                      '<div class="todo-buttons">' +
                        '<button class="todo-remove"></button>' +
                        '<button class="todo-complete"></button>' +
                      '</div>';
    
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    // Удаление дела
    let btnTodoRemove = li.querySelector('.todo-remove');
    btnTodoRemove.addEventListener('click', function(){
      // Перебераем массив и определяем индекс дела, которое необходимо удалить
      for (let key in toDoData) {
        if (toDoData[key].value == item.value)
          toDoData.splice(key, 1);
      };

      render();
    });
    

    // Добавление дел в раздел "выполенено"
    let btnTodoComplete = li.querySelector('.todo-complete');
    btnTodoComplete.addEventListener('click', function(){
      item.completed = !item.completed;

      render();
    })
  })
};

todoControl.addEventListener('submit', function(event){
  event.preventDefault();

  // Проврка наличия введенных новых дел
  if (headerInput.value !== '') {
    // Добавление нового дела 
    let newToDo = { value : headerInput.value,
                    complete : false
    }
    toDoData.push(newToDo);

    // Очистка поля ввода
    headerInput.value = '';
  } else {
    return;
  }

  // Заново добавляем все дела
  render();
});

render();