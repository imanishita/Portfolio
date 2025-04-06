import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import "./Navbar.css";

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);
    const [showCreativeDropdown, setShowCreativeDropdown] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'light' ? false : true;
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function scrollHandler() {
        setnavbarblur(window.scrollY >= 20);
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setShowCreativeDropdown(false); // Close dropdown when toggling main menu
    };

    const hideMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setShowCreativeDropdown(false);
    };

    const toggleCreativeDropdown = () => {
        setShowCreativeDropdown(!showCreativeDropdown);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
            <div className="logo-theme-toggle">
                <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>MB</h1>
            </div>

            <div className='Hamburger mobile-only' onClick={toggleMobileMenu} aria-expanded={isMobileMenuOpen} aria-label="Toggle Navigation">
                <span className={`bar ${isMobileMenuOpen ? 'barOne' : ''}`}></span>
                <span className={`bar ${isMobileMenuOpen ? 'barTwo' : ''}`}></span>
                <span className={`bar ${isMobileMenuOpen ? 'barThree' : ''}`}></span>
            </div>

            {/* Mobile Navigation */}
            <ul className={`NavbarLinks mobile-only ${isMobileMenuOpen ? 'showNavbar' : ''}`}>
                <li onClick={hideMobileMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMobileMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMobileMenu}><Link to="/Project"><BsCodeSlash /> Project</Link></li>

                <li className="creative-dropdown" onClick={toggleCreativeDropdown}>
                    <span>Creative ▾</span>
                    <ul className={`dropdown ${showCreativeDropdown ? 'show' : ''}`}>
                        <li onClick={hideMobileMenu}><Link to="/artwork">Artwork</Link></li>
                        <li onClick={hideMobileMenu}><Link to="/photography">Photography</Link></li>
                    </ul>
                </li>

                <li onClick={hideMobileMenu}><Link to="/Contact"><CgFileDocument /> Contact</Link></li>
            </ul>

            {/* Desktop Navigation */}
            <ul className='NavbarLinks desktop-only'>
                <li><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li><Link to="/About"><BsPerson /> About</Link></li>
                <li><Link to="/Project"><BsCodeSlash /> Project</Link></li>

                <li
                    className="creative-dropdown"
                    onMouseEnter={() => setShowCreativeDropdown(true)}
                    onMouseLeave={() => setShowCreativeDropdown(false)}
                >
                    <span>Creative ▾</span>
                    <ul className={`dropdown ${showCreativeDropdown ? 'show' : ''}`}>
                        <li><Link to="/artwork">Artwork</Link></li>
                        <li><Link to="/photography">Photography</Link></li>
                    </ul>
                </li>

                <li><Link to="/Contact"><CgFileDocument /> Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;