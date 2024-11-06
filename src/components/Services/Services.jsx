import React from 'react';
import {
    FaTruck,
    FaLaptop,
    FaCreditCard,
    FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaTruck className="text-4xl md:text-5xl text-primary" />,
        title: "Free Shipping",
        description: "Free Shipping In All Order",
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
        title: "Safe Money",
        description: "Item Safety & Quality Guaranteed",
    },
    {
        id: 3,
        icon: <FaCreditCard className="text-4xl md:text-5xl text-primary" />,
        title: "Payment",
        description: "All Payment Secured",
    },
    {
        id: 4,
        icon: <FaLaptop className="text-4xl md:text-5xl text-primary" />,
        title: "Support",
        description: "Available 24/7 for Technical Assistance",
    },
];

const Services = () => {
  return <div>
    <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
            {ServiceData.map((data) => (
                <div data-aos="zoom-out" data-aos-offset="200" className="flex flex-col items-start sm:flex-row gap-4">
                    {data.icon}
                    <div>
                        <h1 className="lg:text-xl font-bold">{data.title}</h1>
                        <h1 className="text-gray-400 text-sm">{data.description}</h1>
                    </div>
                </div>
            ))}
                
        </div>
    </div>
  </div>;
};

export default Services;