// // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// console.log("🚀 ~ body:", body);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.querySelector("#title");
// console.log("🚀 ~ title:", title);

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const list = document.querySelector(".list");
// console.log("🚀 ~ list:", list);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const data = document.querySelectorAll("[data-topic]");
// console.log("🚀 ~ data:", data);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firData = document.querySelector("[data-topic]");
// console.log("🚀 ~ firData:", firData);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// console.log("🚀 ~ lasData1:", data[data.length - 1]);
// console.log("🚀 ~ lasData2:", list.lastElementChild);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const titleh1 = document.querySelector("h1");
// console.log(titleh1.nextElementSibling);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const titleh3 = document.querySelectorAll("h3");
// console.log("🚀 ~ titleh3:", titleh3);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// titleh3.forEach((title) => title.classList.add("active"));

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liEl = document.querySelector("[data-topic='navigation']");
// console.log("🚀 ~ liEl:", liEl);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// // liEl.setAttribute("style", "background-color: yellow");
// liEl.style.backgroundColor = "yellow";

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const text = liEl.querySelector("p");
// text.textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const findEl = document.querySelector(`[data-topic=${currentTopic}]`);
// console.log("🚀 ~ findEl:", findEl);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// // findEl.style.backgroundColor = "blue";
// findEl.setAttribute("style", "background-color: blue");

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const compTitle = document.querySelector(".completed");
// console.log("🚀 ~ compTitle:", compTitle);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// // compTitle.parentElement.remove();
// compTitle.parentNode.remove();

// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const pEl = document.createElement("p");
// pEl.textContent = "Об'єктна модель документа (Document Object Model)";
// titleh1.after(pEl);
// console.log("🚀 ~ titleh1:", titleh1);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const liCreateEl = document.createElement("li");
// const headerEl = document.createElement("h3");
// const textEl = document.createElement("p");
// headerEl.textContent = "Властивість innerHTML";
// textEl.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// liCreateEl.append(headerEl, textEl);
// // list.append(liCreateEl)
// console.log("🚀 ~ liCreateEl:", liCreateEl);
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const markup =
//   '<li><h3>"Властивість innerHTML"</h3> <p>"Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"</p></li>';
// list.insertAdjacentHTML("beforeend", markup);
// // 20 - очисти список
// list.innerHTML = "";

// Завдання 2

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const divtast2 = document.querySelector(".number-container");
let markup = "";
for (let i = 0; i < 100; i++) {
  const numnew = randomNumber();

  let classEl = "";
  if (numnew % 2 === 0) {
    classEl = "even";
  } else {
    classEl = "odd";
  }
  markup += `<div class = "number ${classEl}"> ${numnew} </div>`;
}

divtast2.insertAdjacentHTML("beforeend", markup);

// Завдання 3

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector(".js-username-input");
// input.addEventListener("input", handleInput);
// function handleInput(event) {
//   input.classList.remove("success", "error");
//   if (event.target.value.length > 6) {
//     input.classList.add("success");
//   } else {
//     input.classList.add("error");
//   }
// }
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener("focus", handleFocus);
// function handleFocus(event) {

//   if (event.target.value.trim() === "") {
//     event.target.style.outline = "3px solid red";
//   } else {
//     event.target.style.outline = "3px solid green";
//   }
// }

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener("blur", handleBlur);
function handleBlur(event) {
  if (event.target.value.trim() === "") {
    event.target.style.outline = "3px solid red";
  } else {
    event.target.style.outline = "3px solid green";
  }
}

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector(".js-contact-form");
const span = document.querySelector(".js-username-output");
input.addEventListener("input", handleInput);
function handleInput(event) {
  if (event.target.value.trim() !== "") {
    span.textContent = event.target.value;
  } else {
    span.textContent = "Anonymous";
  }
}
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const { accept, userName } = event.target.elements;
  if (userName.value.trim() === "" || accept.checked === false) {
    alert("Fill fields");
    return;
  }
  const data = {};
  data.userName = userName.value.trim();
  console.log("🚀data.userName:", data);
  form.reset();
}
