"use client"
import React, {useContext} from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import {ShopContext} from "@/app/context/ShopContext";
import CartButtons from "@/app/component/CartButtons";

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
      <div className="rounded-2xl ring-blue-300 ring-1 px-3">
          <CartButtons count={count} addToCart={addToCart} removeFromCart={removeFromCart} id={item.id}/>

      </div>    </div>



    )
        ;
};

export default ProductCard;