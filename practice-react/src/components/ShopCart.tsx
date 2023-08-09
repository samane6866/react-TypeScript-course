
interface Props{
    cartItems: string[],
    onClear: () => void;
}


function ShopCart({cartItems,onClear}:Props) {
    
    return (
        <>
            
            <div>CART</div>
            <ul>
               {cartItems.map(item => <li key={item}>{item }</li>)} 
            </ul>
            <button onClick={onClear}></button>
        </>
    )
    


}
export default ShopCart;