import React from 'react';
import image1 from "../../assets/category/hplaptop.png";
import image2 from "../../assets/category/lenovolaptop.png";
import image3 from "../../assets/category/razerlaptop.png";
import Button from '../Shared/Button';
const Category = () => {
  return (
    <div className="py-0">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* First Column */}
                <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/90 to-brandskyBlue/40 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-2xl text-gray-400">Explore</p>
                            <p className="text-5xl font-semibold mb-[2px]">About</p>
                            <p className="text-7xl xl:text-10xl text-brandNavyBlue font-bold opacity-70">H-Packard</p>
                            <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"} />
                        </div>
                    </div>
                    <img src={image1} alt="" className="w-[320px] absolute top-1/2 -translate-y-1/2 right-4" />
                </div>
                {/* Second Column */}
                <div className="py-10 pl-5 bg-gradient-to-br from-primary/90 to-white/80 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-brandNavyBlue/30">Explore</p>
                            <p className="text-2xl text-white font-semibold mb-[2px]">About</p>
                            <p className="text-4xl text-gray-900 xl:text-5xl font-bold opacity-20">Lenovo</p>
                            <Button text="Browse" bgColor={"bg-brandWhite"} textColor={"text-primary"} />
                        </div>
                    </div>
                    <img src={image2} alt="" className="w-[250px] absolute bottom-0 top-9 right-3" />
                </div>
                {/* Third Column */}
                <div className="py-10 pl-5 bg-gradient-to-br from-brandNavyBlue to-black text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-gray-400">Explore</p>
                            <p className="text-2xl font-semibold mb-[2px]">About</p>
                            <p className="text-4xl xl:text-5xl text-brandPurple font-bold opacity-20">RAZER</p>
                            <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandNavyBlue"} />
                        </div>
                    </div>
                    <img src={image3} alt="" className="w-[380px] absolute top-0 -left-1" />
                </div>        
            </div>

        </div>
    </div>
  );
};

export default Category;