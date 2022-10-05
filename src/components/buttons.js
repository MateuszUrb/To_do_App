import elementFactory from "../utils/htmlElementFactory";

export const addTaskBtn = elementFactory(
  "button",
  { class: "btn--add" },
  "Add Task"
);
