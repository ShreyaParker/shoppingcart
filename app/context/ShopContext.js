"use client"
import {createContext, useState} from "react";

export const ShopContext = createContext(null)

export const ShopProvider = ({children})=>{
    const [cartItems, setCartItems] = useState({})


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1}))
            console.log(cartItems)
        } else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
            console.log(cartItems)
        }
    }

    const removeFromCart = (itemId) => {
        if(!cartItems[itemId] && cartItems[itemId] === 0) return;
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] -1 }))
    }

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((acc, count) => acc + count, 0);
    };

    const getCartItemCount = (itemId) => {
        if (itemId in cartItems) {

            return cartItems[itemId]
        }


        return 0
    }
    const contextValue = {
        getTotalCartItems,
        addToCart,
        getCartItemCount,
        removeFromCart

    };
    return(
        <ShopContext.Provider value ={contextValue}>
            <div>
                {children}
            </div>
        </ShopContext.Provider>
    )
}