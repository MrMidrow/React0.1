import './style.css'
import Input from '../Input/Input'
import Button from '../Button/Button';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { ErrorSpan } from '../ErrorSpan/ErrorSpan';
import { API_URL, validatorMap, SERVER_URL } from '../../Constants/Constants';


const FormLogin = () => {
  const [typeInput, setTypeInput] = useState('password');
  const [eyeModel, setEyeModel] = useState(false);
  const [error, setError] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const eye = <FiEye onClick={handleClickEye} className='FiEye' />;
  const eyeOff = <FiEyeOff onClick={handleClickEye} className='FiEye' />;
  


  function handleClickEye(e) {
    e.preventDefault()
    typeInput === 'password' ? setEyeModel(true) : setEyeModel(false);
    eyeModel ? setTypeInput('password') : setTypeInput('text');
  };
  
  function handleInput(e){
      e.preventDefault()
      let inputValue = e.target.value;
      let inputName = e.target.name;

      if(!inputValue){
        setError(true)
      }else{
        let isValidateInput = validatorMap[inputName] && validatorMap[inputName].validator.test(inputValue);
        if(!isValidateInput){
          setError(true)
        }else{
          setError(false)
          if(inputName === 'email') setEmail(inputValue) 
          if(inputName === 'password') setPassword(inputValue)
        }
      }
    };

  function handleSubmit(){
    if(!email || !password){
      setError(true)
    }else{
      pustRequest(email, password)
    }
  };
  async function pustRequest(email, password){
    try{
      await fetch(`${SERVER_URL}/users`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
    }catch(e){
      console.log(e)
    };
  }

  return (
    <div className='Login-Form' >
      <div className='box userName-block'>
        <Input 
          name='email' 
          placeholder='User Name' 
          className="input-login" 
          onChange={handleInput}
        />
      </div>
      <div className='box password-block'>
        <Input 
          type={typeInput}
          name='password'
          placeholder='Password'
          className='input-login password-eye'
          onChange={handleInput}
          text={eyeModel ? eyeOff : eye}
        />
        <ErrorSpan error={error ? validatorMap['error'] : ''} />
      </div>
      <Button type='submit' className='green-btn' text='Login' onClick={handleSubmit} />
    </div>
  )
}

export default FormLogin;