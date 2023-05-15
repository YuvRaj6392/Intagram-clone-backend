const User=require('../controller/user.controller');
const validateToken=require('../middleware/Auth')
module.exports=app=>{
    const router=require('express').Router();
    router.post('/signup',User.signup);
    router.post('/signin',User.signin);
    router.post('/test',validateToken,(req,res)=>{
        res.json({
            message:"Page populated after getting the token"
        })
    });
    app.use('/api',router);
}