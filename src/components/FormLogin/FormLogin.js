import './style.css'
import Input from '../Input/Input'
import Button from '../Button/Button';
import { FiEye } from 'react-icons/fi';
// import { FiEyeOff } from 'react-icons/fi';

const FormLogin = () => {
    return (
        <form className='Login-Form'>
            <Input type='text' name='userName' placeholder='User Name' className="input-login" />
            <div className='password-block'>
                <Input type='password' name='password' placeholder='Password' className='input-login password-eye' />
                <FiEye className='FiEye'/>
            </div>
            <Button type='button' text='Login' />
        </form>
    )
}

export default FormLogin;