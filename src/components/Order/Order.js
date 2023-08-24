import { BiSortAlt2 } from 'react-icons/bi';
import './Order.css'

const Order = ({ children }) => {
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
                { children }
              </tbody>
            </table>
        </div>
    )
}

export default Order;