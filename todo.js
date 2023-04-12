const inputElement = document.getElementById("inputElement");
const toDoItemsListElement = document.getElementById("toDoItemsList");
const addButtonElement = document.getElementById("addButton");

// Load the to-do list from local storage if it exists
let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

// arrow function with (item) was made with help of chatGPT
toDoList.forEach((item) => {
  const toDoItem = createToDoItem(item.text, item.checked);
  toDoItemsListElement.appendChild(toDoItem);
});

// Adding toDoItem to the list by clicking on the addButtonElement
addButtonElement.addEventListener("click", add);

// Add function, if there is nothing in the input element there is alert on the screen
// If there is a text in the value toDoItem has text from input and check icon which is not checked
function add() {
  if (inputElement.value.trim() === "") {
    alert("Add something to the list!");
  } else {
    const toDoItem = createToDoItem(inputElement.value, false);
    toDoList.push({ text: inputElement.value, checked: false });
    toDoItemsListElement.appendChild(toDoItem);
    inputElement.value = "";
    saveToDoList();
  }
}

// CreateToDoItem function creates toDoItem element which has text, check icon and thrash icon inside
function createToDoItem(text, checked) {
  const toDoItem = document.createElement("li");
  toDoItem.setAttribute("class", "toDoItem");
  toDoItem.innerHTML = text;

  const checkIconElement = document.createElement("i");
  checkIconElement.classList.add("far", "fa-circle-check");
  if (checked) {
    toDoItem.classList.add("checked");
    checkIconElement.classList.replace("far", "fas");
  }
  checkIconElement.addEventListener("click", () => {
    toDoItem.classList.toggle("checked");
    checkIconElement.classList.toggle("far");
    checkIconElement.classList.toggle("fas");
    // The following two lines of text were made with help from chatGPT
    const index = Array.from(toDoItemsListElement.children).indexOf(toDoItem);
    toDoList[index].checked = toDoItem.classList.contains("checked");
    saveToDoList();
  });

  const thrashIconElement = document.createElement("i");
  thrashIconElement.classList.add("fas", "fa-trash");
  thrashIconElement.addEventListener("click", () => {
    toDoItem.remove();
    // The following line of text were made with help from chatGPT
    const index = Array.from(toDoItemsListElement.children).indexOf(toDoItem);
    toDoList.splice(index, 1);
    saveToDoList();
  });

  const iconContainer = document.createElement("div");
  iconContainer.setAttribute("class", "iconContainer");
  iconContainer.appendChild(checkIconElement);
  iconContainer.appendChild(thrashIconElement);
  toDoItem.appendChild(iconContainer);

  return toDoItem;
}

// toDoList with new toDoItems inside is saving in the localStorage
function saveToDoList() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}
