import React, {useContext} from 'react';
import Image from "next/image";

import CartButtons from "@/app/component/CartButtons";
import {ShopContext} from "@/app/context/ShopContext";

const ProductDetails = ({product}) => {
    const {title,description,price,images,id} = product
    const {getCartItemCount,addToCart,removeFromCart} = useContext(ShopContext)
    const count = getCartItemCount(id)
    return (
        <div className="flex flex-col p-4 gap-4 ">
            <div>
                <h2 className="font-extrabold text-3xl p-3">
                     {title}
                </h2>
            </div>
            <div className="flex flex-row ">
                {images.map((imageUrl, index) => (
                    <div key={index} >
                        <Image src={imageUrl} alt={`${title} Image`} width={700} height={500} />
                    </div>
                ))}
            </div>
            <div>
                {description}
            </div>
            <div>
                <h1 className="font-bold text-2xl">
                    $ {price}
                </h1>
                <div className="rounded-2xl w-2/12  ring-blue-300 ring-1 px-9">
                    <CartButtons  count={count} addToCart={addToCart} removeFromCart={removeFromCart} id={id}/>

                </div>
            </div>


        </div>


    );
};

export default ProductDetails;