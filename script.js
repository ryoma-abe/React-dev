const addBtn = document.querySelector("#add-btn");
const addInput = document.querySelector("#add-input");
const todoList = document.querySelector("#todo-list");
const deleteBtns = document.querySelectorAll(".delete-button");
const completeBtns = document.querySelectorAll(".complete-button");

// 追加ボタンの処理
const onClickAdd = () => {
  const val = addInput.value;
  addInput.value = "";
  const createLi = document.createElement("li");
  const createSpan = document.createElement("span");
  const createComplete = document.createElement("button");
  const createDelete = document.createElement("button");
  createLi.className = "todo-item";
  createComplete.className = "complete-button";
  createComplete.innerHTML = "完了";
  createDelete.innerHTML = "削除";
  createDelete.className = "delete-button";
  createSpan.innerHTML = val;
  createLi.append(createSpan, createComplete, createDelete);

  todoList.appendChild(createLi);
};
addBtn.addEventListener("click", () => {
  onClickAdd();
});

// 削除ボタンの処理
const onClickDelete = function () {
  const parent = this.parentNode;
  parent.remove();
  if (todoList.children.length === 0) {
    todoList.remove();
  }
};

deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", onClickDelete);
});
