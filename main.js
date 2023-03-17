const text = document.querySelector(".text");
const button = document.querySelector(".button");
const list = document.querySelector("#list");
const listItem = document.getElementsByClassName("list-item");
const deleteBtn = document.querySelector(".delete");

// ADD ITEM

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (text.value === "") {
    const error = document.querySelector(".error");

    error.textContent = "Enter a new to do";

    text.classList.add("errorInput");
  } else {
    // CREATE NEW LI

    const newListItem = document.createElement("li");

    newListItem.className = "list-item";

    const newListText = document.createElement("p");

    newListText.textContent = text.value;

    const newDelBtn = document.createElement("button");

    newDelBtn.className = "delete";

    newDelBtn.textContent = "X";

    newListItem.appendChild(newListText);

    newListItem.appendChild(newDelBtn);

    list.prepend(newListItem);

    const success = document.querySelector(".success");

    success.textContent = "New Item created successfully";

    text.value = "";
  }
});

// DELETE ITEM

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const listItem = e.target.parentElement;

    list.removeChild(listItem);
  }
});
