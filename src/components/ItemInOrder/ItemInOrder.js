import { BsPencilFill, BsFillArchiveFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import BasicModal from '../Modal/Modal';

import './ItemInOrder.css'
// import { API_URL } from '../../Constants/Constants';

const ItemInOrder = ({ id, category, name, quantity, price, deleteProduct, putEditProduct, editProduct, setEditProduct }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const handleOpenDelete = () => setIsOpen(true);
  const handleCloseDelete = () => setIsOpen(false);
  const handleOpenEdit = () => setIsEditOpen(true)
  const handleCloseEdit = () => setIsEditOpen(false)

  return (
    <tr className='item' id={id}>
      <td className="td-id">{id}</td>
      <td className="td-category">{category}</td>
      <td className="td-name">{name}</td>
      <td className="td-quantity">{quantity}</td>
      <td className="td-price">{price}</td>
      <td className="td-settings">
        <BasicModal className="box-edit" classNameBox='modal_box-edit' open={isEditOpen} handleOpen={handleOpenEdit} handleClose={handleCloseEdit} icon={<BsPencilFill />} innerModal={
          <>
            <section className="section_header-edit">
              <p className='edit_product-name'>Edit product</p>
              <Button onClick={handleCloseEdit} className="close-window_edit" text={<GrClose/>}/>
            </section>
            <section className='section_body-edit'>
              <form>
                <Input className="input" classNameLabel="_label" text='Category' type="text" name='category' />
                <Input className="input" classNameLabel="_label" text='Name' type='text' name='name' />
                <Input className="input" classNameLabel="_label" text='Quantity' type="text" name='quantity' />
                <Input className="input" classNameLabel="_label" text='Price' type="text" name='price' />
                <label className='_label'>Description<textarea id="story" name="story" cols="33" placeholder='Description'></textarea></label>
                <div className='btn-edit-product'>
                  <Button className='concel-btn concel_edit' onClick={handleCloseEdit} text='Concel' />
                  <Button className='edit-btn concel_edit' onSubmit={() => console.log(editProduct)} text='Edit' />
                </div>
              </form>
            </section>
          </>
        } />
        <BasicModal className="box-delete" classNameBox='modal_box-delete' open={isOpen} handleOpen={handleOpenDelete} handleClose={handleCloseDelete} icon={<BsFillArchiveFill />} innerModal={
          <>
            <h1> Are u sure you want to delete this product?</h1>
            <div className='btn-delete-product'>
              <Button className='concel-btn concel_delete' onClick={handleCloseDelete} text='Concel' />
              <Button className='delete-btn concel_delete' onClick={() => deleteProduct(id)} text='Delete' />
            </div>
          </>
        } />
      </td>
    </tr>
  )
}

export default ItemInOrder;