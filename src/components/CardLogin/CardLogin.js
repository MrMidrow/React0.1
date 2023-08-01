import './style.css';
import Logo from '../../components/LogoType/Image';
import FormLogin from '../FormLogin/FormLogin';

const CardLogin = () => {
    return (
        <div className="Card">
            <Logo />
            <FormLogin />
        </div>
    )
}

export default CardLogin;