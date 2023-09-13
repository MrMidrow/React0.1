export default function TextArea({ textLable, onChange, classNameLabel, name, id, minLength, placeholder, cols, classNameTextArea, valueArea }){
  return(
    <label className={`_label ${classNameLabel}`}>{textLable}
      <textarea onChange={onChange} type="textArea" id={id} name={name} cols={cols} minLength={minLength} placeholder={placeholder} value={valueArea} className={classNameTextArea}></textarea>
    </label>
  )
}