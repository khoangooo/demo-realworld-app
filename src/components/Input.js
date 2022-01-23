function Input({
  type = "text",
  className = "form-control form-control-lg",
  ...props
}) {
  return <input className={className} type={type} {...props} />;
}

export default Input;
