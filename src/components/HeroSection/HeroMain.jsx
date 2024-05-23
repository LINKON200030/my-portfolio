import React, {useRef} from 'react';
import {FaInstagram} from "react-icons/fa";
import {IoLogoTwitter, IoMdArrowRoundDown} from "react-icons/io";
import {FiGithub} from "react-icons/fi";
import {FcNightPortrait} from "react-icons/fc";
import {Button} from "@/components/ui/button.jsx";
import {GrSend} from "react-icons/gr";
import {SlMouse} from "react-icons/sl";
import { animateScroll as scroll } from 'react-scroll';
import {CiLinkedin} from "react-icons/ci";
import img from "../../assets/images/Linkuu.jpg"
import handEmojy from "../../assets/images/hand.svg"
const HeroMain = () => {
    const nextSectionRef = useRef(null);



    const scrollToAboutSection = () => {
        scroll.scrollTo(nextSectionRef.current.offsetTop, {
            duration: 600,
            delay: 0,
            smooth: 'smooth',
        });
    };

    return (
        <div id="home" className="body mb-64 sm:mb-44 md:mb-0 md:mt-0 w-full h-[89vh] scroll-smooth ">
            <div className="container w-11/12 md:w-9/12 mx-auto h-full">
                <div
                    className="flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-0 space-x-5 h-full items-center ">
                    <div id="social-link" className="hidden md:flex md:flex-col gap-y-6 md:gap-y-8 basis-[10%]">
                        <a href="https://www.instagram.com/linkon_jr/" className="social-link">
                            <FaInstagram className="cursor-pointer text-xl"/>
                            <span className="link-text">https://www.instagram.com/linkon_jr/</span>
                        </a>
                        <a href="https://www.linkedin.com/in/shahadat-hossain-linkon-473580217" className="social-link">
                            <CiLinkedin className="cursor-pointer text-2xl"/>
                            <span
                                className="link-text">https://www.linkedin.com/in/shahadat-hossain-linkon-473580217</span>
                        </a>
                        <a href="https://github.com/LINKON200030" className="social-link">
                            <FiGithub className="cursor-pointer text-xl"/>
                            <span className="link-text">https://github.com/LINKON200030</span>
                        </a>
                    </div>

                    <div id="hero-text" className="md:basis-[55%] order-2 md:order-1 w-full items-center">
                        <h1 className=" text-5xl md:text-5xl font-bold">Hello, I'm Linkon
                            <img src={handEmojy} alt="hand-emoji" className="inline-block ml-2 w-12"/>
                        </h1>
                        <span className="flex mt-2  md:mt-5 mb-4 md:mb-6 items-center">
                            <span className=" w-8 md:w-20 h-[1.5px] bg-textColor mr-4 inline-block">

                            </span>
                            <h2 className="text-xl md:text-2xl text-gray-600 font-medium">Creative Web Developer</h2>
                       </span>
                        <p className="text-textColor ">
                            I'm a creative web developer based in Dhaka, Bangladesh. And I am very passionate and
                            dedicated to my work.
                        </p>

                        <a href="mailto:devlinkon77921@gmail.com">
                            <Button
                                className="mt-10 bg-gradient-to-b from-gray-800 to-gray-700 font-poppins rounded-2xl py-7 px-7">
                                Say Hello <GrSend className="inline-block text-xl ml-2"/>
                            </Button>
                        </a>
                        <div id="scroll-down" onClick={scrollToAboutSection}
                             className="hidden md:block mt-16 items-center md:flex-row gap-x-1 cursor-pointer ">
                            <SlMouse className="inline-block text-xl text-titleColor font-bold"/><span
                            className="font-semibold text-sm">Scroll Down</span><IoMdArrowRoundDown
                            className="inline-block text-md text-titleColor"/>
                        </div>
                    </div>
                    <div id="hero-image"
                         className=" order-1 md:order-2 md:basis-[35%] justify-center flex items-center basis-[100%]">
                        <img src={img} alt="hero"
                             className="heroImg w-[300px] h-[300px] object-cover shadow-[inset_0_0_9px_rgb(255,255,255/30)]"/>
                    </div>
                </div>


            </div>
            <div ref={nextSectionRef}>

            </div>

        </div>
    );
};

export default HeroMain;