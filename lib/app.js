const app = require('./module1');
if (app.main === module) {
    // Модуль вызван напрямую
    console.log(`The main module`);
} else {
    console.log(`The main application`);
    // require.main не ссылается на данный модуль, значит
    // данный модуль был подключен с помощью require() в require.main
    // или другом модуле, которых был подключен в require.main

}
