const newTaskbtn = document.querySelector('#new-task-btn');
const taskContainer = document.querySelector('#newTaskHolderContainer');

newTaskbtn.addEventListener('click', () => {
    const newTask = document.createElement('div');
    newTask.classList.add('newTaskHolder');

    // Task Name
    const newTaskName = document.createElement('ul');
    let userNewTaskName = prompt('Task Name : ');
    newTaskName.innerHTML = `${userNewTaskName}`;
    newTask.appendChild(newTaskName);

    // Create Button for Edit and Delete Section
    const edsContainer = document.createElement('div');
    edsContainer.classList.add('eds-container');

    // Edit Button
    const editDiv = document.createElement('div');
    editDiv.classList.add('edit-btn');
    editDiv.textContent = 'Edit';

    // Add click event for Edit button
    editDiv.addEventListener('click', () => {
        let updatedTaskName = prompt('[EDIT SECTION]: New Task Name');
        newTaskName.innerHTML = updatedTaskName; // Update task name
    });

    // Delete Button
    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add('delete-btn');
    deleteDiv.textContent = 'Delete';

    // Add click event for Delete button
    deleteDiv.addEventListener('click', () => {
        taskContainer.removeChild(newTask);
    });

    // Append buttons to edsContainer, then to newTask
    edsContainer.appendChild(editDiv);
    edsContainer.appendChild(deleteDiv);
    newTask.appendChild(edsContainer);

    // Append the new task to the container
    taskContainer.appendChild(newTask);
});



const primarySidebar = document.querySelector('#primary-sidebar')
  const secondarySidebar = document.querySelector('#secondary-sidebar')
  const bigToSmallSidebar = document.querySelector('#big-sideBar-small')
  const smallToBigSidebar = document.querySelector('#small-sideBar-big')
  
  bigToSmallSidebar.addEventListener('click' , () => {
    // Use setTimeout with an arrow function to delay hiding the sidebar
    setTimeout(() => {
    primarySidebar.classList.add('-translate-x-full' , 'w-[0px]')
    primarySidebar.style.display = 'none';
  }, 100); // Delay set to 1 second (1000 ms), adjust as needed

    secondarySidebar.classList.remove('opacity-0')
    secondarySidebar.style.display = 'block';
  })

  smallToBigSidebar.addEventListener('click', () => {
    setTimeout(() => {
      primarySidebar.classList.remove('-translate-x-full' , 'w-[0px]')
    }, 100);
    primarySidebar.style.display = 'block';
    primarySidebar.classList.add('w-[350px]')
    secondarySidebar.style.display = 'none';
  })
