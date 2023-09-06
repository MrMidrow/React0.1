import './style.css';

const Button = ({ type, text, className, id, children, onClick,onClose }) => {
  return <button type={type} id={id} className={className} onClick={onClick} onClose={onClose}> {text} {children} </button>
}

export default Button;