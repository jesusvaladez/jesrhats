import {useState} from "react";



export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <nav className="top-navbar">

                <button className="hamburger" onClick={() => setOpen(!open)}>
                    ☰
                </button>

                <ul className={`navbar-bp ${open ? "active" : " "}`}>
                    <li className="left-container">
                        <a href>JesrhaTs</a>
                    </li>

                    <li className="right-container">
                        <a href={"#home"} className={"right-bp"} onClick={() => setOpen(false)} >Home</a>
                        <a href={"#products"} className={"right-bp"} onClick={() => setOpen(false)} >Products</a>
                        <a href={"#about"} className={"right-bp"} onClick={() => setOpen(false)} >About</a>
                        <a href={"#contact"} className={"right-bp"} onClick={() => setOpen(false)} >Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}