const inputElement = document.getElementById("inputElement");
const toDoItemsListElement = document.getElementById("toDoItemsList");
const addButtonElement = document.getElementById("addButton");

addButtonElement.addEventListener("click", add);

function add() {
  if (inputElement.value.trim() === "") {
    alert("Add something to the list!");
  } else {
    const toDoItem = document.createElement("li");
    toDoItem.setAttribute("class", "toDoItem");
    toDoItem.innerHTML = inputElement.value;

    const checkIconElement = document.createElement("i");
    checkIconElement.classList.add("far", "fa-circle-check");
    toDoItem.appendChild(checkIconElement);
    checkIconElement.addEventListener("click", checkedToDoItem);

    const thrashIconElement = document.createElement("i");
    thrashIconElement.classList.add("fas", "fa-trash");
    thrashIconElement.addEventListener("click", removeToDoItem);
    toDoItem.appendChild(thrashIconElement);

    toDoItemsListElement.appendChild(toDoItem);
    inputElement.value = "";
  }
}

// This solution was creatted with help from chatGPT

function removeToDoItem(event) {
  let toDoItem = event.target.parentNode;
  toDoItem.remove();
  console.log("balablablab");
}
// The toggle() method toggles between hide() and show()
function checkedToDoItem(event) {
  let toDoItem = event.target.parentNode;
  toDoItem.classList.toggle("checked");
  let checkIconElement = toDoItem.querySelector(".fa-circle-check");
  checkIconElement.classList.toggle("far");
  checkIconElement.classList.toggle("fas");
}
