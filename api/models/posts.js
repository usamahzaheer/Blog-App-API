const fs = require('fs');
const PATH = "./data.json";

class post {
    get(){
        return this.readData();
    }
    getIndividualBlog(postId){
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postId);
        return foundPost;
    }
    add(newPost){
        /* Add new post */
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);

    }
    readData(){
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }
    storeData(rawdata){
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);

    }
}
module.exports = post