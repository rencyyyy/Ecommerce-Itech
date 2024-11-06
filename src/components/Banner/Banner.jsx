import React from 'react';

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
        <div className="container">
            <div style={{backgroundColor: data.bgColor}} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
                {/* First Column */}
                <div className="p-6 sm:p-8">
                    <p data-aos="slide-right" data-aos-delay="0" className="text-2xl">{data.discount}</p>
                    <h1 data-aos="zoom-out" data-aos-delay="0" className="uppercase text-4xl lg:text-8xl font-bold">{" "}{data.title}</h1>
                    <p data-aos="fade-up" data-aos-delay="0" className="text-3xl">{data.date}</p>
                </div>
                {/* Second Column */}
                <div data-aos="zoom-in" data-aos-delay="400" className="h-full flex items-center">
                    <img src={data.image} alt="" className="scale-125 w-[250px] md:w-[420px] mx-auto drop-shadow-2xl object-cover" />
                </div>
                {/* Third Column */}
                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                    <p data-aos="zoom-out" data-aos-delay="200" className="font-bold text-2xl">{data.title2}</p>
                    <p data-aos="fade-up" data-aos-delay="200" className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
                    <p data-aos="fade-up" data-aos-delay="200"className="text-sm tracking-wide leading-5">{data.description}</p>
                    <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
                        <button style={{color: data.bgColor}} className="bg-white py-2 px-4 rounded-full">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;