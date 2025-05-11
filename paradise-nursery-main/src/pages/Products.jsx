import { plantData } from '../data/plants';
import PlantCard from '../components/PlantCard';

const Products = () => {
  const aromatic = plantData.filter(p => p.category === "Aromatic");
  const medicinal = plantData.filter(p => p.category === "Medicinal");

  return (
    <div>
      <h2>Aromatic Plants</h2>
      <div>{aromatic.map(p => <PlantCard key={p.id} plant={p} />)}</div>

      <h2>Medicinal Plants</h2>
      <div>{medicinal.map(p => <PlantCard key={p.id} plant={p} />)}</div>
    </div>
  );
};

export default Products;
