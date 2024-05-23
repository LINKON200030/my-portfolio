import React from 'react';
import {Link} from "react-router-dom";
import {FaInstagram} from "react-icons/fa";
import {FaGithub, FaTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
    <div className="footer bg-white  bottom-0 left-0 w-full h-auto ">
        <div className="container w-9/12 mx-auto h-full">
            <div className="flex w-full my-4 flex-col items-center justify-between h-full">
                <div id="footer-title" className="mt-10">
                    <h1 className="text-3xl text-titleColor font-bold">LINKON</h1>
                </div>
                <div id="footer-subNav" className="flex ">
                    <li className="p-3  space-x-1">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="p-3">
                        <a href="#services">
                            Services
                        </a>
                    </li>
                    <li className="p-3">
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>

                </div>
                <div id="footer-social" className="flex space-x-6 ">
                    <Link to="" className="">
                        <FaInstagram className="text-xl" />
                    </Link>
                    <Link to="">
                        <FaTwitter  className="text-xl"/>
                    </Link>
                    <Link to="">
                        <FaGithub className="text-xl"/>
                    </Link>
                </div>

                <p className="text-sm text-textColor mt-20 mb-8">© 2024 Linkon. All rights reserved.</p>

            </div>
        </div>

    </div>
    );
};

export default Footer;
