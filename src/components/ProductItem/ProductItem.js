import Button from "../Button/Button"
import { Link } from "react-router-dom";

const ProductItem = ({ title, logo, description, quantity, price }) =>{

  return(
    <div className="wrapperProduct">
      <div className="row">
          <Button type="button" onClick={()=> <Link to=''/>} text={''}/>
          <h2>{title}</h2>
      </div>
      <div className="body-product">
        <div className="previewLogo">{logo}</div>
        <div className="priceAndQuantity">
          <h3>{''}</h3>
          <h2>{price}</h2>
          <p>{quantity}</p>
        </div>
      </div>
      <div className="description-product">{description}</div>
    </div>
  )
}
export default ProductItem;