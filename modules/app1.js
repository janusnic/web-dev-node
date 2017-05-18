function Post(title){
    this.title = title;
} 

Post.prototype.getHelloWorld = (item) => {
    console.log('Hello ' + item.title);
};

let hello = new Post();
let world = new Post('World!');

hello.getHelloWorld(world);
