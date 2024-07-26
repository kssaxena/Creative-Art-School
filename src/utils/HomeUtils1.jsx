import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Images } from "../AllConstants/Constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeUtils1 = () => {
  const paragraph =
    "Art, like a kaleidoscope, splashes colors across the canvas of our existence. It transcends mere aesthetics; it is the heartbeat of our shared humanity. From the ancient cave paintings that whispered stories of forgotten civilizations to the avant-garde masterpieces that challenge our perceptions, art has been our silent confidante, our mirror, and our muse.";

  return (
    <section className="pt-28  landing_quote_and_image flex p-20 h-full ">
      <div className="w-1/2  flex justify-center items-center">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src={Images[0].url}
          className="w-1/2 rounded-md shadow-md  shadow-black"
        />
      </div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="landing_quote w-1/2 flex flex-col items-center justify-evenly h-full  "
      >
        <h1 className="p-10 text-4xl text-center font-semibold font-mono">
          The Vibrant World of Art: Unlocking Creativity
        </h1>
        <TextGenerateEffect words={paragraph} />
        <div className="flex w-full justify-evenly items-center pt-10">
          <Link
            to="registration_&_admissions"
            className="px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24] text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light "
          >
            <h1>Admission Form</h1>
          </Link>
          <h1 className="text-lg">or</h1>
          <Link
            to="/contact"
            className="px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24] text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light"
          >
            <h1>Contact Us</h1>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeUtils1;
