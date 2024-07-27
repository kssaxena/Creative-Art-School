import { Link } from "react-router-dom";
// import OnlineForm from "./OnlineForm";
import Contact_EnquiryForm from "../utils/ContactEnquiryForm";
import { motion } from "framer-motion";

const RegistrationPage = () => {
  return (
    <div
      id="registration_&_admissions"
      className="pt-28 lg:pb-28 pb-10 bg-[#E3E5D8]"
    >
      <section
        className={` flex w-full flex-col justify-center items-center lg:flex-row`}
      >
        <div className="lg:w-1/2 w-full flex flex-col justify-evenly items-center ">
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:text-2xl text-sm w-full flex lg:p-10 justify-evenly items-center  text-center m-5 lg:m-0 "
          >
            Both online or offline mode for Admission are accepted.
            <br></br>The links for Online or Offline mode are provided below.
          </motion.h1>
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:text-2xl text-sm w-full flex lg:p-10 justify-evenly items-center  text-center m-5 lg:m-0"
          >
            Still left with any query ?<br></br>Please let us know, by filling
            out the following fields
          </motion.h1>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="lg:text-2xl bg-[#365244] text-white w-3/4 m-2 rounded-2xl flex lg:p-7 p-4 border-[#365244] shadow-sm shadow-black justify-evenly items-center border"
          >
            Register Online
            <Link
              to={`https://docs.google.com/forms/d/e/1FAIpQLSdhzJhync5fSJfchdQuH5MgoVeOJjWbM16V02mH6xbeiZnRxQ/viewform`}
              className={`lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light flex justify-center items-center text-center`}
            >
              Registration Form
            </Link>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-xs w-3/4 text-center"
          >
            *Above link is for online application, click on Registration and it
            will redirect to a external link
          </motion.p>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:text-2xl bg-[#365244] text-white w-3/4 m-2 rounded-2xl flex lg:p-7 p-4 border-[#365244] shadow-sm shadow-black justify-evenly items-center border"
          >
            Download Form
            <Link
              to={`https://docs.google.com/forms/d/e/1FAIpQLSdhzJhync5fSJfchdQuH5MgoVeOJjWbM16V02mH6xbeiZnRxQ/viewform`}
              className={`lg:px-6 lg:py-2 px-2 py-1 rounded-full backdrop-blur-lg bg-[#0B1D24] lg:text-lg text-xs transform hover:-translate-y-1 transition duration-400 text-white font-light flex justify-center items-center text-center`}
            >
              Download
            </Link>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs w-3/4 text-center"
          >
            *Above link is for offline application, download and fill the form,
            and submit it.
          </motion.p>
        </div>
        <div className=" lg:w-1/2 lg:p-8 flex flex-col items-center pt-6 w-3/4  ">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="w-full text-center lg:text-2xl font-semibold"
          >
            Feel free to enquire here,
          </motion.h1>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full"
          >
            <Contact_EnquiryForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
