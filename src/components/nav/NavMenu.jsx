import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./nav.scss"
import navClose from "../../assets/shared/icon-close.svg"

import { navLink } from "../../data"

const NavMenu = ({ mobileMenu, onClick }) => {
    const [navActive, setNavActive] = useState("home")

    return (
        <div className={"nav__menu"}>
            <div className="nav__close">
                <img src={navClose} alt="navClose" onClick={onClick} />
            </div>
            {navLink.map((item) => (
                <div
                    className={
                        navActive === item.name
                            ? "nav__link active"
                            : "nav__link"
                    }
                    key={item.name}
                >
                    <Link
                        to={item.path}
                        onClick={() => {
                            setNavActive(item.name)
                        }}
                    >
                        <span>{item.id}</span>
                        {item.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default NavMenu
