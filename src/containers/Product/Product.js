import LogoType from '../../components/LogoType/LogoType';
import Button from '../../components/Button/Button';
import proguctLogo from '../../assets/proguctLogo.svg'
import { GrAdd } from 'react-icons/gr';
import { VscAccount } from "react-icons/vsc"
import './style.css'
import Order from '../../components/Order/Order';

const Product = () => {
  return (
    <div className='container'>
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

export default Product;