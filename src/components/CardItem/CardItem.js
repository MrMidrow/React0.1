import LogoType from "../LogoType/LogoType";
import Button from "../Button/Button";
import { SlBasket } from "react-icons/sl"
import "./CardItem.css"

const CardItem = ({ logo, title, price, quantity }) => {
    return(
      <div className=" Card Card-product">
          <LogoType src={logo}/>
          <h3 className="title">{title}</h3>
          <div className="description">
            <p className="price">{price}</p>
          <p className="quantity">Кількість: <span>{quantity}</span></p>
          </div>
        <Button className={"add-product"} text={<SlBasket className="basket-card-add" />}> Готовий до відправки </Button>
      </div>
    )
}

export default CardItem;