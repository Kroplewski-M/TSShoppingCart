import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/phones.json"

interface CartItemProps{
    id:number,
    quantity:number,
}

export const CartItem = ({id,quantity}:CartItemProps)=>{
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(i => i.id === id);

    return(
        <>
            <p>{JSON.stringify(item)}</p>
        </>
    )
}