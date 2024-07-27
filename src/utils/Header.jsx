import { Link } from "react-router-dom";
// import Button from "./Button";
import { HomeIcon, MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import { CreativeSchoolArtLogo } from "../assets/Index";
import { useState } from "react";
import { NavbarPopUp } from "./PopUps";

const Header = () => {
  const [showNavBarPopUp, setShowNavBar] = useState(false);

  return (
    <div className="border-b border-black shadow-sm flex justify-evenly items-center p-2 w-[100%] h-20 drop-shadow-xl shadow-black fixed z-50 backdrop-blur-md">
      <div>
        <button
          className="lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light justify-center items-center text-center lg:hidden"
          onClick={() => setShowNavBar(true)}
        >
          <MenuIcon />
        </button>
      </div>
      <div className={`text-black w-[33.33%] hidden lg:block`}>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="flex justify-center items-center "
        >
          <Link
            // onClick={handleClick}
            to={"/"}
            className={`mx-2  px-4 font-medium text-lg hover:scale-110 hover:font-medium transition duration-150 ease-in-out hover:underline underline-offset-4 hover:decoration-[#0B1D24]  ${
              location.pathname === "/"
                ? "underline decoration-[#0B1D24] decoration-2 underline-offset-4"
                : ""
            }`}
          >
            <HomeIcon />
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
        </motion.nav>
      </div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="w-[33.33%] justify-evenly items-center flex"
      >
        <img src={CreativeSchoolArtLogo} className="w-16 h-w-16 rounded-full" />
        <Link
          to={`/`}
          className="  text-black font-semibold text-xl  hidden lg:block"
        >
          Creatives School of Arts
        </Link>
      </motion.div>
      <div className="justify-center items-center flex">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-fit h-full  hidden lg:block "
        >
          <Link
            to={"registration_&_admissions"}
            className={`lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light  flex justify-center items-center text-center `}
          >
            Admission
          </Link>
        </motion.div>
      </div>

      {showNavBarPopUp && <NavbarPopUp onClose={() => setShowNavBar(false)} />}
    </div>
  );
};

export default Header;
