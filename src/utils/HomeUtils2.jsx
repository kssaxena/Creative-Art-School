import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Images } from "../AllConstants/Constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeUtils2 = () => {
  const paragraph =
    " Embark on a visual journey at Creatives School of Arts. Our curated collection showcases a diverse range of paintings, from captivating landscapes to thought-provoking abstracts. Whether you're a seasoned collector or simply seeking artistic inspiration, lose yourself in the vibrant colors, intricate brushstrokes, and captivating stories whispered from each canvas.";

  return (
    <section className="landing_quote_and_image flex p-20 bg-[#365244] ">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="landing_quote w-1/2 flex flex-col justify-evenly items-center "
      >
        <h1 className="p-10 text-4xl text-center text-white font-semibold font-mono drop-shadow-2xl shadow-black  ">
          Where Imagination comes alive
        </h1>
        <TextGenerateEffect words={paragraph} className="text-black" />

        <Link
          to="/gallery"
          className=" px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24] text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light"
        >
          <h1>Gallery</h1>
        </Link>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-1/2  flex justify-center items-center"
      >
        <img
          src={Images[1].url}
          className="w-1/2 rounded-md shadow-md  shadow-black"
        />
      </motion.div>
    </section>
  );
};

export default HomeUtils2;
