const User=require('../controller/user.controller');
const validateToken=require('../middleware/Auth')
module.exports=app=>{
    const router=require('express').Router();
    router.post('/signup',User.signup);
    router.post('/signin',User.signin);
    router.post('/test',validateToken,(req,res)=>{
        const user=req.user;
        res.json({
            message:"Page populated after getting the token"
        })
    });
    router.put('/follow',validateToken,User.follow);
    router.put('/unfollow',validateToken,User.unFollow);
    app.use('/api',router);
}