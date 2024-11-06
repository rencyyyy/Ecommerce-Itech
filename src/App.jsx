import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import extrabanner from "./assets/banner/banner-extra.png";
import razerbanner from "./assets/banner/banner-razerblade.png";
import Products from "./components/Products/Products";
import Banner2 from "./components/Banner/Banner2";
import Blog from "./components/Blog/Blog";
import Partners from "./components/Partners/Partners.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";


const BannerData = {
  discount: "40% OFF",
  title: "Aspire Series",
  date: "29 June to 16 July",
  image: extrabanner,
  title2: "Acer Aspire 5",
  title3: "Rainy Deals",
  description: "Don't miss out on these limited-time offers to grab the perfect laptop for all your needs. Hurry, before the storm of deals passes!",
  bgColor: "#ffb100",
}

const BannerData2 = {
  discount: "30% OFF",
  title: "RAZER",
  date: "17 July to 25 Aug",
  image: razerbanner,
  title2: "Razorblade 15",
  title3: "Rainy Deals",
  description: "Don't miss out on these limited-time offers to grab the perfect laptop for all your needs. Hurry, before the storm of deals passes!",
  bgColor: "#a51215",
}

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, []);

  return (
    <div className="bg-brandWhite dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup = {handleOrderPopup} />
      <Hero handleOrderPopup = {handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner2 data2={BannerData2} />
      <Blog />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;