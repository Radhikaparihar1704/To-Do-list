import React, { useState } from 'react'

function Todo() {
    const[val ,setVal] = useState("");
    const[ todo,setTodo]=useState([])
    const buttonhandler= ()=>{
        if (val.trim() === "") return;
        setTodo([...todo,val]);
        setVal("");   
    }
    return (
    <div className='w-container max-auto  h-[70vh]  bg-gray-500  rounded-md flex  flex-col'>
      <h1 className='flex justify-center font-bold text-3xl m-5  underline'>To-Do List</h1>
        <div className=" w-full  ">
        <input className="rounded-md m-2 border border-black-700 h-8 p-2 text-white " onChange={(e)=>setVal(e.target.value)} value={val} type="text" placeholder="Enter your task"/>
        <button onClick={buttonhandler} className=' h-10 w-20 bg-black text-white rounded-full m-3 px-4 py-2  border border-white '>Add +</button>
        <ul className='mt-1'>
         {todo.map((item ,index)=>(
          <li className='bg-white h-8 m-2 flex items-center p-2 rounded-md text-black border border-black-600 flex justify-between'>
          {item}
          <button onClick={()=> setTodo(todo.filter((item,id)=> index!==id))} className=' bg-black text-white rounded-full px-2 border border-white'>Delete</button>
         </li>
         ))}
          </ul>
        </div>
    </div>
  )
}

export default Todo