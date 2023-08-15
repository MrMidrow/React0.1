import Button from "../Button/Button";
import { BsPencilFill, BsFillArchiveFill } from 'react-icons/bs';
import { BiSortAlt2 } from 'react-icons/bi';
import './style.css'

const Order = () => {
    return(
        <div className="container-order">
            <table>
                <tr className="controls-order">
                    <th>ID
                        <BiSortAlt2 className="sort-prod"/>
                    </th>
                    <th>Category
                        <BiSortAlt2 className="sort-prod"/>
                    </th>
                    <th>Name
                        <BiSortAlt2 className="sort-prod"/>
                    </th>
                    <th>Quantity
                        <BiSortAlt2 className="sort-prod"/>
                    </th>
                    <th>Price (₴)
                        <BiSortAlt2 className="sort-prod"/>
                    </th>
                </tr>
                <tr className="item id0">
                    <td className="id">0</td>
                    <td className="category">PC</td>
                    <td className="name">Lenovo Y50-70</td>
                    <td className="quantity">5</td>
                    <td className="price">25,000.00</td>
                    <td className="settings">
                        <Button text={<BsPencilFill className="edit-prod" />} className={'btn-edit'} />
                        <Button text={<BsFillArchiveFill className="edit-prod" />} className={'btn-edit'} />
                    </td>
                </tr>
                <tr className="item id1">
                    <td className="id">1</td>
                    <td className="category">Clothes</td>
                    <td className="name">Nike M Nk Df Acd21</td>
                    <td className="quantity">22</td>
                    <td className="price">4,000.00</td>
                    <td className="settings">
                        <Button text={<BsPencilFill className="edit-prod" />} className={'btn-edit'} />
                        <Button text={<BsFillArchiveFill className="edit-prod" />} className={'btn-edit'} />
                    </td>
                </tr>
                <tr className="item id2">
                    <td className="id">2</td>
                    <td className="category">Plumbing</td>
                    <td className="name">CERSANIT MITO 17</td>
                    <td className="quantity">1337</td>
                    <td className="price">5,000.00</td>
                    <td className="settings">
                        <Button text={<BsPencilFill className="edit-prod" />} className={'btn-edit'} />
                        <Button text={<BsFillArchiveFill className="edit-prod" />} className={'btn-edit'} />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Order;