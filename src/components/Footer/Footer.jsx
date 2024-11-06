import React from 'react';

import { FaMapLocation } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterLinks = [
    {
        title: "Home",
        link: "/#home",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const BrandLinks = [
    {
        title: "Dell",
        link: "https://www.dell.com/en-ph",
    },
    {
        title: "Lenovo",
        link: "https://www.lenovo.com/ph/en/d/deals/intel-online-exclusive/?cid=ph%3Asem%3Ahv4o1b&msclkid=5f1e56e0fbfc1c3af7153073d5631944&utm_source=bing&utm_medium=cpc&utm_campaign=CN~PH-23-Q2-SEM-AON_Core-Brand_Bing-CCF_AN~ECOMM_BS~All_SB~MT_SC~ALL_SS~ALL_FF~CH~SEM_OB~SALES_YR~22_MK~PH_CP~8066%23%23&utm_term=lenovo&utm_content=Brand-Core&visibleDatas=8423%3AAll%2520Intel%25C2%25AE%2520Processorshttps://www.lenovo.com/ph/en/pc/?orgRef=https%253A%252F%252Fph.search.yahoo.com%252Fhttps://www.lenovo.com/ph/en/?Redirect=False",
    },
    {
        title: "Acer",
        link: "https://store.acer.com/en-ph/",
    },
    {
        title: "Asus",
        link: "https://www.asus.com/ph/",
    },
    {
        title: "Razer",
        link: "https://www.razer.com/",
    },
    {
        title: "Apple",
        link: "https://www.apple.com/ph/store",
    },
    {
        title: "Samsung",
        link: "https://www.samsung.com/ph/",
    },
    {
        title: "HP",
        link: "https://www.hp.com/ph-en/home.html",
    },
]
    


const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* Web Details */}
                <div className="py-8 px-4">
                    <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                        Ignite<span className="text-secondary semibold tracking-widest text-2xl upper-case sm:text-3xl">Tech</span>
                    </a>
                    <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
                        Welcome to IgniteTech, our mission is to provide you with the best gaming hardware to enhance your gaming experience, whether you're a casual gamer or a competitive esports player.
                    </p>
                    <p className="text-gray-500 mt-4">
                        Made with 💛 by Rency Celestino
                    </p>
                    <a href="#" target="_blank" className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full">Check my Portfolio</a>
                </div>

                {/* Footer Links */}
                <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">

                    {/* Brand Links */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold sm:text-left mb-3">Explore Affiliate Brands</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-3 list-none">
                                {BrandLinks.slice(0, 4).map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} target="_blank" className="text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300">{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3 list-none -mx-5">
                                {BrandLinks.slice(4).map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} target="_blank" className="text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300">{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
                        <ul className="space-y-3">
                            {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white duration-300">{data.title}</a>
                                    </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* My Info */}
                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className="text-xl font-bold sm:text-left mb-3">My Info</h1>
                        <div className="space-y-3">
                            <div className="flex item-center gap-3">
                                <FaMapLocation className="text-Map" />
                                <p>Mariveles, Bataan | Philippines</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMobile/>
                                <p>+63 9813082969 | <span className="text-primary">Smart</span></p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMobile/>
                                <p>+63 9560418689 | <span className="text-secondary">Globe</span></p>
                            </div>
                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <a href="https://www.instagram.com/rncydlssnts020/" target="_blank"><FaInstagram className="text-3xl hover:text-Instagram duration-200" /></a>
                                <a href="https://www.facebook.com/profile.php?id=61562348847431" target="_blank"><FaFacebook className="text-3xl hover:text-Facebook duration-200" /></a>
                                <a href="https://www.linkedin.com/in/rencyd/" target="_blank"><FaLinkedin className="text-3xl hover:text-LinkedIn duration-200" /></a>
                                <a href="" target="_blank"><FaSquareXTwitter className="text-3xl hover:text-X2 dark:hover:text-X duration-200" /></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;