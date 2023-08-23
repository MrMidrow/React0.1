import LogoType from '../../components/LogoType/LogoType'
import productLogo from '../../assets/productLogo.svg'
import {API_URL} from '../../Constants/Constants'
import './productPreview.css'
import CardItem from '../../components/CardItem/CardItem';
import {useState, useEffect} from'react';

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

  return (
    <div className='container-products'>
      <header className='header-product-preview'>
        <LogoType src={productLogo} className={"logoType logo-product-preview"}/>
      </header>
      <main>
        <div className='product-preview'>
          {products.map(item => <CardItem logo={item.logo} title={item.name} price={item.price} quantity={item.quantity}/>)}
        </div>
      </main>
    </div>
  )
}

export default ProductPreview;