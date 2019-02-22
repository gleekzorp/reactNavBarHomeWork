import React from 'react'
import { NavLink } from "react-router-dom"

export default function() {
        return (
            <div className="navLinks">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink> 
                <NavLink to="/counter">COUNTER</NavLink>
            </div>
        )
    }