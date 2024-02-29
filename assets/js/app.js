let inputBox = document.getElementById('input-box');
let listItems = document.getElementById('list-items');

// Function to add a task to the list
function addTask() {
    
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        
        let task = document.createElement('li');
        task.textContent = inputBox.value;
        // Append the new task to the list
        listItems.appendChild(task);

        let span= document.createElement('span');
        span.textContent= '\u00d7';
        task.appendChild(span);

        // Add an event listener to mark a task as completed when clicked
        task.addEventListener('click', function() {
            task.classList.toggle('checked');
        });

        inputBox.value = '';
    }
}

listItems.addEventListener('click', (el)=> {
    if(el.target.tagName=='li'){
        el.target.classList.toggle('checked');
    }
    else if(el.target.tagName== 'SPAN')
    {
        el.target.parentElement.remove();
    }
})

