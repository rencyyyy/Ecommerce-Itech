import React from 'react';
//Images
import brand1 from "../../assets/brand/Dell-Logo.png";
import brand2 from "../../assets/brand/lenovo.png";
import brand3 from "../../assets/brand/acer.png";
import brand4 from "../../assets/brand/asus2.png";
import brand5 from "../../assets/brand/razer.png";
import brand6 from "../../assets/brand/apple.png";
import brand7 from "../../assets/brand/samsung.png";
import brand8 from "../../assets/brand/hp2.png";

const Partners = () => {
  return (
    <div data-aos="zoom-out" data-aos-delay="400" className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
        <div className="container">
            <div className="grid grid-cols-8 gap-3 place-items-center opacity-90">
                <img src={brand1} alt="brand" className="w-[120px] dark:invert"/>
                <img src={brand2} alt="brand" className="w-[120px] dark:invert" />
                <img src={brand3} alt="brand" className="w-[120px] dark:invert" />
                <img src={brand4} alt="brand" className="w-[120px] dark:invert" />
                <img src={brand5} alt="brand" className="w-[120px] dark:invert" />
                <img src={brand6} alt="brand" className="w-[120px] dark:invert" />
                <img src={brand7} alt="brand" className="w-[120px] dark:invert" />
                <img src={brand8} alt="brand" className="w-[120px] dark:invert" />
            </div>
        </div>
    </div>
  );
};

export default Partners;