import React from 'react';
import about from "@/assets/images/about.jpg";
import {FiAward} from "react-icons/fi";
import {PiShoppingBagOpenLight} from "react-icons/pi";
import {FaHeadset} from "react-icons/fa";
import {Button} from "@/components/ui/button.jsx";
import {IoDocumentTextOutline} from "react-icons/io5";
import {TbSticker} from "react-icons/tb";
import {BiBadgeCheck} from "react-icons/bi";

const SkillsMain = () => {
    return (
        <div id="skills" className="body my-20 w-full h-auto md:h-[86vh] scroll-smooth">
            <div className="container w-11/12 md:w-9/12 mx-auto h-full flex  justify-center ">
                <div className="flex flex-col">
                    <div id="skill-title" className="flex flex-col items-center justify-center mt-1">
                        <h1 className="text-4xl text-titleColor font-semibold ">Skills</h1>
                        <p className="text-textColor font-[500] ">
                            My Technical Level
                        </p>
                    </div>

                    <div id="skill-card" className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 justify-between items-center mt-10">
                        <div id="skill-box-1"
                             className=" bg-white rounded-lg shadow-md px-12 py-6 flex flex-col items-center justify-center ">
                            <h5 className="text-lg text-titleColor font-[500] mb-8">Frontend developer</h5>
                            <div className="flex justify-between items-center gap-x-24">
                                <ul className="flex flex-col gap-y-3 ">
                                    <li className="text-titleColor flex flex-col justify-start text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">HTML</span>
                                                <span className="text-textColor text-[12px] font-[500]">Advanced</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">CSS</span>
                                                <span className="text-textColor text-[12px] font-[500]">Advanced</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">JavaScript</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">Git</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>

                                </ul>
                                <ul className="flex flex-col gap-y-3">
                                    <li className="text-titleColor flex flex-col justify-start text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">Bootstrap</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">Tailwind</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">React</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">Next</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="skill-box-2"
                             className=" bg-white rounded-lg shadow-md px-12 py-6 flex flex-col items-center justify-center ">
                            <h5 className="text-lg text-titleColor font-[500] mb-8">Backend developer</h5>
                            <div className="flex justify-between items-center gap-x-24">
                                <ul className="flex flex-col gap-y-3 ">
                                    <li className="text-titleColor flex flex-col justify-start text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">ExpressJS</span>
                                                <span className="text-textColor text-[12px] font-[500]">Advanced</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">APIRoutes</span>
                                                <span className="text-textColor text-[12px] font-[500]">Advanced</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">JavaScript</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">Vercel</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>

                                </ul>
                                <ul className="flex flex-col gap-y-3">
                                    <li className="text-titleColor flex flex-col justify-start text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">NodeJS</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">MongoDB</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">React</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                    <li className="text-titleColor text-md font-[500]">
                                        <div className="flex justify-start ">
                                            <div id="emoji" className="mr-2">
                                                <BiBadgeCheck  className="text-2xl text-black mt-1" />
                                            </div>
                                            <div id="skill-name" className="flex flex-col">
                                                <span className="text-black text-lg font-[500]">Next</span>
                                                <span
                                                    className="text-textColor text-[12px] font-[500]">Intermediate</span>
                                            </div>


                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SkillsMain;
