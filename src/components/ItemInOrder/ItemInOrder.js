import { BsPencilFill, BsFillArchiveFill } from 'react-icons/bs';
import Button from '../Button/Button';

import './ItemInOrder.css'

const ItemInOrder = ({ id, category, name, quantity, price, onClick_change, onClick_delete }) => {
  return (
    <tr className='item' id={id}>
      <td className="id">{id}</td>
      <td className="category">{category}</td>
      <td className="name">{name}</td>
      <td className="quantity">{quantity}</td>
      <td className="price">{price}</td>
      <td className="settings">
        <Button onClick={onClick_change} text={<BsPencilFill className="edit-prod" />} className={'btn-edit'} />
        <Button onClick ={onClick_delete} text={<BsFillArchiveFill className="edit-prod" />} className={'btn-edit'} />
      </td>
    </tr>
  )
}

export default ItemInOrder;