const conf = require('./config.js');
if (require.main === module) {
    // Модуль вызван напрямую

    console.log(`My main is an application`);

} else {
    console.log(`My main is an module`);
    // require.main не ссылается на данный модуль, значит
    // данный модуль был подключен с помощью require() в require.main
    // или другом модуле, которых был подключен в require.main

}
