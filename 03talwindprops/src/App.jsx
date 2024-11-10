import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card' 

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"vikas",
    age:19,
  }

  return(
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind text</h1>
       <Card username="vikas" btnText="clickme"/>       
       <Card username="vishalghandu"/>       

    </>
  )
}

export default App
