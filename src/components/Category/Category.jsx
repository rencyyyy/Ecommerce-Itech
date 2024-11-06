import React from 'react';
import image1 from "../../assets/category/acerpredator.png";
import image2 from "../../assets/category/delllaptop.png";
import image3 from "../../assets/category/Laptop.png";
import Button from '../Shared/Button';
const Category = () => {
  return (
    <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* First Column */}
                <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/50 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-gray-400">Explore</p>
                            <p className="text-2xl font-semibold mb-[2px]">About</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-20">ACER</p>
                            <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"} />
                        </div>
                    </div>
                    <img src={image1} alt="" className="w-[320px] absolute bottom-0" />
                </div>
                {/* Second Column */}
                <div className="py-10 pl-5 bg-gradient-to-br from-brandskyBlue to-brandPurple/70 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-gray-400">Explore</p>
                            <p className="text-2xl font-semibold mb-[2px]">About</p>
                            <p className="text-4xl xl:text-5xl text-brandNavyBlue font-bold opacity-20">DELL</p>
                            <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandskyBlue"} />
                        </div>
                    </div>
                    <img src={image2} alt="" className="w-[320px] absolute bottom-0 -left-1" />
                </div>
                {/* Third Column */}
                <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-brandPurple to-brandNavyBlue text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-2xl text-gray-400">Explore</p>
                            <p className="text-5xl font-semibold mb-[2px]">About</p>
                            <p className="text-7xl xl:text-10xl text-brandNavyBlue font-bold opacity-70">APPLE</p>
                            <Button text="Browse" bgColor={"bg-brandWhite"} textColor={"text-brandPurple"} />
                        </div>
                    </div>
                    <img src={image3} alt="" className="w-[500px] absolute top-1/2 -translate-y-1/2 -right-0" />
                </div>
            </div>

        </div>
    </div>
  );
};

export default Category;