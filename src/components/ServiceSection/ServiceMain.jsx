import React from 'react';
import {Link} from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import DevelopmentModal from "@/components/ServiceSection/DevelopmentModel.jsx";
import DesignningModel from "@/components/ServiceSection/DesignningModel.jsx";
import {BiCodeAlt, BiEdit, BiLogoReact, BiRightArrowAlt} from "react-icons/bi";
import ProblemSolvingModel from "@/components/ServiceSection/Problem-SolvingModel.jsx";

const ServiceMain = () => {

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
        <div id="services" className="body w-full h-auto my-20  md:h-[86vh] scroll-smooth">
            <div className="container w-11/12 md:w-9/12 mx-auto h-full flex  justify-center ">
                <div className="flex flex-col w-full">
                    <div id="about-title" className="flex flex-col items-center justify-center mt-1">
                        <h1 className="text-4xl text-titleColor font-semibold ">Services</h1>
                        <p className="text-textColor font-[500] ">
                            What I Offer??
                        </p>
                    </div>
                    <div id="service-card" className="flex  flex-col md:flex-row  items-center justify-between space-y-10 md:space-y-0 md:space-x-14 mx-auto  mt-16 w-[80%] md:w-full  ">
                        <div id="service-box-1"
                             className="flex w-full flex-col bg-white rounded-lg  pt-24 shadow-md pb-8 pl-9 pr-20  ">
                            <div>
                                <BiCodeAlt className="text-4xl text-titleColorColor"/>
                                <h1 className="text-xl text-titleColor font-semibold mt-6">Web <br/><span>
                                 Development
                            </span></h1>
                                <Dialog className="w-full h-full">
                                    <DialogTrigger asChild>
                                        <button
                                            className="mt-3 text-textColor text-[14px] font-[500] relative"
                                            onMouseEnter={showArrow}
                                            onMouseLeave={hideArrow}
                                        >
                                            View More
                                            <span
                                                className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-white">
                                   <DevelopmentModal/>
                                    </DialogContent>
                                </Dialog>

                            </div>


                        </div>
                        <div id="service-box-2"
                             className="flex w-full flex-col bg-white rounded-lg  pt-24 shadow-md pb-8 pl-9 pr-28  ">
                            <div>
                                <BiLogoReact className="text-4xl text-titleColorColor"/>
                                <h1 className="text-xl text-titleColor font-semibold mt-6">Web <br/><span>
                                 Designer
                            </span></h1>
                                <Dialog className="w-full h-full">
                                    <DialogTrigger asChild>
                                        <button
                                            className="mt-3 text-textColor text-[14px] font-[500] relative"
                                            onMouseEnter={showArrow}
                                            onMouseLeave={hideArrow}
                                        >
                                            View More
                                            <span
                                                className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-white">
                                        <DesignningModel/>
                                    </DialogContent>
                                </Dialog>
                            </div>


                        </div>
                        <div id="service-box-3"
                             className="flex w-full flex-col bg-white rounded-lg  pt-24 shadow-md pb-8 pl-9 pr-28  ">
                            <div>
                                <BiEdit className="text-4xl text-titleColorColor"/>
                                <h1 className="text-xl text-titleColor font-semibold mt-6">Problem <br/><span>
                                 Fixing
                            </span></h1>
                                <Dialog className="w-full h-full">
                                    <DialogTrigger asChild>
                                        <button
                                            className="mt-3 text-textColor text-[14px] font-[500] relative"
                                            onMouseEnter={showArrow}
                                            onMouseLeave={hideArrow}
                                        >
                                            View More
                                            <span
                                                className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-white">
                                       <ProblemSolvingModel/>
                                    </DialogContent>
                                </Dialog>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceMain;
