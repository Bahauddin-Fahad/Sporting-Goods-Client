import Address from "./Address";
import Staffs from "./Staffs";
import "./aboutUs.css";
import Contact from "./Contact";
import Header from "./Header";
import Qualities from "./Qualities";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return (
    <div className="max-w-6xl mx-auto text-white space-y-20">
      <Header />
      <Qualities />
      <Contact />
      <Staffs />
      <Address />
    </div>
  );
};

export default AboutUs;
