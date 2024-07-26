import { Link } from "react-router-dom";
// import OnlineForm from "./OnlineForm";
import Contact_EnquiryForm from "../utils/ContactEnquiryForm";
import { motion } from "framer-motion";

const RegistrationPage = () => {
  return (
    <div id="registration_&_admissions" className="pt-28 pb-28 bg-[#E3E5D8]">
      <section className={` flex w-full`}>
        <div className="w-1/2 flex flex-col justify-evenly items-center ">
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl w-full flex p-10 justify-evenly items-center  text-center "
          >
            Both online or offline mode for Admission are accepted.
            <br></br>The links for Online or Offline mode are provided below.
          </motion.h1>
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl w-full flex p-10 justify-evenly items-center  text-center "
          >
            Still left with any query ?<br></br>Please let us know, by filling
            out the following fields
          </motion.h1>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-2xl bg-[#365244] text-white w-3/4 m-2 rounded-2xl flex p-7 border-[#365244] shadow-sm shadow-black justify-evenly items-center border"
          >
            Register Online{" "}
            <Link
              to={`https://docs.google.com/forms/d/e/1FAIpQLSdhzJhync5fSJfchdQuH5MgoVeOJjWbM16V02mH6xbeiZnRxQ/viewform`}
              className={`px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24]  text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light`}
            >
              Registration Form
            </Link>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            *Above link is for online application, click on Registration and it
            will redirect to a external link{" "}
          </motion.p>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl bg-[#365244] text-white w-3/4 m-2 rounded-2xl flex p-7 border-[#365244] shadow-sm shadow-black justify-evenly items-center border"
          >
            Download Form
            <Link
              to={`https://docs.google.com/forms/d/e/1FAIpQLSdhzJhync5fSJfchdQuH5MgoVeOJjWbM16V02mH6xbeiZnRxQ/viewform`}
              className={`px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24]  text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light`}
            >
              Download
            </Link>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            *Above link is for offline application, download and fill the form,
            and submit it.
          </motion.p>
        </div>
        <div className=" w-1/2 p-8 flex flex-col items-center">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="w-full text-center text-2xl font-semibold"
          >
            Feel free to enquire here,
          </motion.h1>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-3/4 "
          >
            <Contact_EnquiryForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
