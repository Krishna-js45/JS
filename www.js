<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 8px;
            margin: 5px 0;
            background-color: #f1f1f1;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .completed {
            text-decoration: line-through;
            color: gray;
        }
        button {
            background-color: #ff4d4d;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background-color: #ff0000;
        }
    </style>
</head>
<body>

    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Enter a task" />
    <button onclick="addTask()">Add Task</button>

    <ul id="taskList"></ul>

    <script>
        // Function to add task
        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                const taskList = document.getElementById("taskList");

                // Create a new list item for the task
                const li = document.createElement("li");

                // Create the task text
                const taskTextNode = document.createTextNode(taskText);
                li.appendChild(taskTextNode);

                // Create delete button
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.onclick = function() {
                    li.remove(); // Delete the task
                };
                li.appendChild(deleteButton);

                // Create checkbox to mark task as completed
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.onclick = function() {
                    li.classList.toggle("completed"); // Mark task as completed
                };
                li.insertBefore(checkbox, li.firstChild); // Add checkbox before task text

                // Add the new task to the list
                taskList.appendChild(li);

                // Clear the input field
                taskInput.value = "";
            } else {
                alert("Please enter a task.");
            }
        }
    </script>
    
</body>
</html>
