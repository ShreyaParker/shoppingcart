"use client"
import {createContext, useEffect, useState} from "react";

import {getProductDetails} from "@/app/productDetailAction";

export const ShopContext = createContext(null)

export const ShopProvider = ({children})=>{
    const [cartItems, setCartItems] = useState({})

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const getTotalAmount = async () => {
            let Amount = 0;

            for (const item in cartItems) {
                const itemInfo = await getProductDetails(item);
                 Amount += itemInfo[0].price * cartItems[item];
            }


            setTotalAmount(Amount);
        };


        getTotalAmount();
    }, [cartItems]);
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]: 1}))
        } else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
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
        removeFromCart,
        totalAmount

    };
    return(
        <ShopContext.Provider value ={contextValue}>
            <div>
                {children}
            </div>
        </ShopContext.Provider>
    )
}