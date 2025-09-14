// import React from 'react'
// import Todo from "./components/Todo"

// function App() {
//   return (
//     <>
//       <div className='w-full h-screen flex justify-center items-center'> 
//       <Todo/>
//       </div>
//     </>
//   )
// }

// export default App

import React from 'react'
import Todo from "./components/Todo"

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-4">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <Todo />
        </div>
      </div>
    </>
  )
}

export default App
