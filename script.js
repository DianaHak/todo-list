document.addEventListener('DOMContentLoaded', function () {
    // Select the necessary elements
    const newTaskInput = document.getElementById('Newtask');
    const addTaskButton = document.querySelector('button');
    const tasksContainer = document.getElementById('tasks');

    // Function to create a new task element
    const createTaskElement = (taskText) => {
        // Create a new paragraph element for the task
        const newTask = document.createElement('p');
        newTask.textContent = taskText;
        newTask.classList.add('task-item');

        // Create the complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'done';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', function () {
            // Mark the task as completed
            newTask.classList.add('completed');

            // Remove the task from its current position
            tasksContainer.removeChild(newTask);

            // Move the completed task to the bottom
            tasksContainer.appendChild(newTask);
        });

        // Append the button to the task element
        newTask.appendChild(completeButton);

        return newTask;
    };

    // Add an event listener to the add button
    addTaskButton.addEventListener('click', function () {
        // Get the value from the input field
        const taskText = newTaskInput.value.trim();

        // Check if the input field is not empty
        if (taskText !== "") {
            // Create a new task element and append it
            const newTask = createTaskElement(taskText);
            tasksContainer.appendChild(newTask);

            // Clear the input field
            newTaskInput.value = "";
        } else {
            alert("Please enter a task."); // Alert if input is empty
        }
    });

    // Add an event listener for pressing "Enter" in the input field
    newTaskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTaskButton.click();
        }
    });
});
