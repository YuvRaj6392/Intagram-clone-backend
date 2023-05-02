//we initialized express which is a nodejs framework to help manage server and routes
const express=require('express');
const app=express();
const PORT=8080
app.get('/',(req,res)=>{
    res.send('Hi')
})
app.listen(PORT,()=>{
    console.log(`The server is listening on PORT ${PORT}`)
})