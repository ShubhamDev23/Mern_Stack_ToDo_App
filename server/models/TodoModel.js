const mongoose=require('mongoose')

const TodoSchema=new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }

})

const ToddoModel=mongoose.model("todos",TodoSchema)

module.exports=ToddoModel