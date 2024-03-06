const express=require('express');
const router=express.Router();
const MenuItem=require('../models/Menu');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newMenu=new MenuItem(data);
        const response=await newMenu.save();
        console.log('menu data saved');
        res.status(200).json(response);

    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
});

router.get('/',async (req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data found successfully');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'intrenal server error'})
    }
});

router.get('/:MenuTaste',async(req,res)=>{
    try{
        const MenuTaste=req.params.MenuTaste;
        if(MenuTaste=='Sweet'||MenuTaste=='Sour'||MenuTaste=='Spicy'){
            const response=await MenuItem.find({taste:MenuTaste});
            console.log('response fetched');
            res.status(200).json(response);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'intrenal server error'})
    }
})

module.exports=router;