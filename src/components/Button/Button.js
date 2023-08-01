import './style.css';

const Button = ( props ) => {
    return <button type={ props.type } className='green-btn'> { props.text } </button>
}

export default Button;