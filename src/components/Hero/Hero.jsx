import React from 'react';
import Slider from "react-slick";
import Image1 from "../../assets/hero/hero-predator.png"; 
import Image3 from "../../assets/hero/hero-rog-strix.png";
import Image2 from "../../assets/hero/hero-omen.png";

import Button from '../Shared/Button';

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "LEVEL-UP!",
    title: "ACER",
    title2: "PREDATOR",
    // description: "Amp up your entire Windows 10 Pro gaming experience with the slick and sporty new ROG Strix G15 Advantage Edition. Double up on AMD firepower with up to a powerful AMD Ryzen™ 9 5900HX CPU and Radeon™ RX 6800M GPU.",
  },
  {
    id: 2,
    img: Image3,
    subtitle: "GRIND-MORE!",
    title: "ASUS-ROG",
    title2: "STRIX",
    // description: "Focused firepower in the ROG Strix G15 streamlines and elevates the core Windows 10 Pro gaming experience.",
  },
  {
    id: 3,
    img: Image2,
    subtitle: "GEAR-UP!",
    title: "H-Packard",
    title2: "OMEN",
    // description: "AMD SmartShift and Smart Access Memory tech help the processors work better together to boost performance in a range of tasks. Enjoy esports speed with a display up to 300Hz/3ms, or immerse yourself in a WQHD 165Hz/3ms panel, with FreeSync Premium enabling ultrasmooth gameplay on both.",
  },
  
]
const Hero = ({ handleOrderPopup}) => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // speed: 500,
    speed: 800,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplayspeed: 400,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
        {/* sm:min-h[750px] */}
        <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            {/* Hero Section */}
            <Slider {...settings}>
              {
                HeroData.map((data) => (
                  <div key={data.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      {/* Text Content Section */}
                      <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-2xl sm:text-2xl lg:text-2x1 font-bold">{data.subtitle}</h1>
                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-4xl lg:text-6xl font-bold">{data.title}</h1>
                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-2x1 uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>
                        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300">
                          <Button text="Shop By Category" bgColor="bg-primary" textColor="text-white" handler={handleOrderPopup}/>
                        </div>
                      </div>
                      {/* Image Section */}
                      <div className="order-1 sm:order-2"> 
                        <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                          {/* Default size W = 300 H = 300 sm:w = 450 sm:h = 450 */}
                          <img src={data.img} alt="" className="w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"/>
                        </div>
                      </div>
                    </div>     
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
    </div>
  );
};

export default Hero