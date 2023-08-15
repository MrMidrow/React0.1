import './style.css';

const Button = ({ type, text, className, id }) => {
    return <button type={ type } id={id} className={className}> { text } </button>
}

export default Button;