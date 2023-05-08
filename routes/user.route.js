const User=require('../controller/user.controller');
module.exports=app=>{
    const router=require('express').Router();
    router.post('/signup',User.signup);
    app.use('/api',router);
}