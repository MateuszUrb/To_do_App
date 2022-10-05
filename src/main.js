import "./style.css";
import container from "./components/index.js";
import elementFactory from "./utils/htmlElementFactory";

import { addNewTaskForm, formInput, tasksGroup } from "./components/index";

// check task as done
tasksGroup.addEventListener("click", (e) => {
  const isButton = e.target.classList[0] === "btn--select";
  if (!isButton) {
    return;
  }
  e.target.classList.toggle("btn--select-active");
});

// remove task from list
tasksGroup.addEventListener("click", (e) => {
  const isButton = e.target.classList[0] === "btn--remove";
  if (!isButton) {
    return;
  }
  const buttonParent = e.target.parentElement;
  buttonParent.remove();
});

function appendTask(taskText) {
  const documentFragment = document.createDocumentFragment();
  const selectBtn1 = elementFactory("button", { class: "btn--select" }, "✔");
  documentFragment.appendChild(selectBtn1);

  const taskItem = elementFactory("p", { class: "task--item" }, taskText);
  documentFragment.appendChild(taskItem);

  const removeBtn = elementFactory("button", { class: "btn--remove" }, "✖");
  documentFragment.appendChild(removeBtn);

  const taskItemWrapper = elementFactory("div", {
    class: "task--wrapper",
  });
  taskItemWrapper.appendChild(documentFragment);
  tasksGroup.appendChild(taskItemWrapper);
}

addNewTaskForm.addEventListener("submit", (e) => {
  if (formInput.value === "" || null) {
    e.preventDefault();
    return;
  }
  e.preventDefault();
  let taskContent = formInput.value;
  formInput.value = "";
  appendTask(taskContent);
});

const rootDiv = document.querySelector("#root");

rootDiv.appendChild(container);
