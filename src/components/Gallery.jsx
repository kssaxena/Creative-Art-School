import { Link } from "react-router-dom";
import { InfiniteProductSlider } from "./ui/infinite-moving-cards";
import { ProductDetails1 } from "../AllConstants/Constants";
import React from "react";
import ReactPlayer from "react-player";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { AllImagePopup } from "../utils/PopUps";

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [showAllImages, setShowImages] = useState(false);

  return (
    <section className={`flex flex-col pt-28 bg-[#365244] `}>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className={`picture_gallery_1 flex justify-center items-center lg:mb-10 p-10 lg:p-0 lg:w-full `}
      >
        <InfiniteProductSlider
          items={ProductDetails1}
          direction="right"
          speed="slow"
        />
      </motion.section>
      {showAllImages && <AllImagePopup onClose={() => setShowImages(false)} />}
      <section className="w-full flex items-center justify-center ">
        <button
          onClick={() => setShowImages(true)}
          className="lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light justify-center items-center text-center hidden lg:block"
        >
          {" "}
          View All
        </button>
      </section>
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex lg:mb-10"
      >
        <Carousel
          responsive={responsive}
          className="p-5 z-10 w-full flex m-2  "
        >
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-10">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/Z23eKhyKU8U?si=s_oSVbVCPXGCxDtJ"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-10">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/HrfXsc2AepY?si=TzlgGYYIp_W57iO9"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-10">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/gWMoT3vNQ4E?si=UPpSIqkbTK0IqIE7"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-10">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/Ka1vkzDOymM?si=rinAY5OheqMoOo0u"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-10">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/b4ky1Se4OjM?si=aUAeWw4SVNN2D2k2"
              }
            />
          </div>
          <div className="h-80 w-80 00 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-10">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/rm3F2CaVGes?si=A31f4PrEiJ_s0KmK"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-10">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/-NxLwloECKo?si=e542w8PC7xmXqrxZ"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-10">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/ah3XmXkfef0?si=X4Vd2cKsHkWkOpn_"
              }
            />
          </div>
        </Carousel>
      </motion.section>
      <section
        className={`w-full flex flex-col justify-center items-center pb-10 lg:pb-28`}
      >
        <Link
          to={"/registration_&_admissions"}
          className={`lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light  flex justify-center items-center text-center`}
        >
          Admissions Open
        </Link>
      </section>
    </section>
  );
};

export default Gallery;
