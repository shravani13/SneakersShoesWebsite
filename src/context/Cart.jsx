import { useReducer, useState } from "react";
import { useContext, createContext } from "react";
import { CartReducer } from "../reducers/cartReducer";

const Cart=createContext();

const CartProvider=({children})=>{
    const initialState={
        cart: []
    }
    const [cart, dispatchCart]=useReducer(CartReducer,initialState)
    const [cartDisplay, setCartDisplay]=useState(false);
    const [gotocart, setGotocart]=useState(false);
    
    return(
        <Cart.Provider value={{cart: cart, dispatchCart: dispatchCart, cartDisplay: cartDisplay, setCartDisplay: setCartDisplay, gotocart: gotocart, setGotocart: setGotocart}}>
            {children}
        </Cart.Provider>
    )
}

const useCart=()=>useContext(Cart);

export {CartProvider, useCart}