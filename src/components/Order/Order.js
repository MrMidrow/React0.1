import { BiSortAlt2 } from 'react-icons/bi';
import ItemInOrder from '../ItemInOrder/ItemInOrder';
import './Order.css'

const Order = ({ product, deleteProduct, putEditProduct, editProduct, setEditProduct }) => {
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
            {product.map((item) => <ItemInOrder key={item.id} id={item.id} category={item.category} name={item.name} quantity={item.quantity} price={item.price} deleteProduct={deleteProduct} putEditProduct={putEditProduct} editProduct={editProduct} setEditProduct={setEditProduct} />) }
              </tbody>
            </table>
        </div>
    )
}

export default Order;