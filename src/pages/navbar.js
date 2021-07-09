import React from 'react'
import Logo from './../images/logo.jpg'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div className="elements-wrapper">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <ul className="tools">
                    <li>
                        <NavLink to="/" activeClassName='current' exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName='current' exact>Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" activeClassName='current' exact>FAQ</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}