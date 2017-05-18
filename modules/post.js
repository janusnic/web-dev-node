function Post(title){
    this.title = title;
} 

Post.prototype.getHelloWorld = (item) => {
    console.log('Hello ' + item.title);
};

exports.Post = Post; 