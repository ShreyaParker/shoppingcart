import React from 'react';

const CartButtons = ({count,addToCart,removeFromCart,id}) => {
    return (
        <div className="flex justify-around items-center  flex-row gap-2">
            {count > 0 && (
                <div className="flex items-center gap-2">
                    <button
                        className="flex items-center space-x-2 "
                        onClick={() => {
                            removeFromCart(id);
                        }}
                    >
                        <span>-</span>
                        <span>{count}</span>
                    </button>
                </div>
            )}
            <button
                className="flex items-center"
                onClick={() => addToCart(id)}
            >
                {count > 0 ? <p>+</p> : <p>Add To Cart</p>}
            </button>
        </div>
    );
};

export default CartButtons;