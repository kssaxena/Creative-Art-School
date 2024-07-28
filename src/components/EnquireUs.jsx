import { ChevronDown, MailCheck, Phone } from "lucide-react";
import Contact_EnquiryForm from "../utils/ContactEnquiryForm";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { motion } from "framer-motion";
import { ImagesForParallaxScroll } from "../AllConstants/Constants";

const EnquireUs = () => {
  return (
    <div
      id="contact"
      className={`flex bg-[#E3E5D8] flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row`}
    >
      <section
        className={`part_2 lg:w-1/2 lg:p-20 lg:pt-28 w-3/4 pt-28 mb-10 lg:mb-0 `}
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className={`lg:text-4xl text-2xl w-full lg:pb-10 p-5 text-center font-sans font-bold drop-shadow-xl flex items-center justify-evenly`}
        >
          Enquire Here
          {/* <ChevronDown className={`lg:h-10 h-5  lg:w-10 w-5 `} /> */}
          <span className="text-xs flex flex-col w-full select-none">
            Or reach us on<br></br>
            <span className="text-blue-500">
              <h1 className="flex justify-center items-center">
                <Phone className="h-5 w-5" />
                +91 87091 12813 , +91 70047 74928
              </h1>
              <h1 className="flex justify-center items-center">
                <MailCheck className="h-5 w-5" /> creativesonlineart@gmail.com
              </h1>
            </span>
          </span>
        </motion.h1>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Contact_EnquiryForm />
        </motion.div>
      </section>

      <section className="pt-10 drop-shadow-xl hidden sm:block">
        <ParallaxScroll images={ImagesForParallaxScroll} />
      </section>
    </div>
  );
};

export default EnquireUs;
