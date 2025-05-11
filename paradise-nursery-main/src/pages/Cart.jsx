import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="100" />
          <h4>{item.name}</h4>
          <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button><a href="/products">Continue Shopping</a></button>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
