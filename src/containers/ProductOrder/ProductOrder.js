import LogoType from '../../components/LogoType/LogoType';
import Button from '../../components/Button/Button';
import Order from '../../components/Order/Order';
import Input from '../../components/Input/Input';
import proguctLogo from '../../assets/productLogo.svg'
import BasicModal from '../../components/Modal/Modal';

import { GrAdd, GrClose } from 'react-icons/gr';
import { VscAccount } from "react-icons/vsc"

import './productOrder.css'

import { API_URL } from '../../Constants/Constants';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const ProductOrder = () => {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if (!isLoading) getProduct()
  }, [isLoading])

  // modal open/close button
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const getProduct = async function () {
    try {
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(true)
  };

  const deleteProduct = async (id) => {
    try{
      await fetch(`${API_URL}/products/${id}`, {method: 'DELETE'});
    }catch (error) {
      console(error);
    }
    setOpen(false)
    setIsLoading(false)
  }


  return (
    <div className='productOrder'>
      <div className='header'>
        <LogoType src={proguctLogo} className={"logo"} />
        <div className='row-button'>
          <div className='previews'>
            <VscAccount className='acc' />
            <Link to="/product-preview">
              <Button type="button" className={'preview btn-product'} text='Preview' />
            </Link>
          </div>
          <div className='addProd'>
            <GrAdd className="add" />
            {/* <Button type="button" className={'btn-product addProducts'} text='Add product' /> */}
            <BasicModal 
            setOpen={setOpen}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            className='box-edit'
            classNameBox='modal_box-edit'
            classNameBtn="btn-product addProducts"
            icon="Add product" 
              innerModal={
              <>
                <section className="section_header-edit">
                  <p className='edit_product-name'>Edit product</p>
                    <Button onClick={handleClose} className="close-window_edit" text={<GrClose />} />
                </section>
                <section className='section_body-edit'>
                  <Input className="input" classNameLabel="_label" text='Category' type="text" name='category' />
                  <Input className="input" classNameLabel="_label" text='Name' type='text' name='name' />
                  <Input className="input" classNameLabel="_label" text='Quantity' type="text" name='quantity' />
                  <Input className="input" classNameLabel="_label" text='Price' type="text" name='price' />
                  <label className='_label'>Description<textarea id="story" name="story" cols="33" placeholder='Description'></textarea></label>
                  <div className='btn-edit-product'>
                      <Button className='concel-btn concel_edit' onClick={handleClose} text='Concel' />
                    <Button className='edit-btn concel_edit' onClick={() => {}} text='Edit' />
                  </div>
                </section>
              </>}
            />
          </div>
        </div>
      </div>
      <div className='main'>
        <h1>Products</h1>
        <Order product={product} deleteProduct={deleteProduct}/>
      </div>
    </div>
  )
}

export default ProductOrder;