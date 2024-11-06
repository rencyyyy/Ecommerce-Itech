import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { ImCart } from "react-icons/im";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import ResponsiveMenu from './ResponsiveMenu';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blog",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },
]

const Navbar = ({handleOrderPopup}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
  return (
    <>
    <div className="bg-brandWhite dark:bg-gray-900 dark:text-white duration-200 relative-z40">
        {/* Default py-4 */}
        <div className="py-4 relative z-50">
            <div className="container flex justify-between items-center">
                {/* Logo and links section */}
                <div className="flex items-center gap-4">
                    <a href="#" className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl">Ignite<span className="text-secondary semibold tracking-widest text-2xl sm:text-3xl">Tech</span></a>
                    {/* Menu items */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-4">
                            {
                                MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">{" "}{data.name}</a>
                                    </li>
                                ))
                            }
                            {/* Dropdown links */}
                            <li className="relative cursor-pointer group">
                                <a href="#" className="flex item-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white">
                                    Quick Links
                                    <span>
                                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                    </span>
                                </a>
                                {/* Dropdown Links */}
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                                    <ul className="space-y-2">
                                        {
                                            DropdownLinks.map((data,index) => (
                                                <li>
                                                    <a className="text-gray-500 hover:text-primary dark:hover:text-primary duration-200 inline-block w-full p-2 dark:hover:text-primary hover:bg-secondary/20 rounded-md" href={data.link}>{data.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Navbar right section */}
                <div className="flex justify-between items-center gap-4">

                    {/* Search Bar Section */}
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="Search" className="search-bar bg-brandWhite hover:bg-white"/> <ImSearch className="text-xl text-gray-600 group-hover:text-secondary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"/>
                    </div>
                    {/* Order-button Section */}
                    <button className="relative p-3" onClick={handleOrderPopup}>
                        <ImCart className="text-xl text-gray-600 dark:text-gray-400" />
                        <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                            4
                        </div>
                    </button>
                    {/* Dark Mode Section */}
                    <div>
                        <DarkMode />
                    </div>
                    {/* Hamburger Menu Section */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            <HiMiniSquares2X2 className="text-xl text-primary dark:text-secondary" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Mobile Menu Section */}
    <ResponsiveMenu showMenu={showMenu}/>
    
    </>
  );
};

export default Navbar;