import React from 'react';
import Image from "next/image";

const ProductDetails = ({product}) => {
    const {title,description,price,images} = product
    return (
        <div className="flex flex-col p-4  ">
            <div>
                <h2 className="font-extrabold text-3xl p-3">
                     {title}
                </h2>
            </div>
            <div className="flex flex-row">
                {images.map((imageUrl, index) => (
                    <div key={index} >
                        <Image src={imageUrl} alt={`${title} Image`} width={500} height={500} />
                    </div>
                ))}
            </div>
            <div>
                {description}
            </div>
            <div>
                <h1 className="font-bold text-2xl">
                    $   {price}
                </h1>
            </div>

        </div>


    );
};

export default ProductDetails;