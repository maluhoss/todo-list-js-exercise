//Create object for new task
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}


// Mark a task as complete by setting complete property as true
function completeTask(task) {
  task.complete = true;
}

// Prints out provided details about task
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

//DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); //Clean cat litter has not been completed
completeTask(task1);
logTaskState(task1); //Clean cat litter has been completed

console.log(tasks);