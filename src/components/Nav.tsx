import {NavLink} from 'react-router-dom';
import basket from '../assets/basket.png';
import { useShoppingCart } from '../context/ShoppingCartContext';
export const Nav = ()=>{
    const {openCart, cartQuantity} = useShoppingCart();
    return(
        <>
            <nav className="w-[100vw] h-[70px] bg-[#111111] flex items-center sticky top-0 z-50">
                <NavLink to={'/'} className="text-gray-200 font-bold border-2 border-gray-200 border-solid w-[120px] h-[30px] text-center ml-5 hover:cursor-pointer">
                    PHONES4U</NavLink>
                <div className='text-gray-200 flex justify-end w-[100%] space-x-5 font-bold mr-10 text-[18px]'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/store'}>Browse</NavLink>

                    <div className='w-[30px] relative hover:cursor-pointer' onClick={openCart}>
                        <img src={basket} className='w-[100%]'></img>
                        <div className='w-[20px] h-[20px] rounded-full bg-red-600 absolute -bottom-2 -right-1'>
                            <p className='font-bold text-[12px] text-center'>{cartQuantity}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}