const express = require('express');
const app = express();
const cors=require("cors")
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    app.use(express.static(path.join(__dirname,"client","dist")))
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
})

app.listen(1337,()=>{
    console.log("listening on port 1337");
})