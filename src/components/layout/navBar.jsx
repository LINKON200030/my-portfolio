import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            console.log(scrollTop);
            if (scrollTop > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavItemClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div  className={`body w-full h-16 scroll-smooth bg-[#fafafa] sticky left-0 top-0 z-50 ${hasScrolled ? ' shadow-md' : ''}`}>
            <div className="container w-11/12 md:w-9/12 mx-auto h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex">
                        <h1 className="text-3xl font-bold">{
                            hasScrolled ? 'LN' : 'LINKON'
                        }</h1>
                    </div>
                    <div className=" hidden md:block flex nav-items">
                        <ul className="flex items-center w-full justify-between">
                            <li className="p-4 space-x-1">
                                <a href="#home" onClick={() => handleNavItemClick('home')}>Home</a>
                            </li>
                            <li className="p-4 space-x-1" onClick={() => handleNavItemClick('about')}>
                                <a href="#about" onClick={() => handleNavItemClick('about')}>About</a>
                            </li>
                            <li className="p-4" onClick={() => handleNavItemClick('skills')}>
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="p-4" onClick={() => handleNavItemClick('services')}>
                                <a href="#services">Services</a>
                            </li>
                            <li className="p-4" onClick={() => handleNavItemClick('portfolio')}>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li className="p-4" onClick={() => handleNavItemClick('contact')}>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/*///Navbar For Mobile*/}

                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h7"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm w-48 mr-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                            <li className="p-4 space-x-1">
                                <a href="#home" onClick={() => handleNavItemClick('home')}>Home</a>
                            </li>
                            <li className="p-4 space-x-1" onClick={() => handleNavItemClick('about')}>
                                <a href="#about" onClick={() => handleNavItemClick('about')}>About</a>
                            </li>
                            <li className="p-4" onClick={() => handleNavItemClick('skills')}>
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="p-4" onClick={() => handleNavItemClick('services')}>
                                <a href="#services">Services</a>
                            </li>
                            <li className="p-4" onClick={() => handleNavItemClick('portfolio')}>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li className="p-4" onClick={() => handleNavItemClick('contact')}>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default NavBar;
