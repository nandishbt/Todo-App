'use client'
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const [num, setnum] = useState(1)

  const submithandler = (e)=>{
    e.preventDefault()
      setMainTask([...MainTask,{task,desc}])
      settask("")
      setdesc("")
  }

  const deletehandler = (i)=>{
    var copytask = [...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let rendertask = <h1>No task added</h1>

  if(MainTask.length>0){
    
    rendertask = MainTask.map((e,i)=>{
      return <div key={i} className='flex justify-between'> <div className='flex justify-between mb-5 w-2/3 '>
        <h3 className='text-3xl mx-4 font-serif'> {e.task}</h3>
        <h5 className='text-2xl mx-4 font-thin'>{e.desc} </h5>
        
       
        
    </div> 
    <button onClick={()=>{
      deletehandler(i)
      
    }}  className='bg-red-400 rounded px-3 py-1 mb-3'>delete</button>
    </div>
    
    })
    
  }
  return (
    
    <>
    <div className='bg-zinc-700  font-bold  text-4xl text-white text-center p-5'> MY TODO LIST</div>

<form onSubmit={submithandler}>
      <input type='text' placeholder='Enter ur task' className=' border-2 border-black rounded b   px-5 py-2 text-2xl m-8'  value={task} onChange={(e)=>{
        settask(e.target.value);
      }} />
    
      <input type='text' placeholder='Enter Description' className='border-2 border-black rounded b m-5  px-5 py-2 text-2xl' value={desc} onChange={(e)=>{
        setdesc(e.target.value);
      }}/>
    
      <button className='bg-green-400 text-white  px-4 py-2 rounded-xl m-10'> Add Task </button>

    </form>

    <div className='p-10 bg-slate-300 m-2 rounded '>   
    {rendertask}

    </div>

    
    
    </>
  )
}

export default page