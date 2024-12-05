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
function addTask(values){
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
    lispan2.textContent = values;
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
    const butDiv = document.createElement('div');
    butDiv.classList.add("listDiv");
    const deleteBut = document.createElement('button');
    deleteBut.textContent = 'Delete';
    butDiv.appendChild(deleteBut);
    deleteBut.addEventListener('click',function(){
        todoList.removeChild(liItem);
    });
    //edit button
    const editBut = document.createElement('button');
    editBut.textContent = 'Edit';
    butDiv.appendChild(editBut);
    liItem.appendChild(butDiv);
    editBut.addEventListener('click',function(){
        const isEditing = liItem.classList.contains('editing');

        if (isEditing) {
            const input = liItem.querySelector('input[type="text"]');
            if (input) {
                lispan2.textContent = input.value;
                liItem.replaceChild(lispan2, input);
            }
            liItem.classList.remove('editing');
            editBut.textContent = 'Edit';
        } else {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = lispan2.textContent;
            liItem.replaceChild(input, lispan2);
            liItem.classList.add('editing');
            editBut.textContent = 'Save';
        }
    });

    todoList.appendChild(liItem); 
}


