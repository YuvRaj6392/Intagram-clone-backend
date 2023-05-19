const validateToken=require('../middleware/Auth');
const Post=require('../controller/post.controller')
module.exports=app=>{
    const router=require('express').Router();
    router.post('/uploadpost',validateToken,Post.uploadpost)
    router.get('/showallposts',validateToken,Post.showallposts)
    router.get('/myposts',validateToken,Post.myposts)
    app.use('/api',router);
}