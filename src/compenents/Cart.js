import React, { useContext } from 'react';
import { ProductContext } from '../compenents/ProductContext';
import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';


const Cart = () => {

    const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);
    console.log('Cart:', cart);

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
    const subtotal = cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );


    return (
        <div className="cart-container">
            <Navbar />

            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is currently empty</p>
            ) : (
                <ul>
                    {cart.map((product) => {
                        const totalPrice = product.price * product.quantity;
                        return (
                            <li key={product.name}>
                                <h2>{product.name}</h2>
                                <img src={product.image} alt={product.name} />
                                <p>Price: ${product.price}</p>
                                <p>Size: {product.size}</p>
                                <p>Color: {product.color}</p>
                                <div className=" buttons">
                                    <button onClick={() => updateQuantity(product, product.quantity - 1)}>
                                        -
                                    </button>
                                    <p>Quantity: {product.quantity}</p>
                                    <button onClick={() => updateQuantity(product, product.quantity + 1)}>
                                        +
                                    </button>
                                    <button onClick={() => removeFromCart(product)}>Remove</button>
                                </div>
                                <p>Total Price: ${totalPrice}</p>
                            </li>
                        );
                    })}
                    

                    <div className="right-checkout-section">

                        <h2>Subtotal</h2>
                        <p>${subtotal}</p>
                        <p>Items: {totalQuantity}</p>
                        <button>Checkout</button>


                    </div>
                </ul>
            )}
        </div>


    );
};
export default Cart;

