import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector(state => state.cart.cartItems.length);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
};

export default Navbar;
