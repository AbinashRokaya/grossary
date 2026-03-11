import { addItem, updateItemName } from "./app.js";

export function createForm(editId, editItem) {
  const form = document.createElement("form");
  form.classList.add("grocery-form");

  const title = document.createElement("h2");
  title.textContent = "🛒 Grocery List";
  title.classList.add("form-title");

  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("input-wrapper");

  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("form-input");
  input.placeholder = "e.g. Eggs, Rice, Butter...";

  if (editItem) {
    input.value = editItem.name;
  }

  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("submit-btn");
  button.textContent = editId ? "Update" : "Add Item";

  inputWrapper.appendChild(input);
  inputWrapper.appendChild(button);

  form.appendChild(title);
  form.appendChild(inputWrapper);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (!value) {
      alert("Please enter an item name!");
      return;
    }

    if (editId) {
      updateItemName(value);
    } else {
      addItem(value);
    }

    input.value = "";
  });

  return form;
}
