const inputElement = document.getElementById("inputElement");
const toDoItemsListElement = document.getElementById("toDoItemsList");
const addButtonElement = document.getElementById("addButton");

addButtonElement.addEventListener("click", add);

function add() {
  if (inputElement.value.trim() === "") {
    alert("Add something to the list!");
  } else {
    let toDoItem = document.createElement("li");
    toDoItem.setAttribute("class", "toDoItem");
    toDoItem.innerHTML = inputElement.value;

    let thrashIconElement = document.createElement("i");
    thrashIconElement.classList.add("fas", "fa-trash");
    thrashIconElement.addEventListener("click", removeToDoItem);
    toDoItem.appendChild(thrashIconElement);

    let checkIconElement = document.createElement("i");
    checkIconElement.classList.add("fas", "fa-check");
    toDoItem.appendChild(checkIconElement);
    checkIconElement.addEventListener("click", checkedToDoItem);

    toDoItemsListElement.appendChild(toDoItem);
    inputElement.value = "";
  }
}

function removeToDoItem(event) {
  let toDoItem = event.target.parentNode;
  toDoItem.remove();
  console.log("balablablab");
}
function checkedToDoItem() {
  let toDoItem = event.target.parentNode;
  toDoItem.style.color = "red";
}
