import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Cart.css";
function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate(); 
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const handleRemoveFromCart = (index) => {
    const product = cart[index];
    removeFromCart(index);
    toast.error(`${product.name} removed from cart successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  if (cart.length === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        {/* navigate to home page */}
        <button onClick={() => navigate('/')}>Go to Home</button>
        <ToastContainer />
      </div>
    );
  }
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
      <button onClick={() => navigate('/')}>Go to Home</button>
      <ToastContainer />
    </div>
  );
}
export default Cart;
