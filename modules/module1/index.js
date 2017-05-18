const add = require('./main').add;

exports.increment = function(val) {
     return add(val, 1);
 };
