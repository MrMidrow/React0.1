import LogoType from '../../components/LogoType/LogoType'
import productLogo from '../../assets/productLogo.svg'
import {API_URL} from '../../Constants/Constants'
import './productPreview.css'
import CardItem from '../../components/CardItem/CardItem';
import {useState, useEffect} from'react';

import { Link } from 'react-router-dom';

const ProductPreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async function (){
    try {
      const reponse = await fetch(`${API_URL}/products`);
      const data = await reponse.json();
      setProducts(data)
    }catch(e){
      console.log(e)
    }
  }

  let cardItem = products.map((item) => <Link to={item.id} path="/product-preview/:id" key={item.id} ><CardItem key={item.id} logo={item.logo} title={item.name} price={item.price} quantity={item.quantity} /></Link>);

  return (
    <div className='container-products'>
      <header className='header-product-preview'>
        <LogoType src={productLogo} className={"logoType logo-product-preview"}/>
      </header>
      <main>
        <div className='product-preview'>
          {cardItem}
        </div>
      </main>
    </div>
  )
}

export default ProductPreview;