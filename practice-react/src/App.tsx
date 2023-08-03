

import './App.css'
import Button from './components/Button'

function App() {
 

  return (
    <>
      <div>
        <h1>Hello world</h1>
        <Button color="primary" onClick={()=>console.log("I just clicked")}>My blue button</Button>
      </div>
     
    </>
  )
}

export default App
