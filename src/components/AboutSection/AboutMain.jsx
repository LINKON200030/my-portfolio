import React, {useRef} from 'react';
import about from '../../assets/images/Linkuu.jpg'
import {FiAward} from "react-icons/fi";
import {PiShoppingBagOpenLight} from "react-icons/pi";
import {FaHeadset} from "react-icons/fa";
import {Button} from "@/components/ui/button.jsx";
import {IoDocumentTextOutline} from "react-icons/io5";

import CV from '../../assets/images/DeveloperLinkonCV.pdf'
const AboutMain = () => {
    const nextSection=useRef(null)

    const handleDownloadCV = () => {
        const fileURL=CV
        const anchor = document.createElement('a');
        anchor.href = fileURL;
        anchor.download = 'DeveloperLinkonCV.pdf';
        anchor.click();

    }


    return (
        <div id="about" className="body w-full  my-20 h-auto md:h-[86vh] scroll-smooth" ref={nextSection} >
            <div className="container md:w-9/12 w-11/12 mx-auto h-full flex  justify-center ">
                <div className="flex flex-col">
                    <div id="about-title" className="flex flex-col items-center justify-center mt-1">
                        <h1 className="text-4xl text-titleColor font-semibold ">About Me</h1>
                        <p className="text-textColor font-[500] ">
                            My Introduction
                        </p>
                    </div>
                    <div id="about-card" className="flex flex-col md:flex-row justify-between mt-8 md:mt-16  ">
                        <div id="about-image" className="w-full basis-[40%]">
                            <img src={about} alt="" className="w-[100%] md:w-[90%] h-[100%] object-cover rounded-xl"/>
                        </div>

                        <div id="about-text" className=" w-full md:basis-[50%]">
                            <div id="box" className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:mt-0 mt-12 w-full justify-between ">
                                <div id="experience-box"
                                     className="bg-white w-full md:basis-[30%]  rounded-lg shadow-md px-6 py-5 flex flex-col items-center justify-center mx-auto ">
                                    <FiAward className="text-titleColor text-2xl mb-3"/>
                                    <p className="text-titleColor font-[600] mb-1">Experience</p>
                                    <p className="text-textColor text-sm font-[500]">2+ Years</p>
                                </div>

                                <div id="project-box"
                                     className="bg-white w-full md:basis-[30%] rounded-lg shadow-md px-6 py-5 flex flex-col items-center justify-center mx-auto ">
                                    <PiShoppingBagOpenLight className="text-titleColor text-2xl mb-3"/>
                                    <p className="text-titleColor font-[600] mb-1">Completed</p>
                                    <p className="text-textColor text-sm font-[500]">12+ Projects</p>
                                </div>
                                <div id="support-box"
                                     className="bg-white w-full md:basis-[30%] rounded-lg shadow-md px-6 py-5 flex flex-col items-center justify-center mx-auto ">
                                    <FaHeadset className="text-titleColor text-2xl mb-3"/>
                                    <p className="text-titleColor font-[600] mb-1">Support</p>
                                    <p className="text-textColor text-sm font-[500]">Online 24/7</p>
                                </div>


                            </div>
                            <div id="about-description" className="mt-9">
                                <p className="text-textColor text-sm text-justify font-[500]">
                                    As a Backend & Frontend Developer, I create websites and solve complex problems with readable code and great user experience.
                                    I have years of experience and many clients are happy with the projects carried out.

                                </p>
                            </div>
                            <Button onClick={handleDownloadCV} className="mt-6 bg-gray-800 text-white font-poppins rounded-xl py-7 px-7">
                                Download CV <IoDocumentTextOutline className="inline-block text-xl ml-2" />
                            </Button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMain;
