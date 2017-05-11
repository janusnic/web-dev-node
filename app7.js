const post = require('./post');

let hello = new post.Post();
let world = new post.Post('World!');

hello.getHelloWorld(world);
