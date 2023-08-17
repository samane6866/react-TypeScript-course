import Alarm from "./components/Alarm";
import "./App.css";
import Button from "./components/Button";
import { Children, useState } from "react";
import Card from "./components/Card";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import ShopCart from "./components/ShopCart";
import ExpandableText from "./ExpandableText";
import Form from "./components/Form";
import FormState from "./components/FormState";
import Formhook from "./components/Formhook";

function App() {
  // 1> we need useState to visibility of alart,we will render the Alert only when is true, so we need to use state hook:
  // 2> we want to display alert only when alertvisibility is true
  // 3> we use &&(conditional and) and {} to aske like this;(is alertvisibility true?)so if is true will show Alarm component.

  const [alertVisibility, setAlertVisibility] = useState(false);

  // here we are going to share state between components, the app component is the main component that will share his state with thoes component that we will create,(in this case), where is located our state, will be (parent state)

  const [cartItems, setCartItems] = useState(["product1", "product2"]);

  // in this exercise game we want update the value of property of player ,name that now is john and we want update that to Bob, so for that we are using spread method to expand our object, the way that i did the exercise is working fine for this case exactly,but if in future i add new property to player i should to write again thoes property,i will write other sloution in comment in case that we add new property at game in future
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const handleClick = () => {
    setGame({ ...game, player: { name: "Bob" } });

    // setGame({...game,player:{...game.player,name:"Bob"}})
  };

  const [pizza, setPizza] = useState({
    name: "Spicy pepperoni",
    topping: ["Mushroom"],
  });

  const handlePizza = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "cheese"] });
  };

  // update an array of object
  const [shop, setShop] = useState({
    discount: 1,
    items: [
      { id: 1, title: "product1", quantity: 1 },
      { id: 2, title: "product2", quantity: 1 },
    ],
  });

  // const handleShop = () => {
  //    setShop({ ...shop, items: shop.items.map(i => i.id === 1 ? { ...i, quantity: 2 } : i) })

  // removing title
  //   setShop({...shop,items:shop.items.filter(item => item.title !== "product1") })
  // }

  return (
    <>
      <div>
        <Formhook></Formhook>
        <FormState></FormState>
        <Form></Form>
        <ExpandableText maxChars={10}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          fuga inventore a molestias dolorem ex, sint similique doloremque
          dignissimos quos in, esse vel quaerat voluptates culpa magni illo.
          Nihil eum similique ducimus obcaecati. Corporis dolorum perspiciatis
          nihil nesciunt quas reiciendis culpa, voluptatem quia nam! Enim illum
          molestiae ut temporibus mollitia exercitationem, tempore officiis!
          Maiores facilis nam ipsa, a et, obcaecati fuga voluptas maxime ducimus
          blanditiis dolore architecto aspernatur laboriosam perferendis qui
          quas laudantium. Excepturi, quasi blanditiis aspernatur veritatis
          atque architecto dolore perferendis id eligendi deleniti laudantium
          accusamus obcaecati unde quo vitae assumenda voluptate dolorum illo!
          Corrupti quas explicabo ut ullam.
        </ExpandableText>
        <div>
          <h1>Game</h1>
          <p>Player Name: {game.player.name}</p>
          <button onClick={handleClick}>Change Player Name</button>
        </div>

        <div>
          <h1>pizza</h1>
          <p>
            add a topping to your{pizza.name} : {pizza.topping}
          </p>
          <button onClick={handlePizza}>add more topping to your pizza</button>
        </div>

        <NavBar itemCartCount={cartItems.length}></NavBar>
        <ShopCart
          cartItems={cartItems}
          onClear={() => setCartItems([])}
        ></ShopCart>
        <Like onClick={() => console.log("clickeeed")}></Like>
        <h1>Hello world</h1>
        {alertVisibility && (
          <Alarm onClose={() => setAlertVisibility(false)}>My Alert</Alarm>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          My blue button
        </Button>
        <Card />
      </div>
    </>
  );
}

export default App;
