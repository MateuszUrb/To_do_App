import elementFactory from "../utils/htmlElementFactory";
import { addTaskBtn } from "./buttons";

export const formInput = elementFactory("input", {
  class: "form--input",
  placeholder: "Task to do...",
  type: "text",
});

export const tasksGroup = elementFactory("article", { class: "tasks--items" });

export const addNewTaskForm = elementFactory(
  "form",
  { class: "form" },
  formInput,
  addTaskBtn
);

const header = elementFactory(
  "header",
  { class: "header" },
  elementFactory("h1", { class: "header--title" }, "To Do List:")
);

const container = elementFactory(
  "div",
  { class: "container" },
  elementFactory(
    "div",
    { class: "wrapper" },
    header,
    addNewTaskForm,
    tasksGroup
  )
);

export default container;
