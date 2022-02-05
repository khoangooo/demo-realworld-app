function Textarea({ value="", rows=3, placeholder = "", className = "form-control", onChange = () => {}, ...props }) {
    return <textarea value={value} rows={rows} className={className} onChange={onChange} {...props}></textarea>;
}

export default Textarea;
