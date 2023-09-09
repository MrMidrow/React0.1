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
import { ErrorSpan } from '../../components/ErrorSpan/ErrorSpan';
import TextArea from '../../components/TextArea/TextArea';


const ProductOrder = () => {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const errorMassage = 'This field is required';
  const [errorName, setErrorName] = useState(false);
  const [errorCategory, setErrorCategory] = useState(false);
  const [errorQuantity, setErrorQuantity] = useState(false);
  const [errorPrice, setErrorPrice] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);

  const initialProduct = {
    category: '',
    name: '',
    price: '',
    quantity: '',
    description: '',
  }

  const [addProduct, setAddProduct] = useState(initialProduct);

  useEffect(()=>{
    if (!isLoading) getProduct()
  }, [isLoading])

  // modal open/close button
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = function (e){
    e.preventDefault();
    const inputValue = e.target.value;
    const inputName = e.target.name;
    switch (inputName){
      case 'category':
        if(!inputValue){
          setErrorCategory(true)
          setAddProduct({ ...addProduct, "category": `${inputValue}` });
          break;
        }else{
          setAddProduct({ ...addProduct, "category": `${inputValue}` });
          setErrorCategory(false)
          break;
        }
      case 'name':
        if(!inputValue){
          setErrorName(true);
          setAddProduct({ ...addProduct, name: inputValue });
          break;
        }else{
          setAddProduct({...addProduct, name: inputValue });
          setErrorName(false);
          break;
        }
      case 'quantity':
        if(!inputValue){
          setErrorQuantity(true);
          setAddProduct({ ...addProduct, "quantity": inputValue });
          break;
        }else{
          setAddProduct({ ...addProduct, "quantity": inputValue});
          setErrorQuantity(false);
          break;
        }
      case 'price':
        if(!inputValue){
          setErrorPrice(true);
          setAddProduct({ ...addProduct, price: inputValue });
          break;
        }else{
          setAddProduct({...addProduct, price: inputValue });
          setErrorPrice(false);
          break;
        }
      case 'description':
        if(!inputValue){
          setErrorDescription(true)
          setAddProduct({ ...addProduct, description: inputValue });
          break;
        }else{
          setAddProduct({ ...addProduct, description: inputValue});
          setErrorDescription(false);
          break;
        }
      default:
        break;
    }
  }

  function handleSubmit(){
    const validData = Object.values(addProduct).filter(item => item !== '')
    if(validData.length < 5) {
      console.log('error')
      setErrorName(true)
      setErrorCategory(true)
      setErrorQuantity(true)
      setErrorPrice(true)
      setErrorDescription(true)
    }else{
      setErrorName(false)
      setErrorCategory(false)
      setErrorQuantity(false)
      setErrorPrice(false)
      setErrorDescription(false)
      setAddProduct(initialProduct)
      setOpen(false);
      postProduct(addProduct)
    }
  }

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

const postProduct = async () => {
  try{
    await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProduct)
    });
  }catch (error) {
    console.log(error);
  }
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
            className='box-add'
            classNameBox='modal_box-add'
            classNameBtn="btn-product addProducts"
            icon="Add product" 
              innerModal={
              <>
                <section className="section_header-add">
                  <p className='add_product-name'>Add product</p>
                    <Button onClick={handleClose} className="close-window_add" text={<GrClose />} />
                </section>
                <section className='section_body-add'>
                  <form onSubmit={(e)=>{e.preventDefault()}}>
                    <Input className={`input ${errorCategory &&  'redInput'}`} onChange={handleChange} classNameLabel="_label" text='Category' type="text" name='category' />
                    <ErrorSpan className='' error={errorCategory ? errorMassage : ''}/>
                    <Input className={`input ${errorName && 'redInput'}`} onChange={handleChange} classNameLabel="_label" text='Name' type='text' name='name' />
                    <ErrorSpan className='' error={errorName ? errorMassage : ''} />
                    <Input className={`input ${errorQuantity && 'redInput'}`} onChange={handleChange} classNameLabel="_label" text='Quantity' type="text" name='quantity'/>
                    <ErrorSpan className='' error={errorQuantity ? errorMassage : ''} />
                    <Input className={`input ${errorPrice && 'redInput'}`} onChange={handleChange} classNameLabel="_label" text='Price' type="text" name='price' />
                    <ErrorSpan className='' error={errorPrice ? errorMassage : ''} />
                    <TextArea onChange={handleChange} name='description' id='story' cols="33" minLength={5} textLable='description' classNameTextArea={`${errorDescription && 'errorDescription'}`} />
                      <ErrorSpan className='' error={errorDescription ? errorMassage : ''} />
                    <div className='btn-edit-product'>
                        <Button className='concel-btn concel_add' onClick={handleClose} text='Concel' />
                      <Button className='add-btn concel_add' onClick={handleSubmit} text='Edit'/>
                    </div>
                  </form>
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