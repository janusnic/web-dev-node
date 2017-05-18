let i=1;
{
	let i=2;
	console.log(i);//=>2;
}
console.log(i);//=>1;

let x = 10;
let y = 5;

if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
  console.log(i);
}

for(let i=0;i<5;i++) console.log(i);//=> 0, 1, 2, 3, 4

console.log(i);//=>1;

if(true) var j=1;//OK
//if(true) let k=1;//!!!Так не делать - SyntaxError: Illegal let declaration in unprotected statement context.


// Областью видимости переменных, объявленных ключевым словом let, является блок, в котором они объявлены, и все его подблоки. В этом работа оператора let схожа с работой оператора var. 
// Основная разница заключается в том, что областью видимости переменной, объявленной оператором var, является вся функция, в которой она объявлена:


function varTest() {
  var x = 31;
  if (true) {
	var x = 71;  // та же переменная!
	console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
	let x = 71;  // другая переменная
	console.log(x);  // 71
  }
  console.log(x);  // 31
}

// На верхнем уровне скриптов и функций let, в отличии от var, не создает свойства на глобально объекте. Например:

var x2 = 'fox';
let y2 = 'dog';
console.log(this.x2);
console.log(this.y2);



var x3 = 3;
function func(randomize) {
   if (randomize) {
       var x3 = Math.random(); // (A) scope: whole function
       return x3;
   }
   return x3; // accesses the x from line A
}

console.log(func(false)); // undefined

var x3 = 3;
function func1(randomize) {
   var x3;
   if (randomize) {
       x3 = Math.random();
       return x3;
   }
   return x3;
}
console.log(func1(false)); // undefined

let y3 = 3;
function func2(randomize) {
   if (randomize) {
       let x = Math.random();
       return x;
   }
   return y3;
}
console.log(func2(false)); // 3


// where your node app starts
console.log("Hello const!");
// определим MY_FAV как константу и присвоим ей значение 7
const MY_FAV = 7;

// данное присваивание выдаст ошибку
//MY_FAV = 20;

// напечатает 7
console.log("my favorite number is: " + MY_FAV);

// попробуем переопределить константу, будет выкинуто исключение
//const MY_FAV = 20;

// имя MY_FAV зарезервированно константой выше, данная операция
// выкинет исключение
//var MY_FAV = 20;


const C=1;
{
  const C=2;
  console.log(C);//=>2;
}
console.log(C);//=>1;


// Важно отметить свойства области видимости уровня блока
if (MY_FAV === 7) {
    // Всё нормально. Создать константу или переменную MY_FAV можно.
    // (работает так же как и let при объявлении в блоке переменных, которые не const)
    const MY_FAV = 20;

    // MY_FAV теперь 20
    console.log("my favorite number is " + MY_FAV);

    // это попадёт в глобальный контекст и выдаст ошибку
//    var MY_FAV = 20;
}

// MY_FAV все ещё имеет значение 7
console.log("my favorite number is " + MY_FAV);

// Выдаст ошибку, потому что константа не инициализирована
//const FOO;

// const также работает с объектами
const MY_OBJECT = {"key": "value"};

// Попытка переопределить ссылку на объект вызовет исключение
//MY_OBJECT = {"OTHER_KEY": "value"};

// но, свойства объекта (ключи) можно изменять
MY_OBJECT.key = "otherValue"; // Используйте Object.freeze() для того, чтобы сделать объект неизменяемым

// То же самое применимо к массивам
const MY_ARRAY = [];
// Например, можно добавлять элементы в массив
MY_ARRAY.push("A"); // ["A"]
// Но менять ссылку на объект массива нельзя. Это вызовет исключение.
//MY_ARRAY = ["B"]

let x = 10;
let y = 5;

if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
  console.log(i);
}



// The exponentiation operator (**)

//** is an infix operator for exponentiation: x ** y

//produces the same result as Math.pow(x, y)

// Examples:

let squared = 3 ** 2; // 9

let num = 3;
num **= 2;
console.log(num); // 9
