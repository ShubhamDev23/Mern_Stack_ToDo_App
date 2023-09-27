import React from 'react'
import { useState } from 'react';
import axios from "axios"
const Create = () => {
    const [task, setTask]=useState();

    const AddTask=()=>{
         axios.post('http://localhost:3001/add',{task:task})
        .then(result=>{
          location.reload()
        })
        .catch(err=>console.log(err))
        
    }
  return (
    <form>
      <input
      className='input-task'
      input="text"
      placeholder='Enter Your Task'
      
      onChange={(e)=>setTask(e.target.value)}
      />
      <button className='addtask'onClick={AddTask}>Add Task</button>
    </form>
  )
}

export default Create
