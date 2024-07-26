import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Footer = () => {
  const FooterElements1 = [
    { id: "0", title: "Home", url: "/" },
    { id: "1", title: "Gallery", url: "/gallery" },
    { id: "2", title: "Activities", url: "/activities" },
    { id: "3", title: "Enquiry", url: "/contact" },
    { id: "4", title: "Contact Us", url: "/contact" },
  ];
  const FooterElements2 = [
    { id: "0", title: "Register", url: "/registration_&_admissions" },
    {
      id: "1",
      title: "Admission Form",
      url: `https://www.youtube.com/watch?v=mWRsgZuwf_8&list=RDeoA2NtjeJUM&index=25`,
    },
    { id: "2", title: "Location", url: "/location" },
    { id: "3", title: "Fees / Payments", url: "/payments" },
    // { id: "4", title: "Contact Us", url: "/contact" },
  ];

  return (
    <div class="relative h-full w-full bg-slate-950">
      <div className=" w-[100%] text-white flex justify-evenly">
        <div class="absolute bottom-0 left-0 right-0 top-0 "></div>
        <div className="flex flex-col p-10 ml-10 items-center justify-center z-50">
          <Link to="/" className="text-neutral-300 text-3xl font-medium">
            Creatives School
          </Link>
          <Link to="/" className="text-neutral-300 text-2xl">
            Of Arts
          </Link>
          <h1>Copyright @CreativesSchoolofArt</h1>
        </div>
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col text-white p-10 z-50`}
        >
          {FooterElements1.map((index) => (
            <Link
              to={index.url}
              className="text-white m-1 flex w-fit cursor-pointer hover:underline ease-in-out duration-200 text-sm"
              key={index}
            >
              {index.title}
            </Link>
          ))}
        </motion.section>
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col text-white p-10 z-50`}
        >
          {FooterElements2.map((index) => (
            <Link
              to={index.url}
              className="text-white m-1 flex w-fit cursor-pointer hover:underline ease-in-out duration-200 text-sm"
              key={index}
            >
              {index.title}
            </Link>
          ))}
        </motion.section>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-7 z-50"
        >
          <Link
            to={`https://www.instagram.com/mr_saxena007?igsh=a3I5MWVveXBzb2Iw`}
            className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
          >
            <FiInstagram className="text-2xl text-red-500" />
          </Link>
          <Link
            to={`https://www.facebook.com/profile.php?id=100006677474839&mibextid=ZbWKwL`}
            className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
          >
            <FaFacebookF className="text-2xl text-cyan-500" />
          </Link>
          <Link
            to={`https://www.linkedin.com/in/kshitij-saxena-16baa5261/`}
            className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
          >
            <FaLinkedinIn className="text-2xl text-blue-500" />
          </Link>
          <Link
            to={`https://www.youtube.com/@CreativesArtchool`}
            className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
          >
            <FaYoutube className="text-2xl text-red-500" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
