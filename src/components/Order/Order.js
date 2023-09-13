import { BiSortAlt2 } from 'react-icons/bi';
import ItemInOrder from '../ItemInOrder/ItemInOrder';
import './Order.css'

const Order = ({ product, deleteProduct, editProduct, errorMassage, setisLoaded, isLoaded}) => {
    return(
        <div className="container-order">
            <table>
              <tbody>
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
                    <th></th>
                </tr>
            {product.map((item, index) => <ItemInOrder data={product[index]} key={item.id} deleteProduct={deleteProduct} editProduct={editProduct} errorMassage={errorMassage} />) }
              </tbody>
            </table>
        </div>
    )
}

export default Order;