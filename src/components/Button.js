function Button({
    className = "btn btn-lg btn-primary pull-xs-right",
    onClick = () => {},
    type = "",
    disabled = false,
    children,
    ...props
}) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onClick()
    }

    return (
        <button type={type} className={className} onClick={handleSubmit} disabled={disabled} {...props}>
            {children}
        </button>
    );
}

export default Button;
