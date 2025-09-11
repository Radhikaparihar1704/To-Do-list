import { useState } from 'react'
import Todo from "./components/Todo"

function App() {
  return (
    <>
      <div className='w-full h-screen bg-zinc-200 flex justify-center items-center'> 
      <Todo/>
      </div>
    </>
  )
}

export default App
