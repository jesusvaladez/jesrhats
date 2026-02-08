export default function Header() {
    return (
        <header className="header">
            <nav className="top-navbar">
                <ul className="navbar-bp">
                    <li className="left-container">
                        <a href>JesrhaTs</a>
                    </li>

                    <li className="right-container">
                        <a href={"#home"} className={"right-bp"}>Home</a>
                        <a href={"#products"} className={"right-bp"}>Products</a>
                        <a href={"#about"} className={"right-bp"}>About</a>
                        <a href={"#contact"} className={"right-bp"}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}