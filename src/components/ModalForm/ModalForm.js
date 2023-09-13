import Button from "../Button/Button"
import { ErrorSpan } from "../ErrorSpan/ErrorSpan"
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import { GrClose } from 'react-icons/gr';

export default function ModalForm({ handleClose, handleChangeInput, classNameCategory, classNameName, classNameQuantity, classNamePrice, classNameTextArea, errorCategory, errorName, errorQuantity, errorPrice, errorDescription, errorMassage, handleSubmitForm, valueInputCategory, valueInputName, valueInputQuantity, valueInputPrice, valueArea }){
  return(
    <>
      <section className="section_header-add">
        <p className='add_product-name'>Add product</p>
        <Button onClick={handleClose} className="close-window_add" text={<GrClose />} />
      </section>
      <section className='section_body-add'>
        <form onSubmit={(e) => { e.preventDefault() }}>
          <Input className={`input ${classNameCategory}`} onChange={handleChangeInput} classNameLabel="_label" text='Category' type="text" name='category' value={valueInputCategory}/>
          <ErrorSpan error={errorCategory ? errorMassage : ''} />
          <Input className={`input ${classNameName}`} onChange={handleChangeInput} classNameLabel="_label" text='Name' type='text' name='name' value={valueInputName} />
          <ErrorSpan error={errorName ? errorMassage : ''} />
          <Input className={`input ${classNameQuantity}`} onChange={handleChangeInput} classNameLabel="_label" text='Quantity' type="text" name='quantity' value={valueInputQuantity} />
          <ErrorSpan error={errorQuantity ? errorMassage : ''} />
          <Input className={`input ${classNamePrice}`} onChange={handleChangeInput} classNameLabel="_label" text='Price' type="text" name='price' value={valueInputPrice} />
          <ErrorSpan error={errorPrice ? errorMassage : ''} />
          <TextArea onChange={handleChangeInput} name='description' id='story' cols="33" minLength={5} textLable='description' classNameTextArea={`${classNameTextArea}`} valueArea={valueArea}/>
          <ErrorSpan error={errorDescription ? errorMassage : ''} />
          <div className='btn-edit-product'>
            <Button className='concel-btn concel_add' onClick={handleClose} text='Concel' />
            <Button className='add-btn concel_add' onClick={handleSubmitForm} text='Edit' />
          </div>
        </form>
      </section>
      </>
  )
}