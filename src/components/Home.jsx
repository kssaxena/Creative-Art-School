import HomeUtils1 from "../utils/HomeUtils1";
import HomeUtils2 from "../utils/HomeUtils2";
import MapLocation from "../utils/MapLocation";

const Home = () => {
  return (
    <div className=" bg-[#E3E5D8]">
      <section className="landing_photo_Paragraph">
        <HomeUtils1 />
      </section>
      <section className="home_gallery_photo_Paragraph">
        <HomeUtils2 />
      </section>
      <section className="home_map_location ">
        <MapLocation />
      </section>
    </div>
  );
};

export default Home;
