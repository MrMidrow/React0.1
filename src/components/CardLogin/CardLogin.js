import './style.css';
import LogoType from '../../components/LogoType/LogoType';
import FormLogin from '../FormLogin/FormLogin';
import logo from '../../assets/logo.svg';

const CardLogin = () => {
    return (
        <div className="Card">
            <LogoType src={ logo } alt="Logo type rozetka" className={ logo }/>
            <FormLogin />
        </div>
    )
}

export default CardLogin;