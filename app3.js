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
//и, как писалось выше:
const C=1;
{
	const C=2;
	console.log(C);//=>2;
}
console.log(C);//=>1;


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
