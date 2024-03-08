import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './State'
import User from './User'


function App() {


  let handleClick=(num)=>{

alert(7+num)

  }

  let handleClick2=()=>{


  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

<User></User>
<State></State>
<button onClick={()=>handleClick(4)}>Click 1</button>
<button onClick={handleClick2}>Click 2</button>
<button onClick={()=>(alert(`Clicked`))}>Click 2</button>







     
    </>
  )
}

export default App
