export default function Header() {
    return (
        <header className="header">
            <nav className="top-navbar">
                <ul className="navbar-bp">
                    <div className="left-container">
                        <li><a href>JesrhaTs</a></li>
                    </div>

                    <div className="right-container">
                        <li><a href={"#home"} className={"right-bp"}>Home</a></li>
                        <li><a href={"#products"} className={"right-bp"}>Products</a></li>
                        <li><a href={"#about"} className={"right-bp"}>About</a></li>
                        <li><a href={"#contact"} className={"right-bp"}>Contact</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}