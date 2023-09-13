import LogoType from '../../components/LogoType/LogoType';
import Button from '../../components/Button/Button';
import Order from '../../components/Order/Order';
import proguctLogo from '../../assets/productLogo.svg'
import BasicModal from '../../components/Modal/Modal';


import { GrAdd } from 'react-icons/gr';
import { VscAccount } from "react-icons/vsc"

import './productOrder.css'

import { API_URL } from '../../Constants/Constants';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ModalForm from '../../components/ModalForm/ModalForm';


const ProductOrder = () => {

  const [product, setProduct] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
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
    if (!isLoaded) getProduct()
  }, [isLoaded])

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
          setAddProduct(prevState => ({ ...prevState, "category": `${inputValue}` }));
          console.log(addProduct)
          break;
        }else{
          setAddProduct(prevState => ({ ...prevState, "category": `${inputValue}` }));
          setErrorCategory(false)
          break;
        }
      case 'name':
        if(!inputValue){
          setErrorName(true);
          setAddProduct(prevState => ({ ...prevState, name: inputValue }));
          break;
        }else{
          setAddProduct(prevState => ({ ...prevState, name: inputValue }));
          setErrorName(false);
          break;
        }
      case 'quantity':
        if(!inputValue){
          setErrorQuantity(true);
          setAddProduct(prevState => ({ ...prevState, "quantity": inputValue }));
          break;
        }else{
          setAddProduct(prevState => ({ ...prevState, "quantity": inputValue}));
          setErrorQuantity(false);
          break;
        }
      case 'price':
        if(!inputValue){
          setErrorPrice(true);
          setAddProduct(prevState => ({ ...prevState, price: inputValue }));
          break;
        }else{
          setAddProduct(prevState => ({ ...prevState, price: inputValue }));
          setErrorPrice(false);
          break;
        }
      case 'description':
        if(!inputValue){
          setErrorDescription(true)
          setAddProduct(prevState => ({ ...prevState, description: inputValue }));
          break;
        }else{
          setAddProduct(prevState => ({ ...prevState, description: inputValue}));
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
    setisLoaded(true)
  };

  const deleteProduct = async (id) => {
    try{
      await fetch(`${API_URL}/products/${id}`, {method: 'DELETE'});
    }catch (error) {
      console(error);
    }
    setOpen(false)
    setisLoaded(false)
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
    setisLoaded(false)
  }

  const editProduct = async (id, data) => {
    try{
      await fetch(`${API_URL}/products/${id}`,{
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      setisLoaded(false)
    }catch (error) {
      console.log(error);
    }
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
                <ModalForm handleClose={handleClose}
                handleChangeInput={handleChange}
                classNameCategory={`${errorCategory && 'redInput'}`}
                classNameName={`${errorName && 'redInput'}`}
                classNameQuantity={`${errorQuantity && 'redInput'}`}
                classNamePrice={`${errorPrice && 'redInput'}`}
                classNameTextArea={`${errorDescription && 'errorDescription'}`}
                errorCategory={errorCategory}
                errorName={errorName}
                errorQuantity={errorQuantity}
                errorPrice={errorPrice}
                errorDescription={errorDescription}
                errorMassage={errorMassage}
                handleSubmitForm={handleSubmit}
                />
              </>}
            />
          </div>
        </div>
      </div>
      <div className='main'>
        <h1>Products</h1>
        <Order product={product} deleteProduct={deleteProduct} editProduct={editProduct} errorMassage={errorMassage} />
      </div>
    </div>
  )
}

export default ProductOrder;