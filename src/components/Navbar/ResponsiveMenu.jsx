import React from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { GrShop } from "react-icons/gr";
import { GrInfo } from "react-icons/gr";
import { GrBlog } from "react-icons/gr";

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "top-20 opacity-100" : "top-[-100%] opacity-0"} h-auto w-full bg-white/40 dark:bg-gray dark:text-white duration-200 backdrop-blur-md fixed top-0 z-40 rounded-2xl`}>
        <nav className="my-10 text-xl font-semibold text-center text-gray-600 dark:text-black">
            <ul className="space-y-10">
                <li>
                    <a href="#" className="flex items-center justify-center space-x-2 hover:text-gray-900 dark:hover:text-white"><GrHomeRounded className="text-secondary dark:text-primary"/><span> Home</span></a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center space-x-2 hover:text-gray-900 dark:hover:text-white"><GrShop className="text-secondary dark:text-primary"/> <span> Shop</span></a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center space-x-2 hover:text-gray-900 dark:hover:text-white"><GrInfo className="text-secondary dark:text-primary"/> <span> About</span></a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center space-x-2 hover:text-gray-900 dark:hover:text-white"><GrBlog className="text-secondary dark:text-primary"/><span> Blog</span></a>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default ResponsiveMenu;