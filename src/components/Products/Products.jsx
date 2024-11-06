import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';


// import images of products
import img1 from "../../assets/product/p1-Acer-Nitro-16.jpg";
import img2 from "../../assets/product/p2-Asus-Strix-16.jpg";
import img3 from "../../assets/product/p3-Lenovo-Legion-5.jpg";
import img4 from "../../assets/product/p4-Razer-Blade-14.jpg";
import img5 from "../../assets/product/p5-MSI-Katana-15.jpg";
import img6 from "../../assets/product/p6-Aorus-16x.jpg";
import img7 from "../../assets/product/p7-Asus-TUF-A15.jpg";
import img8 from "../../assets/product/p8-Acer-Helios-16.jpg";


const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Acer Nitro 16",
        price: "₱71,249.00",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "Asus Strix G16",
        price: "₱119,995.00",
        aosDelay: "200",
    },
    {
        id: 3,
        img: img3,
        title: "Lenovo Legion 5",
        price: "₱96,991.00",
        aosDelay: "400",
    },
    {
        id: 4,
        img: img4,
        title: "Razerblade 14",
        price: "₱140,900.00",
        aosDelay: "600",
    },
]

const ProductsData2 = [
    {
        id: 5,
        img: img5,
        title: "MSI Katana 15",
        price: "₱118,900.00",
        aosDelay: "0",
    },
    {
        id: 6,
        img: img6,
        title: "Aorus 16",
        price: "₱144,995.00",
        aosDelay: "200",
    },
    {
        id: 7,
        img: img7,
        title: "Asus TUF A15",
        price: " ₱71,600.00",
        aosDelay: "400",
    },
    {
        id: 8,
        img: img8,
        title: "Acer Helios 16",
        price: "₱132,999.00",
        aosDelay: "600",
    },
]
    


const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header Section */}
            <Heading title="Our Products" subtitle={"Explore Our Products"}/>
            {/* Body Section */}
            <ProductCard data={ProductsData}/>
            <ProductCard data={ProductsData2}/>
        </div>
    </div>
  )
};

export default Products;