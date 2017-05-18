// В данном примере мы также передали анонимную функцию в качестве параметра в метод forEach.

var fruits = ['Apple', 'Pear', 'Orange', 'Banana'];

fruits.forEach(function(eachName, index) {
    console.log(index + 1 + '. ' + eachName);
});


// Можно также определять именованные функции и передавать в качестве callback имя функции.
var allUserData = [];  // глобальная переменная ( использование глобальных переменных является антипаттерном) 

// Функция, принимающая два параметра, одним из которых является callback
// function getInput(options, callback) {
//     allUserData.push(options);
//     callback(options);
// }

//console.log(typeof { name: 'Janus', speciality: 'JavaScript' });

// function logStuff(userData) {// определение функции logStuff для вывода в консоль
//     if (typeof userData === 'string') {
//         console.log(userData);
//     } else if (typeof userData === "object") {
//         for (var item in userData) {
//             console.log(item + ": " + userData[item]);       
//         }
//     }}

// // Пример вызова функции getInput с коллбком
// getInput({ name: 'Janus', speciality: 'JavaScript' }, logStuff);

// Так как функция обратного вызова является обычной функцией, мы можем передавать ей параметры.
// Также можно передать функции обратного вызова любую переменную из локальной или глобальной области видимости.
// глобальная переменная
// var generalName = 'Nic Name';

// function logStuff(general, userData) {// определение функции logStuff для вывода в консоль
//     if (typeof userData === 'string') {
//         console.log(userData);
//     } else if (typeof userData === "object") {
//         console.log("Title: " + general);
//         for (var item in userData) {
//             console.log(item + ": " + userData[item]);       
//         }
//     }}

// function getInput(options, callback) {
//     allUserData.push(options);
//     callback(generalName, options);
// }


// // Пример вызова функции getInput с коллбком
// getInput({ name: 'Janus', speciality: 'JavaScript' }, logStuff);


// Перед вызовом функции обратного вызова всегда необходимо проверять, что она действительно является функцией. Также это позволяет сделать функцию обратного вызова необязательным аргументом.
// function getInput(options, callback) {
//     allUserData.push(options);

//     if (typeof callback === 'function') {
//         callback(options);
//     }
// }

// Нужно быть крайне осторожным, когда внутри коллбэк-функции используется объект this. 
//Если эта функция передается в глобальную функцию, то объект this будет указывать на глобальные объект global (window), иначе на объект this содержащей функции.
// var userData = {
//     id: 094545,
//     fullName: 'Unknown',

//     setUserName: function(firstName, lastName)  {
//         this.fullName = firstName + ' ' + lastName;
//     } 
// }

// function getUserInput(firstName, lastName, callback)  {
//     callback(firstName, lastName);
// }

// //Вызовем функцию getUserInput, передав ей в качестве функции обратного вызова метод setUserName объекта userData:

//getUserInput('Janus', 'Nic', userData.setUserName);

// // Мы ожидаем, что значение аттрибута fullName объекта userData изменится на Janus Nic, но это не так:
// console.log(userData.fullName); // Unknown
// console.log(global.fullName); // Janus Nic


// В примере выше мы изменили глобальный объект global. Чтобы сохранить контекст функции обратного вызова, необходимо изменить способ ее вызова внутри содержащей функции, использовав функции call или apply.

// Рассмотрим, как использование call или apply может решить проблему, описанную выше.
/* Добавим еще один параметр "callbackObj", в котором будет передаваться контекст выполнения функции */

// function getUserInput(firstName, lastName, callback, callbackObj) {
//     callback.call(callbackObj, firstName, lastName);
// }

// function getUserInput(firstName, lastName, callback, callbackObj) {
//     callback.apply(callbackObj, [firstName, lastName]);
// }
// getUserInput('Janus', 'Nic', userData.setUserName, userData);
// console.log(userData.fullName); // Janus Nic

