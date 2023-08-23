const Input = ({ text, type, name, placeholder, className, id, onChange, validator} ) => {
  return (
      <label htmlFor={id}>
        { text }
        <input type={ type } name={ name } placeholder={ placeholder } className={ className } id={id} onChange={onChange} />
      </label>
    )
}

export default Input;