"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
       e.preventDefault()
       setmainTask([...mainTask, {title,desc}]);
       settitle("")
       setdesc("")
  }

  const deldleeteHandler = (i)=>{
      let copytask = [...mainTask]
      copytask.splice(i,1)
      setmainTask(copytask)   
  }
   
  let renderTask = <h2>No Task written</h2>

 if(mainTask.length>.0){
  renderTask = mainTask.map((t,i)=>{
    return (
    <li key={i} className='flex items-center justify-between'>
      <div className='flex items-center justify-between px-5 py-5 bg-slate-900 text-white w-2/3 '>
       <h5 className='text-2xl font-semibold'>{t.title}</h5>
       <h6 className='text-xl font-medium'>{t.desc}</h6>
    </div>
    <button onClick={()=>{
      deldleeteHandler()
    }} className='text-4xl'>❌</button>
    </li>
    );
})
 }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-3xl font-semibold text-center'>My Todo-List</h1>

      <form onSubmit={submitHandler}>
        <input type ="text" placeholder = "Write your task" className='text-2xl border-zinc-700 border-2 m-5 px-4 py-2 
        '
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}
        />

        <input type ="text" placeholder = "Wrte Description here" className='text-2xl border-zinc-700 border-2 m-5 px-4 py-2 '
        
        value={desc}
        onChange={(e)=>{
            setdesc(e.target.value)
        }}
        />

        <button className='px-5 py-4 rounded-2xl font-semibold bg-black text-white'>Add Task</button>
      </form>
        <hr/>
       <div className='p-8 bg-slate-300'>
          <ul className='flex flex-col gap-5'>
            {renderTask}
          </ul>
       </div>
    </>
  )
}

export default page