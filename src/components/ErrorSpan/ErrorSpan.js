import './errorSpan.css'
export const ErrorSpan = ({ error, className })=>{
  return <span className= {`errorSpan ${className}`}>{error}</span>
};