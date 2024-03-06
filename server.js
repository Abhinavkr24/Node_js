const express =require('express')
const app=express();
const db=require('./db');
const Person=require('./models/person');
const bodyParser=require('body-parser');
const MenuItem=require('./models/Menu');
require('dotenv').config();

app.use(bodyParser.json());

const PORT=process.env.PORT||3000;


app.get('/',function(req,res) {
    res.send("hello this is abhinav")
})






const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);
app.use('/person',personRoutes);


app.listen(PORT,()=>{
    console.log("server is listening on port 3000")
})