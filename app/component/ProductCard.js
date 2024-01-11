"use client"
import React, {useContext} from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {ShopContext} from "@/app/context/ShopContext";

const ProductCard = ({item}) => {
    const router= useRouter()
    const {addToCart,getCartItemCount, removeFromCart} = useContext(ShopContext)
    const count = getCartItemCount(item.id)
    return (


    <div className="flex bg-gray-300 rounded-2xl flex-col justify-center items-center">
        <div onClick={() => router.push("/product/" + item.id)}
             className="p-4 h-5/6"
        >
            <Image
                src={item.thumbnail}
                width={120}
                height={120}
                alt={item.title}
            />
            <h1>
                {item.title}
            </h1>
            <h1>
                $ {item.price}
            </h1>

        </div>
        <div className="flex rounded-2xl w-6/12 justify-around items-center ring-1 ring-blue-300 flex-row gap-2">
            {count > 0 && (
                <div className="flex items-center gap-2">
                    <button
                        className="flex items-center space-x-8"
                        onClick={() => {
                            removeFromCart(item.id);
                        }}
                    >
                        <span>-</span>
                        <span>{count}</span>
                    </button>
                </div>
            )}
            <button
                className="flex items-center"
                onClick={() => addToCart(item.id)}
            >
                {count > 0 ? <p>+</p> : <p>Add To Cart</p>}
            </button>
        </div>
    </div>



    )
        ;
};

export default ProductCard;