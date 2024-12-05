const todoform = document.getElementById('list-values');
const todoInput = document.getElementById('values');
const todoList = document.getElementById('to-dolist');
todoform.addEventListener('submit',function(e){
    e.preventDefault();
    const newTask = todoInput.value;
    if(newTask === ''){
        alert("Please enter a Task!");
        return;
    }
    //
        addTask(newTask);
    //clearing again text field
    todoInput.value = '';
});
function addTask(value){
    const liItem = document.createElement('li');
    // stores text
    const liLabel = document.createElement('label');
    liLabel.classList.add("checkbox-wrapper-39");
    const lispan = document.createElement('span');
    lispan.classList.add("checkbox");   
    //checkbox
    const checkboxi = document.createElement('input');
    checkboxi.setAttribute('type','checkbox');
    liLabel.appendChild(checkboxi);
    liLabel.appendChild(lispan);
    
    liItem.appendChild(liLabel);
    const lispan2 = document.createElement('span');
    lispan2.textContent = value;
    liItem.appendChild(lispan2);
    //delete
    checkboxi.addEventListener('change',function(){
        if(this.checked){
            lispan2.style.textDecoration = 'line-through';
        }
        else{
            lispan2.style.textDecoration = 'none';
        }
    });
    const deleteBut = document.createElement('button');
    deleteBut.textContent = 'Delete';
    liItem.appendChild(deleteBut);
    deleteBut.addEventListener('click',function(){
        todoList.removeChild(liItem);
    });
    //edit button
    // const editBut = document.createElement('button');
    // editBut.textContent = 'Edit';
    // liItem.appendChild(editBut);

    todoList.appendChild(liItem); 
}


