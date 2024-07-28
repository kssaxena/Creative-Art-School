import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Images } from "../AllConstants/Constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeUtils1 = () => {
  const paragraph =
    "Art, like a kaleidoscope, splashes colors across the canvas of our existence. It transcends mere aesthetics; it is the heartbeat of our shared humanity. From the ancient cave paintings that whispered stories of forgotten civilizations to the avant-garde masterpieces that challenge our perceptions, art has been our silent confidante, our mirror, and our muse.";

  return (
    <section className="lg:pt-28 pt-28 landing_quote_and_image flex lg:p-20 h-full w-full ">
      <div className="flex flex-wrap gap-2 lg:gap-0">
        <div className="lg:w-1/2  flex justify-center items-center">
          <motion.img
            // whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={Images[0].url}
            className="w-1/2 rounded-md shadow-md  shadow-black"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="landing_quote w-3/4 flex flex-col items-center justify-evenly h-full lg:w-full lg:items-center"
          >
            <h1 className="lg:text-4xl  text-center font-semibold font-mono lg:p-10 mt-5 lg:mt-0">
              The Vibrant World of Art: Unlocking Creativity
            </h1>
            <div className=" lg:w-full text-black select-none">
              <TextGenerateEffect words={paragraph} />
            </div>
            <div className="flex flex-col lg:flex-row w-1/2 justify-evenly items-center lg:w-full lg:pt-10 py-5">
              <Link
                to="registration_&_admissions"
                className="lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light  flex justify-center items-center text-center "
              >
                <h1>Admission Form</h1>
              </Link>
              <h1 className="text-lg">or</h1>
              <Link
                to="/contact"
                className="lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light flex justify-center items-center text-center"
              >
                <h1>Contact Us</h1>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeUtils1;
