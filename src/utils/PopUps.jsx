import { X } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { ParallaxScroll } from "./ui/parallax-scroll";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import { ImagesForParallaxScroll } from "../AllConstants/Constants";
// import { ImagesForParallaxScroll } from "../AllConstants/Constants";


const AllImagePopup = ({ onClose }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 flex z-50 top-[0vh] w-full backdrop-blur-3xl rounded-xl  h-screen "
    >
      <div className="flex flex-col w-full items-center justify-around bg-[#020617]">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} className="text-white" />
        </button>
        <section className="pt-10 drop-shadow-xl hidden sm:block">
          <ParallaxScroll images={ImagesForParallaxScroll} />
        </section>
      </div>
    </motion.div>
  );
};
const NavbarPopUp = ({ onClose }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 flex z-50 top-[0vh] w-full backdrop-blur-3xl rounded-xl  h-screen "
    >
      <div className="flex flex-col w-1/2 items-center justify-around bg-[#020617]">
        <button className="place-self-end" onClick={onClose}>
          <X size={30} className="text-white" />
        </button>
        <div className={`text-white  h-full flex justify-evenly items-center `}>
          <nav className="flex justify-evenly items-center flex-col  h-3/4">
            <Link
              //   onClick={onclose}
              to={"/"}
              className={`mx-2  px-4 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#0B1D24]  ${
                location.pathname === "/"
                  ? "underline decoration-[#0B1D24] decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              // onClick={handleClick}
              to={"/gallery"}
              className={`mx-2 border-black border-b-0 border-t-0 border-r-0 px-4 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#0B1D24] border   ${
                location.pathname === "/gallery"
                  ? "underline decoration-[#0B1D24] decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              Gallery
            </Link>
            <Link
              // onClick={handleClick}
              to={"/activities"}
              className={`mx-2 border-black border-b-0 border-t-0 border-r-0 px-4 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#0B1D24]  border  ${
                location.pathname === "/activities"
                  ? "underline decoration-[#0B1D24] decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              Activities
            </Link>
            <Link
              // onClick={handleClick}
              to={"/contact"}
              className={`mx-2 border-black border-b-0 border-t-0 border-r-0 px-4 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#0B1D24]  border  ${
                location.pathname === "/contact"
                  ? "underline decoration-[#0B1D24] decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              Enquire Us
            </Link>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export { NavbarPopUp, AllImagePopup };
