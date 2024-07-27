import Header from "./utils/Header";
import Footer from "./utils/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Activities from "./components/Activities";
import EnquireUs from "./components/EnquireUs";
import MapLocation from "./utils/MapLocation";
import RegistrationPage from "./components/Registration&Admission";
import PaymentsPage from "./components/Payments";
// import "./App.css";

function App() {
  return (
    <>
    <div className="mx-auto w-full">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<EnquireUs />} />
        <Route
          path="/registration_&_admissions"
          element={<RegistrationPage />}
        />
        {/* <Route path="/location" element={<MapLocation />} /> */}
        <Route path="/payments" element={<PaymentsPage />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
