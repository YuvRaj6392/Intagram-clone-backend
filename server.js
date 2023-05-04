//we initialized express which is a nodejs framework to help manage server and routes
const express=require('express');
const app=express();

//mongoose helps in communication with the database
const mongoose=require('mongoose');
const PORT=8080;

const {MONGOURI}=require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log('connected to mongodb')
  }).catch((ex)=>{
    console.log(ex)
    process.exit()
    //By calling process.exit(), the Node.js process is terminated, and the application will stop running. This is a common approach to handle critical errors that cannot be recovered from, ensuring that the application does not continue to run in an undefined state.
  })

app.listen(PORT,()=>{
    console.log(`The server is listening at PORT ${PORT}`)
})