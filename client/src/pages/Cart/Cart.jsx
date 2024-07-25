import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Cart.css';

function Cart({ user, toggleCartPopup, updateCartCount }) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user) {
        try {
          const response = await axios.get(`http://localhost:5000/cart/${user.id}`);
          setCartProducts(response.data);
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      }
    };

    fetchCartItems();
  }, [user]);

  const handleDeleteFromCart = async (item_id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/delete/${productId}`);
      const updatedCartProducts = cartProducts.filter(items=> user.id !== user_id);
      setCartProducts(updatedCartProducts);
      updateCartCount(updatedCartProducts.length); 
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const calculateTotal = () => {
    return cartProducts.reduce((total, items) => total + parseFloat(items.items. price), 0).toFixed(2);
  };

  return (
    <div className='cart-popup'>
      <div className='cart-popup-inner'>
        <button className='close-btn' onClick={toggleCartPopup}>X</button>
        <h2>Shopping Cart</h2>
        <div className='cart-items'>
          {cartProducts.map(product => (
            <div key={product.id} className='cart-item'>
              <p>{product.products.productName}</p>
              <p>${product.products.productPrice}</p>
              <button onClick={() => handleDeleteFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className='cart-total'>
          <p>Total: ${calculateTotal()}</p>
        </div>
        <button className='checkout-btn'>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
