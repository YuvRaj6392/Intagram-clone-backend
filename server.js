//we initialized express which is a nodejs framework to help manage server and routes
const express=require('express');
const app=express();
const PORT=8080;

//middleware is the code that take the incoming request and modifies it before it reaches to the ultimate route handler
const customMiddleware=(req,res,next)=>{
    console.log('this is the middleware')
    next();
    
}

//with app.use invoke the middleware for every route handler
app.use(customMiddleware)

app.get('/',(req,res)=>{
    res.send('yo')
})

app.get('/about',(req,res)=>{
    res.send('This is the about page!')
})

app.listen(PORT,()=>{
    console.log(`The server is listening at PORT ${PORT}`)
})