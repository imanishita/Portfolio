import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import "./Navbar.css" 

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);
    const [showCreativeDropdown, setShowCreativeDropdown] = useState(false);

    function scrollHandler() {
        setnavbarblur(window.scrollY >= 20);
    }

    var showMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>MB</h1>

            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash /> Project</Link></li>

                <li 
                    className="creative-dropdown" 
                    onMouseEnter={() => setShowCreativeDropdown(true)} 
                    onMouseLeave={() => setShowCreativeDropdown(false)}
                >
                    <span>Creative ▾</span>
                    <ul className={`dropdown ${showCreativeDropdown ? 'show' : ''}`}>
                        <li onClick={hideMenu}><Link to="/artwork">Artwork</Link></li>
                        <li onClick={hideMenu}><Link to="/photography">Photography</Link></li>
                    </ul>
                </li>

                <li onClick={hideMenu}><Link to="/Contact"><CgFileDocument /> Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
