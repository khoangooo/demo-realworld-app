function Button({ title = "Click me", className = "btn btn-lg btn-primary pull-xs-right", ...props }) {
    return (
        <button className={className} {...props}>
            {title}
        </button>
    );
}

export default Button;
