"use client"
import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";

const ProductCard = ({item}) => {
    const router= useRouter()

    return (
        <div onClick={()=>router.push("/product/" + item.id)} className="flex bg-slate-400 flex-col justify-center items-center">
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

    );
};

export default ProductCard;