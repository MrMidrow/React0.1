import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsPatchCheck, BsPatchMinus } from "react-icons/bs";

import './ProductItemStyle.css';

const ProductItem = ({ title, logo, description, quantity, price, category }) =>{

  let availavleItem = <h3 className="textAvailable">
    <BsPatchCheck className="checkAvailable" /> available </h3>;

  const notAvailable = <h3 className="textNotAvailable">
    <BsPatchMinus className="checkAvailable" /> not available</h3>;

  return(
    <div className="wrapperProduct">
      <div className="row">
        <Link to='/product-preview' >
          <HiArrowNarrowLeft className="arrow_left"/>
        </Link>
        <h2>{category} {title}</h2>
      </div>
      <div className="body-product">
        <div className="previewLogo">
          <img className="imgProduct" src={logo} alt="product logo type"/>
        </div>
        <div className="priceAndQuantity">
          {!quantity ? notAvailable : availavleItem}
          <h3>{price}₴</h3>
          <h3>Quantity {quantity}</h3>
        </div>
      </div>
      <div className="description-product">
        <h4>Description <em>{title}</em></h4>
        <p>{description}</p>
        <p>{description}</p>
        </div>
    </div>
  )
}
export default ProductItem;