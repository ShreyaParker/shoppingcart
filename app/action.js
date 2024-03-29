"use server";



export const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const responseData = await response.json();

    if (!responseData || !responseData.products || !Array.isArray(responseData.products)) {
        console.error("Invalid data structure:", responseData);
        return [];
    }

    const products = responseData.products;

    console.log(products);

    return products
};