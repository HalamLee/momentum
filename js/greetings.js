const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const form = document.querySelector(".form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 만약 유저 정보가 local storage에 없다면 local storage는 null 값을 반환
// 그래서 만약 savedUsername 값이 null이라면 form의 hidden class명 삭제
// 유저 정보가 local storage에 있다면 greeting에 있는 class명 삭제하고
// 텍스트를 추가해서 새로고침을 하면 폼이 보이는 것이 아니라
// 입력하고 저장한 유저 정보가 보이도록 함

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // todoList.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("todos", []);
} else {
  paintGreetings(savedUsername);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}
