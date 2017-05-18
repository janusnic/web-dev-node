// JavaScript используется область видимости на уровне функций. 
var x = 1;
console.log(x); // 1
if (true) { // Блоки кода не создают новую область видимости.
    var x = 2;
    console.log(x); // 2
}
console.log(x); // 2 Только функции создают новые области видимости.


// временная область видимости

function foo() {
    var x = 1;
    if (x) {
            (function () {
                    var x = 2;  // временная область видимости
                    console.log(x);
            }());
    }
    console.log(x); // x всё ещё 1.
}

foo();

// Объявление переменной или функции попадают в память в процессе фазы компиляции, но остаются в коде на том месте, где вы их объявили.
catName("Puma");

function catName(name) {
  console.log("Мою кошку зовут " + name);
}

// Переменные могут быть инициализированы и использованы до их объявления. 
num = 6;
num + 7;
var num;
console.log(num);

var x = 1; // Инициализируем x
console.log(x + " " + y);  // y - undefined
var y = 2;

//код выше и код ниже одинаковые
var x = 1; // Инициализируем x
var y; // Объявляем y
console.log(x + " " + y);  // y - undefined
y = 2; // Инициализируем y
