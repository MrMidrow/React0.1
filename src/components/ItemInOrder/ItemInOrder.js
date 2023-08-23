import { BsPencilFill, BsFillArchiveFill } from 'react-icons/bs';
import Button from '../Button/Button';

import './ItemInOrder.css'

const ItemInOrder = ({id, category, name, quantity, price}) => {
  return (
    <tr className='item' id={id}>
      <td className="id">{id}</td>
      <td className="category">{category}</td>
      <td className="name">{name}</td>
      <td className="quantity">{quantity}</td>
      <td className="price">{price}</td>
      <td className="settings">
        <Button text={<BsPencilFill className="edit-prod" />} className={'btn-edit'} />
        <Button text={<BsFillArchiveFill className="edit-prod" />} className={'btn-edit'} />
      </td>
    </tr>
  )
}

export default ItemInOrder;