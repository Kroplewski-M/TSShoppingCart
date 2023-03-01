import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/phones.json"
import { FormatCurrency } from "../utilities/FormatCurrency";

interface CartItemProps{
    id:number,
    quantity:number,
}

export const CartItem = (props:CartItemProps)=>{
    const {removeFromCart, increseCartQuantity, decreaseCartQuantity} = useShoppingCart();
    const item = storeItems.find(i => i.id === props.id);

    if(item == null) return null;
    return(
        <>
            <div className="w-[350px] h-[170px] bg-[#222222] rounded-md relative">
                <div className="w-[100%] flex">
                    <div className="w-[150px] h-[170px] bg-[#333333] rounded-md ">
                        <img src={item.ext} alt="phone" className="w-[150px] drop-shadow-2xl"/>
                    </div>
                    <div className="pl-5 pt-[15px]">
                        <p className="text-gray-200 font-bold text-[18px]">{item.name}</p>
                        <p className="text-gray-400">{FormatCurrency(item.cost)}</p>
                        <div className="flex">
                            <p className="text-gray-400">Quantity: {props.quantity}</p>
                            <button onClick={()=>decreaseCartQuantity(props.id)}  className="w-[25px] h-[25px] rounded-md bg-[#333333] font-bold text-gray-200 ml-5 mr-[5px]">-</button>
                            <button onClick={()=>increseCartQuantity(props.id)} className="w-[25px] h-[25px] rounded-md bg-[#333333] font-bold text-gray-200">+</button>
                        </div>
                        <p className="font-bold text-gray-200 text-[20px] text-center h-[30px]">Total: {FormatCurrency(item.cost * props.quantity)}</p>
                    <div className="w-[150px] mx-auto mt-[10px]">
                        <button onClick={()=>removeFromCart(props.id)} className="w-[100%] h-[30px] rounded-md bg-red-600 hover:bg-red-700 font-bold">Remove Item</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}