const existMsg = "Exited the application.";
const enterToDoMsg = "Exist: İptal\n\nEnter the jobs you want to add to the list";
const enterDateMsg = "Exist: İptal\n\nEnter the jobs date (YYYY-MM-DD).";
const invalidEntry = "Invalid entry. Try again."
let toDoList = [];

if (localStorage.toDoList) {
  toDoList = JSON.parse(localStorage.toDoList);
} 

function getToDo() {
  let value = prompt(enterToDoMsg);
  if (value === null) {
    return false;
  }

  value = value.trim();
  if (!value) {
    alert(invalidEntry);
    return getToDo();
  }

  return value;
}

function getDate() {
  let dateInput = prompt(enterDateMsg);

  if (dateInput === null) {
    return false;
  }

  dateInput = dateInput.trim();
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) {
    alert(invalidEntry);
    return getDate();
  }

  return dateInput;
}

function toDoListMenu() {

  if (toDoList.length > 0 ) {
    const listOfToDo = toDoList.map((t, index) => `${index + 1} - To Do: ${t.toDo}, Date: ${t.date}`).join("\n"); 
    alert(listOfToDo);
  }

  const toDo = getToDo();
  if (!toDo) {
    alert(existMsg);
    return;
  }

  const date = getDate();
  if (!date) {
    alert(existMsg);
    return;
  }

  toDoList.push({
    toDo,
    date
  });

  localStorage.toDoList = JSON.stringify(toDoList);
}

toDoListMenu();