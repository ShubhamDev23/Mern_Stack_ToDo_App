const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const ToddoModel=require('./models/TodoModel');
const bodyParser = require('body-parser');
const app=express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/test');

app.post('/add',async(req,res)=>{
    const task=req.body.task
    ToddoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.get('/get',async(req,res)=>{
    ToddoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put('/update/:id',async(req,res)=>{
    const {id}=req.params;
    ToddoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    ToddoModel.findByIdAndDelete({id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log(`server statred as `)
})