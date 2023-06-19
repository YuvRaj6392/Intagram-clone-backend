const validateToken=require('../middleware/Auth');
const Post=require('../controller/post.controller')
module.exports=app=>{
    const router=require('express').Router();
    router.post('/uploadpost',validateToken,Post.uploadpost)
    router.get('/showallposts',validateToken,Post.showallposts)
    router.get('/myposts',validateToken,Post.myposts)
    router.put('/like',validateToken,Post.like)
    router.put('/unlike',validateToken,Post.unlike)
    app.use('/api',router);
}