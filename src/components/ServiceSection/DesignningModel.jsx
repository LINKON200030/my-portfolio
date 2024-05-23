import React from 'react';
import {CiCircleCheck} from "react-icons/ci";

const DesignningModel = () => {
    return (
        <div className="container w-full mx-auto h-full flex flex-col justify-center items-center">
            <div id="title" className="flex w-[85%] flex-col items-center justify-center mt-16">
                <h1 className="text-xl text-titleColor font-semibold">Web Design</h1>
                <p className="text-textColor text-sm justify-center text-center w-[80%] mt-4 font-[500] opacity-[.7]">
                  Designing and creating a beatiful and user-friendly website is my passion. With 80+ satisfied clients, I can ensure that we will build a mind-blowing website together.
                </p>
            </div>
            <div id="services-card" className="my-8">
                <ul className="flex flex-col">
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> I design website using react js
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Ensured highly dynamic.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Using next js.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Highly
                        scalable.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Ensured
                        security.
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DesignningModel;
