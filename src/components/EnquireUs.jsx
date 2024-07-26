import { ChevronDown } from "lucide-react";
import Contact_EnquiryForm from "../utils/ContactEnquiryForm";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { motion } from "framer-motion";
import { ImagesForParallaxScroll } from "../AllConstants/Constants";

const EnquireUs = () => {
  return (
    <div id="contact" className={`flex bg-[#E3E5D8]`}>
      <section className={`part_2 w-1/2 p-20 pt-28`}>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className={`text-4xl w-full pb-10 text-center font-sans font-bold drop-shadow-xl flex items-center justify-evenly`}
        >
          Enquire Here
          <ChevronDown className={`h-10 w-10`} />
        </motion.h1>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Contact_EnquiryForm />
        </motion.div>
      </section>
      <section className="pt-10 drop-shadow-xl">
        <ParallaxScroll images={ImagesForParallaxScroll} />
      </section>
    </div>
  );
};

export default EnquireUs;
