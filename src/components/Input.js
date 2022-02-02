function Input({
  type = "text",
  className = "form-control form-control-lg",
  onChange=() => {},
  ...props
}) {
  return <input className={className} onChange={onChange} type={type} {...props} />;
}

export default Input;
