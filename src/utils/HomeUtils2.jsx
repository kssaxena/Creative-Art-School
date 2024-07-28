import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Images } from "../AllConstants/Constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeUtils2 = () => {
  const paragraph =
    " Embark on a visual journey at Creatives School of Arts. Our curated collection showcases a diverse range of paintings, from captivating landscapes to thought-provoking abstracts. Whether you're a seasoned collector or simply seeking artistic inspiration, lose yourself in the vibrant colors, intricate brushstrokes, and captivating stories whispered from each canvas.";

  return (
    <section className="landing_quote_and_image flex p-10 lg:p-20 bg-[#365244]  h-full w-full ">
      <div className="flex flex-wrap lg:gap-0 justify-center w-full gap-10">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2  flex justify-center items-center"
        >
          <img
            src={Images[1].url}
            className="w-1/2 rounded-md shadow-md  shadow-black"
          />
        </motion.div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="landing_quote w-3/4 flex flex-col items-center justify-evenly h-full lg:w-full lg:items-center gap-3"
          >
            <h1 className="lg:text-4xl  text-center font-semibold font-mono lg:p-10 mt-5 lg:mt-0 text-white ">
              Where Imagination comes alive
            </h1>
            <div className=" lg:w-full text-white select-none">
              <TextGenerateEffect words={paragraph} />
            </div>
            <Link
              to="/gallery"
              className="lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light  flex justify-center items-center text-center"
            >
              <h1>Gallery</h1>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeUtils2;
