import React, {useContext} from 'react';
import Image from "next/image";
import CartButtons from "@/app/component/CartButtons";
import {ShopContext} from "@/app/context/ShopContext";

const CartItems = ({product}) => {
    const {getCartItemCount,addToCart,removeFromCart} = useContext(ShopContext)
    const {price,title,thumbnail,id } = product
    const count = getCartItemCount(id)
    return (
        <div className="bg-gray-300 flex flex-row justify-around items-center rounded-2xl w-11/12 p-2 m-2">
            <Image
                src={thumbnail}
                width={120}
                height={120}
                alt={title}
            />

            <div>
                <h1>
                    {title}
                </h1>
                <h1>
                    $ {price}
                </h1>

            </div>

            <div className="rounded-2xl ring-blue-300 ring-1 px-3 ">
                <CartButtons count={count} addToCart={addToCart} removeFromCart={removeFromCart} id={id}/>

            </div>

        </div>
    );
};

export default CartItems;