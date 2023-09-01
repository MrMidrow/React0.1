import './productStyle.css';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../Constants/Constants';
import { useState, useEffect } from 'react';

const Product = () => {
  const { id } = useParams();
  const [isData, setIsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (!isLoaded) getProduct();
  }, [isLoaded]);

  const getProduct = async function () {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);
      const data = await response.json();
      setIsData(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoaded(true)
  };
  console.log(isData)
  
  return (
    <></>
  )
}

export default Product;