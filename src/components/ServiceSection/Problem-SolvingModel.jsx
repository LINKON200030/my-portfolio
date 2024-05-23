import React from 'react';
import {CiCircleCheck} from "react-icons/ci";

const ProblemSolvingModel = () => {
    return (
        <div className="container w-full mx-auto h-full flex flex-col justify-center items-center">
            <div id="title" className="flex w-[85%] flex-col items-center justify-center mt-16">
                <h1 className="text-xl text-titleColor font-semibold">Solving Web-related Problems</h1>
                <p className="text-textColor text-sm justify-center text-center w-[80%] mt-4 font-[500] opacity-[.7]">
                    Are you facing any problem in your web application? Then, No tension. I am here to solve your problem.
                </p>
            </div>
            <div id="services-card" className="my-8">
                <ul className="flex flex-col">
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/>
                        Analyzing the problem.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Ensured solve the problem permanently.

                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Any re-building is always available.

                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Ensured your satisfaction.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Ensured web
                        security.
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default ProblemSolvingModel;
