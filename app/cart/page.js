
"use client"
import React, { useEffect, useContext, useState } from 'react';
import { ShopContext } from "@/app/context/ShopContext";
import { fetchProducts } from "@/app/action";
import CartItems from "@/app/component/CartItems";

const CartPage = () => {
    const {totalAmount,getCartItemCount } = useContext(ShopContext);
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await fetchProducts();
                setData(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl  font-bold">Cart Items</h2>

            <h1>
              total : $  {totalAmount}
            </h1>

            {data.map((product) => {
                if (getCartItemCount(product.id) !== 0) {
                    return (
                        <CartItems key={product.id} product={product}/>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default CartPage;