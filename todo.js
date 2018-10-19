//select the button
var mkList = function(task, duedate, priority) {
    //create <li></li>
    var liElem = document.createElement('li');
// <li> a task = due date </li>
    liElem.textContent = `${task} - ${duedate}`;
// <Li class = "list-group-item". a task - due date </li>
    liElem.classList.add('list-group');
    return (liElem);

}

var addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener(
        'click',  //event name
        function() {
            var taskElem = document.querySelector("#task");
            var dueDateElem = document.querySelector('#due-date');
            var priorityElem = document.querySelector('#priority');
            var todoElem = mkList(taskElem.value, dueDateElem.value, priorityElem.value);
            var todoListElem = document.querySelector('#todo-list');
            todoListElem.appendChild(todoElem);
            taskElem.value= null;
            dueDateElem.value = null;
            priorityElem.value = 'medium';
        
        }
        
    );
