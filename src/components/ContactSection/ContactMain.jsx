import React from 'react';
import {RiMailSendLine} from "react-icons/ri";
import {BiRightArrowAlt} from "react-icons/bi";
import {IoLogoWhatsapp} from "react-icons/io5";
import {FaFacebookMessenger} from "react-icons/fa6";
import ContactForm from "@/components/ContactSection/ContactForm.jsx";

const ContactMain = () => {
    function showArrow(event) {
        const arrowIcon = event.currentTarget.querySelector('.arrowIcon');
        arrowIcon.classList.remove('hidden');
        arrowIcon.offsetWidth;
        arrowIcon.style.opacity = 1;
    }

    function hideArrow(event) {
        const arrowIcon = event.currentTarget.querySelector('.arrowIcon');
        arrowIcon.style.opacity = 0;
        setTimeout(function () {
            arrowIcon.classList.add('hidden');
        }, 400);
    }
    return (
        <div className="body mb-7  w-full h-auto scroll-smooth">
            <div className="container  w-11/12 md:w-9/12 mx-auto h-full flex  justify-center ">
                <div className="flex flex-col w-full">
                    <div id="contact-title" className="flex flex-col items-center justify-center mt-1">
                        <h1 className="text-4xl text-titleColor font-semibold ">Contact Me</h1>
                        <p className="text-textColor font-[500] ">
                           Get In Touch
                        </p>
                    </div>
                    <div id="contact-card" className="flex flex-col space-y-10 md:flex-row items-center mx-auto w-full justify-around mt-16  ">
                        <div id="contact-card" className="flex flex-col w-full space-y-5 md:space-y-0 md:basis-[40%]  items-center justify-center">
                            <h3 className="text-titleColor text-2xl mb-2 font-[500] tracking-tighter ">Talk To Me</h3>
                            <div id="card1"
                                 className="bg-white w-[95%] rounded-lg mb-3 shadow-sm py-3 flex flex-col items-center justify-center">
                                <RiMailSendLine className="text-titleColor text-4xl mb-2"/>
                                <p className="text-titleColor font-xl font-[500] mb-0.5">Email</p>
                                <p typeof="email"
                                   className="text-textColor mb-3 text-sm font-[500]">devlinkon77921@gmail.com</p>
                                <a href="mailto:devlinkon77921@gmail.com"
                                    className=" text-textColor text-[14px] font-[500] relative"
                                    onMouseEnter={showArrow}
                                    onMouseLeave={hideArrow}
                                >
                                    Write Me
                                    <span
                                        className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                </a>

                            </div>
                            <div id="card2"
                                 className="bg-white w-[95%] rounded-lg shadow-sm mb-3  py-3 flex flex-col items-center justify-center">
                                <IoLogoWhatsapp  className="text-titleColor text-4xl mb-2"/>
                                <p className="text-titleColor font-xl font-[500] mb-0.5">Whatsapp</p>
                                <p typeof="email"
                                   className="text-textColor mb-3 text-sm font-[500]">01638-674 044</p>
                                <a href="whatsapp:https://wa.me/qr/6LFR2HVRCSNMA1"
                                    className=" text-textColor text-[14px] font-[500] relative"
                                    onMouseEnter={showArrow}
                                    onMouseLeave={hideArrow}
                                >
                                    Write Me
                                    <span
                                        className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                </a>

                            </div>
                            <div id="card3"
                                 className="bg-white w-[95%] rounded-lg shadow-sm py-3 mb-3 flex flex-col items-center justify-center">
                                <FaFacebookMessenger className="text-titleColor text-4xl mb-2" />
                                <p className="text-titleColor font-xl font-[500] mb-0.5">Messenger</p>
                                <p typeof="email"
                                   className="text-textColor mb-3 text-sm font-[500]">shahadathossain.linkon.5</p>
                                <a href="https://m.me/shahadathossain.linkon.5?hash=AbbcXrK4kh9zafid&source=qr_link_share"
                                    className=" text-textColor text-[14px] font-[500] relative"
                                    onMouseEnter={showArrow}
                                    onMouseLeave={hideArrow}
                                >
                                    Write Me
                                    <span
                                        className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                </a>

                            </div>

                        </div>
                        <div id="contact-form" className="flex flex-col w-[80%]  space-y-5 md:basis-[40%] items-center justify-center">
                               <ContactForm/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMain;
