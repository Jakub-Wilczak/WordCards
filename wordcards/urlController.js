const express = require('express')
fs = require('fs')

const app=express();
app.use(express.static(__dirname + '/public'));


app.listen(3000)
console.log("SERVER IS LISTETNING ON PORT 3000")

app.get("/", (req,res)=>{
    res.sendFile('public/html/index.html', {root:__dirname})
})

app.get('/field', (req,res)=>{
    if(req.query.parameter!=null){
        res.end("<p>"+req.query.parameter+"</p>")
    }
})

app.use((req,res)=>{
    res.sendFile('public/html/404.html', {root:__dirname})
})