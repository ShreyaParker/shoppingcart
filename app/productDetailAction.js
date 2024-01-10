"use server"
export const getProductDetails = async (productId) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const responseData = await response.json();
        return [responseData];
    } catch (error) {
        console.error('Error fetching product details:', error);
        return [];
    }
};