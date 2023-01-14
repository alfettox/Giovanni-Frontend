import React from "react"

export default function Navbar() {
    return (
        <nav>

            <img src="../images/logo.png" className="nav--logo" />
            <ul className="menu">

                <li><a href="#">Home</a></li>
                <li> <a href="#">Special offers</a></li>
                <li> <a href="#">Contacts</a></li>
            </ul>
        </nav>
    )
}