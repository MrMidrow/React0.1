import './productStyle.css';
import ProductItem from "../../components/ProductItem/ProductItem"
import { useParams } from 'react-router-dom';
import { API_URL } from '../../Constants/Constants';
import { useState, useEffect } from 'react';
import LogoType from '../../components/LogoType/LogoType';
import productLogo from '../../assets/productLogo.svg'

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

  return (
    <>
      <section className='header-product'>
        <LogoType src={productLogo} />
      </section>
      <ProductItem category={isData.category} title={isData.name} logo={isData.logo} quantity={isData.quantity} price={isData.price} description={isData.description} />
    </>
  )
}

export default Product;