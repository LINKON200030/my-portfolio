import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Reviews from '../../utility/Recomendition.js';
import {Check, Star} from "lucide-react";

const TestimonialCard = () => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full h-[200px]"
        >
            <CarouselContent>
                {Reviews.map((review, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                        <div className="sm:p-1 w-full h-[280px] space-x-3">
                            <Card className="w-full h-full">
                                <CardContent className="flex aspect-square items-center justify-center md:p-6">
                                    <div id="review01" className="w-full flex flex-col ">
                                        <div className="flex gap-0.5">
                                            <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                            <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                            <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                            <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                            <Star className="w-4 h-4 text-green-700 fill-green-700"/>
                                        </div>
                                        <div className="w-full mt-4 text-justify">
                                            <p className="text-sm leading-6 text-gray-500 ">
                                                {review.comment}
                                            </p>
                                        </div>
                                        <div id="review-img" className="flex gap-4 items-center mt-8 ">
                                            <img src={review.image} alt="User"
                                                 className="w-10 h-10 rounded-full border-2 ring-2 ring-slate-100 dark:border-gray-800"/>
                                            <span className="text-sm gap-1 font-medium text-gray-900">
                                    <span className="font-medium">{review.name}</span>
                                   <span className="flex gap-1.5 items-center text-left text-zinc-700 text-sm">
                                         <Check className="w-4 h-4 shink-0 text-green-600"/>
                                    verified customer
                                   </span>
                                </span>
                                        </div>


                                    </div>

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    );
};

export default TestimonialCard;
