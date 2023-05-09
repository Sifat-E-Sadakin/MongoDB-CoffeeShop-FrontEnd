import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import ShowCoffees from './Components/ShowCoffees'

function App() {
  
 
  let coffees = useLoaderData();
  let [data , setData] = useState(coffees)



  return (
    <>
      
      <h1>Coffee Shop </h1>

      <div className='grid grid-cols-2 gap-5'>
        {
          data.map(coffee => <ShowCoffees key={coffee._id} Data={data} setData={setData} coffee={coffee}></ShowCoffees>)
        }
      </div>
     
    </>
  )
}

export default App
