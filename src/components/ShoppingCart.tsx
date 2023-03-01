import close from '../assets/close.png'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { FormatCurrency } from '../utilities/FormatCurrency';
import { CartItem } from './CartItem';
import storeItems from "../data/phones.json"

interface ShoppingCartProps{
    isOpen: boolean,
}
export const ShoppingCart = (props:ShoppingCartProps)=>{
    const {closeCart, cartItems} = useShoppingCart();
    return(
        <div className="w-[400px] h-[100vh] bg-[#444444] fixed top-0 right-0 z-50 pl-[25px] rounded-sm pb-[100px] overflow-y-scroll">
            <div className="flex w-[100%] place-content-between">
                <p className='text-gray-200 text-[30px] font-bold mt-[10px]'>Cart</p>
                <div className='hover:cursor-pointer' onClick={closeCart}>
                    <img src={close} alt=""  className='w-[30px] h-[30px] mr-[10px] mt-[20px]'/>
                </div>
            </div>
            <div className='flex flex-col space-y-5 mt-16'>
                {
                    cartItems[0]!=null?(
                        <>
                        {
                            cartItems.map(item=>(
                                <CartItem key={item.id} {...item} />
                            ))
                        }
                            <div className='w-[100%]'>
                                <p className='font-bold text-gray-200 text-[25px] text-right mr-5'>Total: 
                                <span className='pl-[10px]'>
                                    {FormatCurrency(cartItems.reduce((total,CartItem)=>{
                                        const item = storeItems.find(i => i.id === CartItem.id)
                                        return total + (item?.cost || 0) * CartItem.quantity
                                    },0))}
                                </span>
                                </p>
                            </div>
                        </>
                        )
                    :(
                        <p className='font-bold text-[20px] text-center text-gray-200 mt-16'>Your shopping baskey is empty!</p>
                    )
                }
            </div>  
        </div>
    )
} 