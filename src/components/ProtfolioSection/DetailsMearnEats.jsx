import React from 'react';
import mernEats from "../../assets/images/MernEatsImages/MernEats01.jpg"


const DetailsMearnEats = () => {
    return (
        <div id="ProjectDetails" className="body w-full  scroll-smooth bg-slate-50">
            <div className="container w-full h-auto ">
              <div className="flex flex-col w-full h-auto justify-center  items-center mt-10">
                  <img src={mernEats} alt="mernEats" className="w-full h-[400px] object-left-top  rounded-3xl"/>
              </div>
                <div id="ProjectDetails" className="" >
                    <h2 className="text-2xl text-titleColor mt-8 font-semibold">
                        Project Details

                    </h2>

                </div>

            </div>


            
        </div>
    );
};

export default DetailsMearnEats;
