const addBtn = document.querySelector("#add-btn");
const addInput = document.querySelector("#add-input");
const todoList = document.querySelector("#todo-list");
const deleteBtns = document.querySelectorAll(".delete-button");
const completeBtns = document.querySelectorAll(".complete-button");
const returnButtons = document.querySelectorAll(".return-button");
const completeTodo = document.querySelector("#complete-todo");

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
  createLi
    .querySelector(".delete-button")
    .addEventListener("click", onClickDelete);
  createLi
    .querySelector(".complete-button")
    .addEventListener("click", onClickComplete);
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

// 完了ボタンの処理
const onClickComplete = function () {
  const parent = this.parentNode;
  const deleteButton = parent.querySelector(".delete-button");
  const completeButton = parent.querySelector(".complete-button");
  parent.remove();
  completeTodo.appendChild(parent);
  parent.removeChild(deleteButton);
  parent.removeChild(completeButton);
  const createReturn = document.createElement("button");
  createReturn.className = "return-button";
  createReturn.innerHTML = "戻す";
  parent.appendChild(createReturn);
  if (todoList.children.length === 0) {
    todoList.remove();
  }
  createReturn.addEventListener("click", onClickReturn);
};
completeBtns.forEach((completeBtn) => {
  completeBtn.addEventListener("click", onClickComplete);
});

// 戻るボタンの処理
const onClickReturn = function () {
  const parent = this.parentNode;
  const parentInner = parent.querySelector("span").innerHTML;
  parent.remove();
  const createComplete = document.createElement("button");
  createComplete.className = "complete-button";
  const createDelete = document.createElement("button");
  createDelete.className = "delete-button";
  createComplete.innerHTML = "完了";
  createDelete.innerHTML = "削除";
  const createLi = document.createElement("li");
  createLi.className = "todo-item";
  const createSpan = document.createElement("span");
  createSpan.innerHTML = parentInner;
  createLi.append(createSpan, createComplete, createDelete);
  todoList.appendChild(createLi);
  createLi
    .querySelector(".delete-button")
    .addEventListener("click", onClickDelete);
  createLi
    .querySelector(".complete-button")
    .addEventListener("click", onClickComplete);
};
returnButtons.forEach((returnButton) => {
  returnButton.addEventListener("click", onClickReturn);
});
