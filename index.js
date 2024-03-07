
const express = require("express");
const app= express();
const port=3000


app.get("/",(req,res)=>{
    res.send("<h1>olá</h1>")
})






app.listen(port,(error)=>{
    if(error){
        console.log("servidor não iniciado ",error);
    }else{
        console.log(`servidor iniciado com suceeso na porta${port}`);
    }
})
