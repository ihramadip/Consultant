import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-30 transition-all ease-in-out px-6 py-4 ${!top ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Logo/Brand Name */}
                <div className="flex justify-center items-center">
                    <HashLink smooth to="/#hero">
                        <h1 className="font-bold text-4xl text-gray-800 hover:text-yellow-500 transition duration-300 ease-in-out">
                            Data Solutions
                        </h1>
                    </HashLink>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex space-x-10 items-center">
                    <NavLinks />
                </div>

                {/* Hamburger Button */}
                <div className="lg:hidden flex items-center">
                    <button className="p-2 rounded-lg text-gray-800 hover:text-yellow-500 transition-all duration-300" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed left-0 top-16 w-full bg-white shadow-lg p-6 rounded-md transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col space-y-6">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
