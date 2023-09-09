import './style.css';

const Button = ({ type, text, className, id, children, onClick, onClose, onSubmit, disabled }) => {
  return <button type={type} id={id} className={className} onClick={onClick} onClose={onClose} onSubmit={onSubmit} > {text} {children} </button>
}

export default Button;