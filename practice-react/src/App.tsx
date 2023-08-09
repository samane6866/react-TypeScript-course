import Alarm from './components/Alarm'
import './App.css'
import Button from './components/Button'
import { useState } from 'react'
import Card from './components/Card'
import Like from "./components/Like"
import NavBar from './components/NavBar'
import ShopCart from './components/ShopCart'

function App() {
  // 1> we need useState to visibility of alart,we will render the Alert only when is true, so we need to use state hook:
  // 2> we want to display alert only when alertvisibility is true
  // 3> we use &&(conditional and) and {} to aske like this;(is alertvisibility true?)so if is true will show Alarm component.
 
  const [alertVisibility, setAlertVisibility] = useState(false)

  // here we are going to share state between components, the app component is the main component that will share his state with thoes component that we will create,(in this case), where is located our state, will be (parent state)

  const [cartItems, setCartItems] = useState(["product1", "product2"]);
  
  

  return (
    <>
      <div>

        <NavBar itemCartCount={cartItems.length}></NavBar>

        <ShopCart  cartItems={cartItems} onClear={()=> setCartItems([])}></ShopCart>




        <Like onClick={()=>console.log("clickeeed")}></Like>
        <h1>Hello world</h1>
        { alertVisibility &&<Alarm onClose={()=>setAlertVisibility(false)}>My Alert</Alarm>}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>My blue button</Button>
        <Card/>
      </div>
     
    </>
  )
}

export default App;
