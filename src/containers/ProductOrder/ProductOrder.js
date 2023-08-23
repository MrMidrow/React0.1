import LogoType from '../../components/LogoType/LogoType';
import Button from '../../components/Button/Button';
import proguctLogo from '../../assets/productLogo.svg'
import { GrAdd } from 'react-icons/gr';
import { VscAccount } from "react-icons/vsc"
import './productOrder.css'
import Order from '../../components/Order/Order';
import { API_URL } from '../../Constants/Constants';
import { useState, useEffect } from 'react';

const ProductOrder = () => {

  const [Product, setProduct] = useState([])
  useEffect(()=>{
    getProduct()
  }, [])

  const getProduct = async function () {
    try {
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  };

  const postProduct = async function () {
    try {
      const response = await fetch(`${API_URL}/products`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='productOrder'>
      <div className='header'>
        <LogoType src={proguctLogo} className={"logo"} />
        <div className='row-button'>
          <div className='previews'>
            <VscAccount className='acc' />
            <Button type="button" className={'preview btn-product'} text='Preview' />
          </div>
          <div className='addProd'>
            <GrAdd className="add" />
            <Button type="button" className={'btn-product addProducts'} text='Add product' />
          </div>
        </div>
      </div>
      <div className='main'>
        <h1>Products</h1>
        <Order />
      </div>
    </div>
  )
}

export default ProductOrder;