const express =require('express')
const app=express();
const db=require('./db');
const Person=require('./models/person');
const bodyParser=require('body-parser');
const MenuItem=require('./models/Menu');

app.use(bodyParser.json());


app.get('/',function(req,res) {
    res.send("hello this is abhinav")
})






const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);
app.use('/person',personRoutes);


app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})