"use client"
import React, { useState } from 'react'


const page = () => {
  const [title, settitle]= useState("")
  const [Description, setDescription]= useState("")
  const [maintask, setmaintask ]= useState([])

  const submithandler =(e)=>{
   e.preventDefault()
  setmaintask ([...maintask, {title, Description}])
   settitle("")
   setDescription("")
   console.log(maintask);
  
  }
 
  const deletehandler =(i)=>{
   let copytask= [...maintask]
   copytask.splice(i,1)
   setmaintask(copytask)

  }  

  let rendertask = <h2>No Task Available</h2>

  if (maintask.length>0){

    rendertask = maintask.map((t,i)=>{
      return ( 
      <li className= "flex items-center justify-between">
      <div className="flex justify-between mb-5 w-2/3 " >
       <h5 className='text-2xl font-semibold'>{t.title}</h5>
       <h6 className='text-xl font-semibold'>{t.Description}</h6>
      </div>
      <button 
      onClick={()=>{
        deletehandler(i)
      }}
      
      className='bg-red-400 text-white px-4 py-2 rounded font-bold ' >Delete</button>
      </li> 
      )
})
  }
  return (
    <>
     <h1 className='bg-black text-white p-5 text-5xl font-bold text-center ' >Manoj's Todo List</h1>
     <form onSubmit={submithandler} >
     <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 '
     placeholder='Enter title Here'
     value={title}
     onChange={(e)=>{settitle(e.target.value)}}
     />
     
     <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 '
     placeholder='Enter Description Here'
     value={Description}
     onChange={(e)=>{setDescription(e.target.value)}}
     />
    <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5' >Add Task</button>

     </form>
     <hr />
     <div className='p-8 bg-slate-400' >
        <ul>
          {rendertask}
        </ul>

     </div>

    </>


  )
}

export default page