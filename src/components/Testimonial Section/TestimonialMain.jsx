import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

import aboutImage from '../../assets/images/about.jpg';
import TestimonialCard from "@/components/Testimonial Section/TestimonialCard.jsx";

const TestimonialMain = () => {
    return (
        <div id="testimonials" className="body w-full h-[86vh] scroll-smooth">
            <div className="container w-9/12 mx-auto  flex justify-center">
                <div className="flex flex-col items-center w-full">
                    <div id="about-title" className="flex flex-col items-center justify-center mt-1">
                        <h1 className="text-4xl text-titleColor font-semibold">Testimonial</h1>
                        <p className="text-textColor font-[500] mt-2 text-sm">
                            What My Clients Are Saying
                        </p>
                    </div>
                    <div id="testimonial-card" className="flex w-full h-full items-center justify-between mt-16">
                       <div className="w-full h-full">
                           <TestimonialCard/>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialMain;
