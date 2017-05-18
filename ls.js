var fs = require('fs'); //После загрузки библиотеки fs мы проверяем количество аргументов, полученных через командную строку.
    if (process.argv.length <= 2) { //Если <= 2 , пользователь не передал аргументов.
        console.log("Usage: " + __filename + " path/to"); //Выводим пользователю подсказку
        process.exit(-1);
    }     

var path = process.argv[2];

fs.stat(path, function(err, stats) { //Эта функция получит объект ошибки (если она случится) и объект fs.Stats
        console.log(path);
        console.log();
        console.log(stats);
        console.log();
    
    if (stats.isFile()) {
            console.log('    file');
    }

    if (stats.isDirectory()) {
            console.log('    directory');
    }
    
    console.log('    size: ' + stats["size"]);
    console.log('    mode: ' + stats["mode"]);
    console.log('    others eXecute: ' + (stats["mode"] & 1 ? 'x' : '-'));
    console.log('    others Write:   ' + (stats["mode"] & 2 ? 'w' : '-'));
    console.log('    others Read:    ' + (stats["mode"] & 4 ? 'r' : '-'));
    console.log('    group eXecute:  ' + (stats["mode"] & 10 ? 'x' : '-'));
    
});