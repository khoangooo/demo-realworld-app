function Input({
    value="",
    type = "text",
    className = "form-control form-control-lg",
    placeholder = "",
    onChange = () => {},
    ...props
}) {
    return <input value={value} type={type} className={className} onChange={onChange} placeholder={placeholder} {...props} />;
}

export default Input;
