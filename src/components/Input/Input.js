
const Input = ({ text, type, name, placeholder, className, id, onChange, validator, value, classNameLabel, defaultValue } ) => {
  return (
      <label className={classNameLabel} htmlFor={id}>
        { text }
      <input type={type} name={name} placeholder={placeholder} className={className} id={id} onChange={onChange} value={value}/>
      </label>
    )
}

export default Input;