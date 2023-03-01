import close from '../assets/close.png'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem';

interface ShoppingCartProps{
    isOpen: boolean,
}
export const ShoppingCart = (props:ShoppingCartProps)=>{
    const {closeCart, cartItems} = useShoppingCart();
    return(
        <div className="w-[400px] h-[100vh] bg-[#444444] absolute top-0 right-0 z-50 pl-[25px] rounded-sm">
            <div className="flex w-[100%] place-content-between">
                <p className='text-gray-200 text-[30px] font-bold mt-[10px]'>Cart</p>
                <div className='hover:cursor-pointer' onClick={closeCart}>
                    <img src={close} alt=""  className='w-[30px] h-[30px] mr-[10px] mt-[20px]'/>
                </div>
            </div>
            <div className='flex flex-col space-y-5'>
                {
                    cartItems[0]!=null?(
                        cartItems.map(item=>(
                            <CartItem key={item.id} {...item} />
                        ))
                    ):(
                        <p className='font-bold text-[20px] text-center text-gray-200 mt-16'>Your shopping baskey is empty!</p>
                    )
                }
            </div>  
        </div>
    )
} 