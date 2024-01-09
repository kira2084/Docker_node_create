const express=require("express");

const app=express();


app.get('/home',(req,res)=>{
    res.send({message:"OK"})
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
})