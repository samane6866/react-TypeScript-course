import Alarm from './components/Alarm'
import './App.css'
import Button from './components/Button'
import { useState } from 'react'
import Card from './components/Card'
import Like from "./components/Like"

function App() {
  // 1> we need useState to visibility of alart,we will render the Alert only when is true, so we need to use state hook:
  // 2> we want to display alert only when alertvisibility is true
  // 3> we use &&(conditional and) and {} to aske like this;(is alertvisibility true?)so if is true will show Alarm component.
 
   const [alertVisibility, setAlertVisibility]=useState(false)

  return (
    <>
      <div>
        <Like onClick={()=>console.log("i just clicked")}></Like>
        <h1>Hello world</h1>
        { alertVisibility &&<Alarm onClose={()=>setAlertVisibility(false)}>My Alert</Alarm>}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>My blue button</Button>
        <Card/>
      </div>
     
    </>
  )
}

export default App;
