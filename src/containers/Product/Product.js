import './productStyle.css';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return <p>{`Chosen product is: ${id}`}</p>
}

export default Product;