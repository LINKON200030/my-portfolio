import React from 'react';
import {CiCircleCheck} from "react-icons/ci";

const DevelopmentModel = () => {
    return (
        <div className="container w-full mx-auto h-full flex flex-col justify-center items-center">
          <div id="title" className="flex w-[85%] flex-col items-center justify-center mt-16">
              <h1 className="text-xl text-titleColor font-semibold">Web Development</h1>
              <p className="text-textColor text-sm justify-center text-center w-[80%] mt-4 font-[500] opacity-[.7]">
                  Services with more than 2 years of experience. Providing quality works to the
                  clients and companies.
              </p>
          </div>
            <div id="services-card" className="my-8">
                <ul className="flex flex-col">
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> I develop
                        mern stack application.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Ensured high
                        performance.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/>  Easy understanding code.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Highly scalable.
                    </li>
                    <li className="flex items-center my-2 text-textColor font-[500]">
                        <CiCircleCheck className="mr-2 inline-block text-titleColor text-2xl font-bold "/> Ensured web security.
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DevelopmentModel;
