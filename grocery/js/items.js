import { removeItem, setEditId, editCompleted } from "./app.js";

export function createItems(items) {
  const container = document.createElement("div");
  container.classList.add("items-container");

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.classList.add("empty-msg");
    empty.textContent = "No items yet. Add something above!";
    container.appendChild(empty);
    return container;
  }

  const count = document.createElement("p");
  count.classList.add("items-count");
  const done = items.filter((i) => i.completed).length;
  count.textContent = `${done} / ${items.length} completed`;
  container.appendChild(count);

  const list = document.createElement("ul");
  list.classList.add("items-list");

  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("single_item");
    if (item.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.addEventListener("change", () => editCompleted(item.id));

    const name = document.createElement("p");
    name.textContent = item.name;

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.classList.add("btn", "edit-btn");
    editBtn.innerHTML = "✏️";
    editBtn.title = "Edit";
    editBtn.addEventListener("click", () => setEditId(item.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("btn", "remove-btn");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.title = "Delete";
    deleteBtn.addEventListener("click", () => removeItem(item.id));

    li.appendChild(checkbox);
    li.appendChild(name);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  container.appendChild(list);
  return container;
}
