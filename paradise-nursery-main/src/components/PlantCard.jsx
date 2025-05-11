import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} width="150" />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>${plant.price}</p>
      <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
