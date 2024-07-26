// import Images from "./Images";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Grid from "../assets/grid.png";
// import { MapPinnedIcon } from "lucide-react";

const MapLocation = () => {
  return (
    <section className="home_about_photo_Paragraph flex bg-[url('./assets/grid.png')] h-96 pt-28">
      <div className="w-1/2 flex justify-center items-center h-full">
        <iframe
          className="h-full w-full p-5 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.7500631282983!2d85.3722337!3d23.397257399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e33fc15cb1db%3A0x764d1c2afc390fdf!2sCREATIVES%20FINE%20ARTS%20SCHOOL!5e0!3m2!1sen!2sin!4v1720435846040!5m2!1sen!2sin"
          width="600"
          height="400"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center flex flex-col w-full justify-center items-center    ">
          Admissions are open<br></br> Apply Online or
          <Link
            to={`https://maps.app.goo.gl/aypgzDLhLNctrVpv9`}
            className="hover:text-blue-500 underline hover:underline m-1 w-fit flex items-center justify-center"
          >
            {" "}
            Click here to Visit us
            <ExternalLink />
          </Link>
        </h1>
        <div className="w-full p-4 justify-evenly items-center flex ">
          <Link
            // onClick={handleClick}
            to={"registration_&_admissions"}
            className={`px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24]  text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light`}
          >
            Online Applications
          </Link>
          <Link
            // onClick={handleClick}
            to={"/contact"}
            className={`px-6 py-2 rounded-full backdrop-blur-lg bg-[#0B1D24]  text-lg transform hover:-translate-y-1 transition duration-400 text-white font-light`}
          >
            Contact for Offline Applications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
