// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
//1
// const newArray = numbers.map((num) => num ** 2);
// console.log("🚀 ~ newArray:", newArray);

//2
// const funNumbers = (arr, power) => arr.map((num) => Math.pow(num, power));
// console.log("🚀 ~ funNumbers(numbers):", funNumbers(numbers, 2));

// =====================================================================

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// 1
// const newData = data.flatMap((dat) => dat.values);
// console.log("🚀 ~ newData:", newData);

//2
// const newData = (array) => array.flatMap((dat) => dat.values);
// console.log("🚀 ~ newData:", newData(data));

// =====================================================================

// Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// 1
// const checkAge = people.some((peop) => peop.age < 20);
// console.log("🚀 ~ people < 20):", checkAge);

// 2
// const checkAge = (array, age) => array.some((peop) => peop.age < age);
// console.log("🚀 ~ checkAge ~ checkAge <20:", checkAge(people, 20));

// =====================================================================

// Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// 1
// const isAllEven = numbers.every((num) => num % 2 === 0);
// console.log("🚀 ~ isAllEven:", isAllEven);

// 2
// const isAllEven = (array) => array.every((num) => num % 2 === 0);
// console.log("🚀 ~ isAllEven ~ isAllEven:", isAllEven(numbers));

// =====================================================================

// Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// 1
// const firstOddNum = numbers.find((num) => num % 2 !== 0);
// console.log("🚀 ~ firstOddNum:", firstOddNum);

// 2
// const firstOddNum = (array) => array.find((num) => num % 2 !== 0);
// console.log("🚀 ~ firstOddNum ~ firstOddNum:", firstOddNum(numbers));

// =====================================================================

// Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// 1
// const sortedArrayNum = numbersArray.toSorted((a, b) => a - b);
// console.log("🚀 ~ sortedArrayNum:", sortedArrayNum);

// 2
// const sortedArrayNum = (array) => array.toSorted((a, b) => a - b);
// console.log("🚀 ~ sortedArrayNum:", sortedArrayNum(numbersArray));

// =====================================================================

// Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// 1
// const sortedArrayStr = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log("🚀 ~ sortedArrayStr:", sortedArrayStr);

// 2
// const sortedArrayStr = (array) => array.toSorted((a, b) => a.localeCompare(b));
// console.log("🚀 ~ sortedArrayStr:", sortedArrayStr(stringArray));

// =====================================================================

// Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// 1
// const sortedArrayObj = users.toSorted((a, b) => a.age - b.age);
// console.log("🚀 ~ sortedArrayObj:", sortedArrayObj);

// 2
// const sortedArrayObj = (arrayObj) => arrayObj.toSorted((a, b) => a.age - b.age);
// console.table(sortedArrayObj(users));

// =====================================================================

// Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// 1
// const newArrayFilter = user.filter((use) => use.age > 20);
// console.log("🚀 ~ newArrayFilter:", newArrayFilter);

// 2
// const newArrayFilter = (array, val) => array.filter((use) => use.age > val);
// console.table(newArrayFilter(user, 20));

// =====================================================================

// Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// 1
// const sumArray = numbers.reduce((acc, item) => acc + item);
// console.log("🚀 ~ sumArray:", sumArray);

// 2
// const sumArray = (array) => array.reduce((acc, item) => acc + item);
// console.log("🚀 ~ sumArray:", sumArray(numbers));

// =====================================================================

// Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   //   constructor() {
//   //     this.result = 0;
//   //   }
//   number(value) {
//     this.result = value;
//     return this;
//   }
//   getResult() {
//     return this.result;
//   }
//   add(value) {
//     this.result += value;
//     return this;
//   }
//   subtract(value) {
//     this.result -= value;
//     return this;
//   }
//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) return this;
//     this.result /= value;
//     return this;
//   }
// }

// // Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// ===================================================================

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   get login() {
//     return this.#login;
//   }
//   set login(value) {
//     this.#login = value;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(value) {
//     this.#email = value;
//   }
// }

// const client = new Client();
// client.login = "Logan";
// client.email = "asdad@gmai.com";
// console.log("🚀 ~ client.login:", client.login);
// console.log("🚀 ~ client.email:", client.email);

// console.log("🚀 ~ client:", client);

// ===================================================================

// Завдання 13:
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  name;
  age;
  gender;
  email;

  constructor({ name, age, gender, email }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}
const data = {
  name: "Alisa",
  age: 12,
  gender: "Female",
  email: "asdasd@gmail.com",
  salary: 42332,
  department: "developer",
};
// const person = new Person(data);
// console.log("🚀 ~ person:", person.getDetails());

class Employee extends Person {
  salary;
  department;
  constructor({ salary, department, ...data }) {
    super(data);
    this.salary = salary;
    this.department = department;
  }
  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const employee = new Employee(data);
console.log("🚀 ~ employee:", employee.getEmployeeDetails());
