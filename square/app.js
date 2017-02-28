const square = require('./square.js');
if (require.main === module) {
    // Модуль вызван напрямую
    var mySquare = square(2);
    console.log(`The area of my square is ${mySquare.area()}`);

} else {
    // require.main не ссылается на данный модуль, значит
    // данный модуль был подключен с помощью require() в require.main
    // или другом модуле, которых был подключен в require.main

}
