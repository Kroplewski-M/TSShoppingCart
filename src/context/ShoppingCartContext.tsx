import {useContext, createContext, ReactNode, useState} from 'react'
import { ShoppingCart } from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ShoppingCartProviderProps{
    children: ReactNode
}
interface CartItem{
    id:number,
    quantity:number,
}
interface ShoppingCartContext{
    openCart: ()=>void,
    closeCart: ()=>void,
    getItemQuantity: (id:number) => number,
    increseCartQuantity: (id:number) => void,
    decreaseCartQuantity: (id:number) => void,
    removeFromCart: (id:number) => void,
    cartQuantity: number,
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = ()=>{
    return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({children}:ShoppingCartProviderProps)=>{
    const [cartItems,setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[]);
    const [isOpen, setIsOpen] = useState(false);

    const cartQuantity = cartItems.reduce((quantity, item) =>
        item.quantity + quantity,
        0
    );
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    function getItemQuantity(id:number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increseCartQuantity(id:number){
        setCartItems(currItems =>{
            if(currItems.find(item=> item.id === id) == null ){
                return [...currItems, {id, quantity:1}]
            }else{
                return currItems.map(item =>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity+ 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id:number){
        setCartItems(currItems =>{
            if(currItems.find(item=> item.id === id)?.quantity == 1 ){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item =>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity- 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id:number){
        setCartItems(currItems =>{
            return currItems.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider value={{getItemQuantity, increseCartQuantity,decreaseCartQuantity,removeFromCart, cartItems,cartQuantity,openCart,closeCart}}>
        {children}
        {
            isOpen?(
                <ShoppingCart isOpen={isOpen}/>
            ):(
                <div></div>
            )
        }
    </ShoppingCartContext.Provider>
}