import React, { useState } from "react"
import "./nav.scss"
import logo from "../../assets/shared/logo.svg"
import navBtn from "../../assets/shared/icon-hamburger.svg"
import NavMenu from "./NavMenu"

const Nav = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <nav className="nav">
            <div className="nav__left">
                <div className="nav__logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div
                className={
                    mobileMenu ? "nav__right nav__right-mobile" : "nav__right"
                }
            >
                <NavMenu
                    mobileMenu={mobileMenu}
                    onClick={() => setMobileMenu(false)}
                />
            </div>
            <div className="nav__btn">
                <img src={navBtn} alt="" onClick={() => setMobileMenu(true)} />
            </div>
        </nav>
    )
}

export default Nav
