function Header({ display }) {
    return (
        <div className="header">
            <div className="logo">
                <span className="top">Biryukov</span>
                <span className="bottom">Professional</span>
            </div>
            <div className="display-wrapper">
                <span className="display">
                    {display}
                </span>
            </div>
            <span className="model">Flex 2000</span>
        </div>
    );
}

export default Header;