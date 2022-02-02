function Button({
    title = "Click me",
    className = "btn btn-lg btn-primary pull-xs-right",
    onClick = () => {},
    ...props
}) {
    return (
        <button className={className} onClick={onClick} {...props}>
            {title}
        </button>
    );
}

export default Button;
