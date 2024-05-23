import React from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {IoSchoolOutline} from "react-icons/io5";
import {TfiBag} from "react-icons/tfi";

const QualificationMain = () => {
    return (
        <div className="body w-full h-[86vh] scroll-smooth">
            <div className="container w-11/12 md:w-9/12 mx-auto h-full flex  justify-center ">
                <div className="flex flex-col">
                    <div id="about-title" className="flex flex-col items-center justify-center mt-1">
                        <h1 className="text-4xl text-titleColor font-semibold ">Qualification</h1>
                        <p className="text-textColor font-[500] mt-2 ">
                            My Personal Journey
                        </p>
                    </div>
                    <div id="qualification-card" className="flex justify-between mt-8  ">
                        <Tabs defaultValue="education" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="education" className="text-black"><IoSchoolOutline className="inline-block mr-3 text-black text-2xl font-bold" />Education</TabsTrigger>
                        <TabsTrigger value="experience" className="text-black"><TfiBag className="inline-block mr-3 text-black text-xl font-bold" />Experience</TabsTrigger>
                        </TabsList>
                            <TabsContent value="education">
                                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8">
                                    <li>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div className="timeline-start flex flex-col justify-start w-full  mr-10">
                                            <div className="text-md font-black text-titleColor">Higher Secondary </div>
                                            <p className="text-textColor text-sm">Bangladesh- Institute</p>
                                            <time className="text-textColor text-sm mt-3" >2020-2022</time>
                                        </div>
                                        <hr/>
                                    </li>
                                    <li>
                                        <hr/>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div className="timeline-end flex flex-col justify-start w-full  ml-10  ">
                                            <div className="text-md font-black text-titleColor">WEB Development Diploma
                                            </div>
                                            <p className="text-textColor text-sm">Ostad- IT</p>
                                            <time className="text-textColor text-sm mt-3">2023</time>
                                        </div>
                                        <hr/>
                                    </li>
                                    <li>
                                        <hr/>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div className="timeline-start flex flex-col justify-start w-full  mr-10">
                                            <div className="text-md font-black text-titleColor">Computer Science</div>
                                            <p className="text-textColor text-sm">Denmark- Institute</p>
                                            <time className="text-textColor text-sm mt-3">2024-Present</time>
                                        </div>

                                    </li>
                                </ul>
                            </TabsContent>
                            <TabsContent value="experience">
                                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8">
                                    <li>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div className="timeline-start flex flex-col justify-start w-full  mr-10">
                                            <div className="text-md font-black text-titleColor">Frontend Developer</div>
                                            <p className="text-textColor text-sm">Bangladesh- Local Market</p>
                                            <time className="text-textColor text-sm mt-3">2021-2022</time>
                                        </div>
                                        <hr/>
                                    </li>
                                    <li>
                                        <hr/>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div className="timeline-end flex flex-col justify-start w-full  ml-10  ">
                                            <div className="text-md font-black text-titleColor">Junior Web Developer
                                            </div>
                                            <p className="text-textColor text-sm">WayOut Solutions</p>
                                            <time className="text-textColor text-sm mt-3">2023</time>
                                        </div>
                                        <hr/>
                                    </li>
                                    <li>
                                        <hr/>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="h-5 w-5">
                                                <path fillRule="evenodd"
                                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <div className="timeline-start flex flex-col justify-start w-full  mr-10">
                                            <div className="text-md font-black text-titleColor">MERN Stack Developer</div>
                                            <p className="text-textColor text-sm">Amar Pay</p>
                                            <time className="text-textColor text-sm mt-3">2024-Present</time>
                                        </div>

                                    </li>
                                </ul>
                            </TabsContent>
                        </Tabs>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default QualificationMain;
