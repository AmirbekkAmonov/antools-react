import { useState, useEffect } from "react";
import "./header.css";

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto"; 
        }
        return () => {
            document.body.style.overflow = "auto"; 
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest(".mobile_links") && !event.target.closest(".menu")) {
                setMobileMenuOpen(false);
            }
            if (!event.target.closest(".dropdown")) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <a href="#" className="logo">
                <img src="./assets/icons/Logo.svg" alt="Logo" />antools.
            </a>
            <div className="links">
                <a href="#">Home</a>
                <div className="dropdown">
                    <button className="dropbtn" onClick={toggleDropdown}>
                        Categories <img className="arrow" src="./assets/icons/chevron-down.svg" alt="Chevron" />
                    </button>
                    {/* Dropdown menyu */}
                    <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                </div>
                <a href="#">My Collections</a>
                <a href="#">Blog</a>
            </div>
            <div className="register">
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
            </div>
            {/* Mobil menyu tugmasi */}
            <button className="menu" onClick={toggleMobileMenu}>
                <img src="./assets/icons/align-left.png" alt="Menu" />
            </button>
            {/* Mobil menyu */}
            <div className={`mobile_links ${isMobileMenuOpen ? "show" : ""}`}>
                <img className="close" src="./assets/icons/close.png" alt="Close" onClick={toggleMobileMenu} />
                <img src="./assets/icons/logo.svg" alt="Logo" />
                <div className="links">
                    <a href="#">Home</a>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>
                            Categories <img className="arrow" src="./assets/icons/chevron-down.svg" alt="Chevron" />
                        </button>
                        {/* Mobile dropdown */}
                        <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
                            <a href="#">Item 1</a>
                            <a href="#">Item 2</a>
                            <a href="#">Item 3</a>
                        </div>
                    </div>
                    <a href="#">My Collections</a>
                    <a href="#">Blog</a>
                </div>
                <button className="register">Register</button>
            </div>
        </header>
    );
}

export default Header;
