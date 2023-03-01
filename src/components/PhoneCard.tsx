import { useShoppingCart } from "../context/ShoppingCartContext"
import { FormatCurrency } from "../utilities/FormatCurrency"

interface Phone{
    id: number,
    brand: string,
    name: string,
    memory: string,
    cost: number,
    colors: string[],
    ext: string,
}

export const PhoneCard = (props:Phone)=>{
    const {getItemQuantity, increseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(props.id)

    return(
        <>
            <div className="w-[250px] h-[500px] bg-[#444444] rounded-md relative hover:cursor-pointer ">
                <div className="w-[100%] h-[250px] bg-[#333333] absolute top-0 rounded-md z-0">
                </div>
                <img src={props.ext} alt="phone" className="w-[250px] mx-auto relative z-10 drop-shadow-2xl"/>
                <div className="flex justify-between mt-[10px]">
                    <p className="font-bold ml-[15px] text-[17px]">{props.name}</p>
                    <p className="mr-[15px] font-bold text-gray-300">{FormatCurrency(props.cost)}</p>
                </div>
                <p className="ml-[15px] mt-[10px] text-gray-400 font-semibold">Brand: <span className="text-gray-200 font-bold pl-[5px]"> {props.brand} </span></p>
                <p className="ml-[15px] mt-[10px] text-gray-400 font-semibold">Memory: <span className="text-gray-200 font-bold pl-[5px]"> {props.memory} </span></p>
                <p className="ml-[15px] mt-[10px] text-gray-400 font-semibold">Colors: <span className="text-gray-200 font-bold pl-[5px]"> {props.colors} </span></p>
                {
                    quantity == 0?(
                        <>
                            <div className="w-[200px] mx-auto mt-[30px]" onClick={()=>increseCartQuantity(props.id)}>
                                <button className="w-[100%] h-[30px] text-[#222222] bg-gray-200 hover:bg-[#222222] hover:text-gray-200 font-semibold rounded-md">
                                Add to Basket</button>
                            </div>
                        </>
                    ):(
                        <div className="w-[100%]">
                            <div className="flex space-x-5 bg-[#333333] w-[200px] mx-auto place-content-center p-[5px] rounded-md mt-[10px]">
                                <button className="w-[30px] h-[30px] rounded-md bg-gray-300 text-[#222222] font-bold hover:bg-red-700"
                                onClick={()=>decreaseCartQuantity(props.id)}>-</button>
                                <p className="font-bold text-gray-300">{quantity} in Cart</p>
                                <button className="w-[30px] h-[30px] rounded-md bg-gray-300 text-[#222222] font-bold hover:bg-green-700 pb-[2px]"
                                onClick={()=>increseCartQuantity(props.id)}>+</button>
                            </div>
                            <div className="w-[100px] mx-auto mt-[15px]">
                                <button className="w-[100px] h-[30px] rounded-md bg-red-700 text-[#222222] font-bold hover:bg-red-800 pb-[2px]"
                                onClick={()=>removeFromCart(props.id)}>Remove</button>
                            </div>

                        </div>
                    )
                }

            </div>
        </>
    )
}