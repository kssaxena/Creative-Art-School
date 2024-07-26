import { Link } from "react-router-dom";
import { InfiniteProductSlider } from "./ui/infinite-moving-cards";
import { ProductDetails1 } from "../AllConstants/Constants";
import React from "react";
import ReactPlayer from "react-player";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="gallery" className={`flex flex-col pt-28 bg-[#365244]`}>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className={`picture_gallery_1 flex justify-center items-center mb-10 `}
      >
        <InfiniteProductSlider
          items={ProductDetails1}
          direction="right"
          speed="slow"
        />
      </motion.section>
      <section
        className={`w-full flex flex-col justify-center items-center mb-10`}
      >
        <Link
          to={"/registration_&_admissions"}
          className={`px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24]  text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light`}
        >
          Admissions Open
        </Link>
      </section>
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex mb-10"
      >
        <Carousel
          responsive={responsive}
          className="p-5 z-10 w-full flex m-2  "
        >
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-2">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/Z23eKhyKU8U?si=s_oSVbVCPXGCxDtJ"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-2">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/HrfXsc2AepY?si=TzlgGYYIp_W57iO9"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-2">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/gWMoT3vNQ4E?si=UPpSIqkbTK0IqIE7"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-2">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/Ka1vkzDOymM?si=rinAY5OheqMoOo0u"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-2">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/b4ky1Se4OjM?si=aUAeWw4SVNN2D2k2"
              }
            />
          </div>
          <div className="h-80 w-80 00 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-2">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/rm3F2CaVGes?si=A31f4PrEiJ_s0KmK"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-2">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/-NxLwloECKo?si=e542w8PC7xmXqrxZ"
              }
            />
          </div>
          <div className="h-80 w-80 py-9 overflow-hidden bg-center bg-cover flex justify-center items-center rounded-xl m-2">
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/ah3XmXkfef0?si=X4Vd2cKsHkWkOpn_"
              }
            />
          </div>
        </Carousel>
      </motion.section>
      <section
        className={`w-full flex flex-col justify-center items-center pb-28`}
      >
        <Link
          to={"/registration_&_admissions"}
          className={`px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24]  text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light`}
        >
          Admissions Open
        </Link>
      </section>
    </section>
  );
};

export default Gallery;
