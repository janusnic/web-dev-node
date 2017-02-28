// ES2016 feature: Array.prototype.includes


// The Array method includes
// The Array method includes has the following signature:
// Array.prototype.includes(value : any) : boolean

// It returns true if value is an element of its receiver (this) and false, otherwise:
console.log( ['a', 'b', 'c'].includes('a')); // true
console.log( ['a', 'b', 'c'].includes('d')); // false


// includes is similar to indexOf – the following two expressions are mostly equivalent:

arr.includes(x)
arr.indexOf(x) >= 0

//The main difference is that includes() finds NaN, whereas indexOf() doesn’t:

> [NaN].includes(NaN) //true
> [NaN].indexOf(NaN) // -1

//includes does not distinguish between +0 and -0 (which is how almost all of JavaScript works):

> [-0].includes(+0) //true

//Typed Arrays will also have a method includes():

let tarr = Uint8Array.of(12, 5, 3);
console.log(tarr.includes(5)); // true
