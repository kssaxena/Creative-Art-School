// import { ChevronDown } from "lucide-react";
import ImageSliderArtExhibition from "./ui/ImageSlider_1";
import ImageSliderArtExamination from "./ui/ImageSlider_2";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const Activities = () => {
  const courses = [
    "Fundamental Drawing",
    "Free hand Drawing",
    "Perspective Drawing",
    "Light and Shadow",
    "Pencil shading",
    "Elements of arts",
    "Texture in arts",
    "Colour Theory",
    "Light & shadow",
    "Dimensions of arts",
    "Perspectives",
    "Line variations",
    "Still Life",
    "Outdoor Project",
    "Colour pencil",
    "Portrait making",
    "Flora and fauna",
    "Landscape painting",
    "Realistic figure art",
    "Creative figure art",
    "Still life artwork",
    "Modern landscapes",
    "Modern figurative painting",
    "Creative figure painting",
    "Contemporary art",
    "Outdoor Colouring",
    "Water Colour",
    "Flora and fauna",
    "Landscape painting",
    "Still life Painting",
    "Portrait making",
    "Composition",
    "Outdoor Painting",
    "Project",
    "Anatomy",
    "Figure in action",
    "Head study",
    "Full figure study",
    "Proportion & Features Theory",
    "Oil Painting",
    "Flora and fauna",
    "Landscape painting",
    "Still life Painting",
    "Portrait making",
    "Composition",
    "Outdoor Painting",
    "Acrylic Painting",
    "Knife Painting",
  ];

  const CourseBanner = () => {
    const controls = useAnimation();
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (!isPaused) {
        controls.start({
          x: ["0%", "-100%"], // Moves content left
          transition: { repeat: Infinity, ease: "linear", duration: 50 }, // Adjust speed
        });
      } else {
        controls.stop();
      }
    }, [isPaused, controls]);

    return (
      <div className="h-fit bg-transparent pt-24 hidden lg:flex flex-col items-center justify-center w-screen">
        <h1 className="text-3xl font-bold mb-6">Courses we offer</h1>
        <div
          className="w-full overflow-hidden whitespace-nowrap shadow-md rounded-lg p-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={scrollRef}
            animate={controls}
            className="flex gap-8 overflow-hidden items-center"
            style={{ display: "flex", minWidth: "200%" }} // Ensures looping effect
          >
            {/* Duplicate courses to ensure smooth looping */}
            {[...courses, ...courses].map((course, index) => (
              <span
                key={index}
                className="text-lg font-medium text-white px-4 py-2 bg-[#0A1D24] rounded-md inline-block"
              >
                {course}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };

  const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="lg:hidden flex justify-center items-center h-fit pt-32">
        {/* Button to Open Popup */}

        <button
          onClick={() => setIsOpen(true)}
          className={`lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light  flex justify-center items-center text-center`}
        >
          Tap to view courses
        </button>

        {/* Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl flex justify-start items-start w-screen z-50 h-screen flex-col overscroll-auto">
            {/* Close Button */}

            <div className="p-6 rounded-lg shadow-lg w-full overflow-y-scroll">
              <h2 className="text-xl font-bold mb-4 flex items-center justify-around">
                Click to enroll on our Courses
                <span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className=" bg-red-600 text-white rounded-lg hover:bg-red-700 transition px-2 py-1"
                  >
                    <X />
                  </button>
                </span>{" "}
              </h2>
              <ul className="list-decimal pl-5 text-white">
                {courses.map((course, index) => (
                  <li key={index} className="px-2 text-xs">
                    <Link
                      to={"/registration_&_admissions"}
                      className="text-base"
                    >
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4">and many more...</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#E3E5D8]">
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
      <CourseBanner />
      <Popup />
      {/* <BannerSlider/> */}
      <section
        className={`art_exhibition flex flex-col justify-center items-center   `}
      >
        <motion.section
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`image_sliding_area w-full  lg:px-10`}
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
          to={"/registration_&_admissions"}
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
