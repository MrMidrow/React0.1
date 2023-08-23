import './style.css';

const Button = ({ type, text, className, id, children, onClick }) => {
  return <button type={type} id={id} className={className} onClick={onClick}> {text} {children} </button>
}

export default Button;