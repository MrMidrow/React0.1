import { BsPencilFill, BsFillArchiveFill } from 'react-icons/bs';

import { useState } from 'react';
import Button from '../Button/Button';
import BasicModal from '../Modal/Modal';

import './ItemInOrder.css'
import ModalForm from '../ModalForm/ModalForm';

const ItemInOrder = ({ data, deleteProduct, errorMassage, editProduct, setisLoaded, isLoaded }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isData, setIsData] = useState({...data})
  const handleOpenDelete = () => setIsOpen(true);
  const handleCloseDelete = () => setIsOpen(false);
  const handleOpenEdit = () => setIsEditOpen(true)
  const handleCloseEdit = () => setIsEditOpen(false)
  //errorCategoryEdit
  const [isErrorCategory, setErrorCategory] = useState(false);
  const [isErrorName, setErrorName] = useState(false);
  const [isErrorQuantity, setErrorQuantity] = useState(false);
  const [isErrorPrice, setErrorPrice] = useState(false);
  const [isErrorDescription, setErrorDescription] = useState(false);

  const [id, setId] = useState(data.id)

  function handleChange(e) {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    if(!valueInput) {
      switch (nameInput) {
        case 'category':
          setIsData(prevState => ({ ...prevState, category: valueInput }));
          setErrorCategory(true)
          break;
        case 'name':
          setErrorName(true);
          setIsData(prevState => ({ ...prevState, name: valueInput }));
          break;
        case 'quantity':
          setErrorQuantity(true);
          setIsData(prevState => ({ ...prevState, quantity: valueInput }));
          break;
        case 'price':
          setErrorPrice(true);
          setIsData(prevState => ({ ...prevState, price: valueInput }));
          break;
        case 'description':
          setErrorDescription(true);
          setIsData(prevState => ({ ...prevState, description: valueInput }));
          break;
        default:
          break;
      }
    }else{
      switch (nameInput) {
        case 'category':
          setIsData(prevState => ({ ...prevState, category: valueInput }));
          setErrorCategory(false)
          break;
        case 'name':
          setErrorName(false);
          setIsData(prevState => ({ ...prevState, name: valueInput }));
          break;
        case 'quantity':
          setErrorQuantity(false);
          setIsData(prevState => ({ ...prevState, quantity: valueInput }));
          break;
        case 'price':
          setErrorPrice(false);
          setIsData(prevState => ({ ...prevState, price: valueInput }));
          break;
        case 'description':
          setErrorDescription(false);
          setIsData(prevState => ({ ...prevState, description: valueInput }));
          break;
        default:
          break;
      }
    }
  }
  function handleEdit(id, isData){
    const validData = Object.values(isData).filter(item => item !== '');
    console.log(validData);
    if(validData.length < 7){
      setErrorCategory(true)
      setErrorName(true)
      setErrorQuantity(true)
      setErrorPrice(true)
      setErrorDescription(true)
    }else{
      setErrorCategory(false)
      setErrorName(false)
      setErrorQuantity(false)
      setErrorPrice(false)
      setErrorDescription(false)
      setIsEditOpen(false)
      editProduct(id, isData)
    }
  }
  return (
    <tr className='item' id={data.id}>
      <td className="td-id">{data.id}</td>
      <td className="td-category">{data.category}</td>
      <td className="td-name">{data.name}</td>
      <td className="td-quantity">{data.quantity}</td>
      <td className="td-price">{data.price}</td>
      <td className="td-settings">
        <BasicModal className="box-edit" classNameBox='modal_box-edit' open={isEditOpen} handleOpen={handleOpenEdit} handleClose={handleCloseEdit} icon={<BsPencilFill />} 
        innerModal={
            <ModalForm handleClose={handleCloseEdit}
            handleChangeInput={handleChange}
            valueInputCategory={isData.category}
            valueInputName={isData.name}
            valueInputQuantity={isData.quantity}
            valueInputPrice={isData.price}
            valueArea={isData.description}
            classNameCategory={`${isErrorCategory && 'redInput'}`}
            classNameName={`${isErrorName && 'redInput'}`}
            classNameQuantity={`${isErrorQuantity && 'redInput'}`}
            classNamePrice={`${isErrorPrice && 'redInput'}`}
            classNameTextArea={`${isErrorDescription && 'errorDescription'}`}
            errorCategory={isErrorCategory}
            errorName={isErrorName}
            errorQuantity={isErrorQuantity}
            errorPrice={isErrorPrice}
            errorDescription={isErrorDescription}
            errorMassage={errorMassage} 
            handleSubmitForm={(e) => { handleEdit(id, isData) }} />
            // handleSubmitForm={handleSubmitForm}
        } />
        <BasicModal className="box-delete" classNameBox='modal_box-delete' open={isOpen} handleOpen={handleOpenDelete} handleClose={handleCloseDelete} icon={<BsFillArchiveFill />} innerModal={
          <>
            <h1> Are u sure you want to delete this product?</h1>
            <div className='btn-delete-product'>
              <Button className='concel-btn concel_delete' onClick={handleCloseDelete} text='Concel' />
              <Button className='delete-btn concel_delete' onClick={() => deleteProduct(isData.id)} text='Delete' />
            </div>
          </>
        } />
      </td>
    </tr>
  )
}

export default ItemInOrder;