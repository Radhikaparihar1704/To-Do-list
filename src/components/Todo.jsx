import React, { useState } from 'react'

function Todopractice() {
   const[val,setval] =useState("");
   const[task,settask]=useState([]);
   const[edittask ,setedittask]=useState(null);
//add button
 const buttonhandler= ()=> {
   if (val.trim() === "") return;
      if (edittask !== null) {
         const updated = [...task];
         updated[edittask].text = val;
         settask(updated);
         setedittask(null);
      } else {
         
         settask([...task, { text: val, onactive: false }]);
      }
      setval("");
   
  }

 //remove button

const  removebutton= (i)=>{
    settask(task.filter((item,index)=> index!==i))
}
//Edit button 

const edit =(index)=>{
  setedittask(index);
  setval(task[index].text);
};


//checkbox
const checkbox = (i)=>{
  settask(task.map((item,index)=>
    index==i ?{...item , onactive:!item.onactive }:item
  ))


};

  return (
    <div className='h-screen w-[50vw] text-center '>
         <h1 className='mt-10 text-5xl'>TO-DO List</h1>
         <div className='w-full flex items-center justify-between mt-10'>
         <input onChange={(e)=> setval(e.target.value)}  className='px-6  py-2 border-2 border-black-600 rounded-md text-lg 'placeholder='Enter a Task ' type="text" value={val}/>
         <button onClick={()=>buttonhandler()} className="bg-green-300 h-12 w-26 rounded-full mr-5 "> ADD+</button>
         </div>
         <ul  className= "mt-10">
           {task.map((item, i) => (
            <li className ={`h-10 rounded-md ${item.onactive ?"bg-green-300" :"bg-white"}  border border-black-200 text-lg mb-3 flex justify-between px-5 py-1`}>
             <input onClick={()=>checkbox(i)} checked= {item.onactive}type="checkbox" />
             {item.text}
             <div>
               {item.onactive ? (
              <span className="text-green-700 font-semibold">Completed..!</span>
              ) : (
             <>
             <button onClick={()=>edit(i)} className='bg-yellow-400 h-full rounded-full px-2 '>Edit</button>
             <button onClick={()=>removebutton(i)} className='bg-red-400 h-full rounded-full px-2 ml-4'>Delete</button>
             </>
        )}
        </div>
            </li>
           ))}
         </ul>
    </div>
  )
}

export default Todopractice;

