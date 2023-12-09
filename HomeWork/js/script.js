//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

//======Рішення 1=====
/* let name = "Іван";
let city = "Ужгород"
city = name;
console.log(city); */

//***2***
//Який буде результат виконання скрипта?

//======Рішення 2=====

//let name = "Olga";
//console.log(`привіт ${1}`); // привіт 1
//console.log(`привіт ${"name"}`); // привіт name
//console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
//let b = "13cvb";
//let c = "12.9sxdcfgv";
// вивести в консоль тип

//======Рішення 3=====

/* a = Number(a);
b = parseInt(b);
c = parseFloat(c);
console.log(typeof a);//number
console.log(typeof b);//number
console.log(typeof c);//number
 */

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

//======Рішення 4=====
/* let sum = (0.1 * 10 + 0.2 * 10) / 10;
console.log(sum); */


//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

//======Рішення 5=====

/* let maxNumber = Math.max(20, 10, 50, 40);
console.log(maxNumber); *///буде 50

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

//======Рішення 6=====

/* const randomNum = Math.random() * (4 - 2) + 2;
console.log(randomNum); */

//***7**
//дізнатись довжину message

//======Рішення 7=====
/* const message = "Welcome to Bahamas!";
console.log(message.length); */

//***8**
//вивести в консоль message  великими літерами

//======Рішення 8=====
/* let maxUpperMessage = message.toUpperCase();
console.log(maxUpperMessage); */


//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

//======Рішення 9=====
/* let details = {};
details.name = "Ivan";
details.age = 23;
details.city = "Uzhgorod"
console.log(details);
delete details.city;
details["like Flowers"] = true;
console.log(details); */


//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

//======Рішення 10=====

/* for (let code in details) {
console.log(code);
console.log(details[code]);
} */

//Ваші курс неймовірний!!!
