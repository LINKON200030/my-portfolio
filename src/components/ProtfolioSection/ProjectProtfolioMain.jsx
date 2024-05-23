import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {BiRightArrowAlt} from "react-icons/bi";
import travelworld from "../../assets/images/TravelWoldImages/Travelworld3.jpg";
import MernEats from "../../assets/images/MernEatsImages/MernEats01.jpg";
import PlainB from "../../assets/images/PlainBImages/01.jpg";
import Portfolio from "../../assets/images/Portfolio/1.jpg"


const ProjectProtfolioMain = () => {
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
        <div id="portfolio" className="body w-full h-auto scroll-smooth mb-16">
            <div className="container  w-11/12 md:w-9/12 mx-auto h-full flex  justify-center ">
                <div className="flex flex-col w-full mx-16">
                    <div id="protfolio-title" className="flex flex-col items-center justify-center mt-1">
                        <h1 className="text-4xl text-titleColor font-semibold ">Portfolio</h1>
                        <p className="text-textColor font-[500] ">
                            Most Recent Work
                        </p>
                    </div>
                    <div id="protfolio-cardSection" className="flex  flex-col space-y-8 w-full justify-between mt-16  ">
                        <div className="flex md:flex-row flex-col md:space-y-0 space-y-8 w-full justify-between ">
                            <div id="protfolio-card1" className="md:basis-[45%] w-full ">
                                <div className="card w-full bg-base-100 shadow-xl">
                                    <figure className="px-8 pt-7">
                                        <img src={MernEats}
                                             alt="MernEats" className="rounded-xl"/>
                                    </figure>
                                    <div className="card-body   justify-start">
                                        <h2 className="card-title">MernEats</h2>
                                        <p className="text-textColor text-sm ">A reliable food delivery service</p>
                                        <Link to="/project/mearneats">
                                            <button

                                                className="mt-3 text-textColor text-[14px] font-[500] relative"
                                                onMouseEnter={showArrow}
                                                onMouseLeave={hideArrow}
                                            >
                                                Demo
                                                <span
                                                    className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div id="protfolio-card2" className="md:basis-[45%] w-full  ">
                                <div className="card w-full bg-base-100 shadow-xl">
                                    <figure className="px-8 pt-7 ">
                                        <img src={travelworld}
                                             alt="TravelWorld" className="rounded-xl"/>
                                    </figure>
                                    <div className="card-body  justify-start">
                                        <h2 className="card-title">TravelWorld</h2>
                                        <p className="text-textColor text-sm ">A website for travel companies</p>
                                        <button
                                            className="mt-3 text-textColor text-[14px] font-[500] relative"
                                            onMouseEnter={showArrow}
                                            onMouseLeave={hideArrow}
                                        >
                                            Demo
                                            <span
                                                className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-y-0 space-y-8 w-full justify-between  ">
                            <div id="protfolio-card3" className="md:basis-[45%] w-full  ">
                                <div className="card w-full bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={PlainB}
                                             alt="PlainB Ecommerce" className="rounded-xl"/>
                                    </figure>
                                    <div className="card-body  justify-start">
                                        <h2 className="card-title">PlainB Ecommerce</h2>
                                        <p className="text-textColor text-sm ">Complete Ecommerce website</p>
                                        <button
                                            className="mt-3 text-textColor text-[14px] font-[500] relative"
                                            onMouseEnter={showArrow}
                                            onMouseLeave={hideArrow}
                                        >
                                            Demo
                                            <span
                                                className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div id="protfolio-card4" className="md:basis-[45%] w-full  ">
                                <div className="card w-full bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={Portfolio}
                                             alt="Shoes" className="rounded-xl"/>
                                    </figure>
                                    <div className="card-body  justify-start">
                                        <h2 className="card-title">Personal Portfolio</h2>
                                        <p className="text-textColor text-sm ">Create your own personal portfolio</p>
                                        <button
                                            className="mt-3 text-textColor text-[14px] font-[500] relative"
                                            onMouseEnter={showArrow}
                                            onMouseLeave={hideArrow}
                                        >
                                            Demo
                                            <span
                                                className="arrowIcon hidden opacity-0 transition duration-700 ease-in-out">
                                        <BiRightArrowAlt className="inline-block text-lg text-textColor"/>
                                    </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectProtfolioMain;
