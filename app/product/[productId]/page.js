"use client"
import React, { useEffect, useState } from 'react';

import ProductDetails from "@/component/ProductDetails";
import {getProductDetails} from "@/app/productDetailAction";

const ProductsPage = ({ params }) => {
    const [productDetails, setProductDetails] = useState([]);


    const getDetails = async () => {
        try {
            const details = await getProductDetails(params.productId);
            setProductDetails(details);



        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className="sm:p-10  p-8 flex flex-col gap-10">
            {   productDetails.map((product) => (
                    <ProductDetails key={product.id} product={product}/>
                ))
            }

        </div>
    );
};

export default ProductsPage;