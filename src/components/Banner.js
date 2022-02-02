function Banner({ title = "conduit", desctiption = "A place to share your knowledge." }) {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">{title}</h1>
                <p>{desctiption}</p>
            </div>
        </div>
    );
}

export default Banner;
