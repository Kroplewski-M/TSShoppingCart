import {NavLink} from 'react-router-dom';
import basket from '../assets/basket.png';
export const Nav = ()=>{

    return(
        <>
            <nav className="w-[100vw] h-[70px] bg-[#111111] flex items-center sticky top-0 z-50">
                <p className="text-gray-200 font-bold border-2 border-gray-200 border-solid w-[120px] h-[30px] text-center ml-5">
                    PHONES4U</p>
                <div className='text-gray-200 flex justify-end w-[100%] space-x-5 font-bold mr-10 text-[18px]'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/store'}>Browse</NavLink>
                    <NavLink to={'/basket'}><img src={basket} className='w-[30px]'></img> </NavLink>

                </div>

            </nav>
        </>
    )
}