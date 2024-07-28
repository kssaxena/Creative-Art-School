// import { ChevronDown } from "lucide-react";
import ImageSliderArtExhibition from "./ui/ImageSlider_1";
import ImageSliderArtExamination from "./ui/ImageSlider_2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Activities = () => {
  return (
    <div className="bg-[#E3E5D8]">
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

      <section
        className={`art_exhibition flex flex-col justify-center items-center   `}
      >
        <motion.section
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`image_sliding_area w-full pt-20 lg:px-10`}
        >
          <ImageSliderArtExhibition />
        </motion.section>
        <div
          className={`w-full flex justify-center items-center p-5 flex-col `}
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className={`lg:text-6xl font-mono font-bold  text-center text-lg `}
          >
            Art Exhibition
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`text-center mt-5 lg:text-lg text-sm max-w-full p-4 tracking-wider drop-shadow-lg shadow-black font-light w-full`}
          >
            A buzz of anticipation fills the air as patrons stream towards the
            grand opening of a new exhibition. Inside, the gallery gleams with
            carefully positioned spotlights highlighting a diverse array of
            works. Paintings in vibrant hues and thought-provoking sculptures
            pique curiosity, while interactive installations beckon for
            exploration. This exhibition promises a journey through the artist's
            vision, inviting viewers to engage, contemplate, and discover the
            beauty and intrigue within each piece.
          </motion.p>
        </div>
      </section>
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={` w-full flex flex-col justify-center items-center`}
      >
        <Link
          to={"registration_&_admissions"}
          className={`lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light  flex justify-center items-center text-center`}
        >
          Admissions Open
        </Link>
      </motion.section>
      <section className={`art_exhibition flex flex-col lg:p-20 `}>
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`image_sliding_area w-full`}
        >
          <ImageSliderArtExamination />
        </motion.section>
        <div className={`w-full flex justify-center items-center p-5 flex-col`}>
          <h1
            className={`lg:text-6xl font-mono font-bold  text-center text-lg`}
          >
            Art Examination
          </h1>
          <p
            className={`text-center mt-5 lg:text-lg text-sm max-w-full p-4 tracking-wider drop-shadow-lg shadow-black font-light w-full`}
          >
            In this artwork title, artist name explores the concept of concept
            through medium. The descriptive detail about composition or
            technique draws the viewer's eye to focal point, where specific
            detail about the focal point and its significance. The use of color
            palette or specific material evokes a sense of emotion or feeling,
            while another element adds a layer of complexity or symbolism. This
            piece invites a deeper examination of concept by prompting viewers
            to consider question or interpretation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Activities;
