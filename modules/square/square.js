// assigning to exports will not modify module, must use module.exports
const square = (width) => {
  return {
    area: () => width * width
  };
}

if (require.main === module) {
    // Модуль вызван напрямую
    var mySquare = square(2);
    console.log(`Module square said: The area of my square is ${mySquare.area()}`);

} else {
    // require.main не ссылается на данный модуль, значит
    // данный модуль был подключен с помощью require() в require.main
    // или другом модуле, которых был подключен в require.main
    module.exports = square;
}
