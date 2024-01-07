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

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

//======Рішення 11=====
/* const inputValue = prompt("Please enter value");
if (!isNaN(inputValue)) {
    const result = inputValue > 0;
    alert(`Ваше значення = ${result}`);
}
else {
     alert("Ви увели інваліда")
} */


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

//======Рішення 11=====
/* const inputValue = prompt("Please enter value");
inputValue === "test" ? alert(true) : alert(false); */

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

//======Рішення 11=====
/* let inputValue = prompt("Уведи значення");
inputValue = Number(inputValue);
if (inputValue > 10) {
    inputValue -= 5;
    console.log(inputValue);
} else {
    inputValue += 5;
    console.log(inputValue);
}
alert(inputValue); */

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

//======Рішення 12=====
/* let inputValue = prompt("Уведи значення місяця");
inputValue = Number(inputValue);
if (inputValue > 0 || inputValue <= 12) {
    switch (inputValue) {
        case 1:
            alert("Січень")
            break;
        case 2:
            alert("Лютий")
            break;
        case 3:
            alert("Березень")
            break;
        case 4:
            alert("Квітень")
            break;
        case 5:
            alert("Травень")
            break;
        case 6:
            alert("Червень")
            break;
        case 7:
            alert("Липень")
            break;
        case 8:
            alert("Серпень")
            break;
        case 9:
            alert("Вересень")
            break;
        case 10:
            alert("Жовтень")
            break;
        case 11:
            alert("Листопад")
            break;
        case 12:
            alert("Грудень")
            break;
        default: alert("Усього є тільки 12 місяців");
            break;
    }
} else{
alert("Ви увели фігню")
} */

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

//======Рішення 13=====
/* let inputValue = prompt("Уведи трицифрове число");
inputValue = Number(inputValue);
if (inputValue > 99 && inputValue <= 999) {
    const firstNumber = Math.floor(inputValue / 100);
    const secondNumber = Math.floor((inputValue % 100) / 10);
    const thirdNumber = inputValue % 10;
    const sumNumber = firstNumber + secondNumber + thirdNumber;
    console.log(sumNumber);
    alert(`Сума чисел буде ${sumNumber}`);
} else {
    alert("Можна вводити тільки трицифрове число");
} */


//======Рішення 14=====
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
/*  const fruts = [
 { id: 0, name: "Apple" },
 { id: 1, name: "Tomat" },
 { id: 2, name: "Cherry" },
 { id: 3, name: "Orange" },
]; */

//======Задача 14=====
/* const namesArray = fruts.map(frut => frut.name);
console.log(namesArray); */

//======Рішення 14(1)=====
/* let result = [];
for (let i = 0; i < fruts.length; i++){
    result.push(fruts[i].name)
}
console.log(result) */

//======Рішення 14(2)=====
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// -- 3 --


//======Задача 15=====
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }

//======Рішення 15(1)=====
/* let numbr = 2;
while (numbr <11) {
    console.log(numbr);
    numbr++;
} 
*/

//======Рішення 15(2)=====
/* let numbr = 2;
let str = "Початок з"
while (numbr<11) {
    str += ` ${numbr}`;
    if (numbr === 10) {
        str +=" до кінця.";
    }
    numbr++
}
console.log(str) */

//======Задача 16=====

//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

//======Рішення 16=====

/* let userInput;

do {
  userInput = prompt("Введіть число більше за 100:", "");
  if (userInput === null || userInput === "") {
    alert("Ви відмовились або ввели порожній рядок.");
    continue;
  }
  if (typeof userInput !== 'string') {
    alert("Будь ласка, введіть коректне значення у вигляді рядка.");
    continue;
  }
  userInput = Number(userInput);

  if (isNaN(userInput) || userInput <= 100) {
    alert("Будь ласка, введіть коректне число більше за 100.");
  }
} while (isNaN(userInput) || userInput <= 100);
 */

//======Задача 17=====
// Вирахуйте середній вік

/* const girls = [
{ age: 23, name: "Оля" },
{ age: 29, name: "Аня" },
{ age: 10, name: "Юля" },
{ age: 20, name: "Катя"},
]; */

//======Рішення 17=====

/* let sum = 0;
for (let i = 0; i < girls.length; i++) {
  sum+=girls[i].age;
}
const result = sum / girls.length;
console.log(result); */


// toSorted для рядків,  за алфавітом , та проти=)

